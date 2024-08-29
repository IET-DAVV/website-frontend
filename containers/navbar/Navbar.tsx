import Header from "@/components/header/Header";
import { headerLinks } from "@/constants/header/data";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Header links={headerLinks} />
    </div>
  );
};

export default Navbar;