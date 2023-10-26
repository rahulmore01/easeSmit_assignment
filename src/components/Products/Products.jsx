import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Product = ({
  imageSrc,
  title,
  description,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div className="w-[260px]">
      <div className="flex flex-col items-center justify-center relative border-[2px] border-gray-300 w-[260px] h-auto">
        <BsHeart className="absolute top-0 right-0 w-10 h-10 p-2 opacity-60 bg-white font-thin" />
        <img
          src={imageSrc}
          alt="product"
          className="bg-cover w-[260px] h-[260px]"
        />
        <button className="w-[260px] text-center py-2 bg-[#29521E] text-white text-[18px] font-semibold">
          View Product
        </button>
      </div>
      <div className="flex flex-col gap-[2px]">
        <h2 className="font-medium text-[22px] mt-4">{title}</h2>
        <h3 className="text-[16px] opacity-70 text-gray-600">{description}</h3>
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <AiFillStar className="text-yellow-400 w-5 h-5" />
            <AiFillStar className="text-yellow-400 w-5 h-5" />
            <AiFillStar className="text-yellow-400 w-5 h-5" />
            <AiFillStar className="text-yellow-400 w-5 h-5" />
            <AiFillStar className="text-yellow-400 w-5 h-5" />
            <p className="ml-3 text-lg pt-1 opacity-30">{rating}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 mt-1">
          <p className="text-black opacity-40 text-lg line-through font-light">
            ₹{originalPrice}
          </p>
          <p className="ml-2 text-gray-600 text-xl font-medium">
            ₹{discountedPrice}
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 mt-1 text-[13px] font-semibold">
          <button className="flex items-center bg-[#29521E] text-white p-2 rounded-lg ">
            <AiOutlineMinus className="mr-2 font-medium" />
            Add to Cart
            <AiOutlinePlus className="ml-2" />
          </button>
          <button className="flex items-center text-[#29521E] py-2 px-4 rounded-lg border-2 border-[#29521E]">
            Buy on Rent
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      imageSrc: "/images/product-1.jpg",
      title: "Monsterra",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      originalPrice: 350,
      discountedPrice: 299,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-8">
        <div className="flex justify-start items-center gap-4 ">
          <p className="opacity-70">300 Products</p>

          <select
            className="uppercase px-1 py-3 bg-[#29521E] text-white"
            name="Sort by"
            id=""
          >
            <option value="Sort by">Sort by</option>
            <option value="Rating">Rating</option>
            <option value="Price">Price</option>
          </select>
        </div>

        {products.map((product, index) => (
          <div className="flex flex-col gap-16">
            <div className="flex  gap-12">
              <Product key={index} {...product} />
              <Product key={index} {...product} />
              <Product key={index} {...product} />
            </div>
            <div className="flex  gap-12">
              <Product key={index} {...product} />
              <Product key={index} {...product} />
              <Product key={index} {...product} />
            </div>
            <div className="flex  gap-12">
              <Product key={index} {...product} />
              <Product key={index} {...product} />
              <Product key={index} {...product} />
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center justify-center w-[160px] bg-[#29521E] text-white p-3 rounded-full shadow-xl mt-14 text-[18px]">
        View More
      </button>
    </div>
  );
};

export default Products;
