"use client";
import React from "react";
import { history, timeline } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";
import { motion } from "framer-motion";

const History = () => {
  return (
    <div className="w-full bg-[#3B799E] px-6 py-16 md:p-20">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-20">
        <h1 className="font-newyork text-white text-3xl md:text-5xl font-extralight underline underline-offset-4 decoration-white decoration-[2.5px]">
          IET HISTORY
        </h1>
      </div>

      {/* History Timeline Scroll Section */}
      <div className="flex flex-col space-y-16 md:space-y-24 relative border-l-2 border-white pl-6 md:pl-10 max-h-[80vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
        {history.map((item: any, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-6"
          >
            {/* Dot Marker */}
            <span className="absolute -left-[1.05rem] top-1 w-4 h-4 bg-white rounded-full border-2 border-[#3B799E]" />

            {/* Content */}
            <div className="text-white text-sm md:text-base font-light leading-relaxed">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      

      {/* Timeline Image */}
      <div className="mx-auto w-full md:px-20 pt-20">
        <Image
          src={timeline}
          alt="history"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default History;
