import About from "@/components/about2/About";
import History from "@/components/about2/History";
import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";
import AcademicPrograms from "@/components/academic-programs/AcademicPrograms";

const page = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <About/>
      <History /> 
    </div>
      
  );
};

export default page;
