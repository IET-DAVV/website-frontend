"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { researchInnovation } from "@/constants/Research_Innovation/data";
import CourseSelector from "../common/academics/CourseSelector";
import ResearchLabPage from "./Research Labs";
import FundedProjectsPage from "./Funded Projects";
// import Committee from "./Publications Patents";
import ConsultancyPage from "./Consultancy";
import InnovationPage from "./Innovation Cell";
import Title from "../common/academics/Title";

function RI() {
  const sectionList = Object.keys(researchInnovation.sections).map((key) => ({
    courseKey: key,
    courseName: (researchInnovation.sections as any)[key].SectionsName,
  }));

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sectionQuery = searchParams.get("section");

  const isQueryValid =
    sectionQuery &&
    sectionList.some((s) => s.courseKey === sectionQuery);

  const selectedSection = isQueryValid
    ? sectionQuery
    : sectionList[0]?.courseKey || "";

  const handleSectionSelect = (newSectionKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("section", newSectionKey);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 text-black">
      <Title title="Research & Innovation" />

      <CourseSelector
        courses={sectionList}
        selectedCourse={selectedSection} 
        onSelect={handleSectionSelect}     
      />

      <div className="mt-6">
        {selectedSection === "Research_Labs_Centers" && <ResearchLabPage />}
        {selectedSection === "Funded_Projects" && <FundedProjectsPage />}
        {selectedSection === "Publications_Patents" && <FundedProjectsPage />}
        {selectedSection === "Consultancy" && <ConsultancyPage />}
        {selectedSection === "Innovation_Cell" && <InnovationPage />}
      </div>
    </div>
  );
}

export default RI;