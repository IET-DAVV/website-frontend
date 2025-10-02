// constants/HeroSection/data.ts
export interface Item {
  label: string;
  url: string;
  description: string;
  isNew: boolean;
}

// fallback hardcoded data
export let newsItems: Item[] = [
  {
    label: "BE I Year Regular Results",
    url: "https://ietdavv.edu.in/index.php/results",
    description: "(for session April-May 2025)",
    isNew: true,
  },
  {
    label: "Counseling schedule session 2025-26 ",
    url: "https://ietdavv.edu.in/index.php/admission/admission-2025-26",
    description: "(For BE/BTECH CSBS and BDesign program)",
    isNew: false,
  },
  {
    label: "Branch / College Transfer Notification 2025-26",
    url: "https://ietdavv.edu.in/index.php/admission/admission-2025-26",
    description: "(Branch / College Transfer Notification 2025-26)",
    isNew: true,
  },
  {
    label: "Academic Calendar 2025-26",
    url: "https://ietdavv.edu.in/index.php/academics/calender/i-yr-calender",
    description: "(for BE/BTECH / MTECH/ MSc/ PTDC)",
    isNew: false,
  },
  {
    label: "Notice For Observation of answer book ",
    url: "https://ietdavv.edu.in/index.php/examination",
    description: "(for BE III Year students)",
    isNew: true,
  },
  {
    label: "BE II Year Regular Results",
    url: "https://ietdavv.edu.in/index.php/results",
    description: "(Except E & TC Branch)",
    isNew: false,
  },
];

export let announcementItems: Item[] = [
  {
    label: "Girls Hostel allotment list-July 2025",
    url: "https://ietdavv.edu.in/index.php/academics/notices",
    description: "(for BE I year students)",
    isNew: true,
  },
  {
    label: "Mandatory Registration for IKS on SWAYAM portal",
    url: "https://ietdavv.edu.in/index.php/academics/notices",
    description: "(Notice for BE/BTECH. 2nd Year Students)",
    isNew: false,
  },
];

// slides remain unchanged
export const slides = [
  "/landing/mblock.png",
  "/HeroSection/IMG-20250312-WA0003.jpg",
  "/HeroSection/IMG-20250112-WA0334 (1).jpg",
  "/HeroSection/Screenshot_2025-06-29-14-52-08-27_1c337646f29875672b5a61192b9010f9.jpg",
  "/HeroSection/IMG-20250705-WA0009.jpg",
];

// API fetch function
export const fetchAnnouncements = async (): Promise<{
  news: Item[];
  announcements: Item[];
}> => {
  try {
    const res = await fetch("http://117.239.195.147:1337/api/hero-sections");
    const data = await res.json();

    const items: Item[] = data.data.map((item: any) => ({
      label: item.attributes.label,
      url: item.attributes.url,
      description: item.attributes.description,
      isNew: item.attributes.isNew,
    }));

    // Split into news / announcements if needed, for now we can assume all are announcements
    return { news: newsItems, announcements: items };
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return { news: newsItems, announcements: announcementItems };
  }
};
