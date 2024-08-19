import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const RightSidemenu = () => {
  return (
    <div className="bg-slate-200 h-[730px] p-4 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img
          src="./user.jpg"
          alt="user image"
          className="h-32 w-32 rounded-full"
        />
        <p className="text-xl font-bold uppercase mt-2">am antor</p>
        <p className="text-sm text-blue-600 font-bold">Web Developer, PNT</p>
      </div>
      <div>
        <div className="flex items-center justify-between gap-12 mt-7">
          <p className="text-md font-bold">Recent News</p>
          <p className="text-gray-700 text-xs">View All</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="./blog.jpg" alt="" className="h-12 w-12 rounded-full" />
          <div>
            <div className="flex items-center">
              <div>
                <p className="text-xs font-bold">Lorem ipsum adipisicing...</p>
                <p className="text-gray-600 text-xs">
                  {" "}
                  amet consectetur adipisic velit...
                </p>
              </div>
            </div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidemenu;
