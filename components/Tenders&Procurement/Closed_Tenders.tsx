// dont change the export variable and read all the comments
"use client";
import React from "react";
import { motion } from "framer-motion";
// import Title from "../common/academics/Title"; // Use this import for titel component

{/* <Title title="Titel that you wanna use" className="text-7xl leading-tight font-newyork" /> */}// uncomment this to use the titel component

// This component creates the main title, styled similarly to your example.
const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-8 md:my-12">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-serif font-bold"
      style={{ color: 'rgb(59, 122, 158)' }} // Applied the requested text color
    >
      {title}
    </motion.h1>
    {/* This is the underline element from your design */}
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "6rem" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-24 h-1 mx-auto mt-4 rounded"
      style={{ backgroundColor: 'rgb(59, 122, 158)' }} // Matching color
    />
  </div>
);

// This component contains the CSS for the Pac-Man animation.
// Placing it here keeps everything self-contained within this one file.
const PacmanAnimationStyles: React.FC = () => {
  const styles = `
    /* New wrapper to create a self-contained animation stage */
    .animation-wrapper {
        position: relative;
        width: 350px; /* Width to contain pacman and all dots */
        height: 100px; /* Pacman's height */
        transform: scale(0.8); /* Scale down for smaller screens */
    }
    @media (min-width: 768px) {
        .animation-wrapper {
            transform: scale(1); /* Full size on medium screens and up */
        }
    }

    /* Pacman container now only handles movement across the screen */
    .pacman {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        /* Updated animation with a smoother loop */
        animation: movePacman 2.5s linear infinite;
    }
    
    /* New inner element to handle the mouth chomping animation */
    .pacman-shape {
        width: 0px;
        height: 0px;
        border-right: 50px solid transparent;
        border-top: 50px solid rgb(59, 122, 158);
        border-left: 50px solid rgb(59, 122, 158);
        border-bottom: 50px solid rgb(59, 122, 158);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        animation: chomp 0.5s ease-in-out infinite;
        position: relative;
    }

    .pacman-eye {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white; /* Changed eye to white for better contrast */
        border: 1px solid #333;
        border-radius: 50%;
        top: -30px;
        right: 20px;
    }

    /* Dots are now positioned absolutely within the wrapper and stay fixed */
    .dots {
        display: flex;
        align-items: center;
        position: absolute;
        top: 42.5px; /* Vertically center dots relative to pacman's 100px height */
        left: 100px; /* Start dots just after pacman's initial space */
    }

    .dot {
        width: 15px;
        height: 15px;
        background-color: rgb(59, 122, 158); /* Updated dot color */
        border-radius: 50%;
        margin: 0 12px;
        /* Updated animation with a smoother loop */
        animation: eat 2.5s linear infinite;
    }

    /* Staggered delays for each dot to disappear as Pac-Man passes */
    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.4s; }
    .dot:nth-child(3) { animation-delay: 0.8s; }
    .dot:nth-child(4) { animation-delay: 1.2s; }
    .dot:nth-child(5) { animation-delay: 1.6s; }

    /* Chomp animation correctly rotates to open and close the mouth */
    @keyframes chomp {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(-45deg); }
      100% { transform: rotate(0deg); }
    }

    /* CORRECTED: Dots are now visible until eaten, and reappear correctly for the next loop. */
    @keyframes eat {
        0% {
            /* Dot is visible at the start of its animation cycle */
            transform: scale(1);
            opacity: 1;
        }
        0.01% {
            /* Instantly "eaten" and becomes invisible */
            transform: scale(0);
            opacity: 0;
        }
        79.99% {
            /* Stays invisible until the global reset period */
            transform: scale(0);
            opacity: 0;
        }
        80% {
            /* Reappears for the reset and is ready for the next loop */
            transform: scale(1);
            opacity: 1;
        }
    }

    /* Pac-Man moves for 2s (80% of 2.5s), then is hidden for 0.5s to create a clean loop */
    @keyframes movePacman {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        80% {
            transform: translateX(250px);
            opacity: 1;
        }
        80.01% { /* Disappear instantly at the end of the path */
            opacity: 0;
        }
        100% { /* Stay hidden and reset position for the next loop */
            transform: translateX(0);
            opacity: 0;
        }
    }
  `;
  return <style>{styles}</style>;
};

// The main component for the page, now named RIPage
const Closed_TendersPage: React.FC = () => {
  return (
    <>
      <PacmanAnimationStyles />
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 font-sans p-4 text-center overflow-hidden">
        <Title title="PAGE UNDER CONSTRUCTION" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-500 mb-16 max-w-md"
        >
          Our team is working hard to bring this page to life. Please check back soon for updates!
        </motion.p>
        
        {/* This div now acts as the stage for the animation */}
        <div className="h-28 flex items-center justify-center">
            <motion.div
                key={Math.random()} // Re-trigger animation on re-render if needed
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="animation-wrapper"
            >
              <div className="pacman">
                <div className="pacman-shape">
                    <div className="pacman-eye"></div>
                </div>
              </div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default Closed_TendersPage;
