import React from "react";
import { Inter } from "next/font/google";
import { course } from "@/constants/courses/data";
import { FaTrowelBricks, FaMicrochip } from "react-icons/fa6";
import {
  FaReact,
  FaLaptopCode,
  FaCogs,
  FaHardHat,
  FaNetworkWired,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import { IoFlask } from "react-icons/io5";

/*Icons corresponding to different courses offered */

const courseIcons: { [key: string]: JSX.Element } = {
  "Computer Science": <FaReact />,
  "Information Technology": <FaLaptopCode />,
  "Mechanical Engineering": <FaCogs />,
  "Civil Engineering": <FaTrowelBricks />,
  "Electronics & Telecommunication Engineering": <FaNetworkWired />,
  "Electronics & Instrumentation Engineering": <FaMicrochip />,
  "Applied Mathematics in Specialization in Computing & Informatics": (
    <FaBook />
  ),
  "Computer Engineering with specialization in Software Engineering": (
    <FaReact />
  ),
  "Information Technology with specialization in Information Security": (
    <FaLaptopCode />
  ),
  "Mechanical Engineering with specialization in Design & Thermal Engineering":
    <FaCogs />,
  "Industrial Engineering & Management": <FaGraduationCap />,
  "Electronics  Engineering with specialization in Digital Communication": (
    <FaNetworkWired />
  ),
  "Electronics  Engineering with specialization in Digital Instrumentation": (
    <FaMicrochip />
  ),
  "All these UG/PG/Doctoral programmes come under Faculty of Engineering of DAVV":
    <IoFlask />,
};

/* Fonts definition */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* typing definition */

interface CoursesContentProps {
  selectedCourse: string;
}

/* main function */

const CoursesContent: React.FC<CoursesContentProps> = ({ selectedCourse }) => {
  const filteredCourse = course.find((c) => c.name === selectedCourse);

  if (!filteredCourse) {
    return <p>Please select a course</p>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-6 md:px-12">
        <div className="md:w-1/2">
          <p
            className={`${inter.className} text-primary-blue text-sm mt-10 py-4`}
          >
            {filteredCourse.time}
          </p>
          <h2 className={`${inter.className} text-5xl md:text-7xl font-semibold`}>
            {filteredCourse.description}
          </h2>
          <p className="text-gray-700 text-base mt-6">{filteredCourse.content}</p>
          <div className="flex mt-8 gap-12">
            <div>
              <p className={`${inter.className} text-primary-blue text-4xl font-bold`}>
                {filteredCourse.tenure}
              </p>
              <p className={`${inter.className} text-gray-500 mt-2`}>Duration</p>
            </div>
            <div>
              <p className={`${inter.className} text-primary-blue text-4xl font-bold`}>
                {filteredCourse.capacity}
              </p>
              <p className={`${inter.className} text-gray-500 mt-2`}>Students Enrolled</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0 md:w-1/2">
          {filteredCourse.coursesOffered?.map((course, index) => {
            return (
              <button
                key={index}
              className={`${inter.className} font-medium border border-primary-blue rounded-lg hover:bg-[#06779B] hover:text-white text-lg p-6 flex flex-col items-center justify-center gap-4 transition-colors duration-300 ease-in-out shadow-md`}
              >
                <span className="text-5xl">{courseIcons[course]}</span>
                <span>{course}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursesContent;
