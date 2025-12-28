"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Particle Effect Component for squash Feedback ---
const Particle = ({ x, y }: { x: number; y: number }) => {
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 100 + 50;
  const targetX = x + Math.cos(angle) * distance;
  const targetY = y + Math.sin(angle) * distance;

  return (
    <motion.div
      initial={{ x, y, opacity: 1, scale: 1 }}
      animate={{
        x: targetX,
        y: targetY,
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 360,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute w-3 h-3 bg-green-500 shadow-[0_0_10px_#22c55e] pointer-events-none"
      style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} // Star shape
    />
  );
};

// --- Main Game Component ---
export const SecretGameOverlay = ({ onClose }: { onClose: () => void }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // Increased initial time slightly
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [bugPosition, setBugPosition] = useState({ top: "50%", left: "50%" });
  const [bugSize, setBugSize] = useState(1); // Scale factor for difficulty
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const particleIdCounter = React.useRef(0);

  // --- 1. Timer Logic ---
  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("lost");
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  // --- 2. Auto-Move Bug (Difficulty Scaling) ---
  // The higher the score, the faster it teleports autonomously
  useEffect(() => {
    if (gameState !== "playing") return;
    // Speed ranges from 2000ms down to 600ms based on score
    const moveSpeed = Math.max(600, 2000 - score * 300); 
    
    const moveTimer = setInterval(() => {
       moveBug();
    }, moveSpeed);

    return () => clearInterval(moveTimer);
  }, [gameState, score]);


  // --- Helper Functions ---
  const moveBug = () => {
    // Ensure bug stays away from edges (using 10%-90% range)
    const randomTop = Math.floor(Math.random() * 80) + 10 + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 10 + "%";
    setBugPosition({ top: randomTop, left: randomLeft });
  };

  const triggerParticles = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 8 }).map(() => ({
        id: particleIdCounter.current++,
        x: centerX,
        y: centerY,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    // Cleanup particles after animation
    setTimeout(() => {
        setParticles((prev) => prev.filter(p => p.id > particleIdCounter.current - 8));
    }, 1000);
  };


  // --- Game Interaction ---
  const handleBugClick = (e: React.MouseEvent) => {
    if (gameState !== "playing") return;
    
    triggerParticles(e);

    const newScore = score + 1;
    setScore(newScore);

    if (newScore >= 5) {
      setGameState("won");
    } else {
      // Difficulty Increase: Shrink bug slightly
      setBugSize(prev => Math.max(0.6, prev - 0.08)); 
      moveBug();
    }
  };

  const restartGame = () => {
      setScore(0);
      setTimeLeft(15);
      setBugSize(1);
      setGameState("playing");
      moveBug();
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center font-mono select-none overflow-hidden"
    >
      {/* Scanline Overlay for Hacker Vibe */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.05)_50%)] bg-[length:100%_4px]" />

      {/* Particle Effects Container */}
      <AnimatePresence>
        {particles.map((p) => (
            <Particle key={p.id} x={p.x} y={p.y} />
        ))}
      </AnimatePresence>

      {/* --- Game UI --- */}
      {gameState === "playing" && (
        <>
          <motion.h2 
            animate={{ opacity: [0.5, 1, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-500 text-4xl mb-4 tracking-[0.2em] font-bold relative z-10"
            style={{ textShadow: "0 0 10px #22c55e" }}
          >
            SYSTEM BREACH DETECTED
          </motion.h2>
          <p className="text-green-400/70 mb-8 z-10">Neutralize 5 polymorphic bugs before kernel panic.</p>
          
          {/* HUD */}
          <div className="flex gap-12 text-2xl font-bold mb-12 z-10 bg-black/50 p-4 rounded-lg border border-green-500/30 backdrop-blur-sm">
            <div className="text-white flex flex-col items-center">
                <span className="text-sm text-gray-400">THREATS NEUTRALIZED</span>
                <span className="text-green-400">{score}/5</span>
            </div>
            <div className="flex flex-col items-center">
                 <span className="text-sm text-gray-400">TIME TO FAILURE</span>
                <motion.span 
                    animate={timeLeft < 5 ? { scale: [1, 1.2, 1], color: ["#ef4444", "#ffffff", "#ef4444"] } : {}}
                    transition={timeLeft < 5 ? { repeat: Infinity, duration: 0.5 } : {}}
                    className={timeLeft < 5 ? 'text-red-500' : 'text-green-500'}
                >
                 {timeLeft}s
                </motion.span>
            </div>
          </div>

          {/* The Glitching Bug */}
          <motion.button
            // Layout prop ensures smooth movement between positions
            layout 
            // The bug "wobbles" slightly while stationary to look alive
            animate={{ 
                scale: bugSize, 
                rotate: [0, -5, 5, 0], 
                filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
            }}
            whileTap={{ scale: bugSize * 1.5, filter: "brightness(2) contrast(2)" }} // Glitch effect on tap
            transition={{ 
                rotate: { repeat: Infinity, duration: 0.3, ease: "linear" },
                filter: { repeat: Infinity, duration: 0.5 },
                layout: { type: "spring", stiffness: 300, damping: 25 } // Snappy movement
            }}
            onClick={handleBugClick}
            style={{ top: bugPosition.top, left: bugPosition.left }}
            // Added a "glitchy box" around the bug
            className="absolute text-6xl cursor-crosshair p-2 rounded-lg hover:bg-red-500/20 border-2 border-transparent hover:border-red-500/50 transition-colors z-20 group"
          >
            <span className="relative z-10">👾</span>
            {/* Glitch shadow behind bug */}
            <span className="absolute inset-0 text-6xl text-red-500 opacity-50 blur-[2px] z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">👾</span>
          </motion.button>
        </>
      )}

      {/* --- Win State --- */}
      {gameState === "won" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="text-center p-10 border-4 border-yellow-400 rounded-2xl bg-black/80 backdrop-blur-xl shadow-[0_0_50px_#eab308]"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-9xl mb-6 filter drop-shadow-[0_0_20px_#eab308]"
          >
            👑
          </motion.div>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 mb-4 animate-pulse">
            10x DEV UNLOCKED
          </h1>
          <p className="text-yellow-200/80 text-xl mb-8 tracking-wider">System integrity restored. Commit access granted.</p>
          <button 
            onClick={onClose} 
            className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-extrabold text-xl rounded-xl hover:scale-105 hover:shadow-[0_0_30px_#eab308] transition-all"
          >
            EXIT THE MATRIX
          </button>
        </motion.div>
      )}

      {/* --- Lost State --- */}
      {gameState === "lost" && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center relative z-10 p-8 bg-black/60 rounded-xl border border-red-500/30"
        >
          <motion.div
             animate={{ opacity: [1, 0.5, 1] }}
             transition={{ duration: 0.5, repeat: Infinity }}
             className="text-8xl mb-4"
          >
            💀
          </motion.div>
          <h1 className="text-7xl font-black text-red-600 mb-2 tracking-tighter" style={{textShadow: "0 0 20px red"}}>KERNEL PANIC</h1>
          <p className="text-red-400 text-2xl mb-10">Segmentation Fault (core dumped)</p>
          <div className="flex gap-6 justify-center">
            <button 
              onClick={restartGame}
              className="px-8 py-3 bg-red-600/20 border-2 border-red-500 text-red-500 font-bold text-lg rounded hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_red] transition-all"
            >
              Try Again // sudo reboot
            </button>
            <button 
              onClick={onClose} 
              className="px-8 py-3 text-gray-400 hover:text-white font-bold text-lg transition-colors"
            >
              Disconnect
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};