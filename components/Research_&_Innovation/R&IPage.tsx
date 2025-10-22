"use client";
import React from "react";
import { motion } from "framer-motion";

// Enhanced color palette matching your screenshots (teal-blue gradient and elegant whites)
const COLORS = {
  primary: "#3B7A9E",
  accent: "#2E5C7E",
  bgLight: "#F8FBFD",
  bgWhite: "#FFFFFF",
  textDark: "#1E293B",
  textMuted: "#64748B",
};

// Elegant Title component with gradient text
const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-12 md:my-16">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-serif font-semibold tracking-wide uppercase bg-clip-text text-transparent"
      style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})` }}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "7rem" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-1 mx-auto mt-4 rounded-full"
      style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})` }}
    />
  </div>
);

// Layout wrapper for content
const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="max-w-6xl w-full px-6 md:px-8 mx-auto my-12 md:my-20 leading-relaxed text-justify">
    {children}
  </div>
);

// CONSULTANCY & MOU's PAGE
export const ConsultancyPage: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans py-12"
      style={{ background: `linear-gradient(180deg, ${COLORS.bgLight}, ${COLORS.bgWhite})`, color: COLORS.textDark }}
    >
      <Title title="Consultancy & MOU's" />

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>Technical</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>The MOU has been signed with NICT Pvt. Ltd Indore to develop the product "Non-invasive Blood Glucometer." <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>The MOU has been signed with Olee Space Pvt. Ltd. Pune to develop a product in Optical Wireless Communication. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>MOU with Shree Pacetronix Ltd., Pithampur (14 March 2022) to design and develop an ASIC chip "iPACE-CHIP" under the C2S initiative by MeitY, Govt. of India. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>The Institute signed an MOU with IIT Indore for 2022-23; students explored research labs and interacted with faculty. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>MOU with VLSI Society of India (VSI) on 18 March 2024 to support chip design, EDA tools, and semiconductor education. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>Society / Ethical</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>MOU for project “Satark” with Bridgestone Tyres India Pvt. Ltd, TRAX Society, and Indore Traffic Police (26 Oct 2021). <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>Collaboration with IIT Indore (2022-23); student internship by Mr. Shrey Pathak under Prof. Shaibal Mukherjee. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>Joint research with IIT Indore, IIT Jammu, IET-DAVV, and ABV-IIITDM Gwalior for Pacemaker Chip design. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>Non-Disclosure Agreements (NDA)</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>NDA with Europractice IC Service, Belgium for UMC PDK access (180nm, 90nm, 65nm, 45nm). <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
              <li>NDA with Semi-Conductor Laboratory (SCL), Mohali for 180nm PDK research usage. <span className="underline" style={{ color: COLORS.accent }}>(Click Here)</span></li>
            </ol>
          </div>

          <p className="text-sm italic" style={{ color: COLORS.textMuted }}>Last updated: 2024</p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

// INNOVATION CENTRE PAGE
export const InnovationCentrePage: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans py-12"
      style={{ background: `linear-gradient(180deg, ${COLORS.bgWhite}, ${COLORS.bgLight})`, color: COLORS.textDark }}
    >
      <Title title="Innovation Centre" />

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-lg"
        >
          <div className="md:col-span-2 space-y-5">
            <p>
              The Devi Ahilya Vishwavidyalaya Incubation Centre (DAVV-IC) is a Section 8 company
              fostering a thriving ecosystem for technology incubation and entrepreneurship. It
              promotes innovation, job creation, and sustainable business development.
            </p>
            <p>
              DAVV-IC offers a platform for startups emerging from academia to evolve ideas into
              viable enterprises. The centre is registered under CIN No. U80901MP2022NPL063927 and
              holds 12A & 80G certifications along with CSR registration.
            </p>
            <p>
              The forum connects innovators, mentors, and investors through networking, mentorship,
              and technical and financial support, enabling startups to scale effectively.
            </p>

            <button
              className="mt-2 inline-block px-6 py-2.5 rounded-lg text-white font-medium shadow-md transition-transform duration-200 hover:scale-105"
              style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})` }}
            >
              Explore More
            </button>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <img
              src={'/mnt/data/Innovation Cell.png'}
              alt="Innovation Centre"
              className="w-full max-w-sm rounded-xl shadow-xl border border-gray-200"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-[15px] leading-relaxed"
          style={{ color: COLORS.textMuted }}
        >
          <p>
            The Innovation Centre provides mentorship, domain expertise, and workspace for early-stage
            startups. It connects innovators with industry leaders, venture capital networks, and
            accelerators, providing end-to-end incubation support from concept validation to
            commercialization.
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

// Preview Component
const PagesPreview: React.FC = () => (
  <div className="space-y-32">
    <ConsultancyPage />
    <InnovationCentrePage />
  </div>
);

export default PagesPreview;                                                                                                   