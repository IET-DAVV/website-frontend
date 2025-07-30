"use client";
import React, { useState, useEffect } from "react";
import { syllabusData } from "@/constants/syllabus/data";
import Title from "../common/academics/Title";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import SemesterSelector from "../common/academics/SemesterSelector"; // Re-importing the semester selector
import SyllabusAccordion from "../common/academics/SyllabusAccordion";
import { motion } from "framer-motion";

const Syllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState("be_full_time");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState(""); // State for semester selection is back
  const [openSubjectCode, setOpenSubjectCode] = useState<string | null>(null);

  // --- Data Derivations ---
  const courseList = Object.keys(syllabusData.courses).map((courseKey) => ({
    courseKey,
    courseName: syllabusData.courses[courseKey].courseName,
  }));

  const branches = Object.keys(
    syllabusData.courses[selectedCourse]?.branches || {}
  );
  
  // Get the list of available semesters for the selected branch
  const semesters = Object.keys(
    syllabusData.courses[selectedCourse]?.branches[selectedBranch]?.semesters || {}
  );

  // Get the subjects only for the selected semester
  const subjects =
    syllabusData.courses[selectedCourse]?.branches[selectedBranch]?.semesters[
      selectedSemester
    ]?.subjects || [];

  // --- Effects to manage state changes ---

  // On Course Change -> Update Branch
  useEffect(() => {
    const firstBranch = branches[0] || "";
    setSelectedBranch(firstBranch);
    // The next effect will handle the semester update
  }, [selectedCourse]);

  // On Branch Change -> Update Semester
  useEffect(() => {
    const firstSemester = semesters[0] || "";
    setSelectedSemester(firstSemester);
    setOpenSubjectCode(null); // Close any open accordion
  }, [selectedBranch]);

  // On Semester Change -> Close any open accordion
  useEffect(() => {
    setOpenSubjectCode(null);
  }, [selectedSemester]);
  
  // Toggles an accordion open or closed
  const handleToggleSubject = (subjectCode: string) => {
    setOpenSubjectCode(prevCode => (prevCode === subjectCode ? null : subjectCode));
  };

  return (
    <motion.div
      className="text-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="SYLLABUS" />
      <div className="p-4 flex flex-col items-center space-y-6 md:space-y-8">
        
        <CourseSelector
          courses={courseList}
          selectedCourse={selectedCourse}
          onSelect={setSelectedCourse}
        />
        
        {branches.length > 0 && (
          <BranchSelector
            branches={branches}
            selectedBranch={selectedBranch}
            onSelect={setSelectedBranch}
          />
        )}
        
        {/* SEMESTER SELECTOR IS BACK IN THE UI */}
        {semesters.length > 0 && (
          <SemesterSelector
            semesters={semesters}
            selectedSemester={selectedSemester}
            onSelect={setSelectedSemester}
          />
        )}
        
        {/* UPDATED: Render the list of subjects based on the selected semester */}
        <div className="w-full md:w-5/6 lg:w-4/5 mt-4 text-left">
          {subjects.length > 0 ? (
            <div className="flex flex-col rounded-lg shadow-md overflow-hidden border">
              {subjects.map((subject) => (
                 <SyllabusAccordion
                    key={subject.code}
                    subject={subject}
                    isOpen={openSubjectCode === subject.code}
                    onToggle={() => handleToggleSubject(subject.code)}
                 />
              ))}
            </div>
          ) : (
            selectedBranch && (
              <p className="mt-8 text-gray-500 text-center">Syllabus details for this selection will be available soon.</p>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Syllabus;