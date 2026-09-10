import apiClient from "./client";

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  department: string;
  profileImageUrl: string | null;
  staffId: string;
  role: string;
  registrationOtp: string | null;
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string;
  accounts: unknown[];
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    expiresIn: number;
    user: AuthUser;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ResetPasswordStartCredentials {
  email: string;
}

export async function login(credentials: LoginCredentials) {
  const response = await apiClient.post<LoginResponse>(
    "/api/v1/Auth/login",
    credentials,
  );

  return response.data;
}

interface ResetPasswordStartResponse {
  success: boolean;
  message: string;
}

export async function startPasswordReset(
  credentials: ResetPasswordStartCredentials,
) {
  const response = await apiClient.post<ResetPasswordStartResponse>(
    "/api/v1/Auth/reset-password-start",
    credentials,
  );

  return response.data;
}

export interface SetPasswordCredentials {
  token: string;
  password: string;
  confirmPassword: string;
}

interface SetPasswordResponse {
  success: boolean;
  message: string;
}

interface CurrentUserResponse {
  success?: boolean;
  message?: string;
  data?: AuthUser;
}

export async function setPassword(credentials: SetPasswordCredentials) {
  const response = await apiClient.post<SetPasswordResponse>(
    "/api/v1/Auth/set-password",
    credentials,
  );

  return response.data;
}

export async function getCurrentUser() {
  const response = await apiClient.get<CurrentUserResponse>("/api/v1/Auth/me");

  if (response.data.success === false || !response.data.data) {
    throw new Error(response.data.message || "Unable to load your profile.");
  }

  return response.data.data;
}
