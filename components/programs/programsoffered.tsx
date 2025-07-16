"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Title from "../common/academics/Title";
import { useSearchParams } from "next/navigation";

const ProgramsOffered: React.FC = () => {
  const searchParams = useSearchParams();
  const courseQuery = searchParams.get("course") || "B.TECH (FULL-TIME)";

  const [selectedCourse, setSelectedCourse] = useState<string>(courseQuery);

  useEffect(() => {
    setSelectedCourse(courseQuery); // Update on query change
  }, [courseQuery]);

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="space-y-8 py-10">
      <Title title="PROGRAMS OFFERED" />
      <Header onSelectCourse={handleSelectCourse} selectedCourse={selectedCourse} />
      <Content selectedCourse={selectedCourse} />
    </div>
  );
};

export default ProgramsOffered;
