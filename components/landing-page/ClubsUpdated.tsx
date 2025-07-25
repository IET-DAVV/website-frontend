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
      title: "Visit the colosseum in Rome",
      subtitle: "BEST IN ITALY",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "See the northern lights in Lapland",
      subtitle: "BEST IN FINLAND",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop",
      gradient: "from-green-400 to-teal-600"
    },
    {
      id: 3,
      title: "See the rivers in Amsterdam",
      subtitle: "BEST IN NETHERLANDS",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop",
      gradient: "from-orange-400 to-pink-600"
    },
    {
      id: 4,
      title: "Explore the Swiss Alps",
      subtitle: "BEST IN SWITZERLAND",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop",
      gradient: "from-purple-400 to-indigo-600"
    },
    {
      id: 5,
      title: "Discover Greek Islands",
      subtitle: "BEST IN GREECE",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop",
      gradient: "from-cyan-400 to-blue-600"
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
                    <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                      <div className="flex flex-col lg:flex-row h-full">
                        {/* Content Section */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-4">
                            <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                              {card.subtitle}
                            </span>
                          </div>
                          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {card.title}
                          </h2>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors text-lg"
                            >
                              Join Club
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
                          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 z-10`} />
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
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