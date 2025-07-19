"use client";
import React, { useState, useEffect } from "react";
import { syllabusDataData } from "@/constants/syllabus/data";
import Title from "../common/academics/Title";
import SectionSelector from "../common/academics/SectionSelector";
import { motion } from "framer-motion";

const Syllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState("BE_FULL_TIME");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showSections, setShowSections] = useState(false);
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);

  const courseList = Object.keys(syllabusDataData.courses).map((courseKey) => ({
    courseKey,
    courseName: syllabusDataData.courses[courseKey].courseName,
  }));

  const branches = Object.keys(
    syllabusDataData.courses[selectedCourse]?.branches || {}
  );
  const years = Object.keys(
    syllabusDataData.courses[selectedCourse]?.branches[selectedBranch]?.years ||
      {}
  );

  useEffect(() => {
    if (selectedCourse && selectedBranch && selectedYear) {
      const sectionList = Object.entries(
        syllabusDataData.courses[selectedCourse]?.branches[selectedBranch]
          ?.years[selectedYear]?.sections || {}
      ).map(([sectionName, { PdfLink }]) => ({
        sectionName,
        PdfLink: PdfLink || null,
      }));
      setSections(sectionList);
      setShowSections(true);
    } else {
      setShowSections(false);
    }
  }, [selectedCourse, selectedBranch, selectedYear]);

  return (
    <motion.div
      className="text-black text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="SYLLABUS" />
      <div className="p-4 flex flex-col items-center space-y-8">

        {/* Branch Selector */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">Branch</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
            {branches.map((branch) => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 ease-in-out ${
                  selectedBranch === branch
                    ? "bg-teal-600 text-white"
                    : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105"
                }`}
              >
                {branch}
              </button>
            ))}
          </div>
        </div>

        {/* Year Selector */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">Year</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-md border transition-all duration-300 ease-in-out font-medium ${
                  selectedYear === year
                    ? "bg-teal-600 text-white"
                    : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Section Selector */}
        {showSections && (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionSelector
              sections={sections}
              showName={true}
              hideIfShortName={false}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Syllabus;
