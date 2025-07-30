"use client";
import { Manrope } from "next/font/google";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onSelectCourse: (courseName: string) => void;
}

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header: React.FC<HeaderProps> = ({ onSelectCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("B.E. (FULL-TIME)");

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    onSelectCourse(courseName);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className={`${manrope.className} flex justify-evenly text-base font-medium`}>
        {["B.E. (FULL-TIME)", "B.E. (PART-TIME)", "M.E. (FULL-TIME)", "M.E. (PART-TIME)"].map((course) => (
          <li key={course} className="relative px-2">
            <button
              onClick={() => handleCourseClick(course)}
              className={`transition-colors ${
                selectedCourse === course
                  ? "text-dark-blue font-semibold"
                  : "text-black"
              }`}
            >
              {course}
            </button>
            {selectedCourse === course && (
              <motion.span
                layoutId="underline"
                className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-dark-blue rounded"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="h-px w-auto bg-light-gray mt-2 mx-24" />
    </motion.div>
  );
};

export default Header;
