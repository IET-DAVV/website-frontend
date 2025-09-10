interface Subject {
  s_no: number;
  code: string;
  name: string;
  credits: string; // L-T-P format, e.g., "3-1-0"
  type: string;
  pdfLink: string; // Link to the syllabus PDF for this specific subject
}

// Update the Semester interface to hold an array of subjects
interface Semester {
  subjects: Subject[];
}

// The rest of the interfaces remain mostly the same
interface Branch {
  semesters: {
    [semester: string]: Semester;
  };
}

interface Course {
  courseName: string;
  branches: {
    [branchKey: string]: Branch;
  };
}

export interface SyllabusData {
  courses: {
    [courseKey: string]: Course;
  };
}

export const syllabusData: SyllabusData = {
  courses: {
    be_btech_full_time: {
      courseName: "BE/BTECH (Full Time)",
      branches: {
        "Computer Science and Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 3, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 4, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 5, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 6, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 7, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 3": {
              subjects: [
                { s_no: 1, code: "3ACRC1", name: "Applied Mathematics-III", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ACRC1.pdf" },
                { s_no: 2, code: "3CERC2", name: "OBJECT ORIENTED PROGRAMMING", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3CERC2.pdf" },
                { s_no: 3, code: "3CERC3", name: "DATA STRUCTURE", credits: "3-1-1", type: "PC1", pdfLink: "hhttps://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3CERC3.pdf" },
                { s_no: 4, code: "3CERC4", name: "DIGITAL ELECTRONICS", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/3CERC4.pdf" },
                { s_no: 5, code: "3CERG1", name: "COMPUTER ARCHITECTURE & ORGANIZATION", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3CERG1.pdf" },
                { s_no: 6, code: "3CERL1", name: "COMPUTER HARDWARE & IOT LAB", credits: "0-0-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3CERL1.pdf" },
                { s_no: 7, code: "3SCRS3", name: "ENVIRONMENTAL STUDIES", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3SCRS3.pdf" },
                { s_no: 8, code: "3CERV3", name: "Comprehensive Viva III", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3CERV3.pdf" },
              ]
            },
            "Semester 4": {
              subjects: [
                { s_no: 1, code: "4CERC1", name: "DISCRTE STRUCTURES", credits: "3-1-0", type: "PC1", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERC1.pdf ' },
                { s_no: 2, code: "4CERC2", name: "OPERATING SYSTEMS", credits: "3-1-1", type: "PC2", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERC2.pdf ' },
                { s_no: 3, code: "4CERC3", name: "MACHINE LEARNING", credits: "3-1-1", type: "PC3", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERC3.pdf ' },
                { s_no: 4, code: "4CERC4", name: "DATABASE MANAGEMENT SYSTEMS", credits: "3-1-1", type: "PC4", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERC4.pdf ' },
                { s_no: 5, code: "4CERG2", name: "COMPUTER GRAPHICS AND VISUALZATION", credits: "3-1-0", type: "PC5", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERG2.pdf ' },
                { s_no: 6, code: "4CERL2", name: "COMPUTER GRAPHICS AND VISUALZATION LAB", credits: "0-0-1", type: "SS1", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERL2.pdf ' },
                { s_no: 7, code: "4SCRS4", name: "ENGINEERING ECONOMICS", credits: "2-0-0", type: "Viva1", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4SCRS4.pdf ' },
                { s_no: 8, code: "4CERV4", name: "Comprehensive Viva IV", credits: "0-0-4", type: "Viva1", pdfLink: ' https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4CERV4.pdf ' },
              ],
            },
            "Semester 5": {
              subjects: [
                {
                  s_no: 1, code: "5CERC1", name: "THEORY OF COMPUTATION", credits: "3 - 1 - 0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC1pdf"
                },
                { s_no: 2, code: "5CERC2", name: "SOFTWARE ENGINEERING", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC2pdf" },
                { s_no: 3, code: "5CERC3", name: "COMPUTER NETWORKS", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC3pdf" },
                //TEXT HERE
                { s_no: 4, code: "5CERE1", name: "WEB TECHNOLOGIES", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE1.pdf" },
                { s_no: 4, code: "5CERE2", name: "SOFTWARE VULNERABILITIES AND SECURITY", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE2.pdf" },
                { s_no: 4, code: "5CERE3", name: "METHODS OF SOFTWARE DEVELOPMENT", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE3.pdf" },
                { s_no: 4, code: "5CERE4", name: "INTRODUCTION TO EMBEDDED SYSTEMS", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE4.pdf" },
                { s_no: 4, code: "5CERE5", name: "COMPUTER VISION AND IMAGE PROCESSING", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE5.pdf" },
                //
                { s_no: 5, code: "5CERG3", name: "INTRODUCTION TO DATA MINING", credits: "3-1-0", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERG3.pdf" },
                { s_no: 6, code: "5CERL3", name: "HANDS ON ANDROID PROGRAMMING LAB", credits: "0-0-1", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERL3.pdf" },
                { s_no: 7, code: "5SCRS5", name: "PROFESSIONAL DEVELOPMENT", credits: "2-0-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5SCRS5.pdf" },
                { s_no: 8, code: "5CERV5", name: "COMREHENSIVE VIVA -V", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERV5.pdf" },
              ],
            },
            "Semester 6": {
              subjects: [
                { s_no: 1, code: "6CERC1", name: "DESIGN AND ANALYSIS OF ALGORITHMS", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERC1pdf" },
                { s_no: 2, code: "6CERC2", name: "COMPILER TECHNIQUES", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERC2pdf" },
                { s_no: 3, code: "6CERC3", name: "DISTRIBUTED SYSTEMS", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERC3pdf" },
                //TEXT HERE
                { s_no: 4, code: "6CERE1", name: "SOFTWARE ENGINEERING PRACTICES", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERE1.pdf" },
                { s_no: 5, code: "6CERE2", name: "BIOINFORMATICS", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERE2.pdf" },
                { s_no: 6, code: "6CERE3", name: "DIGITAL IMAGE PROCESSING", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERE3.pdf" },
                { s_no: 7, code: "6CERE4", name: "ROBOTICS- AUTONOMOUS SYSTEMS", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERE4.pdf" },
                { s_no: 7, code: "6CERE5", name: "HUMAN COMPUTER INTERFACE", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERE5.pdf" },
                { s_no: 7, code: "6CERG4", name: "WIRELESS AND MOBILE NETWORKS", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERG4.pdf" },
                { s_no: 7, code: "6CERL4", name: "SERVER SIDE PROGRAMMING LAB", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERL4.pdf" },
                { s_no: 7, code: "6SCRS6", name: "ENTERPRENEURSHIP AND IPR DEVELOPMENT", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6SCRS6.pdf" },
                { s_no: 7, code: "6CERV6", name: "COMPREHENSIVE VIVA- VI", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6CERV6.pdf" },
              ],
            },
            "Semester 7": {
              subjects: [
                { s_no: 1, code: "CER7P1", name: "Project Phase -I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7P1.pdf" },
                { s_no: 2, code: "CER7C1", name: "Distributed Computing", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7C1.pdf" },
                { s_no: 3, code: "CER7C2", name: "Cloud Computing", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7C2.pdf" },
                { s_no: 4, code: "CER7C3", name: "Artificial Intelligence", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7C3.pdf" },
                { s_no: 5, code: "CER7E1", name: "Machine Learning", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7E1.pdf" },
                { s_no: 6, code: "CER7V7", name: "Comprehensive Viva - VII", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7V7.pdf" },
                { s_no: 4, code: "CER7E2", name: "Optimization Algorithms & Techniques", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7E2.pdf" },
                { s_no: 4, code: "CER7E3", name: "Robotics and Numerical Control", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7E3.pdf" },
                { s_no: 4, code: "CER7E4", name: "Computer Vision", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7E4.pdf" },
                { s_no: 5, code: "CER7E5", name: "VLSI Design", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER7E5.pdf" },
              ],
            },
            "Semester 8": {
              subjects: [
                { s_no: 1, code: "CER8P2", name: "Project Phase - II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8P2.pdf" },
                { s_no: 2, code: "CER8C1", name: "Information Retrieval & Extraction", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8C1.pdf" },
                { s_no: 3, code: "CER8C2", name: "Network & Information Security", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8C2.pdf" },
                { s_no: 4, code: "CER8C3", name: "Data Sciences", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8C3.pdf" },
                { s_no: 5, code: "CER8E1", name: "Soft Computing", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8E1.pdf" },
                { s_no: 6, code: "CER8V8", name: "Comprehensive Viva - VIII", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8V8.pdf" },
                { s_no: 1, code: "CER8E2", name: "Deep Learning", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8E2.pdf" },
                { s_no: 2, code: "CER8E3", name: "Game AI", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8E3.pdf" },
                { s_no: 3, code: "CER8E4", name: "Parallel Computing", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8E4.pdf" },
                { s_no: 4, code: "CER8E5", name: "Human Computer Interaction", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/CER8E5.pdf" },
              ],
            },
          },
        },
        "Information Technology": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 1, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 1, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 1, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 1, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 1, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 1, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 3": {
              subjects: [
                { s_no: 1, code: "3AIRC1", name: "Discrete Mathematics", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3AIRC1.pdf" },
                { s_no: 2, code: "3ITRC2", name: "OBJECT ORIENTED PROGRAMMING", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ITRC2.pdf" },
                { s_no: 3, code: "3ITRC3", name: "DATA STRUCTURE", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ITRC3.pdf" },
                { s_no: 4, code: "3ITRC4", name: "DIGITAL ELECTRONICS", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/3ITRC4.pdf" },
                { s_no: 5, code: "3ITRG1", name: "COMPUTER ARCHITECTURE & ORGANIZATION", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ITRG1.pdf" },
                { s_no: 6, code: "3ITRL1", name: "COMPUTER HARDWARE & IOT LAB", credits: "0-0-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ITRL1.pdf" },
                { s_no: 7, code: "3SIRS3", name: "Life Management Skills", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3SIRS3.pdf" },
                { s_no: 8, code: "3ITRV3", name: "Comprehensive Viva III", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3ITRV3.pdf" },
              ]
            },
            "Semester 4": {
              subjects: [
                { s_no: 1, code: "4AIRC1", name: "Numerical & Optimization Techniques", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4AIRC1.pdf" },
                { s_no: 2, code: "4ITRC2", name: "Operating Systems", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRC2.pdf" },
                { s_no: 3, code: "4ITRC3", name: "Software Engineering", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRC3.pdf" },
                { s_no: 4, code: "4ITRC4", name: "Database Management System", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRC4.pdf" },
                { s_no: 5, code: "4ITRG2", name: "Digital Communication Engineering", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRG2.pdf" },
                { s_no: 6, code: "4ITRL2", name: "Advance IoT Lab", credits: "0-0-1", type: "Lab", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRL2.pdf" },
                { s_no: 7, code: "4SIRS4", name: "Communication Skills", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4SIRS4.pdf" },
                { s_no: 8, code: "4ITRV4", name: "Comprehensive Viva - IV", credits: "0-0-4", type: "Viva", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ITRV4.pdf" },

              ]
            },
            "Semester 5": {
              subjects: [
                { s_no: 1, code: "5CERC1", name: "THEORY OF COMPUTATION", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC1.pdf" },
                { s_no: 2, code: "5CERC2", name: "SOFTWARE ENGINEERING", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC2.pdf" },
                { s_no: 3, code: "5CERC3", name: "COMPUTER NETWORKS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERC3.pdf" },
                { s_no: 4, code: "5CERE1", name: "WEB TECHNOLOGIES", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE1.pdf" },
                { s_no: 4.1, code: "5CERE2", name: "SOFTWARE VULNERABILITIES AND SECURITY", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE2.pdf" },
                { s_no: 4.2, code: "5CERE3", name: "METHODS OF SOFTWARE DEVELOPMENT", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE3.pdf" },
                { s_no: 4.3, code: "5CERE4", name: "INTRODUCTION TO EMBEDDED SYSTEMS", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE4.pdf" },
                { s_no: 4.4, code: "5CERE5", name: "COMPUTER VISION AND IMAGE PROCESSING", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERE5.pdf" },
                { s_no: 5, code: "5CERG3", name: "INTRODUCTION TO DATA MINING", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERG3.pdf" },
                { s_no: 6, code: "5CERL3", name: "HANDS ON ANDROID PROGRAMMING LAB", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERL3.pdf" },
                { s_no: 7, code: "5SCSR5", name: "PROFESSIONAL DEVELOPMENT", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5SCSR5.pdf" },
                { s_no: 8, code: "5CERV5", name: "COMPREHENSIVE VIVA - V", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5CERV5.pdf" }
              ]

            },
            "Semester 6": {
              subjects:
                [
                  { s_no: 1, code: "6ITRC1", name: "Wireless Protocols and Mobile Networks", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRC1.pdf" },
                  { s_no: 2, code: "6ITRC2", name: "Design and Analysis of Algorithms", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRC2.pdf" },
                  { s_no: 3, code: "6ITRC3", name: "Network and Information Security", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRC3.pdf" },
                  { s_no: 4, code: "6ITRE1", name: "Data Analytics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRE1.pdf" },
                  { s_no: 5, code: "6ITRG4", name: "Compiler Design", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRG4.pdf" },
                  { s_no: 6, code: "6ITRL4", name: "Mobile Technology Lab", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRL4.pdf" },
                  { s_no: 7, code: "6SIRS6", name: "Entrepreneurship Development & IPR", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6SIRS6.pdf" },
                  { s_no: 8, code: "6ITRV6", name: "Comprehensive Viva - VI", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRV6.pdf" },

                  { s_no: 9, code: "6ITRE2", name: "Bioinformatics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRE2.pdf" },
                  { s_no: 10, code: "6ITRE3", name: "Information Retrieval & Extraction", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRE3.pdf" },
                  { s_no: 11, code: "6ITRE4", name: "Software Testing and Quality Assurance", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRE4.pdf" },
                  { s_no: 12, code: "6ITRE5", name: "High Performance Computing", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6ITRE5.pdf" }
                ]

            },
            "Semester 7": {
              subjects: [
                { s_no: 1, code: "ITR7P1", name: "Project Phase – I/Project II", credits: "0-0-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7P1.pdf" },
                { s_no: 2, code: "ITR7C1", name: "Cloud Computing", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7C1.pdf" },
                { s_no: 3, code: "ITR7C2", name: "Computer Graphics", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7C2.pdf" },
                { s_no: 4, code: "ITR7E1", name: "Big Data Analytics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7E1.pdf" },
                { s_no: 5, code: "ITR7G5", name: "Artificial Intelligence", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7G5.pdf" },
                { s_no: 6, code: "ITR7V7", name: "Comprehensive Viva - VII", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7V7.pdf" },
                { s_no: 7, code: "ITR7E2", name: "Foundation of Modern Networking", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7E2.pdf" },
                { s_no: 8, code: "ITR7E3", name: "Internet of Things", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7E3.pdf" },
                { s_no: 9, code: "ITR7E4", name: "Security Assessment, Risk Management and Digital Forensics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR7E4.pdf" },
              ]
            },
            "Semester 8": {
              subjects: [
                { s_no: 1, code: "ITR8P2", name: "Project Phase - II", credits: "0-0-7", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8P2.pdf" },
                { s_no: 2, code: "ITR8C1", name: "Data warehousing and Mining", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8C1.pdf" },
                { s_no: 3, code: "ITR8C2", name: "Human-Computer Interaction", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8C2.pdf" },
                { s_no: 4, code: "ITR8E1", name: "Machine Learning", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8E1.pdf" },
                { s_no: 5, code: "ITR8G6", name: "Principles of Mobile Computing", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8G6.pdf" },
                { s_no: 6, code: "ITR8V8", name: "Comprehensive Viva - VIII", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8V8.pdf" },
                { s_no: 7, code: "ITR8E2", name: "Enterprise Resource Planning", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8E2.pdf" },
                { s_no: 8, code: "ITR8E3", name: "Block chain Architecture Design and Use Cases", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8E3.pdf" },
                { s_no: 9, code: "ITR8E4", name: "Cryptography and Computational number theory", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ITR8E4.pdf" }
              ]
            }

          },
        },
        "Electronics & Telecommunication Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 1, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 1, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 1, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 1, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 1, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 1, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 3": {
              subjects:
                [
                  { s_no: 1, code: "3ATRC1", name: "Applied Mathematics-III", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 2, code: "3ETRC2", name: "Digital Electronics", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 3, code: "3ETRC3", name: "Data Structure", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 4, code: "3ETRC4", name: "Analog Electronics", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 5, code: "3ETRG1", name: "Network Analysis", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 6, code: "3ETRL1", name: "Software Workshop-I", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 7, code: "3STRS3", name: "Effective Communication Skill", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" },
                  { s_no: 8, code: "3ETRV3", name: "Comprehensive Viva-III", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/NEW_BE-SYLLABUS.pdf" }
                ]

            },
            "Semester 4": {
              subjects:
                [
                  { s_no: 1, code: "4ETRC1", name: "MEASUREMENT SYSTEM AND SENSORS", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRC1.pdf" },
                  { s_no: 2, code: "4ETRC2", name: "EMF AND TRANSMISSION LINE", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRC2.pdf" },
                  { s_no: 3, code: "4ETRC3", name: "LINEAR DEVICES AND APPLICATIONS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRC3.pdf" },
                  { s_no: 4, code: "4ETRC4", name: "ANALOG COMMUNICATION", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRC4.pdf" },
                  { s_no: 5, code: "4ETRG2", name: "DIGITAL SIGNAL PROCESSING", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRG2.pdf" },
                  { s_no: 6, code: "4ETRL2", name: "ELECTRONIC WORKSHOP", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRL2.pdf" },
                  { s_no: 7, code: "4STRS4", name: "ENGINEERING ECONOMICS", credits: "2-0-0", type: "HS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4STRS4.pdf" },
                  { s_no: 8, code: "4ETRV4", name: "COMREHENSIVE VIVA -IV", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4ETRV4.pdf" }
                ]

            },
            "Semester 5": {
              subjects:
                [
                  { s_no: 1, code: "5ETRC1", name: "Object Oriented Programming", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRC1.pdf" },
                  { s_no: 2, code: "5ETRC2", name: "Digital Communication", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRC2.pdf" },
                  { s_no: 3, code: "5ETRC3", name: "Microcontrollers", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRC3.pdf" },
                  { s_no: 4, code: "5ETRE1", name: "VLSI Design", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRE1.pdf" },
                  { s_no: 5, code: "5ETRG3", name: "Computer Networks", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRG3.pdf" },
                  { s_no: 6, code: "5ETRL3", name: "Software Workshop-II", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRL3.pdf" },
                  { s_no: 7, code: "5STRS5", name: "Principles of Management", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5STRS5.pdf" },
                  { s_no: 8, code: "5ETRV5", name: "Comprehensive Viva - V", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5ETRV5.pdf" }
                ]
            },
            "Semester 6": {
              subjects:
                [
                  { s_no: 1, code: "ETR6C1", name: "VLSI Design", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6C1.pdf" },
                  { s_no: 2, code: "ETR6C2", name: "Mobile and Wireless Communication", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6C2.pdf" },
                  { s_no: 3, code: "ETR6C3", name: "Control System", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6C3.pdf" },
                  { s_no: 4, code: "ETR6E1", name: "Linear Integrated Circuits", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6E1.pdf" },
                  { s_no: 5, code: "STRS6", name: "Entrepreneurship and IPR Development", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/STRS6.pdf" },
                  { s_no: 6, code: "ETR6G4", name: "Computer Networks", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6G4.pdf" },
                  { s_no: 7, code: "ETR6L4", name: "Design Workshop", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6L4.pdf" },
                  { s_no: 8, code: "ETR6V6", name: "Comprehensive Viva - VI", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR6V6.pdf" }
                ]
            },
            "Semester 7": {
              subjects:
                [
                  { s_no: 1, code: "ETR7P1", name: "PROJECT PHASE-I", type: "PC", credits: "0-0-7", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7P1.pdf" },
                  { s_no: 2, code: "ETR7C2", name: "OPERATING SYSTEM", type: "PC", credits: "3-1-0", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7C2.pdf" },
                  { s_no: 3, code: "ETR7C3", name: "ANTENNA AND WAVE PROPOGATION", type: "PC", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7C3.pdf" },
                  { s_no: 4, code: "ETR7C4", name: "RF AND MICROWAVE ENGINEERING", type: "PC", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7C4.pdf" },
                  { s_no: 5, code: "ETR7E1", name: "CIRCUIT DESIGN USING HDL", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7E1.pdf" },
                  { s_no: 5, code: "ETR7E2", name: "WIRELESS ADHOC AND SENSOR NETWORKS", type: "PE", credits: "", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7E2.pdf" },
                  { s_no: 5, code: "ETR7E3", name: "EMBEDDED SYSTEM", type: "PE", credits: "", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7E3.pdf" },
                  { s_no: 5, code: "ETR7E4", name: "INDUSTRIAL COMMUNICATION", type: "PE", credits: "", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7E4.pdf" },
                  { s_no: 5, code: "ETR7E5", name: "SPEECH AND IMAGE PROCESSING", type: "PE", credits: "", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7E5.pdf" },
                  { s_no: 8, code: "ETR7V7", name: "COMPREHENSIVE VIVA -VII", type: "VIRTUAL", credits: "0-0-4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR7V7.pdf" }
                ]

            },
            "Semester 8": {
              subjects:
                [
                  { "s_no": 1, "code": "ETR8P2", "name": "PROJECT PHASE-II", "type": "-", "credits": "0-0-7", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8P2.pdf" },
                  { "s_no": 2, "code": "ETR8C1", "name": "TELECOM NETWORKS", "type": "PC", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8C1.pdf" },
                  { "s_no": 3, "code": "ETR8C2", "name": "OPTICAL COMMUNICATION", "type": "PC", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8C2.pdf" },
                  { "s_no": 4, "code": "ETR8C3", "name": "SATELLITE AND NAVIGATION SYSTEM", "type": "PC", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8C3.pdf" },
                  { "s_no": 5, "code": "ETR8E1", "name": "INTERNET OF THINGS", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8E1.pdf" },
                  { "s_no": 5, "code": "ETR8E2", "name": "NETWORK SECURITY", "type": "PE", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8E2.pdf" },
                  { "s_no": 5, "code": "ETR8E3", "name": "ELECTROMAGNETIC INTERFERENCE AND ELECTROMAGNETIC COMPATIBILITY", "type": "PE", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8E3.pdf" },
                  { "s_no": 5, "code": "ETR8E4", "name": "DBMS AND DATA ANALYTICS", "type": "PE", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8E4.pdf" },
                  { "s_no": 5, "code": "ETR8E5", "name": "MACHINE LEARNING", "type": "PE", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8E5.pdf" },
                  { "s_no": 8, "code": "ETR8V8", "name": "COMPREHENSIVE VIVA", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR8V8.pdf" }
                ]

            },
          },
        },
        "Electronics & Instrumentation Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 1, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 1, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 1, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 1, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 1, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 1, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 3": {
              subjects:
                [
                  { s_no: 1, code: "3AERC1", name: "APPLIED MATHEMATICS-III", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3AERC1.pdf" },
                  { s_no: 2, code: "3EIRC2", name: "DIGITAL ELECTRONICS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRC2.pdf" },
                  { s_no: 3, code: "3EIRC3", name: "DATA STRUCTURE", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRC3.pdf" },
                  { s_no: 4, code: "3EIRC4", name: "ANALOG ELECTRONICS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRC4.pdf" },
                  { s_no: 5, code: "3EIRG1", name: "NETWORK ANALYSIS", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRG1.pdf" },
                  { s_no: 6, code: "3EIRL1", name: "SOFTWARE WORKSHOP-I", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRL1.pdf" },
                  { s_no: 7, code: "3SESR3", name: "EFFECTIVE COMMUNICATION SKILL", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3SESR3.pdf" },
                  { s_no: 8, code: "3EIRV3", name: "COMPREHENSIVE VIVA -III", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3EIRV3.pdf" }
                ]


            },
            "Semester 4": {
              subjects:
                [
                  { s_no: 1, code: "4EIRC1", name: "DIGITAL SIGNAL PROCESSING", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRC1.pdf" },
                  { s_no: 2, code: "4EIRC2", name: "SENSOR AND TRANSDUCERS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRC2.pdf" },
                  { s_no: 3, code: "4EIRC3", name: "LINEAR DEVICES AND APPLICATIONS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRC3.pdf" },
                  { s_no: 4, code: "4EIRC4", name: "CMOS DIGITAL DESIGN", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRC4.pdf" },
                  { s_no: 5, code: "4EIRG2", name: "ANALOG AND DIGITAL COMMUNICATION", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRG2.pdf" },
                  { s_no: 6, code: "4EIRL2", name: "ELECTRONIC WORKSHOP", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRL2.pdf" },
                  { s_no: 7, code: "4SESR4", name: "ENGINEERING ECONOMICS", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4SESR4.pdf" },
                  { s_no: 8, code: "4EIRV4", name: "COMPREHENSIVE VIVA -IV", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4EIRV4.pdf" }
                ]

            },
            "Semester 5": {
              subjects:
                [
                  { s_no: 1, code: "5EIRC1", name: "SOC DESIGN USING HDL", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRC1.pdf" },
                  { s_no: 2, code: "5EIRC2", name: "PYTHON PROGRAMMING AND APPLICATIONS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRC2.pdf" },
                  { s_no: 3, code: "5EIRC3", name: "MICROCONTROLLERS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRC3.pdf" },
                  { s_no: 4, code: "5EIRE1", name: "AI AND MACHINE LEARNING", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRE1.pdf" },
                  { s_no: 5, code: "5EIRG3", name: "COMPUTER NETWORKS", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRG3.pdf" },
                  { s_no: 6, code: "5EIRL3", name: "SOFTWARE WORKSHOP-II", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRL3.pdf" },
                  { s_no: 7, code: "5SESR5", name: "PRINCIPLES OF MANAGEMENT", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5SESR5.pdf" },
                  { s_no: 8, code: "5EIRV5", name: "COMPREHENSIVE VIVA -V", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/5EIRV5.pdf" }
                ]

            },
            "Semester 6": {
              subjects:
                [
                  { s_no: 1, code: "6EIRC1", name: "POWER ELECTRONICS", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRC1.pdf" },
                  { s_no: 2, code: "6EIRC2", name: "OBJECT ORIENTED PROGRAMMING", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRC2.pdf" },
                  { s_no: 3, code: "6EIRC3", name: "CONTROL SYSTEM", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRC3.pdf" },
                  { s_no: 4, code: "6EIRE1", name: "DATABASE MANAGEMENT SYSTEM", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRE1.pdf" },
                  { s_no: 5, code: "6EIRG4", name: "MOBILE AND WIRELESS COMMUNICATION", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRG4.pdf" },
                  { s_no: 6, code: "6EIRL4", name: "ROBOTICS AND SYSTEM DESIGN LAB", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRL4.pdf" },
                  { s_no: 7, code: "6SESR6", name: "ENTERPRENEURSHIP AND IPR DEVELOPMENT", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6SESR6.pdf" },
                  { s_no: 8, code: "6EIRV6", name: "COMPREHENSIVE VIVA", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/6EIRV6.pdf" }
                ]

            },
            "Semester 7": {
              subjects:
                [
                  { s_no: 1, code: "EIR7C1", name: "PROJECT-I", credits: "0-0-7", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7C1.pdf" },
                  { s_no: 2, code: "EIR7C2", name: "Operating system", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7C2.pdf" },
                  { s_no: 3, code: "EIR7C3", name: "Intelligent Instrumentation System", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7C3.pdf" },
                  { s_no: 4, code: "EIR7C4", name: "Process Instrumentation & control", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7C4.pdf" },
                  { s_no: 5, code: "EIR7E1", name: "Circuit Design using HDL", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7E1.pdf" },
                  { s_no: 6, code: "EIR7E2", name: "Industrial Communication", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7E2.pdf" },
                  { s_no: 7, code: "EIR7E3", name: "Advance Control System", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7E3.pdf" },
                  { s_no: 8, code: "EIR7E4", name: "Speech & image processing", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7E4.pdf" },
                  { s_no: 9, code: "EIR7E5", name: "Data Acquisition System", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7E5.pdf" },
                  { s_no: 10, code: "EIR7V7", name: "COMREHENSIVE VIVA -VII", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR7V7.pdf" }
                ]

            },
            "Semester 8": {
              subjects:
                [
                  { s_no: 1, code: "EIR8P2", name: "PROJECT PHASE-II", credits: "0-0-7", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8P2.pdf" },
                  { s_no: 2, code: "EIR8C1", name: "EMBEDDED SYSTEM", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8C1.pdf" },
                  { s_no: 3, code: "EIR8C2", name: "OPTICAL INSTRUMENTATION", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8C2.pdf" },
                  { s_no: 4, code: "EIR8C3", name: "INTERNET OF THINGS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8C3.pdf" },
                  { s_no: 5, code: "EIR8E1", name: "NETWORK SECURITY", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8E1.pdf" },
                  { s_no: 6, code: "EIR8E2", name: "MACHINE LEARNING", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8E2.pdf" },
                  { s_no: 7, code: "EIR8E3", name: "MOBILE COMPUTING", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8E3.pdf" },
                  { s_no: 8, code: "EIR8E4", name: "DBMS & DATA ANALYTICS", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8E4.pdf" },
                  { s_no: 9, code: "EIR8E5", name: "ENVIRONMENTAL SUSTAINABILITY & RESOURCE MANAGEMENT", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8E5.pdf" },
                  { s_no: 10, code: "EIR8V8", name: "COMPREHENSIVE VIVA - VIII", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR8V8.pdf" }
                ]

            },
          },
        },
        "Mechanical Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 1, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 1, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 1, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 1, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 1, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 1, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 3": {
              subjects:
                [
                  { s_no: 1, code: "3AMRC1", name: "APPLIED MATHEMATICS-III", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3AMRC1.pdf" },
                  { s_no: 2, code: "3MERC2", name: "STRENGTH OF MATERIAL", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERC2.pdf" },
                  { s_no: 3, code: "3MERC3", name: "MATERIAL SCIENCE", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERC3.pdf" },
                  { s_no: 4, code: "3MERC4", name: "MANUFACTURING PROCESS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERC4.pdf" },
                  { s_no: 5, code: "3MERG1", name: "APPLIED THERMODYNAMICS", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERG1.pdf" },
                  { s_no: 6, code: "3MERL1", name: "WORKSHOP / PRACTICAL (APP. THERMODYNAMICS)", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERL1.pdf" },
                  { s_no: 7, code: "3SMRS3", name: "EFFECTIVE COMMUNICATION SKILL", credits: "2-0-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3SMRS3.pdf" },
                  { s_no: 8, code: "3MERV3", name: "COMPREHENSIVE VIVA-III", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/3MERV3.pdf" }
                ]

            },
            "Semester 4": {
              subjects:
                [
                  { s_no: 1, code: "4MERC1", name: "INDUSTRIAL ENGG. & MANAGEMENT", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERC1.pdf" },
                  { s_no: 2, code: "4MERC2", name: "THEORY OF MACHINE", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERC2.pdf" },
                  { s_no: 3, code: "4MERC3", name: "MACHINE DESIGN & DRAWING", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERC3.pdf" },
                  { s_no: 4, code: "4MERC4", name: "FLUID MECHANICS", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERC4.pdf" },
                  { s_no: 5, code: "4MERG2", name: "MECHATRONICS", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERG2.pdf" },
                  { s_no: 6, code: "4MERL2", name: "WORKSHOP / PRACTICAL (MECHATRONICS)", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERL2.pdf" },
                  { s_no: 7, code: "4SMRS4", name: "ENGINEERING ECONOMICS", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4SMRS4.pdf" },
                  { s_no: 8, code: "4MERV4", name: "COMPREHENSIVE VIVA-IV", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/New_BE_Syllabus/4MERV4.pdf" }
                ]

            },
            "Semester 5": {
              subjects:
                [
                  { s_no: 1, code: "MERSC1", name: "DYNAMICS OF MACHINES", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSC1.pdf" },
                  { s_no: 2, code: "MERSC2", name: "MACHINE DESIGN - I", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSC2.pdf" },
                  { s_no: 3, code: "MERSC3", name: "HEAT & MASS TRANSFER", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSC3.pdf" },
                  { s_no: 4, code: "MERSC4", name: "I.C. ENGINES & GAS TURBINES", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSC4.pdf" },
                  { s_no: 5, code: "MERSG1", name: "PRODUCTION ENGINEERING - I", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSG1.pdf" },
                  { s_no: 6, code: "SMRS55", name: "PRINCIPLES & PRACTICES OF MANAGEMENT", credits: "2-0-0", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SMRS55.pdf" },
                  { s_no: 7, code: "MERSL3", name: "WORKSHOP/PRACTICAL (Machine Design - I)", credits: "0-0-1", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSL3.pdf" },
                  { s_no: 8, code: "MERSV5", name: "COMPREHENSIVE VIVA - V", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MERSV5.pdf" }
                ]

            },
            "Semester 6": {
              subjects:
                [
                  { s_no: 1, code: "MER6C1", name: "MACHINE DESIGN - II", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6C1.pdf" },
                  { s_no: 2, code: "MER6C2", name: "PRODUCTION ENGINEERING - II", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6C2.pdf" },
                  { s_no: 3, code: "MER6C3", name: "FLUID MACHINES", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6C3.pdf" },
                  { s_no: 4, code: "MER6C4", name: "ENERGY CONVERSION SYSTEM", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6C4.pdf" },
                  { s_no: 5, code: "MER6G1", name: "MATERIALS MANAGEMENT", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6G1.pdf" },
                  { s_no: 6, code: "SMRS6", name: "ENTERPRENEURSHIP DEVELOPMENT & IPR", credits: "2-0-0", type: "SS", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SMRS6.pdf" },
                  { s_no: 7, code: "MER6L4", name: "WORKSHOP/PRACTICAL (Machine Design - II)", credits: "0-0-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6L4.pdf" },
                  { s_no: 8, code: "MER6V6", name: "COMREHENSIVE VIVA -VI", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER6V6.pdf" }
                ]

            },
            "Semester 7": {
              subjects:
                [
                  { s_no: 1, code: "MER7C1", name: "OPERATIONS RESEARCH", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7C1.pdf" },
                  { s_no: 2, code: "MER7C2", name: "MACHINE DESIGN - III", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7C2.pdf" },
                  { s_no: 3, code: "MER7C3", name: "REFRIGERATION & AIR CONDITIONING", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7C3.pdf" },
                  { s_no: 4, code: "MER7E1", name: "SQC & TQM", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E1.pdf" },
                  { s_no: 5, code: "MER7P1", name: "PROJECT PHASE - I", credits: "0-0-7", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7P1.pdf" },
                  { s_no: 6, code: "MER7V7", name: "COMREHENSIVE VIVA -VII", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7V7.pdf" },
                  { s_no: 1, code: "MER7E1", name: "SQC & TQM", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E1.pdf" },
                  { s_no: 2, code: "MER7E2", name: "Artificial Intelligence", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E2.pdf" },
                  { s_no: 3, code: "MER7E3", name: "Robotics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E3.pdf" },
                  { s_no: 4, code: "MER7E4", name: "Tribology", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E4.pdf" },
                  { s_no: 5, code: "MER7E5", name: "Computational Fluid Dynamics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER7E5.pdf" }
                ]

            },
            "Semester 8": {
              subjects: [
                { s_no: 1, code: "MER8C1", name: "PRODUCTION & OPERATIONS MANAGEMENT", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8C1.pdf" },
                { s_no: 2, code: "MER8C2", name: "VIBRATIONS & NOISE CONTROL", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8C2.pdf" },
                { s_no: 3, code: "MER8C3", name: "AUTOMOBILE ENGINEERING", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8C3.pdf" },
                { s_no: 4, code: "MER8E1", name: "CAD / CAM", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E1.pdf" },
                { s_no: 5, code: "MER8P2", name: "PROJECT PHASE - II", credits: "0-0-7", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8P2.pdf" },
                { s_no: 6, code: "MER8V8", name: "COMREHENSIVE VIVA -VIII", credits: "0-0-4", type: "VIRTUAL", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8V8.pdf" },

                { s_no: 1, code: "MER8E1", name: "CAD / CAM", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E1.pdf" },
                { s_no: 2, code: "MER8E2", name: "Reliability Engineering", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E2.pdf" },
                { s_no: 3, code: "MER8E3", name: "Product Development", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E3.pdf" },
                { s_no: 4, code: "MER8E4", name: "Power Plant Engineering", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E4.pdf" },
                { s_no: 5, code: "MER8E5", name: "Gas Dynamics", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER8E5.pdf" }



              ]
            },
          },
        },
        "Civil Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ACR1C2.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C3.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/ETR1C4.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER1C5.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR1S1.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER1V1.pdf" },
              ],
            },
            "Semester 2": {
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-II", credits: "3-1-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AMR1C1.pdf" },
                { s_no: 1, code: "APR2C2", name: "Applied Physics", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/APR2C2.pdf" },
                { s_no: 1, code: "MER2C3", name: "Engineering Drawing", credits: "2-1-2", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/MER2C3.pdf" },
                { s_no: 1, code: "EIR2C4", name: "Electrical Engineering", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/EIR2C4.pdf" },
                { s_no: 1, code: "COR2C5", name: "Computer Programming in C++", credits: "3-1-1", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/COR2C5.pdf" },
                { s_no: 1, code: "SSR2S2", name: "Humanities", credits: "2-0-0", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SSR2S2.pdf" },
                { s_no: 1, code: "BER2V2", name: "Comprehensive Viva II", credits: "0-0-4", type: "PC1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/BER2V2.pdf" },
              ]
            },
            "Semester 3": {
              subjects: [
                { s_no: 1, code: "AVR3C1", name: "Applied Mathematics - III", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AVR3C1.pdf" },
                { s_no: 2, code: "VLR3C2", name: "Applied Mechanics & Strength of Material", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3C2.pdf" },
                { s_no: 3, code: "VLR3C3", name: "Surveying", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3C3.pdf" },
                { s_no: 4, code: "VLR3C4", name: "Construction Material & Technology", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3C4.pdf" },
                { s_no: 5, code: "VLR3G1", name: "Structural Mechanics", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3G1.pdf" },
                { s_no: 6, code: "VLR3L1", name: "Drafting & Computational Skills", credits: "0-0-1", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3L1.pdf" },
                { s_no: 7, code: "SVR3S3", name: "Life Management Skills", credits: "2-0-0", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SVR3S3.pdf" },
                { s_no: 8, code: "VLR3V3", name: "Comprehensive Viva – III", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR3V3.pdf" },

              ]
            },
            "Semester 4": {
              subjects: [
                { s_no: 1, code: "AVR4C1", name: "Engineering Geology", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/AVR4C1.pdf" },
                { s_no: 2, code: "VLR4C2", name: "Fluid Mechanics - I", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4C2.pdf" },
                { s_no: 3, code: "VLR4C3", name: "Advanced Surveying", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4C3.pdf" },
                { s_no: 4, code: "VLR4C4", name: "Design of RCC Structures – I", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4C4.pdf" },
                { s_no: 5, code: "VLR4G2", name: "Environmental Engineering – I", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4G2.pdf" },
                { s_no: 6, code: "VLR4L2", name: "Lab of Engineering Geology", credits: "0-0-1", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4L2.pdf" },
                { s_no: 7, code: "SVR4S4", name: "Communication Skills", credits: "2-0-0", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SVR4S4.pdf" },
                { s_no: 8, code: "VLR4V4", name: "Comprehensive Viva - IV", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR4V4.pdf" },

              ]
            },
            "Semester 5": {
              subjects: [
                { s_no: 1, code: "VLR5C1", name: "Design of RCC Structures – II", credits: "3-1-0", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5C1.pdf" },
                { s_no: 2, code: "VLR5C2", name: "Fluid Mechanics - II", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5C2.pdf" },
                { s_no: 3, code: "VLR5C3", name: "Quantity Surveying & Costing", credits: "3-1-1", type: "PC", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5C3.pdf" },
                { s_no: 4, code: "VLR5E1", name: "Geotechnical Engineering – I", credits: "3-1-1", type: "PE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5E1.pdf" },
                { s_no: 5, code: "VLR5G3", name: "Water Resources Engineering", credits: "3-1-0", type: "GE", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5G3.pdf" },
                { s_no: 6, code: "VLR5L3", name: "Design Skills", credits: "0-0-1", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5L3.pdf" },
                { s_no: 7, code: "SVR5S5", name: "Professional Skills - I", credits: "2-0-0", type: "--", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SVR5S5.pdf" },
                { s_no: 8, code: "VLR5V5", name: "Comprehensive Viva - V", credits: "0-0-4", type: "Virtual", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5V5.pdf" },
                { s_no: 9, code: "VLR5E2", name: "Advanced Rock Mechanics", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5E2.pdf" },
                { s_no: 10, code: "VLR5E3", name: "Structural Mechanics & Vibrations", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5E3.pdf" },
                { s_no: 11, code: "VLR5E4", name: "Physical Infrastructure and Planning", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR5E4.pdf" },
              ]
            },
            "Semester 6": {
              subjects: [
                { s_no: 1, code: "VLR6C1", name: "Structural Analysis - I", type: "PC", credits: "3-1-0", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6C1.pdf" },
                { s_no: 2, code: "VLR6C2", name: "Transportation Engineering - I", type: "PC", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6C2.pdf" },
                { s_no: 3, code: "VLR6C3", name: "Design of Steel Structures – I", type: "PC", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6C3.pdf" },
                { s_no: 4, code: "VLR6E1", name: "Geotechnical Engineering – II", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6E1.pdf" },
                { s_no: 5, code: "VLR6G4", name: "Construction Planning & Management", type: "GE", credits: "3-1-0", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6G4.pdf" },
                { s_no: 6, code: "VLR6L4", name: "Technical Skills", type: "--", credits: "0-0-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6L4.pdf" },
                { s_no: 7, code: "SVR6S6", name: "Professional Skills - II", type: "--", credits: "2-0-0", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/SVR6S6.pdf" },
                { s_no: 8, code: "VLR6V6", name: "Comprehensive Viva - VI", type: "Virtual", credits: "0-0-4", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6V6.pdf" },

                // Electives
                { s_no: 9, code: "VLR6E2", name: "Design of Urban Water System", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6E2.pdf" },
                { s_no: 10, code: "VLR6E3", name: "Rehabilitation of Structures", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6E3.pdf" },
                { s_no: 11, code: "VLR6E4", name: "Environmental Engineering Design", type: "PE", credits: "3-1-1", pdfLink: "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR6E4.pdf" }
              ]

            },
            "Semester 7": {
              subjects:
                [
                  { "s_no": 1, "code": "VLR7P1", "name": "Project Phase - I", "type": "--", "credits": "0-0-7", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7P1.pdf" },
                  { "s_no": 2, "code": "VLR7C1", "name": "Transportation Engineering – II", "type": "PC", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7C1.pdf" },
                  { "s_no": 3, "code": "VLR7C2", "name": "Design of Steel Structures – II", "type": "PC", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7C2.pdf" },
                  { "s_no": 4, "code": "VLR7E1", "name": "Environmental Engineering – II", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7E1.pdf" },
                  { "s_no": 5, "code": "VLR7G5", "name": "Structural Analysis – II", "type": "GE", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7G5.pdf" },
                  { "s_no": 6, "code": "VLR7V7", "name": "Comprehensive Viva - VII", "type": "Virtual", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7V7.pdf" },

                  // Electives
                  { "s_no": 7, "code": "VLR7E2", "name": "Air Pollution Control and Management", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7E2.pdf" },
                  { "s_no": 8, "code": "VLR7E3", "name": "Municipal Solid Waste Management Assessment Techniques", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7E3.pdf" },
                  { "s_no": 9, "code": "VLR7E4", "name": "Systems Engineering for Civil Engineers", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR7E4.pdf" }
                ]


            },
            "Semester 8": {
              subjects:
                [
                  { "s_no": 1, "code": "VLR8P2", "name": "Project Phase - II", "type": "--", "credits": "0-0-7", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8P2.pdf" },
                  { "s_no": 2, "code": "VLR8C1", "name": "Design of Hydraulic And Irrigation Structure", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8C1.pdf" },
                  { "s_no": 3, "code": "VLR8C2", "name": "Building Planning & Architecture", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8C2.pdf" },
                  { "s_no": 4, "code": "VLR8E1", "name": "Disaster Modelling and Management", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8E1.pdf" },
                  { "s_no": 5, "code": "VLR8G6", "name": "Construction Techniques", "type": "GE", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8G6.pdf" },
                  { "s_no": 6, "code": "VLR8V8", "name": "Comprehensive Viva - VIII", "type": "Virtual", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8V8.pdf" },

                  // Electives
                  { "s_no": 7, "code": "VLR8E2", "name": "Design of Pre Stressed Concrete Elements", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8E2.pdf" },
                  { "s_no": 8, "code": "VLR8E3", "name": "Instrumentation and Experimental Techniques", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8E3.pdf" },
                  { "s_no": 9, "code": "VLR8E4", "name": "Design of Earthquake Resistant Structures", "type": "PE", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8E4.pdf" },

                  // Internship Path
                  { "s_no": 10, "code": "VLR8I1", "name": "Industry Internship", "type": "--", "credits": "0-0-18", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8I1.pdf" },
                  { "s_no": 11, "code": "VLR8G1", "name": "Theory and Practice of Non Destructive Testing", "type": "PE", "credits": "4-0-0", "pdfLink": "https://swayam.gov.in/courses/5515-jan-2019-theory-and-practice-of-non-destructive-testing" },
                  { "s_no": 12, "code": "VLR8G2", "name": "Earth Sciences for Civil Engineering Part - I & II", "type": "PE", "credits": "4-0-0", "pdfLink": "https://swayam.gov.in/courses/5377-jan-2019-earth-sciences-for-civil-engineering-part-i-ii" },
                  { "s_no": 13, "code": "VLR8VI", "name": "Comprehensive Viva - VIII", "type": "Virtual", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/VLR8VI.pdf" }
                ]

            },
          },
        },
        "Computer Science and Business Studies": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
      },
    },
    be_btech_part_time: {
      courseName: "BE/BTECH (Part Time)",
      branches: {
        "Computer Science and Engineering": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
        "Information Technology": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
        "Electronics & Telecommunication Engineering": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
        "Electronics & Instrumentation Engineering": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
        "Mechanical Engineering": {
          semesters: {
            "Semester 1": {
              subjects: [
                { "s_no": 1, "code": "AMP2C1", "name": "Applied Mathematics - II", "type": "PC", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/AMP2C1.pdf" },
                { "s_no": 2, "code": "APP2C2", "name": "Applied Physics", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/APP2C2.pdf" },
                { "s_no": 3, "code": "MEP2C3", "name": "Engineering Drawing", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP2C3.pdf" },
                { "s_no": 4, "code": "COP2C4", "name": "Computer Programming in C++", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/COP2C4.pdf" },
                { "s_no": 5, "code": "BEP2V2", "name": "Comprehensive Viva - II", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/BEP2V2.pdf" }

              ]
            },
            "Semester 2": {
              subjects: [
                { "s_no": 1, "code": "AMP1C1", "name": "Applied Mathematics - I", "type": "PC", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/AMP1C1.pdf" },
                { "s_no": 2, "code": "ACP1C2", "name": "Chemistry & Environment Science", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/ACP1C2.pdf" },
                { "s_no": 3, "code": "MEP1C3", "name": "Elements of Mechanical Engineering", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP1C3.pdf" },
                { "s_no": 4, "code": "ETP1C4", "name": "Basic Electronics", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/ETP1C4.pdf" },
                { "s_no": 5, "code": "BEP1V1", "name": "Comprehensive Viva - I", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/BEP1V1.pdf" }

              ]
            },
            "Semester 3": {
              subjects: [
                { "s_no": 1, "code": "MEP3C1", "name": "Material Science", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP3C1.pdf" },
                { "s_no": 2, "code": "MEP3C2", "name": "Strength of Material", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP3C2.pdf" },
                { "s_no": 3, "code": "MEP3C3", "name": "Manufacturing Process", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP3C3.pdf" },
                { "s_no": 4, "code": "MEP3G1", "name": "Machine Design & Drawing", "type": "GE", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP3G1.pdf" },
                { "s_no": 5, "code": "MEP3V3", "name": "Comprehensive Viva - III", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP3V3.pdf" }

              ]
            },
            "Semester 4": {
              subjects: [
                { "s_no": 1, "code": "MEP4C1", "name": "Theory of Machine", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP4C1.pdf" },
                { "s_no": 2, "code": "MEP4C2", "name": "Mechatronics", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP4C2.pdf" },
                { "s_no": 3, "code": "MEP4C3", "name": "Fluid Mechanics", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP4C3.pdf" },
                { "s_no": 4, "code": "MEP4G1", "name": "Applied Thermodynamics", "type": "GE", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP4G1.pdf" },
                { "s_no": 5, "code": "MEP4V4", "name": "Comprehensive Viva - IV", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP4V4.pdf" }

              ]
            },
            "Semester 5": {
              subjects: [
                { "s_no": 1, "code": "MEP5C1", "name": "Dynamics of Machines", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP5C1.pdf" },
                { "s_no": 2, "code": "MEP5C2", "name": "Heat Transfer", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP5C2.pdf" },
                { "s_no": 3, "code": "MEP5C3", "name": "IC Engine and Jet Propulsion", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP5C3.pdf" },
                { "s_no": 4, "code": "MEP5G1", "name": "Machine Design I", "type": "GE", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP5G1.pdf" },
                { "s_no": 5, "code": "MEP5V5", "name": "Comprehensive Viva - V", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP5V5.pdf" }

              ]
            },
            "Semester 6": {
              subjects: [
                { "s_no": 1, "code": "MEP6C1", "name": "Production Engineering", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP6C1.pdf" },
                { "s_no": 2, "code": "MEP6C2", "name": "Fluid Machines", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP6C2.pdf" },
                { "s_no": 3, "code": "MEP6C3", "name": "Energy Conversion Systems", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP6C3.pdf" },
                { "s_no": 4, "code": "MEP6G1", "name": "Machine Design II", "type": "GE", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP6G1.pdf" },
                { "s_no": 5, "code": "MEP6V6", "name": "Comprehensive Viva - VI", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP6V6.pdf" }

              ]
            },
            "Semester 7": {
              subjects: [
                { "s_no": 1, "code": "MEP7C1", "name": "Machine Design III", "type": "PC", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7C1.pdf" },
                { "s_no": 2, "code": "MEP7C2", "name": "Refrigeration & Air Conditioning", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7C2.pdf" },
                { "s_no": 3, "code": "MEP7E1", "name": "Automobile Engineering", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7E1.pdf" },
                { "s_no": 4, "code": "MEP7P1", "name": "Project Phase I", "type": "PC", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7P1.pdf" },
                { "s_no": 5, "code": "MEP7V7", "name": "Comprehensive Viva - VII", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7V7.pdf" },

                { "s_no": 6, "code": "MEP7E2", "name": "SQC & TQM", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7E2.pdf" },
                { "s_no": 7, "code": "MEP7E3", "name": "Robotics", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7E3.pdf" },
                { "s_no": 8, "code": "MEP7E4", "name": "Tribology", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP7E4.pdf" }

              ]
            },
            "Semester 8": {
              subjects: [
                { "s_no": 1, "code": "MEP8C1", "name": "Power Plant Engineering", "type": "PC", "credits": "2-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8C1.pdf" },
                { "s_no": 2, "code": "MEP8C2", "name": "Vibration & Noise Control", "type": "PC", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8C2.pdf" },
                { "s_no": 3, "code": "MEP8E1", "name": "Production & Operations Management", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/BEPTDC/syllabus/MEP8E1.pdf" },
                { "s_no": 4, "code": "MEP8P2", "name": "Project Phase II", "type": "PC", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8P2.pdf" },
                { "s_no": 5, "code": "MEP8V8", "name": "Comprehensive Viva - VIII", "type": "VIRTUAL", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus//BEPTDCMEP8V8.pdf" },

                { "s_no": 6, "code": "MEP8E2", "name": "CAD /CAM", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8E2.pdf" },
                { "s_no": 7, "code": "MEP8E3", "name": "Product Development", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8E3.pdf" },
                { "s_no": 8, "code": "MEP8E4", "name": "Reliability Engineering", "type": "PE", "credits": "2-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/BEPTDC/MEP8E4.pdf" }

              ]
            },
          },
        },
        "Civil Engineering": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
        "Computer Science and Business Studies": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
            "Semester 5": { subjects: [] },
            "Semester 6": { subjects: [] },
            "Semester 7": { subjects: [] },
            "Semester 8": { subjects: [] },
          },
        },
      },
    },
    mtech_full_time: {
      courseName: "MTECH (Full Time)",
      branches: {
        "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": {
              subjects: [

                { "s_no": 1, "code": "SER1C1", "name": "Advanced Algorithms", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1C1.pdf" },
                { "s_no": 2, "code": "SER1C2", "name": "Object Oriented Analysis & Design", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1C2.pdf" },
                { "s_no": 3, "code": "SER1C3", "name": "Software Construction", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1C3.pdf" },
                { "s_no": 4, "code": "SER1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                { "s_no": 5, "code": "SER1Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                { "s_no": 6, "code": "ASR1S1", "name": "Soft Skills -1", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ASR1S1.pdf" },
                { "s_no": 7, "code": "SER1W1", "name": "Seminar/Workshop/Research Tool", "type": "Workshop", "credits": "0-2-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1W1.pdf" },
                { "s_no": 8, "code": "SER1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1V1.pdf" },

                { "s_no": 9, "code": "SER1G1", "name": "Soft Computing", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1G1.pdf" },
                { "s_no": 10, "code": "SER1G2", "name": "Distributed Operating System", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1G2.pdf" },
                { "s_no": 11, "code": "SER1G3", "name": "Advance Computer Architecture", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1G3.pdf" },

                { "s_no": 12, "code": "SER1E1", "name": "Database Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1E1.pdf" },
                { "s_no": 13, "code": "SER1E2", "name": "Big Data Analytics", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1E2.pdf" },
                { "s_no": 14, "code": "SER1E3", "name": "Secure Software Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER1E3.pdf" }


              ]
            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "SER2C1", "name": "Software Project Planning and Management", "type": "Core", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2C1.pdf" },
                  { "s_no": 2, "code": "SER2C2", "name": "Design Pattern", "type": "Core", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2C2.pdf" },
                  { "s_no": 3, "code": "SER2C3", "name": "Software Testing and Quality Assurance", "type": "Core", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2C3.pdf" },

                  { "s_no": 4, "code": "SER2G1", "name": "Data Mining & Warehousing", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2G1.pdf" },
                  { "s_no": 5, "code": "SER2G2", "name": "Cloud Computing", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2G2.pdf" },
                  { "s_no": 6, "code": "SER2G3", "name": "Simulation and Modelling", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2G3.pdf" },

                  { "s_no": 7, "code": "SER2E1", "name": "Speech And Language Processing", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2E1.pdf" },
                  { "s_no": 8, "code": "SER2E2", "name": "Aspect Oriented Software Engineering", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2E2.pdf" },
                  { "s_no": 9, "code": "SER2E3", "name": "Machine Learning", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2E3.pdf" },

                  { "s_no": 10, "code": "ASR2S2", "name": "Soft Skills - II", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ASR2S2.pdf" },
                  { "s_no": 11, "code": "SER2W2", "name": "Seminar / Workshop / Research Tool II", "type": "Workshop", "credits": "0-2-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2W2.pdf" },
                  { "s_no": 12, "code": "SER2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SER2V2.pdf" }
                ]

            },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "ISR1C1", "name": "Advanced Algorithms", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1C1.pdf" },
                  { "s_no": 2, "code": "ISR1C2", "name": "Secure Computing Techniques", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1C2.pdf" },
                  { "s_no": 3, "code": "ISR1C3", "name": "Advanced Computer Networks", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1C3.pdf" },
                  { "s_no": 4, "code": "ISR1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 5, "code": "ISR1Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR4S1", "name": "Soft Skills -1", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ASR4S1.pdf" },
                  { "s_no": 7, "code": "ISR1W1", "name": "Seminar/ Workshop-I", "type": "Workshop", "credits": "0-2-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1W1.pdf" },
                  { "s_no": 8, "code": "ISR1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1V1.pdf" },

                  { "s_no": 9, "code": "ISR1G1", "name": "Advanced Data Base Management Systems", "type": "Generic Elective I", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1G1.pdf" },
                  { "s_no": 10, "code": "ISR1G2", "name": "Complexity of Security Algorithms", "type": "Generic Elective I", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1G2.pdf" },
                  { "s_no": 11, "code": "ISR1G3", "name": "Agent Technology", "type": "Generic Elective I", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1G3.pdf" },

                  { "s_no": 12, "code": "ISR1E1", "name": "Data Security", "type": "Elective I", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1E1.pdf" },
                  { "s_no": 13, "code": "ISR1E2", "name": "Information Theory and Coding", "type": "Elective I", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1E2.pdf" },
                  { "s_no": 14, "code": "ISR1E3", "name": "Data Compression and Steganography", "type": "Elective I", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR1E3.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "ISR2C1", "name": "Information Security Management", "type": "PC4", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2C1.pdf" },
                  { "s_no": 2, "code": "ISR2C2", "name": "Digital Forensics and Security Audit", "type": "PC5", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2C2.pdf" },
                  { "s_no": 3, "code": "ISR2C3", "name": "Secure Wireless Networks", "type": "PC6", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2C3.pdf" },
                  { "s_no": 4, "code": "ISR2Gx", "name": "Generic Elective II", "type": "GE2", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 5, "code": "ISR2Ex", "name": "Elective II", "type": "PE2", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR4S2", "name": "Soft Skills - 2", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ASR4S2.pdf" },
                  { "s_no": 7, "code": "ISR2W2", "name": "Seminar/ Workshop-II", "type": "Workshop", "credits": "0-2-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2W2.pdf" },
                  { "s_no": 8, "code": "ISR2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2V2.pdf" },

                  { "s_no": 9, "code": "ISR2G1", "name": "Advance Cloud Computing", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2G1.pdf" },
                  { "s_no": 10, "code": "ISR2G2", "name": "Applied Cryptography", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2G2.pdf" },
                  { "s_no": 11, "code": "ISR2G3", "name": "Cyber Crime and Information Warfare", "type": "Generic Elective II", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2G3.pdf" },

                  { "s_no": 12, "code": "ISR2E1", "name": "Biometric Systems & Security", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2E1.pdf" },
                  { "s_no": 13, "code": "ISR2E2", "name": "Secure Software Engineering", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2E2.pdf" },
                  { "s_no": 14, "code": "ISR2E3", "name": "Trust management in E-Commerce", "type": "Elective II", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISR2E3.pdf" }
                ]

            },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "DIR1C1", "name": "Industrial Transducers & Smart Sensors", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1C1.pdf" },
                  { "s_no": 2, "code": "DIR1C2", "name": "Embedded System using ARM Microcontroller", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1C2.pdf" },
                  { "s_no": 3, "code": "DIR1C3", "name": "Modern Control Systems", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1C3.pdf" },
                  { "s_no": 4, "code": "DIR1GX", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 5, "code": "DIR1EX", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR1S1", "name": "Soft Skills – 1", "type": "Skill", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 7, "code": "DIR1W1", "name": "Seminar/ Workshop-I", "type": "Practical", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 8, "code": "DIR1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4", "pdfLink": "" },

                  { "s_no": 1, "code": "DIR1G1", "name": "Advanced Signal Processing", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1G1.pdf" },
                  { "s_no": 2, "code": "DIR1G2", "name": "Advanced Biomedical Instrumentation", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1G2.pdf" },
                  { "s_no": 3, "code": "DIR1G3", "name": "Virtual Instrumentation", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1G3.pdf" },


                  { "s_no": 1, "code": "DIR1E1", "name": "Smart Instrumentation", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1E1.pdf" },
                  { "s_no": 2, "code": "DIR1E2", "name": "Intelligent Control System", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1E2.pdf" },
                  { "s_no": 3, "code": "DIR1E3", "name": "Measurement System Design", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR1E3.pdf" }
                ]
            },
            "Semester 2": {
              subjects: [
                { "s_no": 1, "code": "DIR2C4", "name": "Digital Image Processing", "type": "PC4", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2C4.pdf" },
                { "s_no": 2, "code": "DIR2C2", "name": "Process Instrumentation & Industrial Control", "type": "PC5", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2C2.pdf" },
                { "s_no": 3, "code": "DIR2C3", "name": "System Design Using Verilog", "type": "PC6", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2C3.pdf" },
                { "s_no": 4, "code": "DIR2G1", "name": "Software Engineering", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2G1.pdf" },
                { "s_no": 5, "code": "DIR2E1", "name": "Analog and Digital VLSI Circuit Design", "type": "PE2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2E1.pdf" },
                { "s_no": 6, "code": "ASR2S2", "name": "Soft Skills – 2", "type": "Skill", "credits": "2-0-0", "pdfLink": "" },
                { "s_no": 7, "code": "DIR2W2", "name": "Seminar / Workshop / Research Tools", "type": "Practical", "credits": "0-2-0", "pdfLink": "" },
                { "s_no": 8, "code": "DIR2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4", "pdfLink": "" },
                { "s_no": 9, "code": "DIR2G2", "name": "Embedded RTOS", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2G2.pdf" },
                { "s_no": 10, "code": "DIR2G3", "name": "Modeling and Simulation", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2G3.pdf" },
                { "s_no": 11, "code": "DIR2G4", "name": "Industrial Communication", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2G4.pdf" },
                { "s_no": 12, "code": "DIR2E2", "name": "Analytical Instrumentation", "type": "PE2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2E2.pdf" },
                { "s_no": 13, "code": "DIR2E3", "name": "Optical and Laser Instrumentation", "type": "PE2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2E3.pdf" },
                { "s_no": 14, "code": "DIR2E4", "name": "Advanced Industrial Drives and Control", "type": "PE2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIR2E4.pdf" }


              ]
            },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "DCR1C4", "name": "Modern Communication System", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1C4.pdf" },
                  { "s_no": 2, "code": "DCR1C2", "name": "Embedded System using ARM Microcontroller", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1C2.pdf" },
                  { "s_no": 3, "code": "DCR1C3", "name": "Advance Computer Networking", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1C3.pdf" },
                  { "s_no": 4, "code": "DCR1G1", "name": "Advance System Design", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1G1.pdf" },
                  { "s_no": 5, "code": "DCR1E1", "name": "Satellite Communication", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1E1.pdf" },
                  { "s_no": 6, "code": "ASR1S4", "name": "Soft Skills – 1", "type": "Skill", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 7, "code": "DCR1W1", "name": "Seminar / Workshop / Research Tool", "type": "Practical", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 8, "code": "DCR1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4", "pdfLink": "" },
                  { "s_no": 9, "code": "DCR1G2", "name": "Wireless Sensor Network", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1G2.pdf" },
                  { "s_no": 10, "code": "DCR1G3", "name": "Advance Digital Signal Processing", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1G3.pdf" },
                  { "s_no": 11, "code": "DCR1G4", "name": "Information Theory and Coding", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1G4.pdf" },
                  { "s_no": 12, "code": "DCR1E2", "name": "Object Oriented Programming", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1E2.pdf" },
                  { "s_no": 13, "code": "DCR1E3", "name": "Embedded RTOS", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1E3.pdf" },
                  { "s_no": 14, "code": "DCR1E4", "name": "Software Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR1E4.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "DCR2C1", "name": "Modelling and Simulation", "type": "PC4", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2C1.pdf" },
                  { "s_no": 2, "code": "DCR2C2", "name": "Mobile Communication Networks", "type": "PC5", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2C2.pdf" },
                  { "s_no": 3, "code": "DCR2C3", "name": "System Design Using Verilog", "type": "PC6", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2C3.pdf" },
                  { "s_no": 4, "code": "DCR2G1", "name": "Broadband Access Technology", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2G1.pdf" },
                  { "s_no": 5, "code": "DCR2E1", "name": "Analog and Digital CMOS Circuit Design", "type": "PE2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2E1.pdf" },
                  { "s_no": 6, "code": "ASR2S2", "name": "Soft Skills – 2", "type": "Skill", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 7, "code": "DCR2W2", "name": "Seminar / Workshop / Research Tool", "type": "Practical", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 8, "code": "DCR2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4", "pdfLink": "" },
                  { "s_no": 9, "code": "DCR2G2", "name": "Nanodevices & Nanosensors", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2G2.pdf" },
                  { "s_no": 10, "code": "DCR2G3", "name": "Advance Antenna System", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2G3.pdf" },
                  { "s_no": 11, "code": "DCR2G4", "name": "Industrial Communication", "type": "GE2", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCR2G4.pdf" }
                ]

            },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "IMR1C1", "name": "Productivity & Technology Management", "type": "PC1", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1C1.pdf" },
                  { "s_no": 2, "code": "IMR1C2", "name": "Quantitative Techniques for Management", "type": "PC2", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1C2.pdf" },
                  { "s_no": 3, "code": "IMR1C3", "name": "Production & Operations Management", "type": "PC3", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1C3.pdf" },
                  { "s_no": 4, "code": "IMR1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0 =4", "pdfLink": "" },
                  { "s_no": 5, "code": "IMR1Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1 =5", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR1S1", "name": "Soft Skills – 1", "type": "Skill", "credits": "2-0-0 =2", "pdfLink": "" },
                  { "s_no": 7, "code": "IMR1W1", "name": "Seminar/Res. Tool/Work Shop-1", "type": "Workshop", "credits": "0-2-0 =2", "pdfLink": "" },
                  { "s_no": 8, "code": "IMR1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4 =4", "pdfLink": "" },
                  { "s_no": 9, "code": "IMR1G1", "name": "Principles & Practices of Management", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1G1.pdf" },
                  { "s_no": 10, "code": "IMR1G2", "name": "Human Resource Management", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1G2.pdf" },
                  { "s_no": 11, "code": "IMR1G3", "name": "e–Business & Commerce", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1G3.pdf" },
                  { "s_no": 12, "code": "IMR1E1", "name": "Statistical Quality Control and Total Quality Management", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1E1.pdf" },
                  { "s_no": 13, "code": "IMR1E2", "name": "Strategic Management", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1E2.pdf" },
                  { "s_no": 14, "code": "IMR1E3", "name": "Business Process Reengineering", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR1E3.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "IMR2C1", "name": "Financial Management", "type": "PC4", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2C1.pdf" },
                  { "s_no": 2, "code": "IMR2C2", "name": "Materials Management", "type": "PC5", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2C2.pdf" },
                  { "s_no": 3, "code": "IMR2C3", "name": "Supply Chain Management", "type": "PC6", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2C3.pdf" },
                  { "s_no": 4, "code": "IMR2Gx", "name": "Generic Elective II", "type": "GE2", "credits": "3-1-0 =4", "pdfLink": "" },
                  { "s_no": 5, "code": "IMR2Ex", "name": "Elective II", "type": "PE2", "credits": "3-1-1 =5", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR2S2", "name": "Soft Skills – 2", "type": "Skill", "credits": "2-0-0 =2", "pdfLink": "" },
                  { "s_no": 7, "code": "IMR2W2", "name": "Seminar/Res. Tool/Work Shop-2", "type": "Workshop", "credits": "0-2-0 =2", "pdfLink": "" },
                  { "s_no": 8, "code": "IMR2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4 =4", "pdfLink": "" },
                  { "s_no": 9, "code": "IMR2G1", "name": "Project Management", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2G1.pdf" },
                  { "s_no": 10, "code": "IMR2G2", "name": "Enterprise Resource Planning", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2G2.pdf" },
                  { "s_no": 11, "code": "IMR2E1", "name": "Marketing Management", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2E1.pdf" },
                  { "s_no": 12, "code": "IMR2E2", "name": "Product Design and Manufacturing", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2E2.pdf" },
                  { "s_no": 13, "code": "IMR2E3", "name": "Customer Relationship Management", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2E3.pdf" },
                  { "s_no": 14, "code": "IMR2E4", "name": "Industrial Marketing", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMR2E4.pdf" }
                ]

            },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "DTR1C1", "name": "Tribology", "type": "PC1", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1C1.pdf" },
                  { "s_no": 2, "code": "DTR1C2", "name": "Design of Internal Combustion Engine Systems", "type": "PC2", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1C2.pdf" },
                  { "s_no": 3, "code": "DTR1C3", "name": "Advanced Machine Design", "type": "PC3", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1C3.pdf" },
                  { "s_no": 4, "code": "DTR1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0 =4", "pdfLink": "" },
                  { "s_no": 5, "code": "DTR1Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1 =5", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR1S1", "name": "Soft Skills -1", "type": "Skill", "credits": "2-0-0 =2", "pdfLink": "" },
                  { "s_no": 7, "code": "DTR1W1", "name": "Seminar/ Res. Tool/Work Shop-1", "type": "Workshop", "credits": "0-2-0 =2", "pdfLink": "" },
                  { "s_no": 8, "code": "DTR1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4 =4", "pdfLink": "" },
                  { "s_no": 9, "code": "DTR1G1", "name": "Advanced Thermodynamics", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1G1.pdf" },
                  { "s_no": 10, "code": "DTR1G2", "name": "Non Conventional Energy Systems", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1G2.pdf" },
                  { "s_no": 11, "code": "DTR1G3", "name": "Management Information System", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1G3.pdf" },
                  { "s_no": 12, "code": "DTR1G4", "name": "Finite Element Analysis", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1G4.pdf" },
                  { "s_no": 13, "code": "DTR1E1", "name": "Advanced Mechanics of Solids", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1E1.pdf" },
                  { "s_no": 14, "code": "DTR1E2", "name": "Fatigue Creep and Fracture", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1E2.pdf" },
                  { "s_no": 15, "code": "DTR1E3", "name": "Mechanism and Robot Kinematics", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1E3.pdf" },
                  { "s_no": 16, "code": "DTR1E4", "name": "Thermal Systems : Simulation and Design", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR1E4.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "DTR2C1", "name": "Machinery Fault Diagnosis and Signal Processing", "type": "PC4", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2C1.pdf" },
                  { "s_no": 2, "code": "DTR2C2", "name": "Advanced Refrigeration and Air Conditioning", "type": "PC5", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2C2.pdf" },
                  { "s_no": 3, "code": "DTR2C3", "name": "Computer Aided Modeling and Simulation", "type": "PC6", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2C3.pdf" },
                  { "s_no": 4, "code": "DTR2Gx", "name": "Generic Elective II", "type": "GE2", "credits": "3-1-0 =4", "pdfLink": "" },
                  { "s_no": 5, "code": "DTR2Ex", "name": "Elective II", "type": "PE2", "credits": "3-1-1 =5", "pdfLink": "" },
                  { "s_no": 6, "code": "ASR2S2", "name": "Soft Skills -2", "type": "Skill", "credits": "2-0-0 =2", "pdfLink": "" },
                  { "s_no": 7, "code": "DTR2W2", "name": "Seminar/ Res. Tool/Work Shop-2", "type": "Workshop", "credits": "0-2-0 =2", "pdfLink": "" },
                  { "s_no": 8, "code": "DTR2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4 =4", "pdfLink": "" },
                  { "s_no": 9, "code": "DTR2G1", "name": "Advanced Heat Transfer", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2G1.pdf" },
                  { "s_no": 10, "code": "DTR2G2", "name": "Rapid Prototyping", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2G2.pdf" },
                  { "s_no": 11, "code": "DTR2G3", "name": "Cogeneration and Waste Heat Recovery", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2G3.pdf" },
                  { "s_no": 12, "code": "DTR2G4", "name": "Mechatronics in Manufacturing Systems", "type": "GE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2G4.pdf" },
                  { "s_no": 13, "code": "DTR2E1", "name": "Machine Vibrations Analysis", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2E1.pdf" },
                  { "s_no": 14, "code": "DTR2E2", "name": "Experimental Stress Analysis", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2E2.pdf" },
                  { "s_no": 15, "code": "DTR2E3", "name": "Applied Elasticity and Plasticity", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2E3.pdf" },
                  { "s_no": 16, "code": "DTR2E4", "name": "Automotive Systems: Analysis and Design", "type": "PE2", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTR2E4.pdf" }
                ]

            },
          },
        },
      },
    },
    mtech_part_time: {
      courseName: "MTECH (Part Time)",
      branches: {
        "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "SEP1C1", "name": "Advanced Algorithms", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP1C1.pdf" },
                  { "s_no": 2, "code": "SEP1C2", "name": "Object Oriented Analysis & Design", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP1C2.pdf" },
                  { "s_no": 3, "code": "SEP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 4, "code": "SEP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "SEP1G1", "name": "Soft Computing", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP1G1.pdf" },
                  { "s_no": 6, "code": "SEP1G2", "name": "Distributed Operating System", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP1G2.pdf" },
                  { "s_no": 7, "code": "SEP1G3", "name": "Advance Computer Architecture", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP1G3.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "SEP2C3", "name": "Software Construction", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP2C3.pdf" },
                  { "s_no": 2, "code": "SEP2Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 3, "code": "SEP2W1", "name": "Seminar/ Workshop/Research Tool", "type": "Virtual", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 4, "code": "ASP2S1", "name": "Soft Skills -1", "type": "Virtual", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 5, "code": "SEP2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 6, "code": "SEP2E1", "name": "Database Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP2E1.pdf" },
                  { "s_no": 7, "code": "SEP2E2", "name": "Big Data Analytics", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP2E2.pdf" },
                  { "s_no": 8, "code": "SEP2E3", "name": "Secure Software Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/SEP2E3.pdf" }
                ]

            },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "ISP1C1", "name": "Advanced Algorithms", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1C1.pdf" },
                  { "s_no": 2, "code": "ISP1C2", "name": "Secure Computing Techniques", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1C2.pdf" },
                  { "s_no": 3, "code": "ISP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 4, "code": "ISP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "ISP1G1", "name": "Advanced Data Base Management Systems", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G1.pdf" },
                  { "s_no": 6, "code": "ISP1G2", "name": "Complexity of Security Algorithms", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G2.pdf" },
                  { "s_no": 7, "code": "ISP1G3", "name": "Agent Technology", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G3.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "ISP1C1", "name": "Advanced Algorithms", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1C1.pdf" },
                  { "s_no": 2, "code": "ISP1C2", "name": "Secure Computing Techniques", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1C2.pdf" },
                  { "s_no": 3, "code": "ISP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 4, "code": "ISP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "ISP1G1", "name": "Advanced Data Base Management Systems", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G1.pdf" },
                  { "s_no": 6, "code": "ISP1G2", "name": "Complexity of Security Algorithms", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G2.pdf" },
                  { "s_no": 7, "code": "ISP1G3", "name": "Agent Technology", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/ISP1G3.pdf" }
                ]

            },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "DIP1C1", "name": "Industrial Transducer & Smart Sensors", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1C1.pdf" },
                  { "s_no": 2, "code": "DIP1C2", "name": "Embedded System using ARM Microcontroller", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1C2.pdf" },
                  { "s_no": 3, "code": "DIP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 4, "code": "DIP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "DIP1G1", "name": "Advance System Design", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1G1.pdf" },
                  { "s_no": 6, "code": "DIP1G2", "name": "Wireless Sensor Network", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1G2.pdf" },
                  { "s_no": 7, "code": "DIP1G3", "name": "Advanced Communication Networks", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1G3.pdf" },
                  { "s_no": 8, "code": "DIP1G4", "name": "Medical Instrumentation", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP1G4.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "DIP2C3", "name": "Modern Control System", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP2C3.pdf" },
                  { "s_no": 2, "code": "DIP2EX", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 3, "code": "ASP2S1", "name": "Soft Skill I", "type": "SS", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 4, "code": "DIP2W1", "name": "Seminar / Workshop / Research Tool", "type": "Seminar", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 5, "code": "DIP2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 6, "code": "DIP2E1", "name": "Fuzzy Logic & Neural Network", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP2E1.pdf" },
                  { "s_no": 7, "code": "DIP2E2", "name": "Object Oriented Programming", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP2E2.pdf" },
                  { "s_no": 8, "code": "DIP2E3", "name": "Nano Devices and Nano sensors", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP2E3.pdf" },
                  { "s_no": 9, "code": "DIP2E4", "name": "Advance Digital Signal Processing", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DIP2E4.pdf" }
                ]

            },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "DCP1C1", "name": "Modern Communication System", "type": "PC1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1C1.pdf" },
                  { "s_no": 2, "code": "DCP1C2", "name": "Embedded System using ARM Microcontroller", "type": "PC2", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1C2.pdf" },
                  { "s_no": 3, "code": "DCP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0", "pdfLink": "" },
                  { "s_no": 4, "code": "DCP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "DCP1G1", "name": "Advance System Design", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1G1.pdf" },
                  { "s_no": 6, "code": "DCP1G2", "name": "Wireless Sensor Network", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1G2.pdf" },
                  { "s_no": 7, "code": "DCP1G3", "name": "Advance Digital Signal Processing", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1G3.pdf" },
                  { "s_no": 8, "code": "DCP1G4", "name": "Information Theory and Coding", "type": "GE1", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP1G4.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "DCP2C3", "name": "Advance Computer Networking", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP2C3.pdf" },
                  { "s_no": 2, "code": "DCP2Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 3, "code": "DCP2W1", "name": "Seminar/ Workshop/Research Tool", "type": "Workshop", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 4, "code": "ASP2S1", "name": "Soft Skills -1", "type": "Soft Skill", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 5, "code": "DCP2V2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 6, "code": "DCP2E1", "name": "Satellite Communication", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP2E1.pdf" },
                  { "s_no": 7, "code": "DCP2E2", "name": "Object Oriented Programming", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP2E2.pdf" },
                  { "s_no": 8, "code": "DCP2E3", "name": "Embedded RTOS", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP2E3.pdf" },
                  { "s_no": 9, "code": "DCP2E4", "name": "Software Engineering", "type": "PE1", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DCP2E4.pdf" }
                ]

            },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "IMP1C1", "name": "Productivity & Technology Management", "type": "PC1", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP1C1.pdf" },
                  { "s_no": 2, "code": "IMP1C2", "name": "Quantitative Techniques for Management", "type": "PC2", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP1C2.pdf" },
                  { "s_no": 3, "code": "IMP1Gx", "name": "Generic Elective I", "type": "GE1", "credits": "3-1-0 =4", "pdfLink": "" },
                  { "s_no": 4, "code": "IMP1V1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-2 =2", "pdfLink": "" },
                  { "s_no": 5, "code": "IMP1G1", "name": "Principles & Practices of Management", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP1G1.pdf" },
                  { "s_no": 6, "code": "IMP1G2", "name": "Human Resource Management", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP1G2.pdf" },
                  { "s_no": 7, "code": "IMP1G3", "name": "e–Business & Commerce", "type": "GE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP1G3.pdf" }
                ]

            },
            "Semester 2": { subjects: [] },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": {
              subjects:
                [
                  { "s_no": 1, "code": "IMP2C3", "name": "Production & Operations Management", "type": "PC3", "credits": "3-1-1 =5", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP2C3.pdf" },
                  { "s_no": 2, "code": "IMP2Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1 =5", "pdfLink": "" },
                  { "s_no": 3, "code": "IMP2W1", "name": "Seminar/Res. Tool/Work Shop-1", "type": "", "credits": "0-2-0 =2", "pdfLink": "" },
                  { "s_no": 4, "code": "IMP2V2", "name": "Comprehensive Viva II", "type": "", "credits": "0-0-2 =2", "pdfLink": "" },
                  { "s_no": 5, "code": "ASP2S1", "name": "Soft Skills -1", "type": "", "credits": "2-0-0 =2", "pdfLink": "" },
                  { "s_no": 6, "code": "IMP2E1", "name": "Statistical Quality Control and Total Quality Management", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP2E1.pdf" },
                  { "s_no": 7, "code": "IMP2E2", "name": "Strategic Management", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP2E2.pdf" },
                  { "s_no": 8, "code": "IMP2E3", "name": "Business Process Reengineering", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/IMP2E3.pdf" }
                ]

            },
            "Semester 2": {
              subjects:
                [
                  { "s_no": 1, "code": "DTP2C3", "name": "Advance Machine Design", "type": "PC3", "credits": "3-1-1", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTP2C3.pdf" },
                  { "s_no": 2, "code": "DTP2Ex", "name": "Elective I", "type": "PE1", "credits": "3-1-1", "pdfLink": "" },
                  { "s_no": 3, "code": "DTP2W1", "name": "Seminar/Workshop/Research Tool", "type": "", "credits": "0-2-0", "pdfLink": "" },
                  { "s_no": 4, "code": "DTP2V2", "name": "Comprehensive Viva II", "type": "", "credits": "0-0-2", "pdfLink": "" },
                  { "s_no": 5, "code": "ASP2S1", "name": "Soft Skills -1", "type": "", "credits": "2-0-0", "pdfLink": "" },
                  { "s_no": 6, "code": "DTP2E1", "name": "Advance Mechanics of Solids", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTP2E1.pdf" },
                  { "s_no": 7, "code": "DTP2E2", "name": "Fatigue Creep and Fracture", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTP2E2.pdf" },
                  { "s_no": 8, "code": "DTP2E3", "name": "Mechanism and Robot Kinematics", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTP2E3.pdf" },
                  { "s_no": 9, "code": "DTP2E4", "name": "Thermal Systems: Simulation and Design", "type": "PE1", "credits": "", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/ME_Syllabus/DTP2E4.pdf" }
                ]

            },
          },
        },
      },
    },
    msc: {
      courseName: "M.Sc.",
      branches: {
        "Applied Mathematics (Computing & Informatics)": {
          semesters: {
            "Semester 1": {
              subjects: [
                { "s_no": 1, "code": "AM1PC1", "name": "Algebra", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1PC1.pdf" },
                { "s_no": 2, "code": "AM1PC2", "name": "Discrete Mathematics", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1PC2.pdf" },
                { "s_no": 3, "code": "AM1PC3", "name": "Numerical Analysis / Integral Equations", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1PC3.pdf" },
                { "s_no": 4, "code": "AM1SS1", "name": "Advanced Communication Skills", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1SS1.pdf" },
                { "s_no": 5, "code": "AM1GEx", "name": "Generic Elective I", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1GEx.pdf" },
                { "s_no": 6, "code": "AM1PR1", "name": "Computer Lab-I (MATLAB)", "type": "Practical", "credits": "0-0-2", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1PR1.pdf" },
                { "s_no": 7, "code": "AM1CV1", "name": "Comprehensive Viva I", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1CV1.pdf" },

                { "s_no": 8, "code": "AM1GE1", "name": "Computer Architecture/ Digital Electronics and Computer Organization", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1GE1.pdf" },
                { "s_no": 9, "code": "AM1GE2", "name": "Advanced Special Functions", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1GE2.pdf" },
                { "s_no": 10, "code": "AM1GE3", "name": "Financial Accounts", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM1GE3.pdf" }

              ]
            },
            "Semester 2": {
              subjects: [
                { "s_no": 1, "code": "AM2PC1", "name": "Real Analysis / Measure Theory", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2PC1.pdf" },
                { "s_no": 2, "code": "AM2PC2", "name": "Advanced Differential Equations", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2PC2.pdf" },
                { "s_no": 3, "code": "AM2PC3", "name": "Theory of Computation", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2PC3.pdf" },
                { "s_no": 4, "code": "AM2ECx", "name": "Discipline Elective I", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2ECx.pdf" },
                { "s_no": 5, "code": "AM2EMx", "name": "Discipline Elective II", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2EMx.pdf" },
                { "s_no": 6, "code": "AM2PR2", "name": "Computer Lab-II (Of Subject of Discipline Elective - I)", "type": "Practical", "credits": "0-0-2", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2PR2.pdf" },
                { "s_no": 7, "code": "AM2CV2", "name": "Comprehensive Viva II", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2CV2.pdf" },

                { "s_no": 8, "code": "AM2EC1", "name": "Object Oriented Programming with Core Java", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2EC1.pdf" },
                { "s_no": 9, "code": "AM2EC2", "name": "Comp. Graphics / Multimedia", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2EC2.pdf" },
                { "s_no": 10, "code": "AM2EM1", "name": "Operations Research-I", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2EM1.pdf" },
                { "s_no": 11, "code": "AM2EM2", "name": "Soft Computing Techniques", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM2EM2.pdf" }

              ]
            },
            "Semester 3": {
              subjects: [
                { "s_no": 1, "code": "AM3PC1", "name": "Topology", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3PC1.pdf" },
                { "s_no": 2, "code": "AM3PC2", "name": "Database Theory", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3PC2.pdf" },
                { "s_no": 3, "code": "AM3PC3", "name": "Mathematical Statistics", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3PC3.pdf" },
                { "s_no": 4, "code": "AM3SS2", "name": "Life Management Skills", "type": "Skill", "credits": "2-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3SS2.pdf" },
                { "s_no": 5, "code": "AM3GEx", "name": "Generic Elective II", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3GEx.pdf" },
                { "s_no": 6, "code": "AM3PR3", "name": "Computer Lab-III (Research Tools)", "type": "Practical", "credits": "0-0-2", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3PR3.pdf" },
                { "s_no": 7, "code": "AM3CV3", "name": "Comprehensive Viva III", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3CV3.pdf" },

                { "s_no": 8, "code": "AM3GE1", "name": "OS/Microprocessor", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3GE1.pdf" },
                { "s_no": 9, "code": "AM3GE2", "name": "Integral Transforms", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3GE2.pdf" },
                { "s_no": 10, "code": "AM3GE3", "name": "Financial Management", "type": "Generic", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM3GE3.pdf" }

              ]
            },
            "Semester 4": {
              subjects: [
                { "s_no": 1, "code": "AM4PC1", "name": "Complex Analysis", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4PC1.pdf" },
                { "s_no": 2, "code": "AM4PC2", "name": "Analysis of Algorithm", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4PC2.pdf" },
                { "s_no": 3, "code": "AM4PC3", "name": "Functional Analysis", "type": "Core", "credits": "3-1-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4PC3.pdf" },
                { "s_no": 4, "code": "AM4ECx", "name": "Discipline Elective III", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4ECx.pdf" },
                { "s_no": 5, "code": "AM4EMx", "name": "Discipline Elective IV", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EMx.pdf" },
                { "s_no": 6, "code": "AM4Dxx", "name": "Discipline Elective V", "type": "Diss. Work", "credits": "0-2-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4Dxx.pdf" },
                { "s_no": 7, "code": "AM4PR4", "name": "Computer Lab-IV (Of Subject of Discipline Elective - III)", "type": "Practical", "credits": "0-0-2", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4PR4.pdf" },
                { "s_no": 8, "code": "AM4CV4", "name": "Comprehensive Viva IV", "type": "Viva", "credits": "0-0-4", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4CV4.pdf" },

                { "s_no": 9, "code": "AM4EC1", "name": "Advanced Java", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EC1.pdf" },
                { "s_no": 10, "code": "AM4EC2", "name": "Unix / Linux Administration", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EC2.pdf" },
                { "s_no": 11, "code": "AM4EC3", "name": "Computer Network/ Internet & Web Technology", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EC3.pdf" },

                { "s_no": 12, "code": "AM4EM1", "name": "Operations Research-II", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EM1.pdf" },
                { "s_no": 13, "code": "AM4EM2", "name": "Mathematical Modeling", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EM2.pdf" },
                { "s_no": 14, "code": "AM4EM3", "name": "Number Theory/Cryptography", "type": "Disc. Elec.", "credits": "3-0-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4EM3.pdf" },

                { "s_no": 15, "code": "AM4DW1", "name": "Dissertation (Minor)", "type": "Diss. Work", "credits": "0-0-6", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4DW1.pdf" },
                { "s_no": 16, "code": "AM4DS1", "name": "Seminar", "type": "Diss. Work", "credits": "0-2-0", "pdfLink": "https://www.ietdavv.edu.in/images/downloads/syllabus/MSc/AM4DS1.pdf" }

              ]
            },
          },
        },
      },
    },
    phd: {
      courseName: "Ph.D.",
      branches: {
        "Doctoral Program": {
          semesters: {
            "Course Work": { subjects: [] },
          },
        },
      },
    },
  },
};