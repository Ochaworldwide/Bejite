
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const isDisabled = !email;

  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="flex w-[80%] mx-auto justify-between absolute right-4 left-4 top-1/12 transform -translate-y-1/2 z-10">
        <div>
          <img src="/assets/images/logo.png" alt="" srcset="" />
        </div>
      </div>

      <div className="flex w-full h-screen justify-between relative">
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-[50%] mx-auto">
          <div className="w-[70%] space-y-7">
            <h2 className="text-3xl font-bold text-pink-600 text-center">
              Forgot your password?
            </h2>
            <p className="text-center text-pink-400 text-md">
              Enter your email address below and we’ll send you a link to reset
              your password.
            </p>

            <div className="space-y-6 w-[70%] mx-auto">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
              />


            <button
              disabled={isDisabled}
              className={`w-full py-4 rounded-[20px] text-white font-semibold transition shadow-md cursor-pointer ${
                isDisabled
                  ? "bg-[#E6335740] cursor-not-allowed"
                  : "bg-[#FF3C61]"
              }`}
              onClick={() => {
                navigate("/email-check");
              }}
            >
              Send Reset Link
            </button>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
