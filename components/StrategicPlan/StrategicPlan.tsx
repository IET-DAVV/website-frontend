"use client";
import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const StrategicPlan: React.FC = () => {
  return (
    <div className={`${manrope.className} px-10 py-12 max-w-7xl mx-auto space-y-10`}>
      {/* Title */}
      <h1 className="text-4xl font-newyork text-center text-black mb-6">Department’s Strategic Plan</h1>
    <div className="flex justify-center">
    <div
        className="bg-gray-200 rounded-md shadow-md"
        style={{ width: "345px", height: "267.66px" }}
    >
        {/* You can replace this box with <img src="..." /> later */}
    </div>
    </div>
      {/* Intro */}
      <p className="text-slate-700 text-base leading-relaxed">
        Institute of Engineering & Technology (IET-DAVV), a University Teaching department of Devi Ahilya Vishwavidyalaya,
        established in 1996, has carved a niche for itself in Madhya Pradesh in the field of engineering education and
        research. It has a unique opportunity in the sense that it is located in one of the most industrialised regions
        of MP, Indore, but also borders some of the most backward districts. This uniqueness leads to very disparate
        demands from IET – it has not only to serve relatively affluent sections of society, but also contribute towards
        the problems of the weaker sections.
      </p>

      {/* Goals */}
      <section>
        <h2 className="text-2xl font-semibold text-dark-blue mb-4">Goals</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Strengthening undergraduate, postgraduate and research programs to generate high quality skilled workforce</li>
          <li>Upgrade research infrastructure available at the institute for teaching and research</li>
          <li>Promote creativity, innovation and incubation of technology to strengthen the entrepreneurial ecosystem</li>
          <li>Enhance engagement with industry for mutual benefits</li>
          <li>Involve weaker sections of the society into nation building through technology development</li>
          <li>Reinforce library and e-content facilities and initiate e-resource development</li>
          <li>Engage alumni more comprehensively in institute building activities</li>
        </ul>
      </section>

      {/* Plan Sections */}
      {[
        {
          title: "1. Quality Human Resource & Research Infrastructure",
          desc: `IET aims at creating, sharing, disseminating knowledge, and thereby developing technology for uplifting life in the region. It engages itself in developing quality human resources in engineering and science at UG, PG, and doctoral levels. The institute provides an ambiance for academic excellence, improvises with changing times, and builds research infrastructure to solve complex problems.`,
          actions: [
            "Enhancement of facilities in UG, PG and research laboratories",
            "Increase student engagement through seminars/workshops",
            "Provide facilities for better communication and networking skills",
          ],
        },
        {
          title: "2. Entrepreneurship & Innovation",
          desc: `Post-globalization era demands entrepreneurial skills and training for students. IET focuses on tech-based research for business, cost-saving, and time-effective solutions, encouraging students to build startups.`,
          actions: [
            "Strengthen facilities at the Incubation Centre",
            "Increase institute-industry collaborations",
            "Arrange seminars/lectures by business professionals",
          ],
        },
        {
          title: "3. Industry Collaboration & Training",
          desc: `IET shall build synergy with industry through internships, collaborative research, and flexible programs. Industry professionals will be encouraged to upskill through part-time programs and joint development initiatives.`,
          actions: [
            "Initiate consultancy assignments for the industry",
            "Undertake training/faculty development programs",
            "Develop mechanisms for filing patents",
          ],
        },
        {
          title: "4. Outreach & Societal Development",
          desc: `IET will implement outreach programs to develop skills among local communities and weaker sections. Students will be motivated to use technology for societal betterment.`,
          actions: [
            "Proof of concept trials for low-cost technology",
            "Engagement with schools and local communities",
            "Awareness/training on cleanliness and hygiene",
          ],
        },
        {
          title: "5. Knowledge Repositories & Library",
          desc: `IET will strengthen its library and e-resources to develop a solid knowledge base in engineering and technology. More journals, digital content, and book bank resources will be added.`,
          actions: [
            "Increase subscription to international journals",
            "Procure e-books, e-classes, etc.",
            "Enhance library infrastructure",
          ],
        },
        {
          title: "6. Alumni Engagement",
          desc: `IET plans to leverage its strong alumni base for growth and institutional development. Alumni in key positions will be invited to contribute actively.`,
          actions: [
            "Host annual alumni meets",
            "Expand alumni network cohesively",
            "Support alumni in career and learning needs",
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
