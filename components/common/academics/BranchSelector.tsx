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
  <div className="flex flex-col px-8 mb-14 mt-10">
    <h2 className="text-xl mb-8 font-semibold">Branch</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-8"></div>

    <div className="grid grid-cols-3 gap-4 w-fit">
      {branches.map((branch) => (
        <button
          key={branch}
          onClick={() => onSelect(branch)}
          className={`px-4 w-fit py-2 rounded border-2 font-semibold ${
            selectedBranch === branch
              ? "bg-[#06779B] text-white border-[#06779B] rounded-lg"
              : " text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B] rounded-lg"
          }`}
        >
          {branch}
        </button>
      ))}
    </div>
  </div>
);

export default BranchSelector;
