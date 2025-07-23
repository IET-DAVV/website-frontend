// constants/achievements-data.ts

import { BsTrophy, BsAward, BsStar, BsCheckCircle } from "react-icons/bs";
import { FaMedal, FaRocket, FaUniversity, FaCrown } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { GiAchievement, GiLaurels } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "NAAC A+ Accreditation",
    description:
      "Achieved prestigious A+ grade by NAAC for academic excellence and infrastructure.",
      icon: BsTrophy,
  },
  {
    id: 2,
    title: "NIRF Ranking",
    description:
      "Consistently ranked among the top engineering institutes in India under NIRF.",
       icon: BsAward,
  },
  {
    id: 3,
    title: "Global Research Papers",
    description:
      "Faculty and students published 350+ papers in top international journals.",
       icon: FaMedal,
  },
  {
    id: 4,
    title: "Smart India Hackathon Winners",
    description:
      "Teams from IET secured top positions in national-level hackathons.",
      icon: FaUniversity,
  },
  {
    id: 5,
    title: "Campus Placement Records",
    description:
      "Over 90% placement rate with packages up to ₹35 LPA across branches.",
      icon: MdEmojiEvents,
  },
  {
    id: 6,
    title: "MoUs with Industry Leaders",
    description:
      "Signed MoUs with TCS, Infosys, DRDO and other leading organizations.",
      icon: FaRocket,
  },
  {
    id: 7,
    title: "Innovation & Incubation Hub",
    description:
      "Successfully incubated 15+ student-led startups under IET Incubation Centre.",
      icon: GiAchievement,
  },
  {
    id: 8,
    title: "IET Model United Nations",
    description:
      "Hosted MUN with 300+ participants from 40+ institutes across India.",
      icon: BsStar,
  },
  {
    id: 9,
    title: "AICTE-IDEA Lab Grant",
    description:
      "Received ₹1 crore grant from AICTE to set up IDEA Lab for innovation.",
      icon: FaCrown,
  },
  {
    id: 10,
    title: "International Collaborations",
    description:
      "Partnered with universities in Germany, UK, and Singapore for exchange programs.",
      icon: GiLaurels,
  },
  {
    id: 11,
    title: "Student Clubs & Chapters",
    description:
      "Active Google DSC, IETE, IEEE, and E-Cell chapters thriving on campus.",
      icon: BsCheckCircle,
  },
  {
    id: 12,
    title: "Green Campus Award",
    description:
      "Recognized as one of the most eco-friendly campuses in Central India." ,
      icon: TbCertificate,
  },
];
