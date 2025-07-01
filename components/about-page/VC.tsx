<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const VC = () => {
  return (
    <div className="px-20 flex flex-row bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden h-[450px]">
      {/* Left: Image Section */}
      <div className="w-1/4 border-2 border-black">
        <Image
          src={aboutVC}
          alt="Dr. Rakesh Singhai"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        {/* Top Line */}
        <hr className="border-t border-gray-400 mb-11 mt-2" />

        {/* Heading */}
        <h2 className="font-newyork text-sm md:text-5xl font-light justify-right flex items-right mb-3">
          Dr. Rakesh Singhai
        </h2>

        {/* Paragraph */}
        <p className="text-sm text-gray-800 leading-relaxed">
          {aboutVCText}

          {/* Bottom Line */}
          <hr className="border-t border-gray-400 mt-11 mb-2" />
        </p>
      </div>
    </div>
=======
import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const VC = () => {
  return (
    <>
      <div className="relative rounded-lg">
        <Image
          src={aboutVC}
          width={400}
          height={875}
          alt=""
          className="h-full w-full object-cover overflow-hidden "
        />
        <div className="flex flex-col h-full w-1/4 bg-black bg-opacity-50 right-24 space-y-10 px-8 py-12 absolute top-0">
          <h1
            className={`${playfair.className} text-3xl font-light uppercase text-white`}
          >
            Dr. Renu Jain
          </h1>
          <p className="break-words text-sm leading-relaxed font-light text-white">
            {aboutVCText}
          </p>
        </div>
      </div>
    </>
>>>>>>> origin/main
  );
};

export default VC;
