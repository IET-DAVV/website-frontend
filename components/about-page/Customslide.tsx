"use client";
import React from "react";
import { Manrope } from "next/font/google";
import { Achievement } from "grommet-icons";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
interface Slideprops {
  id: string;
  //  icon: JSX.Element | string;
  heading: string;
  paragraph: string;
}
const Customslide = ({ id, heading, paragraph }: Slideprops) => {
  return (
    <div className=" border border-light-gray hover:border-2 hover:border-dark-blue hover:text-dark-blue rounded-2xl mx-16 my-6 py-2 space-x-2 space-y-2">
      <div className="flex justify-center my-3">
        {" "}
        <Achievement size="large" />
      </div>
      <h2 className={`text-center ${manrope.className}`}>{heading}</h2>
      <p className={`text-xs text-start ${manrope.className} pl-3`}>
        {paragraph}
      </p>
    </div>
  );
};
export default Customslide;
