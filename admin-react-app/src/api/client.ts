import axios from "axios";

import { clearSession } from "../utils/session";

const apiClient = axios.create({
  baseURL: "https://tatumconnect-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("tatum.accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearSession();
      window.location.replace("/");
    }

    return Promise.reject(error);
  },
);

export default apiClient;
