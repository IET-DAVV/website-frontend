<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { aboutIET, aboutImage } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

=======
import { aboutIET, aboutImage } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
>>>>>>> origin/main
const About = () => {
  return (
    <div className="h-full w-[90%] mx-auto bg-white flex justify-center border-[#3B799E] border-4 my-24">
      <div className="grid grid-cols-2 justify-center items-center w-full place-items-center">
<<<<<<< HEAD
        <div className="w-full h-full flex justify-center items-center p-8">
          <Image
            src={aboutImage}
            width={600}
            height={400}
            alt="About IET"
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
        <div className="flex flex-row text-black p-10">
          <div className="flex flex-col space-y-5">
            <h1 className={`font-newyork text-5xl text-black text-justify`}>
              About-IET DAVV Indore
            </h1>
            <p className=" break-words text-black text-justify">{aboutIET}</p>
=======
        <div className="relative inset-0 w-full h-full flex justify-center items-center">
          <Image
            src={aboutImage}
            width={1000}
            height={1000}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[150%]"
          />
        </div>
        <div className="flex flex-row items-center overflow-hidden text-black p-14">
          <div className="flex flex-col space-y-10">
            <h1
              className={`${playfair.className} text-6xl font-extralight uppercase`}
            >
              About-IET
            </h1>
            <p className=" break-words text-black">{aboutIET}</p>
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
