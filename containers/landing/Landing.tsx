import Achievements from "@/components/achievements-carousel/Achievements";
import Chart from "@/components/chart/Chart";
import Recruiters from "@/components/chart/Recruiters";
import About from "@/components/landing-page/about/About";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import StackCards from "@/components/landing-page/ClubsUpdated";
import Events from "@/components/landing-page/events/Events";
import HeroSection from "@/components/landing-page/HeroSection";

import React from "react";

const LandingContainer = () => {
  return (
    <div>
      {/* <Landing /> */}
      <HeroSection/>
      <About />
      <Recruiters />
      <AcademicPrograms />
      <Achievements />
      <Chart />
      <Events />
      <StackCards/>
    </div>
  );
};

export default LandingContainer;
