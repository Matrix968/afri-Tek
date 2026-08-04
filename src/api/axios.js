import axios from "axios";

// Use relative URL in production (will use Vercel proxy)
// src/api/axios.js
const API_URL = import.meta.env.PROD
  ? "https://cors-anywhere.herokuapp.com/https://afritek-mdr1.vercel.app/api/v1/auth"
  : "/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(
      `🚀 ${config.method.toUpperCase()} Request to:`,
      config.baseURL + config.url,
    );
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response from ${response.config.url}:`, response.status);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const response = await api.post("/refresh-token", { refreshToken });
          if (response.data?.data?.tokens?.idToken) {
            const newToken = response.data.data.tokens.idToken;
            localStorage.setItem("accessToken", newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    }

    console.error("❌ Response Error:", error);
    return Promise.reject(error);
  },
);

export default api;
