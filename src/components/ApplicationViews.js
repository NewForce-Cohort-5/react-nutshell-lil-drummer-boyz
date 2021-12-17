import { Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Home } from "./Home";
import { MessageList } from "./messages/MessageList";
import { MessageProvider } from "./messages/MessageProvider";
import { UserProvider } from "./friends/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider";
import { MessageForm } from "./messages/MessageForm";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import { Logout } from "./auth/Logout";
import { NewsList } from "./news/NewsList"
import { NewsProvider } from "./news/NewsProvider"
import { NewsForm } from "./news/NewsForm";

export const ApplicationViews = () => {

    return (
    <MessageProvider>
      <UserProvider>
        <TaskProvider>
          <NewsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messages/*" element={<><MessageList /><MessageForm /></>} />
        <Route path="/messages/edit/:messageId/*" element={<MessageForm />} />
        <Route path="/tasks/*" element={<TaskList />} />
        <Route path="/tasks/create*" element={<TaskForm />} />
        <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
        <Route path="articles/*" element={<NewsList />} />
        <Route path="articles/create/*" element={<NewsForm />} />
        <Route path="/articles/edit/:articleId/*" element={<NewsForm />} />
      </Routes>
      </NewsProvider>
        </TaskProvider>
      </UserProvider>
    </MessageProvider>
    );
  }