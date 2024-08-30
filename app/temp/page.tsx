import Navbar from "@/containers/navbar/Navbar";
import About from "@/components/about/About";
import React from "react";
import AcademicPrograms from "@/components/academic-programs/AcademicPrograms";

const page = () => {
  return (
    <div >
      <Navbar />
     <About/>
     <AcademicPrograms />
    
    </div>
  );
};

export default page;
