"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { examtimetableData } from "@/constants/exam-timetable/data";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import SectionSelector from "../common/academics/SectionSelector";
import Title from "../common/academics/Title";
import ExamNotice from "./examNotice";

const ExamTimetable = () => {
  const courseList = Object.keys(examtimetableData.courses).map((courseKey) => ({
    courseKey,
    courseName:
      (examtimetableData.courses[courseKey] as any)?.courseName || courseKey,
  }));

  const [selectedCourse, setSelectedCourse] = useState<string>(
    courseList[0]?.courseKey || ""
  );
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);
  const [showSections, setShowSections] = useState<boolean>(false);

  useEffect(() => {
    setSelectedBranch("");
    setSections([]);
    setShowSections(false);
  }, [selectedCourse]);

  const branches = Object.keys(
    examtimetableData.courses[selectedCourse]?.branches || {}
  );

  useEffect(() => {
    if (selectedCourse && selectedBranch) {
      const sectionList = Object.entries(
        examtimetableData.courses[selectedCourse]?.branches[selectedBranch]
          ?.sections || {}
      ).map(([sectionName, { PdfLink }]) => ({
        sectionName,
        PdfLink: PdfLink || null,
      }));
      setSections(sectionList);
      setShowSections(sectionList.length > 0);
    } else {
      setShowSections(false);
    }
  }, [selectedBranch, selectedCourse]);

  return (
    <motion.div
      className="text-black text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="EXAM TIMETABLE" />

      <div className="p-4 flex flex-col items-center space-y-8">
        {/* Course Selector */}
        <div className="w-full">
          <CourseSelector
            courses={courseList}
            selectedCourse={selectedCourse}
            onSelect={setSelectedCourse}
            setSelectedBranch={setSelectedBranch}
            setSelectedYear={() => {}}
          />
        </div>

        {/* Exam Notice Page */}
        {selectedCourse === "Exam Notice" ? (
          <motion.div
            key="exam-notice"
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExamNotice />
          </motion.div>
        ) : (
          <>
            {/* Branch Selector */}
            <BranchSelector
  branches={branches}
  selectedBranch={selectedBranch}
  onSelect={setSelectedBranch}
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
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ExamTimetable;
