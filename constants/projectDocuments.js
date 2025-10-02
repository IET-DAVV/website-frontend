// src/constants/projectDocuments.js (UPDATED for Row-Based Links)

export const projectDocuments = [
  // Section 1: Internship Report (No structural change needed)
  {
    title:
      'Internship Report Format April-2022 <span class="font-normal text-sm block">(for students who have opted for Internship)</span>',
    items: [
      {
        label: "Internship Report Format",
        file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/Internship_Report_Format_2022%20Updated.docx",
      },
    ],
  },

  // Section 2: Computer Engineering and Information Technology Department
  {
    title: "Computer Engineering Department and Information Technology Department",
    items: [
      // Rest of the documents follow
      { label: "Sample Thesis", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/Sample%20Thesis.pdf" },
      { label: "Synopsis", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/Synopsis_2019.doc" },
      { label: "SDS Format", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/SDS_UPATED_2022.doc" },
      { label: "SRS Format", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/SRS_UPDATED_2022.doc" },
      {
        label: "Sample Document (Use Case Diagram & Description)",
        file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/SAMPLE_DOCUMENT%20_UseCase_Diagram_and%20_Description.pdf",
      },
      {
        label: "Project Report Format (for Application Projects)",
        file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/New%20Report_Format_BE__for_Application_projects_2022.doc",
      },
      {
        label: "Project Report Format (for Research Projects)",
        file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/New%20Report_Format_BE_2019_for_Research_projects.doc",
      },
      { label: "Dos & Donts", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/Dos%20and%20Donts%20Updated.docx" },
    ],
  },

  // Section 3: Electronics & Telecommunication Engineering Department
  {
    title: "Electronics & Telecommunication Engineering Department",
    // 🚨 REMOVED: The 'file' property from the section object
    items: [
      // The original report format
      { label: "Report Format", file: "https://www.ietdavv.edu.in/images/downloads/project_downloads/BE_IVyr_Project_Report_format_ETC.pdf" },
    ],
  },
];