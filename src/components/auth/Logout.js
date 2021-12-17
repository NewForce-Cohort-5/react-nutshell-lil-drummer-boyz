import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Logout = () => {

const navigate = useNavigate()
const existDialog = useRef()
const { isLoggedIn } = this.state;

const handleLogout = (e) => {
    e.preventDefault()
    
    if (isLoggedIn) {
        window.localStorage.clear()
        .then(navigate("/login"))
    } else {
        existDialog.current.showModal()
    }}

return (
    <main className="container--logout">
        {/* <dialog className="dialog dialog--auth" ref={existDialog}>
            <div>User is not logged in</div>
            <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
        </dialog> */}
       

        <button onClick={event => {
            event.preventDefault()
            handleLogout()}}>Logout</button>

</main>
)
}




 
// import React, { Component } from 'react'
// export default class UserLogout extends Component {
 
//  logout = () => {
//     localStorage.clear();
// // you can also like localStorage.removeItem('Token');
//     window.location.href = "/login";
//   }
 
//   render() {
//     return (
//       <button onClick={this.logout}>Logout</button>
//     )
//   }
// }