import React from "react";
import { ImageSlider, ImageCard } from "@/components/ImageSlider/ImageSlider";
import Products from "../Products/Products";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";

const MainScreen = () => {
  const imagePaths = [
    "/images/nursery-1.jpg",
    "/images/nursery-2.jpg",
    "/images/nursery-3.jpg",
    "/images/nursery-4.jpg",
    "/images/nursery-5.jpg",
    "/images/nursery-6.jpg",
    "/images/nursery-7.jpg",
    "/images/nursery-8.jpg",
  ];

  return (
    <div className=" mt-10 px-20">
      <div>
        <div className="flex gap-3 items-center justify-start ">
          <button className="text-white px-8 py-[5px] bg-[#29521E] shadow-xl text-[20px] capitalize">
            plants
          </button>
          <button className="text-black px-8 py-[5px] opacity-30 border-2 border-slate-800 text-[20px]">
            Pots
          </button>
        </div>
        <div className="pt-8 text-[18px] font-light opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta
          esse enim eaque id, minus delectus officia blanditiis excepturi
          laudantium illo quis in ipsum nam. Distinctio voluptates illo alias
          blanditiis!,Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed dicta esse enim eaque id, minus delectus officia blanditiis
          excepturi laudantium illo quis in ipsum nam. Distinctio voluptates
          illo alias blanditiis!.
        </div>
      </div>
      <div>
        <h3 className="text-[28px] font-semibold mt-10 mb-10">Nursery</h3>
        <div className="flex gap-6 overflow-x-auto">
          {imagePaths.map((img, index) => (
            <ImageSlider key={index} img={img} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start gap-12">
        <Filter />
        <Products />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainScreen;
