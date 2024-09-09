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
          src={
            "https://s3-alpha-sig.figma.com/img/8b1f/ba24/868716fdffba81dd0aa4eeee613b783b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2e2nShAB3FPAWQak9sT7ibuyPBt2xyEcTLhOTai2fH4324zn80Ikki0t8ZXSVNw2O8FzrAr6q9rc-phzhNNsrLQZm7IYIx6MLC2zZ27W18e45ZHEkBahd89xBXpMhwvhn9Uj834moJTnuCdnl4ahUXSN-h6TD4J6ofGXRWXyfreISNZvZMkIMH7zWD75UPBG-Z~0ONafT4NK6nsnRRYYWk0USZyt9l5LzOEcCmOGdZ6wXmcLnkPxTh4IRbWj-jg~Avn-ipeab-ggTrsXbjY9m0fEcq~dcaNa003Cx-RT9xAiInTcQQD7WNI9VVpxeA7Kp8bYqWe37p9J1F6fvBTyg__"
          }
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
            className="last:border-b-2 text-sm border-black"
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
