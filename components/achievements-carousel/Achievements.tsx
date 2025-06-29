"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import CustomSlides from "./Slides";
import Slides from "./Slides";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Achievements = () => {
  return (
    <div className="">
      <div className="p-10 grid grid-cols-2  justify-center bg-blueShade-200">
        <h1
          className={`text-black font-extralight text-7xl font-mono ${playfair.className}`}
        >
          ACHIEVEMENTS
        </h1>
        <h1
          className={`text-light-gray  text-7xl font-extralight ${playfair.className}`}
        >
          ACHIEVEMENTS
        </h1>
      </div>
      <div className="bg-blueShade-200 px-8 py-8 ">
        <Slides />
      </div>
    </div>
  );
};

export default Achievements;
