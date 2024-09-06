import React from "react";
import Image from "next/image";
import zs from "@/public/images/zs.png";
import barclays from "@/public/images/barclays.png";
import capillary from "@/public/images/capillary.png";
import cognizant from "@/public/images/cognizant.png";
import lg from "@/public/images/lg.png";
import LTI from "@/public/images/LTI.png";
import quantiphi from "@/public/images/quantiphi.png";
import Marquee from "react-fast-marquee";

const Recruiters = () => {
  return (
    <div className="bg-[#f8f1e9] py-10 text-center">
      <h2 className="text-3xl font-serif text-black">RECRUITERS</h2>
      <p className="text-sm text-gray-600 mt-2">
        MORE THAN 30 COMPANIES VISIT IET-DAVV EVERY YEAR
      </p>

      <Marquee className="mt-8" speed={50} gradient={false}>
        <Image
          src={LTI}
          alt="LTI"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={zs}
          alt="ZS"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={barclays}
          alt="Barclays"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={capillary}
          alt="Capillary"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={lg}
          alt="LG"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={quantiphi}
          alt="Quantiphi"
          className="mx-10 w-20 h-auto"
        />
        <Image
          src={cognizant}
          alt="Cognizant"
          className="mx-10 w-20 h-auto"
        />
      </Marquee>
    </div>
  );
};

export default Recruiters;
