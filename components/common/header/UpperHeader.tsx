import { UPPER_HEADER_LINKS } from "@/constants/header/data";
import Link from "next/link";
import React from "react";
import { IoCall, IoMail, IoSearch } from "react-icons/io5";

const UpperHeader = () => {
  return (
    <div className="bg-black w-full px-4 py-2 text-white text-xs">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-1 md:space-y-0">
         <a
          href="mailto:webmaster@ietdavv.edu.in"
          className="flex items-center space-x-2 cursor-pointer text-white"
        >
          <IoMail />
          <p className="hover:border-b-2 hover:border-white">webmaster@ietdavv.edu.in</p>
        </a>
          <div className="flex items-center space-x-2 hover:border-b-2 hover:border-white cursor-pointer">
            <IoCall />
            <p>+91 98260 00000</p>
          </div>
        </div>

        {/* Right: Links + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-2 md:space-y-0 mt-2 md:mt-0">
          {/* Top Links */}
          <div className="flex flex-wrap justify-start md:justify-end gap-3">
            {UPPER_HEADER_LINKS.map((link) => (
              <Link
                className="hover:border-b-2 hover:border-white"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full space-x-1 py-1 px-3 text-black w-full md:w-auto">
            <IoSearch />
            <input
              type="text"
              placeholder="Search"
              className="outline-none placeholder:text-xs w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
