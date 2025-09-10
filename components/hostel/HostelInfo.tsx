"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdmissionSection {
  id: string;
  title: string;
  content: string;
}

const AdmissionComponent = () => {
  const [selectedSection, setSelectedSection] = useState<string>("rules");

  const admissionData: AdmissionSection[] = [
  {
    id: "adminssion",
    title: "ADMISSION",
    content: `Admissions are conducted strictly on merit as per the guidelines of the State Government and the affiliating university. 
Candidates must fulfill the prescribed eligibility criteria for the respective courses. 
The admission process generally includes:
  
1. Online registration through the official admission portal.
2. Submission of required academic and personal documents.
3. Payment of the prescribed application fee.
4. Participation in counseling rounds based on entrance exam or qualifying marks.

Selected candidates must confirm their admission by submitting the original documents and paying the first installment of the fees within the given timeline. Late submissions may result in cancellation of the allotted seat.`,
  },
  {
    id: "rules",
    title: "RULES",
    content: `All students are expected to maintain discipline and decorum within the campus premises. 
The following rules must be adhered to at all times:

• Attendance: A minimum of 75% attendance is mandatory in all subjects to be eligible for examinations.  
• Conduct: Any form of ragging, harassment, or disruptive behavior is strictly prohibited and will invite disciplinary action.  
• Campus Property: Students must take care of institutional property; any damage will be charged to the responsible individual.  
• Dress Code: Students must follow the prescribed dress code on academic days, laboratory sessions, and official events.  
• Hostel Rules: Hostel residents must adhere to entry/exit timings, maintain cleanliness, and respect the privacy of fellow residents.`,
  },
  {
    id: "facilities",
    title: "FACILITIES",
    content: `Our institution is equipped with modern infrastructure and amenities to ensure the overall development of students:

• Academic Facilities: Well-equipped laboratories, smart classrooms, a fully automated library, and high-speed Wi-Fi across campus.  
• Hostel Accommodation: Separate, fully furnished hostels for boys and girls with 24/7 security, nutritious meals, and recreational areas.  
• Sports & Recreation: Indoor and outdoor sports facilities, gymnasium, and cultural activity spaces to encourage extracurricular engagement.  
• Medical Support: On-campus medical room with a qualified doctor and nurse, along with tie-ups with nearby hospitals for emergencies.  
• Career Support: Placement cell for career counseling, skill development programs, and industry connect sessions.`,
  },
  {
    id: "fee-structure",
    title: "FEE STRUCTURE",
    content: `The fee structure is transparent and reviewed annually as per institutional guidelines:

• Undergraduate Programs (BE/BTECH. Full-Time): ₹80,000 – ₹1,20,000 per year (depending on branch).  
• Hostel Charges: ₹25,000 – ₹35,000 per year (excluding mess charges).  
• Mess Charges: ₹2,000 – ₹2,500 per month.  
• Additional Fees: Examination fee, library fee, and refundable security deposit.

Scholarships and concessions are available for meritorious students, economically weaker sections, and under government schemes. 
Fee payment can be made in installments through online or offline modes. Late fee charges will apply if deadlines are missed.`,
  },
];


  const currentSection = admissionData.find(
    (item) => item.id === selectedSection
  ) || admissionData[0];

return (
    <motion.div
      layout
      className="bg-gray-50 py-10 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Navigation */}
        <div className="lg:col-span-1 flex flex-col justify-center space-y-6 border-r border-gray-300 pr-4">
          {admissionData.map((section) => {
            const isActive = selectedSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`relative text-lg md:text-xl font-light tracking-wide transition-colors duration-300 text-left ${
                  isActive
                    ? "text-dark-blue font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -left-4 top-1/4 -translate-y-1/2 w-1.5 h-4 bg-dark-blue rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                )}
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          layout
          className="lg:col-span-3"
        >
          <motion.div
            layout
            className="max-w-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {currentSection.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdmissionComponent;