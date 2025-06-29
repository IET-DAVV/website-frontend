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
    name: "Academics ▾",
    href: "/academics",
     dropdown: [
      { name: "Class Timetable", href: "/academics/class" },
      { name: "Test Timetable", href: "/academics/test" },
      { name: "Syllabus", href: "/academics/syllabus" },
      { name: "Calendar", href: "/academics/calendar" },
    ],
    
  },
  {
    name: "Admissions ▾",
    href: "/admissions",
    dropdown: [
      { name: "Process", href: "/admission/process" },
      { name: "Intake Capacity", href: "/admission/intake-capacity" },
      { name: "Roll List", href: "/admission/roll-list" },
      { name: "Enrollment List", href: "/admission/enrollment-list" },
    ],
  },
  {
    name: "Infrastructure ▾",
    href: "/infrastructure",
    dropdown: [
      { name: "Library", href: "/infrastructure/library" },
      { name: "Labs", href: "/infrastructure/labs" },
      { name: "Hostel", href: "/infrastructure/hostel" },
      { name: "Canteen", href: "/infrastructure/canteen" },
    ],
  },
  {
    name: "Examination ▾",
    href: "/examination",
    dropdown: [
      { name: "Examination Form", href: "/examination/form" },
      { name: "Results", href: "/examination/results" },
      { name: "Admit Card", href: "/examination/admit-card" },
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

export const LOGO = "Institute of Engineering and Technology";
export const UPPER_HEADER_LINKS = [
  {
    name: "Placement",
    href: "/placement",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Notices",
    href: "/notices",
  },
  {
    name: "Alumni",
    href: "/alumni",
  },
];
