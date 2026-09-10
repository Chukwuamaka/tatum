import type { AuthUser } from "../api/auth";

export function getStoredUser(): AuthUser | null {
  const storedUser = sessionStorage.getItem("tatum.user");
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
