"use client";
import React from "react";
import "@/styles/fonts.css";
import Image from "next/image";
import mblock from "@/public/landing/mblock.png"; // Adjust path based on actual structure

const Landing = () => {
  return (
    <div className="w-full h-full relative">
      <div className="relative w-full h-screen">
        <Image
          src={mblock}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ease-in-out"
          width={1920}
          height={1080}
          alt="Landing image"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          33%,
          100% {
            opacity: 0;
          }
          11%,
          22% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="bg-transparent absolute bottom-0 left-0 px-4 sm:px-8 md:px-10 py-8 w-full h-full flex flex-col items-start justify-end space-y-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-newyork">
          Institute of Engineering and Technology
        </h1>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-newyork">
          Devi Ahilya Vishwavidhyalaya
        </h1>
      </div>
    </div>
  );
};

export default Landing;
