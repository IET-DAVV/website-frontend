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

  useEffect(() => {
    const branches = Object.keys(
      timetableData.courses[selectedCourse]?.branches || {}
    );
    if (branches.length > 0) {
      setSelectedBranch(branches[0]);
      const years = Object.keys(
        timetableData.courses[selectedCourse]?.branches[branches[0]]?.years ||
          {}
      );
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
    timetableData.courses[selectedCourse]?.branches[selectedBranch]?.years ||
      {}
  );

  useEffect(() => {
    if (selectedCourse && selectedBranch && selectedYear) {
      const sectionList = Object.entries(
        timetableData.courses[selectedCourse]?.branches[selectedBranch]?.years[
          selectedYear
        ]?.sections || {}
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
        <div className="w-full">
          <CourseSelector
            courses={courseList}
            selectedCourse={selectedCourse}
            onSelect={setSelectedCourse}
            setSelectedBranch={setSelectedBranch}
            setSelectedYear={setSelectedYear}
          />
        </div>

        <BranchSelector
          branches={branches}
          selectedBranch={selectedBranch}
          onSelect={setSelectedBranch}
        />

        <YearSelector
          years={years}
          selectedYear={selectedYear}
          onSelect={setSelectedYear}
        />

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
