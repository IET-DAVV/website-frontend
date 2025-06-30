"use client";
import React from "react";

interface ProgramOutcomesProps {
  selectedCourse: string;
}

const ProgramOutcomes: React.FC<ProgramOutcomesProps> = ({ selectedCourse }) => {
  const outcomesMap: Record<string, string[]> = {
    "btech-full": [
      "Outcome 1 for B.E. Full-Time",
      "Outcome 2 for B.E. Full-Time",
      "Outcome 3 for B.E. Full-Time",
      "Outcome 4 for B.E. Full-Time",
      "Outcome 5 for B.E. Full-Time",
      "Outcome 6 for B.E. Full-Time",
    ],
    "btech-part": [
      "IET DAVV’s part-time IT program begins with foundational courses in programming, discrete mathematics, and data structures...",
      "Covers essential topics like DBMS, OS, CN with weekend labs...",
      "Offers software engineering, web, mobile dev with practicals...",
      "Includes electives in cloud, AI, IoT, cybersecurity...",
      "Enhances communication & documentation through seminars...",
      "Ends with final project & viva demonstrating technical skills.",
    ],
    "me-full": [
      "Outcome 1 for M.E. Full-Time",
      "Outcome 2 for M.E. Full-Time",
      "Outcome 3 for M.E. Full-Time",
      "Outcome 4 for M.E. Full-Time",
      "Outcome 5 for M.E. Full-Time",
      "Outcome 6 for M.E. Full-Time",
    ],
    "me-part": [
      "Outcome 1 for M.E. Part-Time",
      "Outcome 2 for M.E. Part-Time",
      "Outcome 3 for M.E. Part-Time",
      "Outcome 4 for M.E. Part-Time",
      "Outcome 5 for M.E. Part-Time",
      "Outcome 6 for M.E. Part-Time",
    ],
    phd: ["PhD outcome 1", "PhD outcome 2", "PhD outcome 3", "PhD outcome 4", "PhD outcome 5", "PhD outcome 6"],
    msc: ["MSC outcome 1", "MSC outcome 2", "MSC outcome 3", "MSC outcome 4", "MSC outcome 5", "MSC outcome 6"],
  };

  const outcomes = outcomesMap[selectedCourse] || [];

  return (
    <div className="mt-24">
      <h2 className="text-center text-4xl font-newyork mb-12">Program outcomes</h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-8 px-24">
        {outcomes.map((outcome, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-dark-blue font-bold text-xl mb-2">{`0${idx + 1}`}</h3>
            <p className="text-sm text-slate-700">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOutcomes;
