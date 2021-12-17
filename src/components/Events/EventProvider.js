import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used.
export const EventProvider = (props) => {
    const [events, setEvents ] = useState([])

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
        })
          .then(getEvents)
      }

    const getEvents = () => {
        return fetch("http://localhost:8088/events") 
           
        .then(res => res.json())
        .then(setEvents)
    }

    const deleteEvent = () => {
        return fetch("http://localhost:8088/events") 
        .then(res => res.json())
        .then(deleteEvent)
    }

    const addEvent = event => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(getEvents)
    }

   
    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, updateEvent, deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}