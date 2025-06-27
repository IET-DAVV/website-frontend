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
    href: "/academics",
     dropdown: [
      { name: "CLASS TIMETABLE", href: "/academics/class" },
      { name: "TEST TIMETABLE", href: "/academics/test" },
      { name: "SYLLABUS", href: "/academics/syllabus" },
      { name: "CALENDAR", href: "/academics/calendar" },
    ],
    
  },
  {
    name: "Admissions",
    href: "/admissions",
    dropdown: [
      { name: "INTAKE CAPACITY", href: "/admission/intake-capacity" },
      { name: "ROLL LIST", href: "/admission/roll-list" },
      { name: "ENROLLMENT LIST", href: "/admission/enrollment-list" },
    ],
  },
  {
    name: "Hostel",
    href: "/hostel",
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
