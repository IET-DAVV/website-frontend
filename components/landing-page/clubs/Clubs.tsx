"use client";
import { useState } from "react";
import { clubs, imagesMap } from "@/constants/clubs/data";
import ImageGallery from "./Gallery";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion } from "framer-motion";
const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<string>("E-CELL");
  return (
    <div className="bg-white px-20 py-10 flex flex-col gap-2">
      <Header
        clubDescription={
          clubs.find((club) => club.name === selectedClub)?.description || ""
        }
      />
      <motion.div className="grid grid-cols-4 bg-gray-50 gap-4">
        <aside className="col-span-1 flex justify-start items-center w-full">
          <Sidebar
            clubs={clubs.map((club) => club.name)}
            selectedClub={selectedClub}
            onSelectClub={setSelectedClub}
          />
        </aside>
        <main className="w-full h-full flex max-h-full justify-center items-center col-span-3">
          <ImageGallery images={imagesMap[selectedClub] || []} />
        </main>
      </motion.div>
    </div>
  );
};

export default Clubs;
