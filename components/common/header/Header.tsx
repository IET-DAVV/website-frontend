"use client";

import React, { useState } from "react";
import { LOGO, LOGO_SUBTITLE } from "@/constants/header/data";
import { HeaderLinksType } from "@/typings.d";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

interface HeaderProps {
  links: HeaderLinksType;
}

let hoverTimeout: NodeJS.Timeout;

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${
      isHome ? 'absolute' : 'relative' 
    } z-[30] w-full px-6 py-2 md:py-1 ${
      isHome ? "bg-[#f8f8f8B3]" : "bg-[#3B7A9E] text-white"
    }`}>
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <Image
            src="/logo.svg"
            className="w-16 h-16 md:w-20 md:h-20"
            alt="logo"
            width={80}
            height={80}
          />
          <div className={`${manrope.className} leading-tight`}>
            <p className="text-sm font-bold md:text-lg md:font-extrabold whitespace-nowrap">{LOGO}</p>
            <p className="text-xs md:text-sm font-semibold text-black/80">{LOGO_SUBTITLE}</p>
          </div>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row justify-center items-center ">
          {links.map((link, idx) => (
            <li
              key={link.name}
              className={`relative flex items-center ${
                idx > 0 ? "before:content-['|'] before:mx-1" : ""
              } ${
                isHome
                  ? "before:text-black/50"
                  : "before:text-white/50"
              }`}
            >
              <div className="relative">
              {link.dropdown ? (
                <button
                  className={`text-xs md:text-sm hover:border-b-2 flex items-center  ${
                    isHome ? "border-black" : "border-white/80"
                  }`}
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeout);
                    setOpenDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    hoverTimeout = setTimeout(() => setOpenDropdown(null), 200);
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {link.name}
                  <span className="text-xs">
                    {openDropdown === idx ? "▲" : "▼"}
                  </span>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`block max-w-36 truncate text-xs md:text-sm py-2 transition-colors duration-200 ${
                    isHome ? "hover:text-black text-black" : "hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown */}
              {link.dropdown && openDropdown === idx && (
                <ul
                  className={`absolute left-0 mt-7 p-2 w-[200px] ${
                    isHome ? " bg-[#f8f8f8]" : "text-black bg-white"
                  } shadow-md border border-gray-200 rounded-b-md z-50`}
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeout);
                    setOpenDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    hoverTimeout = setTimeout(() => setOpenDropdown(null), 200);
                  }}
                >
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-xs md:text-sm rounded hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul
          className={`md:hidden mt-4 flex flex-col space-y-2 transition-all duration-300 ${
            isHome ? "bg-[#f8f8f8] text-black" : "bg-[#3B7A9E] text-white"
          } p-4 rounded shadow-md z-50`}
        >
          {links.map((link, idx) => (
            <li key={link.name} className="relative">
              {link.dropdown ? (
                <button
                  className="w-full flex justify-between items-center text-sm py-2 border-b border-gray-300"
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                >
                  {link.name}
                  <span>{openDropdown === idx ? "▲" : "▼"}</span>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="block text-sm py-2 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && openDropdown === idx && (
                <ul className="ml-2 mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-sm py-1 pl-4 hover:underline"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMenuOpen(false);
                        }}
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
      )}
    </header>
  );
};

export default Header;
