import React from 'react';
import check from "../../assets/Group.png";
import { useState } from 'react';

export default function ChatsMiddle(){
    const [agreed, setAgreed] = useState(false);

    const handleAccept = () => {
        setAgreed(true);
    };
    return(
        <>
         <main className="w-full min-h-screen space-y-8 bg-white">
  {/* Header */}
  <div className="bg-[#ebebeb] px-4 py-6 w-full">
    <h1 className="text-[#16730F] text-2xl">Okpata Favour</h1>
    <p className="text-sm">Online</p>
  </div>

        
    {!agreed ? (
       <>
         <p className="text-2xl font-semibold text-center text-[#16730F]">You’ve been invited for an interview!</p>
       <p className="text-sm text-center text-[#16730F]">Okpata favour has invited you for an interview as a Graphics Designer on July 20th, 9:00am.  Please respond within 72 hours. If no response, this invite will be automatically declined.</p>

       
       </>
    ) : (
        <>
         <img src={check} alt="check" className="w-20 mx-auto" />
       <p className="text-2xl font-semibold text-center text-[#16730F]">You have accepted the interview invite.</p>
       <p className="text-sm text-center text-[#16730F]">You can now start a conversation with Okpata Favour.</p>
        </>
    )}


  <div className="flex justify-center">
    
    <div className=" p-4 rounded-xl ">
      {/* Avatar + Name */}
      <div className="flex items-start space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="bg-[#f1f1f1] p-3 rounded-lg text-sm text-left">
          <p className="text-gray-800">
            Hi Idris Joseban, <br />
            You’ve been invited for an interview as a Graphics Designer on{" "}
            <strong>July 20th, 9:00am</strong>. Please respond within 72 hours.
            If no response, this invite will be automatically declined.
          </p>
          <p className="text-xs text-gray-500 mt-2">09:45 AM</p>
        </div>
      </div>

       {
        !agreed && (
          <div className="flex gap-3 mt-3 justify-center">
            <button
              onClick={handleAccept}
              className="bg-[#16730F] text-[#FFB547] px-10 py-2 rounded-md"
            >
              Accept
            </button>
            <button className="bg-[#EB5757] text-white px-10 py-2 rounded-md">
              Decline
            </button>
          </div>
        )}
      
    </div>
  </div>

  <div className="px-6 py-3  bg-white">
  <div className="flex flex-col  gap-2 border border-[#16730F] rounded-2xl px-4 py-3 bg-gray-100 shadow-sm">
    

    {/* Input */}
    <input
      type="text"
      placeholder="Type a message"
      className="flex-1 outline-none text-sm bg-transparent placeholder-gray-400"
    />

    <div className="flex justify-between items-center space-x-2">
       {/* Left Icons */}
       <div>
        <button
      type="button"
      className="text-gray-500 hover:text-green-600 mr-2"
      aria-label="Add emoji"
    >
      😊
    </button>
    <button
      type="button"
      className="text-gray-500 hover:text-green-600 mr-2 text-lg"
      aria-label="Attach file"
    >
      ＋
    </button>
       </div>
   

    {/* Right Actions */}
    <div>
     <button
      type="button"
      className="text-gray-500 hover:text-green-600 mr-2"
      aria-label="Record voice"
    >
      🎤
    </button>
    <button
      type="button"
      className="bg-gray-400 hover:bg-green-600 text-white rounded-full p-2 transition"
      aria-label="Send message"
    >
      ➤
    </button>
    </div>
    
    </div>
    
  </div>
</div>

      
 
</main>

        </>
     

    )
}