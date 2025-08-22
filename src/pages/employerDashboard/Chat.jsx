import React from 'react'
import NewsFeedHeader from '../../components/NewsFeedHeader'
import ChatsRight from '../../components/recruterchats/chats-right'
import ChatsLeft from '../../components/recruterchats/chats-left'
import ChatsMiddle from '../../components/recruterchats/chats-middle'

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <NewsFeedHeader />

      {/* Main Grid */}
      <div className="flex-1 w-full max-w-screen-xl mx-auto p-2 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr_1fr] gap-4 h-full">
          {/* Left Sidebar */}
          <div className="bg-[#1A3E32] rounded-lg overflow-y-auto">
            <ChatsLeft />
          </div>

          {/* Middle Chat Section */}
          <div className="bg-white rounded-lg overflow-y-auto">
            <ChatsMiddle />
          </div>

          {/* Right Sidebar (hidden on small & medium) */}
          <div className="hidden lg:block bg-gray-100 rounded-lg overflow-y-auto">
            <ChatsRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
