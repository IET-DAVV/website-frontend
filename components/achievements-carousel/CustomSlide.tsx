"use client";
import React from "react";
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
    <div className="flex flex-col-reverse md:grid md:grid-cols-3 p-6 sm:p-10 md:p-12 bg-[#3B7A9E] gap-10 items-center w-full">
      {/* Text content */}
      <div className="p-4 space-y-4 flex flex-col justify-center items-start md:col-span-1 w-full">
        <h4 className="border border-white rounded-full px-5 py-1 text-xs bg-white text-[#3B7A9E]">
          {year}
        </h4>
        <h1 className={`text-2xl md:text-3xl font-bold tracking-wide text-white ${manrope.className}`}>
          {title}
        </h1>
        <p className={`${manrope.className} text-sm md:text-base font-thin text-white`}>
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center md:col-span-2 w-full">
        <Image
          src={imgAddress}
          alt="carousel-slide-img"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default CustomSlide;
