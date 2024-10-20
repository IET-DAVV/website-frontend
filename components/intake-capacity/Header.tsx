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
  const [selectedCourse, setSelectedCourse] =
    useState<string>("B.E. (FULL-TIME)");

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    onSelectCourse(courseName);
  };

  return (
    <div>
      <ul
        className={`${manrope.className} flex justify-evenly text-base font-medium`}
      >
        {[
          "B.E. (FULL-TIME)",
          "B.E. (PART-TIME)",
          "M.E. (FULL-TIME)",
          "M.E. (PART-TIME)",
        ].map((course) => (
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
        ))}
      </ul>
      <div className="h-px w-auto bg-light-gray mt-2 mx-24" />
    </div>
  );
};

export default Header;
