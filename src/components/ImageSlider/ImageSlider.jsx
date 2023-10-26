import Image from "next/image";
import React from "react";

const ImageSlider = ({ img }) => {
  return (
    <div>
      <ImageCard src={img} />
    </div>
  );
};

const ImageCard = ({ src }) => {
  return (
    <div className="w-[200px] text-center flex flex-col justify-center items-center gap-5 mb-20">
      <Image
        className="rounded-full w-[160px] h-[160px] bg-cover"
        src={src}
        alt="nursery"
        width={130}
        height={130}
      />
      <p className="text-center opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, unde!
      </p>
    </div>
  );
};

export { ImageSlider, ImageCard }; // Export as named exports
