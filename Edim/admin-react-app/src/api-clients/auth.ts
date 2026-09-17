import { getRequestWithAuth, postRequest } from ".";
interface UsersListResponse {
  success: boolean;
  message: string;
  data?: {
    items: AuthUser[];
    totalCount: number;
  };
}

export interface InviteAdminRequestData {
  email: string;
  firstName: string;
  phone: string;
  department: string;
}

interface InviteAdminResponse {
  success: boolean;
  message: string;
  data?: AuthUser;
}

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

interface LoginRequestData {
  email: string;
  password: string;
}

export async function initiateLogin(
  loginData: LoginRequestData,
): Promise<LoginResponse> {
  const response = await postRequest("/Auth/login", loginData);
  const responseData = await response.json();
  return responseData;
}

interface SetPasswordRequestData {
  token: string;
  password: string;
  confirmPassword: string;
}

interface SetPasswordResponse {
  success: boolean;
  message: string;
}

export async function initiateSetPassword(
  setPasswordData: SetPasswordRequestData,
): Promise<SetPasswordResponse> {
  const response = await postRequest("/Auth/set-password", setPasswordData);
  const responseData = await response.json();
  return responseData;
}

interface CurrentUserResponse {
  success?: boolean;
  message?: string;
  data?: AuthUser;
}

export async function getMyProfileDetails(): Promise<CurrentUserResponse> {
  const response = await getRequestWithAuth("/Auth/me");
  const responseData = await response.json();
  return responseData;
}

export async function getAllUsers(): Promise<UsersListResponse> {
  const response = await getRequestWithAuth("/Users");
  const responseData = await response.json();
  return responseData;
}

export async function initiateAdminInvite(
  inviteData: InviteAdminRequestData,
): Promise<InviteAdminResponse> {
  const response = await postRequest("/auth/admin/invite", inviteData);
  const responseData = await response.json();
  return responseData;
}
