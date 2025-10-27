"use client";
import React from "react";
import { motion } from "framer-motion";

// Enhanced color palette matching your screenshots (teal-blue gradient and elegant whites)
/*const COLORS = {
  primary: "#3B7A9E",
  accent: "#2E5C7E",
  bgLight: "#F8FBFD",
  bgWhite: "#FFFFFF",
  textDark: "#1E293B",
  textMuted: "#64748B",
};*/

// Elegant Title component with gradient text
const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-12 md:my-16">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
            font-newyork font-normal text-gray-800
            text-4xl leading-[44px]
            sm:text-5xl sm:leading-[60px]
            md:text-6xl md:leading-[80px]
            lg:text-[60px] lg:leading-[80px]`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "7rem" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-1 mx-auto mt-4 rounded-full"
      
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
     
    >
      <Title title="CONSULTANCY & MOU's" />

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4" >Technical</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>The MOU has been signed with NICT Pvt. Ltd Indore to develop the product "Non-invasive Blood Glucometer." <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4" 
              ><a href="https://www.example.com/project-details">(Click Here)
          </a></span></li>
              <li>The MOU has been signed with Olee Space Pvt. Ltd. Pune to develop a product in Optical Wireless Communication. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>MOU with Shree Pacetronix Ltd., Pithampur (14 March 2022) to design and develop an ASIC chip "iPACE-CHIP" under the C2S initiative by MeitY, Govt. of India. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>The Institute signed an MOU with IIT Indore for 2022-23; students explored research labs and interacted with faculty. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>MOU with VLSI Society of India (VSI) on 18 March 2024 to support chip design, EDA tools, and semiconductor education. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Society / Ethical</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>MOU for project “Satark” with Bridgestone Tyres India Pvt. Ltd, TRAX Society, and Indore Traffic Police (26 Oct 2021). <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>Collaboration with IIT Indore (2022-23); student internship by Mr. Shrey Pathak under Prof. Shaibal Mukherjee. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>Joint research with IIT Indore, IIT Jammu, IET-DAVV, and ABV-IIITDM Gwalior for Pacemaker Chip design. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Non-Disclosure Agreements (NDA)</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>NDA with Europractice IC Service, Belgium for UMC PDK access (180nm, 90nm, 65nm, 45nm).<span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
              <li>NDA with Semi-Conductor Laboratory (SCL), Mohali for 180nm PDK research usage. <span className="underline text-base text-gray-700 leading-relaxed text-justify mb-4"><a href="https://www.example.com/project-details">(Click Here)</a></span></li>
            </ol>
          </div>

          
        </motion.div>
      </SectionWrapper>
    </div>
  );
};





export default ConsultancyPage;