import apiClient from "./client";

export interface AccountRecord {
  id: string;
  customerId: string;
  customerName: string;
  phone: string;
  email: string;
  kycStatus: string;
  createdAt: string;
}

interface AccountsResponse {
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

function normalizeAccount(value: unknown): AccountRecord {
  const account = asRecord(value);
  const customer = asRecord(account.customer);

  return {
    id: getString(account, "accountNumber", "id"),
    customerId:
      getString(account, "customerId") === "-"
        ? getString(customer, "id")
        : getString(account, "customerId"),
    customerName:
      getString(account, "customerName", "fullName", "name") !== "-"
        ? getString(account, "customerName", "fullName", "name")
        : [getString(customer, "firstName"), getString(customer, "lastName")]
            .filter((part) => part !== "-")
            .join(" ") || "-",
    phone:
      getString(account, "phone", "phoneNumber") !== "-"
        ? getString(account, "phone", "phoneNumber")
        : getString(customer, "phone", "phoneNumber"),
    email:
      getString(account, "email") !== "-"
        ? getString(account, "email")
        : getString(customer, "email"),
    kycStatus: getString(account, "kycStatus", "status"),
    createdAt: getString(account, "createdAt", "dateCreated"),
  };
}

export async function getAccounts(pageNumber: number, pageSize: number) {
  const response = await apiClient.get<AccountsResponse>("/api/v1/Accounts", {
    params: { PageNumber: pageNumber, PageSize: pageSize },
  });

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to load customers.");
  }

  return getItems(response.data.data).map(normalizeAccount);
}
