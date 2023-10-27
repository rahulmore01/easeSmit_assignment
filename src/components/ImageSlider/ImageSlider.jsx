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
    <div className="vvs:items-center vvs:text-[15px] vvs:mb-10 lg:w-[200px] lg:text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:mb-20  vvs:w-[140px] gap-3 flex flex-col justify-center ">
      <Image
        className="rounded-full lg:w-[120px] lg:h-[120px] bg-cover vvs:w-[100px] vvs:h-[100px]"
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

export { ImageSlider, ImageCard };
