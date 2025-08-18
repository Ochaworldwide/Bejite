import React from "react";
import PaymentPageHeader from "../../components/PaymentPageHeader";

export default function PaymentPage() {
  return (
    <div className="bg-white">
      <PaymentPageHeader />

      <section className="bg-[#F5F5F5] border-1 border-[#1A3E32] mt-1 w-[854px] h-[821px] m-auto p-2.5">
        <p className="font-fredoka text-[#333333] font-normal text-center text-2xl">Choose the perfect plan</p>
        <p className="text-center text-[12px]">Unlock Advanced Recruitment With Bejite's Flexible Plans</p>
        <div className="flex items-center justify-around mt-12">
          <div className="bg-white w-[241px] h-[520px] border-1 border-[#1A3E32] px-3.5 py-12">
            <p className="font-normal text-[#16730F] text-2xl">Free Plan</p>
            <p className="font-medium text-[#1A3E32] text-[10px]">First-Time Users: Enjoy 2 <br /> free searches to explore our platform</p>
            <p className="font-medium text-[50px] text-[#1A3E32] mt-5 mb-5">O<span className="font-normal text-[15px]">us$</span></p>
            <p className="font-normal text-[#1A3E32] text-[7px]">Test-drive our AI-powered recruitment engine. <br />Access full candidate profiles and CV.</p>
            <button className="bg-[#16730F] text-white font-medium text-[13px] text-center w-[200px] h-9 py-2.5 mt-5 mb-5">Start Free Trial</button>
            <p className="font-normal text-[12px] text-[#16730F]">Limitations</p>
            <ul className="text-[#1A3E32] text-[6px] font-medium list-disc list-inside mt-2">
              <li>
                Free searches expire in 7 days.
              </li>
              <li>
                Maximum 5 candidate views per search.
              </li>
            </ul>
          </div>
          <div className="bg-white w-[241px] h-[520px] border-1 border-[#1A3E32] px-3.5 py-12">
            <p className="font-normal text-[#16730F] text-2xl">Starter Plan</p>
            <p className="font-medium text-[#1A3E32] text-[10px]">Recruit up to 20 people.</p>
            <p className="font-medium text-[50px] text-[#1A3E32] mt-5 mb-5">10<span className="font-normal text-[15px]">us$</span></p>
            <p className="font-normal text-[#1A3E32] text-[7px]">Ideal for: Small businesses or occasional recruiters.</p>
            <button className="bg-[#16730F] text-white font-medium text-[13px] text-center w-[200px] h-9 py-2.5 mt-5 mb-5">Upgrade</button>
            <p className="font-normal text-[12px] text-[#16730F]">Benefits</p>
            <ul className="text-[#1A3E32] text-[6px] font-medium list-disc list-inside mt-2">
              <li>20 Recruitment Slots - Source up to 20 candidates.</li>
              <li>Filters - Access essential search filters (skills, location).</li>
              <li>Candidate Profiles - View full profiles and CV details.</li>
              <li>Email Alerts - Get notified for new matching candidates.</li>
              <li>24/7 Support - Priority email support.</li>
            </ul>
          </div>
          <div className="bg-white w-[240px] h-[520px] border-1 border-[#1A3E32] px-3.5 py-12">
            <p className="font-normal text-[#16730F] text-2xl">Standard Plan</p>
            <p className="font-medium text-[#1A3E32] text-[10px]">Recruit up to 60 people.</p>
            <p className="font-medium text-[50px] text-[#1A3E32] mt-5 mb-5">30<span className="font-normal text-[15px]">us$</span></p>
            <p className="font-normal text-[#1A3E32] text-[7px]">Ideal for: Growing teams and frequent recruiters.</p>
            <button className="bg-[#16730F] text-white font-medium text-[13px] text-center w-[200px] h-9 py-2.5 mt-5 mb-5">Upgrade</button>
            <p className="font-normal text-[12px] text-[#16730F]">Benefits</p>
            <ul className="text-[#1A3E32] text-[6px] font-medium list-disc list-inside mt-2">
              <li>60 Recruitment Slots - Scale your hiring effortlessly.</li>
              <li>Filters - Access essential search filters (skills, location).</li>
              <li>Bulk Messaging - Contact multiple candidates at once.</li>
              <li>Candidate Profiles - View full profiles and CV details.</li>
              <li>Email Alerts - Get notified for new matching candidates.</li>
              <li>24/7 Support - Priority email support.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
