"use client";
import React from "react";
import Image from "next/image";
import visionIET from "@/public/vision_iet.png";
import visionDAVV from "@/public/vision_davv.png";
import "@/styles/fonts.css"; // font-newyork defined here

const VisionSection = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto my-20 space-y-16">
      {/* VISION–IET Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Heading */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="font-newyork text-xl sm:text-3xl md:text-5xl font-light">
            VISION–IET
          </p>
        </div>

        {/* Right: Image with Overlay Text */}
        <div className="relative w-full md:w-[1158px] h-64 sm:h-[280px] md:h-[231px] border-2 border-[#3B799E] overflow-hidden">
          <Image
            src={visionIET}
            alt="Vision IET"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-12 md:px-20 text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium md:font-semibold leading-relaxed text-center"
            style={{
              backgroundColor: "rgba(59, 121, 158, 0.5)",
            }}
          >
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </div>
        </div>
      </div>

      {/* VISION–DAVV Row */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Image with Overlay Text */}
        {/* Right: Heading */}
        <div className="md:w-1/2 w-full text-center md:text-right">
          <p className="font-newyork text-xl sm:text-3xl md:text-5xl font-light">
            VISION–DAVV
          </p>
        </div>
        <div className="relative w-full md:w-[1158px] h-64 sm:h-[280px] md:h-[231px] border-2 border-[#3B799E] overflow-hidden">
          <Image
            src={visionDAVV}
            alt="Vision DAVV"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-12 md:px-20 text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium md:font-semibold leading-relaxed text-center"
            style={{
              backgroundColor: "rgba(59, 121, 158, 0.5)",
            }}
          >
            Emerge as a premier higher learning institution by creating,
            advancing and disseminating knowledge with collective wisdom,
            through value imbued holistic education for peaceful, sustainable
            and humane society.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
