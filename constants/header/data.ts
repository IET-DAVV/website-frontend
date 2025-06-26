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
      { name: "Calendar", href: "/academics/calendar" },
      { name: "Class", href: "/academics/class" },
      { name: "Roll List", href: "/academics/roll-list" },
      { name: "Syllabus", href: "/academics/syllabus" },
      { name: "Test", href: "/academics/test" },
    ],

  },
  {
    name: "Admissions",
    href: "/admissions",
    dropdown: [
      { name: "Enrollment List", href: "/admissions/enrollment-list" },
      { name: "Intake Capacity", href: "/admissions/intake-capacity" },
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
