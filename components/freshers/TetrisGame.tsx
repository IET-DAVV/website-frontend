"use client";
import React, { useEffect, useState } from "react";

const CIRCLE_SIZE = 60;
const GAME_DURATION = 30;

const TetrisGame = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const moveCircle = () => {
    const container = document.getElementById("game-container");
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const maxLeft = containerWidth - CIRCLE_SIZE;
    const maxTop = containerHeight - CIRCLE_SIZE;

    const newLeft = Math.floor(Math.random() * maxLeft);
    const newTop = Math.floor(Math.random() * maxTop);

    setPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  const handleClick = () => {
    if (!gameStarted || gameOver) return;
    setScore((prev) => prev + 1);
    moveCircle();
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setGameStarted(true);
    setGameOver(false);
    setTimeout(() => {
      moveCircle();
    }, 100); // ensure container is rendered
  };

  return (
    <div className="w-full h-[70vh] bg-black rounded-xl relative overflow-hidden p-4 text-white flex items-center justify-center">
      {/* Header Info */}
      <div className="absolute top-2 left-4 text-lg">🕒 Time: {timeLeft}s</div>
      <div className="absolute top-2 right-4 text-lg">🎯 Score: {score}</div>

      {/* Game Container */}
      <div
        id="game-container"
        className="relative w-full h-full border border-white rounded-md"
      >
        {/* Pink Circle */}
        {gameStarted && !gameOver && (
          <div
            onClick={handleClick}
            className="absolute bg-pink-500 rounded-full cursor-pointer hover:scale-110 transition"
            style={{
              top: position.top,
              left: position.left,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
            }}
          />
        )}

        {/* Game Over */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3 bg-black bg-opacity-80">
            <h2 className="text-3xl font-bold text-pink-400">🎉 Game Over!</h2>
            <p className="text-lg">Your Score: {score}</p>
            <button
              onClick={startGame}
              className="bg-pink-600 px-6 py-2 rounded-full text-white hover:bg-pink-700"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Start Button */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={startGame}
              className="bg-pink-600 px-6 py-3 rounded-full text-white text-lg hover:bg-pink-700 transition"
            >
              Start Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TetrisGame;
