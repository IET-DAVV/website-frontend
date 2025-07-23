"use client";
import React from "react";
import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import Image from "next/image";
import { motion } from "framer-motion";

const VC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 md:px-20 py-8 md:py-0 flex flex-col md:flex-row-reverse bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden md:h-[450px]"
    >
      {/* Image */}
      <div className="w-full md:w-1/3 h-64 md:h-full border-b md:border-b-0 flex justify-center items-center">
        <Image
          src={aboutVC}
          alt="Dr. Rakesh Singhai"
          width={1200}
          height={500}
          className="h-full object-cover w-auto"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3 px-6 py-6 md:p-8 flex flex-col justify-center">
        <hr className="border-t border-gray-400 mb-6 md:mb-11 mt-2" />
        <h2 className="font-newyork text-xl md:text-5xl font-light mb-1">
          Dr. Rakesh Singhai
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-3">Vice Chancellor</p>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          {aboutVCText}
        </p>
        <hr className="border-t border-gray-400 mt-6 md:mt-11 mb-2" />
      </div>
    </motion.div>
  );
};

export default VC;
