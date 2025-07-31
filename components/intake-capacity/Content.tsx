import React, { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import { courseData } from "@/constants/intakeCapacity/data";
import { motion, useMotionValue, animate } from "framer-motion";
import "@/styles/fonts.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface ContentProps {
  selectedCourse: string;
}

const Content: React.FC<ContentProps> = ({ selectedCourse }) => {
  const filteredCourse = courseData.find((c) => c.name === selectedCourse);

  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (filteredCourse?.total) {
      const controls = animate(count, filteredCourse.total, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayCount(Math.round(latest));
        },
      });

      return controls.stop;
    }
  }, [filteredCourse?.total]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  if (!filteredCourse) {
    return <p>Course not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row justify-between px-6 lg:px-10 pb-10"
    >
      <div className="flex flex-col">
        <p className={`${manrope.className} text-slate-700 text-sm lg:ml-24 mt-10 py-4`}>
          {filteredCourse.time}
        </p>
        <h1 className="font-newyork text-4xl lg:text-7xl lg:ml-24 w-full lg:w-[400px]">
          {filteredCourse.fullName}
        </h1>
        <p className="text-slate-700 text-sm lg:ml-24 py-6 w-full lg:w-[350px]">
          {filteredCourse.description}
        </p>

        {/* 🔥 Fixed Animated Seats Counter */}
        <p className="font-newyork text-slate-700 lg:ml-24 py-4 text-center flex flex-col items-center">
          <motion.span
            className="text-4xl text-dark-blue"
          >
            {displayCount.toLocaleString()}
          </motion.span>
          Seats
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {filteredCourse.coursesOffered?.map((course, index) => (
          <motion.div
            key={course.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="flex flex-col items-center text-center w-64 min-h-[160px]"
          >
            <h3 className="text-light-blue font-bold mb-4 text-lg min-h-[48px] flex items-center justify-center">
              {course.name}
            </h3>
            <div className="flex items-center justify-center w-20 h-20 bg-[#06779B] bg-opacity-10 text-black rounded-full">
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold">{course.seats}</div>
                <div className="text-sm">Seats</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Content;
