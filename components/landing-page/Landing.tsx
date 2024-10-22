"use client";
import { landingImages } from "@/constants/landing/landingImages";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Landing = () => {
  return (
    <div className="w-full h-full relative -z-10">
      <div className="relative w-full h-screen">
        {landingImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ease-in-out"
            width={1920}
            height={1080}
            alt={`Landing image ${index + 1}`}
            priority={index === 0}
            style={{
              opacity: 0,
              animation: `fadeInOut 20s infinite ${index * 3}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          33%,
          100% {
            opacity: 0;
          }
          11%,
          22% {
            opacity: 1;
          }
        }
      `}</style>
      <div className="bg-transparent absolute bottom-0 left-0 p-10 w-full h-full flex items-start justify-end text-start space-y-5 flex-col">
        <h1 className={`text-white text-5xl font-bold ${playfair.className}`}>
          Institute of Engineering and Technology
        </h1>
        <h1 className={`text-white text-5xl font-bold ${playfair.className}`}>
          Devi Ahilya Vishwavidhyalaya
        </h1>
      </div>
    </div>
  );
};

export default Landing;
