"use client";
import React, { useState, useEffect } from "react";

interface ProgramCardProps {
  name: string;
  active: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ name, active }) => {
  return (
    <div
      className={`rounded-md p-4 text-center cursor-pointer transition-colors duration-200 border
        ${active ? "bg-[#06779B] text-white" : "bg-white text-black hover:bg-[#06779B] hover:text-white"}
      `}
    >
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default ProgramCard;
