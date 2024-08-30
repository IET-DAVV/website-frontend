"use client";
import { bachelor, master, phd } from "@/constants/landing/bachelor";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Card from "./Card";

const AcademicPrograms = () => {
  const [preview, setPreview] = useState<any>(bachelor);

  console.log("this is data", preview);
  return (
    <>
      <div className="bg-white py-12 px-8 ">
        <h1 className="text-black font-mono text-4xl px-2">
          ACADEMIC PROGRAMS
        </h1>
        <div className="flex px-2 my-6 text-black font-light items-start font-serif text-lg">
          <button
            className="flex pr-8 hover:underline hover:font-bold"
            onClick={() => setPreview(bachelor)}
          >
            Bachelor
          </button>
          <button
            className="flex px-8 hover:underline hover:font-bold"
            onClick={() => setPreview(master)}
          >
            Masters
          </button>
          <button
            className="flex px-8 hover:underline hover:font-bold"
            onClick={() => setPreview(phd)}
          >
            PhD
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          { preview?.map((item:any) => {
            console.log("item b4 return ", item)
             return (
              <Link href={item.link} key={item.id}>
                <Card branch={item.branch} type={item.type} link={item.link}/>
              </Link>
             )
           })}
        </div>
      </div>
    </>
  );
};

export default AcademicPrograms;
