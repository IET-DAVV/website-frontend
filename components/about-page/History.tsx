"use client";
import React from "react";
import { history, timeline } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import Image from "next/image";

const History = () => {
  return (
    <div>
      <div className="flex flex-col space-y-12 md:space-y-20 h-full px-6 py-16 md:p-20 w-full bg-[#3B799E]">
        {/* Heading */}
        <div className="text-center text-3xl md:text-5xl font-light">
          <h1 className="font-newyork text-white font-extralight">
            IET HISTORY
          </h1>
        </div>

        {/* History Items + Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mx-2 md:mx-20">
          {history.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-white font-light text-sm md:text-base">
                {item.title}
              </h1>
            </div>
          ))}

          {/* Timeline Image */}
          <div className="col-span-1 md:col-span-4 mx-auto md:px-20">
            <Image
              src={timeline}
              alt="history"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
