"use client";
import React from "react";

interface Cardprop {
  id: string;
  description: string;
}

const DesCard = ({ id, description }: Cardprop) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 px-6 py-5 border border-gray-100 h-56 flex flex-col justify-between">
      <h1 className="text-dark-blue text-xl sm:text-2xl font-semibold font-mono">
        {id}
      </h1>
      <p className="text-light-gray text-sm sm:text-base font-sans leading-relaxed border-t pt-3 overflow-hidden text-ellipsis">
        {description}
      </p>
    </div>
  );
};

export default DesCard;
