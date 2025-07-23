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
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md max-w-sm mx-auto text-center text-black">
      <img
        src={imgAddress}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{year}</p>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default CustomSlide;
