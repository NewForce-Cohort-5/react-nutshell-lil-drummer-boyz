import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Logout } from "../auth/Logout"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


export const NavBar =() => {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                <li className="nav-item-img">
                        <Link className="nav-link" to="/"><img src="https://i.imgur.com/WPXaeyV.png" alt="LilDrummerBoyZ" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="articles/">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log out</Link>
                        </li>
                    </ul>
                </span>
            </nav>
        )
    }

