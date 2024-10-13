import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Courses from "@/components/courses/Courses";

import React from "react";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import History from "@/components/about-page/History";
import About from "@/components/landing-page/about/About";
import Achievements from "@/components/achievements-carousal/Achievements";
import IntakeCapacity from "@/components/intake-capacity/IntakeCapacity";

const page = () => {
  return (
    <div className=" overflow-x-hidden mt-80 bg-white">
      {/* <About />
      <History />
      <Clubs /> */}
      {/* <Courses /> */}
      <IntakeCapacity />
    </div>
  );
};

export default page;
