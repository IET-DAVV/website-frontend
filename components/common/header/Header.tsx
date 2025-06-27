import React from "react";
import { LOGO, headerLinks } from "@/constants/header/data";
import { HeaderLinksType } from "@/typings";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Header = ({ links }: { links: HeaderLinksType }) => {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-2 bg-transparent text-black">
      <div className="flex flex-row justify-center items-center space-x-2">
        <Image
          src={"/logo.svg"}
          className="w-12 h-12"
          alt="logo"
          width={1000}
          height={1000}
        />
        <p className={`${manrope.className} text-sm w-44 font-bold`}>{LOGO}</p>
      </div>
      <ul className="flex flex-row justify-center items-center space-x-5">
        {headerLinks?.map((link: any) => (
          <Link
            href={link.href}
            key={link.name}
            className="last:border-b-2 text-sm border-black hover:border-b-2 hover:border-black"
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
