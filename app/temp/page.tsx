import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import Navbar from "@/containers/navbar/Navbar";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Director from "@/components/about-page/Director";
import VC from "@/components/about-page/VC";
import Mission from "@/components/about-page/Mission";
import Vision from "@/components/about-page/Vision";
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
      <Vision />
      <Mission />
      <Director />
      <VC />
    </>
  );
};

export default page;
