import { aboutVC, aboutVCText } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const VC = () => {
  return (
    <>
      <div className="relative rounded-lg">
        <Image
          src={aboutVC}
          width={400}
          height={875}
          alt=""
          className="h-full w-full object-cover overflow-hidden "
        />
        <div className="flex flex-col h-full w-1/4 bg-black bg-opacity-50 right-24 space-y-10 px-8 py-12 absolute top-0">
          <h1
            className={`${playfair.className} text-3xl font-light uppercase text-white`}
          >
            Dr. Renu Jain
          </h1>
          <p className="break-words text-sm leading-relaxed font-light text-white">
            {aboutVCText}
          </p>
        </div>
      </div>
    </>
  );
};

export default VC;
