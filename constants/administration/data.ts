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

export const directorData: DirectorProfile = {
  name: "Dr. Vernda Tokakar",
  image: "https://www.ietdavv.edu.in/images/Faculty/vrinda.jpg",
  designation: [
    "Professor, Director & Head of Department",
    "Information Technology",
    "Institute of Engineering & Technology",
    "Devi Ahilya University, Indore (M.P.) India",
  ],
  contact: {
    email: "vtokekar@ietdavv.edu",
    phone: "91-94253 17939",
  },
  qualifications: [
    "B.E. (Hons.) in Electrical & Electronics Engineering from BITS Pilani – (1984)",
    "B.E. (Hons.) in Electrical & Electronics Engineering from BITS Pilani – (1984)",
    "Ph.D. (Computer Engineering) from DAVV, Indore – (2007)",
  ],
  experience:
    "Over 30 years of academic and research experience in Electronics and Computer Engineering",
  interests: [
    "Computer Networking",
    "Distributed Computing",
    "Security in Wireless Networks",
    "e-Governance",
    "Multimedia Communication",
    "Software Engineering Computer  Communication Systems",
  ],
  publications: [
    "25 Journal Papers",
    "35 Conference Papers",
    "8 National Conference Papers",
  ],
  responsibilities: [
    "In-Charge, IT Centre at Devi Ahilya Vishwavidyalaya",
    "Member, UGC-Accessibility Guidelines Committee",
    "Director / Centralized Placement Cell (CPC) – IET DAVV",
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
    image: "https://www.ietdavv.edu.in/images/new_images/sanjiv.jpg",
    email: "stokekar@ietdavv.edu.in",
    phone: "+91 94253 22306",
    designation: "Professor and Head, Electronics and Telecommunication",
    background:
      "B.E. (1982), M.E. (1985), Ph.D. (Electronics Engineering) (1996)",
    researchInterests:
      "Computer Networking, Computer Architecture, Performance evaluation of computer systems, Microcontrollers.",
  },
  {
    name: "Dr. (Mrs.) Vrinda Tokekar",
    image: "https://www.ietdavv.edu.in/images/Faculty/vrinda.jpg",
    email: "vtokekar@ietdavv.edu.in",
    phone: "+91 94253 17939",
    designation: "Professor and Head, Information Technology Department",
    background: "B.E., M.E., Ph.D.",
    researchInterests:
      "Multimedia Communication, Performance Evaluation of Computer Communication Systems, Wireless Network Protocols.",
  },
  {
    name: "Dr. Ashesh Tiwari",
    image: "https://www.ietdavv.edu.in/images/new_images/Ashesh-Tiwari.jpg",
    email: "atiwari@ietdavv.edu.in",
    phone: "+91 98269 41506",
    designation: "Professor and Head, Mechanical Engineering Department",
    background: "B.E., M.Tech., Ph.D.",
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
    background: "B.E., M.Tech., Ph.D.",
    researchInterests: "Image Processing, Thermodynamics of solid materials.",
  },
  {
    name: "Dr. G.L. Prajapati",
    image: "https://www.ietdavv.edu.in/images/Faculty/G.L.-Prajapati.jpg",
    email: "glprajapati@ietdavv.edu.in",
    phone: "+91 98266 69205",
    designation: "Professor and Head, Computer Engineering Department",
    background: "B.Tech., M.Tech., Ph.D.",
    researchInterests:
      "Data Structures and Algorithms, Machine Learning, Formal Language Theory, Automata Theory, Artificial Intelligence, Soft Computing, Bioinformatics.",
  },
  {
    name: "Dr. Shashi Prakash",
    image: "https://www.ietdavv.edu.in/images/new_images/sashi.jpg",
    email: "sprakash@ietdavv.edu.in",
    phone: "+91 99771 86156",
    designation: "Professor and Head, Applied Science Department",
    background: "M.Sc., M.Tech., Ph.D.",
    researchInterests:
      "Optical Metrology, Laser-based Instrumentation, Optical Networks.",
  },
  {
    name: "Dr. Pratosh Bansal",
    image: "https://www.ietdavv.edu.in/images/Faculty/Pratosh-Bansal.JPG",
    email: "pbansal@ietdavv.edu.in",
    phone: "+91 94250 45326",
    designation: "Professor and Head, Civil Engineering Department",
    background: "B.E., M.Tech., Ph.D.",
    researchInterests:
      "Digital Forensics, Knowledge Management, Information Security, E-Commerce, Enterprise Resource Planning.",
  },
];
