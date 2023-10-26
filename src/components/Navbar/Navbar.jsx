import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white flex h-20 w-full px-20 justify-between items-center  monu_ex_reg">
      <Image
        className=""
        src="/images/logo.png"
        alt="me"
        width="220"
        height="180"
      />

      <ul className="flex gap-8 text-black text-[16px] opacity-80">
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/">Home</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/plants">Plants & Pots</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500 ">
          <Link href="/tools">Tools</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/our-services">Our Services</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/blog">Blog</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/our-story">Our Story</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:text-yellow-500">
          <Link href="/our-story">FAQs</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
      </ul>
      <div className="flex text-[14px] gap-4 opacity-90">
        <div className="flex flex-col justify-center items-center">
          <AiOutlineUser className="h-6 w-6" />
          <p>My Profile</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineShoppingCart className="h-6 w-6" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
