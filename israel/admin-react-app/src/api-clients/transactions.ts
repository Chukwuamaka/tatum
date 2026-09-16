import { getRequestWithAuth } from ".";

export interface TransactionData {
  id: string;
  userId: string;
  userName: string;
  accountId: string;
  accountNumber: string;
  billerId: string;
  billerName: string;
  billerCode: string;
  productId: string;
  productName: string;
  productCategory: string;
  productItemId: string | null;
  productItemName: string | null;
  amount: number;
  status: string;
  reference: string;
  description: string | null;
  createdAt: string;
  completedAt: string | null;
}

interface TransactionsResponse {
  success?: boolean;
  message?: string;
  data?: {
    items: TransactionData[];
  };
}

export async function getMyTransactions(): Promise<TransactionsResponse> {
  const response = await getRequestWithAuth("/transactions");
  const responseData = await response.json();
  return responseData;
}

export async function getMyTransactionsDetails(transactionId: string): Promise<TransactionsResponse> {
  const response = await getRequestWithAuth(`/transactions?TransactionId=${transactionId}`);
  const responseData = await response.json();
  return responseData;
}