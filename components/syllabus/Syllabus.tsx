"use client";
import React, { useState, useEffect } from "react";
import { syllabusData } from "@/constants/syllabus/data"; // Updated import name
import Title from "../common/academics/Title";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import SemesterSelector from "../common/academics/SemesterSelector"; // New import
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";

const Syllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState("be_full_time");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [pdfLink, setPdfLink] = useState<string | null>(null);

  // Derivations from data based on selections
  const courseList = Object.keys(syllabusData.courses).map((courseKey) => ({
    courseKey,
    courseName: syllabusData.courses[courseKey].courseName,
  }));

  const branches = Object.keys(
    syllabusData.courses[selectedCourse]?.branches || {}
  );

  const semesters = Object.keys(
    syllabusData.courses[selectedCourse]?.branches[selectedBranch]?.semesters || {}
  );

  // Effect to update branch and semester when course changes
  useEffect(() => {
    const firstBranch = branches[0] || "";
    setSelectedBranch(firstBranch);
    setPdfLink(null); // Hide PDF on change
  }, [selectedCourse]);

  // Effect to update semester when branch changes
  useEffect(() => {
    const firstSemester =
      Object.keys(
        syllabusData.courses[selectedCourse]?.branches[selectedBranch]?.semesters || {}
      )[0] || "";
    setSelectedSemester(firstSemester);
    setPdfLink(null); // Hide PDF on change
  }, [selectedBranch]);
  
  // Effect to hide PDF when semester changes
  useEffect(() => {
    setPdfLink(null);
  }, [selectedSemester]);


  const handleShowSyllabus = () => {
    const link =
      syllabusData.courses[selectedCourse]?.branches[selectedBranch]?.semesters[
        selectedSemester
      ]?.PdfLink || null;
    setPdfLink(link);
  };

  return (
    <motion.div
      className="text-black text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="SYLLABUS" />
      <div className="p-4 flex flex-col items-center space-y-4 md:space-y-8">
        
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
        
        {semesters.length > 0 && (
          <SemesterSelector
            semesters={semesters}
            selectedSemester={selectedSemester}
            onSelect={setSelectedSemester}
          />
        )}

        <motion.button
          onClick={handleShowSyllabus}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Syllabus
        </motion.button>
        
        <AnimatePresence>
          {pdfLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center gap-4 mt-8"
            >
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end bg-black text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <MdOutlineFileDownload size={24} />
              </a>
              <iframe
                src={pdfLink}
                title={`Syllabus for ${selectedBranch} - ${selectedSemester}`}
                className="w-full h-[600px] border-2 border-gray-300 rounded-lg shadow-xl"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Syllabus;