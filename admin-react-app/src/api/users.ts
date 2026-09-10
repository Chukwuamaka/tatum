import apiClient from "./client";

export interface ApiUser {
  id: string;
  staffId: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  status: string;
  lastLogin: string;
  createdAt: string;
  profileImageUrl: string;
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
    firstName: getString(user, "firstName"),
    lastName: getString(user, "lastName"),
    email: getString(user, "email"),
    phone: getString(user, "phone", "phoneNumber"),
    department: getString(user, "department"),
    role: getString(user, "role"),
    status: getString(user, "status", "isActive"),
    lastLogin: getString(user, "lastLoginAt", "lastLogin"),
    createdAt: getString(user, "createdAt", "dateCreated"),
    profileImageUrl: getString(user, "profileImageUrl"),
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

export async function getUserById(userId: string) {
  const response = await apiClient.get<UsersResponse>("/api/v1/users", {
    params: { UserId: userId },
  });

  if (response.data.success === false) {
    throw new Error(response.data.message || "Unable to load user details.");
  }

  const responseData = (response.data.data as Record<string, unknown>)?.items;
  const data = asRecord(responseData);
  const user = asRecord(
    Array.isArray(responseData)
      ? responseData[0]
      : (data.user ?? data.data ?? responseData),
  );

  if (Object.keys(user).length === 0) {
    throw new Error("User details were not returned.");
  }

  return normalizeUser(user);
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
