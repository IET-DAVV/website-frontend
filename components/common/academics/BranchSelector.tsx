"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the props for the BranchSelector component
interface BranchSelectorProps {
  branches: string[];
  selectedBranch: string;
  onSelect: (branch: string) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({
  branches,
  selectedBranch,
  onSelect,
}) => {
  // If there are no branches to show, render nothing.
  if (!branches || branches.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col mb-8 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.95, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {/* Centered, bold, and larger title for the section */}
      
      
      {/* Grid layout for the buttons, matching the semester selector's style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {branches.map((branch) => (
          <button
            key={branch}
            onClick={() => onSelect(branch)}
            // Apply conditional styling based on whether the branch is selected
            className={`px-5 py-3 rounded-md border transition-all duration-300 ease-in-out font-medium text-sm sm:text-base ${
              selectedBranch === branch
                ? "bg-[#3B7A9E] text-white shadow-lg scale-105" // Style for the selected button
                : "bg-white text-gray-700 hover:bg-[#E2EDF3] hover:shadow-md hover:scale-105" // Style for non-selected buttons
            }`}
          >
            {branch}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default BranchSelector;