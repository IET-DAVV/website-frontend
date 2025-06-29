import React from "react";
import { ChevronRight } from "lucide-react"; // Using lucide-react for icons

interface AnnouncementItemProps {
  text: string;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ text }) => {
  return (
    <div className="flex items-start py-2">
      <ChevronRight className="flex-shrink-0 text-gray-200 h-4 w-4 mr-2" />
      <p className="text-sm text-gray-100">{text}</p>
    </div>
  );
};

const AnnouncementSection: React.FC = () => {
  const announcementItems = [
    "Mid-sem Exams start from 15th July 2025.",
    'Timetable coming soon. Hackathon "CodeSprint 2025" registrations open till 10th July.',
    "AI/ML Workshop on 6-7 July. Limited seats.",
    "Internship applications open on the Placement Cell Portal.",
    'Tech Fest "Innovatia 2025" scheduled for 20 - 22 August.',
    "Convocation registration deadline: [Date]",
    "Scholarship application portal now open until Aug 15th.",
    "Sports meet registrations are now open.",
  ];

  return (
    <div className="col-span-12 md:col-span-3">
      <div className="bg-gray-200/20 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg p-6 h-full flex flex-col border border-white border-opacity-20">
        <h2 className="text-2xl font-semibold mb-6 text-white">Announcement</h2>
        <div
          className="space-y-3 overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          {announcementItems.map((item, index) => (
            <AnnouncementItem key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;
