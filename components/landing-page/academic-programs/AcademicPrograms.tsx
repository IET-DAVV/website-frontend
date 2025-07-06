"use client";
import { bachelor } from "@/constants/landing/bachelor";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Card from "./Card";
import "@/styles/fonts.css";
import { academicPrograms } from "@/constants/landing/academicPrograms";
import { motion, useInView } from "framer-motion";

const AcademicPrograms = () => {
  const [preview, setPreview] = useState<Object[]>(bachelor);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-start justify-start space-y-6 sm:space-y-10">
      <h1 className="text-black font-mono text-4xl sm:text-6xl px-1 sm:px-2 font-newyork">
        ACADEMIC PROGRAMS
      </h1>

      <div className="flex flex-wrap gap-4 sm:gap-10 text-black font-light items-start font-serif text-base sm:text-lg">
        {academicPrograms &&
          academicPrograms.map((value, id) => (
            <button
              key={id}
              className={`hover:underline font-sans hover:font-semibold ${
                preview === value.link
                  ? "font-semibold underline"
                  : "text-black"
              }`}
              onClick={() => setPreview(value.link)}
            >
              {value.name}
            </button>
          ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
      >
        {preview?.map((item: any, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={item.link}>
              <Card branch={item.branch} type={item.type} link={item.link} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AcademicPrograms;
