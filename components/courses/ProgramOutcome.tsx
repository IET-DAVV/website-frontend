import { Manrope, Playfair } from "next/font/google";
import React from "react";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ProgramOutcome = () => {
  const outcomes = [
    "To be a leading human resource development centre for generating, advancing and disseminating knowledge, serve and build value to the society and industry through research, entrepreneurship and outreach activities.",
    "To develop competent professionals with ethical values and leadership qualities to meet the challenges of the industry and society.",
    "To promote research and innovation for sustainable development and societal welfare.",
    "To foster collaboration with industry and academia for mutual growth and development.",
    "To encourage lifelong learning and professional development among students and faculty.",
    "To contribute to the advancement of knowledge through quality education and research.",
  ];

  return (
    <>
      <h1 className={`${playfair.className} text-6xl text-center py-10`}>
        Program outcomes
      </h1>
      <div
        className={`${manrope.className} grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-12 mb-16`}
      >
        {outcomes.map((outcome, index) => (
          <div key={index} className="px-6">
            <h2
              className={`${manrope.className} text-4xl py-4 text-primary-blue font-semibold`}
            >
              {`0${index + 1}`}
            </h2>
            <div className="h-px w-full bg-gray-300"></div>
            <p className={`${manrope.className} text-base py-4 text-gray-600`}>
              {outcome}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgramOutcome;
