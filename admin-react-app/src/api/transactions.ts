import apiClient from "./client";

export interface ApiTransaction {
  id: string;
  date: string;
  phone: string;
  network: string;
  amount: string;
  status: string;
  customer: string;
}

interface TransactionsResponse {
  success?: boolean;
  message?: string;
  data?: unknown;
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : {};
}

function getString(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
    if (typeof value === "number") {
      return String(value);
    }
  }

  return "-";
}

function getItems(data: unknown): unknown[] {
  if (Array.isArray(data)) {
    return data;
  }

  const record = asRecord(data);
  const items = record.items ?? record.results ?? record.data;
  return Array.isArray(items) ? items : [];
}

function getTotal(data: unknown): number {
  const record = asRecord(data);
  const total =
    record.totalCount ?? record.totalItems ?? record.total ?? record.count;
  return typeof total === "number" ? total : 0;
}

function normalizeTransaction(value: unknown): ApiTransaction {
  const transaction = asRecord(value);
  const customer = asRecord(transaction.customer);
  const biller = asRecord(transaction.biller);
  const product = asRecord(transaction.product);

  return {
    id: getString(transaction, "transactionId", "reference", "id"),
    date: getString(transaction, "createdAt", "transactionDate", "date"),
    phone: getString(transaction, "phoneNumber", "phone", "mobileNumber"),
    network:
      getString(transaction, "network", "networkName", "billerName") === "-"
        ? getString(biller, "name")
        : getString(transaction, "network", "networkName", "billerName"),
    amount: getString(transaction, "amount", "totalAmount"),
    status: getString(transaction, "status"),
    customer:
      getString(transaction, "customerName", "fullName") !== "-"
        ? getString(transaction, "customerName", "fullName")
        : [getString(customer, "firstName"), getString(customer, "lastName")]
            .filter((part) => part !== "-")
            .join(" ") || getString(product, "name"),
  };
}

export async function getTransactions(pageNumber: number, pageSize: number) {
  const response = await apiClient.get<TransactionsResponse>(
    "/api/v1/transactions",
    { params: { PageNumber: pageNumber, PageSize: pageSize } },
  );

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to load transactions.");
  }

  return {
    items: getItems(response.data.data).map(normalizeTransaction),
    total: getTotal(response.data.data),
  };
}

export async function getTransactionsByUserId(userId: string) {
  const response = await apiClient.get<TransactionsResponse>(
    "/api/v1/transactions",
    { params: { UserId: userId } },
  );

  if (response.data.success === false) {
    throw new Error(
      response.data.message || "Unable to load customer transactions.",
    );
  }

  return getItems(response.data.data).map(normalizeTransaction);
}
