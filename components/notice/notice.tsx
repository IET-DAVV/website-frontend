"use client";
import { fetchAnnouncements, newsItems } from "@/constants/HeroSection/data";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoArchive } from "react-icons/io5";

interface Item {
  label: string;
  url: string;
  description: string;
  isNew: boolean;
  isArchived?: boolean;
}

const DownloadSection = () => {
  const [news, setNews] = useState<Item[]>(newsItems);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchAnnouncements();
      setNews(data.news);
    };
    loadNews();
  }, []);

  const filteredNews = news.filter(item => showArchived ? item.isArchived : !item.isArchived);

  return (
    <div className="pt-10">
      <Title title={showArchived ? "Archived Notices" : "Notices"} className="text-7xl leading-tight font-newyork" />

      <div className="mb-16 mt-10 font-manrope">
        <div className="border divide-y divide-[#959595] max-w-5xl w-full mx-auto border-[#959595]">
          {filteredNews.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between px-10 py-5 relative after:absolute after:w-[1px] after:bg-[#959595] after:top-0 after:right-[23%] after:h-full"
            >
              <div className="text-lg font-medium max-w-[70%] flex flex-col">
                <span>
                  {item.label}
                  {item.isNew && (
                    <motion.span
                      className="ml-2 text-red-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      (New)
                    </motion.span>
                  )}
                </span>
                <span className="text-[#06779B] text-lg font-medium">
                  {item.description}
                </span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#06779B] text-white px-10 py-2 rounded-[6px] inline-flex items-center gap-1 text-sm"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Archive Button */}
      <button
        onClick={() => setShowArchived(!showArchived)}
        className="fixed bottom-4 right-4 bg-[#06779B] text-white p-3 rounded-full shadow-lg hover:bg-[#056a8a] transition-colors duration-200"
        title={showArchived ? "Show Current Notices" : "Show Archived Notices"}
      >
        <IoArchive size={24} />
      </button>
    </div>
  );
};

export default DownloadSection;
