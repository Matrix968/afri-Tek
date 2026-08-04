import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./routes/protectedRoute";
import PublicRoute from "./routes/PublicRoute";
import AfriTekbileLanding from "./Pages/Home";
import AuthScreen from "./components/auth";
import Dashboard from "./components/dashboard";
import VerifyEmail from "./components/VerifyEmail";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes - only accessible when NOT authenticated */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <AfriTekbileLanding />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <AuthScreen />
              </PublicRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthScreen />
              </PublicRoute>
            }
          />

          {/* Auth routes - accessible when NOT authenticated */}
          <Route
            path="/verify-email"
            element={
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />

          {/* Protected routes - only accessible when authenticated */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect based on auth status */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
