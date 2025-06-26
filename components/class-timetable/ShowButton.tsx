"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ShowButtonProps {
  onClick?: () => void; // optional click handler
}

const ShowButton: React.FC<ShowButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-[#006f8b] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#005a71] transition-colors"
    >
      Show
      <ArrowRight size={18} />
    </button>
  );
};

export default ShowButton;
