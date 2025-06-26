import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import { FaArrowLeft } from "react-icons/fa";

const CoperateInReview = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header />

      <div className="w-[70%] flex flex-col p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[90%] mx-auto rounded-2xl p-5 flex flex-col gap-y-6 items-center">
          <img
            src="/assets/images/verified.png"
            alt=""
            srcset=""
            className="object-contain mb-5"
          />

          <div className="text-center">
            <h1 className="text-[#1A3E32] font-[600] text-2xl">
              Thank You for Submitting Documents!
            </h1>
            <h1 className="text-[#1A3E32] font-[600] text-2xl">
              Your company verification is under review.
            </h1>
          </div>

          <button
            className="bg-[#16730F] w-[40%] text-white text-[16px] py-4 rounded-3xl shadow-md cursor-pointer font-[500]"
            onClick={handleContinue}
          >
            Proceed to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoperateInReview;
