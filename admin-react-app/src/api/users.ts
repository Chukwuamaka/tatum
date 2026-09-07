import apiClient from "./client";

export interface ApiUser {
  id: string;
  staffId: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

interface UsersResponse {
  success?: boolean;
  message?: string;
  data?: unknown;
}

export interface InviteUserCredentials {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: "Admin" | "SuperAdmin";
  department: string | null;
}

export interface UpdateProfileCredentials {
  firstName: string;
  lastName: string;
  phone: string;
  department: string;
  profileImageUrl?: string | null;
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : {};
}

function getString(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return "-";
}

function getItems(data: unknown): unknown[] {
  if (Array.isArray(data)) return data;
  const record = asRecord(data);
  const items = record.items ?? record.results ?? record.data;
  return Array.isArray(items) ? items : [];
}

function getTotal(data: unknown): number {
  const record = asRecord(data);
  const total = record.totalCount;
  return typeof total === "number" ? total : 0;
}

function normalizeUser(value: unknown): ApiUser {
  const user = asRecord(value);
  const fullName = getString(user, "name", "fullName");
  const composedName = [
    getString(user, "firstName"),
    getString(user, "lastName"),
  ]
    .filter((part) => part !== "-")
    .join(" ");

  return {
    id: getString(user, "id"),
    staffId: getString(user, "staffId"),
    name: fullName !== "-" ? fullName : composedName || "-",
    email: getString(user, "email"),
    role: getString(user, "role"),
    status: getString(user, "status", "isActive"),
    lastLogin: getString(user, "lastLoginAt", "lastLogin"),
  };
}

export async function getUsers(pageNumber: number, pageSize: number) {
  const response = await apiClient.get<UsersResponse>("/api/v1/Users", {
    params: { PageNumber: pageNumber, PageSize: pageSize },
  });

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to load users.");
  }

  return {
    items: getItems(response.data.data).map(normalizeUser),
    total: getTotal(response.data.data),
  };
}

export async function inviteUser(credentials: InviteUserCredentials) {
  const response = await apiClient.post<UsersResponse>(
    "/api/v1/Auth/admin/invite",
    credentials,
  );

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to send invitation.");
  }

  return response.data;
}

export async function updateProfile(credentials: UpdateProfileCredentials) {
  const response = await apiClient.put<UsersResponse>(
    "/api/v1/Users/profile",
    credentials,
  );

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to update your profile.");
  }

  return response.data;
}
