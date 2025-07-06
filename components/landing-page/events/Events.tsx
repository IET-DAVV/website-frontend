"use client";
import React from "react";
import Masonry from "react-responsive-masonry";
import { imagesMap } from "@/constants/landing/events/data";
import Image from "next/image";
import "@/styles/fonts.css";
import { motion } from "framer-motion";

const Events: React.FC = () => {
  return (
    <div className="bg-black px-4 py-10 md:py-20 md:px-16 flex flex-col lg:grid lg:grid-cols-3 lg:items-center gap-8">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-start text-left"
      >
        <div className="text-[#6b6b6b] text-5xl md:text-7xl font-normal font-newyork">
          IET
        </div>
        <div className="text-[#f9f6ff] text-6xl md:text-9xl font-normal ml-4 md:ml-[73px] font-newyork">
          Events
        </div>
      </motion.div>

      {/* Masonry Image Grid */}
      <div className="w-full lg:col-span-2">
        <Masonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
          gutter="20px"
        >
          {[
            null,
            null,
            null,
            "image1",
            "image2",
            null,
            null,
            "image3",
            null,
          ].map((key, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg w-full overflow-hidden ${
                index % 2 === 1 ? "h-[150px]" : "h-[250px] md:h-[300px]"
              }`}
            >
              {key ? (
                <Image
                  src={imagesMap[key]}
                  alt={`Event ${key}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="bg-[#1C1C1C] w-full h-full rounded-lg" />
              )}
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Events;
