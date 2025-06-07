import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  //   const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //   const isDisabled = !email;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/confirmpassword");
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="bg-white">
      <div className="flex w-[80%] mx-auto justify-between absolute right-4 left-4 top-1/12 transform -translate-y-1/2 z-10">
        <div>
          <img src="/assets/images/logo.png" alt="" srcset="" />
        </div>
      </div>

      <div className="flex w-full h-screen justify-between relative">
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-[50%] mx-auto">
          <div className="w-full space-y-7">
            <div className="space-y-6 w-[70%] mx-auto flex flex-col items-center">
              <img src="/assets/images/emailcheck.png" alt="" srcset="" />

              <h1 className="text-3xl font-bold text-pink-600">
                Verify your email
              </h1>

              <div>
                <p className="text-center">
                  Almost there! We’ve sent a verification email to
                  b*********@gmail.com.
                </p>
                <p className="text-center">
                  You need to verify your email to continue
                </p>
              </div>

              <button
                // disabled={isDisabled}
                className={`w-[70%] py-4 rounded-[20px] text-white  bg-[#FF3C61] font-semibold transition shadow-md cursor-pointer`}
              >
                Resend Email
              </button>

              {/* <div
                className="flex cursor-pointer gap-x-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                {" "}
                <ChevronLeft /> <span>Go Back To Login</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
