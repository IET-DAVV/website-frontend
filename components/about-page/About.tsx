import { aboutIET } from "@/constants/about-page/about";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-screen  bg-white text-black ">
        <div className="h-[70vh] w-full flex justify-center relative">
          <div className="w-[80vh] h-[80vw] py-14 left-24 absolute">
            <Image src="/aboutietimg.png" width={1500} height={20} alt="" />
          </div>
          <div className="flex flex-row items-center  mt-36 px-28 overflow-hidden w-[90%] h-3/4 border-[#3B799E] border-4">
            <div className="flex flex-col pl-8 ml-56">
              <h1 className="text-5xl pb-10 ">About-IET</h1>
              <p className=" break-words">{aboutIET}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
