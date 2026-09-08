const accessTokenKey = "tatum.accessToken";
const userKey = "tatum.user";
const tokenExpiresAtKey = "tatum.tokenExpiresAt";
const resetEmailKey = "tatum.resetEmail";

export function clearSession() {
  sessionStorage.clear();
}

export function logout() {
  clearSession();
  window.location.replace("/");
}

export function hasValidSession() {
  const accessToken = sessionStorage.getItem(accessTokenKey);
  const expiresAt = sessionStorage.getItem(tokenExpiresAtKey);

  if (!accessToken) return false;

  if (expiresAt && Number(expiresAt) <= Date.now()) {
    clearSession();
    return false;
  }

  return true;
}

export function storeSession(
  accessToken: string,
  expiresIn: number,
  user: unknown,
) {
  sessionStorage.setItem(accessTokenKey, accessToken);
  sessionStorage.setItem(userKey, JSON.stringify(user));
  sessionStorage.setItem(
    tokenExpiresAtKey,
    String(Date.now() + expiresIn * 1000),
  );
}

export { accessTokenKey, resetEmailKey, tokenExpiresAtKey, userKey };
