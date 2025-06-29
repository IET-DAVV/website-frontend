"use client";

import React, { useState } from "react";
import { LOGO } from "@/constants/header/data"; // ✅ Keep this import
import { HeaderLinksType } from "@/typings.d"; // ✅ Type for the prop
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  links: HeaderLinksType; // ✅ Expect a `links` prop
}

let hoverTimeout: NodeJS.Timeout;

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`flex flex-row justify-between items-center px-6 py-2 ${
        isHome ? "bg-[#f8f8f8B3]" : "bg-[#3B7A9E] text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex flex-row items-center space-x-2">
        <Image
          src={"/logo.svg"}
          className="w-12 h-12"
          alt="logo"
          width={1000}
          height={1000}
        />
        <p className={`${manrope.className} text-sm w-44 font-bold`}>{LOGO}</p>
      </div>

      {/* Links */}
      <ul className="flex flex-row justify-center items-center space-x-10 relative">
        {links.map((link, idx) => (
          <li key={link.name} className="relative">
            <Link
              href={link.href}
              className={`text-sm bg-transparent hover:border-b-2 ${
                isHome ? "border-black" : "border-white/80"
              }`}
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
                className={`absolute left-0 mt-5 p-2 w-[200px] ${
                  isHome ? "bg-[#f8f8f8B3]" : "text-black bg-white"
                } shadow-md border border-gray-200 rounded-b-md z-50 w-[120px]`}
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
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-2 py-4 text-black text-sm bg-transparent hover:text-black ${
                        isHome ? "bg-[#f8f8f8B3]" : "bg-white"
                      } hover:bg-white hover:backdrop-blur-sm rounded-b-md`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
