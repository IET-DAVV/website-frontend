import React from "react";
import { antiRaggingGuidelines } from "@/constants/antiragging/data";

const Guidelines = () => {
  return (
    <div className="">
      <div className="space-y-4 mx-40 text-justify p-4">
        <h2 className="text-xl font-bold mb-4">{antiRaggingGuidelines.title}</h2>

        {/* Render paragraphs */}
        {antiRaggingGuidelines.content.map((para, index) => (
          <p key={index} className="text-sm leading-relaxed">{para}</p>
        ))}

        {/* Render punishments */}
        <h3 className="text-lg font-semibold mt-6">Punishment in the event of ragging:</h3>
        <ul className="pl-6 text-sm">
          {antiRaggingGuidelines.punishments.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Render links */}
        <h3 className="text-lg font-semibold mt-6">Downloads & Links:</h3>
        <ul className="list-disc pl-6 text-sm">
          {antiRaggingGuidelines.links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Guidelines;
