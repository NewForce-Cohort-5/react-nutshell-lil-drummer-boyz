import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MessageContext = createContext()

// This component establishes what data can be used.
export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }

    const addMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}`)
            .then(res => res.json())
    }

    const updateMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
          .then(getMessages)
      }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, updateMessage, getMessageById
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}
