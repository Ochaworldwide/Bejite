import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SaveProgress() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email || !password;
  const navigate = useNavigate();

  return (
    <div className="bg-white flex items-center justify-center w-full min-h-screen px-4">
      <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-md">
        <p className="text-center text-[#E63357] text-[20px] font-semibold">
          Sign in to save your progress
        </p>

        <div className="space-y-6 w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          disabled={isDisabled}
          className={`w-full py-4 rounded-full text-white font-semibold transition shadow-md ${
            isDisabled
              ? "bg-[#E6335740] cursor-not-allowed"
              : "bg-[#FF3C61] hover:opacity-90"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/links")}
          className="flex items-center gap-3 p-3 text-gray-700 hover:text-[#E63357]"
        >
          <FaArrowLeft /> Go back
        </button>
      </div>
    </div>
  );
}

export default SaveProgress;
