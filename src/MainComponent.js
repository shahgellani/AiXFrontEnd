import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/logIn/Login";
import SignIn from "./components/signUp/SignIn";
import LteNavbar from "./components/Navbar/LteNavbar";
import SidebarLte from "./components/Sidebar/LteSidebar";
import QueriesWrapper from "./components/Queries/QueriesWrapper";
import TasksWrapper from "./components/Tasks/TasksWrapper";
import Admin from "./Admin";

const MainComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SignIn />}></Route>
      <Route exact path="/" element={<Admin />}></Route>
      <Route exact path="/tasks" element={<TasksWrapper />}></Route>
      <Route exact path="/queries" element={<QueriesWrapper />}></Route>
    </Routes>
  );
};

export default MainComponent;
