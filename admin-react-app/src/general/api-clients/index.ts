import { accessTokenKey } from "../utils/session";

const apiBaseUrl = "https://tatumconnect-backend.onrender.com/api/v1";

export function getRequest(endpoint: string) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function postRequest(endpoint: string, requestData: object) {
  const url = `${apiBaseUrl}${endpoint}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
}

export function getRequestWithAuth(endpoint: string) {
  const url = `${apiBaseUrl}${endpoint}`;
  const token = sessionStorage.getItem(accessTokenKey);

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function postRequestWithAuth(endpoint: string, requestData: object) {
  const url = `${apiBaseUrl}${endpoint}`;
  const token = sessionStorage.getItem(accessTokenKey);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestData),
  });
}
