import React from "react";
import Home from "./components/Home/Home";
import LteNavbar from "./components/Navbar/LteNavbar";
import SidebarLte from "./components/Sidebar/LteSidebar";

const Admin = () => {
  return (
    <>
      <LteNavbar />
      <SidebarLte />
      <div className="content-wrapper">
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Admin;
