"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { researchInnovation } from "@/constants/Research_Innovation/data";
import CourseSelector from "../common/academics/CourseSelector";
import ResearchLabPage from "./Research Labs";
import FundedProjectsPage from "./Funded Projects";
import Committee from "./Publications Patents";
import ConsultancyPage from "./Consultancy";
import InnovationPage from "./Innovation Cell";
import Title from "../common/academics/Title";

function RI() {
  const courseList = Object.keys(researchInnovation.sections).map((key) => ({
    courseKey: key,
    courseName: (researchInnovation.sections as any)[key].SectionsName,
  }));

  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const [selectedCourse, setSelectedCourse] = useState<string>(courseList[0]?.courseKey || "");

  useEffect(() => {
    if (section && courseList.some(course => course.courseKey === section)) {
      setSelectedCourse(section);
    }
  }, [section, courseList]);

  return (
    <div className="p-4 text-black">
      <Title title="Research & Innovation" />
      <CourseSelector
        courses={courseList}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
        setSelectedBranch={() => { }}
        setSelectedYear={() => { }}
      />

      <div className="mt-6">
        {selectedCourse === "Research_Labs_Centers" && <ResearchLabPage/>}
        {selectedCourse === "Funded_Projects" && <FundedProjectsPage/>}
        {selectedCourse === "Publications_Patents" && <FundedProjectsPage/>}
        {selectedCourse === "Consultancy" && <ConsultancyPage/>}
        {selectedCourse === "Innovation_Cell" && <InnovationPage/>}
      </div>
    </div>
  );
}

export default RI;
