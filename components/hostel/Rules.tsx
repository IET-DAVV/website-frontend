"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Rules() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: "easeOutExpo",
              duration: 1000,
            });

            tl.add({
              targets: topLineRef.current,
              scaleX: [0, 1],
              duration: 800,
            })
              .add(
                {
                  targets: titleRef.current,
                  translateY: [40, 0],
                  opacity: [0, 1],
                  duration: 800,
                },
                "-=600"
              )
              .add(
                {
                  targets: textRef.current,
                  translateY: [20, 0],
                  opacity: [0, 1],
                  duration: 800,
                },
                "-=600"
              )
              .add(
                {
                  targets: imageRef.current,
                  scale: [0.8, 1],
                  opacity: [0, 1],
                  duration: 1000,
                },
                "-=800"
              )
              .add(
                {
                  targets: bottomLineRef.current,
                  scaleX: [0, 1],
                  duration: 800,
                },
                "-=800"
              );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#CCCCCC80] backdrop-blur-md py-16 px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={topLineRef} className="border-t border-black mb-12"></div>

        <h1
          ref={titleRef}
          className="text-center text-[60px] md:text-[80px] font-newyork leading-[110%] text-black mb-12"
        >
          Hostel Rules & Regulations
        </h1>

        {/* FLEX CONTAINER with equal height */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* LEFT TEXT SECTION */}
          <div
            ref={textRef}
            className="flex-1 text-black text-base leading-relaxed space-y-4 max-w-2xl"
          >
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a
                Section 8 company designed to foster a vibrant ecosystem of
                technology incubation and entrepreneurship. By aligning with
                national priorities, DAVV-IC aims to generate employment,
                create wealth, and build successful businesses. The center
                provides a nurturing environment for innovation.
              </li>
              <li>Attendance before 8:30 PM is mandatory for all hostel residents.</li>
              <li>
                Leave forms must be signed by the Warden and should include
                parent contact details and travel information.
              </li>
              <li>
                Visitors are permitted only during specified hours with prior
                approval.
              </li>
              <li>
                Rooms must be kept clean; waste should be disposed of in
                designated dustbins.
              </li>
              <li>
                Smoking, alcohol consumption, and ragging are strictly
                prohibited within hostel premises.
              </li>
              <li>
                Terrace access is restricted; balconies serve as allowed open
                spaces.
              </li>
              <li>
                The environment is designed to encourage emerging startups,
                particularly those from academia, helping them transition from
                innovative ideas to scalable, sustainable ventures.
              </li>
              <li>
                DAVV-IC is registered under CIN No. U80901MP2022NPL063927 and
                has obtained 12A & 80G certificates for tax exemptions and CSR
                registration.
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION — same height as text */}
          <div
            ref={imageRef}
            className="flex-1 flex items-center justify-center h-full"
          >
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <Image
                src="/infrastructure/hostel/hostel-rules.jpg"
                alt="Hostel Rules Board"
                fill
                className="rounded-lg shadow-md object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div ref={bottomLineRef} className="border-t border-black mt-12"></div>
      </div>
    </div>
  );
}
