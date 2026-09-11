const apiBaseUrl = "https://tatumconnect-backend.onrender.com/api/v1";

export function getRequest(
  endpoint: string,
  requestData: Record<string, unknown>,
) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
}

export function postRequest(
  endpoint: string,
  requestData: Record<string, unknown>,
) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
}

export function getRequestWithAuth(
  token: string,
  endpoint: string,
  requestData: Record<string, unknown>,
) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestData),
  });
}

export function postRequestWithAuth(
  token: string,
  endpoint: string,
  requestData: Record<string, unknown>,
) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestData),
  });
}
