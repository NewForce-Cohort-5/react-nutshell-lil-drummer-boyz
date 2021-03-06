import React from "react"

export const UserCard = ({ user }) => (
    <section className="user">
        <h3 className="user__name">{user.name}</h3>
        <address className="user__email">{user.email}</address>
    </section>
)
