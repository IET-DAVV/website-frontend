import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { companies } from "@/public/landing/companies";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Recruiters = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center space-y-10 text-center py-20">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2
          className={`text-5xl font-serif text-white font-semibold ${playfairDisplay.className}`}
        >
          RECRUITERS
        </h2>
        <p className={`text-sm text-white`}>
          MORE THAN 30 COMPANIES VISIT IET-DAVV EVERY YEAR
        </p>
      </div>
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company}
            alt={`company number ${index}`}
            className="mx-10 w-20 h-auto"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Recruiters;
