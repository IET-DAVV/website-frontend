"use client";
import React, { useState, useEffect } from "react";
import "@/styles/fonts.css";
export default function ProcessContent() {
  return (
    <section className="text-gray-800 space-y-10">
      <div className="mt-10">
        <p className="text-lg font-medium text-bold text-center text-gray-700">
          Note: For More Information Regarding Admissions Contact : Dr Paresh
          Atri (m): 9893593622
        </p>
        <hr className="my-6 border-gray-300" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-black font-newyork font-bold mb-5">
          Admission Process B.E. (FULL–TIME)
        </h2>

        <div>
          <h3 className="font-bold text-[#06779B]">
            Eligibility For Admission:
          </h3>
          <p>
            Admission is offered to a candidate who has qualified in 10+2
            examination and appeared in IIT-JEE examination. Admission process
            is strictly in accordance with the rules and regulation of
            Directorate of Technical Education (DTE), Bhopal. Reservation rules
            are mentioned thereof. Admission shall normally be done in the
            months of July/August every year.
            <br />
            <span className=" font-medium">
              Please regularly check website of DTE Bhopal.
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Admission Process:</h3>
          <p>
            Admission process shall take place through counselling conducted by
            DTE, Bhopal through Counselling Authority and its nodal centres in
            MP.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Registration:</h3>
          <p>
            The admitted student shall be required to register for the program
            in each semester separately as per the schedule announced in the
            beginning of the semester. Registration shall be closed after an
            announced stipulated date.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-newyork mb-5">
          FOR POSTGRADUATE PROGRAM (M.E.)
        </h2>

        <p>
          I.E.T. is presently offering 2-year full time & 3-year part time post
          graduate degree programs in the following branches with six different
          Specialization as given below:
        </p>

        <ul className="list-disc list-outside pl-6">
          <li>
            Computer Engineering with specialization in Software Engineering
          </li>
          <li>
            Information Technology with specialization in Information Security
          </li>
          <li>
            {" "}
            Electronics Engineering with specialization in Digital
            Instrumentation{" "}
          </li>
          <li>
            {" "}
            Electronics Engineering with specialization in Digital Communication
          </li>
          <li> Industrial Engineering & Management</li>
          <li>
            {" "}
            Mechanical Engineering with specialization in Design & Thermal
            Engineering{" "}
          </li>
        </ul>

        <div>
          <h3 className="font-semibold text-[#06779B]">
            Eligibility for Admission:
          </h3>
          <ul className="list-disc list-outside text-base pl-6">
            <li>
              A candidate seeking admission to the program should have passed
              with 60% (or equivalent) in BE/BTech (or equivalent) in an allied
              branch of engineering from a recognized/ University.{" "}
            </li>
            <li>
              Regular candidates should have a valid GATE Score in the relevant/
              allied branch of Engg/ Tech.{" "}
            </li>
            <li>
              The sponsored candidates should have two years of work experience
              after BE/BTech degree.{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#06779B]">Note:</h3>
          <ul className="list-disc list-outside text-base text-gray-700 pl-6">
            <li>
              There is relaxation of 5% in the eligibility for SC/ ST/ Sponsored
              candidates.
            </li>
            <li>
              Candidates appearing in final year examor non-GATE students may
              also apply. Such candidates must mention the cumulative % marks as
              per norms of their University while filling the application form.
              Preference shall be given to GATE qualified candidates.{" "}
            </li>
            <li>
              Financial Assistance may be available only to GATE qualified Full
              Time candidates as per AICTE norms. The full time students shall
              not be permitted to take any job. The Institute reserves right to
              cancel their admission immediately if a defaulter is noticed.
            </li>
            <li>
              Full time sponsored candidates are required to complete the
              program in 4 semesters. They shall not be allowed to join back the
              sponsoring organization before the completion of this period.{" "}
            </li>
            <li>
              ME Program in Part Time shall be conducted in the evening (6-9PM)
              and is offered to only to working sponsored candidates.
            </li>
            <li>
              In case, the candidate is changing the employment, it shall be the
              responsibility of the candidate to produce the fresh the
              sponsorship from the new employer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
