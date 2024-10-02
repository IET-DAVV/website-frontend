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
    <div className={`flex justify-center ${manrope.className}`}>
      <div className="inline-block">
        <ul className="flex justify-center space-x-6 text-base font-medium relative pb-2 gap-12">
          {courses.map(({ courseKey, courseName }) => (
            <li key={courseKey} className="relative inline-block">
              <button
                onClick={() => handleCourseChange(courseKey)}
                className={`px-4 py-2 ${
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
