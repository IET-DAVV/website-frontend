"use client";

import React, { useState } from "react";
import { LOGO } from "@/constants/header/data";
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
  const isInfra = pathname === "/infrastructure"

  return (
    <header
      className={`w-full px-6 py-2 ${
        isHome || isInfra ? "bg-[#f8f8f8B3]" : "bg-[#3B7A9E] text-white"
      }`}

    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
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

        {/* Hamburger (Mobile Only) */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row justify-center items-center space-x-10 relative">

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
                  } shadow-md border border-gray-200 rounded-b-md z-50`}
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
                        className={`block px-2 py-2 text-black text-sm hover:bg-gray-100 rounded`}
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

      {/* Mobile Nav */}
      {menuOpen && (
        <ul
          className={`md:hidden mt-4 flex flex-col space-y-2 transition-all duration-300 ${
            isHome ? "bg-[#f8f8f8B3] text-black" : "bg-[#3B7A9E] text-white"
          } p-4 rounded shadow-md z-50`}
        >
          {links.map((link, idx) => (
            <li key={link.name} className="relative">
              <button
                className={`w-full text-left text-sm py-2 border-b border-gray-300 flex justify-between items-center ${
                  isHome ? "hover:text-black" : "hover:text-white"
                }`}
                onClick={() => {
                  setOpenDropdown(openDropdown === idx ? null : idx);
                }}
              >
                {link.name}
                {link.dropdown && (
                  <span className="text-sm">
                    {openDropdown === idx ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {link.dropdown && openDropdown === idx && (
                <ul className="ml-2 mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-sm py-1 pl-4  hover:underline"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMenuOpen(false);
                        }}
                      >
                        {item.name}
                        <hr className="border-gray-300" />
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
