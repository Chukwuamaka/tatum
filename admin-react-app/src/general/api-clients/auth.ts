import { postRequest } from ".";

interface LoginRequestData {
  email: string;
  password: string;
}

export function initiateLogin(loginData: LoginRequestData) {
  return postRequest("/Auth/login", loginData);
}

interface SetPasswordRequestData {
  token: string;
  password: string;
  confirmPassword: string;
}

export function initiateSetPassword(setPasswordData: SetPasswordRequestData) {
  return postRequest("/Auth/set-password", setPasswordData);
}
