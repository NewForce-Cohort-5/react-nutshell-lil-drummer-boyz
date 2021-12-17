import React, { useContext, useEffect } from "react"
import  { useNavigate } from "react-router"

import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { events, getEvents } = useContext(EventContext)
  const navigate = useNavigate();
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EventList: useEffect - getEvents")
    getEvents()
  }, [])


  return (
    <div className="event">
        {console.log("EventList: Render", events)}
        {
            events.map(event => <EventCard key={event.id} event={event} />)
  
        }
                  <h2>Events</h2>
            <button onClick={() => {navigate("create")}}>
                  Add Event
              </button>
    </div>
   
  )
  


      } 