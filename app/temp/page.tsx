import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import Navbar from "@/containers/navbar/Navbar";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Director from "@/components/about-page/Director";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <>
      <div className=" overflow-x-hidden bg-white">
        <Navbar />
        <About />
        <History />
        <Director />
        <div className="h-screen w-screen m-16 overflow-x-hidden relative">
          <Image
            src={aboutVC}
            width={400}
            height={875}
            alt=""
            className="h-full w-full object-cover overflow-hidden absolute"
          />

          <div className="flex flex-col h-full w-1/4 bg-black bg-opacity-25 right-24 space-y-10 px-8 py-12 absolute">
            <h1
              className={`${playfair.className} text-3xl font-light uppercase`}
            >
              Dr. Renu Jain
            </h1>
            <p className="break-words text-sm leading-relaxed font-extralight.">
              {aboutVCText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
