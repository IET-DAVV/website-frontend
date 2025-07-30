"use client";
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const IntakeCapacity: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("B.E. (FULL-TIME)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="space-y-8 py-10">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${playfair.className} flex justify-center text-4xl sm:text-6xl`}
      >
        INTAKE CAPACITY
      </motion.h1>
      <Header onSelectCourse={handleSelectCourse} />
      <Content selectedCourse={selectedCourse} />
    </div>
  );
};

export default IntakeCapacity;
