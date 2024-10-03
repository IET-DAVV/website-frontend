import React from "react";
import { Manrope, Playfair } from "next/font/google";
import { courseData } from "@/constants/intakeCapacity/data";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
    <div className="flex justify-between mb-72">
      <div className="flex flex-col">
        <p
          className={`${manrope.className} text-slate-700 text-sm ml-24 mt-10 py-4`}
        >
          {filteredCourse.time}
        </p>
        <h1 className={`${playfair.className} text-7xl ml-24 w-[400px]`}>
          {filteredCourse.fullName}
        </h1>
        <p className="text-slate-700 text-sm ml-24 py-6 w-[350px]">
          {filteredCourse.description}
        </p>
        <p className={`${playfair.className} text-slate-700 ml-24 py-4 text-center flex flex-col`}>
          <span className="text-4xl ml-2 text-blue-600">
            {filteredCourse.total}
          </span>
        Seats
        </p>
      </div>

      <div className={`${manrope.className} ml-20 mt-14`}>
        <div className="grid grid-cols-3 gap-4">
          {filteredCourse.coursesOffered?.map((course, index) => (
            <div key={index} className="flex flex-col mt-4">
              <h3 className="text-blue-700 font-bold mb-5 text-lg ">
                {course.name}
              </h3>
              <div className="flex items-center justify-center w-20 h-20 bg-blue-200 text-black rounded-full text-center">
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
