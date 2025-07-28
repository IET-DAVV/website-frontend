// /components/common/academics/SemesterSelector.tsx

import React from "react";
import { motion } from "framer-motion";

interface SemesterSelectorProps {
  semesters: string[];
  selectedSemester: string;
  onSelect: (semester: string) => void;
}

const SemesterSelector: React.FC<SemesterSelectorProps> = ({
  semesters,
  selectedSemester,
  onSelect,
}) => (
  <motion.div
    className="flex flex-col mb-14 px-4 sm:px-6 md:px-8 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <h2 className="text-xl mb-6 sm:mb-8 font-semibold">Semester</h2>
    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-6 sm:mb-8"></div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {semesters.map((semester) => (
        <button
          key={semester}
          onClick={() => onSelect(semester)}
          className={`px-5 py-2 rounded-md border transition-all duration-300 ease-in-out font-medium ${
            selectedSemester === semester
              ? "bg-teal-600 text-white"
              : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105"
          }`}
        >
          {semester}
        </button>
      ))}
    </div>
  </motion.div>
);

export default SemesterSelector;