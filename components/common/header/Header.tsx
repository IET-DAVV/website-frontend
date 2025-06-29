"use client ";
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
        <ul className="flex flex-row justify-center items-center space-x-10 relative ">
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
                  className="absolute left-0 mt-2 w-60 bg-white/30 backdrop-blur-md shadow-md border border-gray-200 rounded z-50 w-[120px]"
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
                  {link.dropdown.map((item, itemIdx) => (
                    <React.Fragment key={item.name}>
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-2 py-1 text-xs hover:bg-white/50 hover:backdrop-blur-sm rounded-md"
                          onClick={() => setOpenDropdown(null)} // optional
                        >
                          {item.name}
                        </Link>
                      </li>

                      {itemIdx < (link.dropdown?.length ?? 0) - 1 && (
                        <hr className="border-t border-gray-200 mx-2 my-1" />
                      )}
                    </React.Fragment>
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
