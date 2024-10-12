import { Playfair_Display } from "next/font/google";
import React from "react";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const Header = ({ clubDescription }: { clubDescription: string }) => {
  return (
    <div className="flex items-center text-black justify-between p-4 bg-gray-50">
      <h1
        className={`uppercase text-6xl font-serif leading-none tracking-tight text-gray-900 ${playfair.className}`}
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
