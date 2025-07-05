"use client";
import React from "react";
import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const VC = () => {
  return (
    <div className="px-4 md:px-20 py-8 md:py-0 flex flex-col md:flex-row-reverse bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden md:h-[450px]">
      {/* Image Section - right on desktop, centered on mobile */}
      <div className="w-full md:w-1/3 h-64 md:h-full border-b md:border-b-0  flex justify-center items-center ">
        <Image
          src={aboutVC}
          alt="Dr. Rakesh Singhai"
          width={1200}
          height={500}
          className="h-full object-cover w-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 px-6 py-6 md:p-8 flex flex-col justify-center">
        {/* Top Line */}
        <hr className="border-t border-gray-400 mb-6 md:mb-11 mt-2" />

        {/* Heading */}
        <h2 className="font-newyork text-xl md:text-5xl font-light mb-1">
          Dr. Rakesh Singhai
        </h2>

        {/* Designation */}
        <p className="text-gray-500 text-sm md:text-base mb-3">Vice Chancellor</p>

        {/* Paragraph */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          {aboutVCText}
        </p>

        {/* Bottom Line */}
        <hr className="border-t border-gray-400 mt-6 md:mt-11 mb-2" />
      </div>
    </div>
  );
};

export default VC;
