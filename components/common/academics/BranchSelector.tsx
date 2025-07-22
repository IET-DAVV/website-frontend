import React from "react";
import { motion } from "framer-motion";

interface BranchSelectorProps {
  branches: string[];
  selectedBranch: string;
  onSelect: (branch: string) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({
  branches,
  selectedBranch,
  onSelect,
}) => (
  <motion.div
    className="flex flex-col px-4 sm:px-6 md:px-8 mb-14 mt-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Branch</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-6 sm:mb-8"></div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {branches.map((branch) => (
        <button
          key={branch}
          onClick={() => onSelect(branch)}
          className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 ease-in-out ${
            selectedBranch === branch
              ? "bg-teal-600 text-white"
              : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105"
          }`}
        >
          {branch}
        </button>
      ))}
    </div>
  </motion.div>
);

export default BranchSelector;
