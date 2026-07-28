import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Sparkles,
  Shield,
  Globe,
  Coins,
  User,
  MapPin,
  Flag,
  Network,
  TrendingUp,
  Award,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import afriTech from "../assets/afritek-logo.jpg";
export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState("signin"); // "signin" or "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // Sign In Form State
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    country: "Nigeria",
    state: "",
    networkCode: "",
    password: "",
    confirmPassword: "",
  });

  // Nigerian states
  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signing in with:", signInData);
      // Handle sign in logic
      navigate("/dashboard");
    }, 2500);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signing up with:", signUpData);
      // Handle sign up logic
      setActiveTab("signin");
    }, 2500);
  };

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
              onClick={() => setActiveTab("signin")}
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
              onClick={() => setActiveTab("signup")}
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
                <form onSubmit={handleSignInSubmit} className="space-y-4">
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
                        onChange={handleSignInChange}
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
                        onChange={handleSignInChange}
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
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  {/* Country Field */}
                  <div className="group">
                    <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Country <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
                      <select
                        name="country"
                        value={signUpData.country}
                        onChange={handleSignUpChange}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 font-body text-sm appearance-none focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300 cursor-pointer"
                        required
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Morocco">Morocco</option>
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* State/Province Field */}
                  <div className="group">
                    <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      State/Province <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
                      <select
                        name="state"
                        value={signUpData.state}
                        onChange={handleSignUpChange}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 font-body text-sm appearance-none focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300 cursor-pointer"
                        required
                      >
                        <option value="">Select your state/province</option>
                        {nigerianStates.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* Network Code Field */}
                  <div className="group">
                    <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Network Code{" "}
                      <span className="text-zinc-500 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <Network className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
                      <input
                        type="text"
                        name="networkCode"
                        value={signUpData.networkCode}
                        onChange={handleSignUpChange}
                        placeholder="ENTER NETWORK CODE"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm uppercase tracking-wider focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
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
                        value={signUpData.password}
                        onChange={handleSignUpChange}
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

                  {/* Confirm Password Field */}
                  <div className="group">
                    <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Confirm Password <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={signUpData.confirmPassword}
                        onChange={handleSignUpChange}
                        placeholder="Confirm your password"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-12 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="flex flex-wrap gap-2 text-[10px] font-body text-zinc-500">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-400/40" />
                      Min 8 characters
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-400/40" />
                      Uppercase & lowercase
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-400/40" />
                      Number & symbol
                    </span>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-size-200 text-black font-display font-bold text-sm tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Creating Account...
                        </span>
                      ) : (
                        <>
                          Create Account
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Terms */}
                  <p className="text-center text-[10px] font-body text-zinc-500">
                    By creating an account, you agree to our{" "}
                    <button
                      type="button"
                      className="text-amber-400/70 hover:text-amber-400 transition-colors"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-amber-400/70 hover:text-amber-400 transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-zinc-800/50 flex items-center justify-between text-zinc-500">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              <span className="text-[10px] font-body">Secure Encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <Coins className="w-3.5 h-3.5" />
              <span className="text-[10px] font-body">Crypto Ready</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
