// dont change the export variable and read all the comments
"use client";
import React from "react";
import { motion } from "framer-motion";

// import Title from "../common/academics/Title"; // use if global Title component exists

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-10 md:my-16">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-serif font-bold text-sky-800"
    >
      {title}
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "6rem" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-24 h-1 mx-auto mt-4 rounded bg-sky-800"
    />
  </div>
);

const SectionTitle: React.FC<{ subtitle: string }> = ({ subtitle }) => (
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="text-2xl md:text-3xl font-semibold text-sky-700 mt-10 mb-4 text-center"
  >
    {subtitle}
  </motion.h2>
);

const RIPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans px-4 md:px-12 py-10 leading-relaxed">
      {/* Main Page Title */}
      <Title title="Research and Innovation" />

      {/* Consultancy & MoU Section */}
      <SectionTitle subtitle="Consultancy & MoU’s" />

      <div className="max-w-5xl mx-auto text-justify space-y-6">
        <h3 className="text-xl font-semibold text-sky-800">a) Technical</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            The MOU has been signed with NICT Pvt. Ltd Indore to develop the
            Product “Non-invasive blood glucometer”.
          </li>
          <li>
            The MOU has been signed with Olee Space Pvt. Ltd. Pune to develop
            the Product in Optical Wireless Communication.
          </li>
          <li>
            Department has signed a Memorandum of Understanding (MOU) with
            “Shree Pacetronix Ltd, Pithampur” on 14th March 2022 to design and
            develop an ASIC Chip “PACE-CHIP” for Pacemaker under the
            Chip-to-Startup (C2S) initiative of the Ministry of Electronics and
            Information Technology (MeitY) Govt. of India.
          </li>
          <li>
            The Institute has signed MOU with IIT Indore for 2022–23 session. As
            per MOU, students of the department visited IIT Indore to see the
            latest research work, interacted with faculty & research scholars of
            IIT Indore.
          </li>
          <li>
            Department has signed MOU with VLSI Society of India (VSI) on 18th
            March 2024. VSI provides technical training regarding EDA tools,
            organizing conferences, short-term courses, and facilitating
            semiconductor know-how within the Institute.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-sky-800">b) Society/Ethical</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Department has signed a Memorandum of Understanding (MOU) for the
            project “Satark” — an initiative of Bridgestone Tyres India Pvt.
            Ltd, implemented by TRAXS Society with Indore Traffic Police to
            raise Road Safety Awareness (26/10/2021).
          </li>
          <li>
            Department has collaboration with IIT Indore during 2022–2023
            session. Under this collaboration, Mr. Shrey Pathak completed a
            4-week internship at IIT Indore under Prof. Shubhail Mukherjee.
          </li>
          <li>
            Department has collaboration with IIT Indore, IIT Jammu, IET-DAVV
            Indore, and ABV-IIITM Gwalior to design and develop ASIC blocks of
            Pacemaker Chip “Shree Pacetronix Ltd, Pithampur”. Research scholars
            and faculty members interact and share research facilities across
            these institutes.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-sky-800">
          Non-Disclosure Agreements (NDA)
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            The department has signed a Non-Disclosure Agreement (NDA) with
            Europractice IC Service, Belgium to provide the UMC Process Design
            Kit (PDK) for research and education purposes, including access to
            180nm, 90nm, 65nm, and 45nm CMOS technologies.
          </li>
          <li>
            The department has also signed NDA with Semi-Conductor Laboratory
            (SCL), Mohali, Govt. of India, for using SCL PDK of 180nm for
            research and education.
          </li>
        </ol>
      </div>

      {/* Innovation Cell / Incubation Centre Section */}
      <SectionTitle subtitle="Innovation Cell / Incubation Centre" />

      <div className="max-w-5xl mx-auto text-justify space-y-6">
        <p>
          Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a Section
          8 company designed to foster a vibrant ecosystem of technology
          incubation and entrepreneurship. By aligning with national priorities,
          DAVV-IC aims to generate employment, create wealth, and build
          successful businesses.
        </p>
        <p>
          The center provides a nurturing environment for emerging startups,
          particularly those originating from academia, to help them transition
          from innovative ideas to scalable, sustainable businesses. DAVV-IC is
          registered under CIN No. <b>U80901MP2022NPL063927</b> and has obtained{" "}
          <b>12A</b> & <b>80G</b> certificates for tax exemptions and CSR
          registration.
        </p>
        <p>
          The DAVV Incubation Forum aims to connect budding entrepreneurs,
          startups, and mentors by providing resources, networking
          opportunities, and a platform to showcase innovative ideas.
        </p>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-sky-700 text-white rounded-lg shadow-md hover:bg-sky-800 transition"
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RIPage;
