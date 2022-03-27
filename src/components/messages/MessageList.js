import React, { useContext, useEffect } from "react"
import "./Message.css"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useNavigate } from "react-router-dom"
export const MessageList = () => {

  const { messages, getMessages } = useContext(MessageContext)

  useEffect(() => {
    getMessages()

  }, [])

  // const navigate = useNavigate() 

  return (
    <>
          <h2>Messages</h2>
    <div className="messages">
      {
        messages.map(message => {
          return <MessageCard key={message.id} message={message} />
        })
      }
    </div>
    </>
  )
    }
  

