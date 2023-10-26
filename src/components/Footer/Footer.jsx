import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#F4FFE8] w-screen h-auto mt-20 px-16">
      <div className="flex justify-start items-start gap-16 pt-14">
        <div className="flex flex-col gap-3">
          <h1 className="uppercase text-xl w-[230px]">
            subscribe to our newsletter
          </h1>
          <p className="w-[320px] text-[14px] font-light opacity-60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ex
            corporis blan.
          </p>
          <input
            className="border-[2px] p-1 text-[14px] pl-4 capitalize"
            type="text"
            placeholder="enter your email address"
          />
          <button className="w-[140px] items-center uppercase px-6 p-2 rounded-full text-white bg-green-800 font-semibold">
            subscribe
          </button>
        </div>
        <div className="flex items-start">
          <div className="flex flex-col gap-3">
            <h1 className="uppercase text-xl w-[230px] mb-4 ">about us</h1>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              Our Story
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              blogs
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              careers
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              contact us
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer ">
              help & support
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="uppercase text-xl w-[230px] mb-4 ">our services</h1>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              book maali
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              plant day care
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              rent plants
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              plants & pots
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              gardening tools
            </a>
          </div>
          <div className="flex flex-col gap-3 w-[230px]">
            <h1 className="uppercase text-xl w-[230px] mb-4 ">useful links</h1>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              my account
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              order & returns
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              track order
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              privacy policy
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              return, refund & replacement policy
            </a>
          </div>
          <div className="flex flex-col gap-3 w-[230px]">
            <h1 className="uppercase text-xl w-[260px] mb-4 ">get in touch</h1>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              address f-343, first floor, sushant lok phase-3,
              sector-57,gurgaon,haryana, india 122003
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer flex flex-col  justify-start">
              call:
              <span>+919923234343</span>
            </a>
            <a className="text-[15px] font-medium opacity-50 capitalize cursor-pointer">
              email: care@chapteroneplants.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <h1 className="uppercase text-xl ">chapterone</h1>

        <p className="text-[16px] mb-2 opacity-60 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt rem
          velit modi deleniti sint et officia eveniet nam sequi excepturi
          explicabo blanditiis, deserunt aperiam voluptate nostrum porro aliquid
          error molestiae totam quae magnam sit! Magnam quis ab optio architecto
          cupiditate impedit, odio perferendis dignissimos, quidem suscipit
          dolorum, sit laboriosam.
        </p>
        <h3 className="capitalize cursor-pointer text-xl">follow us on</h3>
        <div className="flex mb-8 gap-4  cursor-pointer">
          <AiOutlineInstagram className="w-8 h-8 cursor-pointer" />
          <BsFacebook className="w-8 h-8 cursor-pointer" />
          <FaSquareThreads className="w-8 h-8 cursor-pointer" />
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="h-[100px]">
        {/* <span className="w-screen h-[2px] text-slate-600"></span> */}
        <hr className="border-black opacity-40 mt-4" />
        <p className="pt-4 text-[16px] opacity-40">
          2023, chapterone.com all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
