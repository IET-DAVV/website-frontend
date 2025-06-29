"use client";
import React, { useState, useEffect } from "react";
import { syllabusDataData } from "@/constants/syllabus/data";
import CourseSelector from "../common/academics/CourseSelector";
import BranchSelector from "../common/academics/BranchSelector";
import YearSelector from "../common/academics/YearSelector";
import SectionSelector from "../common/academics/SectionSelector";
import Title from "../common/academics/Title";


const Syllabus = () => {
  const courses = Object.keys(syllabusDataData.courses);
  const [selectedCourse, setSelectedCourse] = useState<string>("BE_FULL_TIME");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [showSections, setShowSections] = useState<boolean>(false);
  const [sections, setSections] = useState<
    { sectionName: string; PdfLink: string | null }[]
  >([]);

  const courseList = Object.keys(syllabusDataData.courses).map((courseKey) => ({
    courseKey,
    courseName: syllabusDataData.courses[courseKey].courseName,
  }));

  const branches = Object.keys(
    syllabusDataData.courses[selectedCourse]?.branches || {},
  );
  const years = Object.keys(
    syllabusDataData.courses[selectedCourse]?.branches[selectedBranch]?.years ||
      {},
  );

  console.log(courseList);
  useEffect(() => {
    if (selectedCourse && selectedBranch && selectedYear) {
      const sectionList = Object.entries(
        syllabusDataData.courses[selectedCourse]?.branches[selectedBranch]
          ?.years[selectedYear]?.sections || {},
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
    <div className="text-black">
      <Title title="SYLLABUS" />
      <div className="p-4">
        <CourseSelector
          courses={courseList}
          selectedCourse={selectedCourse}
          onSelect={setSelectedCourse}
          setSelectedBranch={setSelectedBranch}
          setSelectedYear={setSelectedYear}
        />
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

        {showSections && (
          <SectionSelector
            sections={sections}
            showName={true}
            hideIfShortName={false}
          />
        )}
      </div>
    </div>
  );
};

export default Syllabus;
