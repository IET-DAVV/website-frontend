"use client";
import { bachelor } from "@/constants/landing/bachelor";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Card from "./Card";
import { Playfair_Display } from "next/font/google";
import { academicPrograms } from "@/constants/landing/academicPrograms";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const AcademicPrograms = () => {
  const [preview, setPreview] = useState<Object[]>(bachelor);
  return (
    <>
      <div className="bg-white py-12 px-8 flex flex-col items-start justify-start space-y-10">
        <h1
          className={`text-black font-mono text-6xl px-2 ${playfair.className}`}
        >
          ACADEMIC PROGRAMS
        </h1>
        <div
          className={`flex space-x-10 text-black font-light items-start font-serif text-lg`}
        >
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        >
          {preview?.map((item: any, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.link}>
                <Card branch={item.branch} type={item.type} link={item.link} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AcademicPrograms;
