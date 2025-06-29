"use client";
import React from "react";
import Piechart from "@/components/chart/Piechart";
import { stats } from "@/constants/landing/chart";
import { motion } from "framer-motion";
function Chart() {
  return (
    <div className="grid grid-cols-2 justify-between items-center  bg-blueShade-200 p-10">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col justify-start space-y-5 items-start border-r-2 border-[#444444]"
      >
        {stats.map((stat) => (
          <div
            className="flex space-x-10 justify-start w-full items-center text-white"
            key={stat.title}
          >
            <div className="font-serif text-gray text-7xl">{stat.value}</div>
            <div className="text-gray text-4xl">{stat.title}</div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <Piechart />
      </motion.div>
    </div>
  );
}

export default Chart;
