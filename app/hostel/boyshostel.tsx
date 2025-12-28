"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// --- Data Structures ---
const accommodationBlocks = [
  { id: 'H', title: 'Block H', desc: 'First-year students | Triple sharing rooms to foster brotherhood' },
  { id: 'I', title: 'Block I', desc: 'Second & Third-year students | Double occupancy rooms' },
  { id: 'J', title: 'Block J', desc: 'Final-year & PG students | Single occupancy rooms for focus' },
  { id: 'K', title: 'Block K', desc: 'Research Scholars & Ph.D | Dedicated quiet zone blocks' },
];

const facilities = [
  { title: "High-Speed LAN", desc: "Dedicated ethernet ports in every room for seamless research." },
  { title: "Central Mess", desc: "High-protein vegetarian meals designed for active students." },
  { title: "Sports Complex", desc: "Access to Basketball, Volleyball courts and Indoor Gym." },
  { title: "24/7 Power", desc: "Full power backup for all blocks including study halls." },
  { title: "Laundry Service", desc: "Industrial-grade washing machines located in J Block." },
  { title: "Safety Systems", desc: "Smoke detectors, fire hydrants, and 24/7 patrolling." },
];

const quickFacts = [
  { label: "Total Blocks", value: "H, I, J, K + Common Mess + Sports Arena" },
  { label: "Occupancy", value: "Single, Double, Triple sharing" },
  { label: "Security", value: "Biometric entry, 24x7 guards, CCTV" },
  { label: "Mess", value: "Centralized, multi-cuisine vegetarian" },
  { label: "Curfew", value: "10:00 PM (In-campus movement allowed)" },
  { label: "Special Features", value: "Gymnasium, Reading Rooms, Solar Geysers" },
];

const administration = [
  {
    role: "Chief Warden",
    name: "Dr. RK Sharma",
    caretaker: "Mr. Verma",
    staff: "12+ maintenance & security staff",
    contact: "warden.boys@iet.edu",
    image: "/warden-male-placeholder.jpg" 
  },
  {
    role: "Assistant Warden",
    name: "Mr. Amit Singh",
    caretaker: "Mr. Rahul",
    staff: "24/7 available on-site",
    contact: "ext. 402",
    image: null
  }
];

export default function BoysHostelPage() {
  return (
    <main className="min-h-screen bg-white font-manrope">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#2C3E50] min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-newyork mb-4 uppercase tracking-tighter"
        >
          Boy&apos;s Hostel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase opacity-90"
        >
          Discipline. Growth. Excellence.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* 2. OVERVIEW */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Overview</h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-5xl">
            The Boys Hostel at IET provides an environment conducive to both rigorous academic study and personal development. Housing over 800 students across four major blocks, the facility serves as a hub for innovation and camaraderie.
          </p>
        </motion.div>

        {/* 3. ACCOMMODATION */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 uppercase">Accommodation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationBlocks.map((block) => (
              <motion.div 
                key={block.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#2C3E50] text-white p-8 min-h-[240px] flex flex-col justify-between rounded-2xl shadow-md border border-white/10"
              >
                <div>
                  <h3 className="text-2xl font-bold border-b border-white/30 pb-2 mb-4 uppercase tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90 font-medium">
                    {block.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. FACILITIES */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 uppercase">Infrastructure & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white border-2 border-slate-200 rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <h4 className="text-2xl font-bold mb-4 text-[#2C3E50] tracking-tight">{f.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. ADMINISTRATION - MATCHING PROVIDED IMAGE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Hostel Administration</h2>
          <div className="flex flex-wrap gap-8 items-stretch justify-center md:justify-start">
            {administration.map((admin, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row border border-[#3B7A9E] rounded-xl overflow-hidden bg-white max-w-xl flex-1"
              >
                <div className="flex-1 p-6 space-y-2 text-sm md:text-base">
                  <p className="text-gray-900"><span className="font-bold">Chief Warden:</span> {admin.name}</p>
                  <p className="text-gray-900"><span className="font-bold">Day Caretaker:</span> {admin.caretaker}</p>
                  <p className="text-gray-900"><span className="font-bold">Support Staff:</span> {admin.staff}</p>
                  <p className="text-gray-900"><span className="font-bold">Contact:</span> {admin.contact}</p>
                </div>
                {admin.image && (
                  <div className="w-full sm:w-48 h-48 relative border-t sm:border-t-0 sm:border-l border-[#3B7A9E]">
                    <img 
                      src={admin.image} 
                      alt={admin.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. FEE STRUCTURE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Fee Structure</h2>
          <div className="bg-[#2C3E50] text-white p-12 shadow-2xl rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-6 gap-4">
              <span className="text-xl uppercase tracking-widest">General Hostel Fee</span>
              <span className="text-4xl font-bold">₹25,000<small className="text-sm font-light ml-2">/ year</small></span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <span className="text-xl uppercase tracking-widest">Mess Subscription</span>
              <span className="text-4xl font-bold">₹2,800 <small className="text-sm font-light ml-2">/ month</small></span>
            </div>
          </div>
        </section>

        {/* 7. QUICK FACTS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Quick Facts</h2>
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {quickFacts.map((fact, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row border-b border-slate-100 last:border-b-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
              >
                <div className="md:w-1/3 p-6 bg-slate-900/5 font-bold text-slate-800 uppercase tracking-wide">
                  {fact.label}
                </div>
                <div className="md:w-2/3 p-6 text-gray-600">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}