"use client";
import React from "react";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

interface Course {
  courseKey: string;
  courseName: string;
}

interface CourseSelectorProps {
  courses: Course[];
  selectedCourse: string;
  onSelect: (courseKey: string) => void;
  setSelectedBranch?: (branch: string) => void;
  setSelectedYear?: (year: string) => void;
}

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CourseSelector: React.FC<CourseSelectorProps> = ({
  courses,
  selectedCourse,
  onSelect,
  setSelectedBranch,
  setSelectedYear,
}) => {
  function handleCourseChange(courseKey: string) {
    onSelect(courseKey);
    if (setSelectedBranch) setSelectedBranch("");
    if (setSelectedYear) setSelectedYear("");
  }

  return (
    <motion.div
      className={`flex justify-center w-full px-4 sm:px-8 ${manrope.className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full overflow-x-auto custom-scrollbar">
        <ul className="flex justify-start sm:justify-center whitespace-nowrap gap-4 sm:gap-8 md:gap-10 pb-2 relative">
          {courses.map(({ courseKey, courseName }, index) => (
            <motion.li
              key={courseKey}
              className="relative inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => handleCourseChange(courseKey)}
                className={`px-3 sm:px-4 py-2 transition-all duration-200 
                  text-sm sm:text-base md:text-lg relative
                  ${
                    selectedCourse === courseKey
                      ? "font-extrabold text-[#06779B]"
                      : "text-[#686868] font-medium hover:text-[#06779B]"
                  }`}
              >
                {courseName}

                {selectedCourse === courseKey && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[3px] bg-[#3B799E]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </motion.li>
          ))}
        </ul>
        <div className="h-[1px] bg-[#C5C5C5] w-full mt-[-1px]"></div>
      </div>
    </motion.div>
  );
};

export default CourseSelector;
