import Image from "next/image";
import React from "react";
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
    <div className="grid grid-cols-2 pl-8 items-center py-6">
      <div className="space-y-4">
        <h4 className="border border-white rounded-full h-5 px-1 w-12 items-center justify-center text-sm bg-white text-[#3B7A9E]">
          {year}
        </h4>
        <h1 className={`text-2xl  ${manrope.className}`}>{title}</h1>
        <p className={`${manrope.className} font-thin`}>{description}</p>
      </div>
      <div className="px-16">
        <Image
          src={imgAddress}
          alt="carousal-slide-img"
          width={1000}
          height={1000}
          className="rounded-lg w-96 h-56"
        />
      </div>
    </div>
  );
};

export default CustomSlide;
