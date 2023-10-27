"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="bg-white flex h-20 w-full px-4 md:px-20 justify-between items-center monu_ex_reg vvs:px-10">
      <Image
        className="vvs:w-auto  vvs:h-11"
        src="/images/logo.png"
        alt="me"
        width="220"
        height="180"
      />

      {showMenu ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-90 z-50">
          <div className="bg-white h-full w-72 p-8 text-center" ref={menuRef}>
            <div
              className="absolute top-2 right-2 cursor-pointer "
              onClick={closeMenu}
            >
              <MdClose />
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="flex flex-col justify-center items-center mb-8">
                <AiOutlineUser className="h-6 w-6" />
                <p>My Profile</p>
              </div>

              <div className="flex flex-col justify-center items-center mb-8">
                <AiOutlineShoppingCart className="h-6 w-6" />
                <p>Cart</p>
              </div>
            </div>
            <hr className="mb-4" />

            <ul className="text-black text-[16px] opacity-80">
              <li className="mb-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-4">
                <Link href="/plants">Plants & Pots</Link>
              </li>
              <li className="mb-4">
                <Link href="/tools">Tools</Link>
              </li>
              <li className="mb-4">
                <Link href="/our-services">Our Services</Link>
              </li>
              <li className="mb-4">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="mb-4">
                <Link href="/our-story">Our Story</Link>
              </li>
              <li className="mb-4">
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="hidden md:flex gap-8 text-black text-[16px] opacity-80">
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/">Home</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/plants">Plants & Pots</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/tools">Tools</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/our-services">Our Services</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/blog">Blog</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/our-story">Our Story</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
        <li className="list-none cursor-pointer relative group hover:text-yellow-500">
          <Link href="/faqs">FAQs</Link>
          <span className="absolute mt-8 w-0 h-[2px] bg-yellow-500 left-1/2 transform -translate-x-1/2 transition-all group-hover:w-full"></span>
        </li>
      </div>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <MdMenu className="h-8 w-8" />
      </div>

      <div className="hidden md:flex text-[14px] gap-4 opacity-90">
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
