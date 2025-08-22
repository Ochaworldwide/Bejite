
import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";



export default function ChatLeft() {
  return (
      <div className="bg-[#1A3E32] min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          aria-label="Go back"
          className="flex items-center text-[#556B1F] hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-[20px] text-[#556B1F]">Invitations</h2>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full px-3 py-1 mb-6">
        <input
          className="w-full outline-none bg-transparent text-sm"
          placeholder="Search"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Invitations List */}
      <div className="space-y-6">
        {/* First Circle */}
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/50"
            alt="Okpata"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-white text-sm">Okpata</span>
        </div>

        {/* See More Employer */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
            <FaSearch />
          </div>
          <span className="text-white text-sm">See More Employer</span>
        </div>

        {/* Horizontal Line */}
        <hr className="border-[#556B1F]" />

        {/* Second Invite */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Okpata Favour"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-white text-sm font-medium">Okpata Favour</p>
              <p className="text-gray-400 text-xs">Invited Okpata</p>
            </div>
          </div>
          <span className="text-[#556B1F] text-xs">15</span>
        </div>
      </div>
    </div>
  
  );
}
