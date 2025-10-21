"use client";
import React from "react";
import "./FreshersCorner.css";

const branches = [
  "Computer Science",
  "Information Technology",
  "Mechanical Engineering",
  "CSBS",
  "Electronics & Instrumentation",
  "Electronics & Telecommunication",
  "Civil Engineering",
];

interface Props {
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
}

const BranchSelector: React.FC<Props> = ({
  selectedBranch,
  setSelectedBranch,
}) => {
  return (
    <div className="branch-selector">
      {branches.map((branch) => (
        <button
          key={branch}
          className={`branch-btn ${selectedBranch === branch ? "active-branch" : ""}`}
          onClick={() => setSelectedBranch(branch)}
        >
          {branch}
        </button>
      ))}
    </div>
  );
};

export default BranchSelector;
