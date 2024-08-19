import React from "react";
import Header from "../components/Header";
import LeftSideMenu from "../components/LeftSideMenu";
import { Outlet } from "react-router-dom";
import RightSidemenu from "../components/RightSidemenu";

const Layout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Header */}
      <Header />
      <div className="grid grid-cols-12">
        {/* Left Menu */}
        <div className="col-span-4">
          <LeftSideMenu />
        </div>
        {/* Outlet */}
        <div className="col-span-6 mt-8 px-5 -ml-36">
          <Outlet />
        </div>
        <div className="col-span-2">
          <RightSidemenu />
        </div>
      </div>
    </div>
  );
};

export default Layout;
