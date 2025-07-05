export interface ExamTimeTableData {
 courses: {
    [courseKey: string]: {
        courseName: string;
        sections: {
            [section: string]: {
                PdfLink: string;
            }
        }
    }
 }
}

export const examTimeTableData: ExamTimeTableData = {
    courses: {
        Btech: {
            courseName: "B. TECH (1 YEAR)",
            sections: {
                "PDF": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                    
                }
            }
        },
        NonBtech: {
            courseName: " B.TECH  ( II Yr - IV yr )/ BEPTDC / MSC",
            sections: {
                "PDF": {
                  PdfLink: "http://www.pdf995.com/samples/pdf.pdf",
                    
                }
            }
        }
    }
}


