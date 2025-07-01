"use client";
import React, { useState } from "react";
import { Manrope } from "next/font/google";
import { programsData } from "@/constants/Programs/programsdata";
import "@/styles/fonts.css";
import ProgramOutcomes from "./programoutcomes";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface ContentProps {
  selectedCourse: string;
}

interface Specialization {
  name: string;
  icon: string;
}

interface Course {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  students: string;
  specializations: Specialization[];
}

const labelToKeyMap: Record<string, string> = {
  "B.E. (FULL-TIME)": "btech-full",
  "B.E. (PART-TIME)": "btech-part",
  "M.E. (FULL-TIME)": "me-full",
  "M.E. (PART-TIME)": "me-part",
};

const Content: React.FC<ContentProps> = ({ selectedCourse }) => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const key = labelToKeyMap[selectedCourse];
  const dataObject = programsData[0] as Record<string, Course>;
  const course = dataObject[key];

  if (!course) return <p>Course not found</p>;

  return (
    <div className="flex flex-col px-10 pb-10">
      <h2 className="text-center text-4xl font-newyork my-8 text-grey-800">Programs offered</h2>
      <div className="flex justify-between items-start">
        {/* Left Content */}
        <div className="flex flex-col ml-24 mt-4">
          <p className={`${manrope.className} text-sm text-slate-700 mb-2`}>
            {course.subtitle}
          </p>
          <h1 className="text-5xl font-newyork w-[400px]">
            {selectedBranch || course.title}
          </h1>
          <p className="text-slate-700 text-sm mt-6 w-[350px]">{course.description}</p>
          <div className="flex mt-10 gap-16 text-center">
            <div>
              <p className="text-dark-blue text-2xl font-semibold">{course.duration}</p>
              <p className="text-slate-700 text-sm">Duration</p>
            </div>
            <div>
              <p className="text-dark-blue text-2xl font-semibold">{course.students}</p>
              <p className="text-slate-700 text-sm">Students enrolled</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={`${manrope.className} ml-20 mt-10`}>
          <div className="grid grid-cols-3 gap-4 w-[700px]">
            {course.specializations.map((spec) => {
              const isActive = selectedBranch === spec.name;
              return (
                <button
                  key={spec.name}
                  onClick={() => setSelectedBranch(spec.name)}
                  className={`border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#06779B] text-white"
                      : "bg-white text-black hover:bg-[#06779B] hover:text-white"
                  }`}
                >
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <p className="text-sm font-medium">{spec.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <ProgramOutcomes selectedCourse={key} selectedBranch={selectedBranch} />
    </div>
  );
};

export default Content;
