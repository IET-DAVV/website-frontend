import React from 'react';
import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Director() {
  return (
    <div className="grid grid-cols-7 h-screen w-sceen bg-[#F25853] m-16"> 
        <div className="flex justify-end col-span-3">
          <div className="flex flex-col w-2/3 bg-black left-0 bg-opacity-25 space-y-10 px-8 py-12">
          <h1 className={`${playfair.className} text-3xl font-light uppercase `}>
              Dr. Sanjiv Tokekar
          </h1>
          <p className="break-words text-sm leading-relaxed font-extralight."> {aboutDirectorText}  </p>
          
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
  )
}

export default Director