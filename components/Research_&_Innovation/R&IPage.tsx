// dont change the export variable and read all the comments
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// InnovationCell component added here (ported from app/ResearchPage/InnovationCellPage.tsx)
export const InnovationCell: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* ===== Header ===== */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 py-3 text-sm text-gray-600">
          <div className="flex gap-5">
            <span>📧 1234@ietdavv.edu.in</span>
            <span>📞 +0731-2455856</span>
          </div>
          <div>Placement | Courses | Notice | Alumni</div>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-green-800"
          >
            Institute of Engineering and Technology
          </motion.div>

          <ul className="flex gap-8 text-sm font-medium text-gray-700">
            {[
              "Home",
              "About us",
              "Academics",
              "Admission",
              "Hostel",
              "Contact us",
              "Fresher’s Corner",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#1e40af" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="🔍 Search"
            className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </nav>
      </header>

      {/* ===== Title Section ===== */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-900 tracking-wide"
        >
          RESEARCH AND INNOVATION
        </motion.h1>

        <motion.div
          className="mt-6 flex justify-center flex-wrap gap-6 text-gray-700 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            "Research Labs & Centres",
            "Funded Projects",
            "Publications & Patents",
            "Consultancy & MoUs",
            "Innovation Cell / IIC",
          ].map((tab, i) => (
            <a
              key={i}
              href="#"
              className={`hover:text-blue-800 ${
                tab === "Innovation Cell / IIC" ? "font-semibold underline text-blue-800" : ""
              }`}
            >
              {tab}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed space-y-5"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Incubation Centre</h2>
          <p>
            Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a Section 8 company designed to foster
            a vibrant ecosystem of technology incubation and entrepreneurship. By aligning with national
            priorities, DAVV-IC aims to generate employment, create wealth, and build successful businesses.
          </p>
          <p>
            The center provides a nurturing environment for emerging startups, particularly those originating
            from academia, to help them transition from innovative ideas to scalable, sustainable businesses.
            DAVV-IC is registered under CIN No. <strong>U80901MP2022NPL063927</strong> and has obtained <strong>12A & 80G</strong> certificates for
            tax exemptions and CSR registration.
          </p>
          <p>
            The DAVV Incubation Forum aims to connect budding entrepreneurs, startups, and mentors by providing
            resources, networking opportunities, and a platform to showcase innovative ideas.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-2 mt-4 shadow-md transition">
              Explore More
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/davv-incubation-centre.jpg"
            alt="DAVV Incubation Centre"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#111] text-gray-300 pt-12 pb-8 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-sm">
          {/* Reach Us */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Reach Us</h4>
            <p className="flex items-start gap-2">
              <MapPin size={16} /> Institute of Engineering and Technology<br />Devi Ahilya Vishwavidyalaya<br />
              Khandwa Road, Indore - 452017 (M.P.)
            </p>
            <p className="mt-3 flex items-center gap-2">
              <Phone size={16} /> 0731-2366826
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> contact@ietdavv.edu.in
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li>Administration</li>
              <li>Antiragging</li>
              <li>Student Feedback</li>
              <li>Spoken Tutorial</li>
              <li>E-Books</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Information</h4>
            <ul className="space-y-1">
              <li>University Website</li>
              <li>Contact Directory</li>
              <li>Forms</li>
              <li>Mandatory Disclosure</li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Site Map</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Academics</li>
              <li>Freshers Corner</li>
              <li>Lift Media</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
          ©2025 IET-DAVV. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

// The main component for the page, now named RIPage
const RIPage: React.FC = () => {
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

export default RIPage;
