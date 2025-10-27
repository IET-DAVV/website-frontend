"use client";

import React, { useState } from "react";
import { antiRagging } from "@/constants/antiragging/data";
import CourseSelector from "../common/academics/CourseSelector";
import ResearchLabPage from "./Research Labs";
import FundedProjectsPage from "./Funded Projects";
import Committee from "./Publications Patents";
import ConsultancyPage from "./Consultancy";
import InnovationPage from "./Innovation Cell";
import Title from "../common/academics/Title";

function RI() {
  const courseList = Object.keys(antiRagging.sections).map((key) => ({
    courseKey: key,
    courseName: antiRagging.sections[key].SectionsName,
  }));

  const [selectedCourse, setSelectedCourse] = useState < string > (courseList[0]?.courseKey || "");

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
