interface RollListData {
  "B.E. I YEAR": {
    [courseName: string]: {
      PdfLink: string;
    };
  };
  "B.E. II YEAR": {
    PdfLink: string;
  };
  "B.E. III YEAR": {
    PdfLink: string;
  };
  "B.E. IV YEAR": {
    PdfLink: string;
  };
  "M.E.": {
    PdfLink: string;
  };
  "M.Sc.": {
    PdfLink: string;
  };
}

export const rolllistData: RollListData = {
  "B.E. I YEAR": {
    "Computer Science": {
      PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
    },
    "Information Technology": {
      PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
    },
    "Mechanical Engineering": {
      PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
    },
    "Electronics & Instrumentation": {
      PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
    },
    "Electronics & Telecommunication": {
      PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
    },
    "Civil Engineering": {
      PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
    },
  },
  "B.E. II YEAR": {
    PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
  },
  "B.E. III YEAR": {
    PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
  },
  "B.E. IV YEAR": {
    PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
  },
  "M.E.": {
    PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
  },
  "M.Sc.": {
    PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
  },
};
