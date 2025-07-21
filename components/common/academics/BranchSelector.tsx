import React from "react";

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
  // Keeping the original alignment and structure as requested
  <div className="flex flex-col px-4 sm:px-6 md:px-8 mb-14 mt-10">
    <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Branch</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-6 sm:mb-8"></div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {branches.map((branch) => (
        <button
          key={branch}
          onClick={() => onSelect(branch)}
          // Using the new button styling from your Timetable.tsx component
          className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 ease-in-out ${
            selectedBranch === branch
              ? "bg-teal-600 text-white" // Selected style
              : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105" // Unselected style
          }`}
        >
          {branch}
        </button>
      ))}
    </div>
  </div>
);

export default BranchSelector;