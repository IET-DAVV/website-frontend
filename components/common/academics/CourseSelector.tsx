import React from "react";
import { Manrope } from "next/font/google";

interface Course {
  courseKey: string;
  courseName: string;
}

interface CourseSelectorProps {
  courses: Course[];
  selectedCourse: string;
  onSelect: (courseKey: string) => void;
  setSelectedBranch: (branch: string) => void;
  setSelectedYear: (year: string) => void;
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
    setSelectedBranch("");
    setSelectedYear("");
  }
  

  return (
    <div
      className={`flex justify-center w-full px-4 sm:px-8 ${manrope.className}`}
    >
      <div className="w-full max-w-5xl overflow-x-auto custom-scrollbar">
        <ul className="flex justify-start sm:justify-center whitespace-nowrap gap-4 sm:gap-8 md:gap-10 pb-2">
          {courses.map(({ courseKey, courseName }) => (
            <li key={courseKey} className="relative inline-block">
              <button
                onClick={() => handleCourseChange(courseKey)}
                className={`px-3 sm:px-4 py-2 transition-all duration-200 
              text-sm sm:text-base md:text-lg
              ${
                selectedCourse === courseKey
                  ? "font-semibold text-[#06779B]"
                  : "text-black hover:text-[#06779B]"
              }`}
              >
                {courseName}
              </button>
              {selectedCourse === courseKey && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#06779B]"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="h-[1px] bg-[#C5C5C5] w-full mt-[-1px]"></div>
      </div>
    </div>
  );
};

export default CourseSelector;
