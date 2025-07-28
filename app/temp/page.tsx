import React from "react";
import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import Navbar from "@/containers/navbar/Navbar";
import { Playfair_Display } from "next/font/google";
import Director from "@/components/about-page/Director";
import VC from "@/components/about-page/VC";
import Mission from "@/components/about-page/Mission";
import Vision from "@/components/about-page/Vision";
import Landmarks from "@/components/about-page/Landmarks";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <>
      <Navbar />
      <About />
      <History />
      <Landmarks />
      <Vision />
      <Mission />
      <Director />
      <VC />
    </>
  );
};

export default page;
