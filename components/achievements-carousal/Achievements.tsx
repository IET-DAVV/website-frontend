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
    <div className="  py-10  ">
      <div className="px-8 pb-8  grid grid-cols-2 justify-center  bg-white ">
        <h1 className={`text-black text-6xl  font-mono ${playfair.className}`}>
          ACHIEVEMENTS
        </h1>
        <h1
          className={`text-gray-400  text-6xl  font-extralight ${playfair.className}`}
        >
          ACHIEVEMENTS
        </h1>
      </div>
      <div className="bg-[#3B7A9E] px-8 py-8 ">
        <Slides />
      </div>
    </div>
  );
};

export default Achievements;
