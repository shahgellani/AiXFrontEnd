import React from "react";
import Tasks from "./Tasks";
import LteNavbar from "../Navbar/LteNavbar";
import SidebarLte from "../Sidebar/LteSidebar";

const TasksWrapper = () => {
  return (
    <>
      <LteNavbar />
      <SidebarLte />
      <div className="content-wrapper">
        <Tasks />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default TasksWrapper;
