"use client";
import React from "react";
import Piechart from "@/components/chart/Piechart";
import { stats } from "@/constants/landing/chart";
import { motion } from "framer-motion";

function Chart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white px-4 sm:px-6 md:px-10 py-10 gap-8">
      {/* Stats Block */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col justify-start items-start space-y-6 md:border-r-2 border-[#444444] pr-0 md:pr-8"
      >
        {stats.map((stat) => (
          <div
            className="flex flex-col sm:flex-row sm:space-x-8 space-y-1 sm:space-y-0 justify-start items-start sm:items-center w-full"
            key={stat.title}
          >
            <div className="text-4xl sm:text-6xl font-serif text-gray-800">
              {stat.value}
            </div>
            <div className="text-4xl sm:text-3xl text-gray-600">{stat.title}</div>
          </div>
        ))}
      </motion.div>

      {/* Piechart */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full max-w-xs sm:max-w-lg h-min">
          <Piechart />
        </div>
      </motion.div>
    </div>
  );
}

export default Chart;
