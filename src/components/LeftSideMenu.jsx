import React from "react";
import { FaTasks } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { TbHelpOctagon } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const LeftSideMenu = () => {
  const menus = [
    {
      title: "dashboard",
      link: "/dashboard",
      icon: <RiHome2Line size={35} />,
    },
    {
      title: "projects",
      link: "/projects",
      icon: <GoProjectRoadmap size={35} />,
    },
    {
      title: "tasks",
      link: "/tasks",
      icon: <FaTasks size={35} />,
    },
    {
      title: "settings",
      link: "/settings",
      icon: <IoSettingsOutline size={35} />,
    },
    {
      title: "help",
      link: "/help",
      icon: <TbHelpOctagon size={35} />,
    },
  ];
  return (
    <div className="bg-slate-200 h-[730px] w-64 ">
      <div className="flex flex-col gap-6 pt-5">
        {menus?.map((menu, index) => (
          <NavLink key={index}
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "blue" : "transparent",
                color: isActive ? "white" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to={menu?.link}
            className="flex items-center w-full gap-2 text-2xl py-4  px-6  font-semibold capitalize"
          >
            {" "}
            {menu?.icon} {menu?.title}
          </NavLink>
        ))}
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
