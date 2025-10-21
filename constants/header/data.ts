import type { HeaderLinksType } from "../../typings.d";
export const headerLinks: HeaderLinksType = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About IET",
    href: "",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Department", href: "/facultyPage" },
    ],
  },
  {
    name: "Academics",
    href: "",
    dropdown: [
      { name: "Class Timetable", href: "/academics/class" },
      { name: "Test Timetable", href: "/academics/test" },
      { name: "Syllabus", href: "/academics/syllabus" },
      { name: "Calendar", href: "/academics/calendar" },

    ],
  },
  {
    name: "Admissions",
    href: "",
    dropdown: [
      { name: "Process", href: "/admission/process" },
      { name: "Intake Capacity", href: "/admission/intake-capacity" },
      { name: "Roll List", href: "/admission/roll-list" },
      { name: "Enrollment List", href: "/admission/enrollment-list" },
    ],
  },
  {
    name: "Research @ IET",
    href: "/ResearchPage",
  },
  {
    name: "Student Life & Activities",
    href: "/StudentLife&Activities",
  },
  {
    name: "Facilities",
    href: "/infrastructure",
  },
  {
    name: "Examinations",
    href: "",
    dropdown: [
      { name: "Exam Time Table", href: "/examination" },
      {
        name: "Examination Form",
        href: "https://davv.mponline.gov.in/Portal/services/DAVVDASHBOARD/DAVVHOME.aspx",
      },
      { name: "Results", href: "https://results.ietdavv.edu.in/" },
      {
        name: "Admit Card",
        href: "https://davv.mponline.gov.in/Portal/services/DAVVDASHBOARD/DAVVHOME.aspx",
      },
    ],
  },
  {
    name: "Tenders & Procurement",
    href: "/Tenders&Procurement",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export const LOGO = "Institute of Engineering & Technology";
export const LOGO_SUBTITLE = "Devi Ahilya Vishwavidyalaya";
export const UPPER_HEADER_LINKS = [
  {
    name: "Placement",
    href: "https://www.dauniv.ac.in/placement",
  },
  {
    name: "Courses",
    href: "/academics/programsoffered",
    dropdown: [
      { name: "BE/BTECH (FULL-TIME)", value: "BE/BTECH (FULL-TIME)" },
      { name: "BE/BTECH (PART-TIME)", value: "BE/BTECH (PART-TIME)" },
      { name: "M.TECH (FULL-TIME)", value: "M.TECH (FULL-TIME)" },
      { name: "M.TECH (PART-TIME)", value: "M.TECH (PART-TIME)" },
      { name: "PHD", value: "PHD" },
      { name: "MSc.", value: "MSc." },
    ],
  },
  {
    name: "Notices",
    href: "/academics/notice",
  },
  {
    name: "Fresher's Corner ",
    href: "/freshers",
  },
  {
    name: "Alumni & Outreach",
    href: "https://ietdavvalumni.almaconnect.com/",
  },
];
