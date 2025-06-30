"use client";
import React, { useState, useEffect } from "react";
import { admissionDownloads } from "@/constants/process";
import { Download } from "lucide-react";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";

const DownloadSection = () => {
  return (
    <div className="space-y-8">
      <Title
        title="PROCESS"
        className="text-7xl leading-tight font-newyork mb-0"
      />
      <Title
        title="(ADMISSION 2025-26)"
        className="text-4xl font-newyork leading-tight mb-10"
      />

      {admissionDownloads.map((section, index) => (
        <div key={index} className="space-y-4 mb-16">
          <h2
            className="text-xl text-black font-bold text-center  text-[#2F2F2F] mb-0"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />

          <div className="border rounded-md divide-y divide-gray-800 max-w-2xl w-full mx-auto shadow-sm border-gray-800 ">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center px-4 py-3"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077C2] text-white px-4 py-1 rounded inline-flex items-center gap-1 text-sm"
                >
                  Click Here <Download size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadSection;
