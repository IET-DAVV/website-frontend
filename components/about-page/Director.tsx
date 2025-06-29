import React from "react";
import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Director() {
  return (
    <div className="grid grid-cols-7 rounded-lg bg-[#F25853] ">
      <div className="flex justify-center col-span-3">
        <div className="flex flex-col w-2/3 bg-black left-0 bg-opacity-25 space-y-10 px-8 py-12">
          <h1
            className={`${playfair.className} text-3xl font-light uppercase text-white`}
          >
            Dr. Vrinda Tokekar
          </h1>
          <p className="break-words text-md leading-relaxed font-light text-white">
            {aboutDirectorText}
          </p>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          src={aboutDirector}
          width={800}
          height={800}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Director;
