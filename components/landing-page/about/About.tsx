"use client";
import {
  collegeDescription,
  collegeName,
  image,
} from "@/constants/landing/about";
import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-16 grid grid-cols-2 overflow-hidden gap-20 w-full h-full bg-blueShade-200"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-start space-y-6"
      >
        <h4 className="flex justify-start items-center space-x-2">
          <Image
            src={"/landing/line.svg"}
            alt="line"
            width={100}
            height={100}
          />
          <span className="uppercase text-white">Welcome to</span>{" "}
        </h4>
        <h1
          className={`py-4 font-extralight text-6xl text-white ${playfair.className}`}
        >
          {collegeName}
        </h1>
        <p className="font-extralight text-white ">{collegeDescription}</p>
        <p className="flex font-light py-4 space-x-6 justify-center items-center">
          <span className="pt-1 text-white">EXPLORE MORE </span>
          <Link
            href={"/about"}
            className="hover:translate-x-2 transition-all duration-300"
          >
            <BsArrowRightCircle size={40} color="#F9F6FF" />
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
          className="rounded-lg w-96 h-96"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
