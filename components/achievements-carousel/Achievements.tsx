"use client";
import React from "react";
import "@/styles/fonts.css";
import Slides from "./Slides";
import Heading from "@/components/common/academics/Heading";

const Achievements = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Heading
                title="ACHIEVEMENTS"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
                          font-extrabold  bg-clip-text 
                          drop-shadow-sm"
              />
              <h1
                className="mt-3 sm:mt-4 text-sm text-left sm:text-base md:text-lg text-gray-600 
                           max-w-2xl mx-auto lg:mx-0"
              >
                Celebrating excellence, innovation, and outstanding
                contributions that shape our community and drive progress
                forward.
              </h1>
            </div>

            {/* Optional decorative element */}
            <div className="hidden lg:flex justify-center items-center">
              <div
                className="w-64 h-6 rounded-full bg-[#3B7A9E]
                             opacity-10 blur-3xl"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div
        className="bg-[#3B7A9E]
                     px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          <Slides />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
