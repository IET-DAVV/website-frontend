"use client";
import Header from "@/components/common/header/Header";
<<<<<<< HEAD
import UpperHeader from "@/components/common/header/UpperHeader";
import { headerLinks } from "@/constants/header/data"; // ✅ This is correct
=======
import LowerHeader from "@/components/common/header/LowerHeader";
import UpperHeader from "@/components/common/header/UpperHeader";
import { headerLinks } from "@/constants/header/data";
>>>>>>> origin/main
import React from "react";
import { usePathname } from "next/navigation";

const HeaderContainer = () => {
  const pathname = usePathname();
<<<<<<< HEAD

=======
>>>>>>> origin/main
  return (
    <div
      className={`w-full z-50 ${pathname === "/" ? "absolute top-0 left-0" : "block"}`}
    >
      <UpperHeader />
<<<<<<< HEAD
      <Header links={headerLinks} /> {/* ✅ Pass headerLinks as a prop */}
=======
      <Header links={headerLinks} />
      <LowerHeader />
>>>>>>> origin/main
    </div>
  );
};

export default HeaderContainer;
