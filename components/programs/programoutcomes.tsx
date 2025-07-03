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
        "IET DAVV’s CSE program builds strong foundations in logic, programming, and mathematics, equipping students to develop efficient software solutions and solve computational problems using core computer science techniques.",
        "IET DAVV includes courses in algorithms, operating systems, computer networks, and compiler design, training students to understand complex systems and software architecture through hands-on lab work.",
        "IET DAVV emphasizes practical learning in Python, Java, databases, and software engineering, enabling students to develop full-stack applications and backend systems aligned with industry practices.",
        "IET DAVV offers electives like machine learning, blockchain, and cloud computing, helping students explore cutting-edge technologies and develop niche skills for future tech roles.",
        "IET DAVV enhances student growth with hackathons, seminars, workshops, and internships that improve technical exposure, creativity, and workplace readiness in computer science domains.",
        "IET DAVV concludes with a final-year project and viva voce, where students design, implement, and present innovative computing solutions to demonstrate their software engineering and problem-solving skills."
      ],

      "Information Technology": [
        "IET DAVV’s IT program begins with data structures, logic design, and programming fundamentals, building a strong foundation in problem-solving and computational thinking for modern software development careers.",
        "IET DAVV includes core subjects such as database systems, operating systems, computer networks, and software engineering with lab components to reinforce practical understanding of system design and implementation.",
        "IET DAVV provides exposure to full-stack development, mobile computing, and cloud infrastructure, enabling students to develop scalable web-based and distributed applications.",
        "IET DAVV offers electives in machine learning, cybersecurity, IoT, and blockchain to align technical knowledge with emerging domains in the evolving IT landscape.",
        "IET DAVV enhances communication, team collaboration, and documentation skills through seminars, workshops, and mini-projects integrated across multiple semesters.",
        "IET DAVV concludes with a capstone project and viva voce, where students develop a complete IT solution using industry practices and demonstrate its functionality through prototype or deployment."
      ],

      "Mechanical Engineering": [
        "IET DAVV’s Mechanical program starts with engineering mechanics, thermodynamics, and materials science, grounding students in physical laws and material behavior.",
        "IET DAVV delivers machine design, thermal engineering, and manufacturing processes supported by labs to ensure practical exposure to tools and machining systems.",
        "IET DAVV integrates CAD/CAM, fluid mechanics, and heat transfer courses to develop competencies in analysis, simulation, and product design.",
        "IET DAVV offers electives like robotics, 3D printing, and renewable energy systems to align with evolving technologies in mechanical design and sustainability.",
        "IET DAVV emphasizes teamwork, presentation, and technical writing through structured projects and group-based coursework.",
        "IET DAVV ends with a major mechanical design or simulation project and viva voce focused on real-world problem solving and engineering demonstration."
      ],

      "Civil Engineering": [
        "IET DAVV’s Civil program builds core knowledge in structural engineering, surveying, fluid mechanics, and geotechnical concepts essential for infrastructure design and construction.",
        "IET DAVV includes concrete design, steel structures, and environmental engineering courses with labs to develop sustainable building practices and safety management skills.",
        "IET DAVV integrates fieldwork and software training (like AutoCAD, STAAD Pro) for realistic project planning and structural simulation.",
        "IET DAVV offers electives such as transportation, earthquake engineering, and smart city planning to prepare graduates for modern challenges.",
        "IET DAVV builds soft skills and project management capability through seminars, assignments, and collaborative exercises.",
        "IET DAVV concludes the degree with a practical project and viva voce, demonstrating field readiness and civil engineering competence."
      ],

      "Electronics & Telecommunication Engineering": [
        "IET DAVV’s ENTC program begins with analog electronics, digital circuits, and signal systems, laying a foundation in electronic communication and embedded applications.",
        "IET DAVV includes advanced courses in communication systems, microwave engineering, microprocessors, and digital signal processing for real-world telecommunication system design.",
        "IET DAVV offers lab components with MATLAB, circuit simulation, PCB design, and wireless communication tools to enhance hands-on learning.",
        "IET DAVV provides electives in mobile communication, VLSI design, satellite systems, and IoT to reflect modern trends in telecommunication and networking.",
        "IET DAVV emphasizes mini-projects, teamwork, and seminars to improve project management, collaboration, and presentation skills across semesters.",
        "IET DAVV concludes with a final-year major project and viva voce evaluating knowledge integration, communication system design, and hardware-software development skills."
      ],

      "Electronics & Instrumentation Engineering": [
        "IET DAVV’s EI program covers sensors, signal conditioning, and instrumentation fundamentals for automation and industrial measurement systems.",
        "IET DAVV offers subjects in transducers, biomedical instrumentation, industrial electronics, and embedded systems to provide hands-on technical expertise.",
        "IET DAVV includes MATLAB, LABVIEW, and PLC lab modules that develop software-hardware interfacing and system monitoring capabilities.",
        "IET DAVV encourages specialization with electives like robotics, SCADA, instrumentation networks, and smart sensors to match current industrial demands.",
        "IET DAVV fosters communication and documentation skills via seminars, group projects, and presentations to develop holistic engineering professionals.",
        "IET DAVV concludes the course with a major project and viva voce where students demonstrate automation or instrumentation-based innovations."
      ],

      "Computer Science & Business System (CSBS)": [
        "IET DAVV’s CSBS program integrates core computer science with business analytics, teaching students to use technology for solving enterprise challenges and driving strategic digital transformation.",
        "IET DAVV teaches programming, data structures, and system design along with finance, marketing, and operations to bridge technical knowledge with organizational strategy and decision-making.",
        "IET DAVV offers courses in cloud computing, AI, business process modeling, and entrepreneurship to develop adaptable, innovation-focused graduates for corporate digital ecosystems.",
        "IET DAVV includes case studies, team projects, and real-world simulations where students solve business problems using software tools and computing logic.",
        "IET DAVV emphasizes professional skills through industry interactions, group discussions, presentations, and collaborative workshops that simulate corporate environments.",
        "IET DAVV ends with a project and viva voce requiring students to build and present a business-focused software system aligned with analytical and computational business needs."
      ]

    },
    "btech-part": {
      "Computer Science Engineering": [
        "IET DAVV’s CSE program builds strong foundations in logic, programming, and mathematics, equipping students to develop efficient software solutions and solve computational problems using core computer science techniques.",
        "IET DAVV includes courses in algorithms, operating systems, computer networks, and compiler design, training students to understand complex systems and software architecture through hands-on lab work.",
        "IET DAVV emphasizes practical learning in Python, Java, databases, and software engineering, enabling students to develop full-stack applications and backend systems aligned with industry practices.",
        "IET DAVV offers electives like machine learning, blockchain, and cloud computing, helping students explore cutting-edge technologies and develop niche skills for future tech roles.",
        "IET DAVV enhances student growth with hackathons, seminars, workshops, and internships that improve technical exposure, creativity, and workplace readiness in computer science domains.",
        "IET DAVV concludes with a final-year project and viva voce, where students design, implement, and present innovative computing solutions to demonstrate their software engineering and problem-solving skills."
      ],
      "Information Technology": [
        "IET DAVV’s IT program begins with data structures, logic design, and programming fundamentals, building a strong foundation in problem-solving and computational thinking for modern software development careers.",
        "IET DAVV includes core subjects such as database systems, operating systems, computer networks, and software engineering with lab components to reinforce practical understanding of system design and implementation.",
        "IET DAVV provides exposure to full-stack development, mobile computing, and cloud infrastructure, enabling students to develop scalable web-based and distributed applications.",
        "IET DAVV offers electives in machine learning, cybersecurity, IoT, and blockchain to align technical knowledge with emerging domains in the evolving IT landscape.",
        "IET DAVV enhances communication, team collaboration, and documentation skills through seminars, workshops, and mini-projects integrated across multiple semesters.",
        "IET DAVV concludes with a capstone project and viva voce, where students develop a complete IT solution using industry practices and demonstrate its functionality through prototype or deployment."
      ],
      "Mechanical Engineering": [
        "IET DAVV’s Mechanical program starts with engineering mechanics, thermodynamics, and materials science, grounding students in physical laws and material behavior.",
        "IET DAVV delivers machine design, thermal engineering, and manufacturing processes supported by labs to ensure practical exposure to tools and machining systems.",
        "IET DAVV integrates CAD/CAM, fluid mechanics, and heat transfer courses to develop competencies in analysis, simulation, and product design.",
        "IET DAVV offers electives like robotics, 3D printing, and renewable energy systems to align with evolving technologies in mechanical design and sustainability.",
        "IET DAVV emphasizes teamwork, presentation, and technical writing through structured projects and group-based coursework.",
        "IET DAVV ends with a major mechanical design or simulation project and viva voce focused on real-world problem solving and engineering demonstration."
      ],
      "Electronics & Telecommunication Engineering": [
        "IET DAVV’s ENTC program begins with analog electronics, digital circuits, and signal systems, laying a foundation in electronic communication and embedded applications.",
        "IET DAVV includes advanced courses in communication systems, microwave engineering, microprocessors, and digital signal processing for real-world telecommunication system design.",
        "IET DAVV offers lab components with MATLAB, circuit simulation, PCB design, and wireless communication tools to enhance hands-on learning.",
        "IET DAVV provides electives in mobile communication, VLSI design, satellite systems, and IoT to reflect modern trends in telecommunication and networking.",
        "IET DAVV emphasizes mini-projects, teamwork, and seminars to improve project management, collaboration, and presentation skills across semesters.",
        "IET DAVV concludes with a final-year major project and viva voce evaluating knowledge integration, communication system design, and hardware-software development skills."
      ],
      "Electronics & Instrumentation Engineering": [
        "IET DAVV’s EI program covers sensors, signal conditioning, and instrumentation fundamentals for automation and industrial measurement systems.",
        "IET DAVV offers subjects in transducers, biomedical instrumentation, industrial electronics, and embedded systems to provide hands-on technical expertise.",
        "IET DAVV includes MATLAB, LABVIEW, and PLC lab modules that develop software-hardware interfacing and system monitoring capabilities.",
        "IET DAVV encourages specialization with electives like robotics, SCADA, instrumentation networks, and smart sensors to match current industrial demands.",
        "IET DAVV fosters communication and documentation skills via seminars, group projects, and presentations to develop holistic engineering professionals.",
        "IET DAVV concludes the course with a major project and viva voce where students demonstrate automation or instrumentation-based innovations."
      ],
    },
    "me-full": {
      "Computer Engineering with specialization in Software Engineering": [
        "IET DAVV’s M.E. in Software Engineering begins with advanced architecture, UML, and design patterns, preparing students for enterprise-level system design and integration projects.",
        "IET DAVV enhances proficiency in Java, concurrency, web frameworks, and API development through structured labs and practical software construction exercises.",
        "IET DAVV offers electives in cloud computing, machine learning, DevOps, and mobile computing, helping students specialize in high-demand areas of today's software and systems engineering domain.",
        "IET DAVV emphasizes teamwork, Agile project management, and documentation by embedding industry workflows such as Scrum and quality assurance within its course delivery model.",
        "IET DAVV cultivates research through technical seminars, literature reviews, and a minor project, allowing students to explore current trends and innovations in software engineering.",
        "IET DAVV concludes the program with a full-cycle major project, requiring development, testing, presentation, and viva voce based on applied software engineering concepts and design methodology."
      ],
      "Information Technology with specialization in Information Security": [
        "IET DAVV’s Information Security program introduces cryptography, secure protocols, and access control, helping students build foundational knowledge of cyber threats, data integrity, and digital privacy management.",
        "IET DAVV reinforces concepts through practical labs using tools like Wireshark, Metasploit, and firewalls to test, monitor, and enhance digital security infrastructure across networks and devices.",
        "IET DAVV provides electives in blockchain, cloud security, forensics, and malware analysis to equip students with expertise in modern and emerging cybersecurity technologies.",
        "IET DAVV strengthens ethical understanding, policy compliance, and secure software practices through specialized modules covering cyber laws, industry standards, and responsible digital behavior.",
        "IET DAVV supports academic research through technical paper reviews, vulnerability assessments, and seminar presentations that address practical security issues in real-world digital systems.",
        "IET DAVV ends with a dissertation project and viva, where students design and validate a complete information security solution for enterprise or cloud-based environments."
      ],

      "Mechanical Engineering with specialization in Design & Thermal Engineering": [
        "IET DAVV's Mechanical Engineering program begins with advanced mechanics, heat transfer, and design theory, building analytical foundations for solving complex engineering problems across thermal, structural, and production systems.",
        "IET DAVV includes lab work in CAD/CAM, finite element methods, and computational fluid dynamics to simulate and evaluate mechanical system behavior using modern software tools.",
        "IET DAVV offers electives in robotics, additive manufacturing, nanotechnology, and composite materials to align students with emerging innovations in product development and smart manufacturing.",
        "IET DAVV emphasizes optimization, reliability engineering, and industrial automation to improve system performance, reduce costs, and increase safety in engineering applications.",
        "IET DAVV builds soft skills through seminars, group presentations, and project documentation, preparing students for leadership, teaching, or research careers in mechanical engineering.",
        "IET DAVV concludes with a major project and viva voce, where students design, fabricate, or simulate mechanical systems addressing industry challenges or sustainability goals."
      ],
      "Electronics Engineering with specialization in Digital Communication": [
        "IET DAVV’s Digital Communication program introduces modulation techniques, wireless systems, and coding theory, establishing a core understanding of real-time communication processes and signal transmission principles.",
        "IET DAVV uses MATLAB, Simulink, and hardware design labs to simulate and implement algorithms for speech, data, and video communication applications.",
        "IET DAVV offers electives in IoT communications, optical fiber systems, MIMO, and mobile networks, keeping the curriculum aligned with next-generation communication technologies.",
        "IET DAVV promotes skill development in RF circuit design, antenna modeling, and network performance evaluation through guided laboratory experiments and tool-based simulations.",
        "IET DAVV develops research aptitude through presentations, mini projects, and technical seminars on current digital communication standards, protocols, and architectures.",
        "IET DAVV finalizes the course with a project and oral defense, where students demonstrate advanced communication solutions involving both hardware and software components."
      ],

      "Electronics Engineering with specialization in Digital Instrumentation": [
        "IET DAVV’s Digital Instrumentation program begins with control theory, signal conditioning, and sensor technology, forming a base for real-time measurement, automation, and system integration.",
        "IET DAVV offers lab experience in MATLAB, LabVIEW, and embedded system programming, enabling practical testing and analysis of complex instrumentation setups.",
        "IET DAVV features electives in biomedical instrumentation, IoT, process automation, and robotics, aligning student capabilities with industrial and research advancements.",
        "IET DAVV strengthens research methodology through technical seminars, literature reviews, and a guided minor project centered on instrumentation design challenges.",
        "IET DAVV supports ethical design, documentation skills, and product validation workflows for instrumentation systems used in medical, industrial, and scientific environments.",
        "IET DAVV completes the course with a project and viva, requiring demonstration of a digitally integrated system for monitoring, automation, or control applications."
      ],

      "Industrial Engineering & Management": [
        "IET DAVV’s Industrial Engineering program teaches operations research, production systems, and facility design, emphasizing optimization of resources, process efficiency, and organizational productivity.",
        "IET DAVV trains students in statistical quality control, Six Sigma, and ERP systems using simulation-based labs and real industrial case studies.",
        "IET DAVV integrates electives in lean systems, supply chain modeling, safety engineering, and maintenance management, enabling specialization in modern industrial problem-solving areas.",
        "IET DAVV includes cost estimation, project scheduling, and resource allocation strategies that bridge technical and managerial aspects of engineering operations.",
        "IET DAVV builds leadership and decision-making skills through communication training, group presentations, and interactive planning assignments across project management modules.",
        "IET DAVV concludes with a major dissertation project and viva that applies industrial engineering concepts to improve existing systems in real manufacturing or service industries."
      ],

    },
    "me-part": {
      "Computer Engineering with specialization in Software Engineering": [
        "IET DAVV’s M.E. in Software Engineering begins with advanced architecture, UML, and design patterns, preparing students for enterprise-level system design and integration projects.",
        "IET DAVV enhances proficiency in Java, concurrency, web frameworks, and API development through structured labs and practical software construction exercises.",
        "IET DAVV offers electives in cloud computing, machine learning, DevOps, and mobile computing, helping students specialize in high-demand areas of today's software and systems engineering domain.",
        "IET DAVV emphasizes teamwork, Agile project management, and documentation by embedding industry workflows such as Scrum and quality assurance within its course delivery model.",
        "IET DAVV cultivates research through technical seminars, literature reviews, and a minor project, allowing students to explore current trends and innovations in software engineering.",
        "IET DAVV concludes the program with a full-cycle major project, requiring development, testing, presentation, and viva voce based on applied software engineering concepts and design methodology."
      ],
      "Information Technology with specialization in Information Security": [
        "IET DAVV’s Information Security program introduces cryptography, secure protocols, and access control, helping students build foundational knowledge of cyber threats, data integrity, and digital privacy management.",
        "IET DAVV reinforces concepts through practical labs using tools like Wireshark, Metasploit, and firewalls to test, monitor, and enhance digital security infrastructure across networks and devices.",
        "IET DAVV provides electives in blockchain, cloud security, forensics, and malware analysis to equip students with expertise in modern and emerging cybersecurity technologies.",
        "IET DAVV strengthens ethical understanding, policy compliance, and secure software practices through specialized modules covering cyber laws, industry standards, and responsible digital behavior.",
        "IET DAVV supports academic research through technical paper reviews, vulnerability assessments, and seminar presentations that address practical security issues in real-world digital systems.",
        "IET DAVV ends with a dissertation project and viva, where students design and validate a complete information security solution for enterprise or cloud-based environments."
      ],

      "Mechanical Engineering with specialization in Design & Thermal Engineering": [
        "IET DAVV's Mechanical Engineering program begins with advanced mechanics, heat transfer, and design theory, building analytical foundations for solving complex engineering problems across thermal, structural, and production systems.",
        "IET DAVV includes lab work in CAD/CAM, finite element methods, and computational fluid dynamics to simulate and evaluate mechanical system behavior using modern software tools.",
        "IET DAVV offers electives in robotics, additive manufacturing, nanotechnology, and composite materials to align students with emerging innovations in product development and smart manufacturing.",
        "IET DAVV emphasizes optimization, reliability engineering, and industrial automation to improve system performance, reduce costs, and increase safety in engineering applications.",
        "IET DAVV builds soft skills through seminars, group presentations, and project documentation, preparing students for leadership, teaching, or research careers in mechanical engineering.",
        "IET DAVV concludes with a major project and viva voce, where students design, fabricate, or simulate mechanical systems addressing industry challenges or sustainability goals."
      ],
      "Electronics Engineering with specialization in Digital Communication": [
        "IET DAVV’s Digital Communication program introduces modulation techniques, wireless systems, and coding theory, establishing a core understanding of real-time communication processes and signal transmission principles.",
        "IET DAVV uses MATLAB, Simulink, and hardware design labs to simulate and implement algorithms for speech, data, and video communication applications.",
        "IET DAVV offers electives in IoT communications, optical fiber systems, MIMO, and mobile networks, keeping the curriculum aligned with next-generation communication technologies.",
        "IET DAVV promotes skill development in RF circuit design, antenna modeling, and network performance evaluation through guided laboratory experiments and tool-based simulations.",
        "IET DAVV develops research aptitude through presentations, mini projects, and technical seminars on current digital communication standards, protocols, and architectures.",
        "IET DAVV finalizes the course with a project and oral defense, where students demonstrate advanced communication solutions involving both hardware and software components."
      ],

      "Electronics Engineering with specialization in Digital Instrumentation": [
        "IET DAVV’s Digital Instrumentation program begins with control theory, signal conditioning, and sensor technology, forming a base for real-time measurement, automation, and system integration.",
        "IET DAVV offers lab experience in MATLAB, LabVIEW, and embedded system programming, enabling practical testing and analysis of complex instrumentation setups.",
        "IET DAVV features electives in biomedical instrumentation, IoT, process automation, and robotics, aligning student capabilities with industrial and research advancements.",
        "IET DAVV strengthens research methodology through technical seminars, literature reviews, and a guided minor project centered on instrumentation design challenges.",
        "IET DAVV supports ethical design, documentation skills, and product validation workflows for instrumentation systems used in medical, industrial, and scientific environments.",
        "IET DAVV completes the course with a project and viva, requiring demonstration of a digitally integrated system for monitoring, automation, or control applications."
      ],

      "Industrial Engineering & Management": [
        "IET DAVV’s Industrial Engineering program teaches operations research, production systems, and facility design, emphasizing optimization of resources, process efficiency, and organizational productivity.",
        "IET DAVV trains students in statistical quality control, Six Sigma, and ERP systems using simulation-based labs and real industrial case studies.",
        "IET DAVV integrates electives in lean systems, supply chain modeling, safety engineering, and maintenance management, enabling specialization in modern industrial problem-solving areas.",
        "IET DAVV includes cost estimation, project scheduling, and resource allocation strategies that bridge technical and managerial aspects of engineering operations.",
        "IET DAVV builds leadership and decision-making skills through communication training, group presentations, and interactive planning assignments across project management modules.",
        "IET DAVV concludes with a major dissertation project and viva that applies industrial engineering concepts to improve existing systems in real manufacturing or service industries."
      ],

    },
  };

  const branchOutcomes = selectedBranch
    ? outcomesMap[selectedCourse]?.[selectedBranch] || []
    : [];

  if (!selectedBranch) {
    return <p className="text-center font-bold text-black text-xl mt-10">Select a branch to see outcomes.</p>;
  }

  return (
    <div className="mt-24">
      <h2 className="text-center  text-6xl font-newyork mb-12">Program Outcomes</h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-8 px-24">
        {branchOutcomes.map((outcome, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-dark-blue font-bold text-3xl mb-4 border-b-2 border-slate inline-block ">{`0${idx + 1}`}</h3>
            <p className="text-sm text-slate-700">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOutcomes;
