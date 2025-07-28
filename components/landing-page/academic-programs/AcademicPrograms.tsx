"use client";

import { bachelor } from "@/constants/landing/bachelor";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import "@/styles/fonts.css";
import { academicPrograms } from "@/constants/landing/academicPrograms";
import { ChevronRight } from "lucide-react";

const AcademicPrograms = () => {
  const [preview, setPreview] = useState<Object[]>(bachelor);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scrollStep = () => {
      if (!scrollContainer || isHovering) {
        animationFrameId = requestAnimationFrame(scrollStep);
        return;
      }

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0; // Reset to beginning
      } else {
        scrollContainer.scrollLeft += 1;
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, preview]);

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-start justify-start space-y-6 sm:space-y-10">
      <h1 className="text-black text-4xl sm:text-6xl px-1 sm:px-2 font-newyork">
        ACADEMIC PROGRAMS
      </h1>

      <div className="flex flex-wrap gap-4 sm:gap-10 text-black font-light items-center font-serif text-base sm:text-lg">
        {academicPrograms?.map((value, id) => (
          <button
            key={id}
            className={`hover:underline font-sans flex items-center gap-1 hover:font-semibold transition-all duration-200 ${
              preview === value.link
                ? "font-semibold underline"
                : "text-black"
            }`}
            onClick={() => setPreview(value.link)}
          >
            {value.name}
            <ChevronRight size={18} strokeWidth={2} className="inline-block" />
          </button>
        ))}
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex gap-6 pb-4 w-full overflow-x-auto scroll-smooth no-scrollbar cursor-grab"
      >
        {preview.map((item: any, index: number) => (
          <div key={`${item.id}-${index}`} className="flex-shrink-0 w-80">
            <Link href={item.link}>
              <Card branch={item.branch} type={item.type} link={item.link} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPrograms;
