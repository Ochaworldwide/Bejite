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

const Chat = () => {
  const [activeChat, setActiveChat] = useState(2); // Start with Osakwe Prisca's invitation
  const [newMessage, setNewMessage] = useState('');
  const [view, setView] = useState('chatWindow');
  const [activeUsers, setActiveUsers] = useState([]);
  const [invitationStatus, setInvitationStatus] = useState({
    2: 'waiting', // Osakwe Prisca's invitation
  });

  const users = React.useMemo(() => [
    {
      id: 1,
      name: 'Okpata Favour',
      lastMessage: 'Hi Prisca Osakwe...',
      avatar: user1Avatar,
      jobTitle: 'Employer',
      email: 'osakweprisca@gmail.com',
      phone: '+234 7067410614',
      linktree: 'https://linktree.com',
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
      linktree: 'https://linktree.com',
      lastActive: new Date(Date.now() - 25 * 60 * 60 * 1000),
      invitation: {
        role: 'Graphics Designer',
        dateTime: 'SAT at 11:06 AM',
        message: "Hi Prisca Osakwe, you've been shortlisted for the Graphics Designer position. We'd love to meet you during an interview on July 20th, 9:00am via https://meet.google.com/yyy-vbt-amu. Kindly confirm your availability. We're excited to learn more about you!",
      },
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
    1: [],
    2: [],
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

  const handleAcceptInvitation = () => {
    setInvitationStatus(prev => ({ ...prev, [activeChat]: 'accepted' }));
    setMessages(prev => ({
      ...prev,
      [activeChat]: [
        ...prev[activeChat],
        {
          id: Date.now(),
          sender: 'System',
          text: "You've accepted the invitation!! You can now start a conversation with Okpata Favour.",
          time: new Date().toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true }),
          type: 'received',
        },
      ],
    }));
  };

  const handleDeclineInvitation = () => {
    setInvitationStatus(prev => ({ ...prev, [activeChat]: 'expired' }));
  };

  return (
    <main className="flex h-screen font-sans">
      {/* DESKTOP CHAT */}
      <section className="hidden md:flex flex-1">
        {/* Invitations List */}
        <div className="w-72 bg-[#143d2a] text-white flex flex-col p-4 rounded-tl-lg rounded-bl-lg">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-[#f4a300]">Invitations</h2>
          </div>
          <div className="flex items-center bg-white rounded-xl px-3 py-2 mb-4">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent border-none outline-none text-black text-sm"
            />
            <Search size={16} color="#143d2a" />
          </div>
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
          <div className="border-t-2 border-[#16730F] mb-4" />
          <div className="flex flex-col gap-3 overflow-y-auto">
            {users.map(user => (
              <div
                key={user.id}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  activeChat === user.id ? 'bg-[#2d5a2d]' : 'hover:bg-[#1f523c]'
                }`}
                onClick={() => {
                  setActiveChat(user.id);
                  setView('chatWindow');
                }}
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
        {activeChat && (
          <div className="flex-1 flex flex-col bg-white rounded-tr-lg rounded-br-lg">
            <div className="bg-[#8fa77a] p-4 flex items-center justify-between rounded-tr-lg shadow">
              <div className="flex items-center gap-3">
                <img
                  src={currentActiveUser?.avatar}
                  alt={currentActiveUser?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{currentActiveUser?.name}</h3>
                  <p className="text-green-200 text-sm">online</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <Phone size={20} />
                <Video size={20} />
                <MoreHorizontal size={20} />
              </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              {currentActiveUser?.invitation && (
                <div className="text-center">
                  {invitationStatus[activeChat] === 'accepted' ? (
                    <>
                      <h2 className="text-2xl font-bold text-[#2d5a2d] mb-2">
                        You've accepted the invitation!!
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        You can now start a conversation with Okpata Favour.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#2d5a2d] mb-2">
                        You've been invited for an interview!
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        {currentActiveUser.invitation.message}
                      </p>
                      <div className="flex justify-center gap-4 mb-4">
                        <p className="text-sm">JOB ROLE</p>
                        <p className="text-sm">{currentActiveUser.invitation.role}</p>
                      </div>
                      <div className="flex justify-center gap-4 mb-4">
                        <p className="text-sm">DATE/TIME SENT</p>
                        <p className="text-sm">{currentActiveUser.invitation.dateTime}</p>
                      </div>
                      <div className="flex justify-center gap-4">
                        <button
                          className="bg-green-700 text-white px-4 py-2 rounded"
                          onClick={handleAcceptInvitation}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={handleDeclineInvitation}
                        >
                          Decline
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
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
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
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
            <div className="w-full flex items-center bg-gray-200 border border-green-700 rounded-xl px-4 py-2 mx-auto mb-2">
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

        {/* Profile Sidebar */}
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
                <span className="font-semibold">Linktree:</span>
                <a href={currentActiveUser.linktree} className="text-[#f4a300] hover:underline">
                  {currentActiveUser.linktree}
                </a>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* MOBILE CHAT */}
      <section className="flex-1 md:hidden">
        {view === 'chatList' && (
          <div className="flex flex-col h-full bg-[#f5f5f5]">
            <div className="p-4 bg-[#8fa77a] flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Invitations</h2>
              <div className="flex items-center bg-white rounded-full px-2 py-0.5 mx-2 w-1/2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 text-xs bg-transparent focus:outline-none"
                />
                <Search size={14} className="text-gray-500" />
              </div>
            </div>
            <hr className="border-t-2 border-[#16730F] my-2" />
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
            <hr className="border-t-2 border-[#16730F] my-2" />
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
                        <p className="text-xs text-green-700 italic">{user.lastMessage}</p>
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

        {view === 'chatWindow' && activeChat && (
          <div className="flex flex-col h-full bg-[#f8f8f8]">
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
            <div className="flex-1 p-4 overflow-y-auto">
              {currentActiveUser?.invitation && (
                <div className="text-center">
                  {invitationStatus[activeChat] === 'accepted' ? (
                    <>
                      <h2 className="text-2xl font-bold text-[#2d5a2d] mb-2">
                        You've accepted the invitation!!
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        You can now start a conversation with Okpata Favour.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#2d5a2d] mb-2">
                        You've been invited for an interview!
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        {currentActiveUser.invitation.message}
                      </p>
                      <div className="flex justify-center gap-4 mb-4">
                        <p className="text-sm">JOB ROLE</p>
                        <p className="text-sm">{currentActiveUser.invitation.role}</p>
                      </div>
                      <div className="flex justify-center gap-4 mb-4">
                        <p className="text-sm">DATE/TIME SENT</p>
                        <p className="text-sm">{currentActiveUser.invitation.dateTime}</p>
                      </div>
                      <div className="flex justify-center gap-4">
                        <button
                          className="bg-green-700 text-white px-4 py-2 rounded"
                          onClick={handleAcceptInvitation}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={handleDeclineInvitation}
                        >
                          Decline
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
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
            <div className="w-full flex items-center bg-gray-200 border border-green-700 rounded-xl px-4 py-2 mx-auto mb-2">
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
    </main>
  );
};

export default Chat;