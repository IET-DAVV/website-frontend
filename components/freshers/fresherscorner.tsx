"use client";
import React, { useState } from "react";
import "@/styles/fonts.css"; // Your custom font

const FreshersCorner = () => {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 px-4 py-10 flex flex-col items-center justify-start">
      {/* 🎁 Gift Box UI */}
      <div className="text-center space-y-6 max-w-xl">
        <div className="relative w-40 h-40 mx-auto">
          <div className="w-full h-full bg-yellow-300 border-4 border-pink-400 shadow-lg" />
          <div className="absolute inset-x-0 top-1/2 h-4 bg-pink-600" />
          <div className="absolute inset-y-0 left-1/2 w-4 bg-pink-600" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-8 bg-pink-500 rounded-full shadow-lg rotate-12" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-8 bg-pink-500 rounded-full shadow-lg -rotate-12" />
        </div>

        <h1 className="text-4xl md:text-5xl font-newyork font-bold text-pink-700 drop-shadow">
          Welcome Freshers 🎉
        </h1>
        <p className="text-lg text-gray-700 font-medium">
          There's a surprise waiting for you!
        </p>

        <button
          onClick={() => setStartGame(true)}
          className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-full text-lg font-semibold hover:bg-pink-700 transition"
        >
          Click & Start the Game
        </button>
      </div>

      {/* 🎮 Flappy Bird Game Section */}
      {startGame && (
        <div className="mt-12 w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-4 text-pink-700">🎮 Flappy Bird Game</h2>
          <iframe
            src="/flappy_bird_game.html"
            width="100%"
            height="650px"
            style={{ border: "none" }}
            title="Flappy Bird Game"
          />
        </div>
      )}
    </div>
  );
};

export default FreshersCorner;
