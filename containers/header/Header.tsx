import Header from "@/components/common/header/Header";
import LowerHeader from "@/components/common/header/LowerHeader";
import UpperHeader from "@/components/common/header/UpperHeader";
import { headerLinks } from "@/constants/header/data";
import React from "react";

const HeaderContainer = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <UpperHeader />
      <Header links={headerLinks} />
      <LowerHeader />
    </div>
  );
};

export default HeaderContainer;
