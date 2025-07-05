"use client";
import React, { useState } from "react";
import { missions, missionIet, missionDavv } from "@/constants/about-page/mission";

import DesCard from "./DesCard";

const Mission = () => {
  const [preview, setPreview] = useState<Object[]>(missionIet);
  const [activeTab, setActiveTab] = useState<"IET" | "DAVV">("IET");

  return (
    <div className="my-20 mx-4 sm:mx-8 md:mx-16">
      {/* Tabs */}
      <div className="relative flex justify-center items-center gap-12 sm:gap-20 md:gap-40 mb-8">
        {/* Light gray baseline line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18rem] h-[1px] bg-gray-300 z-0" />
        {missions.map((value, id) => {
          const isActive = preview === value.link;
          return (
            <button
              key={id}
              onClick={() => {
                setPreview(value.link);
                setActiveTab(value.name === "MISSION–IET" ? "IET" : "DAVV");
              }}
              className={`relative text-lg sm:text-xl md:text-2xl transition-all duration-300 pb-2 ${
                isActive
                  ? "text-[#3B799E] font-semibold"
                  : "text-gray-400 font-light"
              }`}
            >
              {value.name}
              <span
                className={`absolute left-0 bottom-0 transition-all duration-300 ${
                  isActive
                    ? "w-full h-[3px] bg-[#3B799E]"
                    : "w-full h-[1px] bg-gray-300"
                }`}
              ></span>
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
        {preview?.map((item: any) => (
          <DesCard key={item.id} id={item.id} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Mission;
