import React from "react"
import { useNavigate } from "react-router-dom"
import "./Message.css"

export const MessageCard = ({ message }) => {
    
    const navigate = useNavigate()
   return (
    <section className="message">
        <div className="message__name">{message.user.name}</div>
        <div className="message__text">{message.message}</div>
        <button onClick = {() => {
            navigate(`/messages/edit/${message.id}`)
        }}>Edit</button>
    </section>
) }
