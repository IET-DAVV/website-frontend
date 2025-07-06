"use client";

import React, { useState } from "react";
import { antiRagging } from "@/constants/antiragging/data";
import CourseSelector from "../common/academics/CourseSelector";
import Guidelines from "./Guidelines";
import Curbing from "./Curbing";
import Committee from "./Committee";
import Squad from "./Squad";
import Discipline from "./Discipline";
import Title from "../common/academics/Title";

function AntiRagging() {
  const courseList = Object.keys(antiRagging.sections).map((key) => ({
    courseKey: key,
    courseName: antiRagging.sections[key].SectionsName,
  }));

  const [selectedCourse, setSelectedCourse] = useState < string > (courseList[0]?.courseKey || "");

  return (
    <div className="p-4 text-black">
      <Title title="Anti Ragging" />
      <CourseSelector
        courses={courseList}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
        setSelectedBranch={() => { }}
        setSelectedYear={() => { }}
      />

      <div className="mt-6">
        {selectedCourse === "Guidelines" && <Guidelines />}
        {selectedCourse === "CURBING_THE_MENANCE_OF_RAGGING" && <Curbing />}
        {selectedCourse === "Anti_Ragging_committee" && <Committee />}
        {selectedCourse === "Anti_Ragging_squad" && <Squad />}
        {selectedCourse === "Dicipline_Committee" && <Discipline />}
      </div>
    </div>
  );
}

export default AntiRagging;
