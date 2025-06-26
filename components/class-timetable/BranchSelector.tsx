"use client";

import React, { useState } from "react";
import BranchButton from "./BranchButton";

const branches = [
  "Computer Science",
  "Information Technology",
  "Mechanical Engineering",
  "Electronics & Instrumentation",
  "Electronics & Telecommunication",
  "Civil Engineering",
];

const BranchSelector: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState("Computer Science");

  return (
    <div className="flex flex-wrap gap-4 justify-center m-6 p-4 ">
      {branches.map((branch) => (
        <BranchButton
          key={branch}
          label={branch}
          isActive={selectedBranch === branch}
          onClick={() => setSelectedBranch(branch)}
        />
      ))}
    </div>
  );
};

export default BranchSelector;
