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
      courseName: "BE/B.Tech (Full Time)",
      branches: {
        "Computer Science and Engineering": {
          semesters: {
            "Semester 1": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 2": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 3": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 4": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 5": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 6": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 7": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
            "Semester 8": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
          },
        },
        "Information Technology": {
          semesters: {
            "Semester 1": { 
              subjects: [
                { s_no: 1, code: "AMR1C1", name: "Applied Mathematics-I", credits: "3-1-0", type: "PC1", pdfLink: "https://example.com/syllabus-maths1.pdf" },
                { s_no: 2, code: "ACR1C2", name: "Chemistry & Environment Science", credits: "3-1-1", type: "PC2", pdfLink: "https://example.com/syllabus-chemistry.pdf" },
                { s_no: 3, code: "MER1C3", name: "Elements of Mechanical Engineering", credits: "3-1-1", type: "PC3", pdfLink: "https://example.com/syllabus-mech.pdf" },
                { s_no: 4, code: "ETR1C4", name: "Basic Electronics", credits: "3-1-1", type: "PC4", pdfLink: "https://example.com/syllabus-electronics.pdf" },
                { s_no: 5, code: "MER1C5", name: "Workshop Practice", credits: "0-1-2", type: "PC5", pdfLink: "https://example.com/syllabus-workshop.pdf" },
                { s_no: 6, code: "SSR1S1", name: "Technical English", credits: "3-1-0", type: "SS1", pdfLink: "https://example.com/syllabus-english.pdf" },
                { s_no: 7, code: "BER1V1", name: "Comprehensive Viva I", credits: "0-0-4", type: "Viva1", pdfLink: "https://example.com/syllabus-viva.pdf" },
              ],
             },
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
    be_btech_part_time: {
      courseName: "BE/B.Tech (Part Time)",
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
      courseName: "M.Tech (Full Time)",
      branches: {
        "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
      },
    },
    mtech_part_time: {
      courseName: "M.Tech (Part Time)",
      branches: {
       "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
          },
        },
      },
    },
    msc: {
      courseName: "M.Sc.",
      branches: {
        "Applied Mathematics (Computing & Informatics)": {
          semesters: {
            "Semester 1": { subjects: [] },
            "Semester 2": { subjects: [] },
            "Semester 3": { subjects: [] },
            "Semester 4": { subjects: [] },
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