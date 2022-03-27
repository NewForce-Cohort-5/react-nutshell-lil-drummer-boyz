import React, { useState } from "react";
import {NavBar} from "./nav/NavBar";
import {ApplicationViews} from "./ApplicationViews";
import { Login } from "./Auth/Login";
import "./Nutshell.css";
import { Register } from "./Auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";

export const Nutshell = () => {

  const [loggedin, setLoggedin] = useState(false);

    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
} else { 
  return (
    <Routes>
       <Route path="/" element={<Navigate to="login" />} />
};
