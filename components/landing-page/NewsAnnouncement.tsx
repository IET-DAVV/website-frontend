// components/NewsAnnouncement.tsx
import React from 'react';

interface NewsAnnouncementProps {
  title: string;
  items: string[];
}

const NewsAnnouncement: React.FC<NewsAnnouncementProps> = ({ title, items }) => {
  return (
    <div className="bg-white h- text-black rounded-lg shadow-lg">
      <h2 className="text-2xl text-white flex justify-center bg-black font-bold rounded-md mb-4">
        {title}
      </h2>
      <div className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index}>&rsaquo; {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAnnouncement;