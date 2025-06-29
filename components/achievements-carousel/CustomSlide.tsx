"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

interface SlideProps {
  year: string;
  title: string;
  description: string;
  imgAddress: string;
}
const CustomSlide = ({ year, title, description, imgAddress }: SlideProps) => {
  return (
    <div className="grid grid-cols-3 p-12 bg-[#3B7A9E] justify-center gap-10 items-center w-full">
      <div className="p-4 space-y-4 flex flex-col justify-center items-start">
        <h4 className="flex border border-white rounded-full h-fit px-5 w-fit py-0.5 items-center justify-center text-xs bg-white text-[#3B7A9E]">
          {year}
        </h4>
        <h1
          className={`text-2xl font-bold tracking-wider text-white ${manrope.className}`}
        >
          {title}
        </h1>
        <p className={`${manrope.className} font-thin text-white`}>
          {description}
        </p>
      </div>
      <div className="flex justify-center items-center col-span-2 ">
        <Image
          src={imgAddress}
          alt="carousal-slide-img"
          width={1000}
          height={1000}
          className="rounded-lg w-fit h-[500px]"
        />
      </div>
    </div>
  );
};

export default CustomSlide;
