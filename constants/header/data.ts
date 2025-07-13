import type { HeaderLinksType } from "../../typings.d";
export const headerLinks: HeaderLinksType = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
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
    name: "Infrastructure ",
    href: "/infrastructure",
  },
  {
    name: "Examination",
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
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Fresher's Corner ",
    href: "/freshers",
  },
];

export const LOGO = "Institute of Engineering & Technology";
export const LOGO_SUBTITLE = "देवी अहिल्या विश्वविद्यालय";
export const UPPER_HEADER_LINKS = [
  {
    name: "Placement",
    href: "https://www.dauniv.ac.in/placement",
  },
  {
    name: "Courses",
    href: "/academics/programsoffered",
    dropdown: [
      { name: "B.TECH (FULL-TIME)", value: "B.TECH (FULL-TIME)" },
      { name: "B.TECH (PART-TIME)", value: "B.TECH (PART-TIME)" },
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
    name: "Alumni",
    href: "https://ietdavvalumni.almaconnect.com/",
  },
];
