"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
// Ensure this path matches where you saved the game file
import { SecretGameOverlay } from "./SecretGameOverlay"; 

// --- 1. Type Definitions ---
interface ClubData {
  id: number;
  name: string;
  description: string;
  logoPath?: string;
  logoColor?: string;
  images: string[];
  linkedinUrl?: string;
  buttonLink?: string;
}

// --- 2. Data Configuration ---
const clubs: ClubData[] = [
  {
    id: 1,
    name: "Google Developer Groups on Campus IET DAVV",
    // UPDATED CONTENT BELOW
    description: "As the official Google Developer Groups on Campus chapter at IET DAVV, Indore, we exist to help students learn, build, and grow together. Our ecosystem is built on four non-negotiable pillars: Innovation First, where we bypass theory to apply cutting-edge technologies to real-world problems; Skill Development, prioritizing tangible growth through hands-on workshops; a Community Driven network that architects support among developers; and Excellence, striving for perfection from event logistics to project code.",
    logoPath: "/SL/gdglog.png", 
    linkedinUrl: "https://www.linkedin.com/company/gdgoc-iet-davv/posts/",
    buttonLink: "https://gdgoc-ietdavv.netlify.app/",
    logoColor: "#4285F4",
    images: ["/club-gdg-1.jpg", "/club-gdg-2.jpg"],
  }
];

// --- 3. Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

// --- 4. SVG Icons ---
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- 5. Header Component ---
const HeaderSection = () => {
  const [activeTab, setActiveTab] = useState("Clubs");
  const tabs = ["Clubs", "Cultural & Technical Fests", "Live@IET", "Newsletter & Media"];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex flex-col items-center pt-28 pb-16 px-6 md:px-12 font-sans relative z-10"
    >
      {/* Title */}
      <div className="overflow-hidden mb-12 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif text-[#1F6E8C] uppercase tracking-wide"
        >
          Student Life <span className="italic font-light text-[#0e7490]">&</span> Activities
        </motion.h1>
      </div>

      {/* Tabs */}
      <motion.div variants={itemVariants} className="w-full max-w-6xl mb-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative cursor-pointer group pb-2"
            >
              <span className={`text-base md:text-lg font-bold tracking-wide transition-colors duration-300 ${
                  activeTab === tab ? "text-[#1F6E8C]" : "text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {tab}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1F6E8C]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Description Text */}
      <motion.p
        variants={itemVariants}
        className="max-w-4xl w-full text-gray-600 text-lg md:text-xl leading-8 text-center font-medium"
      >
        At IET DAVV, we believe holistic development is key. Our campus is a hub
        of student led activities driven by various Communities and Clubs,
        covering both academics and extracurricular activities.
      </motion.p>
    </motion.div>
  );
};

// --- 6. Club Card Component (FIXED) ---
const ClubCard: React.FC<{ data: ClubData; index: number; onTriggerGame: () => void }> = ({ data, index, onTriggerGame }) => {
  const ref = useRef(null);
  const [clickCount, setClickCount] = useState(0);
  
  // Ref to store the timer ID so we can clear it
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // --- FIXED LOGIC ---
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 1. Clear the previous timer immediately so it doesn't reset the count
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    // 2. Check for Win
    if (newCount >= 15) {
        onTriggerGame();
        setClickCount(0); // Reset count
        if (timerRef.current) clearTimeout(timerRef.current); // Clear timer
    } else {
        // 3. Set a NEW timer. If user stops clicking for 2s, THEN reset.
        timerRef.current = setTimeout(() => {
            setClickCount(0);
        }, 2000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[85rem] mx-auto mb-32 px-6 md:px-12"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Image Stack */}
        <div className="w-full lg:w-9/19 flex flex-col gap-6 relative">
          {[0, 1].map((imgIdx) => (
            <motion.div 
              key={imgIdx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden shadow-md relative group"
            >
               <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-lg font-semibold group-hover:bg-gray-300 transition-colors duration-500">
                  <span className="z-10 relative">Club Image {imgIdx + 1}</span>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 flex flex-col pt-2">
          {/* Header Row */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-6 gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {data.name}
            </h2>
            
            {/* --- LOGO TRIGGER --- */}
            <motion.div 
              onClick={handleLogoClick}
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // Visual Feedback: Shake when getting close (count > 5)
              animate={clickCount > 5 ? { x: [-2, 2, -2, 2, 0] } : {}} 
              className="shrink-0 p-1 bg-white rounded-full shadow-sm border border-gray-100 cursor-pointer select-none"
            >
               {data.logoPath ? (
                 <img
                   src={data.logoPath}
                   alt={`${data.name} logo`}
                   className="w-16 md:w-20 h-auto object-contain"
                 />
               ) : (
                 <div className="text-4xl font-bold px-3" style={{ color: data.logoColor }}>&lt;/&gt;</div>
               )}
            </motion.div>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-8 mb-8 text-justify font-normal">
            {data.description}
          </p>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#0e7490]"></div>
            <p className="text-gray-500 text-base italic">
              No prior experience needed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-auto">
            <motion.a 
              href={data.buttonLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0e7490] text-white text-base md:text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#155e75] transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Explore More
            </motion.a>
            
            <div className="flex gap-6 items-center">
               <motion.a 
                 whileHover={{ y: -3, color: "#E1306C" }} 
                 href="#" 
                 className="text-[#0e7490] transition-colors"
               >
                 <InstagramIcon />
               </motion.a>
               <motion.a 
                 whileHover={{ y: -3, color: "#0077b5" }} 
                 href={data.linkedinUrl || "#"} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-[#0e7490] transition-colors"
               >
                 <LinkedInIcon />
               </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// --- 7. Main Page Export ---
export default function StudentLifeActivities() {
  const [gameActive, setGameActive] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen font-sans pb-32 overflow-hidden">
      {/* Game Overlay */}
      <AnimatePresence>
         {gameActive && <SecretGameOverlay onClose={() => setGameActive(false)} />}
      </AnimatePresence>

      <HeaderSection />
      
      <div className="mt-12 flex flex-col gap-16">
        {clubs.map((club, index) => (
          <ClubCard 
             key={club.id} 
             data={club} 
             index={index} 
             onTriggerGame={() => setGameActive(true)} 
          />
        ))}
      </div>
    </div>
  );
}