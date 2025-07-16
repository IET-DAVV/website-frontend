"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface TwoImages {
  imgz1: string;
  imgz2: string;
}

interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  twoImages: TwoImages;
  backgroundImage: string;
  exploreNow: string;
  socialLink: string;
  rightRectangleName: string;
}

const StackCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards: Card[] = [
    {
      id: 1,
      title: "GDG IET DAVV (Google Developer Group- Tech with Purpose)",
      subtitle: "(Formerly known as GDSC)",
      description: "From contests like CodeQuest to bootcamps like LearnAIML, GDG IET DAVV is where tech-loving students come together to learn, build, and grow. Whether it’s exploring AI/ML or working on real-world dev projects, you’ll always find something exciting to be a part of. It’s a place that pushes you but also helps you settle in, learn with peers, and find your pace.\nNo prior experience needed – just bring your curiosity!",
      twoImages: {
        imgz1: "/landing/Clubs/GDG_1.png",
        imgz2: "/landing/Clubs/GDG_2.png"
      },
      backgroundImage: "/landing/Clubs/GDG_bg.png",
      exploreNow: "https://gdsc.ietdavv.edu.in/",
      socialLink: "https://www.instagram.com/gdgoc.ietdavv/",
      rightRectangleName: "GDGOC"
    },
    {
      id: 2,
      title: "E-Cell IET DAVV (Think. Feel. Collaborate.)",
      subtitle: "",
      description: "The entrepreneurship engine of IET. E-Cell isn’t just a club it’s a mindset. From ideathons to startup showcases, members don’t just attend events, they build, lead, and grow through them. The club nurtures future founders with exposure, mentorship, and a collaborative ecosystem. E-cell is where passion meets purpose, and your potential finds a platform.\nStill figuring things out? This is the place that helps you figure yourself out too",
      twoImages: {
        imgz1: "/landing/Clubs/ECell_1.png",
        imgz2: "/landing/Clubs/ECell_2.png"
      },
      backgroundImage: "/landing/Clubs/ECell_bg.png",
      exploreNow: "https://www.ecellietdavv.in/",
      socialLink: "https://www.instagram.com/ecell_ietdavv/",
      rightRectangleName: "Ecell"
    },
    {
      id: 3,
      title: "NSS IET DAVV",
      subtitle: "“Not Me, But You”",
      description: "Rooted in the spirit of service, NSS at IET DAVV encourages students to step beyond themselves. From blood donation drives and plantation efforts to awareness campaigns and community outreach, each initiative offers a chance to engage with real-world issues. Students don’t just participate they immerse, often stepping into communities and staying on ground to create lasting impact. NSS isn’t just about volunteering it’s about becoming the kind of leader who lifts others while growing from the experience.",
      twoImages: {
        imgz1: "/landing/Clubs/NSS_1.png",
        imgz2: "/landing/Clubs/NSS_2.png"
      },
      backgroundImage: "/landing/Clubs/NSS_bg.png",
      exploreNow: "https://robotics-ietdavv.com/",
      socialLink: "https://nssietdavv.epizy.com/",
      rightRectangleName: "NSS"
    },
    {
      id: 4,
      title: "Robotronics Club  (Innovation in Motion)",
      subtitle: "",
      description: "From Arduino and Raspberry Pi to drones and autonomous robots, Robotronics Club fuses tech curiosity with hands-on creation. Through national-level workshops like CPS (in collab with IIT Ropar) and events like Tech Think Tank, members explore embedded systems, PCB design, automation, and more. Whether you’re into designing circuits or launching drones, this club offers the tools, guidance, and stage to build, tinker, and lead.\nHere, your ideas don’t stay on paper — they move.\nSharpen your programming skills and compete at the highest level. We focus on competitive programming, algorithm design, and problem-solving techniques. Regular contests, workshops, and mentorship programs help students excel in coding interviews and programming competitions.",
      twoImages: {
        imgz1: "/landing/Clubs/Robotronics_1.png",
        imgz2: "/landing/Clubs/Robotronics_2.png"
      },
      backgroundImage: "/landing/Clubs/Robotronics_bg.png",
      exploreNow: "https://codingclub-ietdavv.com/",
      socialLink: "https://www.instagram.com/robotronics._iet/",
      rightRectangleName: "Robotronics"
    },
    {
      id: 5,
      title: "Rudra Dance Club ",
      subtitle: "(Where rhythm meets legacy)",
      description: "From owning the stage at Fluxus IIT Indore, to winning hearts at Acropolis, CDGI, and homegrown events like Sfoorti and TEDxDAVV, Rudra Dance Club has become the pulse of IET’s cultural scene. With performances that blend classical, hip-hop, contemporary and everything in between, it’s a stage where every dance form finds a voice. For those who speak through movement and live for the spotlight, this is where your rhythm finds its roar.\nThe beat begins here.",
      twoImages: {
        imgz1: "/landing/Clubs/Rudra_1.png",
        imgz2: "/landing/Clubs/Rudra_2.png"
      },
      backgroundImage: "/landing/Clubs/Rudra_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://www.instagram.com/rudra_iet.davv/",
      rightRectangleName: "RUDRA"
    },
    {
      id: 6,
      title: "Cultural Club  (The Heartbeat of Celebrations) ",
      subtitle: "",
      description: "From hosting grand stages like E-Sangam and Induction to lighting up campus life with Tarang, Nidanam, and flash mobs, Cultural Club is where tradition meets energy. Be it fresher parties or university-level festivals, this legacy club curates experiences that stay with you long after the lights dim. If you’ve ever felt the pulse of a crowd or dreamed of crafting unforgettable moments, this is your cue.\nBecause culture isn’t just followed, it’s created.",
      twoImages: {
        imgz1: "/landing/Clubs/Cultural_1.png",
        imgz2: "/landing/Clubs/Cultural_2.png"
      },
      backgroundImage: "/landing/Clubs/cultural_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "Cultural "
    },
    {
      id: 7,
      title: "IET Visuals (Glance of IET)",
      subtitle: "",
      description: "Every fest, every celebration, every quiet candid you’ve ever seen of IET through a story, reel, or photo, chances are it came from the lens of IET Visuals. As the official production team of the college, they don’t just shoot events—they document memories. Whether it’s photography, cinematography, or just a creative spark waiting to be lit, this is where you get to build something lasting with a team that sees stories in everything.\nYou bring the vision. They’ll help you frame it.",
      twoImages: {
        imgz1: "/landing/Clubs/Visuals_1.png",
        imgz2: "/landing/Clubs/Visuals_2.png"
      },
      backgroundImage: "/landing/Clubs/Visuals_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "IET\nVisuals"
    },
    {
      id: 8,
      title: "CEAC IET DAVV ",
      subtitle: "Be the missing component of our circuit",
      description: "The Core Electronics Awareness Club (CEAC) is IET DAVV’s hub for all things hardware. Whether it’s working on real-time projects, attending speaker sessions, or visiting industries, CEAC helps students get hands-on with the field beyond textbooks. This year, the team secured 2nd place at the Startup Expo, turning their ideas into something bigger. So if you’re someone who’s curious about circuits, driven by design, or just figuring out where electronics fits into your journey this is a great place to begin.",
      twoImages: {
        imgz1: "/landing/Clubs/CEAC_1.jpg",
        imgz2: "/landing/Clubs/CEAC_2.jpg"
      },
      backgroundImage: "/landing/Clubs/CEAC_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "CEAC"
    },
    {
      id: 9,
      title: "POART Club ",
      subtitle: "Where voices rise and stay heard.",
      description: "Born out of DAVV’s student community, POART celebrates creativity through open mics, jamming sessions, debates, and theatre. With hundreds of students tuning in and an official backing from DARPAN & NITI Aayog, POART isn’t just a club it’s a campus-wide canvas for expression. Expanding that spirit, OBSYRA its new esports wing builds a digital stage for gaming, casting, and all things competitive. From high-stakes BGMI scrims to full-on tournament vibes, this is where passion meets play.",
      twoImages: {
        imgz1: "/landing/Clubs/POART_1.jpg",
        imgz2: "/landing/Clubs/POART_2.jpg"
      },
      backgroundImage: "/landing/Clubs/POART_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "POART"
    },
    {
      id: 10,
      title: "The Tech-Driven Tribe of IET-DAVV ",
      subtitle: "Be the missing component of our circuit",
      description: "Three teams. One shared drive to build what most just imagine.\nIntroducing Team Hawk, Spark Ignited, and Team Elektronin from IET’s core technical crew turning ideas into drones, electric rides, and autonomous machines. They may share the same lab tables, tools, and tech spirit, but each team branches into its own world:\na. Hawk flies into aeronautics,\nb. Spark ignite drives electric innovation,\nc. Elektronin takes on self-driving terrain.\nFor freshers with curiosity and a maker mindset  this is where the building begins.",
      twoImages: {
        imgz1: "/landing/Clubs/TTDT_1.jpg",
        imgz2: "/landing/Clubs/TTDT_2.jpg"
      },
      backgroundImage: "/landing/Clubs/TTDT_bg.jpg",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "TTDT"
    },
    {
      id: 11,
      title: "Engineers Without Borders, IET Chapter",
      subtitle: "Where technical skills meet real social change. ",
      description: "Part of a global humanitarian network, EWB IET DAVV has been driving impact since 2009, from creating educational audio content for visually impaired students to organizing donation drives and building digital platforms. Their initiatives blend purpose with practical problem-solving, showing how engineering can support inclusion, sustainability, and grassroots action. For freshers who want to apply their knowledge beyond labs and classrooms this is where real-world impact begins.",
      twoImages: {
        imgz1: "/landing/Clubs/EWB_1.jpg",
        imgz2: "/landing/Clubs/EWB_2.jpg"
      },
      backgroundImage: "/landing/Clubs/EWB_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "EWB"
    },
    {
      id: 12,
      title: "National Cadet Corps (NCC) – DAVV Unit",
      subtitle: "Learn leadership, discipline, and service, all while wearing the uniform.",
      description: "DAVV’s NCC unit offers students the chance to join India’s premier cadet organisation, blending military-style training with community action. From drills and camps to medical camps and national cadet expos, NCC builds character and confidence. Cadets also earn certificates that open doors in both defence and civilian sectors. For freshers who want to grow in discipline, teamwork, and purpose this is where transformation begins.",
      twoImages: {
        imgz1: "/landing/Clubs/NCC_1.jpg",
        imgz2: "/landing/Clubs/NCC_2.jpg"
      },
      backgroundImage: "/landing/Clubs/NCC_bg.png",
      exploreNow: "https://designclub-ietdavv.com/",
      socialLink: "https://instagram.com/designclub_ietdavv",
      rightRectangleName: "NCC"
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

        {/* Stack Cards Section */}
        <div ref={containerRef} className="relative" style={{ height: `${totalCards * 110}vh` }}>
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
                      
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 relative overflow-hidden lg:rounded-r-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 opacity-20 z-10" />
                      <Image
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                        alt="IET Clubs"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Stack Cards */}
              {cards.map((card, index) => {
                const cardStart = (index + 1) * 0.07;
                const cardEnd = cardStart + 0.07;

                const cardProgress = useTransform(
                  scrollYProgress,
                  [cardStart, cardEnd],
                  [0, 1]
                );

                const stackOffset = Math.max(8, 20 - (index * 3));
                const y = useTransform(
                  cardProgress,
                  [0, 1],
                  [700, stackOffset]
                );

                const scale = useTransform(
                  cardProgress,
                  [0, 0.5, 1],
                  [0.9, 1, 1.01]
                );

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
                        <Image
                          src={card.backgroundImage}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-900/30 z-10" />
                      </div>

                      {/* Content Container */}
                      <div className="relative z-20 h-full flex">
                        {/* Left Section - Two Large Images */}
                        <div className="w-1/3 p-6 flex flex-col justify-center gap-6">
                          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                              src={card.twoImages.imgz1}
                              alt={`${card.title} - Image 1`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                              src={card.twoImages.imgz2}
                              alt={`${card.title} - Image 2`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Center Section - Content */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
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