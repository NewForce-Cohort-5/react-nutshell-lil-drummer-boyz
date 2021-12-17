import { Route, Routes } from "react-router-dom";
import  React from "react";
import { Register } from "./Auth/Register";
import { Login } from "./Auth/Login"
import { Home } from "./Home";
import { EventProvider } from "./Events/EventProvider"
import { EventList } from "./Events/EventList"
import { EventForm } from "./Events/EventForm"


export const ApplicationViews = () => {
  
     
    return (
        <EventProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              
                <Route path="/events/*" element={<EventList />} />
                <Route path="events/create/*" element={<EventForm />} />
             
        </Routes>
        </EventProvider>
    )
}