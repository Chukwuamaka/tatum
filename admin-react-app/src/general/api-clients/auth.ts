import { postRequest } from ".";

interface LoginRequestData extends Record<string, string> {
  email: string;
  password: string;
}

export function login(loginData: LoginRequestData) {
  postRequest("/Auth/login", loginData);
}
