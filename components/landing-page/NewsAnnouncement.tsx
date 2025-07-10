import React, { useEffect, useRef, FC, useState } from 'react';

interface NewsAnnouncementProps {
  title: string;
  items: string[];
}

const NewsAnnouncement: FC<NewsAnnouncementProps> = ({ title, items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per interval
    const scrollInterval = 50; // ms

    const maxScroll = scroll.scrollHeight - container.clientHeight;

    const handleUserScroll = () => {
      setIsUserScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 2000);
    };

    const handleMouseEnter = () => {
      setIsUserScrolling(true);
    };

    const handleMouseLeave = () => {
      setIsUserScrolling(false);
    };

    container.addEventListener('scroll', handleUserScroll);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const intervalId = setInterval(() => {
      if (!isUserScrolling) {
        scrollAmount += scrollStep;
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
        }
        scroll.style.transform = `translateY(-${scrollAmount}px)`;
      }
    }, scrollInterval);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener('scroll', handleUserScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [items, isUserScrolling]);

  return (
    <div
      className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
      style={{ height: 'auto', maxHeight: '200px' }}
      ref={containerRef}
      onMouseEnter={() => setIsUserScrolling(true)}
      onMouseLeave={() => setIsUserScrolling(false)}
    >
      <h2 className="text-2xl text-white flex justify-center bg-black font-bold rounded-md mb-4">
        {title}
      </h2>
      <div className="p-6 relative" style={{ maxHeight: '160px', overflowY: 'auto' }}>
        <ul ref={scrollRef} className="space-y-4 will-change-transform">
          {items.map((item, index) => (
            <li key={index}>&rsaquo; {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAnnouncement;
