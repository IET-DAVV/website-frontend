<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import Image from "next/image";
import visionIET from "@/public/vision_iet.png";
import visionDAVV from "@/public/vision_davv.png";
import "@/styles/fonts.css"; // font-newyork defined here

const VisionSection = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto my-20 space-y-16">
      {/* VISION–IET Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Only Heading */}
        <div className="md:w-1/2 w-full text-left">
          <p className="font-newyork text-sm md:text-5xl font-light justify-center flex items-center">
            VISION–IET
          </p>
        </div>

        {/* Right: Image + Text overlay */}
        <div className="relative md:w-[1158px] w-full h-[231px] border-2 border-[#3B799E] overflow-hidden">
          <Image
            src={visionIET}
            alt="Vision IET"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-20 text-white text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed justify"
            style={{
              backgroundColor: "rgba(59, 121, 158, 0.5)",
            }}
          >
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
=======
import {
  visionIET,
  visionDavvText,
  visionIetText,
  visionDAVV,
} from "@/constants/about-page/about";
import { px } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Vision = () => {
  return (
    <div className="mx-14 my-20">
      <div className="flex justify-end">
        <div>
          <h1
            className={`${playfair.className} text-black text-4xl mt-10 px-16 `}
          >
            VISION-IET
          </h1>
        </div>
        <div className="relative text-center">
          <div className="relative  ">
            <Image
              src={visionIET}
              alt="Vision IET"
              width={800}
              height={180}
              className="h-28"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-50"></div>
          </div>

          <div className="w-full absolute top-0 left-0 text-center mt-10">
            <p className="text-white text-xs  text-start px-12 leading-relaxed">
              {visionIetText}
            </p>
>>>>>>> origin/main
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* VISION–DAVV Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
        {/* Left: Image + Text overlay */}
        <div className="relative md:w-[1158px] w-full h-[231px] border-2 border-[#3B799E] overflow-hidden">
          <Image
            src={visionDAVV}
            alt="Vision DAVV"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-20 text-white text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed justify"
            style={{
              backgroundColor: "rgba(59, 121, 158, 0.5)",
            }}
          >
            Emerge as a premier higher learning institution by creating,
            advancing and disseminating knowledge with collective wisdom,
            through value imbued holistic education for peaceful, sustainable
            and humane society.
          </div>
        </div>

        {/* Right: Only Heading */}
        <div className="md:w-1/2 w-full text-right">
          <p className="font-newyork text-sm md:text-5xl font-light justify-center flex items-center">
            VISION–DAVV
          </p>
=======
      <div className="flex mt-8">
        <div className="relative text-center">
          <div className="relative ">
            <Image
              src={visionDAVV}
              alt="Vision DAVV"
              width={800}
              height={800}
              className="h-28"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-50"></div>
          </div>

          <div className="w-full absolute top-0 left-0 text-center mt-10">
            <p className="text-white text-xs  text-start px-12 leading-relaxed">
              {visionDavvText}
            </p>
          </div>
        </div>
        <div>
          <h1
            className={`${playfair.className} text-black text-4xl mt-10 px-16 `}
          >
            VISION-DAVV
          </h1>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default VisionSection;
=======
export default Vision;
>>>>>>> origin/main
