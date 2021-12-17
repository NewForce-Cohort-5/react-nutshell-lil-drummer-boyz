import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../friends/UserProvider"
import { MessageContext } from "./MessageProvider"
import "./Message.css"
import { useNavigate, useParams } from 'react-router-dom';

export const MessageForm = () => {
    const { addMessage, getMessageById, updateMessage } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)
    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {messageId} = useParams();
	  const navigate = useNavigate();
    const handleControlledInputChange = (event) => {
      
      const newMessage = { ...message }
      newMessage[event.target.id] = event.target.value
      setMessage(newMessage)
    }

    const handleSaveMessage = () => {
      if (parseInt(message.userId) === 0) {
          window.alert("")
      } else {
        setIsLoading(true);
        if (messageId){
          //PUT - update
          updateMessage({
              id: parseInt(message.id),
              name: message.name,
              message: message.message,
              userId: parseInt(localStorage.getItem("nutshell_user"))
          })
          .then(() => navigate(`/messages/${message.id}`))
        }else {
          //POST - add
          addMessage({
            id: parseInt(message.id),
            name: message.name,
            message: message.message,
            userId: parseInt(localStorage.getItem("nutshell_user"))
          })
          // .then(() => navigate("/messages"))
        }
      }
    }

    useEffect(() => {
      getUsers().then(() => {
        if (users){
          getMessageById(messageId)
          .then(message => {
              setMessage(message)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="messageForm">
        <fieldset>
              <div className="form-group">
                  <input type="text" id="message" onChange={handleControlledInputChange} className="form-control" placeholder="Message" defaultValue={message.message}/>
              </div>
          </fieldset>

        <button className="btn btn-primary"
          // disabled={isLoading}
          onClick={event => {
            event.preventDefault()
            handleSaveMessage()
          }}>
        {messageId ? <>Save Changes</> : <>Send Message</>}</button>
      </form>
    )
}