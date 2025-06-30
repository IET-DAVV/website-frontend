"use client";
import React, { useState } from "react";
import Header from "@/components/courses/Header";
import { Playfair } from "next/font/google";
import CoursesContent from "./CoursesContent";
import ProgramOutcome from "./ProgramOutcome";
import Title from "../common/academics/Title";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Courses = () => {
  const [selectedCourse, setSelectedCourse] =
    useState<string>("B.E. (FULL-TIME)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <section className="">
      <Title title="PROGRAMS OFFERED" />
      <Header onSelectCourse={handleSelectCourse} />
      <CoursesContent selectedCourse={selectedCourse} />
      <ProgramOutcome />
    </section>
  );
};

export default Courses;
