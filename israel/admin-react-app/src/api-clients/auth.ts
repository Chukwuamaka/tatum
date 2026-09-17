import { getRequestWithAuth, postRequest } from ".";

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
