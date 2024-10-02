interface CalenderData {
  years: {
    [year: string]: {
      PdfLink: string;
    };
  };
}

export const calenderData: CalenderData = {
  years: {
    "1st YEAR": {
      PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
    },
    "2nd YEAR ONWARDS": {
      PdfLink: "http://www.pdf995.com/samples/pdfeditsample.pdf",
    },
  },
};
