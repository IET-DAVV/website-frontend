import React from "react";

interface BranchButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const BranchButton: React.FC<BranchButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md border font-medium text-sm transition-all max-w-[300px]
        ${isActive ? "bg-[#006f8b] text-white" : "bg-white text-gray-700 border-black hover:bg-gray-100"}`}
    >
      {label}
    </button>
  );
};

export default BranchButton;
