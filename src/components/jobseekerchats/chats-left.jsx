import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

function ChatsLeft({ onSelectChat, onBack, selectedChat }) {
  const conversations = [
    { 
      id: 1, 
      name: "Okpata Favour", 
      image: "https://via.placeholder.com/50", 
      lastMessage: "Hi Idris Joseban, You've been invited for an interview...", 
      time: "09:45 AM", 
      unread: 1,
      online: true
    },
    { 
      id: 2, 
      name: "Sarah Wilson", 
      image: "https://via.placeholder.com/50", 
      lastMessage: "Thanks for your application. We'll get back to you soon.", 
      time: "Yesterday", 
      unread: 0,
      online: false
    },
    { 
      id: 3, 
      name: "John Marketing", 
      image: "https://via.placeholder.com/50", 
      lastMessage: "When can we schedule the next interview?", 
      time: "2 days ago", 
      unread: 0,
      online: true
    },
  ];

  return (
    <div className="bg-[#1A3E32] h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-[#556B1F]/30">
        <button
          type="button"
          aria-label="Go back"
          onClick={onBack}
          className="flex items-center text-[#556B1F] hover:text-white transition lg:hidden"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-[20px] text-[#556B1F]">Messages</h2>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-white rounded-full px-3 py-2">
          <input
            className="w-full outline-none bg-transparent text-sm placeholder-gray-500"
            placeholder="Search conversations..."
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-2">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat)}
              className={`flex items-center gap-3 p-3 mx-2 rounded-lg hover:bg-[#556B1F]/20 cursor-pointer transition-colors ${
                selectedChat?.id === chat.id ? 'bg-[#556B1F]/30' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1A3E32] rounded-full"></div>
                )}
                {chat.unread > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white text-sm font-medium truncate">{chat.name}</h3>
                  <span className="text-[#556B1F] text-xs flex-shrink-0">{chat.time}</span>
                </div>
                <p className="text-gray-400 text-xs truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Employer */}
        <div className="p-4 mt-4 border-t border-[#556B1F]/30">
          <div className="flex items-center gap-3 p-3 mx-2 rounded-lg hover:bg-[#556B1F]/20 cursor-pointer transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
              <FaSearch />
            </div>
            <span className="text-white text-sm">See More Employer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatsLeft;