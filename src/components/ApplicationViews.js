import { Route, Routes, } from "react-router-dom";
import React from "react";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";
import { Home } from "./Home";
import { NewsList } from "./news/NewsList"
import { NewsProvider } from "./news/NewsProvider"
import { NewsForm } from "./news/NewsForm";


export const ApplicationViews = () => {
  return (

    <NewsProvider>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="articles/*" element={<NewsList />} />
        <Route path="articles/create/*" element={<NewsForm />} />
        <Route path="/articles/edit/:articleId/*" element={<NewsForm />} />
    

        </Routes>
    </NewsProvider>
  )
}