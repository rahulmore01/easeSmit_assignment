import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Filter = () => {
  return (
    <div className="flex flex-col w-[360px] bg-[#F4FFE8] pt-6">
      <div className="w-full flex flex-col px-6 ">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Filter</p>
          <button className="uppercase text-[18px]  font-light">
            clear all
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Type of Plants</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Price</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Nursery</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Ideal Plants Location</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Indoor/Outdoor</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Maintenance</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Plant Size</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Water Schedule</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Color</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Seasonal</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
      </div>
      <div className="w-full flex flex-col px-6 pt-4 pb-6">
        <div className="flex justify-between items-center opacity-60">
          <p className="text-[18px]  font-light">Light Efficient</p>
          <button className="uppercase text-[18px]  font-light">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
