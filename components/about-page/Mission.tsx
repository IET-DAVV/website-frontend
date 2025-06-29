"use client";
import React from "react";
import {
  missions,
  missionDavv,
  missionIet,
} from "@/constants/about-page/mission";
import { useState } from "react";
import DesCard from "./DesCard";

const Mission = () => {
  const [preview, setPreview] = useState<Object[]>(missionIet);
  return (
    <div className="my-20 mx-16">
      <div className=" flex justify-center ">
        {missions &&
          missions.map((value, id) => (
            <button
              key={id}
              className={`hover:underline  border-b-light-gray text-2xl hover:font-semibold text-dark-blue px-6 ${
                preview === value.link
                  ? "font-semibold underline"
                  : "text-dark-blue"
              }`}
              onClick={() => setPreview(value.link)}
            >
              {value.name}
            </button>
          ))}
      </div>
      <div className="grid grid-cols-3  my-4">
        {preview?.map((item: any, index: number) => (
          <DesCard key={item.id} id={item.id} description={item.description} />
        ))}
      </div>
    </div>
  );
};
export default Mission;
