import React from "react";
import { FaTasks } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { TbHelpOctagon } from "react-icons/tb";
import { Link } from "react-router-dom";

const LeftSideMenu = () => {
  return (
    <div className="bg-slate-200 h-[730px] w-64 ">
      <div className="flex flex-col gap-10 mx-10 py-10">
        <Link to={"/"} className="flex items-center gap-2 text-2xl font-">
          {" "}
          <RiHome2Line size={35}/> Dashboard
        </Link>
        <Link to={"/projects"} className="flex items-center gap-2 text-2xl font-">
          {" "}
          <GoProjectRoadmap size={35}/> Projects
        </Link>
        <Link to={"/tasks"} className="flex items-center gap-2 text-2xl font-">
          {" "}
          <FaTasks size={35}/> Tasks
        </Link>
        <Link to={"/settings"} className="flex items-center gap-2 text-2xl font-">
          {" "}
          <IoSettingsOutline  size={35}/> Settings
        </Link>
        <Link to={"/help"} className="flex items-center gap-2 text-2xl font-">
          {" "}
          <TbHelpOctagon size={35}/> Help
        </Link>
        
      </div>
    </div>
  );
};

export default LeftSideMenu;
