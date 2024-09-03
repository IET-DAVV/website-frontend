import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";
import AcademicPrograms from "@/components/academic-programs/AcademicPrograms";
import Clubs from "@/components/clubs/Clubs";
import History from "@/components/about-page/History";
import About from "@/components/about/About";

const page = () => {
  return (
    <div className=" overflow-x-hidden bg-white">
      <Navbar />
      <About />
      <History />
      <Clubs />
    </div>
  );
};

export default page;
