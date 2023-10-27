import React from "react";

const Notification = () => {
  return (
    <div
      className="flex  flex-col w-full  justify-center items-center gap-1 text-[12px] 
      bg-[#29521E] text-white  px-10 py-2 capitalize
      lg:flex-row  lg:gap-[25%] lg:px-20  lg:text-[14px] lg:justify-end
"
    >
      <p className="text-center">free shipping on orders above 999</p>
      <p className="text-center">call us on: 91 9039203289</p>
    </div>
  );
};

export default Notification;
