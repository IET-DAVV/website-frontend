"use client";
import React, { useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import { calenderData } from "../../constants/calender/data"; // Make sure this path is correct
import { MdOutlineFileDownload } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi"; // A nice icon for alerts
import Title from "../common/academics/Title";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Calendar = () => {
  const years = Object.keys(calenderData.years);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (calenderData?.years && years.length > 0) {
      const defaultYear = years.find(year => calenderData.years[year]?.PdfLink) || years[0];
      setSelectedYear(defaultYear);
    }
  }, [years]);

  const handleYearChange = (year: string) => {
    const hasLink = calenderData.years[year]?.PdfLink;
    if (hasLink) {
      setSelectedYear(year);
      if (isShaking) setIsShaking(false);
    } else {
      setIsShaking(true);
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const shakeVariants: Variants = {
    initial: { x: 0 },
    shake: {
      x: [0, -8, 8, -8, 8, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="text-black"
      variants={shakeVariants}
      animate={isShaking ? "shake" : "initial"}
    >
      <Title title="CALENDAR" />
      <div className="p-4 mb-10">
        <div className={`flex justify-center ${manrope.className}`}>
          <div className="inline-block">
            {/* Tabs List - Removed bottom margin */}
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6 text-base font-medium">
              {years.map((year) => {
                const isDisabled = !calenderData.years[year]?.PdfLink;
                return (
                  <motion.li
                    key={year}
                    className="relative" // Removed vertical padding (py-2)
                    whileHover={{ scale: isDisabled ? 1 : 1.05 }}
                    whileTap={{ scale: isDisabled ? 1 : 0.95 }}
                  >
                    <button
                      onClick={() => handleYearChange(year)}
                      // Added vertical padding here instead
                      className={`flex items-center px-4 py-3 transition-all duration-300 ease-in-out rounded-lg ${
                        selectedYear === year
                          ? "font-semibold text-[#06779B] bg-[#E2EDF3] shadow-inner"
                          : isDisabled
                          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                          : "text-black hover:text-[#06779B] hover:bg-[#f0f8fb]"
                      }`}
                    >
                      {year}
                      {isDisabled && (
                        <motion.div
                          className="ml-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        >
                          <FiAlertCircle className="text-red-500" />
                        </motion.div>
                      )}
                    </button>
                    {selectedYear === year && (
                      <motion.div
                        layoutId="underline"
                        // Nudged down to overlap the separator line
                        className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#06779B] rounded-full"
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
            {/* Separator Line now sits directly under the tabs */}
            <div className="h-[1px] bg-gray-200 w-full"></div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedYear && calenderData.years[selectedYear]?.PdfLink && (
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 mx-auto mb-4 px-4"
          >
            <div className="flex justify-end items-center">
              <a
                href={calenderData.years[selectedYear].PdfLink}
                className="bg-black rounded-full p-2 ml-auto hover:scale-110 focus:outline-none transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineFileDownload className="text-white text-xl" />
              </a>
            </div>
            {(() => {
              const pdfLink = calenderData.years[selectedYear].PdfLink;
              const isImage = /\.(jpeg|jpg|png|gif|bmp|webp)$/i.test(pdfLink);
              
              return isImage ? (
                <div className="border-2 border-gray-300 h-[500px] w-full rounded-xl shadow-lg overflow-y-auto overflow-x-hidden relative">
                  <Image
                    src={pdfLink}
                    alt={`Calendar for ${selectedYear}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <iframe
                  src={pdfLink}
                  title={`PDF Viewer for ${selectedYear}`}
                  className="border-2 border-gray-300 h-[500px] w-full rounded-xl shadow-lg"
                ></iframe>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Calendar;