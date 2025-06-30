export interface EnrollmentDataType {
  years: {
    [year: string]: {
      PdfLink: string;
    };
  };
}

export const EnrollmentData: EnrollmentDataType = {
  years: {
    "2023": {
      PdfLink: "https://www.pdf995.com/samples/pdf.pdf",
    },
  },
};
