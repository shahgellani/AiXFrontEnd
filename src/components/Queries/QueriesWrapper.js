import React from "react";
import LteNavbar from "../Navbar/LteNavbar";
import SidebarLte from "../Sidebar/LteSidebar";
import Queries from "./Queries";

const QueriesWrapper = () => {
  return (
    <>
      <LteNavbar />
      <SidebarLte />
      <div className="content-wrapper">
        <Queries />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default QueriesWrapper;
