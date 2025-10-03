// components/administration/directorData.ts

export interface DirectorProfile {
  name: string;
  image: string;
  designation: string[];
  contact: {
    email: string;
    phone: string;
  };
  qualifications: string[];
  experience: string;
  interests: string[];
  publications: string[];
  responsibilities: string[];
}

// components/administration/directorData.ts (UPDATED to reflect Dr. Pratosh Bansal)

export interface DirectorProfile {
  name: string;
  image: string;
  designation: string[];
  contact: {
    email: string;
    phone: string;
  };
  qualifications: string[];
  experience: string; // Used for the main introduction text block
  interests: string[];
  publications: string[];
  responsibilities: string[];
}

export const directorData: DirectorProfile = {
  name: "Dr. Pratosh Bansal", // Using a reliable image link from the HOD list for consistency
  image: "https://www.ietdavv.edu.in/images/Faculty/Pratosh-Bansal.JPG",
  designation: [
    "Director, Institute of Engineering & Technology (IET)", // From image text
    "Professor, Civil Engineering Department", // From HOD list
    "Devi Ahilya Vishwavidyalaya, Indore (M.P.) India",
  ],
  contact: {
    // Using the email shown at the bottom of the image for contact details
    email: "director@ietdavv.edu.in", // Using phone from the HOD list for a phone number
    phone: "+91 94250 45326",
  }, // NOTE: The 'experience' field is used to hold the large introduction text block in your component logic
  experience:
    "Dr. Pratosh Bansal is result oriented academician and administrator. On 10th July 2025, he has joined as Director of the Institute of Engineering & Technology (IET). With a B.E. in Mechanical Engineering and M.Tech. degrees in Energy Management and Computer Science, Dr Pratosh awarded with a Ph.D. in Computer Engineering in 2011. After joining in the year 1999 to DAVV, Dr. Bansal has contributed significantly to academic innovation, institutional development, and quality assurance in Higher Education System. He played a key role in establishing technical laboratories, institutional MIS, AICTE and NAAC compliance frameworks, and university automation systems. He is also Director-IQAC and Director-Centre for Distance and Online Education of the University. He has also represented academia in industry, serving on deputation as Group CEO of a chemical enterprise to implement system-based process management. His areas of interest include ERP, Knowledge Management, Digital Forensics, Green IT, and Energy Systems. Dr Pratosh Bansal is Principal Investigator for 100 Cr ANRF-PAIR Project with IIT Indore as Hub.", // Information derived from the introduction text
  qualifications: [
    "Ph.D. in Computer Engineering (2011)",
    "M.Tech. degrees in Energy Management and Computer Science",
    "B.E. in Mechanical Engineering",
  ],
  interests: [
    "ERP (Enterprise Resource Planning)",
    "Knowledge Management",
    "Digital Forensics",
    "Green IT",
    "Energy Systems",
  ],
  responsibilities: [
    "Director, Institute of Engineering & Technology (IET)",
    "Director-IQAC and Director-Centre for Distance and Online Education of the University",
    "Principal Investigator for 100 Cr ANRF-PAIR Project with IIT Indore as Hub",
  ], // Publications details were not provided in the introduction text, using a placeholder
  publications: [
    "Multiple Publications in Digital Forensics, Knowledge Management, and Energy Systems (as per research interests)",
  ],
};

// components/administration/AdminOffice.tsx
export interface Admindata {
  name: string;
  image: string;
  designation: string;
  contact: {
    email: string;
    phone: string;
    mobile: string;
  };
  AcademicDetails: string[];
  AdministrativeExperience: string;
  TeachingExperience: string[];
  PapersPresented: string[];
}

export const admindata: Admindata = {
  name: "Dr. Paresh Atri",
  image: "https://www.ietdavv.edu.in/images/Faculty/Paresh_Atri.jpg",
  designation:
    "Having an overall experience of 25 years and is associated with this Institute from its formative years in 1998.He is a PhD in Management and Post Graduate with MBA from Devi Ahilya University. He has vast experience in Administration and teaching the allied subjects at IET along with Management subjects in various departments of the University. ",
  contact: {
    email: "p_atri@rediffmail.com",
    mobile: "91-9977820281 ",
    phone: "91-94253 17939",
  },
  AcademicDetails: [
    "PhD from Devi Ahilya Vishwavidyalaya",
    "MBA(e - Commerce) ",
    "Bachelor of Science ",
    "Diploma in Electronics and Telecommunication ",
    "Certificate in Computing",
    "Object Oriented Programming with C++",
    "Diploma in Computer Hardware",
    "Application of UNIX and UNIFY",
    "Applications of Microprocessors",
  ],
  AdministrativeExperience:
    "Responsible for campus facilities and smooth functioning of the Administrative Office which includes supervising admissions, accounting and other administrative activities.",
  TeachingExperience: [
    "Humanities & Engg. Economics",
    "Management Information Systems",
    "Entrepreneurship Development & IPR",
    "MIS, SAD, Managerial Economics",
    "Information Systems in Healthcare ",
  ],
  PapersPresented: [
    "Electronic Payments: Methodology for Adaptation in Govt. Organizations",
    "Smart Governance, An Institutional Case Study",
    "Assessment of Manpower requirement in IT industry",
  ],
};

