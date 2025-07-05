"use client";
import { Manrope } from "next/font/google";
import React, { useState, useEffect } from "react";
import Title from "../common/academics/Title";

interface HeaderProps {
  onSelectCourse: (courseName: string) => void;
}

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header: React.FC<HeaderProps> = ({ onSelectCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("Director");

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    onSelectCourse(courseName);
  };

  // Call default selected once on mount
  useEffect(() => {
    onSelectCourse("Director");
  }, [onSelectCourse]);

  return (
    <div>
      <div className="mb-10">
        <ul
          className={`${manrope.className} flex justify-evenly text-base font-medium `}
        >
          {["Director", "Head of Departments", "Administrative Office"].map(
            (course) => (
              <li key={course} className="underline-offset-[14px]">
                <button
                  onClick={() => handleCourseClick(course)}
                  className={`${
                    selectedCourse === course
                      ? "text-dark-blue font-semibold underline decoration-[3px]"
                      : "text-black"
                  }`}
                >
                  {course}
                </button>
              </li>
            ),
          )}
        </ul>
        <div className="h-px w-auto bg-light-gray mt-2 mx-24" />
      </div>
    </div>
  );
};

export default Header;
