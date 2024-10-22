import {
  visionIET,
  visionDavvText,
  visionIetText,
  visionDAVV,
} from "@/constants/about-page/about";
import { px } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Vision = () => {
  return (
    <div className="mx-14 my-20">
      <div className="flex justify-end">
        <div>
          <h1
            className={`${playfair.className} text-black text-4xl mt-10 px-16 `}
          >
            VISION-IET
          </h1>
        </div>
        <div className="relative text-center">
          <div className="relative  ">
            <Image
              src={visionIET}
              alt="Vision IET"
              width={800}
              height={180}
              className="h-28"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-50"></div>
          </div>

          <div className="w-full absolute top-0 left-0 text-center mt-10">
            <p className="text-white text-xs  text-start px-12 leading-relaxed">
              {visionIetText}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="relative text-center">
          <div className="relative ">
            <Image
              src={visionDAVV}
              alt="Vision DAVV"
              width={800}
              height={800}
              className="h-28"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-50"></div>
          </div>

          <div className="w-full absolute top-0 left-0 text-center mt-10">
            <p className="text-white text-xs  text-start px-12 leading-relaxed">
              {visionDavvText}
            </p>
          </div>
        </div>
        <div>
          <h1
            className={`${playfair.className} text-black text-4xl mt-10 px-16 `}
          >
            VISION-DAVV
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Vision;
