"use client";
import React, { useState } from "react";
import Header from "@/components/courses/Header";
import { Playfair } from "next/font/google";
import CoursesContent from "./CoursesContent";
import ProgramOutcome from "./ProgramOutcome";

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
    <section>
      <h1 className={`${playfair.className} text-6xl text-center my-10`}>
        Programs offered
      </h1>
      <Header onSelectCourse={handleSelectCourse} />
      <CoursesContent selectedCourse={selectedCourse} />
      <ProgramOutcome />
    </section>
  );
};

export default Courses;
