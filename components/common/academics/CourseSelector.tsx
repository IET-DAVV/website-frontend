// /components/common/academics/CourseSelector.tsx

import React from "react";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

interface Course {
  courseKey: string;
  courseName: string;
}

// 1. Make setSelectedBranch and setSelectedYear optional by adding a '?'
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
  setSelectedBranch, // This prop may or may not be passed in
  setSelectedYear,   // This prop may or may not be passed in
}) => {
  function handleCourseChange(courseKey: string) {
    onSelect(courseKey);

    // 2. Only call these functions if they were actually provided
    if (setSelectedBranch) {
      setSelectedBranch("");
    }
    if (setSelectedYear) {
      setSelectedYear("");
    }
  }

  return (
    <motion.div
      className={`flex justify-center w-full px-4 sm:px-8 ${manrope.className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full overflow-x-auto custom-scrollbar">
        <ul className="flex justify-start sm:justify-center whitespace-nowrap gap-4 sm:gap-8 md:gap-10 pb-2">
          {courses.map(({ courseKey, courseName }, index) => (
            <motion.li
              key={courseKey}
              className="relative inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => handleCourseChange(courseKey)}
                className={`px-3 sm:px-4 py-2 transition-all duration-200 
                  text-sm sm:text-base md:text-lg
                  ${
                    selectedCourse === courseKey
                      ? "font-extrabold text-[#06779B]"
                      : "text-[#686868] font-medium hover:text-[#06779B]"
                  }`}
              >
                {courseName}
              </button>
              {selectedCourse === courseKey && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#06779B]"></div>
              )}
            </motion.li>
          ))}
        </ul>
        <div className="h-[1px] bg-[#C5C5C5] w-full mt-[-1px]"></div>
      </div>
    </motion.div>
  );
};

export default CourseSelector;