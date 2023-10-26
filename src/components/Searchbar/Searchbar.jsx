import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";

const Searchbar = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-20 mt-6">
      <div className=" flex justify-between w-[270px] items-center h-8 p-2 rounded-md">
        <div className=" flex justify-center items-center h-8 p-2 rounded-md">
          <CiSearch className="text-gray-600 mr-2 w-8 h-8 opacity-80" />
          <input
            className="text-gray-600 opacity-50 w-[170px] "
            placeholder="Search Plant"
          />
          {/* <span className="text-gray-600 opacity-50 ">Search Plant</span> */}
        </div>

        <PiPlant className="text-[#29521E] ml-2 h-5 w-5" />
      </div>
      <span className="h-[1px] mt-[2px] w-[250px] bg-black opacity-30"></span>
    </div>
  );
};

export default Searchbar;
