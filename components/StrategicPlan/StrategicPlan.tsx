"use client";
import React from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const StrategicPlan: React.FC = () => {
  return (
    <div className={`${manrope.className} px-10 py-12 max-w-7xl mx-auto space-y-10`}>
      {/* Title */}
      <h1 className="text-4xl font-newyork text-center text-black mb-6">
            IET STRATEGIC PLAN
            <br />
            (2024-29)
      </h1>

      {/* Devi Ahilya Bai Image */}
      <div className="flex justify-center">
        <Image
           src="/about/Devi_Ahilya_bai.jpg"
          alt="Devi Ahilya Bai"
          width={345}
          height={267}
          className="rounded-md shadow-md object-cover"
        />
      </div>

      {/* Introduction */}
      <p className="text-slate-700 text-base leading-relaxed">
        Institute of Engineering & Technology (IET-DAVV), a University Teaching department of Devi Ahilya Vishwavidyalaya, established in 1996, has carved a niche for itself in MadhyaPradesh, in the field of engineering education and research. It has a unique opportunity in the sense that it is located in one of the most industrialised regions of the MP, Indore, but also borders the some of the most backward districts of MP. This uniqueness leads to very disparate demands from the IET- it has not only to serve relatively affluent sections of society, but also to contribute towards the problems of the weaker sections.
      </p>

      {/* Goals */}
      <section>
        <h2 className="text-2xl font-semibold text-dark-blue mb-4">Goals</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Strengthening undergraduate, postgraduate and research programs so as to generate high quality skilled workforce</li>
          <li>Upgrade research infrastructure available at the institute for teaching and research</li>
          <li>Promote creativity, innovation and incubation of technology, thereby strengthening the entrepreneurial ecosystem.</li>
          <li>Enhancing the engagement with industry for mutual benefits</li>
          <li>Enhance empathy and involve weaker sections of the society into nation building process through technology development.</li>
          <li>Reinforcement of the library and e-content facilities, and initiating e-resource development.</li>
          <li>Engage alumni more comprehensively in institute building activities</li>
        </ul>
      </section>

      {/* Strategic Plan Sections */}
      {[
        {
          title: "(i) Quality Human Resource & Research Infrastructure",
          desc: `IET aims at creating, sharing, disseminating knowledge, and thereby developing technology for the upliftment in life of the people of the region. Towards this, primarily IET engages itself in developing quality human resource in the area of engineering and science at the undergraduate, postgraduate and doctoral levels. It shall continually provide an ambiance in which academic excellence thrives, and students learn necessary problem solving skills. It will keep improvising with changing times, and devise ways and means for the generation of manpower well suited to the requirements of the industry and society. It shall build, maintain and upgrade suitable infrastructure for research so that students could take challenges and offer simple and scalable solutions to the complex problems.`,
          actions: [
            "Enhancement of facilities in the undergraduate, postgraduate and research laboratories",
            "Increase student engagement through seminars/workshop by experts",
            "Providing facilities for better communication and other networking skills",
          ],
        },
        {
          title: "(ii) Entrepreneurship & Innovation",
          desc: `The post globalization era demands developing entrepreneurial skills in students, and training them in skills required for building businesses. The technology based research for businesses is seen as offering solutions which can provide breakthroughs in terms of cost reduction and time savings. Students will be trained for identifying opportunity, generating ideas, making prototypes, and transforming prototypes to the successful business ventures.`,
          actions: [
            "Strengthening the facilities at the Incubation Centre",
            "Increase Institute- industry collaborations",
            "Arranging seminars/Lectures by professionals involved in establishing Businesses",
          ],
        },
        {
          title: "(iii) Industry Collaboration & Training",
          desc: `IET shall build synergy with the industry by involving it for student internships, projects, collaborative research, and other developmental activities in years to come. It shall offer flexible ways to the industry personnel, wherein they can upgrade their skills through training programs, part time undergraduate, postgraduate and doctoral programs. Also, collaborative research and developmental programs with the institutes of higher learning in India and abroad will be initiated and strengthened.`,
          actions: [
            "Initiate consultancy assignments for the industry",
            "Undertake training programs for industry personnel/faculty development programs",
            "Developing mechanisms for filing of patents",
          ],
        },
        {
          title: "(iv) Outreach & Societal Development",
          desc: `IET will undertake suitable outreach programs for training and skill develop of the local communities, and specially the weaker sections of the society. It strives to reach out to these sections of the society and work for their welfare. Institute will also motivate students for using technology as a tool for advancement of the society, thereby creating comfort and wealth for the people.`,
          actions: [
            "Undertake proof of concept trials of low cost technology for weaker sections.",
            "Enhancing engagement with schools, and local communities.",
            "Undertaking awareness and training programs regarding maintenance of cleanliness and hygiene.",
          ],
        },
        {
          title: "(v) Knowledge Repositories & Library",
          desc: `To develop repository of knowledge and information in various areas of Engineering, Technology and Science. IET shall strengthen the existing library infrastructure by adding the reading room facilities, book bank facilities and increasing the quality and content of electronics resources available to the students`,
          actions: [
            "Increasing the subscription to international journals",
            "Undertake procurement of e-books, e-classes etc",
            "Enhancement of facilities in the library",
          ],
        },
        {
          title: "(vi) Alumni Engagement",
          desc: `Engage alumni more comprehensively in institute building activities. Institute has been more than ten years now, quite many of its passed out students are well placed in Industry, abroad and in high positions in Govt. It is planned to invite and involve the alumni members into the growth and development of the Institute.`,
          actions: [
            "Undertake annual alumni meet regularly",
            "Stimulating the spread of alumni network more cohesively",
            "Supporting the alumni in their learning and other career needs",
          ],
        },
      ].map((section, idx) => (
        <section key={idx} className="space-y-4">
          <h2 className="text-xl font-semibold text-dark-blue">{section.title}</h2>
          <p className="text-slate-700">{section.desc}</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            {section.actions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default StrategicPlan;
