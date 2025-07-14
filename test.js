"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    {
      id: 1,
      title: "GDG IET DAVV (Google Developer Group- Tech with Purpose)",
      subtitle: "(Formerly known as GDSC)",
      description: "From contests like CodeQuest to bootcamps like LearnAIML, GDG IET DAVV is where tech-loving students come together to learn, build, and grow. Whether it's exploring AI/ML or working on real-world dev projects, you'll always find something exciting to be a part of. It's a place that pushes you but also helps you settle in, learn with peers, and find your pace.",
      twoImages: {
        imgz1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
        imgz2: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop"
      },
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      exploreNow: "https://gdg.community.dev/gdg-iet-davv-indore/",
      socialLink: "https://instagram.com/gdgietdavv",
      rightRectangleName: "GDGOC"
    },
    {
      id: 2,
      title: "IEEE Student Branch IET DAVV",
      subtitle: "(Institute of Electrical and Electronics Engineers)",
      description: "IEEE Student Branch at IET DAVV is a gateway to the world of technology and innovation. We organize technical workshops, coding competitions, and networking events that help students stay ahead in the rapidly evolving tech landscape. Join us to connect with like-minded peers and industry professionals.",
      twoImages: {
        imgz1: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop",
        imgz2: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop"
      },
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
      exploreNow: "https://ieee.org/",
      socialLink: "https://instagram.com/ieee_ietdavv",
      rightRectangleName: "IEEE"
    },
    {
      id: 3,
      title: "Robotics Club IET DAVV",
      subtitle: "(Innovation through Automation)",
      description: "Dive into the fascinating world of robotics and automation. Our club focuses on building innovative robots, participating in competitions, and exploring cutting-edge technologies like AI and IoT. Perfect for students passionate about hardware, software, and everything in between.",
      twoImages: {
        imgz1: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        imgz2: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=300&h=200&fit=crop"
      },
      backgroundImage: "https://images.unsplash.com/photo-1546776230-bb36c3c641d2?w=1200&h=800&fit=crop",
      exploreNow: "https://robotics-ietdavv.com/",
      socialLink: "https://instagram.com/robotics_ietdavv",
      rightRectangleName: "ROBO"
    },
    {
      id: 4,
      title: "Coding Club IET DAVV",
      subtitle: "(Competitive Programming Excellence)",
      description: "Sharpen your programming skills and compete at the highest level. We focus on competitive programming, algorithm design, and problem-solving techniques. Regular contests, workshops, and mentorship programs help students excel in coding interviews and programming competitions.",
      twoImages: {
        imgz1: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
        imgz2: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
      },
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
      exploreNow: "https://codingclub-ietdavv.com/",
      socialLink: "https://instagram.com/codingclub_ietdavv",
      rightRectangleName: "CODE"
    },
    {
      id: 5,
      title: "Design Club IET DAVV",
      subtitle: "(Creative Innovation Hub)",
      description: "Where creativity meets technology. Our design club focuses on UI/UX design, graphic design, and digital art. We organize design sprints, workshops on design tools, and collaborate on projects that blend aesthetics with functionality. Perfect for creative minds looking to make an impact.",
      twoImages: {
        imgz1: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop",
        imgz2: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=300&h=200&fit=crop"
      },
      backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "DSGN"
    }
  ];

  // Calculate total cards including the base card
  const totalCards = cards.length + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            IET CLUBS
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing Clubs In Your College
          </p>
        </div>

        {/* Stack Cards Section - Reduced height multiplier */}
        <div ref={containerRef} className="relative" style={{ height: `${totalCards * 80}vh` }}>
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl mx-auto h-[80vh]">
              
              {/* Static Base Card */}
              <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Content Section */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                          WELCOME TO
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        IET CLUBS
                      </h2>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors text-lg"
                        >
                          Explore Clubs
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors text-lg"
                        >
                          Learn more
                        </motion.button>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 relative overflow-hidden lg:rounded-r-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 opacity-20 z-10" />
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                        alt="IET Clubs"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Stack Cards */}
              {cards.map((card, index) => {
                // Adjusted scroll progress calculation for earlier card changes
                const cardStart = (index + 1) * 0.15; // Cards start changing earlier
                const cardEnd = cardStart + 0.15; // Shorter transition period
                
                const cardProgress = useTransform(
                  scrollYProgress,
                  [cardStart, cardEnd],
                  [0, 1]
                );

                // Reduced stack offset for tighter stacking
                const stackOffset = Math.max(8, 20 - (index * 3));
                const y = useTransform(
                  cardProgress,
                  [0, 1],
                  [700, stackOffset] // Reduced initial Y position
                );

                // Scale for depth effect
                const scale = useTransform(
                  cardProgress,
                  [0, 0.5, 1],
                  [0.9, 1, 1.01]
                );

                // Rotation for entering effect
                const rotateX = useTransform(
                  cardProgress,
                  [0, 0.5],
                  [5, 0]
                );

                return (
                  <motion.div
                    key={card.id}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      y,
                      scale,
                      rotateX,
                      zIndex: 10 + index,
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <div className="w-full h-full rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 relative">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={card.backgroundImage}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-900/30" />
                      </div>

                      {/* Content Container */}
                      <div className="relative z-10 h-full flex">
                        {/* Left Section - Images and Content */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                          {/* Two Images */}
                          <div className="flex gap-4 mb-6">
                            <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg">
                              <img
                                src={card.twoImages.imgz1}
                                alt={`${card.title} - Image 1`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg">
                              <img
                                src={card.twoImages.imgz2}
                                alt={`${card.title} - Image 2`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Title and Description */}
                          <div className="mb-6">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                              {card.title}
                            </h2>
                            <p className="text-lg text-gray-300 mb-4 font-medium">
                              {card.subtitle}
                            </p>
                            <p className="text-white text-sm lg:text-base leading-relaxed">
                              {card.description}
                            </p>
                          </div>

                          {/* Additional Text */}
                          <p className="text-white text-sm mb-6 opacity-90">
                            No prior experience needed – just bring your curiosity!
                          </p>

                          {/* Buttons */}
                          <div className="flex items-center gap-4">
                            <motion.a
                              href={card.exploreNow}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors text-sm"
                            >
                              Explore Now!
                            </motion.a>
                            
                            <motion.a
                              href={card.socialLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                            >
                              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </motion.a>
                            
                            <motion.a
                              href="#"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                            >
                              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </motion.a>
                          </div>
                        </div>

                        {/* Right Section - Name Rectangle */}
                        <div className="flex items-center justify-center p-8">
                          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-600">
                            <div className="text-center">
                              <div className="text-white text-4xl lg:text-5xl font-bold tracking-wider transform rotate-0">
                                {card.rightRectangleName.split('').map((letter, i) => (
                                  <div key={i} className="block leading-tight">
                                    {letter}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCards;