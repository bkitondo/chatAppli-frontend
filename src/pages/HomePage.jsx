import React, { useState } from 'react'
import DispayUsers from '../components/DisplayUsers'
import User from '../components/User'
import DisplayDiscussion from '../components/DisplayDiscussion'
import '../styles/HomePage.css'

function HomePage() {
  const [currentChat, setCurrentChat] = useState({
    userName: ' ',
    userId: ' ',
  })
  const [conversationId, setConversationId] = useState('')

  return (
    <div className="HomePage">
      <User />
      <DispayUsers
        setCurrentChat={setCurrentChat}
        currentChat={currentChat}
        setConversationId={setConversationId}
      />
      <DisplayDiscussion
        currentChat={currentChat}
        conversationId={conversationId}
      />
    </div>
  )
}

export default HomePage
