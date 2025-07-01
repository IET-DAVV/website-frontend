<<<<<<< HEAD
"use client";
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> origin/main
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
    <div className="bg-white flex flex-col items-center justify-center space-y-10 text-center py-20">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2
          className={`text-5xl font-serif text-black ${playfairDisplay.className}`}
        >
          RECRUITERS
        </h2>
        <p className={`text-sm text-black`}>
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
