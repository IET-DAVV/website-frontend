import About from "@/components/about2/About";
import History from "@/components/about2/History";
import Navbar from "@/containers/navbar/Navbar";
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
