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

// data.ts
export const freshersCornerData: FreshersCornerData = {
  BTECH_FULL_TIME: {
    courseName: "B.Tech (Full Time)",
    branches: {
      CSE: {
        branchName: "Computer Science and Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/cse-calendar.pdf",
                    testTimeTable: "https://example.com/cse-test.pdf",
                   
                    examTimeTable: "https://example.com/cse-exam.pdf", },
        },
      },
      IT: {
        branchName: "Information Technology",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/it-calendar.pdf",
                    testTimeTable: "https://example.com/it-test.pdf",
                    examTimeTable: "https://example.com/it-exam.pdf", },
        },
      },
      ETC: {
        branchName: "Electronics & Telecommunication Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/etc-calendar.pdf",
                    testTimeTable: "https://example.com/etc-test.pdf",
                    examTimeTable: "https://example.com/etc-exam.pdf", },
        },
      },
      EI: {
        branchName: "Electronics & Instrumentation Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/ei-class.pdf",
                    calendar: "https://example.com/ei-calendar.pdf",
                    testTimeTable: "https://example.com/ei-test.pdf",
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/ei-exam.pdf", },
        },
      },
      ME: {
        branchName: "Mechanical Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/me-class.pdf",
                    calendar: "https://example.com/me-calendar.pdf",
                    testTimeTable: "https://example.com/me-test.pdf",
                    syllabus: {
                    I: "https://example.com/me-1st-sem1.pdf",
                    II: "https://example.com/me-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/me-exam.pdf", },
        },
      },
      CE: {
        branchName: "Civil Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/ce-class.pdf",
                    calendar: "https://example.com/ce-calendar.pdf",
                    testTimeTable: "https://example.com/ce-test.pdf",
                    syllabus: {
                    I: "https://example.com/ce-1st-sem1.pdf",
                    II: "https://example.com/ce-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/ce-exam.pdf", },
        },
      },
    },
  },

  BTECH_PART_TIME: {
    courseName: "B.Tech (Part Time)",
    branches: {
      CSE: {
        branchName: "Computer Science and Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/cse-calendar.pdf",
                    testTimeTable: "https://example.com/cse-test.pdf",
                   
                    examTimeTable: "https://example.com/cse-exam.pdf", },
        },
      },
      IT: {
        branchName: "Information Technology",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/it-calendar.pdf",
                    testTimeTable: "https://example.com/it-test.pdf",
                    examTimeTable: "https://example.com/it-exam.pdf", },
        },
      },
      ETC: {
        branchName: "Electronics & Telecommunication Engineering",
        years: {
          "1st": { classTimeTable: {
                    A: "https://example.com/cse-1st-year-section-a.pdf",
                    B: "https://example.com/cse-1st-year-section-b.pdf"
                    },
                    syllabus: {
                    I: "https://example.com/cse-1st-sem1.pdf",
                    II: "https://example.com/cse-1st-sem2.pdf"
                    },
                    calendar: "https://example.com/etc-calendar.pdf",
                    testTimeTable: "https://example.com/etc-test.pdf",
                    examTimeTable: "https://example.com/etc-exam.pdf", },
        },
      },
      EI: {
        branchName: "Electronics & Instrumentation Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/ei-class.pdf",
                    calendar: "https://example.com/ei-calendar.pdf",
                    testTimeTable: "https://example.com/ei-test.pdf",
                    syllabus: {
                    I: "https://example.com/ei-1st-sem1.pdf",
                    II: "https://example.com/ei-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/ei-exam.pdf", },
        },
      },
      ME: {
        branchName: "Mechanical Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/me-class.pdf",
                    calendar: "https://example.com/me-calendar.pdf",
                    testTimeTable: "https://example.com/me-test.pdf",
                    syllabus: {
                    I: "https://example.com/me-1st-sem1.pdf",
                    II: "https://example.com/me-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/me-exam.pdf", },
        },
      },
      CE: {
        branchName: "Civil Engineering",
        years: {
          "1st": { classTimeTable: "https://example.com/ce-class.pdf",
                    calendar: "https://example.com/ce-calendar.pdf",
                    testTimeTable: "https://example.com/ce-test.pdf",
                    syllabus: {
                    I: "https://example.com/ce-1st-sem1.pdf",
                    II: "https://example.com/ce-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/ce-exam.pdf", },
        },
      },
    },
  },

  MTECH_FULL_TIME: {
    courseName: "M.Tech (Full Time)",
    branches: {
      CSES: {
        branchName: "Computer Engineering (Software Engg.)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-cses-class.pdf",
                    calendar: "https://example.com/mtech-cses-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-cses-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-cses-1st-sem1.pdf",
                      II: "https://example.com/mtech-cses-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-cses-exam.pdf", },
        },
      },
      ITI: {
        branchName: "Information Technology (InfoSec)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-iti-class.pdf",
                    calendar: "https://example.com/mtech-iti-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-iti-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-iti-1st-sem1.pdf",
                      II: "https://example.com/mtech-iti-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-iti-exam.pdf", },
        },
      },
      EID: {
        branchName: "Electronics (Digital Instrumentation)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-eid-class.pdf",
                    calendar: "https://example.com/mtech-eid-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-eid-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-eid-1st-sem1.pdf",
                      II: "https://example.com/mtech-eid-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-eid-exam.pdf", },
        },
      },
      EDC: {
        branchName: "Electronics (Digital Communication)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-edc-class.pdf",
                    calendar: "https://example.com/mtech-edc-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-edc-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-edc-1st-sem1.pdf",
                      II: "https://example.com/mtech-edc-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-edc-exam.pdf", },
        },
      },
      IEM: {
        branchName: "Industrial Engg. & Mgmt",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-iem-class.pdf",
                    calendar: "https://example.com/mtech-iem-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-iem-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-iem-1st-sem1.pdf",
                      II: "https://example.com/mtech-iem-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-iem-exam.pdf", },
        },
      },
      MEDT: {
        branchName: "Mechanical (Design & Thermal)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-medt-class.pdf",
                    calendar: "https://example.com/mtech-medt-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-medt-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-medt-1st-sem1.pdf",
                      II: "https://example.com/mtech-medt-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-medt-exam.pdf", },
        },
      },
    },
  },

  MTECH_PART_TIME: {
    courseName: "M.Tech (Part Time)",
    branches: {
      CSES: {
        branchName: "Computer Engineering (Software Engg.)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-cses-class.pdf",
                    calendar: "https://example.com/mtech-cses-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-cses-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-cses-1st-sem1.pdf",
                      II: "https://example.com/mtech-cses-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-cses-exam.pdf", },
        },
      },
      ITI: {
        branchName: "Information Technology (InfoSec)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-iti-class.pdf",
                    calendar: "https://example.com/mtech-iti-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-iti-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-iti-1st-sem1.pdf",
                      II: "https://example.com/mtech-iti-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-iti-exam.pdf", },
        },
      },
      EID: {
        branchName: "Electronics (Digital Instrumentation)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-eid-class.pdf",
                    calendar: "https://example.com/mtech-eid-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-eid-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-eid-1st-sem1.pdf",
                      II: "https://example.com/mtech-eid-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-eid-exam.pdf", },
        },
      },
      EDC: {
        branchName: "Electronics (Digital Communication)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-edc-class.pdf",
                    calendar: "https://example.com/mtech-edc-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-edc-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-edc-1st-sem1.pdf",
                      II: "https://example.com/mtech-edc-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-edc-exam.pdf", },
        },
      },
      IEM: {
        branchName: "Industrial Engg. & Mgmt",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-iem-class.pdf",
                    calendar: "https://example.com/mtech-iem-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-iem-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-iem-1st-sem1.pdf",
                      II: "https://example.com/mtech-iem-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-iem-exam.pdf", },
        },
      },
      MEDT: {
        branchName: "Mechanical (Design & Thermal)",
        years: {
          "1st": { classTimeTable: "https://example.com/mtech-medt-class.pdf",
                    calendar: "https://example.com/mtech-medt-calendar.pdf",
                    testTimeTable: "https://example.com/mtech-medt-test.pdf",
                    syllabus: {
                      I: "https://example.com/mtech-medt-1st-sem1.pdf",
                      II: "https://example.com/mtech-medt-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/mtech-medt-exam.pdf", },
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
          "1st": { classTimeTable: "https://example.com/phd-dp-class.pdf",
                    calendar: "https://example.com/phd-dp-calendar.pdf",
                    testTimeTable: "https://example.com/phd-dp-test.pdf",
                    syllabus: {
                      I: "https://example.com/phd-dp-1st-sem1.pdf",
                      II: "https://example.com/phd-dp-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/phd-dp-exam.pdf", },
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
          "1st": { classTimeTable: "https://example.com/phd-dp-class.pdf",
                    calendar: "https://example.com/phd-dp-calendar.pdf",
                    testTimeTable: "https://example.com/phd-dp-test.pdf",
                    syllabus: {
                      I: "https://example.com/phd-dp-1st-sem1.pdf",
                      II: "https://example.com/phd-dp-1st-sem2.pdf"
                    },
                    examTimeTable: "https://example.com/phd-dp-exam.pdf", },
        },
      },
    },
  },
};
