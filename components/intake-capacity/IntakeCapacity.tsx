"use client";
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const IntakeCapacity: React.FC = () => {
  const [selectedCourse, setSelectedCourse] =
    useState<string>("B.E. (FULL-TIME)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="space-y-8 py-10">
      <h1
        className={`${playfair.className} flex flex-row justify-center items-center w-full text-6xl`}
      >
        Intake Capacity
      </h1>
      <Header onSelectCourse={handleSelectCourse} />
      <Content selectedCourse={selectedCourse} />
    </div>
  );
};

export default IntakeCapacity;
