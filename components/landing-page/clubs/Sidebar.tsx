import { useState } from "react";
import Image from "next/image";

interface SidebarProps {
  clubs: string[];
  selectedClub: string;
  onSelectClub: (club: string) => void;
}

const Sidebar = ({ clubs, selectedClub, onSelectClub }: SidebarProps) => {
  return (
    <aside className="flex flex-col items-start justify-start gap-12 px-4 text-center text-xl text-gray-400 font-manrope">
      <ul className="space-y-2">
        {clubs.map((club) => (
          <li
            key={club}
            className={`cursor-pointer p-2 flex items-center rounded-lg ${
              club === selectedClub ? "text-black" : ""
            }`}
            onClick={() => onSelectClub(club)}
          >
            <span
              className={` mr-2 text-2xl ${selectedClub === club ? "text-black" : "text-white"}`}
            >
              •
            </span>
            <span>{club}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
