"use client";
import React from "react";

interface ProgramOutcomesProps {
  selectedCourse: string;
  selectedBranch: string | null;
}

const ProgramOutcomes: React.FC<ProgramOutcomesProps> = ({ selectedCourse, selectedBranch }) => {
  const outcomesMap: Record<string, Record<string, string[]>> = {
    "btech-full": {
      "Computer Science Engineering": [
        "CS: Understand core computer science concepts.",
        "CS: Design and analyze algorithms.",
        "CS: Build scalable software systems.",
        "CS: Apply AI and machine learning.",
        "CS: Work with databases and big data.",
        "CS: Ensure software quality and security."
      ],
      "Information Technology": [
        "IT: Master networking and security principles.",
        "IT: Develop web and mobile applications.",
        "IT: Manage cloud infrastructure.",
        "IT: Implement cybersecurity solutions.",
        "IT: Integrate IoT technologies.",
        "IT: Deliver IT support and services."
      ],
      "Mechanical Engineering": [
        "Mech: Understand mechanical systems design.",
        "Mech: Apply thermodynamics concepts.",
        "Mech: Use CAD/CAM tools effectively.",
        "Mech: Conduct material strength analysis.",
        "Mech: Execute manufacturing processes.",
        "Mech: Maintain industrial machinery."
      ],
      "Civil Engineering": [
        "Civil: Plan and design civil structures.",
        "Civil: Apply geotechnical principles.",
        "Civil: Ensure sustainable construction.",
        "Civil: Use AutoCAD and STAAD Pro.",
        "Civil: Manage construction sites.",
        "Civil: Implement safety standards."
      ],
      "Electronics & Telecommunication Engineering ": [
        "E&T: Understand communication systems.",
        "E&T: Design RF circuits.",
        "E&T: Apply signal processing techniques.",
        "E&T: Work on IoT communication modules.",
        "E&T: Develop wireless protocols.",
        "E&T: Ensure EMC compliance."
      ],
      "Electronics & Instrumentation Engineering": [
        "EI: Design instrumentation systems.",
        "EI: Integrate sensors and actuators.",
        "EI: Develop control systems.",
        "EI: Apply signal conditioning methods.",
        "EI: Automate industrial processes.",
        "EI: Maintain precision instruments."
      ],
      "Computer Science & Business System (CSBS)": [
        "CSBS: Blend computing with business insights.",
        "CSBS: Use analytics for decision making.",
        "CSBS: Build business-friendly software.",
        "CSBS: Apply AI to business problems.",
        "CSBS: Understand financial systems.",
        "CSBS: Ensure ethical tech use."
      ]
    },
    "btech-part": {
      "Computer Science Engineering": [
        "CS PT: Learn core CS concepts part-time.",
        "CS PT: Write efficient code.",
        "CS PT: Develop small-scale applications.",
        "CS PT: Manage IT projects.",
        "CS PT: Understand basic cybersecurity.",
        "CS PT: Work on weekend labs."
      ],
      "Information Technology": [
        "IT PT: Understand IT infra basics.",
        "IT PT: Work on network setup.",
        "IT PT: Manage small-scale databases.",
        "IT PT: Build simple websites.",
        "IT PT: Learn basic cloud concepts.",
        "IT PT: Apply IT in business contexts."
      ],
      "Mechanical Engineering": [
        "Mech PT: Apply design principles.",
        "Mech PT: Understand machine elements.",
        "Mech PT: Use CAD software.",
        "Mech PT: Study thermal engineering.",
        "Mech PT: Do workshop practices.",
        "Mech PT: Handle basic maintenance."
      ],
      "Electronics & Telecommunication Engineering ": [
        "E&T PT: Learn basic comm systems.",
        "E&T PT: Study circuit theory.",
        "E&T PT: Apply microcontroller concepts.",
        "E&T PT: Build small comm modules.",
        "E&T PT: Understand wireless basics.",
        "E&T PT: Do part-time lab work."
      ],
      "Electronics & Instrumentation Engineering": [
        "EI PT: Understand instrumentation basics.",
        "EI PT: Learn basic sensors/actuators.",
        "EI PT: Study control theory.",
        "EI PT: Use instrumentation software.",
        "EI PT: Maintain simple devices.",
        "EI PT: Apply safety standards."
      ]
    },
    "me-full": {
      "Computer Engineering with specialization in Software Engineering": [
        "SE: Design complex software systems.",
        "SE: Use design patterns effectively.",
        "SE: Work on distributed systems.",
        "SE: Ensure software testing.",
        "SE: Manage large projects.",
        "SE: Apply DevOps practices."
      ],
      "Information Technology with specialization in Information Security": [
        "IS: Secure networks and systems.",
        "IS: Conduct vulnerability assessment.",
        "IS: Apply encryption methods.",
        "IS: Manage security policies.",
        "IS: Respond to cyber threats.",
        "IS: Ensure data privacy."
      ],
      "Mechanical Engineering with specialization in Design & Thermal Engineering": [
        "Mech SE: Apply advanced design tools.",
        "Mech SE: Study heat transfer deeply.",
        "Mech SE: Design thermal systems.",
        "Mech SE: Analyze fluid flow.",
        "Mech SE: Use FEM tools.",
        "Mech SE: Optimize machine design."
      ],
      "Electronics Engineering with specialization in Digital Communication": [
        "DC: Design digital comm systems.",
        "DC: Work on 5G protocols.",
        "DC: Apply coding theory.",
        "DC: Simulate comm channels.",
        "DC: Develop mod/demod circuits.",
        "DC: Use digital signal processing."
      ],
      "Electronics Engineering with specialization in Digital Instrumentation": [
        "DI: Design digital instruments.",
        "DI: Integrate microcontrollers.",
        "DI: Develop embedded systems.",
        "DI: Automate measurements.",
        "DI: Work on medical instruments.",
        "DI: Ensure signal integrity."
      ],
      "Industrial Engineering & Management": [
        "IE: Optimize industrial processes.",
        "IE: Manage supply chains.",
        "IE: Apply lean techniques.",
        "IE: Ensure quality control.",
        "IE: Use project management tools.",
        "IE: Analyze cost efficiency."
      ]
    },
    "me-part": {
      "Computer Engineering with specialization in Software Engineering": [
        "SE PT: Develop modular software.",
        "SE PT: Apply testing principles.",
        "SE PT: Use basic design patterns.",
        "SE PT: Work on small projects.",
        "SE PT: Understand version control.",
        "SE PT: Ensure code quality."
      ],
      "Information Technology with specialization in Information Security": [
        "IS PT: Learn basic security.",
        "IS PT: Study access controls.",
        "IS PT: Apply basic cryptography.",
        "IS PT: Manage firewalls.",
        "IS PT: Respond to small-scale threats.",
        "IS PT: Ensure password policies."
      ],
      "Mechanical Engineering with specialization in Design & Thermal Engineering": [
        "Mech PT: Apply part-time design skills.",
        "Mech PT: Understand thermal basics.",
        "Mech PT: Use basic simulation tools.",
        "Mech PT: Learn machine elements.",
        "Mech PT: Do part-time lab work.",
        "Mech PT: Handle thermal systems."
      ],
      "Electronics Engineering with specialization in Digital Communication": [
        "DC PT: Understand digital comm basics.",
        "DC PT: Build small comm circuits.",
        "DC PT: Study modulation.",
        "DC PT: Work on part-time labs.",
        "DC PT: Learn signal basics.",
        "DC PT: Apply coding schemes."
      ],
      "Electronics Engineering with specialization in Digital Instrumentation": [
        "DI PT: Understand instrumentation basics.",
        "DI PT: Apply sensors and actuators.",
        "DI PT: Use simple controllers.",
        "DI PT: Automate simple tasks.",
        "DI PT: Work on small devices.",
        "DI PT: Ensure calibration."
      ],
      "Industrial Engineering & Management": [
        "IE PT: Apply process improvement.",
        "IE PT: Manage small teams.",
        "IE PT: Learn cost analysis.",
        "IE PT: Understand production basics.",
        "IE PT: Study quality checks.",
        "IE PT: Use simple management tools."
      ]
    }
  };

  const branchOutcomes = selectedBranch
    ? outcomesMap[selectedCourse]?.[selectedBranch] || []
    : [];

  if (!selectedBranch) {
    return <p className="text-center text-gray-500 mt-10">Select a branch to see outcomes.</p>;
  }

  return (
    <div className="mt-24">
      <h2 className="text-center text-4xl font-newyork mb-12">Program Outcomes</h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-8 px-24">
        {branchOutcomes.map((outcome, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-dark-blue font-bold text-xl mb-2">{`0${idx + 1}`}</h3>
            <p className="text-sm text-slate-700">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOutcomes;
