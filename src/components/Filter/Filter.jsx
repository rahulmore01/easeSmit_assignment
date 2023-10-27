"use client";

import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";

const Filter = () => {
  const [isVVS, setIsVVS] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const checkScreenSize = () => {
    setIsVVS(window.innerWidth < 1200);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const openFilterOverlay = () => {
    setShowOverlay(true);
  };

  const closeFilterOverlay = () => {
    setShowOverlay(false);
  };

  if (isVVS) {
    return (
      <div className="px-2 mt-2 flex justify-between items-center w-full h-[64px] bg-green-50">
        <span className="font-medium text-lg opacity-70">Products</span>
        <IoFilter
          className="text-[28px] cursor-pointer"
          onClick={openFilterOverlay}
        />
        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#F4FFE8] z-50">
            <div className="flex flex-col w-[360px] bg-[#F4FFE8] pt-6">
              <FilterSection title="Filter" />
              <FilterSection title="Type of Plants" />
              <FilterSection title="Price" />
              <FilterSection title="Nursery" />
              <FilterSection title="Ideal Plants Location" />
              <FilterSection title="Indoor/Outdoor" />
              <FilterSection title="Maintenance" />
              <FilterSection title="Plant Size" />
              <FilterSection title="Water Schedule" />
              <FilterSection title="Color" />
              <FilterSection title="Seasonal" />
              <FilterSection title="Light Efficient" />
              <div className="w-full flex justify-between items-center opacity-60">
                <p className="text-[18px] font-light"></p>
                <button
                  className="uppercase text-[18px] font-light mt-8 mr-5 bg-green-900 text-white p-2 rounded-md"
                  onClick={closeFilterOverlay}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[360px] bg-[#F4FFE8] pt-6">
      <FilterSection title="Filter" />
      <FilterSection title="Type of Plants" />
      <FilterSection title="Price" />
      <FilterSection title="Nursery" />
      <FilterSection title="Ideal Plants Location" />
      <FilterSection title="Indoor/Outdoor" />
      <FilterSection title="Maintenance" />
      <FilterSection title="Plant Size" />
      <FilterSection title="Water Schedule" />
      <FilterSection title="Color" />
      <FilterSection title="Seasonal" />
      <FilterSection title="Light Efficient" />
    </div>
  );
};

const FilterSection = ({ title }) => (
  <div className="w-full flex flex-col px-6 pt-4">
    <div className="flex justify-between items-center opacity-60">
      <p className="text-[18px] font-light">{title}</p>
      <button className="uppercase text-[18px] font-light">
        <AiOutlinePlus />
      </button>
    </div>
    <span className="h-[1px] mt-[10px] w-full bg-black opacity-30"></span>
  </div>
);

export default Filter;