// components/administration/AdminOffice.tsx
export interface Department {
  name: string;
  image: string;
  email: string;
  phone: string;
  designation: string;
  background: string;
  researchInterests: string;
}

export const departments: Department[] = [
  {
    name: "Dr. Sanjiv Tokekar",
    image: "/Administration/sanjiv.png",
    email: "stokekar@ietdavv.edu.in",
    phone: "+91 94253 22306",
    designation: "Professor and Head, Electronics and Telecommunication",
    background:
      "BE/BTECH. (1982), MTECH. (1985), Ph.D. (Electronics Engineering) (1996)",
    researchInterests:
      "Computer Networking, Computer Architecture, Performance evaluation of computer systems, Microcontrollers.",
  },
  {
    name: "Dr. (Mrs.) Vrinda Tokekar",
    image: "/Administration/vrinda.png",
    email: "vtokekar@ietdavv.edu.in",
    phone: "+91 94253 17939",
    designation: "Professor and Head, Information Technology Department",
    background: "BE/BTECH., MTECH., Ph.D.",
    researchInterests:
      "Multimedia Communication, Performance Evaluation of Computer Communication Systems, Wireless Network Protocols.",
  },
  {
    name: "Dr. Ashesh Tiwari",
    image: "https://www.ietdavv.edu.in/images/new_images/Ashesh-Tiwari.jpg",
    email: "atiwari@ietdavv.edu.in",
    phone: "+91 98269 41506",
    designation: "Professor and Head, Mechanical Engineering Department",
    background: "BE/BTECH., MTECH., Ph.D.",
    researchInterests:
      "Condition monitoring and diagnostic maintenance, Fault diagnosis of compressors & other rotodynamic machines, Tribology, Machine design, Material science, Vibration & noise control, Instrumentation & automatic control, Failure of Material.",
  },
  {
    name: "Dr. Ajay Verma",
    image: "https://www.ietdavv.edu.in/images/Faculty/ajayverma.jpg",
    email: "averma@ietdavv.edu.in",
    phone: "+91 96178 01687",
    designation:
      "Professor and Head, Electronics and Instrumentation Department",
    background: "BE/BTECH., MTECH., Ph.D.",
    researchInterests: "Image Processing, Thermodynamics of solid materials.",
  },
  {
    name: "Dr. G.L. Prajapati",
    image: "https://www.ietdavv.edu.in/images/Faculty/G.L.-Prajapati.jpg",
    email: "glprajapati@ietdavv.edu.in",
    phone: "+91 98266 69205",
    designation: "Professor and Head, Computer Engineering Department",
    background: "BE/BTECH., MTECH., Ph.D.",
    researchInterests:
      "Data Structures and Algorithms, Machine Learning, Formal Language Theory, Automata Theory, Artificial Intelligence, Soft Computing, Bioinformatics.",
  },
  {
    name: "Dr. Shashi Prakash",
    image: "https://www.ietdavv.edu.in/images/new_images/sashi.jpg",
    email: "sprakash@ietdavv.edu.in",
    phone: "+91 99771 86156",
    designation: "Professor and Head, Applied Science Department",
    background: "M.Sc., MTECH., Ph.D.",
    researchInterests:
      "Optical Metrology, Laser-based Instrumentation, Optical Networks.",
  },
  {
    name: "Dr. Pratosh Bansal",
    image: "https://www.ietdavv.edu.in/images/Faculty/Pratosh-Bansal.JPG",
    email: "pbansal@ietdavv.edu.in",
    phone: "+91 94250 45326",
    designation: "Professor and Head, Civil Engineering Department",
    background: "BE/BTECH., MTECH., Ph.D.",
    researchInterests:
      "Digital Forensics, Knowledge Management, Information Security, E-Commerce, Enterprise Resource Planning.",
  },
];
