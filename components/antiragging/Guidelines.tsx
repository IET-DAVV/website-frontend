import React from "react";
import { antiRaggingGuidelines } from "@/constants/antiragging/data";

const Guidelines = () => {
  return (
    <div className="">
      <div className="space-y-4 mx-40 text-justify p-4">
        <h2 className="w-[50%] mx-auto my-10 text-2xl font-bold text-center text-[#06779B]">{antiRaggingGuidelines.title}</h2>

        {/* Render paragraphs */}
        {antiRaggingGuidelines.content.map((para, index) => (
          <p key={index} className="text-sm leading-relaxed">{para}</p>
        ))}
        <div><span className="text-[#1D1D1D] font-bold">{antiRaggingGuidelines.subContent1.heading}</span><span>{antiRaggingGuidelines.subContent1.content}</span></div>

        {/* Render punishments */}
        <h3 className="text-lg font-semibold mt-6">Punishment in the event of ragging:</h3>
        <div>{antiRaggingGuidelines.punishments.content}</div>
        <ul className="pl-6 ">
          {antiRaggingGuidelines.punishments.subContent.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div>{antiRaggingGuidelines.punishments.ending}</div>
      </div>
      <div className=" mb-16 mt-20 font-manrope ">
          <div className="border divide-y divide-[#959595] max-w-5xl w-[50%] mx-auto border-[#959595] ">
            {antiRaggingGuidelines.links.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between px-10 py-5 relative after:absolute after:w-[1px] after:bg-[#959595] after:top-0 after:right-[50%] after:h-full"
              >
                <span className="text-lg font-bold text-[#06779B]">
                  {item.label}
                </span>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06779B] text-white px-10 py-2 rounded-[6px] inline-flex items-center gap-1 text-sm"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Guidelines;
