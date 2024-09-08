"use client";
import React from "react";
import Masonry from "react-responsive-masonry";
import { imagesMap } from "@/constants/events/data";
import Image from "next/image";
import { Playfair } from "next/font/google";
import { motion } from "framer-motion";
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Events: React.FC = () => {
  return (
    <div className="bg-black grid grid-cols-3 justify-between items-center h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col mx-auto col-span-1 justify-center items-start"
      >
        <div
          className={`text-[#6b6b6b] text-7xl font-normal ${playfair.className}`}
        >
          IET
        </div>
        <div
          className={`text-[#f9f6ff] text-9xl font-normal ml-[73px] ${playfair.className}`}
        >
          Events
        </div>
      </motion.div>

      <div className="w-full -mr-40 -mt-20 mx-auto col-span-2">
        <Masonry columnsCount={3} gutter="25px">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1C1C1C] h-[300px] rounded-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1C1C1C] h-[150px] rounded-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1C1C1C] h-[300px] rounded-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={imagesMap["image1"]}
              alt="Event 1"
              width={300}
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={imagesMap["image2"]}
              alt="Event 2"
              width={300}
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1C1C1C] h-[300px] rounded-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1C1C1C] h-[300px] rounded-lg w-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Image
              src={imagesMap["image3"]}
              alt="Event 3"
              width={300}
              height={300}
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#1C1C1C] h-[300px] rounded-lg w-full"
          />
        </Masonry>
      </div>
    </div>
  );
};

export default Events;
