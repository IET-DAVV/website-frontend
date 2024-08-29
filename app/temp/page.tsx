import About from "@/components/about2/About";
import History from "@/components/about2/History";
import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <About/>
      <History /> 
    </div>
      
  );
};

export default page;
