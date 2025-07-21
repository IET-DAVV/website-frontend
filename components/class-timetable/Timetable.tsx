"use client";
import React, { useState, useEffect } from "react";
import { timetableData } from "../../constants/timetable/data";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import YearSelector from "../common/academics/YearSelector";
import SectionSelector from "../common/academics/SectionSelector";
import Title from "../common/academics/Title";
import { motion } from "framer-motion";

const Timetable = () => {
  const courses = Object.keys(timetableData.courses);
  const [selectedCourse, setSelectedCourse] = useState<string>("BE_FULL_TIME");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [showSections, setShowSections] = useState<boolean>(false);
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);

  // Update branch/year on course change
  useEffect(() => {
    const branches = Object.keys(timetableData.courses[selectedCourse]?.branches || {});
    if (branches.length > 0) {
      setSelectedBranch(branches[0]);
      const years = Object.keys(timetableData.courses[selectedCourse]?.branches[branches[0]]?.years || {});
      if (years.length > 0) {
        setSelectedYear(years[0]);
      } else {
        setSelectedYear("");
      }
    } else {
      setSelectedBranch("");
      setSelectedYear("");
    }
  }, [selectedCourse]);

  const courseList = Object.keys(timetableData.courses).map((courseKey) => ({
    courseKey,
    courseName: timetableData.courses[courseKey].courseName,
  }));

  const branches = Object.keys(
    timetableData.courses[selectedCourse]?.branches || {}
  );
  const years = Object.keys(
    timetableData.courses[selectedCourse]?.branches[selectedBranch]?.years || {}
  );

  useEffect(() => {
    if (selectedCourse && selectedBranch && selectedYear) {
      const sectionList = Object.entries(
        timetableData.courses[selectedCourse]?.branches[selectedBranch]?.years[selectedYear]?.sections || {}
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
      <Title title="CLASS TIMETABLE" />
      <div className="p-4 flex flex-col items-center space-y-8">
        
        {/* Course Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <CourseSelector
            courses={courseList}
            selectedCourse={selectedCourse}
            onSelect={setSelectedCourse}
            setSelectedBranch={setSelectedBranch}
            setSelectedYear={setSelectedYear}
          />
        </motion.div>

        {/* Branch Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full"
        >
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
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
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
        </motion.div>

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
              hideIfShortName={true}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Timetable;
