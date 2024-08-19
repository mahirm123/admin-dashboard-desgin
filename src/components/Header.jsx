import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import moment from 'moment';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-slate-200 px-6 py-3">
      <div>
        <img src="./logo.svg" alt="logo image" />
      </div>
      <div className="flex items-center gap-10">
        <div>
          <h3 className="text-md font-bold">Monday</h3>
          <p className="text-gray-500">{moment().format('MMMM Do YYYY')}</p>
        </div>
        <div className="flex items-center gap-4">
          <img src="./user.jpg" alt="" className="w-16 h-16 rounded-full" />
          <div className="flex items-center gap-3">
            <div>
              <p className="textmd font-bold">John Doe</p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                Admin <IoIosArrowDown />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
