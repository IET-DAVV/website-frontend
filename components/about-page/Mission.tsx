"use client";

import React, { useState } from "react";
import { missions, missionIet, missionDavv } from "@/constants/about-page/mission";
import DesCard from "./DesCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Reusable animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Mission = () => {
  const [preview, setPreview] = useState<Object[]>(missionIet);
  const [activeTab, setActiveTab] = useState<"IET" | "DAVV">("IET");

  return (
    <div className="my-20 mx-4 sm:mx-8 md:mx-16">
      {/* Tabs */}
      <motion.div
        className="relative flex justify-center items-center gap-12 sm:gap-20 md:gap-40 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Baseline line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18rem] h-[1px] bg-gray-300 z-0" />

        {missions.map((value, id) => {
          const isActive = preview === value.link;
          return (
            <motion.button
              key={id}
              variants={fadeUp}
              onClick={() => {
                setPreview(value.link);
                setActiveTab(value.name === "MISSION–IET" ? "IET" : "DAVV");
              }}
              className={`relative text-lg sm:text-2xl md:text-3xl transition-all duration-300 pb-2 ${
                isActive
                  ? "text-[#3B799E] font-semibold"
                  : "text-gray-400 font-light"
              }`}
            >
              {value.name}
              <span
                className={`absolute left-0 bottom-0 transition-all duration-300 ${
                  isActive
                    ? "w-full h-[3px] bg-[#3B799E]"
                    : "w-full h-[1px] bg-gray-300"
                }`}
              ></span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {preview?.map((item: any) => (
          <motion.div key={item.id} variants={fadeUp}>
            <DesCard id={item.id} description={item.description} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mission;
