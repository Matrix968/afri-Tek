import api from "./axios";

// Public endpoints
export const signup = async (data) => {
  try {
    console.log("📤 Signup API - Sending:", data);
    const response = await api.post("/signup", data);
    console.log("📥 Signup API - Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Signup API error:", error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    console.log("📤 Login API - Sending:", data);
    const response = await api.post("/login", data);
    console.log("📥 Login API - Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Login API error:", error);
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await api.post("/refresh-token", { refreshToken });
    return response.data;
  } catch (error) {
    console.error("❌ Refresh token error:", error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.post("/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("❌ Forgot password error:", error);
    throw error;
  }
};

export const resetPassword = async (oobCode, newPassword) => {
  try {
    const response = await api.post("/reset-password", {
      oobCode,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Reset password error:", error);
    throw error;
  }
};

export const verifyEmail = async (oobCode) => {
  try {
    const response = await api.post("/verify-email", { oobCode });
    return response.data;
  } catch (error) {
    console.error("❌ Verify email error:", error);
    throw error;
  }
};

// Protected endpoints
export const getMe = async (token) => {
  try {
    const response = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ GetMe error:", error);
    throw error;
  }
};

export const logout = async (token) => {
  try {
    const response = await api.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("❌ Logout error:", error);
    throw error;
  }
};

export const changePassword = async (token, currentPassword, newPassword) => {
  try {
    const response = await api.patch(
      "/change-password",
      { currentPassword, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("❌ Change password error:", error);
    throw error;
  }
};

export const updateProfile = async (token, data) => {
  try {
    const response = await api.patch("/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Update profile error:", error);
    throw error;
  }
};

export const deleteAccount = async (token) => {
  try {
    const response = await api.delete("/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Delete account error:", error);
    throw error;
  }
};

export const sendEmailVerification = async (token) => {
  try {
    const response = await api.post(
      "/send-email-verification",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("❌ Send email verification error:", error);
    throw error;
  }
};
