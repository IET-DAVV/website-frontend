"use client"
import React from 'react'
import { subject } from "@/constants/facultyData/data"
import Link from 'next/link'
import Title from "../common/academics/Title"


const page = () => {
  return (
    <>
      <Title title="DEPARTMENT" className="text-7xl leading-tight font-newyork" />

<div className='ml-40 mr-40 p-4 text-lg font-medium text-[#434343]'>IET-DAVV has <span className=' text-black font-bold'>Eight major departments</span> with different engineering & Science streams. We have more than <span className='font-bold text-black '>85 faculty</span> members including (Regular,  Visiting & Adoc Faculty Members)</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-20 gap-5 ml-40 mr-40 mt-5 p-4">
        {subject.map((data, index) => (
          <Link
            key={index}
            href={`/facultyPage/branchFaculty?branch=${encodeURIComponent(data.subject)}`}
            className="relative h-[200px] w-[370px]  overflow-hidden group shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-300"
              style={{ backgroundImage: `url(${data.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000092] transition duration-300" />

            {/* Subject Text */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold text-center px-2">
              {data.subject}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default page
