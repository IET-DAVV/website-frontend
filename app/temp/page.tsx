<<<<<<< HEAD
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Courses from "@/components/courses/Courses";

=======
import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
>>>>>>> b723d658d8dd18bccb5e1f268ec3413b751e38dc
import React from "react";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";
import Clubs from "@/components/landing-page/clubs/Clubs";
import History from "@/components/about-page/History";
import About from "@/components/landing-page/about/About";
import Achievements from "@/components/achievements-carousal/Achievements";
import IntakeCapacity from "@/components/intakeCapacity/IntakeCapacity";

const page = () => {
  return (
<<<<<<< HEAD
    <div className=" overflow-x-hidden mt-80 bg-white">
      {/* <About />
      <History />
      <Clubs /> */}
      {/* <Courses /> */}
      <IntakeCapacity />
=======

    <div className=" overflow-x-hidden bg-white">
      <Navbar />
      <About />
      <Recruiters />
      <Chart />
      <History />
      <Clubs />
      <Events />
>>>>>>> b723d658d8dd18bccb5e1f268ec3413b751e38dc
    </div>
  );
};

export default page;
