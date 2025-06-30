"use client";
import React, { useState } from "react";
import "@/styles/fonts.css";

const Header = ({ clubDescription }: { clubDescription: string }) => {
  return (
    <div className="flex items-center text-black justify-between p-4 bg-gray-50">
      <h1
        className={`uppercase text-6xl font-serif leading-none tracking-tight text-gray-900 font-newyork`}
      >
        IET <br />
        Clubs
      </h1>
      <div className="flex text-left justify-end items-center text-gray-700 w-3/4">
        <p className="text-lg">{clubDescription}</p>
      </div>
    </div>
  );
};

export default Header;
