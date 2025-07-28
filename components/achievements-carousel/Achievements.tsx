"use client";
import React from "react";
import "@/styles/fonts.css";
import Slides from "./Slides";
import Heading from "@/components/common/academics/Heading";

const Achievements = () => {
  return (
    <div className="">
      <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 justify-center bg-white text-center sm:text-left">
        <div className="p-8">
          <Heading
            title="ACHIEVEMENTS"
            className="text-center text-[72px]"
          />
        </div>
      </div>
      <div className="bg-[#3B7A9E] px-4 sm:px-8 py-6 sm:py-8">
        <Slides />
      </div>
    </div>
  );
};

export default Achievements;
