"use client";
import React, { useState } from "react";
import {
  missions,
  missionDavv,
  missionIet,
} from "@/constants/about-page/mission";
import {
  visionIETabout,
  visionDAVVabout,
  missionIETabout,
  missionDAVVabout,
} from "@/constants/missionvision/data";
import DesCard from "./DesCard";

const Mission = () => {
  const [preview, setPreview] = useState<Object[]>(missionIet);
  const [activeTab, setActiveTab] = useState<"IET" | "DAVV">("IET");

  const mission: string[] = activeTab === "IET" ? missionIETabout : missionDAVVabout;
  const vision: string[] = activeTab === "IET" ? visionIETabout : visionDAVVabout;

  return (
    <>
      {/* Tabs for mission cards */}
      <div className="my-20 mx-16">
        <div className="relative flex justify-center gap-40 mb-8">
          <div className="absolute bottom-0 w-full flex justify-center">
            <div className="w-[calc(100%-4rem)] h-[1px] bg-gray-300" />
          </div>
          {missions.map((value, id) => {
            const isActive = preview === value.link;
            return (
            <button
              key={id}
              onClick={() => setPreview(value.link)}
              className={`relative text-2xl transition-all duration-300 pb-2 ${
                isActive ? "text-[#3B799E] font-semibold" : "text-gray-400 font-normal"
              }`}
            >
              {value.name}
              <span
          className={`absolute left-0 bottom-0 h-[3px] transition-all duration-300 ${
            isActive ? "w-full bg-[#3B799E]" : "w-full bg-gray-300 h-[1.5px]"
          }`}
        ></span>
            </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 my-4">
          {preview?.map((item: any) => (
            <DesCard key={item.id} id={item.id} description={item.description} />
          ))}
        </div>
      </div>

    </>
  );
};

export default Mission;
