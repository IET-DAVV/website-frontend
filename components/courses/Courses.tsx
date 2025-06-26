"use client";
import React, { useState } from "react";
import Header from "@/components/courses/Header";
import { Inter } from "next/font/google";
import CoursesContent from "./CoursesContent";
import ProgramOutcome from "./ProgramOutcome";

const inter = Inter({
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
    <main className={inter.className}>
      <div className="w-full mx-auto px-2 md:px-4">
        <h1 className="text-6xl py-10 text-center">Programs offered</h1>
        <Header onSelectCourse={handleSelectCourse} />
        <CoursesContent selectedCourse={selectedCourse} />
        <ProgramOutcome />
      </div>
    </main>
  );
};

export default Courses;
