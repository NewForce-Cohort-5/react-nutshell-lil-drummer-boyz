import React, { useState } from "react";
import {NavBar} from "./nav/NavBar";
import {ApplicationViews} from "./ApplicationViews";
import { Login } from "./auth/Login";
import "./Nutshell.css";
import { Register } from "./auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";

export const Nutshell = () => {

  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("nutshell_user")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
} else { 
  return (
    <Routes>
       <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
    </Routes>
  );
}

};