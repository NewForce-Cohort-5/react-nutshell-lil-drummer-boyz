import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./UserCard"


export const UserList = () => {
  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    getUsers()

  }, [])

  return (
    <div className="users">
      {
        users.map(user => {

            return <UserCard key={user.id} customer={user} />
        })
      }
    </div>
  )
}
