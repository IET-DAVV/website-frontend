import React from "react";
import { Manrope, Playfair } from "next/font/google";
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

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <div className="flex justify-between">
        <div>
          <p
            className={`${manrope.className} text-slate-700 text-sm ml-24 mt-10 py-4`}
          >
            {filteredCourse.time}
          </p>
          <p className={`${playfair.className} text-7xl ml-24 w-[350px]`}>
            {filteredCourse.description}
          </p>
          <p className="text-slate-700 text-sm ml-24 py-6 w-[350px]">
            {filteredCourse.content}
          </p>
          <div className="flex ml-24 py-3 gap-28">
            <div>
              <p className={`${playfair.className} text-blue-500 text-3xl`}>
                {filteredCourse.tenure}
              </p>
              <p className={`${manrope.className} text-slate-500 py-2`}>
                Duration
              </p>
            </div>
            <div>
              <p className={`${playfair.className} text-blue-500 text-3xl`}>
                {filteredCourse.capacity}
              </p>
              <p className={`${manrope.className} text-slate-500 py-2`}>
                Students Enrolled
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 m-12">
          {filteredCourse.coursesOffered?.map((course, index) => {
            return (
              <button
                key={index}
                className={`${manrope.className} font-medium border border-dark-blue w-[250px] h-[229px] rounded-md hover:bg-light-blue hover:text-white text-lg p-2 flex flex-col items-center justify-center gap-4 transition-all duration-200 ease-linear`}
              >
                <span
                  className="text-4xl
                "
                >
                  {courseIcons[course]}
                </span>
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
