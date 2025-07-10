"use client";
import React from "react";
import "@/styles/fonts.css";

const Header = ({ clubDescription }: { clubDescription: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center text-black justify-between gap-6 p-4 bg-gray-50">
      <h1
        className={`uppercase text-4xl sm:text-5xl md:text-6xl font-serif leading-none tracking-tight text-gray-900 font-newyork`}
      >
        IET <br className="hidden md:block" />
        Clubs
      </h1>
      <div className="text-left text-gray-700 w-full md:w-3/4">
        <p className="text-base sm:text-lg">{clubDescription}</p>
      </div>
    </div>
  );
};

export default Header;
