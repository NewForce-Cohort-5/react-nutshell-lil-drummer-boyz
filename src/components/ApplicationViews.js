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

export const ApplicationViews = () => {

    return (
    <MessageProvider>
      <UserProvider>
        <TaskProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messages/*" element={<><MessageList /><MessageForm /></>} />
        <Route path="/messages/edit/:messageId/*" element={<MessageForm />} />
        <Route path="/tasks/*" element={<TaskList />} />
        <Route path="/tasks/create*" element={<TaskForm />} />
        <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
      </Routes>
        </TaskProvider>
      </UserProvider>
    </MessageProvider>
    );
  }