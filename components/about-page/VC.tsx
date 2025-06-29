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
    <div className="flex flex-row bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden h-[450px]">
      {/* Left: Image Section */}
      <div className="w-1/2">
        <Image
          src={aboutVC}
          alt="Dr. Rakesh Singhai"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        <h2
          className={`${playfair.className} text-xl font-semibold text-black mb-4`}
        >
          Dr. Rakesh Singhai
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed">{aboutVCText}</p>
      </div>
    </div>
  );
};

export default VC;
