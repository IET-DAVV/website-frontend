"use client";
import React from "react";
import { aboutIET, aboutImage } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";
import { motion , Variants } from "framer-motion";

// Animation config

const textAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "circOut",
    },
  }),
};

const About = () => {
  const heading = "ABOUT IET DAVV";

  return (
    <div className="h-full w-[90%] mx-auto bg-white flex justify-center border-[#3B799E] border-4 mt-10 mb-20 rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full place-items-center">
        {/* Image */}
        <div className="w-full h-full flex justify-center items-center p-6 md:p-8">
          <Image
            src={aboutImage}
            width={600}
            height={400}
            alt="About IET"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="flex flex-row text-black px-6 py-4 md:p-10">
          <div className="flex flex-col space-y-4 md:space-y-5">
            {/* Animated Heading */}
            <h1 className="font-newyork text-3xl md:text-5xl text-black text-justify flex flex-wrap">
              {heading.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed">
              {aboutIET}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
