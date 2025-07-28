"use client";

import React from "react";
import Image from "next/image";
import visionIET from "@/public/vision_iet.png";
import visionDAVV from "@/public/vision_davv.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/styles/fonts.css"; // font-newyork defined here

// ✅ Typed animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const overlayFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const VisionSection = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto my-20 space-y-16">
      
      {/* VISION–IET Row */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left: Heading */}
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 w-full text-center md:text-left md:pl-20"
        >
          <p className="font-newyork text-xl sm:text-3xl md:text-5xl font-bold md:font-light">
            VISION–IET
          </p>
        </motion.div>

        {/* Right: Image with Overlay */}
        <motion.div
          variants={overlayFade}
          className="relative w-full md:w-[1158px] h-[280px] sm:h-[300px] md:h-[231px] border-2 border-[#3B799E] overflow-hidden"
        >
          <Image
            src={visionIET}
            alt="Vision IET"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-12 md:px-20 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold md:font-semibold leading-relaxed text-center"
            style={{ backgroundColor: "rgba(59, 121, 158, 0.6)" }}
          >
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </div>
        </motion.div>
      </motion.div>

      {/* VISION–DAVV Row */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left: Image with Overlay */}
        <motion.div
          variants={overlayFade}
          className="relative w-full md:w-[1158px] h-[280px] sm:h-[300px] md:h-[231px] border-2 border-[#3B799E] overflow-hidden"
        >
          <Image
            src={visionDAVV}
            alt="Vision DAVV"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-12 md:px-20 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold md:font-semibold leading-relaxed text-center"
            style={{ backgroundColor: "rgba(59, 121, 158, 0.6)" }}
          >
            Emerge as a premier higher learning institution by creating,
            advancing and disseminating knowledge with collective wisdom,
            through value imbued holistic education for peaceful, sustainable
            and humane society.
          </div>
        </motion.div>

        {/* Right: Heading */}
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 w-full text-center md:text-right md:pr-20"
        >
          <p className="font-newyork text-xl sm:text-3xl md:text-5xl font-bold md:font-light">
            VISION–DAVV
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisionSection;
