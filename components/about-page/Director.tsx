"use client";
import React, { useState } from "react";
import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const DirectorVrinda = () => {
  return (
    <div className="flex flex-row bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden h-[450px]">
      {/* Right: Text Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        {/* Top Line */}
        <hr className="border-t border-gray-400 mb-11 mt-2" />

        {/* Heading */}
        <h2 className="font-newyork text-sm md:text-5xl font-light justify-right flex items-right mb-3">
          Dr. Vrinda Tokekar
        </h2>

        {/* Paragraph */}
        <p className="text-sm text-gray-800 leading-relaxed">
          {aboutDirectorText}

          {/* Bottom Line */}
          <hr className="border-t border-gray-400 mt-11 mb-2" />
        </p>
      </div>

      {/* Right: Image Section */}
      <div className="w-1/4 border-2 border-black">
        <Image
          src={aboutDirector}
          alt="Dr. Vrinda Tokekar"
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DirectorVrinda;
