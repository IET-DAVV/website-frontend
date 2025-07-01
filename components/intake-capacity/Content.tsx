<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Manrope } from "next/font/google";
import { courseData } from "@/constants/intakeCapacity/data";
import "@/styles/fonts.css";
=======
import React from "react";
import { Manrope, Playfair } from "next/font/google";
import { courseData } from "@/constants/intakeCapacity/data";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
>>>>>>> origin/main

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface ContentProps {
  selectedCourse: string;
}

const Content: React.FC<ContentProps> = ({ selectedCourse }) => {
  const filteredCourse = courseData.find((c) => c.name === selectedCourse);

  if (!filteredCourse) {
    return <p>Course not found</p>;
  }

  return (
    <div className="flex justify-between px-10 pb-10">
      <div className="flex flex-col">
        <p
          className={`${manrope.className} text-slate-700 text-sm ml-24 mt-10 py-4`}
        >
          {filteredCourse.time}
        </p>
<<<<<<< HEAD
        <h1 className={`font-newyork text-7xl ml-24 w-[400px]`}>
=======
        <h1 className={`${playfair.className} text-7xl ml-24 w-[400px]`}>
>>>>>>> origin/main
          {filteredCourse.fullName}
        </h1>
        <p className="text-slate-700 text-sm ml-24 py-6 w-[350px]">
          {filteredCourse.description}
        </p>
        <p
<<<<<<< HEAD
          className={`font-newyork text-slate-700 ml-24 py-4 text-center flex flex-col`}
=======
          className={`${playfair.className} text-slate-700 ml-24 py-4 text-center flex flex-col`}
>>>>>>> origin/main
        >
          <span className="text-4xl ml-2 text-dark-blue">
            {filteredCourse.total}
          </span>
          Seats
        </p>
      </div>

      <div className={`${manrope.className} ml-20 mt-14`}>
        <div className="grid grid-cols-3 gap-4">
          {filteredCourse.coursesOffered?.map((course, index) => (
            <div key={index} className="flex flex-col mt-4">
              <h3 className="text-light-blue font-bold mb-5 text-lg ">
                {course.name}
              </h3>
              <div className="flex items-center justify-center w-20 h-20 bg-[#06779B] bg-opacity-10 text-black rounded-full text-center">
                <div className="flex flex-col">
                  <div className="text-xl font-bold">{course.seats}</div>
                  <div className="text-sm ">Seats</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
