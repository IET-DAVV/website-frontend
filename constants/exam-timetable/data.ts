
interface ExamTimeTableData {
    courses: {
        [courseKey: string]: {
            section: string;
            branches: {
                [branchName: string]: {
                    sections: {
                        [section: string]: {
                            PdfLink: string;
                        };
                    };
                };
            };
        };
    };
}

export const examtimetableData: ExamTimeTableData = {
  courses: {
    "Exam Timetable": {
      section: "Exam Timetable",
      branches: {
        "BTECH I YEAR": {
          sections: {
            "1st Year": {
              PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
            },
          },
        },
        "BTECH II-IV YEAR": {
          sections: {
            "2nd- 4th Year": {
              PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
            },
          },
        },
      },
    },

    "Practical Timetable": {
      section: "Practical Timetable",
      branches: {
        "BTECH I YEAR": {
          sections: {
            "1st Year": {
              PdfLink: "https://example.com/practical/cse-1st.pdf",
            }
          },
        },
        "BTECH II-IV YEAR": {
          sections: {
            "2nd- 4th Year": {
              PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
            },
          },
        },
      },
    },

    "Exam Notice": {
      section: "Exam Notice",
      branches: {}, // Empty, handled on a separate page
    },
  },
};
export const notice = [
  {
    items: [
      {
        label: "Notice regarding schedule of viewing answer-books for review  ",
        extralabel: "(for BE I Year-IVYear students)",
        file: "https://www.ietdavv.edu.in/images/new_images/download.png",
      },
      {
        label: "Notice regarding observation of answer-books",
        extralabel: " (for BE II Year / III Year / IVYear students) ",
        file: "https://www.ietdavv.edu.in/images/new_images/download.png",
      },
      {
        label: "Notice regarding Use or attempt to use Unfair Means in Examination ",
        extralabel: "(for all students)",
        file: "https://www.ietdavv.edu.in/images/new_images/download.png",
      },
      
    ],
  },
];