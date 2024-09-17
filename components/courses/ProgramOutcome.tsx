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
  return (
    <>
      <h1 className={`${playfair.className} text-6xl text-center py-10`}>
        Program outcomes
      </h1>
      <div
        className={`${manrope.className} grid grid-cols-3 text-base ml-12 mr-12 mb-16`}
      >
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            01
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            02
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            03
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            04
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            05
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${manrope.className} text-3xl py-4 text-light-blue font-semibold`}
          >
            06
          </h1>
          <div className="h-px w-auto bg-light-gray"></div>
          <p className={`${manrope.className} text-sm py-4 text-light-gray`}>
            To be a leading human resource development centre for generating,
            advancing and disseminating knowledge, serve and build value to the
            society and industry through research, entrepreneurship and outreach
            activities.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProgramOutcome;
