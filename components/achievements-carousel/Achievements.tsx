"use client";
import React, { useEffect} from "react";
import "@/styles/fonts.css"; 
import CustomSlides from "./Slides";
import Slides from "./Slides";

const Achievements = () => {
  return (
    <div className="">
      <div className="p-10 grid grid-cols-2  justify-center bg-white">
        <h1
          className={`text-black font-extralight text-7xl font-mono font-newyork`}
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
