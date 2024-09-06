import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import History from "@/components/about-page/History";
import About from "@/components/landing-page/about/About";

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
