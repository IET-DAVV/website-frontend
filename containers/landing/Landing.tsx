import Achievements from "@/components/achievements-carousal/Achievements";
import About from "@/components/landing-page/about/About";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import Events from "@/components/landing-page/events/Events";
import Landing from "@/components/landing-page/Landing";
import React from "react";

const LandingContainer = () => {
  return (
    <div>
      <Landing />
      <About />
      <AcademicPrograms />
      <Achievements />
      <Events />
      <Clubs />
    </div>
  );
};

export default LandingContainer;
