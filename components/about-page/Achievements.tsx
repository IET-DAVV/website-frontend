"use client";
import React from "react";
import AchievementsSlider from "./AchievementsSlider"; // ✅ correct import

const Achievements = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-10">ACHIEVEMENTS</h1>
      <AchievementsSlider /> {/* ✅ Use only this */}
    </div>
  );
};

export default Achievements;
