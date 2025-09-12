"use client";
import React from "react";
import { motion } from "framer-motion";

interface YearSelectorProps {
  years: string[];
  selectedYear: string;
  onSelect: (year: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  years,
  selectedYear,
  onSelect,
}) => {
  if (!years || years.length === 0) {
    return null;
  }
  
  return (
    <motion.div
      className="flex flex-col items-center mb-8 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mt-2 w-full max-w-5xl border-b-2 border-gray-200 mb-9"></div>
      <div className="flex justify-center translate-x">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => onSelect(year)}
        className={`px-5 py-2 rounded-md border transition-all duration-300 ease-in-out font-medium ${
          selectedYear === year
            ? "bg-[#06779B] text-white shadow-lg"
            : "bg-white text-gray-700 hover:bg-[#E2EDF3] hover:shadow-md"
        }`}
      >
        {year}
      </button>
    ))}
  </div>
</div>
    </motion.div>
  );
};

export default YearSelector;
