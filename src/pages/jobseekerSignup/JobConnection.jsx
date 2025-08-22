


import React, { useState } from "react";
import usersData from "../../data/usersData";
import UserList from "../../components/UserList";
import { useLocation, useNavigate } from "react-router-dom";

const JobConnection = () => {
  const [addedUsers, setAddedUsers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { email, firstName, lastName, role, mode } = location.state || {};

  const isEnabled = addedUsers.length >= 10;

  const handleAdd = (id) => {
    if (!addedUsers.includes(id)) {
      setAddedUsers([...addedUsers, id]);
    }
  };

  const handleClick = () => {
    if (isEnabled) {
      navigate("/resume", {
        state: {
          email,
          firstName,
          lastName,
          role,
          mode,
          followings: addedUsers, // Passing the new data
        },
      });
    }
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="w-full px-4 py-6 flex justify-start items-center max-w-screen-xl mx-auto">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="h-12 sm:h-16"
        />
      </div>

      <div className="flex flex-col items-center justify-start px-4 mx-auto w-full max-w-4xl pb-12">
        <div className="w-full max-w-3xl text-center mb-10 mt-12">
          <p className="text-3xl sm:text-4xl md:text-5xl font-sarina font-semibold text-[#16730F]">
            Connect With Users
          </p>
          <p className="text-[#333] font-normal text-sm sm:text-base md:text-lg mt-2">
            Connect with at least 10 users to continue the signup process
          </p>
        </div>

        <UserList users={usersData} addedUsers={addedUsers} onAdd={handleAdd} />

        <div className="w-full flex justify-center sm:justify-end mt-10 px-4">
          <button
            className={`w-52 h-12 rounded-2xl font-bold text-white transition-all duration-300 ${
              isEnabled
                ? "bg-[#16730F]"
                : "bg-[#1A3E32] opacity-25 cursor-not-allowed"
            }`}
            disabled={!isEnabled}
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobConnection;
