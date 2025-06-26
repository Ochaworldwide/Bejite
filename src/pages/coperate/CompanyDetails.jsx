import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";
import ProgressBar from "../../components/ProgressBar";
import StepTabs from "../../components/StepTabs";
import Header from "../../components/Header";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const { currentStep } = useOutletContext();

  const steps = [
    "Basic Details",
    "Profile Setup",
    "Company Details",
    "Location",
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    registration_number: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormComplete = Object.values(formData).every((v) => v.trim() !== "");

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <StepTabs steps={steps} currentStep={currentStep} />
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <section className="max-w-3xl mx-auto px-4 mt-4 text-[#1A3E32] text-2xl font-semibold">
        Company Details
      </section>
      <p className="max-w-3xl mx-auto px-4 text-[#333] text-[15px]">
        Let’s get to know you
      </p>

      <div className="max-w-4xl mx-auto mt-6 border-2 border-[#E0E0E0] flex flex-col lg:flex-row gap-8 p-4">
        <div className="bg-[#F5F5F5] w-[90%] mx-auto rounded-2xl p-5">
          {/* FULL NAME */}
          <div className="p-5 bg-[#82828280] rounded-3xl mb-4">
            <label className="font-semibold text-[12px] mb-2 block">
              COMPANY NAME (required) (Must match legal documents)
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your company name"
              value={formData.full_name}
              onChange={handleChange}
              className="border w-full p-4 border-[#F5F5F5] rounded-[10px] outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="p-5 bg-[#82828280] rounded-3xl mb-4">
            <label className="font-semibold text-[12px] mb-2 block">
              Company Registration Number (required) (For verification purposes)
            </label>
            <input
              type="text"
              name="registration_number"
              placeholder="Enter registration number"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-4 border-[#F5F5F5] rounded-[10px] outline-none"
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="p-5 bg-[#82828280] rounded-3xl mb-2">
            <label className="font-semibold text-[12px] mb-2 block">
              Company Website (Optional) (Share your official site for
              credibility)
            </label>
            <input
              type="url"
              name="website"
              placeholder="Enter your company url"
              value={formData.phone_number}
              onChange={handleChange}
              className="border w-full p-4 border-[#F5F5F5] rounded-[10px] outline-none"
            />
          </div>
        </div>
      </div>

      <NavigationButtons
        isFormComplete={isFormComplete}
        onBack={() => navigate(-1)}
        onNext={() =>
          isFormComplete && navigate("/coperate/location")
        }
      />
    </div>
  );
};

export default CompanyDetails;
