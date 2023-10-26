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
        className="rounded-full w-[120px] h-[120px] bg-cover"
        src={src}
        alt="nursery"
        width={80}
        height={80}
      />
      <p className="text-center opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
  );
};

export { ImageSlider, ImageCard }; // Export as named exports
