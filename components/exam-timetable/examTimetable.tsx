"use client";

import React, { useState, useEffect } from "react";
import { examTimeTableData } from "@/constants/exam-timetable/examTimeTabledata";
import Title from "../common/academics/Title";
import CourseSelector from "../common/academics/CourseSelector";
import SectionSelector from "../common/academics/SectionSelector";
import { ReceiptRussianRuble } from "lucide-react";

function ExamTimetable() {
    const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
const [showSections, setShowSections] = useState<boolean>(false);
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);

  const courseList = Object.keys(examTimeTableData.courses).map(
    (courseKey) => ({
      courseKey,
      courseName: examTimeTableData.courses[courseKey].courseName,
    }),
  );

useEffect(()=>{
    if(selectedCourse ){
          const sectionList = Object.entries(examTimeTableData.courses[selectedCourse]?.sections || {}).map(
  ([sectionName, { PdfLink }]) => ({
    sectionName,
    PdfLink: PdfLink || null,
  })
);

setSections(sectionList);
      setShowSections(true);
    } else {
        setShowSections(false)
    }
}, [selectedCourse])

   return(
    <div className="">
    <div>
        <Title title="EXAM TIMETABLE" />
    </div>
    <div className="p-4 pb-16">
     <CourseSelector
        courses={courseList}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
        setSelectedBranch={setSelectedBranch}
        setSelectedYear={setSelectedYear}
      />
       {showSections && (
          <SectionSelector
            sections={sections}
            showName={true}
            hideIfShortName={false}
          />
        )}</div>
    </div>
   )

}

export default ExamTimetable;
