<<<<<<< HEAD
// app/hostel/page.tsx
import React from "react";
import HostelHero from "@/components/hostel/HostelHero";
import Overview from "@/components/hostel/Overview";
import Accommodation from "@/components/hostel/Accommodation";
import Facilities from "@/components/hostel/Facilities";
import Rules from "@/components/hostel/Rules";
import Administration from "@/components/hostel/Administration";
import AdmissionFee from "@/components/hostel/AdmissionFee";
import Activities from "@/components/hostel/Activities";
import QuickFacts from "@/components/hostel/QuickFacts";

export const metadata = {
  title: "Girls' Hostel • IET DAVV",
  description: "Safe. Supportive. Self-sufficient. — Girls' Hostel info, facilities, admissions, fees.",
};

export default function HostelPage() {
  return (
<main className="bg-white text-gray-800">
  <HostelHero />

  <div className="max-w-screen mx-auto px-6 md:px-10 space-y-6 mt-16 md:mt-12 mb-8">
    <Overview />
    <Accommodation />
    <Facilities />
    <Rules />
    <Administration />
    <AdmissionFee />
    <Activities />
    <QuickFacts />
  </div>
</main>
);
=======
"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// --- Data Structures ---
const accommodationBlocks = [
  { id: 'A', title: 'Block A', desc: 'Third-year students | Double occupancy rooms' },
  { id: 'B', title: 'Block B', desc: 'First-year students & Warden House | Triple & four-sharing rooms' },
  { id: 'C', title: 'Block C', desc: 'Final-year, M.Sc. & Ph.D | Single occupancy rooms' },
  { id: 'D', title: 'Block D', desc: 'Second & Final-year students | Double occupancy rooms' },
];

const facilities = [
  { title: "Wi-Fi & LAN", desc: "High-speed connectivity in each room (block-specific)." },
  { title: "Mess Facility", desc: "Nutritious vegetarian meals with weekly specials." },
  { title: "Recreation Hall", desc: "Includes Table Tennis, Chess & Carrom (access with permission)." },
  { title: "Medical Aid", desc: "First-aid kits and warden-supervised hospital visits." },
  { title: "Laundry", desc: "Two washing machines in A Block." },
  { title: "Security", desc: "24/7 guards, CCTV, and fire extinguishers on each floor." },
];

const quickFacts = [
  { label: "Total Blocks", value: "A, B, C, D + Warden House + Kitchen House" },
  { label: "Occupancy", value: "Single, Double, Triple, Four-sharing" },
  { label: "Security", value: "24x7 guards, CCTV" },
  { label: "Mess", value: "On-campus, vegetarian" },
  { label: "Attendance", value: "8:30 PM mandatory" },
  { label: "Special Features", value: "Wi-Fi, Geysers, Fire safety, Pad Dispensers" },
];

const administration = [
  {
    role: "Hostel Warden",
    name: "Jyoti Hawelia",
    caretaker: "Shobha Aunty",
    staff: "7+ female staff & security guards on shifts",
    contact: "[Email / Extension]",
    image: "/warden-image.png" // Update with actual path
  },
  {
    role: "Hostel Warden",
    name: "[Name]",
    caretaker: "Shobha Aunty",
    staff: "7+ female staff & security guards on shifts",
    contact: "[Email / Extension]",
    image: null
  }
];

export default function HostelPage() {
  return (
    <main className="min-h-screen bg-white font-manrope">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#3B7A9E] min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-newyork mb-4 uppercase tracking-tighter"
        >
          Girl&apos;s Hostel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase opacity-90"
        >
          Safe. Supportive. Self-sufficient.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* 2. OVERVIEW */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Overview of the Hostel</h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-5xl">
            The Girls Hostel at the Institute of Engineering and Technology (IET) provides a secure, comfortable, and inclusive living environment for female students. Located within the main campus, it comprises four blocks — A, B, C, and D — along with a Warden House and Kitchen House.
          </p>
        </motion.div>

        {/* 3. ACCOMMODATION DETAILS */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 uppercase"
          >
            Accommodation Details
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {accommodationBlocks.map((block) => (
              <motion.div 
                key={block.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
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
          </motion.div>
        </section>

        {/* 4. FACILITIES */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 uppercase"
          >
            Facilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-8 bg-white border-2 border-[#A8C7DA] rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <h4 className="text-2xl font-bold mb-4 text-[#3B7A9E] tracking-tight">
                  {f.title}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. RULES & REGULATIONS */}
        <section className="grid lg:grid-cols-5 gap-12 mb-24 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Hostel Rules & Regulations</h2>
            <ul className="space-y-4 text-lg text-gray-700 list-disc pl-5">
              <li>Attendance before 8:30 PM is MANDATORY for all hostel residents.</li>
              <li>Leave forms must be signed by the Warden; parents must be involved.</li>
              <li>Visitors permitted only during specified hours with prior approval.</li>
              <li>Smoking, alcohol, and ragging are strictly prohibited.</li>
            </ul>
          </div>
          <div className="lg:col-span-2 bg-gray-100 p-4 rounded-2xl shadow-inner aspect-square flex items-center justify-center text-gray-500 italic">
            Rules Notice Board Image
          </div>
        </section>

         {/* 8. HOSTEL ADMINISTRATION */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Hostel Administration</h2>
          <div className="relative flex items-center gap-4">
            <button className="hidden md:block text-gray-300 hover:text-[#3B7A9E] transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {administration.map((admin, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row border-2 border-[#3B7A9E]/20 rounded-3xl overflow-hidden bg-white shadow-sm"
                >
                  <div className="flex-1 p-8 space-y-3">
                    <p className="text-lg"><span className="font-bold text-[#3B7A9E]">Hostel Warden:</span> {admin.name}</p>
                    <p className="text-gray-700"><span className="font-bold">Day Caretaker:</span> {admin.caretaker}</p>
                    <p className="text-gray-700"><span className="font-bold">Support Staff:</span> {admin.staff}</p>
                    <p className="text-gray-700"><span className="font-bold">Contact:</span> {admin.contact}</p>
                  </div>

                </motion.div>
              ))}
            </div>

            <button className="hidden md:block text-gray-300 hover:text-[#3B7A9E] transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>

        {/* 6. ADMISSION & FEE STRUCTURE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Hostel Admission & Fee Structure</h2>
          <div className="bg-[#3B7A9E] text-white p-12 shadow-2xl rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-6 mb-6 gap-4">
              <span className="text-xl uppercase tracking-widest">Annual Hostel Fee</span>
              <span className="text-4xl font-bold">₹25,000<small className="text-sm font-light ml-2">/ year</small></span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <span className="text-xl uppercase tracking-widest">Mess Charges</span>
              <span className="text-4xl font-bold">₹2,500 <small className="text-sm font-light ml-2">/ month</small></span>
            </div>
          </div>
        </section>

        {/* 7. QUICK FACTS TABLE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase">Quick Facts</h2>
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
>>>>>>> dev
}