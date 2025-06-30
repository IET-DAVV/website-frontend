// File: components/Programs/Header.tsx
"use client";
import { Manrope } from "next/font/google";
import React, { useState } from "react";

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

  const courseOptions = [
    "B.E. (FULL-TIME)",
    "B.E. (PART-TIME)",
    "M.E. (FULL-TIME)",
    "M.E. (PART-TIME)",
  ];

  return (
    <div>
      <ul className={`${manrope.className} flex justify-evenly text-base font-medium`}>
        {courseOptions.map((course) => (
          <li key={course} className="underline-offset-[14px]">
            <button
              type="button"
              onClick={() => handleCourseClick(course)}
              className={`transition-all duration-200 px-2 pb-1 ${
                selectedCourse === course
                  ? "text-dark-blue font-semibold underline decoration-[3px]"
                  : "text-black hover:text-dark-blue"
              }`}
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
      <div className="h-px w-auto bg-light-gray mt-2 mx-24" />
    </div>
  );
};

export default Header;


// File: components/Programs/Content.tsx
