import React, { useState, useRef } from "react";
import { LOGO, headerLinks } from "@/constants/header/data";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
let hoverTimeout: NodeJS.Timeout;

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
  <div>
    <div className="flex flex-row justify-between items-center px-6 py-2 bg-transparent text-black">
      <div className="flex flex-row justify-center items-center space-x-2">
        <Image
          src={"/logo.svg"}
          className="w-12 h-12"
          alt="logo"
          width={1000}
          height={1000}
        />
        <p className={`${manrope.className} text-sm w-44 font-bold`}>
          {LOGO}
        </p>
      </div>

      {/* ✅ Final working navbar with dropdown */}
      <ul className="flex flex-row justify-center items-center space-x-5 relative">
        {headerLinks.map((link, idx) => (
          <li key={link.name} className="relative">
            <Link
              href={link.href}
              className="text-sm hover:border-b-2 border-black"
              onMouseEnter={() => {
                clearTimeout(hoverTimeout);
                setOpenDropdown(idx);
              }}
              onMouseLeave={() => {
                hoverTimeout = setTimeout(() => {
                  setOpenDropdown(null);
                }, 200);
              }}
            >
              {link.name}
            </Link>

            {link.dropdown && openDropdown === idx && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded z-50"
                onMouseEnter={() => {
                  clearTimeout(hoverTimeout);
                  setOpenDropdown(idx);
                }}
                onMouseLeave={() => {
                  hoverTimeout = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 200);
                }}
              >
                {link.dropdown.map((item) => (
                  <li key={item.name} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

        ))}
      </ul>
    </div>
  </div>
);

};

export default Header;
