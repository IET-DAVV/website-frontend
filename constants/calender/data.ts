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
      PdfLink: "",
    },
    "2nd YEAR ONWARDS....": {
      PdfLink: "https://ietdavv.edu.in/images/downloads/Admission/Academic_Calendar_2025-26.jpeg",
    },
    
  },
};
