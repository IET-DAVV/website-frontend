import About from "@/components/about2/About";
import History from "@/components/about2/History";
import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";
import AcademicPrograms from "@/components/academic-programs/AcademicPrograms";
import Clubs from "@/components/clubs/Clubs";

const page = () => {
  return (
    <div className=" overflow-x-hidden bg-white">
      <Navbar />
      {/* <About/> */}
      <History /> 
      <Clubs/>
    </div>
      
  );
};

export default page;
