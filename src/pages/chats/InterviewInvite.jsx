import React from "react";

export default function InterviewInvite() {
  return (
    <section className="bg-[#D9D9D9] h-screen p-2.5">
      <p className="text-[#16730F] font-medium text-2xl text-center mt-10">Send Interview Invite</p>
      <p className="text-[#16730F] font-normal text-[20px] text-center">Choose a quick message from Bejite or write your own to invite this candidate for an interview.</p>
      <div className="mt-3 border border-black bg-neutral-300 rounded-2xl w-[798px] h-[500px] m-auto p-3">

        <div className="bg-[#6B8E23] text-white font-medium text-2xl w-[470px] text-center p-3 rounded-2xl mb-4 m-auto">Osakwe Prisca</div>
        <div className="bg-[#6B8E23] text-white font-medium text-2xl w-[470px] m-auto text-center p-3 rounded-2xl mb-4">Graphics Designer</div>

        <p className="text-[#556B1F] text-center">Enter Interview Date and Time</p>
        <input type="date" className="w-[160px] h-[50px] border-[#16730F] border rounded-2xl text-[#556B1F] outline-0 cursor-text" />
        <input type="time" placeholder="Enter Time" className="w-[160px] h-[50px] border-[#16730F] border rounded-2xl text-[#556B1F] outline-0 cursor-text" /> <br />
        <label>Interview Mode (Physical Address or Link)</label>
        <input type="text" />


      </div>
      <p>Choose at least 1 customized template</p>
      <div>
        <input type="checkbox" />
        Hello Prisca Osakwe,<br />We've reviewed your application for the position of Graphics Designer, and we'd like to invite you to an interview scheduled for 20th July,  9:00am. The interview will take place via https://meet.google.com/yqt-vbte-amu. Please confirm your availability to proceed. Looking forward to speaking with you.
      </div>
      <div>
        <input type="checkbox" />
        Hi Prisca Osakwe,<br />Great news! You've been shortlisted for the Graphics Designer position. We'd love to meet you during an interview on July 20th, 9:00am via https://meet.google.com/yqt-vbte-amu. Kindly confirm your availability. We're excited to learn more about you!
      </div>
      <div></div>
      <span>OR</span>
      <div></div>
      <div>
        <p>Enter your custom message</p>
        <input type="text" placeholder="Hi Prisca, we reviewed your CV and would love to schedule an interview for the Social Media Manager role at Jadtex IT. Looking forward to meeting you." />
      </div>
      <div>
        <button>Send</button>
        <button>Cancel</button>
      </div>
    </section>
  )
}