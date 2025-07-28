"use client";
import React, { useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import { calenderData } from "../../constants/calender/data";
import { MdOutlineFileDownload } from "react-icons/md";
import Title from "../common/academics/Title";
import { motion, AnimatePresence } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Calendar = () => {
  const years = Object.keys(calenderData.years);
  const [selectedYear, setSelectedYear] = useState<string>("");

useEffect(() => {
  if (calenderData?.years) {
    const defaultYear = Object.keys(calenderData.years)[0];
    setSelectedYear(defaultYear);
  }
}, []);


  function handleyearChange(course: string) {
    setSelectedYear(course);
  }

  return (
    <div className="text-black">
      <Title title="CALENDAR" />
      <div className="p-4 mb-10">
        <div className={`flex justify-center ${manrope.className}`}>
          <div className="inline-block">
            <ul className="flex justify-center space-x-6 text-base font-medium relative pb-2 gap-12">
              {years.map((year) => (
                <motion.li
                  key={year}
                  className="relative inline-block"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleyearChange(year)}
                    className={`px-4 py-2 transition-all duration-300 ease-in-out rounded-lg ${
                      selectedYear === year
                        ? "font-semibold text-[#06779B] bg-[#e7f6fa] shadow"
                        : "text-black hover:text-[#06779B] hover:bg-[#f0f8fb]"
                    }`}
                  >
                    {year}
                  </button>
                  {selectedYear === year && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#06779B]"
                    />
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="h-[1px] bg-[#C5C5C5] w-full"></div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedYear && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 w-1/2 mx-auto mb-4"
          >
            <div className="flex justify-end items-center">
              <a
                href={calenderData.years[selectedYear].PdfLink}
                className="bg-black rounded-full p-1 ml-auto hover:scale-105 focus:outline-none transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineFileDownload className="text-white" />
              </a>
            </div>
            <iframe
              src={calenderData.years[selectedYear].PdfLink}
              title={`PDF Viewer for ${calenderData.years[selectedYear]}`}
              className="border-2 border-blue-500 h-[500px] w-full rounded-xl shadow-lg"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calendar;
