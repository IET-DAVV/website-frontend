"use client";

import React, { useState } from "react";
import BranchButton from "./BranchButton";

const branches = [
  "Computer Engineering with Specialization in Software Engineering",
  "Information Technology with Specialization in Information Security",
  "Mechanical Engineering with Specialization in Design & Thermal Engineering",
  "Electronics Engineering with Specialization in Digital Communication",
  "Industrial Engineering and Management",
];
const MEBranchSelector: React.FC = () => {
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

export default MEBranchSelector;
