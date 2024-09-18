import { UPPER_HEADER_LINKS } from "@/constants/header/data";
import Link from "next/link";
import React from "react";
import { IoCall, IoMail, IoSearch } from "react-icons/io5";

const UpperHeader = () => {
  return (
    <div className="bg-black w-full h-8 flex justify-between items-center px-10">
      <div className="flex items-center space-x-10 text-xs">
        <div className="flex hover:border-b-2 hover:border-white text-white cursor-pointer items-center space-x-2">
          <IoMail />
          <p>info@ietdavv.edu.in</p>
        </div>
        <div className="flex hover:border-b-2 hover:border-white text-white cursor-pointer items-center space-x-2">
          <IoCall />
          <p>+91 98260 00000</p>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        {UPPER_HEADER_LINKS.map((link) => (
          <Link
            className="text-white text-xs hover:border-b-2 hover:border-white"
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center bg-white rounded-full space-x-1 text-xs py-1 px-2 text-black">
          <IoSearch />
          <input
            type="text"
            placeholder="Search"
            className="outline-none placeholder:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
