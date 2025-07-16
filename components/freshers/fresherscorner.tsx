"use client";

import React, { useState } from "react";
import Title from "../common/academics/Title";
import BranchSelector from "../common/academics/BranchSelector";
import CourseSelector from "../common/academics/CourseSelector";
import { freshersCornerData } from "@/constants/freshers-corner/data";
import { MdOutlineFileDownload } from "react-icons/md";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const FreshersCorner = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("BTECH_FULL_TIME");
  const [selectedSection, setSelectedSection] = useState<string>("A");
  const [selectedSemester, setSelectedSemester] = useState<string>("I");

  const branchNameToKeyMap = selectedCourse
    ? Object.entries(freshersCornerData[selectedCourse]?.branches || {}).reduce((acc, [branchKey, branchValue]) => {
        acc[branchValue.branchName] = branchKey;
        return acc;
      }, {} as { [branchName: string]: string })
    : {};

  const branchKeyToNameMap = selectedCourse
    ? Object.entries(freshersCornerData[selectedCourse]?.branches || {}).reduce((acc, [branchKey, branchValue]) => {
        acc[branchKey] = branchValue.branchName;
        return acc;
      }, {} as { [branchKey: string]: string })
    : {};

  const courseList = Object.keys(freshersCornerData).map((courseKey) => ({
    courseKey,
    courseName: freshersCornerData[courseKey].courseName,
  }));

  const branchNames = Object.keys(branchNameToKeyMap);
  const fixedYear = "1st";

  const getPdf = (type: string) => {
    const yearData = freshersCornerData[selectedCourse]?.branches[selectedBranch]?.years?.[fixedYear];
    if (!yearData) return null;

    switch (type) {
      case "classTimeTable":
        return ["CSE", "IT", "ETC"].includes(selectedBranch) && typeof yearData.classTimeTable === "object"
          ? yearData.classTimeTable?.[selectedSection]
          : typeof yearData.classTimeTable === "string"
          ? yearData.classTimeTable
          : null;

      case "calendar":
        return yearData.calendar;

      case "testTimeTable":
        return yearData.testTimeTable;

      case "syllabus":
        return typeof yearData.syllabus === "object"
          ? yearData.syllabus?.[selectedSemester]
          : typeof yearData.syllabus === "string"
          ? yearData.syllabus
          : null;

      case "examTimeTable":
        return yearData.examTimeTable;

      default:
        return null;
    }
  };

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
        ? ["CSE", "IT", "ETC"].includes(selectedBranch)
        : allowSelector;

    return (
      <div className="flex flex-col gap-4 w-full md:w-2/3 mx-auto mb-12">
        <h2 className="text-6xl font-newyork text-center mt-10">{title}</h2>

        {shouldShowSelector && selectorType === "section" && (
        <CourseSelector
            courses={[
            { courseKey: "A", courseName: "Section A" },
            { courseKey: "B", courseName: "Section B" },
            ]}
            selectedCourse={selectedSection}
            onSelect={(key) => setSelectedSection(key)}
            setSelectedBranch={() => {}}
            setSelectedYear={() => {}}
        />
        )}

        {shouldShowSelector && selectorType === "semester" && (
        <CourseSelector
            courses={[
            { courseKey: "I", courseName: "Semester I" },
            { courseKey: "II", courseName: "Semester II" },
            ]}
            selectedCourse={selectedSemester}
            onSelect={(key) => setSelectedSemester(key)}
            setSelectedBranch={() => {}}
            setSelectedYear={() => {}}
        />
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

        <iframe
          src={pdfLink}
          title={`PDF Viewer - ${type}`}
          className="border-2 border-blue-500 h-[500px] w-full"
        ></iframe>
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

        <BranchSelector
          branches={branchNames}
          selectedBranch={branchKeyToNameMap[selectedBranch] || ""}
          onSelect={(branchFullName) => {
            const branchKey = branchNameToKeyMap[branchFullName];
            setSelectedBranch(branchKey || "");
          }}
        />

        {renderPdfSection("Class Time Table", "classTimeTable", true, "section")}
        {renderPdfSection("Calendar", "calendar")}
        {renderPdfSection("Test Time Table", "testTimeTable")}
        {renderPdfSection("Syllabus", "syllabus", true, "semester")}
        {renderPdfSection("Exam Time Table", "examTimeTable")}
      </div>
    </div>
  );
};

export default FreshersCorner;
