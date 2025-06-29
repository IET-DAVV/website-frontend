// components/missionn-vision/mission-vision.tsx

"use client";
import React, { useEffect } from "react";

interface missionvisionSelectorProps {
  missionvisions: string[];
  selectedmissionvision: string;
  onSelect: (missionvision: string) => void;
}

const missionvisionSelector: React.FC<missionvisionSelectorProps> = ({
  missionvisions,
  selectedmissionvision,
  onSelect,
}) => (
  <div className="flex flex-col px-8 mb-14 mt-10">
    <h2 className="text-xl mb-8 font-semibold">Branch</h2>
    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-8"></div>
    <div className="grid grid-cols-3 gap-4 w-fit">
      {missionvisions.map((missionvision) => (
        <button
          key={missionvision}
          onClick={() => onSelect(missionvision)}
          className={`px-4 w-fit py-2 rounded border-2 font-semibold ${
            selectedmissionvision === missionvision
              ? "bg-[#06779B] text-white border-[#06779B] rounded-lg"
              : " text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B] rounded-lg"
          }`}
        >
          {missionvision}
        </button>
      ))}
    </div>
  </div>
);

export default missionvisionSelector;
