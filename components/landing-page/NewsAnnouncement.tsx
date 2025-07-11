import React, { useEffect, useRef, FC, useState } from 'react';

interface NewsAnnouncementProps {
  title: string;
  items: string[];
}

const NewsAnnouncement: FC<NewsAnnouncementProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const scrollStep = 1; // pixels per interval
  const scrollInterval = 50; // ms
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearExistingTimeout = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = null;
    }
  };

  const startResumeTimeout = () => {
    clearExistingTimeout();
    scrollTimeout.current = setTimeout(() => {
      if (!isHovering) {
        setIsUserScrolling(false);
      }
    }, 2000);
  };

  const handleUserInteraction = () => {
    setIsUserScrolling(true);
    clearExistingTimeout();
    startResumeTimeout();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsUserScrolling(true);
    clearExistingTimeout();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startResumeTimeout();
  };

  const handleClick = () => {
    setIsUserScrolling(true);
    clearExistingTimeout();
    startResumeTimeout();
  };

  useEffect(() => {
    const maxScroll = scrollRef.current
      ? scrollRef.current.scrollHeight - scrollRef.current.parentElement!.clientHeight
      : 0;

    const intervalId = setInterval(() => {
      if (!isUserScrolling) {
        setScrollAmount((prev) => {
          const newScrollAmount = prev + scrollStep;
          if (newScrollAmount >= maxScroll) {
            return 0; // Reset to the top
          }
          return newScrollAmount;
        });
      }
    }, scrollInterval);

    return () => {
      clearInterval(intervalId);
      clearExistingTimeout();
    };
  }, [isUserScrolling, scrollStep, scrollInterval]);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.style.transform = `translateY(-${scrollAmount}px)`;
    }
  }, [scrollAmount]);

  return (
    <div
      className="bg-white text-black rounded-lg shadow-lg overflow-hidden max-h-[350px] sm:max-h-[500px] mb-8 sm:mb-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl text-white flex justify-center bg-black font-bold rounded-md mb-4">
        {title}
      </h2>
      <div
        className="p-6 relative max-h-[280px] sm:max-h-[400px] overflow-y-auto"
        onWheel={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onClick={handleClick}
      >
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
