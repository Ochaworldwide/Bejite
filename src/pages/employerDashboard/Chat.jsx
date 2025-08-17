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

  {/* Main Grid (scrolls as one) */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 p-4 max-w-screen-xl mx-auto w-full flex-1">
    {/* Left Sidebar */}
    <div>
      <ChatsLeft />
    </div>

    {/* Middle Chat Section */}
    <div>
      <ChatsMiddle />
    </div>

    {/* Right Sidebar */}
    <div>
      <ChatsRight />
    </div>
  </div>
</div>

  )
}

export default Chat
