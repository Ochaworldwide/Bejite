import React, { useState } from 'react';
import { FaArrowLeft, FaPhone, FaVideo, FaBars } from 'react-icons/fa';

function ChatsMiddle({ selectedChat, onShowChatList, onShowChatInfo }) {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState('');

  const handleAccept = () => {
    setAgreed(true);
  };

  if (!selectedChat) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">💬</div>
          <p className="text-lg">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#ebebeb] flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center gap-3">
          <button
            onClick={onShowChatList}
            className="lg:hidden text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft />
          </button>
          <img
            src={selectedChat.image}
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full object-cover lg:hidden"
          />
          <div>
            <h1 className="text-[#16730F] text-xl font-medium">{selectedChat.name}</h1>
            <p className="text-sm text-gray-600">
              {selectedChat.online ? 'Online' : 'Last seen recently'}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button className="bg-[#16730F] text-white p-2 rounded-full hover:bg-[#1a5c13] transition">
            <FaPhone className="text-sm" />
          </button>
          <button className="bg-[#16730F] text-white p-2 rounded-full hover:bg-[#1a5c13] transition">
            <FaVideo className="text-sm" />
          </button>
          <button 
            onClick={onShowChatInfo}
            className="lg:hidden text-gray-600 hover:text-gray-800 transition-colors ml-2"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Interview Status */}
        <div className="text-center mb-6">
          {!agreed ? (
            <>
              <p className="text-xl font-semibold text-center text-[#16730F] mb-2">You've been invited for an interview!</p>
              <p className="text-sm text-center text-[#16730F] px-4">Okpata favour has invited you for an interview as a Graphics Designer on July 20th, 9:00am. Please respond within 72 hours. If no response, this invite will be automatically declined.</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-xl font-semibold text-center text-[#16730F] mb-2">You have accepted the interview invite.</p>
              <p className="text-sm text-center text-[#16730F]">You can now start a conversation with Okpata Favour.</p>
            </>
          )}
        </div>

        {/* Message Bubble */}
        <div className="flex justify-center mb-6">
          <div className="max-w-md">
            <div className="flex items-start space-x-3">
              <img
                src={selectedChat.image}
                alt="profile"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="bg-[#f1f1f1] p-3 rounded-lg text-sm">
                <p className="text-gray-800">
                  Hi Idris Joseban, <br />
                  You've been invited for an interview as a Graphics Designer on{" "}
                  <strong>July 20th, 9:00am</strong>. Please respond within 72 hours.
                  If no response, this invite will be automatically declined.
                </p>
                <p className="text-xs text-gray-500 mt-2">09:45 AM</p>
              </div>
            </div>

            {!agreed && (
              <>
              <h1 className='text-left'>status:</h1>
              <div className="flex gap-3 mt-4 justify-center">
                 <button
                  
                  className=" bg-[#FFB547] text-[#16730F] px-8 py-2 rounded-md  transition"
                >
                  waiting
                </button>

                <button
                  onClick={handleAccept}
                  className="border-[#16730F] border-2 text-[#16730F] px-8 py-2 rounded-md  transition"
                >
                  Accepted
                </button>
                <button className="border-[#EB5757] border-2 text-[#EB5757] px-8 py-2 rounded-md  transition">
                  Expired
                </button>
              </div>
              </>
              
            )}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex flex-col gap-2 border border-[#16730F] rounded-2xl px-4 py-3 bg-gray-100 shadow-sm">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 outline-none text-sm bg-transparent placeholder-gray-400"
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="text-gray-500 hover:text-green-600 text-lg"
                aria-label="Add emoji"
              >
                😊
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-green-600 text-lg"
                aria-label="Attach file"
              >
                ＋
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="text-gray-500 hover:text-green-600 text-lg"
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
  );
}

export default ChatsMiddle;