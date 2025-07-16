"use client";
import React from "react";
import {
  collegeDescription,
  collegeName,
  image,
} from "@/constants/landing/about";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import "@/styles/fonts.css";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-10 md:gap-20 w-full h-full bg-[#3B7A9E]"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-start space-y-4 md:space-y-6"
      >
        <h4 className="flex justify-start items-center space-x-2">
          <Image
            src={"/landing/line.svg"}
            alt="line"
            width={175}
            height={80}
          />
          <span className="uppercase text-white text-sm sm:text-base">
            Welcome to
          </span>
        </h4>
        <h1 className={`py-2 sm:py-4 font-newyork text-4xl sm:text-6xl text-white font-newyork`}>
          {collegeName}
        </h1>
        <p className="font-extralight text-white text-sm sm:text-base">
          {collegeDescription}
        </p>
        <p className="flex font-light pt-4 space-x-4 justify-center items-center">
          <span className="pt-1 text-white text-sm sm:text-base">EXPLORE MORE</span>
          <Link
            href={"/about"}
            className="hover:translate-x-2 transition-all duration-300"
          >
            <BsArrowRightCircle size={30} className="sm:size-10" color="#F9F6FF" />
          </Link>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center"
      >
        <Image
          src={image}
          alt="mblock-img"
          width={1000}
          height={1000}
          className="rounded-lg w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
