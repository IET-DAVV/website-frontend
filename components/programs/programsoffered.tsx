"use client";
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Title from "../common/academics/Title";

const ProgramsOffered: React.FC = () => {
  const [selectedCourse, setSelectedCourse] =
    useState<string>("B.TECH (FULL-TIME)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="space-y-8  py-10">
      <Title title="PROGRAMS OFFEREd" />
      <Header onSelectCourse={handleSelectCourse} />
      <Content selectedCourse={selectedCourse} />
    </div>
  );
};

export default ProgramsOffered;
