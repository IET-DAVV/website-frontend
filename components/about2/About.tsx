import { aboutIET, aboutImage } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const About = () => {
  return (
    <div className="h-full w-[90%] mx-auto bg-white flex justify-center border-[#3B799E] border-4 my-24">
      <div className="grid grid-cols-2 justify-center items-center w-full place-items-center">
        <div className="relative inset-0 w-full h-full flex justify-center items-center">
          <Image
            src={aboutImage}
            width={1000}
            height={1000}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[150%]"
          />
        </div>
        <div className="flex flex-row items-center overflow-hidden text-black p-14">
          <div className="flex flex-col space-y-10">
            <h1
              className={`${playfair.className} text-6xl font-extralight uppercase`}
            >
              About-IET
            </h1>
            <p className=" break-words text-black">{aboutIET}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
