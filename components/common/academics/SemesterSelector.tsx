"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the props for the SemesterSelector component
interface SemesterSelectorProps {
  semesters: string[];
  selectedSemester: string;
  onSelect: (semester: string) => void;
}

const SemesterSelector: React.FC<SemesterSelectorProps> = ({
  semesters,
  selectedSemester,
  onSelect,
}) => {
  // If there are no semesters to show, render nothing.
  if (!semesters || semesters.length === 0) {
    return null;
  }
  
  return (
    <motion.div
      className="flex flex-col mb-8 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* UPDATED: Centered, bold, and larger title to match the BranchSelector */}
      <h2 className="text-2xl sm:text-3xl mb-6 font-bold text-center text-gray-800">
        Semester
      </h2>

      {/* This is the horizontal line you wanted to keep */}
      <div className="mt-2 w-full border-b-2 border-gray-200 mb-8"></div>
      
      {/* The grid layout for buttons remains the same */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => onSelect(semester)}
            className={`px-5 py-2 rounded-md border transition-all duration-300 ease-in-out font-medium ${
              selectedSemester === semester
                ? "bg-[#3B7A9E] text-white shadow-lg" // Style for the selected button
                : "bg-white text-gray-700 hover:bg-[#E2EDF3] hover:shadow-md hover:scale-105" // Style for non-selected buttons
            }`}
          >
            {semester}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SemesterSelector;
