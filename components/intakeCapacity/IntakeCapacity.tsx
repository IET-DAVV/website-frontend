"use client"
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const intakeCapacity: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("B.E. (FULL-TIME)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div>
      <Header onSelectCourse={handleSelectCourse} />
      <Content selectedCourse={selectedCourse} />
    </div>
  );
};

export default intakeCapacity;
