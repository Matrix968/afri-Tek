import axios from "axios";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "/api";

console.log("🔧 API URL:", API_URL); // This will help debug

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor - Add token to all requests
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
    console.log("📦 Request data:", config.data);
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor - Handle token expiration
api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response from ${response.config.url}:`, response.status);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 (Unauthorized) and not already retrying
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
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    } else if (error.request) {
      console.error("No response received - Network Error");
    }
    return Promise.reject(error);
  },
);

export default api;
