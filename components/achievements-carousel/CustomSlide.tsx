// components/achievements-carousel/CustomSlide.tsx

"use client";
import React from "react";

type CustomSlideProps = {
  title: string;
  year: string;
  imgAddress: string;
  description: string;
};

const CustomSlide = ({ title, year, imgAddress, description }: CustomSlideProps) => {
  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg 
                   max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                   mx-auto text-center text-black h-full">
      <div className="flex flex-col h-full">
        <img
          src={imgAddress}
          alt={title}
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-md mb-3 sm:mb-4 
                     transition-transform duration-300 hover:scale-105"
        />
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 
                          leading-tight text-gray-800">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-600 font-medium mb-2 sm:mb-3">
              {year}
            </p>
          </div>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 
                       line-clamp-4 sm:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


export default CustomSlide;
