interface TimetableData {
  courses: {
    [courseKey: string]: {
      courseName: string;
      branches: {
        [branchName: string]: {
          years: {
            [year: string]: {
              sections: {
                [section: string]: {
                  PdfLink: string;
                };
              };
            };
          };
        };
      };
    };
  };
}

export const timetableData: TimetableData = {
  courses: {
    BE_FULL_TIME: {
      courseName: "B.E (FULL TIME)",
      branches: {
        "Computer Science": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
          },
        },
        "Computer Science and Business System": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
          },
        },
        "Information Technology": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_IT_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Mechanical Engineering": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ME_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ME_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ME_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ME_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ME_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ME_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ME_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ME_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Electronics and Instrumentation": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_EI_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_EI_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_EI_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_EI_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_EI_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_EI_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_EI_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_EI_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Electronics and Telecommunication": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ET_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ET_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ET_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ET_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ET_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ET_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_FT_ET_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_FT_ET_Y4_SB.pdf",
                },
              },
            },
          },
        },
      },
    },
    BE_PART_TIME: {
      courseName: "B.E (PART TIME)",
      branches: {
        "Computer Science": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Computer Science and Business Systems": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_CS_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_CS_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Information Technology": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_IT_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_IT_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_IT_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_IT_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_IT_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_IT_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_IT_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_IT_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Mechanical Engineering": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ME_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ME_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ME_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ME_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ME_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ME_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ME_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ME_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Electronics and Instrumentation": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_EI_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_EI_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_EI_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_EI_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_EI_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_EI_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_EI_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_EI_Y4_SB.pdf",
                },
              },
            },
          },
        },
        "Electronics and Telecommunication": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ET_Y1_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ET_Y1_SB.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ET_Y2_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ET_Y2_SB.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ET_Y3_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ET_Y3_SB.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/BE_PT_ET_Y4_SA.pdf",
                },
                "Section B": {
                  PdfLink: "https://example.com/BE_PT_ET_Y4_SB.pdf",
                },
              },
            },
          },
        },
      },
    },

    ME: {
      courseName: "M.E",
      branches: {
        "Computer Engineering (Software Engineering)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                },
              },
            },
          },
        },
        "Information Technology (Information Security)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_IT_IS_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_IT_IS_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_IT_IS_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_IT_IS_Y4_SA.pdf",
                },
              },
            },
          },
        },
        "Mechanical Engineering (Design & Thermal Engineering)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_ME_DTE_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_ME_DTE_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_ME_DTE_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_ME_DTE_Y4_SA.pdf",
                },
              },
            },
          },
        },
        "Electronics Engineering (Digital Communication)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DC_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DC_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DC_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DC_Y4_SA.pdf",
                },
              },
            },
          },
        },
        "Electronics Engineering (Digital Instrumentation)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DI_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DI_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DI_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/ME_EE_DI_Y4_SA.pdf",
                },
              },
            },
          },
        },
      },
    },
    MSC: {
      courseName: "M.Sc",
      branches: {
        "Applied Mathematics (Computing & Informatics)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/MSC_AM_CI_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/MSC_AM_CI_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/MSC_AM_CI_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/MSC_AM_CI_Y4_SA.pdf",
                },
              },
            },
          },
        },
      },
    },
    PHD: {
      courseName: "Ph.D",
      branches: {
        "Applied Mathematics (Computing & Informatics)": {
          years: {
            "Year 1": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/PHD_AM_CI_Y1_SA.pdf",
                },
              },
            },
            "Year 2": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/PHD_AM_CI_Y2_SA.pdf",
                },
              },
            },
            "Year 3": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/PHD_AM_CI_Y3_SA.pdf",
                },
              },
            },
            "Year 4": {
              sections: {
                "Section A": {
                  PdfLink: "https://example.com/PHD_AM_CI_Y4_SA.pdf",
                },
              },
            },
          },
        },
      },
    },
  },
};
