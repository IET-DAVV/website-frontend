import Achievements from "@/components/achievements-carousel/Achievements";
import Chart from "@/components/chart/Chart";
import Recruiters from "@/components/chart/Recruiters";
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
      <Recruiters />
      <AcademicPrograms />
      <Achievements />
      <Clubs />
      <Chart />
      <Events />
      {/* <Clubs /> */}
    </div>
  );
};

export default LandingContainer;
