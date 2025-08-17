import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function ChatsRight() {
  return (
    <div className="bg-[#F5F5F5] p-2">
      <aside
        className="hidden md:block bg-[#1A3E32] rounded-2xl overflow-hidden"
        aria-label="Profile Sidebar"
      >
        {/* Header */}
        <div className="bg-[#16730F] rounded-t-2xl">
          <div className="p-5">
            <button
              type="button"
              aria-label="Go back"
              className="flex items-center text-[#1A3E32] hover:text-white transition"
            >
              <FaArrowLeft />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              className="w-[90%] rounded-lg object-cover"
              src="/assets/images/post-ads.png"
              alt="Profile banner"
              loading="lazy"
            />
            <div className="relative -mt-10 rounded-full border-[5px] border-[#16730F]">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="/assets/images/prisca.jpg"
                alt="Okpata Favour avatar"
                loading="lazy"
              />
            </div>
            <div className="text-white text-center mt-3">
              <p className="text-lg font-semibold">Okpata Favour</p>
              <p className="text-sm opacity-80">Employer</p>
            </div>
          </div>

          {/* Profile Button */}
          <div className="w-36 mx-auto mt-4">
            <button
              type="button"
              className="bg-[#6B8E23] py-2 text-xs text-white w-full rounded-3xl hover:bg-[#5a7720] transition"
              aria-label="View Profile"
            >
              View Profile
            </button>
          </div>
        </div>

        {/* Contact + Links */}
        <div className="bg-[#1A3E32] px-6 py-10 space-y-6">
          {[
            { label: "Email", value: "osakweprsca@gmail.com" },
            { label: "Phone", value: "+234 7061410614" },
            { label: "Website", value: "https://linktree.com" },
          ].map((item, idx) => (
            <div key={idx}>
              <hr className="border-[#6B8E23] mb-2" />
              <p className="text-white text-sm break-words">{item.value}</p>
            </div>
          ))}

          {/* Footer Actions */}
          <div className="pt-12 space-y-4">
            <button
              type="button"
              className="flex items-center space-x-2 text-white hover:text-[#6B8E23] transition"
              aria-label="Help"
            >
              <span>Help</span>
              <img
                src="/assets/images/questiontag.svg"
                className="w-4 h-4"
                alt=""
                loading="lazy"
              />
            </button>
            <button
              type="button"
              className="text-[#6B8E23] text-base font-medium hover:underline"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ChatsRight;
