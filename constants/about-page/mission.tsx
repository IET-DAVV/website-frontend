import { ReactNode } from "react";

export interface MissionItem {
  id: string;
  description: React.ReactNode;
}

export const missionIet: MissionItem[] = [
  {
    id: "01",
    description: (
      <>
        <b>Creating an enthusiastic and synergetic learning environment:</b> <br />
        IET-DAVV focuses on building a vibrant and collaborative educational atmosphere where students feel motivated, supported, and engaged to actively participate in academics, personal growth, and team-driven learning experiences.
      </>
    ),
  },
  {
    id: "02",
    description: (
      <>
        <b>Developing the youth into well-groomed, confident personalities:</b> <br />
        The institute aims to shape students into confident, capable individuals with strong values and leadership skills, preparing them to face future challenges and succeed in both professional and personal aspects of life.
      </>
    ),
  },
  {
    id: "03",
    description: (
      <>
        <b>Striving for finding solutions to the societal problems through research and innovation:</b> <br />
        IET-DAVV encourages students and faculty to address real-world issues by fostering a culture of research, creativity, and innovation that leads to impactful solutions for the betterment of society.
      </>
    ),
  },
  {
    id: "04",
    description: (
      <>
        <b>Promoting the exchange of ideas, expertise and use of facilities with other institutions:</b> <br />
        The institute promotes academic collaboration through partnerships, knowledge-sharing, and resource exchange with other universities and organizations, enhancing opportunities for learning, research, and interdisciplinary development.
      </>
    ),
  },
  {
    id: "05",
    description: (
      <>
        <b>Establishing an environment for innovation, start-ups and technology-based businesses:</b> <br />
        IET-DAVV nurtures an entrepreneurial ecosystem by supporting innovative thinking, startup ventures, and technology-driven business models that contribute to economic growth and student empowerment.
      </>
    ),
  },
  {
    id: "06",
    description: (
      <>
        <b>Instilling pride in India's cultural heritage and commitment to serve the country under all circumstances:</b> <br />
        The institute instills deep respect for Indian culture, heritage, and values, while encouraging students to remain dedicated to national service, social responsibility, and ethical conduct in every sphere of life.
      </>
    ),
  },
];

export const missionDavv: { id: string; description: ReactNode }[] = [
  {
    id: "01",
    description: (
      <>
        <b>Facilitating learner-centric multidisciplinary course curriculum, pedagogy and resources:</b> <br />
        Achieved through a technology-enabled, joyful and diverse learning environment. <br />
        <b>Achieving excellence</b> for world-class competencies in teaching, research and extension.
      </>
    ),
  },
  {
    id: "02",
    description: (
      <>
        <b>Promoting multidisciplinary research and scholarship:</b> <br />
        Providing demand-driven educational programmes for enhancing skills and employability.
      </>
    ),
  },
  {
    id: "03",
    description: (
      <>
        <b>Emphasizing value-guided competencies:</b> <br />
        Developing socially responsible professionals and leaders. <br />
        Evolving educational processes to ensure a balance between head, heart and hand for holistic personality development.
      </>
    ),
  },
  {
    id: "04",
    description: (
      <>
        <b>Exploring global opportunities through international collaboration:</b> <br />
        Nurturing a culture of pride, ownership and belongingness for attracting and retaining human resources.
      </>
    ),
  },
  {
    id: "05",
    description: (
      <>
        <b>Promoting autonomy with accountability:</b> <br />
        Through participatory, transparent and value-based governance. <br />
        Adopting environment-friendly and energy-efficient best practices for sustainable development.
      </>
    ),
  },
  {
    id: "06",
    description: (
      <>
        <b>Educating and empowering the learners:</b> <br />
        Realizing their potential through a righteous blend of knowledge, skills, and values for serving society. <br />
        Addressing issues and empowering local communities with a global perspective.
      </>
    ),
  },
];

export const missions = [
  {
    name: "MISSION-IET",
    id: "m1",
    link: missionIet,
  },
  {
    name: "MISSION-DAVV",
    id: "m2",
    link: missionDavv,
  },
];
