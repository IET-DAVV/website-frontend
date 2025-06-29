import { aboutDirector, aboutDirectorText } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const DirectorVrinda = () => {
  return (
    <div className="flex flex-row bg-[#F5F5F5] rounded-md border border-gray-300 overflow-hidden h-[450px]">
      {/* Left: Text Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        <hr className="border-t border-gray-400 mt-11 mb-2" />
        <h2
          className={`${playfair.className} font-newyork text-sm md:text-5xl font-light justify-right flex items-right mb-3`}
        >
          Dr. Vrinda Tokekar
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed">
          Dr. Vrinda Tokekar, Director of the Institute of Engineering &
          Technology (IET), DAVV, Indore, is an accomplished academician and
          researcher with a Ph.D. in Computer Engineering. With over 68
          publications and 3,600+ reads, her expertise spans wireless networks,
          cybersecurity, and software engineering. Prior to her directorship,
          she served as Head of the IT Department, leading strategic academic
          and technological advancements. As Patron of PHENMA 2024, she
          showcased exceptional leadership in international academic
          collaboration. Dr. Tokekar actively promotes student-centric learning,
          mentorship, and faculty-led innovation. Her vision continues to
          elevate IET DAVV’s infrastructure, research profile, and global
          academic presence.
          <hr className="border-t border-gray-400 mt-11 mb-2" />
        </p>
      </div>

      {/* Right: Image Section */}
      <div className="w-1/2">
        <Image
          src={aboutDirector}
          alt="Dr. Vrinda Tokekar"
          width={1200}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DirectorVrinda;
