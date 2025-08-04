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
      PdfLink: "https://www.ietdavv.edu.in/images/downloads/Admission/B.Tech_Academic_Calendar_2025-26.jpeg",
    },
    "2nd YEAR ONWARDS....": {
      PdfLink: "https://www.ietdavv.edu.in/index.php/academics/calender/ii-yr-onwords",
    },
    
  },
};
