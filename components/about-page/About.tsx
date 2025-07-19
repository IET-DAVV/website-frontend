"use client";
import React from "react";
import { aboutIET, aboutImage } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-full w-[90%] mx-auto bg-white flex justify-center border-[#3B799E] border-4 mt-10 mb-20 rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full place-items-center">
        {/* Image */}
        <div className="w-full h-full flex justify-center items-center p-6 md:p-8">
          <Image
            src={aboutImage}
            width={600}
            height={400}
            alt="About IET"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="flex flex-row text-black px-6 py-4 md:p-10">
          <div className="flex flex-col space-y-5">
            <h1 className="font-newyork text-4xl sm:text-5xl text-black leading-snug">
              About IET DAVV Indore
            </h1>
            <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed">
              {aboutIET}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
