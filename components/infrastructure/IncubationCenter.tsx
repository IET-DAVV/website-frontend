"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function IncubationCentre() {
  // Sabhi refs ko unke correct element type ke saath declare kiya hai
  const sectionRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textWrapper = titleRef.current;
            if (textWrapper && textWrapper.textContent) {
              
              textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
              );

              const tl = anime.timeline({
                easing: "easeOutExpo",
                duration: 1200,
              });

              tl.add({
                targets: topLineRef.current,
                scaleX: [0, 1],
                duration: 800,
              })
              .add(
                {
                  targets: textWrapper.querySelectorAll(".letter"),
                  translateY: [40, 0],
                  opacity: [0, 1],
                  duration: 1000,
                  delay: anime.stagger(30),
                },
                "-=600"
              )
              .add(
                {
                  targets: [p1Ref.current, p2Ref.current],
                  translateY: [20, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: anime.stagger(150),
                },
                "-=800"
              )
              .add({ targets: imageRef.current, scale: [0.8, 1], opacity: [0, 1], duration: 1000, }, "-=1000")
              .add({ targets: buttonRef.current, translateY: [20, 0], opacity: [0, 1], duration: 800, }, "-=800")
              .add({ targets: bottomLineRef.current, scaleX: [0, 1], duration: 800, }, "-=1000");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#CCCCCC80] backdrop-blur-md py-16 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={topLineRef} className="border-t border-black mb-12"></div>
        
        <h1
          ref={titleRef}
          className="text-center text-[80px] font-newyork leading-[120px] font-manrope text-black mb-12"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          INCUBATION CENTER
        </h1>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1 text-black text-base leading-relaxed space-y-6 max-w-2xl">
            {/* YAHAN TEXT ADD KAR DIYA GAYA HAI */}
            <p ref={p1Ref}>
              Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a
              Section 8 company designed to foster a vibrant ecosystem of
              technology incubation and entrepreneurship. By aligning with
              national priorities, DAVV-IC aims to generate employment, create
              wealth, and build successful businesses. The center provides a
              nurturing environment for emerging startups, particularly those
              originating from academia, to help them transition from innovative
              ideas to scalable, sustainable businesses. DAVV-IC is registered
              under CIN No. U80901MP2022NPL063927 and has obtained 12A & 80G
              certificates for tax exemptions and CSR registration.
            </p>
            <p ref={p2Ref}>
              The DAVV Incubation Forum aims to connect budding entrepreneurs,
              startups, and mentors by providing resources, networking
              opportunities, and a platform to showcase innovative ideas.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div ref={imageRef}>
              <Image
                src="/infrastructure/incubation/incubation aerial.jpg"
                alt="DAVV Incubation Centre Building"
                width={745}
                height={371}
                className="rounded-lg shadow-md"
                priority
              />
            </div>
            <div ref={buttonRef}>
              <Link href="https://davvincubationcentre.com/" target="_blank" rel="noopener noreferrer">
                <button className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#007bb3] transition">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div ref={bottomLineRef} className="border-t border-black mt-12"></div>
      </div>
      
      <style jsx global>{`
        .letter {
          display: inline-block;
          line-height: 1em;
        }
      `}</style>
    </div>
  );
}