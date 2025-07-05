"use client";

import React, { useState, useEffect } from "react";
import { examtimetableData } from "@/constants/exam-timetable/data";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import SectionSelector from "../common/academics/SectionSelector";
import Title from "../common/academics/Title";
import { useRouter } from "next/navigation";
import ExamNotice from "./examNotice";

const ExamTimetable = () => {
  const router = useRouter();

  const courseList = Object.keys(examtimetableData.courses).map((courseKey) => ({
    courseKey,
    courseName: courseKey, // Use actual course name if available in data
  }));

  const [selectedCourse, setSelectedCourse] = useState<string>(Object.keys(examtimetableData.courses)[0] || "");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);

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
    } else {
      setSections([]);
    }
  }, [selectedCourse, selectedBranch]);

useEffect(() => {
  if (selectedCourse === "Exam Notice") {
    
  } else {
    const availableBranches =
      Object.keys(examtimetableData.courses[selectedCourse]?.branches || {});
    setSelectedBranch(""); // ✅ Keep this
    setSections([]); // ✅ Clear old sections
  }
}, [selectedCourse]);

  return (
    <div className="text-black">
      <Title title="Exam Time Table" />

      <div className="p-4">
        <CourseSelector
          courses={courseList}
          selectedCourse={selectedCourse}
          onSelect={setSelectedCourse}
          setSelectedBranch={() => { }}
          setSelectedYear={() => { }}
        />

        {selectedCourse === "Exam Notice" ? (
          <div className="mt-6">
            <ExamNotice/>
          </div>
        ) : (
          <>
            {selectedCourse && (
              <BranchSelector
                branches={branches}
                selectedBranch={selectedBranch}
                onSelect={setSelectedBranch}
              />
            )}

            {sections.length > 0 && (
              <SectionSelector
                sections={sections}
                showName={true}
                hideIfShortName={false}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExamTimetable;
