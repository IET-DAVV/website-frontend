"use client";

import React from "react";
import { Manrope } from "next/font/google";
import { Achievement } from "grommet-icons";
import { motion } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

interface Slideprops {
  id: string;
  heading: string;
  paragraph: string;
}

const Customslide = ({ id, heading, paragraph }: Slideprops) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // 👈 start state
      whileInView={{ opacity: 1, y: 0 }}    // 👈 animate when in view
      viewport={{ once: true, amount: 0.3 }} // 👈 trigger only once, when 30% visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }} // 👈 hover effect
      className={`border border-light-gray hover:border-2 hover:border-dark-blue hover:text-dark-blue 
      rounded-2xl mx-6 sm:mx-10 md:mx-16 my-6 py-6 px-4 
      transition-all duration-300 shadow-sm`}
    >
      {/* Icon */}
      <div className="flex justify-center my-3 text-dark-blue">
        <Achievement size="large" />
      </div>

      {/* Heading */}
      <h2
        className={`text-center text-lg sm:text-xl md:text-2xl font-medium text-dark-blue ${manrope.className}`}
      >
        {heading}
      </h2>

      {/* Paragraph */}
      <p
        className={`text-sm sm:text-base text-gray-600 text-start mt-2 ${manrope.className}`}
      >
        {paragraph}
      </p>
    </motion.div>
  );
};

export default Customslide;
