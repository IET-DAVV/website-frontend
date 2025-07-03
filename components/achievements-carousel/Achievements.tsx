"use client";
import React from "react";
import "@/styles/fonts.css";
import Slides from "./Slides";

const Achievements = () => {
  return (
    <div className="">
      <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 justify-center bg-white text-center sm:text-left">
        <h1 className="text-black font-extralight text-4xl sm:text-7xl font-mono font-newyork">
          ACHIEVEMENTS
        </h1>
      </div>
      <div className="bg-[#3B7A9E] px-4 sm:px-8 py-6 sm:py-8">
        <Slides />
      </div>
    </div>
  );
};

export default Achievements;
