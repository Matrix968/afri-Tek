import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ChevronRight, Shield } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setIsLoading, isLoading }) {
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(signInData);
      if (result.success) {
        console.log("✅ Login successful!");
        navigate("/dashboard");
      } else {
        if (
          result.message?.toLowerCase().includes("verify") ||
          result.message?.toLowerCase().includes("email")
        ) {
          alert(
            "Please verify your email before logging in. Check your inbox for the verification link.",
          );
          navigate("/verify-email", {
            state: {
              email: signInData.email,
              message:
                "Your email is not verified. Please verify your email to login.",
            },
          });
        } else {
          alert(result.message || "Login failed");
        }
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      if (err.response?.status === 403) {
        alert("Please verify your email before logging in.");
        navigate("/verify-email", {
          state: {
            email: signInData.email,
            message:
              "Your email is not verified. Please verify your email to login.",
          },
        });
      } else {
        alert(err.response?.data?.message || "Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Field */}
      <div className="group">
        <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
          Email <span className="text-amber-400">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <input
            type="email"
            name="email"
            value={signInData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="group">
        <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
          Password <span className="text-amber-400">*</span>
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={signInData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-12 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="text-right">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-xs font-body text-zinc-500 hover:text-amber-400 transition-colors"
        >
          Forgot your password?
        </button>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-size-200 text-black font-display font-bold text-sm tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
        style={{
          backgroundSize: "200% 100%",
          animation: "shimmer 3s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Signing In...
            </span>
          ) : (
            <>
              Sign In
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </motion.button>

      {/* Help Links */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          className="text-xs font-body text-zinc-500 hover:text-amber-400 transition-colors flex items-center gap-1"
        >
          <Shield className="w-3 h-3" />
          Need Help?
        </button>
        <button
          type="button"
          className="text-xs font-body text-zinc-500 hover:text-amber-400 transition-colors"
        >
          Can't sign in? Get help
        </button>
      </div>
    </form>
  );
}
