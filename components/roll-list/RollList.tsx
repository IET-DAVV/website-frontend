// RollList.tsx
"use client";

import React, { useState } from "react";
<<<<<<< HEAD
=======
import { Playfair } from "next/font/google";
>>>>>>> origin/main
import { Manrope } from "next/font/google";
import { rolllistData } from "@/constants/roll-list/data"; // Adjust the import path as necessary
import Title from "../common/academics/Title";
import { MdOutlineFileDownload } from "react-icons/md";

<<<<<<< HEAD
=======
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

>>>>>>> origin/main
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type YearKeys =
  | "B.E. I YEAR"
  | "B.E. II YEAR"
  | "B.E. III YEAR"
  | "B.E. IV YEAR"
  | "M.E."
  | "M.Sc.";

const RollList = () => {
  const [selectedYear, setSelectedYear] = useState<YearKeys>("B.E. I YEAR");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const years = Object.keys(rolllistData) as YearKeys[]; // Use type assertion here

  const handleYearSelect = (year: YearKeys) => {
    // Use YearKeys type here
    setSelectedYear(year);
    setSelectedCourse(null);
  };

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
  };

  return (
    <div className="text-black">
<<<<<<< HEAD
      <Title title="ROLL LIST" />
=======
      <Title title="Roll-List" />
>>>>>>> origin/main

      {/* Year Selector */}
      <div className={`flex justify-center ${manrope.className}`}>
        <div className="inline-block">
          <ul className="flex justify-center space-x-6 text-base font-medium relative pb-2 gap-12">
            {years.map((year) => (
              <li key={year} className="relative inline-block">
                <button
                  onClick={() => handleYearSelect(year)}
                  className={`px-4 py-2 ${
                    selectedYear === year
                      ? "font-semibold text-[#06779B]"
                      : "text-black hover:text-[#06779B]"
                  }`}
                >
                  {year}
                </button>
                {selectedYear === year && (
                  <div className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#06779B]"></div>
                )}
              </li>
            ))}
          </ul>
          <div className="h-[1px] bg-[#C5C5C5] w-full mt-[-1px]"></div>
        </div>
      </div>

      {/* Course Selector */}
      {selectedYear === "B.E. I YEAR" ? (
        <div>
          <div className="grid grid-cols-6 gap-4 w-fit py-10">
            {Object.keys(rolllistData["B.E. I YEAR"]).map((course) => (
              <button
                key={course}
                onClick={() => handleCourseSelect(course)}
                className={`px-4 w-fit rounded border-2 font-semibold ${
                  selectedCourse === course
                    ? "bg-[#06779B] text-white border-[#06779B] rounded-lg"
                    : "text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B] rounded-lg"
                }`}
              >
                {course}
              </button>
            ))}
          </div>

          <div>
            {selectedCourse && selectedYear && (
              <div className="flex flex-col gap-4 w-3/4 mx-auto mb-4 py-">
                <div className="flex justify-end items-center">
                  <a
                    href={rolllistData["B.E. I YEAR"][selectedCourse].PdfLink}
                    className="bg-black rounded-full p-1 ml-auto hover:scale-105 focus:outline-none transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineFileDownload className="text-white" />
                  </a>
                </div>
                <iframe
                  src={rolllistData["B.E. I YEAR"][selectedCourse].PdfLink}
                  title={`PDF Viewer for ${rolllistData["B.E. I YEAR"][selectedCourse].PdfLink}`}
                  className="border-2 border-blue-500 h-[500px] w-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {selectedYear && (
            <div className="flex flex-col gap-4 w-3/4 mx-auto mb-4 py-8">
              <div className="flex justify-end items-center">
                <a
                  href={rolllistData[selectedYear].PdfLink}
                  className="bg-black rounded-full p-1 ml-auto hover:scale-105 focus:outline-none transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlineFileDownload className="text-white" />
                </a>
              </div>
              <iframe
                src={rolllistData[selectedYear].PdfLink}
                title={`PDF Viewer for ${rolllistData[selectedYear].PdfLink}`}
                className="border-2 border-blue-500 h-[500px] w-full"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RollList;
