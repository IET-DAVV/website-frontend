"use client";
import React, { useState } from "react";
import Header from "@/components/courses/Header";
import { Playfair } from "next/font/google";
import CoursesContent from "./CoursesContent";
import ProgramOutcome from "./ProgramOutcome";
<<<<<<< HEAD
import Title from "../common/academics/Title";
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
      <Title title="PROGRAMS OFFERED" />
=======
      <h1 className={`${playfair.className} text-6xl py-10 text-center`}>
        Programs offered
      </h1>
>>>>>>> origin/main
      <Header onSelectCourse={handleSelectCourse} />
      <CoursesContent selectedCourse={selectedCourse} />
      <ProgramOutcome />
    </section>
  );
};

export default Courses;
