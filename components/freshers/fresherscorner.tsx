"use client";
import React, { useState } from "react";
import SectionCard from "./SectionCard";
import "./FreshersCorner.css";

const courseTabs = [
  "B.TECH (FULL TIME)",
  "B.TECH (PART-TIME)",
  "M.TECH (FULL TIME)",
  "M.TECH (PART TIME)",
  "Ph.D",
  "MSc.",
];

const branchOptions = [
  "Computer Science",
  "Information Technology",
  "Mechanical Engineering",
  "CSBS",
  "Electronics & Instrumentation",
  "Electronics & Telecommunication",
  "Civil Engineering",
];

const branchSections: { [key: string]: string[] } = {
  "Computer Science": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  "Information Technology": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  "Mechanical Engineering": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  CSBS: [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  "Electronics & Instrumentation": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  "Electronics & Telecommunication": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
  "Civil Engineering": [
    "Class Time Table",
    "Calendar",
    "Test Time Table",
    "Syllabus",
    "Exam Time Table",
  ],
};

const FreshersCorner: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState("B.TECH (PART-TIME)");
  const [selectedBranch, setSelectedBranch] = useState("Computer Science");

  return (
    <div className="freshers-container">
      <h1 className="main-heading">FRESHER&apos;S CORNER</h1>

      <div className="course-tabs">
        {courseTabs.map((course) => (
          <button
            key={course}
            className={`course-tab ${selectedCourse === course ? "active" : ""}`}
            onClick={() => setSelectedCourse(course)}
          >
            {course}
          </button>
        ))}
      </div>

      <div className="branch-buttons">
        {branchOptions.map((branch) => (
          <button
            key={branch}
            className={`branch-btn ${selectedBranch === branch ? "active" : ""}`}
            onClick={() => setSelectedBranch(branch)}
          >
            {branch}
          </button>
        ))}
      </div>

      <div className="sections-container">
        {branchSections[selectedBranch].map((title) => (
          <SectionCard key={title} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Canteen;
