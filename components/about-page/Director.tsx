"use client";
import React from "react";
import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const DirectorVrinda = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden md:h-[450px]">
      {/* Image Section */}
      <div className="w-fit md:w-1/3 h-64 md:h-full border-t md:border-t-0 md:border-l border-black">
        <Image
          src={aboutDirector}
          alt="Dr. Vrinda Tokekar"
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
        {/* Top Line */}
        <hr className="border-t border-gray-400 mb-6 md:mb-11 mt-2" />

        {/* Heading */}
        <h2 className="font-newyork text-xl md:text-5xl font-light mb-3">
          Dr. Vrinda Tokekar
        </h2>

        {/* Paragraph */}
        <p className="text-sm text-gray-800 leading-relaxed">
          {aboutDirectorText}
        </p>

        {/* Bottom Line */}
        <hr className="border-t border-gray-400 mt-6 md:mt-11 mb-2" />
      </div>
    </div>
  );
};

export default DirectorVrinda;
