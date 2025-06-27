"use client";
import { landingImages } from "@/constants/landing/landingImages";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Landing = () => {
  return (
    <div className="w-full h-full relative ">
      <div className="relative w-full h-screen">
        <HeroCarousel />
      </div>

      <div className="bg-transparent absolute bottom-0 left-0 p-10 w-full h-full flex items-start justify-end text-start space-y-5 flex-col">
        <h1 className={`text-white text-5xl font-bold ${playfair.className}`}>
          Institute of Engineering and Technology
        </h1>
        <h1 className={`text-white text-5xl font-bold ${playfair.className}`}>
          Devi Ahilya Vishwavidhyalaya
        </h1>
      </div>
    </div>
  );
};

export default Landing;
