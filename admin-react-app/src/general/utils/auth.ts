import type { AuthUser } from "../api-clients/auth";
import { userKey } from "./session";

export function getStoredUser(): AuthUser | null {
  const storedUser = sessionStorage.getItem(userKey);
  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch {
    return null;
  }
}

export function isSuperAdmin() {
  return getStoredUser()?.role.toLowerCase() === "superadmin";
}
