import Achievements from "@/components/achievements-carousel/Achievements";
import Chart from "@/components/chart/Chart";
import Recruiters from "@/components/chart/Recruiters";
import About from "@/components/landing-page/about/About";
import NewAcademicPrograms from "@/components/landing-page/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import Events from "@/components/landing-page/events/Events";
import NewLandingpage from "@/components/landing-page/Newlandingpage";
import React from "react";

const LandingContainer = () => {
  return (
    <div>
      <NewLandingpage />
      <About />
      <Recruiters />
      <NewAcademicPrograms />
      <Achievements />
      <Clubs />
      <Chart />
      <Events />
      <Clubs />
    </div>
  );
};

export default LandingContainer;
