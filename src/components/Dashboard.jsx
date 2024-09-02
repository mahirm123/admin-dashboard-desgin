import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import moment from "moment";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-between ">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-sm font-semibold">Summary of this application</p>
          </div>
          <div className="bg-blue-700  text-white h-14 w-52 flex items-center justify-center rounded-md ml-[230px]">
            <h4 className="text-xl font-bold ">
              {moment().format("MMM Do YYYY")}
            </h4>
          </div>
         
        </div>
        <div className="w-full bg-gradient-to-r from-cyan-300 to-blue-800 overflow-hidden h-96  mt-10 rounded-md relative">
          <img src="./user.png" alt="" className="w-[500px] absolute top-16 -left-20 " />
          <p className="absolute top-32 text-white left-72">
            <span className="text-2xl font-semibold">Hello,</span> Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Consequatur omnis
            vitae ipsa provident iusto tempora ipsum officia nemo. Maiores,
            animi?
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="w-full bg-gradient-to-b from-blue-500 to-slate-50 h-32  px-2 py-4 rounded-lg">
            <p className="text-2xl text-white font-bold flex items-center gap-4">
              {" "}
              Event <MdEvent size={35} />
            </p>

            <h2 className="text-[45px] font-bold text-blue-900 mt-3">10</h2>
          </div>
          <div className="w-full bg-gradient-to-b from-blue-500 to-slate-50 h-32  px-2 py-4 rounded-lg">
            <p className="text-2xl text-white font-bold flex items-center gap-4">
              {" "}
              News <IoNewspaperOutline size={35} />
            </p>

            <h2 className="text-[45px] font-bold text-blue-900 mt-3">12</h2>
          </div>
          <div className="w-full bg-gradient-to-b from-blue-500 to-slate-50 h-32  px-2 py-4 rounded-lg">
            <p className="text-2xl text-white font-bold flex items-center gap-4">
              {" "}
              Blog <TbBrandBlogger size={35} />
            </p>

            <h2 className="text-[45px] font-bold text-blue-900 mt-3">15</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
