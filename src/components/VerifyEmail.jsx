import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle,
  XCircle,
  Loader2,
  Send,
  ArrowLeft,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { verifyEmail, sendEmailVerification } from "../api/authApi";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [email, setEmail] = useState("");

  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    const emailFromState = location.state?.email || user?.email || "";
    setEmail(emailFromState);

    if (location.state?.message) {
      setMessage(location.state.message);
    } else {
      setMessage(
        "We sent a verification link to your email. Please check your inbox.",
      );
    }

    if (oobCode) {
      handleVerifyEmail(oobCode);
    }
  }, [oobCode, location.state, user]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleVerifyEmail = async (code) => {
    setStatus("verifying");
    setMessage("Verifying your email...");

    try {
      const response = await verifyEmail(code);

      if (response.success) {
        setStatus("success");
        setMessage(response.message || "Email verified successfully!");

        setTimeout(() => {
          navigate("/login", {
            state: {
              from: "verify-email",
              message: "✅ Email verified successfully! Please sign in.",
            },
          });
        }, 3000);
      } else {
        setStatus("error");
        setMessage(
          response.message || "Verification failed. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error.response?.data?.message ||
          "Verification failed. Invalid or expired link.",
      );
    }
  };

  const handleResendVerification = async () => {
    if (!isAuthenticated) {
      setMessage("Please login first to resend verification email.");
      setStatus("error");
      return;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      setMessage("Please login first to resend verification email.");
      setStatus("error");
      return;
    }

    setIsLoading(true);
    setResendDisabled(true);
    setCountdown(60);

    try {
      const response = await sendEmailVerification(token);

      if (response.success) {
        setStatus("idle");
        setMessage("📧 Verification email sent! Please check your inbox.");
      } else {
        setStatus("error");
        setMessage(response.message || "Failed to send verification email.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error.response?.data?.message || "Failed to send verification email.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const StatusIcon = () => {
    switch (status) {
      case "verifying":
        return <Loader2 className="w-12 h-12 text-amber-400 animate-spin" />;
      case "success":
        return <CheckCircle className="w-12 h-12 text-green-400" />;
      case "error":
        return <XCircle className="w-12 h-12 text-red-400" />;
      default:
        return <Mail className="w-12 h-12 text-amber-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "border-green-500/30";
      case "error":
        return "border-red-500/30";
      default:
        return "border-amber-500/20";
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 blur-xl" />

        <div className="relative bg-gradient-to-b from-zinc-900/95 via-black/95 to-zinc-950/95 rounded-3xl border border-amber-500/20 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
          <button
            onClick={() => navigate("/login")}
            className="absolute top-4 left-4 text-zinc-400 hover:text-amber-400 transition-colors flex items-center gap-1 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back</span>
          </button>

          <div className="flex justify-center mb-6 pt-4">
            <div
              className={`w-24 h-24 rounded-full bg-amber-500/10 border ${getStatusColor()} flex items-center justify-center transition-all duration-500`}
            >
              <StatusIcon />
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-center text-white mb-2">
            {status === "verifying" && "Verifying Email..."}
            {status === "success" && "Email Verified! 🎉"}
            {status === "error" && "Verification Failed"}
            {status === "idle" && "Verify Your Email"}
          </h2>

          <div className="text-center mb-6">
            <p className="text-zinc-400 text-sm">{message}</p>
            {email && status === "idle" && (
              <p className="text-zinc-500 text-xs mt-2">
                We sent the link to:{" "}
                <span className="text-amber-400 font-medium">{email}</span>
              </p>
            )}
          </div>

          {status === "success" && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                <p className="text-green-400 text-sm">
                  Your email has been verified successfully!
                </p>
              </div>
              <button
                onClick={handleLoginRedirect}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
              >
                Continue to Login
              </button>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 text-sm font-medium">
                      What went wrong?
                    </p>
                    <p className="text-red-400/70 text-xs mt-1">
                      The verification link may be invalid, expired, or already
                      used.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleLoginRedirect}
                  className="w-full py-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  Back to Login
                </button>

                <button
                  onClick={handleResendVerification}
                  disabled={isLoading || resendDisabled}
                  className="w-full py-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl hover:bg-amber-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      {resendDisabled
                        ? `Resend in ${countdown}s`
                        : "Resend Verification Email"}
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {status === "idle" && (
            <div className="space-y-4">
              <div className="bg-zinc-800/30 border border-zinc-800/50 rounded-xl p-4">
                <p className="text-zinc-400 text-xs text-center">
                  💡 Didn't receive the email? Check your spam folder or click
                  below to resend.
                </p>
              </div>

              <button
                onClick={handleResendVerification}
                disabled={isLoading || resendDisabled || !isAuthenticated}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {resendDisabled
                      ? `Resend in ${countdown}s`
                      : "Resend Verification Email"}
                  </>
                )}
              </button>

              {!isAuthenticated && (
                <p className="text-center text-xs text-zinc-500">
                  Please{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-amber-400 hover:text-amber-300"
                  >
                    login
                  </button>{" "}
                  to resend verification email.
                </p>
              )}

              <button
                onClick={handleLoginRedirect}
                className="w-full py-3 text-zinc-400 hover:text-white transition-colors text-sm"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
