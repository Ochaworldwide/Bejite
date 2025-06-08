

import React, { useState } from "react";
import usersData from "../data/usersData";
import UserList from "../components/UserList";
import ContinueButton from "../components/ContinueButton";

const JobConnection = () => {
  const [addedUsers, setAddedUsers] = useState([]);

  const handleAdd = (id) => {
    if (!addedUsers.includes(id) && addedUsers.length < 10) {
      setAddedUsers([...addedUsers, id]);
    }
  };

  return (
    <div className="bg-white min-h-screen">
     
       <div className="flex justify-between absolute inset-x-4 top-12 z-10 max-w-7xl mx-auto">
    <img src="/assets/images/logo.png" alt="logo" className="h-12 sm:h-16" />
  </div>

      <div className=" mt-25  flex flex-col items-center justify-center min-h-screen px-4 mx-auto w-full max-w-4xl">
        <div className="w-full max-w-3xl text-center mb-10">
          <p className="text-3xl sm:text-2xl md:text-5xl font-medium text-[#FF3C61]">
            Connect With Users
          </p>
          <p className="text-[#FF6F61] font-normal text-sm sm:text-base md:text-lg mt-2">
            Connect with at least 10 users to continue to signup process
          </p>
        </div>

        <UserList users={usersData} addedUsers={addedUsers} onAdd={handleAdd} />

        <ContinueButton isEnabled={addedUsers.length >= 10} />
      </div>
    </div>
  );
};

export default JobConnection;
