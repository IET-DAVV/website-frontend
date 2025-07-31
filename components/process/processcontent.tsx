"use client";
import React from "react";
import "@/styles/fonts.css";
import { motion } from "framer-motion";

export default function ProcessContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-gray-800 space-y-10 px-4 sm:px-10"
    >
      {/* Contact Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <p className="text-lg font-medium text-center text-gray-700">
          Note: For More Information Regarding Admissions Contact : Dr Paresh
          Atri (m): 9893593622
        </p>
        <hr className="my-6 border-gray-300" />
      </motion.div>

      {/* UG Admission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-2xl text-black font-newyork font-bold mb-5">
          Admission Process B.E. (FULL–TIME)
        </h2>

        <div>
          <h3 className="font-bold text-[#06779B]">Eligibility For Admission:</h3>
          <p>
            Admission is offered to a candidate who has qualified in 10+2 examination and appeared in IIT-JEE examination.
            Admission process is strictly in accordance with the rules and regulation of Directorate of Technical Education (DTE), Bhopal. 
            Reservation rules are mentioned thereof. Admission shall normally be done in the months of July/August every year.
            <br />
            <span className="font-medium">
              Please regularly check website of DTE Bhopal.
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Admission Process:</h3>
          <p>
            Admission process shall take place through counselling conducted by DTE, Bhopal through Counselling Authority and its nodal centres in MP.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Registration:</h3>
          <p>
            The admitted student shall be required to register for the program in each semester separately as per the schedule announced in the beginning of the semester. 
            Registration shall be closed after an announced stipulated date.
          </p>
        </div>
      </motion.div>

      {/* PG Admission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold font-newyork mb-5">
          FOR POSTGRADUATE PROGRAM (M.E.)
        </h2>

        <p>
          I.E.T. is presently offering 2-year full time & 3-year part time post graduate degree programs in the following branches with six different Specialization as given below:
        </p>

        <ul className="list-disc list-outside pl-6">
          <li>Computer Engineering with specialization in Software Engineering</li>
          <li>Information Technology with specialization in Information Security</li>
          <li>Electronics Engineering with specialization in Digital Instrumentation</li>
          <li>Electronics Engineering with specialization in Digital Communication</li>
          <li>Industrial Engineering & Management</li>
          <li>Mechanical Engineering with specialization in Design & Thermal Engineering</li>
        </ul>

        <div>
          <h3 className="font-semibold text-[#06779B]">Eligibility for Admission:</h3>
          <ul className="list-disc list-outside text-base pl-6">
            <li>
              A candidate seeking admission should have passed with 60% (or equivalent) in BE/BTech in an allied branch from a recognized University.
            </li>
            <li>
              Regular candidates should have a valid GATE Score in the relevant/allied branch of Engg/Tech.
            </li>
            <li>
              Sponsored candidates should have two years of work experience after BE/BTech.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Note:</h3>
          <ul className="list-disc list-outside text-base text-gray-700 pl-6">
            <li>5% relaxation for SC/ST/Sponsored candidates.</li>
            <li>
              Final year or non-GATE students can apply. Preference to GATE-qualified candidates.
            </li>
            <li>
              Financial assistance only for GATE-qualified Full Time students. No jobs allowed during full-time study.
            </li>
            <li>
              Sponsored full-time candidates must complete program in 4 semesters.
            </li>
            <li>
              Part-time ME is conducted 6–9 PM for working sponsored candidates.
            </li>
            <li>
              If changing employer, new sponsorship proof must be submitted.
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
