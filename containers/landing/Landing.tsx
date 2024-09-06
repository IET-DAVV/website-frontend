import About from "@/components/landing-page/about/About";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import Landing from "@/components/landing-page/Landing";
import React from "react";

const LandingContainer = () => {
  return (
    <div>
      <Landing />
      <About />
      <AcademicPrograms />
      <Clubs />
    </div>
  );
};

export default LandingContainer;
