import { Inter } from "next/font/google";
import React, { useState } from "react";

interface HeaderProps {
  onSelectCourse: (courseName: string) => void;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header: React.FC<HeaderProps> = ({ onSelectCourse }) => {
  const [selectedCourse, setSelectedCourse] =
    useState<string>("B.E. (FULL-TIME)");

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    onSelectCourse(courseName);
  };

  return (
    <>
      <ul
        className={`${inter.className} flex justify-center gap-8 text-lg font-semibold`}
      >
        {[
          "B.E. (FULL-TIME)",
          "B.E. (PART-TIME)",
          "M.E. (FULL-TIME)",
          "M.E. (PART-TIME)",
          "PhD",
          "M.Sc.",
        ].map((course) => (
          <li key={course} className="underline-offset-[14px]">
            <button
              onClick={() => handleCourseClick(course)}
              className={`${
                selectedCourse === course
                  ? "text-white bg-[#06779B] font-bold underline decoration-4 underline-offset-8 rounded-md px-2 py-1"
                  : "text-gray-600 hover:text-primary-blue transition-colors duration-300"
              }`}
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
      <div className="h-[2px] w-full bg-primary-blue mt-4 mx-auto max-w-5xl"></div>
    </>
  );
};

export default Header;
