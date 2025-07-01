<<<<<<< HEAD
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
=======
import React from "react";
import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Director() {
  return (
    <div className="grid grid-cols-7 rounded-lg bg-[#F25853] ">
      <div className="flex justify-center col-span-3">
        <div className="flex flex-col w-2/3 bg-black left-0 bg-opacity-25 space-y-10 px-8 py-12">
          <h1
            className={`${playfair.className} text-3xl font-light uppercase text-white`}
          >
            Dr. Sanjiv Tokekar
          </h1>
          <p className="break-words text-md leading-relaxed font-light text-white">
            {aboutDirectorText}
          </p>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          src={aboutDirector}
          width={800}
          height={800}
          alt=""
>>>>>>> origin/main
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default DirectorVrinda;
=======
}

export default Director;
>>>>>>> origin/main
