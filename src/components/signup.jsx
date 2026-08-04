import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Flag,
  Globe,
  MapPin,
  Network,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authApi";

export default function SignUp({ setIsLoading, isLoading }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "Nigeria",
    state: "",
    networkCode: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });
  const navigate = useNavigate();

  // Country codes mapping
  const countryCodes = {
    Nigeria: "+234",
    Ghana: "+233",
    Kenya: "+254",
    "South Africa": "+27",
    Egypt: "+20",
    Morocco: "+212",
  };

  // Country-specific phone number formats
  const phoneFormats = {
    Nigeria: "8012345678 (10 digits)",
    Ghana: "501234567 (9 digits)",
    Kenya: "701234567 (9 digits)",
    "South Africa": "712345678 (9 digits)",
    Egypt: "1012345678 (10 digits)",
    Morocco: "612345678 (9 digits)",
  };

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

  const validatePassword = (password) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let cleaned = value.replace(/[^0-9]/g, "");
      if (cleaned.length > 15) cleaned = cleaned.substring(0, 15);
      setSignUpData((prev) => ({ ...prev, [name]: cleaned }));
    } else {
      setSignUpData((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "password") {
      validatePassword(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSignUpData((prev) => ({
      ...prev,
      country: country,
      phone: "",
    }));
  };

  const getFormattedPhone = (phone, country) => {
    if (!phone) return "";
    const countryCode = countryCodes[country] || "+234";
    return `${countryCode}${phone}`;
  };

  const validatePhone = (phone, country) => {
    if (!phone) return "Phone number is required";
    const countryCode = countryCodes[country] || "+234";
    const codeDigits = countryCode.replace("+", "");
    let cleanPhone = phone;
    if (cleanPhone.startsWith(codeDigits)) {
      cleanPhone = cleanPhone.substring(codeDigits.length);
    }
    const minLength = 8;
    const maxLength = 15;
    if (cleanPhone.length < minLength) {
      return `Phone number must be at least ${minLength} digits`;
    }
    if (cleanPhone.length > maxLength) {
      return `Phone number must be less than ${maxLength} digits`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};

    if (!signUpData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (signUpData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!signUpData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneError = validatePhone(signUpData.phone, signUpData.country);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    const password = signUpData.password;
    if (!password) {
      newErrors.password = "Password is required";
    } else {
      const hasLength = password.length >= 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      if (
        !hasLength ||
        !hasUppercase ||
        !hasLowercase ||
        !hasNumber ||
        !hasSymbol
      ) {
        newErrors.password = "Password must meet all requirements below";
      }
    }

    if (!signUpData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (signUpData.password !== signUpData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!signUpData.state) {
      newErrors.state = "Please select your state/province";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsLoading(true);

    try {
      const countryCode = countryCodes[signUpData.country] || "+234";
      const formattedPhone = `${countryCode}${signUpData.phone}`;

      const payload = {
        fullName: signUpData.fullName.trim(),
        email: signUpData.email.trim().toLowerCase(),
        phone: formattedPhone,
        password: signUpData.password,
        role: "user",
      };

      console.log("📤 Sending signup payload:", payload);

      const response = await signup(payload);

      console.log("📥 Signup response:", response);

      if (response.success) {
        alert(
          response.message ||
            "Account created successfully! Please verify your email.",
        );

        // Navigate to verify-email page
        navigate("/verify-email", {
          state: {
            email: signUpData.email,
            message:
              "We've sent a verification link to your email. Please check your inbox.",
          },
        });
      } else {
        alert(response.message || "Failed to create account");
      }
    } catch (error) {
      console.error("❌ Signup error:", error);

      if (error.response) {
        if (error.response.data.errors) {
          const errorMessages = error.response.data.errors
            .map((err) =>
              typeof err === "string"
                ? err
                : err.message || JSON.stringify(err),
            )
            .join("\n");
          alert(`Validation failed:\n${errorMessages}`);
        } else if (
          error.response.data.message?.includes("email already exists")
        ) {
          setErrors({ email: "This email is already registered" });
          alert("This email is already registered. Please login instead.");
        } else {
          alert(
            error.response.data?.message ||
              `Server error: ${error.response.status}`,
          );
        }
      } else if (error.request) {
        alert(
          "Network error - Could not reach server. Please check your connection.",
        );
      } else {
        alert("An unexpected error occurred: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const RequirementItem = ({ met, text }) => (
    <span
      className={`flex items-center gap-1 text-[10px] ${met ? "text-green-400" : "text-zinc-500"}`}
    >
      {met ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      {text}
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name Field */}
      <div className="group">
        <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
          Full Name <span className="text-amber-400">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <input
            type="text"
            name="fullName"
            value={signUpData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full bg-zinc-900/50 border ${
              errors.fullName ? "border-red-500" : "border-zinc-800"
            } rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300`}
            required
          />
        </div>
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

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
            value={signUpData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full bg-zinc-900/50 border ${
              errors.email ? "border-red-500" : "border-zinc-800"
            } rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300`}
            required
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Field with Country Code */}
      <div className="group">
        <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
          Phone Number <span className="text-amber-400">*</span>
        </label>
        <div className="relative">
          <Flag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <div className="flex">
            <div className="flex-shrink-0 bg-zinc-800/50 border border-r-0 border-zinc-800 rounded-l-xl py-3 pl-3 pr-2 text-zinc-400 font-body text-sm flex items-center">
              <span className="text-amber-400 font-semibold">
                {countryCodes[signUpData.country] || "+234"}
              </span>
            </div>
            <input
              type="tel"
              name="phone"
              value={signUpData.phone}
              onChange={handleChange}
              placeholder={
                phoneFormats[signUpData.country] || "Enter phone number"
              }
              className={`w-full bg-zinc-900/50 border ${
                errors.phone ? "border-red-500" : "border-zinc-800"
              } rounded-r-xl py-3 px-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300`}
              required
            />
          </div>
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
        {signUpData.phone && !errors.phone && (
          <p className="text-green-400 text-xs mt-1">
            Will be saved as:{" "}
            {getFormattedPhone(signUpData.phone, signUpData.country)}
          </p>
        )}
      </div>

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
            onChange={handleCountryChange}
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 font-body text-sm appearance-none focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300 cursor-pointer"
            required
          >
            <option value="Nigeria">🇳🇬 Nigeria (+234)</option>
            <option value="Ghana">🇬🇭 Ghana (+233)</option>
            <option value="Kenya">🇰🇪 Kenya (+254)</option>
            <option value="South Africa">🇿🇦 South Africa (+27)</option>
            <option value="Egypt">🇪🇬 Egypt (+20)</option>
            <option value="Morocco">🇲🇦 Morocco (+212)</option>
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
            onChange={handleChange}
            className={`w-full bg-zinc-900/50 border ${
              errors.state ? "border-red-500" : "border-zinc-800"
            } rounded-xl py-3 pl-10 pr-4 text-zinc-200 font-body text-sm appearance-none focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300 cursor-pointer`}
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
        {errors.state && (
          <p className="text-red-500 text-xs mt-1">{errors.state}</p>
        )}
      </div>

      {/* Network Code Field - Optional */}
      <div className="group">
        <label className="block text-xs font-display font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
          Network Code{" "}
          <span className="text-zinc-500 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <Network className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <input
            type="text"
            name="networkCode"
            value={signUpData.networkCode}
            onChange={handleChange}
            placeholder="Enter network code"
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
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
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full bg-zinc-900/50 border ${
              errors.password ? "border-red-500" : "border-zinc-800"
            } rounded-xl py-3 pl-10 pr-12 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300`}
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
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}

        {signUpData.password && (
          <div className="mt-2 p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
            <div className="grid grid-cols-2 gap-1">
              <RequirementItem
                met={passwordStrength.length}
                text="Min 8 characters"
              />
              <RequirementItem
                met={passwordStrength.uppercase}
                text="Uppercase letter"
              />
              <RequirementItem
                met={passwordStrength.lowercase}
                text="Lowercase letter"
              />
              <RequirementItem met={passwordStrength.number} text="Number" />
              <RequirementItem
                met={passwordStrength.symbol}
                text="Symbol (!@#$%^&*)"
              />
            </div>
          </div>
        )}
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
            onChange={handleChange}
            placeholder="Confirm your password"
            className={`w-full bg-zinc-900/50 border ${
              errors.confirmPassword ? "border-red-500" : "border-zinc-800"
            } rounded-xl py-3 pl-10 pr-12 text-zinc-200 placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300`}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}
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
  );
}
