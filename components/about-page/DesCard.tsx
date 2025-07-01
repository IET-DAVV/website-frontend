"use client";
import React, { useState } from "react";
interface Cardprop {
  id: string;
  description: string;
}
const DesCard = ({ id, description }: Cardprop) => {
  return (
    <div className="px-4 py-4 font-serif ">
      <h1 className="text-dark-blue text-4xl font-bold font-mono  ">{id}</h1>
      <p className="text-light-gray text-xs border-t-2 border-x-light-gray font-sans py-4 ">
        {description}
      </p>
    </div>
  );
};
export default DesCard;
