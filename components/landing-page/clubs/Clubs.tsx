"use client";
import { useState } from "react";
import { clubs, imagesMap } from "@/constants/landing/clubs/data";
import ImageGallery from "./Gallery";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion } from "framer-motion";

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<string>("E-CELL");

  return (
    <div className="bg-white px-4 sm:px-8 md:px-20 py-6 sm:py-10 flex flex-col gap-4">
      <Header
        clubDescription={
          clubs.find((club) => club.name === selectedClub)?.description || ""
        }
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50"
      >
        <aside className="md:col-span-1 w-full">
          <Sidebar
            clubs={clubs.map((club) => club.name)}
            selectedClub={selectedClub}
            onSelectClub={setSelectedClub}
          />
        </aside>

        <main className="md:col-span-3 w-full flex justify-center items-center">
          <ImageGallery images={imagesMap[selectedClub] || []} />
        </main>
      </motion.div>
    </div>
  );
};

export default Clubs;
