"use client";
import Header from "@/components/common/header/Header";
import UpperHeader from "@/components/common/header/UpperHeader";
import { headerLinks } from "@/constants/header/data"; // ✅ This is correct
import React from "react";
import { usePathname } from "next/navigation";

const HeaderContainer = () => {
  const pathname = usePathname();
  return (
    <div
      className={`w-full z-50 ${pathname === "/" ? "absolute top-0 left-0" : "block"}`}
    >
      <UpperHeader />
      <Header links={headerLinks} /> {/* ✅ Pass headerLinks as a prop */}
    </div>
  );
};

export default HeaderContainer;
