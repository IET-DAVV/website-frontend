"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { examtimetableData } from "@/constants/exam-timetable/data";
import CourseSelector from "../common/academics/CourseSelector";
import SectionSelector from "../common/academics/SectionSelector";
import Title from "../common/academics/Title";
import ExamNotice from "./examNotice";

const ExamTimetable = () => {
  const courseList = Object.keys(examtimetableData.courses).map((courseKey) => ({
    courseKey,
    // Agar aapko data mein poora naam milta hai to use karein, warna key hi theek hai
   courseName: (examtimetableData.courses[courseKey] as any)?.courseName || courseKey,
  }));

  const [selectedCourse, setSelectedCourse] = useState<string>(courseList[0]?.courseKey || "");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [sections, setSections] = useState<{ sectionName: string; PdfLink: string | null }[]>([]);
  console.log("Course List: ", courseList);
  

  // Jab bhi course badle, branch aur sections ko reset kar dein
  useEffect(() => {
    setSelectedBranch("");
    setSections([]);
  }, [selectedCourse]);

  // Jab branch select ho, tab sections ko fetch karein
  useEffect(() => {
    if (selectedCourse && selectedBranch) {
      const sectionList = Object.entries(
        examtimetableData.courses[selectedCourse]?.branches[selectedBranch]?.sections || {}
      ).map(([sectionName, { PdfLink }]) => ({
        sectionName,
        PdfLink: PdfLink || null,
      }));
      setSections(sectionList);
    }
  }, [selectedBranch]); // Sirf branch change par chalayein

  const branches = Object.keys(examtimetableData.courses[selectedCourse]?.branches || {});

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
            // In props ki zaroorat nahi hai, to empty function de sakte hain
            setSelectedBranch={() => {}} 
            setSelectedYear={() => {}}
          />
        </motion.div>

        {/* Conditional Rendering: Exam Notice ya Timetable */}
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
            {branches.length > 0 && (
              <motion.div
    key="branch-selector"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="w-full"
  >
    <h2 className="text-xl font-semibold mb-4">Branch</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {branches.map((branch) => (
        <div
          key={branch}
          onClick={() => setSelectedBranch(branch)}
          className={`cursor-pointer px-4 py-2 rounded-lg border font-medium transition-all duration-300 ease-in-out ${
            selectedBranch === branch
              ? "bg-teal-600 text-white shadow-lg"
              : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105"
          }`}
        >
          {branch}
        </div>
      ))}
    </div>
  </motion.div>
            )}

            {/* Section Selector */}
            {selectedBranch && (
              <motion.div
                key="section-selector"
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sections.length > 0 ? (
                  <SectionSelector
                    sections={sections}
                    showName={true}
                    hideIfShortName={false}
                  />
                ) : (
                  <p className="text-gray-500 mt-4">No exam schedules found for this selection.</p>
                )}
              </motion.div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ExamTimetable;