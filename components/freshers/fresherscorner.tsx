"use client";

import React, { useState } from "react";
import Title from "../common/academics/Title";
import BranchSelector from "../common/academics/BranchSelector";
import CourseSelector from "../common/academics/CourseSelector";
import { timetableData } from "@/constants/timetable/data";
import { syllabusData } from "@/constants/syllabus/data";
import { calenderData } from "@/constants/calender/data";
import { testtimetableData } from "@/constants/test-timetable/data";
import { examtimetableData } from "@/constants/exam-timetable/data";
import { MdOutlineFileDownload } from "react-icons/md";
import SyllabusAccordion from "../common/academics/SyllabusAccordion";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const FreshersCorner = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("BE_FULL_TIME");
  const [selectedSection, setSelectedSection] = useState<string>("A");
  const [selectedSemester, setSelectedSemester] = useState<string>("I");
  const [openSubjectCode, setOpenSubjectCode] = useState<string | null>(null);

  // Map course keys to data sources
  const courseMapping: { [key: string]: { data: any; key: string } } = {
    "BE_FULL_TIME": { data: timetableData.courses.BE_FULL_TIME, key: "BE_FULL_TIME" },
    "BE_PART_TIME": { data: timetableData.courses.BE_PART_TIME, key: "BE_PART_TIME" },
    "ME": { data: timetableData.courses.ME, key: "ME" },
    "MSC": { data: timetableData.courses.MSC, key: "MSC" },
    "PHD": { data: timetableData.courses.PHD, key: "PHD" },
  };

  const branchNameToKeyMap = selectedCourse && courseMapping[selectedCourse]
    ? Object.keys(courseMapping[selectedCourse].data.branches).reduce((acc, branchName) => {
        acc[branchName] = branchName; // Since timetable data uses full names as keys
        return acc;
      }, {} as { [branchName: string]: string })
    : {};

  const branchKeyToNameMap = selectedCourse && courseMapping[selectedCourse]
    ? Object.keys(courseMapping[selectedCourse].data.branches).reduce((acc, branchName) => {
        acc[branchName] = branchName; // Since timetable data uses full names as keys
        return acc;
      }, {} as { [branchKey: string]: string })
    : {};

  const courseList = Object.keys(courseMapping).map((courseKey) => ({
    courseKey,
    courseName: courseMapping[courseKey].data.courseName,
  }));

  const branchNames = Object.keys(branchNameToKeyMap);
  const fixedYear = "Year 1";

  // Get the subjects for the selected semester from syllabus data
  const getSubjectsForSemester = () => {
    if (!selectedCourse || !selectedBranch || !selectedSemester) return [];
    
    const syllabusCourseKey = courseMapping[selectedCourse].key === "BE_FULL_TIME" ? "be_btech_full_time" : courseMapping[selectedCourse].key.toLowerCase();
    const syllabusCourseData = syllabusData.courses[syllabusCourseKey];
    
    if (!syllabusCourseData) return [];
    
    // Map branch names from timetable to syllabus format
    const branchNameMapping: { [key: string]: string } = {
      "Computer Science": "Computer Science and Engineering",
      "Information Technology": "Information Technology", 
      "Electronics and Telecommunication": "Electronics & Telecommunication Engineering",
      "Electronics and Instrumentation": "Electronics & Instrumentation Engineering",
      "Mechanical Engineering": "Mechanical Engineering",
      "Civil Engineering": "Civil Engineering"
    };
    
    const syllabusBranchName = branchNameMapping[selectedBranch] || selectedBranch;
    
    if (syllabusCourseData.branches?.[syllabusBranchName]?.semesters) {
      const semesterKey = selectedSemester === "I" ? "Semester 1" : "Semester 2";
      return syllabusCourseData.branches[syllabusBranchName].semesters[semesterKey]?.subjects || [];
    }
    
    return [];
  };

  const subjects = getSubjectsForSemester();

  // Toggles an accordion open or closed
  const handleToggleSubject = (subjectCode: string) => {
    setOpenSubjectCode(prevCode => (prevCode === subjectCode ? null : subjectCode));
  };

  // Close any open accordion when semester changes
  React.useEffect(() => {
    setOpenSubjectCode(null);
  }, [selectedSemester]);

  const getPdf = (type: string) => {
    if (!selectedCourse || !selectedBranch || !courseMapping[selectedCourse]) return null;

    const courseData = courseMapping[selectedCourse].data;
    const branchData = courseData.branches[selectedBranch];

    if (!branchData) return null;

    switch (type) {
      case "classTimeTable":
        const yearData = branchData.years?.[fixedYear];
        if (!yearData) return null;
        if (yearData.sections) {
          return yearData.sections?.[`Section ${selectedSection}`]?.PdfLink || yearData.sections?.["Section A"]?.PdfLink || null;
        }
        return null;
      case "calendar":
        return calenderData.years?.["1st YEAR"]?.PdfLink || 
               calenderData.years?.["2nd YEAR ONWARDS...."]?.PdfLink || 
               null;
      case "testTimeTable":
        const testCourseData = testtimetableData.courses[courseMapping[selectedCourse].key];
        if (testCourseData?.branches?.[selectedBranch]?.years?.[fixedYear]?.sections) {
          return testCourseData.branches[selectedBranch].years[fixedYear].sections[`Section ${selectedSection}`]?.PdfLink || null;
        }
        return null;
      case "syllabus":
        const syllabusCourseKey = courseMapping[selectedCourse].key === "BE_FULL_TIME" ? "be_btech_full_time" : courseMapping[selectedCourse].key.toLowerCase();
        const syllabusCourseData = syllabusData.courses[syllabusCourseKey];
        
        // Map branch names from timetable to syllabus format
        const branchNameMapping: { [key: string]: string } = {
          "Computer Science": "Computer Science and Engineering",
          "Information Technology": "Information Technology", 
          "Electronics and Telecommunication": "Electronics & Telecommunication Engineering",
          "Electronics and Instrumentation": "Electronics & Instrumentation Engineering",
          "Mechanical Engineering": "Mechanical Engineering",
          "Civil Engineering": "Civil Engineering"
        };
        
        const syllabusBranchName = branchNameMapping[selectedBranch] || selectedBranch;
        
        if (syllabusCourseData?.branches?.[syllabusBranchName]?.semesters) {
          const semesterKey = selectedSemester === "I" ? "Semester 1" : "Semester 2";
          const semesterData = syllabusCourseData.branches[syllabusBranchName].semesters[semesterKey];
          if (semesterData?.subjects?.length > 0) {
            return semesterData.subjects[0].pdfLink; // Return first subject PDF as representative
          }
        }
        return null;
      case "examTimeTable":
        const examCourseData = examtimetableData.courses["Exam Timetable"];
        if (examCourseData?.branches?.["BTECH I YEAR"]?.sections?.["1st Year"]) {
          return examCourseData.branches["BTECH I YEAR"].sections["1st Year"].PdfLink;
        }
        return null;
      default:
        return null;
    }
  };

  const renderTabs = (
    items: { key: string; label: string }[],
    selected: string,
    onSelect: (val: string) => void
  ) => (
    <div className="flex justify-center gap-6 mt-4 mb-2">
      {items.map(({ key, label }) => {
        const isActive = selected === key;
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`relative pb-2 text-lg sm:text-xl transition-all duration-300 ${
              isActive ? "text-[#3B799E] font-semibold" : "text-gray-400 font-light"
            }`}
          >
            {label}
            <span
              className={`absolute left-0 bottom-0 transition-all duration-300 ${
                isActive ? "w-full h-[3px] bg-[#3B799E]" : "w-full h-[1px] bg-gray-300"
              }`}
            ></span>
          </button>
        );
      })}
    </div>
  );

  const renderPdfSection = (
    title: string,
    type: string,
    allowSelector: boolean = false,
    selectorType: "section" | "semester" = "section"
  ) => {
    const pdfLink = getPdf(type);
    if (!pdfLink) return null;

    const shouldShowSelector =
      type === "classTimeTable"
        ? ["Computer Science", "Information Technology", "Electronics and Telecommunication"].includes(selectedBranch)
        : allowSelector;

    // Check if the link is an image
    const isImage = /\.(jpeg|jpg|png|gif|bmp|webp)$/i.test(pdfLink);

    return (
      <div className="flex flex-col gap-4 w-full md:w-2/3 mx-auto mb-12">
        <h2 className="text-6xl font-newyork text-center mt-10">{title}</h2>

        {shouldShowSelector && selectorType === "section" &&
          renderTabs(
            [
              { key: "A", label: "Section A" },
              { key: "B", label: "Section B" },
            ],
            selectedSection,
            setSelectedSection
          )}

        {shouldShowSelector && selectorType === "semester" &&
          renderTabs(
            [
              { key: "I", label: "Semester I" },
              { key: "II", label: "Semester II" },
            ],
            selectedSemester,
            setSelectedSemester
          )}

        {/* Subject Accordion List for Selected Semester */}
        {type === "syllabus" && selectedSemester && subjects.length > 0 && (
          <div className="mt-8 w-full mx-auto">
            <h3 className="text-4xl font-newyork text-center mb-6">Semester {selectedSemester} Subjects</h3>
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
          </div>
        )}

        {type === "syllabus" && selectedSemester && subjects.length === 0 && selectedBranch && (
          <div className="mt-8 w-full mx-auto">
            <p className="text-gray-500 text-center">Syllabus details for this selection will be available soon.</p>
          </div>
        )}

        <div className="flex justify-end items-center">
          <a
            href={pdfLink}
            className="bg-black rounded-full p-1 ml-auto hover:scale-105 focus:outline-none transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineFileDownload className="text-white" />
          </a>
        </div>

        {isImage ? (
          <div className="border-2 border-blue-500 h-[500px] w-full overflow-y-auto overflow-x-hidden">
            <img
              src={pdfLink}
              alt={`Calendar - ${type}`}
              className="w-full h-auto min-h-[500px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <iframe
            src={pdfLink}
            title={`PDF Viewer - ${type}`}
            className="border-2 border-blue-500 h-[500px] w-full"
            loading="lazy"
          ></iframe>
        )}
      </div>
    );
  };

  return (
    <div className={`text-black ${manrope.className}`}>
      <Title title="Freshers Corner" />

      <div className="p-4">
        <CourseSelector
          courses={courseList}
          selectedCourse={selectedCourse}
          onSelect={(courseKey) => {
            setSelectedCourse(courseKey);
            setSelectedBranch("");
          }}
          setSelectedBranch={setSelectedBranch}
          setSelectedYear={() => {}}
        />

        <div className="mt-6">
          <BranchSelector
            branches={branchNames}
            selectedBranch={selectedBranch}
            onSelect={(branchName) => {
              setSelectedBranch(branchName);
            }}
          />
        </div>

        {selectedBranch && (
          <>
            {renderPdfSection("Class Time Table", "classTimeTable", true, "section")}
            {renderPdfSection("Calendar", "calendar")}
            {renderPdfSection("Syllabus", "syllabus", true, "semester")}
            {renderPdfSection("Test Time Table", "testTimeTable", true, "section")}
            {renderPdfSection("Exam Time Table", "examTimeTable")}
          </>
        )}
      </div>
    </div>
  );
};

export default FreshersCorner;
