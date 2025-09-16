export interface FresherYearData {
  classTimeTable?: string | { [section: string]: string }; // A/B
  calendar?: string;
  testTimeTable?: string;
  syllabus?: string | { [semester: string]: string }; // I/II
  examTimeTable?: string;
}



export interface FresherBranchData {
  branchName: string;
  years: {
    [year: string]: FresherYearData;
  };
}

export interface FresherCourseData {
  courseName: string;
  branches: {
    [branch: string]: FresherBranchData;
  };
}

export type FreshersCornerData = {
  [courseKey: string]: FresherCourseData;
};

// NOTE: Replace all "https://www.ietdavv.edu.in/images/freshers/" URLs with actual college website URLs
// Correct format: "https://www.ietdavv.edu.in/images/freshers/[branch]-[type].pdf"
// Example working URL from timetable: "https://www.ietdavv.edu.in/images/timetable/IyrCSA.pdf"
// Working sample URL: "http://www.pdf995.com/samples/pdf.pdf" (for testing)

// data.ts
export const freshersCornerData: FreshersCornerData = {
  BTECH_FULL_TIME: {
    courseName: "BE/BTECH (Full Time)",
    branches: {
      CSE: {
        branchName: "Computer Science and Engineering",
        years: {
          "1st": { 
            classTimeTable: {
              A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
              B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
            },
            syllabus: {
              I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
              II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
            },
            calendar: "https://www.ietdavv.edu.in/images/freshers/cse-calendar.pdf",
            testTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-test.pdf",
            examTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-exam.pdf"
          },
        },
      },
      IT: {
        branchName: "Information Technology",
        years: {
          "1st": { classTimeTable: {
                    A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/it-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/it-test.pdf",
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/it-exam.pdf", },
        },
      },
      ETC: {
        branchName: "Electronics & Telecommunication Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/etc-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/etc-test.pdf",
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/etc-exam.pdf", },
        },
      },
      EI: {
        branchName: "Electronics & Instrumentation Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/ei-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-exam.pdf", },
        },
      },
      ME: {
        branchName: "Mechanical Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/me-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/me-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/me-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-exam.pdf", },
        },
      },
      CE: {
        branchName: "Civil Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/ce-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/ce-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/ce-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-exam.pdf", },
        },
      },
      CSBS: {
        branchName: "Computer Science and Business Studies",
        years: {
          "1st": { classTimeTable:"https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/cse-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-test.pdf",
                   
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-exam.pdf", },
        },
    },
  },
  },

  BTECH_PART_TIME: {
    courseName: "BE/BTECH (Part Time)",
    branches: {
      CSE: {
        branchName: "Computer Science and Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/cse-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-test.pdf",
                   
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-exam.pdf", },
        },
      },
      IT: {
        branchName: "Information Technology",
        years: {
          "1st": { classTimeTable: {
                    A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/it-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/it-test.pdf",
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/it-exam.pdf", },
        },
      },
      ETC: {
        branchName: "Electronics & Telecommunication Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-a.pdf",
                    B: "https://www.ietdavv.edu.in/images/freshers/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/etc-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/etc-test.pdf",
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/etc-exam.pdf", },
        },
      },
      EI: {
        branchName: "Electronics & Instrumentation Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/ei-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/ei-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/ei-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/ei-exam.pdf", },
        },
      },
      ME: {
        branchName: "Mechanical Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/me-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/me-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/me-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/me-exam.pdf", },
        },
      },
      CE: {
        branchName: "Civil Engineering",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/ce-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-test.pdf",
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/ce-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/ce-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/ce-exam.pdf", },
        },
      },
      CSBS: {
        branchName: "Computer Science and Business Studies",
        years: {
          "1st": { classTimeTable:"https://www.ietdavv.edu.in/images/freshers/csbs-1st-year-section-a.pdf",
                  
                    syllabus: {
                    I: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem1.pdf",
                    II: "https://www.ietdavv.edu.in/images/freshers/cse-1st-sem2.pdf"
                    },
                    calendar: "https://www.ietdavv.edu.in/images/freshers/cse-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-test.pdf",
                   
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/cse-exam.pdf", },
        },
    },
  },
  },

  MTECH_FULL_TIME: {
    courseName: "MTECH (Full Time)",
    branches: {
      CSES: {
        branchName: "Computer Engineering (Software Engg.)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-exam.pdf", },
        },
      },
      ITI: {
        branchName: "Information Technology (InfoSec)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-exam.pdf", },
        },
      },
      EID: {
        branchName: "Electronics (Digital Instrumentation)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-exam.pdf", },
        },
      },
      EDC: {
        branchName: "Electronics (Digital Communication)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-exam.pdf", },
        },
      },
      IEM: {
        branchName: "Industrial Engg. & Mgmt",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-exam.pdf", },
        },
      },
      MEDT: {
        branchName: "Mechanical (Design & Thermal)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-exam.pdf", },
        },
      },
    },
  },

  MTECH_PART_TIME: {
    courseName: "MTECH (Part Time)",
    branches: {
      CSES: {
        branchName: "Computer Engineering (Software Engg.)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-cses-exam.pdf", },
        },
      },
      ITI: {
        branchName: "Information Technology (InfoSec)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iti-exam.pdf", },
        },
      },
      EID: {
        branchName: "Electronics (Digital Instrumentation)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-eid-exam.pdf", },
        },
      },
      EDC: {
        branchName: "Electronics (Digital Communication)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-edc-exam.pdf", },
        },
      },
      IEM: {
        branchName: "Industrial Engg. & Mgmt",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-iem-exam.pdf", },
        },
      },
      MEDT: {
        branchName: "Mechanical (Design & Thermal)",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/mtech-medt-exam.pdf", },
        },
      },
    },
  },

  PHD: {
    courseName: "Ph.D.",
    branches: {
      DP: {
        branchName: "Doctoral Program",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/phd-dp-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/phd-dp-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/phd-dp-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-exam.pdf", },
        },
      },
    },
  },

  MSC: {
    courseName: "M.Sc.",
    branches: {
      DP: {
        branchName: "Science",
        years: {
          "1st": { classTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-class.pdf",
                    calendar: "https://www.ietdavv.edu.in/images/freshers/phd-dp-calendar.pdf",
                    testTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-test.pdf",
                    syllabus: {
                      I: "https://www.ietdavv.edu.in/images/freshers/phd-dp-1st-sem1.pdf",
                      II: "https://www.ietdavv.edu.in/images/freshers/phd-dp-1st-sem2.pdf"
                    },
                    examTimeTable: "https://www.ietdavv.edu.in/images/freshers/phd-dp-exam.pdf", },
        },
      },
    },
  },
};
