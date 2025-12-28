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

// --- Data Structures (Loremized) ---
const accommodationBlocks = [
  { id: '1', title: 'Lorem Block A', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '2', title: 'Lorem Block B', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { id: '3', title: 'Lorem Block C', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: '4', title: 'Lorem Block D', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
];

const facilities = [
  { title: "Lorem Ipsum", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
  { title: "Dolor Sit", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { title: "Amet Consectetur", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { title: "Adipiscing Elit", desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { title: "Sed Do", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut." },
  { title: "Eiusmod Tempor", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor." },
];

const quickFacts = [
  { label: "Lorem Label", value: "Lorem ipsum dolor sit amet" },
  { label: "Lorem Occupancy", value: "Consectetur, Adipiscing, Elit" },
  { label: "Lorem Security", value: "Sed do eiusmod tempor" },
  { label: "Lorem Mess", value: "Incididunt ut labore et" },
  { label: "Lorem Curfew", value: "00:00 PM (Lorem Ipsum)" },
  { label: "Lorem Features", value: "Dolore, Magna, Aliqua" },
];

const administration = [
  {
    role: "Lorem Role",
    name: "Dr. Lorem Ipsum",
    caretaker: "Mr. Dolor Sit",
    staff: "12+ lorem ipsum staff",
    contact: "lorem.ipsum@example.com",
    image: null
  },
  {
    role: "Lorem Role",
    name: "Mr. Amet Consectetur",
    caretaker: "Mr. Adipiscing",
    staff: "24/7 lorem ipsum",
    contact: "ext. 000",
    image: null
  }
];

export default function BoysHostelPage() {
  return (
    <main className="min-h-screen bg-white font-manrope">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#3B7A9E] min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-newyork mb-4 uppercase tracking-tighter"
        >
          Boys Hostel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase opacity-90"
        >
          Lorem. Ipsum. Dolor.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* 2. OVERVIEW */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Lorem Overview</h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </motion.div>

        {/* 3. ACCOMMODATION */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 uppercase">Lorem Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationBlocks.map((block) => (
              <motion.div 
                key={block.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#3B7A9E] text-white p-8 min-h-[240px] flex flex-col justify-between rounded-2xl shadow-md border border-white/10"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 uppercase">Lorem Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-white border-2 border-[#A8C7DA] rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <h4 className="text-2xl font-bold mb-4 text-[#3B7A9E] tracking-tight">{f.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. ADMINISTRATION */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Lorem Administration</h2>
          <div className="flex flex-wrap gap-8 items-stretch justify-center md:justify-start">
            {administration.map((admin, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row border-2 border-[#3B7A9E]/20 rounded-3xl overflow-hidden bg-white shadow-sm max-w-xl flex-1"
              >
                <div className="flex-1 p-8 space-y-3 text-sm md:text-base">
                  <p className="text-lg"><span className="font-bold text-[#3B7A9E]">{admin.role}:</span> {admin.name}</p>
                  <p className="text-gray-700"><span className="font-bold">Caretaker:</span> {admin.caretaker}</p>
                  <p className="text-gray-700"><span className="font-bold">Staff:</span> {admin.staff}</p>
                  <p className="text-gray-700"><span className="font-bold">Contact:</span> {admin.contact}</p>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Lorem Fees</h2>
          <div className="bg-[#3B7A9E] text-white p-12 shadow-2xl rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-6 mb-6 gap-4">
              <span className="text-xl uppercase tracking-widest">Lorem Fee 1</span>
              <span className="text-4xl font-bold">₹00,000<small className="text-sm font-light ml-2">/ year</small></span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <span className="text-xl uppercase tracking-widest">Lorem Fee 2</span>
              <span className="text-4xl font-bold">₹0,000 <small className="text-sm font-light ml-2">/ month</small></span>
            </div>
          </div>
        </section>

        {/* 7. QUICK FACTS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Lorem Facts</h2>
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {quickFacts.map((fact, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row border-b border-gray-100 last:border-b-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="md:w-1/3 p-6 bg-[#3B7A9E]/5 font-bold text-[#3B7A9E] uppercase tracking-wide">
                  {fact.label}
                </div>
                <div className="md:w-2/3 p-6 text-gray-700">
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