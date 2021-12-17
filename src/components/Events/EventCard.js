import React from "react"
import "./Event.css"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__name">{event.name}</h3>
        <address className="address">{event.location}</address>
        <date className="event_date">{event.date}</date>
    </section>
)