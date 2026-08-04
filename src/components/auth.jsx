import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Coins, LogIn, UserPlus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import afriTech from "../assets/afritek-logo.jpg";
import SignIn from "./signin";
import SignUp from "./signup";
import { useAuth } from "../context/AuthContext";

export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState("signin");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const fromVerify = location.state?.from === "verify-email";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black p-4 font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fbbf24 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 rounded-full bg-amber-400/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-amber-500/20"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-amber-300/25"
          animate={{ y: [0, -15, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-[440px]"
      >
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 blur-xl" />

        <div className="relative bg-gradient-to-b from-zinc-900/95 via-black/95 to-zinc-950/95 rounded-3xl border border-amber-500/20 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto custom-scrollbar">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(245, 158, 11, 0.3);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(245, 158, 11, 0.5);
            }
          `}</style>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/40 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/40 rounded-br-2xl" />

          {/* Success Message from Verify Email */}
          {fromVerify && (
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
              <p className="text-green-400 text-sm text-center">
                ✅{" "}
                {location.state?.message ||
                  "Email verified successfully! Please sign in."}
              </p>
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
            >
              <div className="bg-linear-to-br from-amber-400 to-amber-600 text-black p-1.5 rounded-xl shadow-lg shadow-amber-500/10">
                <img src={afriTech} alt="" className="w-10 h-7 rounded-md" />
              </div>
              <span className="text-xs font-display font-semibold tracking-wider text-amber-400/80 uppercase">
                Afri Tek
              </span>
            </motion.div>

            <h1 className="text-3xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
              {activeTab === "signin" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-sm font-body text-zinc-400 mt-2">
              {activeTab === "signin"
                ? "Sign in to your account or create a new one"
                : "Invest and earn returns"}
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="relative flex bg-zinc-900/50 rounded-xl p-1 mb-8 border border-zinc-800/50">
            <button
              onClick={() => handleTabSwitch("signin")}
              className={`relative flex-1 py-2.5 text-sm font-display font-semibold transition-all duration-300 rounded-lg flex items-center justify-center gap-2 ${
                activeTab === "signin"
                  ? "text-amber-400 bg-gradient-to-r from-amber-500/20 to-amber-400/10"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => handleTabSwitch("signup")}
              className={`relative flex-1 py-2.5 text-sm font-display font-semibold transition-all duration-300 rounded-lg flex items-center justify-center gap-2 ${
                activeTab === "signup"
                  ? "text-amber-400 bg-gradient-to-r from-amber-500/20 to-amber-400/10"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </button>
          </div>

          {/* Forms */}
          <AnimatePresence mode="wait">
            {activeTab === "signin" ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SignIn setIsLoading={setIsLoading} isLoading={isLoading} />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SignUp setIsLoading={setIsLoading} isLoading={isLoading} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t border-zinc-800/50">
            <div className="flex flex-col gap-2 text-center">
              {activeTab === "signin" && (
                <button
                  onClick={() => navigate("/forgot-password")}
                  className="text-xs text-zinc-500 hover:text-amber-400 transition-colors"
                >
                  Forgot your password?
                </button>
              )}
              <div className="flex items-center justify-center gap-4 text-zinc-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-body">
                    Secure Encryption
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Coins className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-body">Crypto Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
