import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Smile,
  Plus,
  Paperclip,
  Mic,
  Send,
} from 'lucide-react';
import user1Avatar from '/assets/images/user1.png';
import user2Avatar from '/assets/images/user2.png';
import user3Avatar from '/assets/images/user3.png';
import user4Avatar from '/assets/images/user4.png';
import user5Avatar from '/assets/images/user5.png';
import user6Avatar from '/assets/images/user6.png';
import placeholderImage from '/assets/images/image.png';
import NewsFeedHeader from '../../components/NewsFeedHeader';

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [view, setView] = useState('chatList'); // mobile: 'chatList' | 'chatWindow'
  const [activeUsers, setActiveUsers] = useState([]);

  const users = React.useMemo(() => [
    {
      id: 1,
      name: 'Okpata Favour',
      lastMessage: 'Hey...',
      avatar: user1Avatar,
      jobTitle: 'Recruiter',
      email: 'okpata.favour@example.com',
      phone: '+234 8012345678',
      linktree: 'https://linktree.com/okpata',
      lastActive: new Date(),
    },
    {
      id: 2,
      name: 'Osakwe Prisca',
      lastMessage: 'online',
      avatar: user2Avatar,
      jobTitle: 'Jobseeker',
      email: 'osakweprisca@gmail.com',
      phone: '+234 7067410614',
      linktree: 'https://linktree.com/prisca',
      lastActive: new Date(Date.now() - 25 * 60 * 60 * 1000),
    },
    {
      id: 3,
      name: 'Efe Elisha',
      lastMessage: 'Hey...',
      avatar: user3Avatar,
      jobTitle: 'Software Engineer',
      email: 'efe.elisha@example.com',
      phone: '+234 9012345678',
      linktree: 'https://linktree.com/elisha',
      lastActive: new Date(),
    },
    {
      id: 4,
      name: 'Salik Raymond',
      lastMessage: 'Hey...',
      avatar: user4Avatar,
      jobTitle: 'Designer',
      email: 'salik.raymond@example.com',
      phone: '+234 8112345678',
      linktree: 'https://linktree.com/raymond',
      lastActive: new Date(),
    },
    {
      id: 5,
      name: 'Jaden Ellen',
      lastMessage: 'Hey...',
      avatar: user5Avatar,
      jobTitle: 'Product Manager',
      email: 'jaden.ellen@example.com',
      phone: '+234 7112345678',
      linktree: 'https://linktree.com/jaden',
      lastActive: new Date(),
    },
    {
      id: 6,
      name: 'Quadson Pritex',
      lastMessage: 'Hey...',
      avatar: user6Avatar,
      jobTitle: 'Marketing Specialist',
      email: 'quadson.pritex@example.com',
      phone: '+234 9212345678',
      linktree: 'https://linktree.com/quadson',
      lastActive: new Date(),
    },
  ], []);

  useEffect(() => {
    const active = users
      .filter(user => user.lastActive && new Date(user.lastActive) > new Date(Date.now() - 24 * 60 * 60 * 1000))
      .map(user => user.id);
    setActiveUsers(active);
  }, [users]);

  const currentActiveUser = users.find(user => user.id === activeChat);

  const initialMessages = {
    1: [
      {
        id: 1,
        sender: 'Okpata Favour',
        text: "Hello Prisca, We've reviewed your CV and portfolio...",
        time: 'Sat at 11:00 AM',
        type: 'received',
      },
      {
        id: 2,
        sender: 'You',
        text: "Thank you for reaching out. I'm interested in the role...",
        time: 'Sat at 11:05 AM',
        type: 'sent',
      },
      {
        id: 3,
        sender: 'Okpata Favour',
        text: "Great! Let's go with Friday at 10:00 AM.",
        time: 'Sun at 5:05 AM',
        type: 'received',
      },
    ],
    2: [], 3: [], 4: [], 5: [], 6: [],
  };

  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeChat]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChat) return;

    const newMsg = {
      id: Date.now(),
      sender: 'You',
      text: newMessage.trim(),
      time: new Date().toLocaleString('en-US', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      type: 'sent',
    };

    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMsg],
    }));

    setNewMessage('');
  };

  return (
    <main className="flex flex-col h-screen font-inter">
      {/* Conditional for render NewsFeedHeader for desktop */}
      <div className="hidden md:block">
        <NewsFeedHeader />
      </div>

      {/* === MOBILE CHAT === */}
      <section className="flex-1 md:hidden">
        {/* Chat List */}
        {view === 'chatList' && (
          <div className="flex flex-col h-full bg-[#f5f5f5]">
            {/* Header with Search Bar */}
            <div className="p-4 bg-[#8fa77a] flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Chat</h2>
              {/* Reduced-size Search Bar */}
              <div className="flex items-center bg-white rounded-full px-2 py-0.5 mx-2 w-1/2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 text-xs bg-transparent focus:outline-none"
                />
                <Search size={14} className="text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700">✕</button>
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#27AE60"
                      fillRule="evenodd"
                      d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
                      strokeWidth="13"
                      stroke="#27AE60"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Divider between Header and Active Users */}
            <hr className="border-t-2 border-[#16730F] my-2" />

            {/* Active Users */}
            <div className="flex gap-4 overflow-x-auto px-4 py-2 bg-[#23412f]">
              {users
                .filter(user => activeUsers.includes(user.id))
                .map(user => (
                  <div key={user.id} className="flex flex-col items-center">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-900 border-2 border-white rounded-full" />
                    </div>
                    <p className="text-xs text-[#FFB547] mt-1">{user.name.split(' ')[0]}</p>
                  </div>
                ))}
            </div>

            {/* Divider between Active Users and Chat List */}
            <hr className="border-t-2 border-[#16730F] my-2" />

            {/* Chat List */}
            <div className="flex flex-col overflow-y-auto px-4 py-3 gap-3">
              {users.map((user, index) => (
                <React.Fragment key={user.id}>
                  <div
                    className="flex items-center justify-between p-2 rounded-lg cursor-pointer bg-[#f5f5f5] hover:bg-gray-100"
                    onClick={() => {
                      setActiveChat(user.id);
                      setView('chatWindow');
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{user.name}</p>
                        <p className="text-xs text-green-700 italic">typing</p>
                      </div>
                    </div>
                    <span className="w-2 h-2 bg-green-900 rounded-full"></span>
                  </div>
                  {index < users.length - 1 && (
                    <hr className="border-t-2 border-[#16730F] my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Chat Window */}
        {view === 'chatWindow' && activeChat && (
          <div className="flex flex-col h-full bg-[#f8f8f8]">
            {/* Header */}
            <div className="bg-[#8fa77a] p-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-3">
                <button onClick={() => setView('chatList')}>
                  <ChevronLeft size={22} className="text-white" />
                </button>
                <img
                  src={currentActiveUser?.avatar}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-white">{currentActiveUser?.name}</p>
                  <p className="text-xs text-green-200">online</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <Phone size={20} />
                <Video size={20} />
                <MoreHorizontal size={20} />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {(messages[activeChat] || []).map(message => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${
                    message.type === 'sent' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm shadow ${
                      message.type === 'sent'
                        ? 'bg-[#23412f] text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.type === 'received' && (
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={currentActiveUser.avatar}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="font-semibold text-xs">{message.sender}</span>
                      </div>
                    )}
                    <p>{message.text}</p>
                    <span className="block text-[10px] mt-1 text-right text-gray-400">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="w-full flex items-center bg-white border border-green-700 rounded-full px-4 py-2 mx-auto mb-2">
              <div className="flex items-center space-x-2">
                <button className="text-gray-600 hover:text-green-600">
                  <Smile size={20} />
                </button>
                <button className="text-gray-600 hover:text-green-600">
                  <Plus size={20} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent focus:outline-none text-gray-800 ml-3"
              />
              <div className="flex items-center space-x-3">
                <button className="text-gray-600 hover:text-green-600">
                  <Paperclip size={20} />
                </button>
                <button className="text-gray-600 hover:text-green-600">
                  <Mic size={20} />
                </button>
                <button
                  className="bg-green-800 text-yellow-400 p-2 rounded-full hover:bg-green-700"
                  onClick={handleSendMessage}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* === DESKTOP CHAT === */}
      <section className="hidden md:flex flex-1 bg-gray-100 rounded-lg">
        {/* Sidebar */}
        <div
          className="w-72 bg-[#143d2a] text-white flex flex-col p-4 md:rounded-tl-lg md:rounded-bl-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-[#f4a300]">Chat</h2>
          </div>

          {/* Search */}
          <div className="flex items-center bg-white rounded-xl px-3 py-2 mb-4">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent border-none outline-none text-black text-sm"
            />
            <Search size={16} color="#143d2a" />
          </div>

          {/* Active Users */}
          <div className="flex gap-3 overflow-x-auto mb-4">
            {users
              .filter(user => activeUsers.includes(user.id))
              .map(user => (
                <div key={user.id} className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  </div>
                  <p className="text-xs text-[#f4a300] mt-1">{user.name.split(' ')[0]}</p>
                </div>
              ))}
          </div>

          {/* Divider between Active Users and Chat List */}
          <div className="border-t-2 border-[#16730F] mb-4" />

          {/* Chat List */}
          <div className="flex flex-col gap-3 overflow-y-auto">
            {users.map(user => (
              <div
                key={user.id}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  activeChat === user.id ? 'bg-[#2d5a2d]' : 'hover:bg-[#1f523c]'
                }`}
                onClick={() => setActiveChat(user.id)}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium">{user.name}</h4>
                  <p className="text-xs text-green-700 italic">{user.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        {activeChat && (!messages[activeChat] || messages[activeChat].length === 0) ? (
          <div className="hidden md:flex flex-1 flex-col justify-center items-center text-center text-[#2d5a2d] p-4 rounded-tr-lg rounded-br-lg">
            <img src={placeholderImage} alt="" />
            <h2 className="text-2xl font-bold mb-2">Start a Conversation</h2>

            {/* Message Input */}
            <div className="w-full -w-lg mt-auto flex items-center bg-gray-200 border border-green-500 rounded-2xl px-4 py-2 mx-auto">
              <div className="flex items-center space-x-2">
                <button className="text-black hover:text-green-600">
                  <Smile size={22} />
                </button>
                <button className="text-black hover:text-green-600">
                  <Plus size={22} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent focus:outline-none text-green-700 placeholder-green-600 ml-3"
              />
              <div className="flex items-center space-x-3">
                <button className="text-black hover:text-green-600">
                  <Paperclip size={22} />
                </button>
                <button className="text-black hover:text-green-600">
                  <Mic size={22} />
                </button>
                <button
                  className="bg-green-900 text-yellow-400 p-2 rounded-full hover:bg-green-800"
                  onClick={handleSendMessage}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : activeChat ? (
          <div className="flex-1 flex flex-col bg-gray-50 rounded-tr-lg rounded-br-lg">
            {/* Chat Header */}
            <div className="bg-[#8fa77a] p-4 flex items-center justify-between rounded-tr-lg shadow">
              <div className="flex items-center gap-3">
                <img
                  src={currentActiveUser?.avatar}
                  alt={currentActiveUser?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{currentActiveUser?.name}</h3>
                  <p className="text-green-500 text-sm">online</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gray-600 hover:text-[#143d2a] cursor-pointer" />
                <Video className="text-gray-600 hover:text-[#143d2a] cursor-pointer" />
                <MoreHorizontal className="text-gray-600 hover:text-[#143d2a] cursor-pointer" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto">
              {(messages[activeChat] || []).map(message => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${
                    message.type === 'sent' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg shadow text-sm ${
                      message.type === 'sent'
                        ? 'bg-[#143d2a] text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.type === 'received' && (
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={currentActiveUser.avatar}
                          alt={message.sender}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="font-semibold">{message.sender}</span>
                      </div>
                    )}
                    <p>{message.text}</p>
                    <span className="block text-xs mt-1 text-right text-gray-400">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="w-full flex items-center bg-gray-200 border border-green-500 rounded-2xl px-4 py-2 mx-auto">
              <div className="flex items-center space-x-2">
                <button className="text-black hover:text-green-600">
                  <Smile size={22} />
                </button>
                <button className="text-black hover:text-green-600">
                  <Plus size={22} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent focus:outline-none text-green-700 placeholder-green-600 ml-3"
              />
              <div className="flex items-center space-x-3">
                <button className="text-black hover:text-green-600">
                  <Paperclip size={22} />
                </button>
                <button className="text-black hover:text-green-600">
                  <Mic size={22} />
                </button>
                <button
                  className="bg-green-900 text-yellow-400 p-2 rounded-full hover:bg-green-800"
                  onClick={handleSendMessage}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 flex-col justify-center items-center text-center text-[#2d5a2d] p-4 rounded-tr-lg rounded-br-lg">
            <img src={placeholderImage} alt="" />
            <h2 className="text-2xl font-bold mb-2">No Conversation Selected</h2>
            <p className="text-gray-600">
              Choose a conversation on the left to view or respond to messages.
            </p>
          </div>
        )}

        {/* Profile Panel */}
        {activeChat && currentActiveUser && (
          <div className="hidden md:flex w-72 bg-[#2d5a2d] text-white flex-col items-center p-6 rounded-tr-lg rounded-br-lg">
            <img
              src={currentActiveUser.avatar}
              alt={currentActiveUser.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white"
            />
            <h3 className="text-lg font-bold">{currentActiveUser.name}</h3>
            <p className="text-sm text-gray-200 mb-4">{currentActiveUser.jobTitle}</p>
            <button className="bg-[#f4a300] text-[#143d2a] font-semibold px-6 py-2 rounded-lg mb-4">
              View Profile
            </button>

            <div className="w-full space-y-3 text-sm">
              <p>
                <span className="font-semibold">Email:</span> {currentActiveUser.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {currentActiveUser.phone}
              </p>
              <p>
                <span className="font-semibold">Linktree:</span>{' '}
                <a
                  href={currentActiveUser.linktree}
                  className="text-[#f4a300] hover:underline"
                >
                  {currentActiveUser.linktree}
                </a>
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Chat;