// dont change the export variable and read all the comments
"use client";
import React, { useState, useEffect } from "react";
import Title from "../common/academics/Title"; // Use this import for titel component
// import {} from "../constants/Tender/data.ts"
import CourseSelector from "../common/academics/CourseSelector"

// This component creates the main title, styled similarly to your example.

import { useSearchParams } from "next/navigation";
import { Tenders } from "@/constants/Tender/data";
import ClosedTendersPage from "./Closed Tenders";
import OpenTendersPage from "./Open Tenders";
import ProcurementPage from "./Procurement";

function TendersPage() {
  const courseList = Object.keys(Tenders.sections).map((key) => ({
    courseKey: key,
    courseName: (Tenders.sections as any)[key].SectionsName,
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
      <Title title="TENDERS AND PROCUREMENTS" />
      <CourseSelector
        courses={courseList}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
        setSelectedBranch={() => { }}
        setSelectedYear={() => { }}
      />

      <div className="mt-6">
        {selectedCourse === "Open_Tenders" && <OpenTendersPage/>}
        {selectedCourse === "Closed_Tenders" && <ClosedTendersPage/>}
        {selectedCourse === "Procurement_Policies" && <ProcurementPage/>}
      </div>
      </div>
      );
    }

export default TendersPage;
