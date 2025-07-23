interface Semester {
  PdfLink: string;
}

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
            "Semester 1": { PdfLink: "https://example.com/cse-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/cse-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/cse-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/cse-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/cse-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/cse-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/cse-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/cse-sem8.pdf" },
          },
        },
        "Information Technology": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/it-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/it-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/it-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/it-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/it-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/it-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/it-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/it-sem8.pdf" },
          },
        },
        "Electronics & Telecommunication Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/etc-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/etc-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/etc-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/etc-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/etc-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/etc-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/etc-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/etc-sem8.pdf" },
          },
        },
        "Electronics & Instrumentation Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/ei-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/ei-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/ei-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/ei-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/ei-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/ei-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/ei-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/ei-sem8.pdf" },
          },
        },
        "Mechanical Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/me-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/me-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/me-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/me-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/me-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/me-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/me-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/me-sem8.pdf" },
          },
        },
        "Civil Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/ce-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/ce-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/ce-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/ce-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/ce-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/ce-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/ce-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/ce-sem8.pdf" },
          },
        },
        "Computer Science and Business Studies": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/csbs-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/csbs-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/csbs-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/csbs-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/csbs-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/csbs-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/csbs-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/csbs-sem8.pdf" },
          },
        },
      },
    },
    be_btech_part_time: {
      courseName: "BE/B.Tech (Part Time)",
      branches: {
        "Computer Science and Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/pt-cse-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/pt-cse-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/pt-cse-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/pt-cse-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/pt-cse-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/pt-cse-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/pt-cse-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/pt-cse-sem8.pdf" },
          },
        },
        "Information Technology": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/it-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/it-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/it-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/it-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/it-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/it-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/it-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/it-sem8.pdf" },
          },
        },
        "Electronics & Telecommunication Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/etc-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/etc-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/etc-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/etc-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/etc-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/etc-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/etc-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/etc-sem8.pdf" },
          },
        },
        "Electronics & Instrumentation Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/ei-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/ei-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/ei-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/ei-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/ei-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/ei-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/ei-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/ei-sem8.pdf" },
          },
        },
        "Mechanical Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/me-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/me-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/me-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/me-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/me-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/me-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/me-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/me-sem8.pdf" },
          },
        },
        "Civil Engineering": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/ce-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/ce-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/ce-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/ce-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/ce-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/ce-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/ce-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/ce-sem8.pdf" },
          },
        },
        "Computer Science and Business Studies": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/csbs-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/csbs-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/csbs-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/csbs-sem4.pdf" },
            "Semester 5": { PdfLink: "https://example.com/csbs-sem5.pdf" },
            "Semester 6": { PdfLink: "https://example.com/csbs-sem6.pdf" },
            "Semester 7": { PdfLink: "https://example.com/csbs-sem7.pdf" },
            "Semester 8": { PdfLink: "https://example.com/csbs-sem8.pdf" },
          },
        },
      },
    },
    mtech_full_time: {
      courseName: "M.Tech (Full Time)",
      branches: {
        "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-cses-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-cses-sem2.pdf" },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-iti-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-iti-sem2.pdf" },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-eid-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-eid-sem2.pdf" },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-edc-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-edc-sem2.pdf" },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-iem-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-iem-sem2.pdf" },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-medt-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-medt-sem2.pdf" },
          },
        },
      },
    },
    mtech_part_time: {
      courseName: "M.Tech (Part Time)",
      branches: {
       "Computer Engineering (Software Engg.)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-cses-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-cses-sem2.pdf" },
          },
        },
        "Information Technology (InfoSec)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-iti-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-iti-sem2.pdf" },
          },
        },
        "Electronics (Digital Instrumentation)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-eid-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-eid-sem2.pdf" },
          },
        },
        "Electronics (Digital Communication)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-edc-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-edc-sem2.pdf" },
          },
        },
        "Industrial Engg. & Mgmt": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-iem-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-iem-sem2.pdf" },
          },
        },
        "Mechanical (Design & Thermal)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/mtech-medt-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/mtech-medt-sem2.pdf" },
          },
        },
      },
    },
    msc: {
      courseName: "M.Sc.",
      branches: {
        "Applied Mathematics (Computing & Informatics)": {
          semesters: {
            "Semester 1": { PdfLink: "https://example.com/msc-amci-sem1.pdf" },
            "Semester 2": { PdfLink: "https://example.com/msc-amci-sem2.pdf" },
            "Semester 3": { PdfLink: "https://example.com/msc-amci-sem3.pdf" },
            "Semester 4": { PdfLink: "https://example.com/msc-amci-sem4.pdf" },
          },
        },
      },
    },
    phd: {
      courseName: "Ph.D.",
      branches: {
        "Doctoral Program": {
          semesters: {
            "Course Work": { PdfLink: "https://example.com/phd-coursework.pdf" },
          },
        },
      },
    },
  },
};