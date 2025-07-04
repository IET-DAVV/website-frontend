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
  <div className="flex flex-col px-4 sm:px-6 md:px-8 mb-14 mt-10">
    <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 font-semibold">Branch</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-6 sm:mb-8"></div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4 sm:w-full md:w-fit max-w-full">
      {branches.map((branch) => (
        <button
          key={branch}
          onClick={() => onSelect(branch)}
          className={`px-4 py-2 rounded border-2 font-semibold 
            text-sm sm:text-base md:text-md
            ${
              selectedBranch === branch
                ? "bg-[#06779B] text-white border-[#06779B]"
                : "text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B]"
            }`}
        >
          {branch}
        </button>
      ))}
    </div>
  </div>
);

export default BranchSelector;
