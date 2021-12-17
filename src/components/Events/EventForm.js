import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider";
import "./Event.css"
import { useNavigate, useParams } from 'react-router-dom';

export const EventForm = () => {
    const {  getEvents, addEvent, updateEvent, getEventById } = useContext(EventContext)

    //for edit, hold on to state of animal in this view
    const [eventState, setEventState] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

    const {eventId} = useParams();
	  const navigate = useNavigate();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newEventState = { ...eventState }
      //animal is an object with properties.
      //set the property to the new value
      newEventState[event.target.id] = event.target.value
      //update state
      setEventState(newEventState)
    }



    const handleClickEdit = () => {
        updateEvent ( eventState.id) // should be update event
        .then(() => {
          navigate("/events")
        })
    }
    const handleClickSaveEvent = () => {
      if ((eventState.locationId) === "") {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (eventId){
          //PUT - update
          updateEvent({
              
              id: eventState.id,
              name: eventState.name,
              location: eventState.location,
              date: eventState.date
          })
          .then(() => navigate(`/events/detail/${eventState.id}`))
        }else {
          //POST - add
          addEvent({
              userid: parseInt(eventState.userId),
              name: eventState.name,
              location: eventState.location,
              date: eventState.date
          })
          .then(() => navigate("/events"))

        }
        
        }
        


      }
    
    useEffect(() => {
      getEvents().then(() => {
          if (eventId){
              getEventById(eventId) //add to context on line 7
              .then(event => {
                  setEventState(event) // no longer named set event .. look at that state for new name
                  setIsLoading(false)
              })
          } else {
              setIsLoading(false)
          }
      
  })
  }, [])
  
    

  

    return (
      <form className="eventForm">
          <h2 className="eventForm__title">New Event</h2>
          <fieldset>
              <div className="form-group">
                
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder=" name" defaultValue={eventState.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                
                  <input type="text" id="location" onChange={handleControlledInputChange} required className="form-control" placeholder="Address" defaultValue={eventState.address}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
              
                  <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" placeholder="Date" defaultValue={eventState.date}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEvent}>
            Click to Save?
          </button>
          <button className="btn btn-primary"
            onClick={handleClickEdit}>
            Edit
          </button>
          
      </form>
    )
    
    } 
