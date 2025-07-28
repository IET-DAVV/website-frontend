import React, { useEffect, useRef, FC, useState } from 'react';

interface NewsAnnouncementProps {
  title: string;
  items: string[];
}

const NewsAnnouncement: FC<NewsAnnouncementProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const scrollPosition = useRef(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollStep = 0.5; // pixels per frame for smoother scrolling
  const [isPaused, setIsPaused] = useState(false);

  const clearAnimationFrame = () => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const scrollStepFunction = () => {
    if (isUserScrolling || isPaused) {
      animationFrameId.current = requestAnimationFrame(scrollStepFunction);
      return;
    }
    const scrollContainer = scrollRef.current;
    const list = listRef.current;
    if (!scrollContainer || !list) {
      animationFrameId.current = requestAnimationFrame(scrollStepFunction);
      return;
    }

    const listHeight = list.offsetHeight;
    scrollPosition.current += scrollStep;

    if (scrollPosition.current >= listHeight) {
      scrollPosition.current = 0;
    }

    scrollContainer.scrollTop = scrollPosition.current;

    animationFrameId.current = requestAnimationFrame(scrollStepFunction);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(scrollStepFunction);
    return () => {
      clearAnimationFrame();
    };
  }, [isUserScrolling, isPaused]);

  const startResumeTimeout = () => {
    setTimeout(() => {
      if (isHovering) {
        setIsUserScrolling(false);
      }
    }, 2000);
  };

  const handleUserInteraction = () => {
    setIsUserScrolling(true);
    startResumeTimeout();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsUserScrolling(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startResumeTimeout();
  };

  const handleClick = () => {
    setIsUserScrolling(true);
    startResumeTimeout();
  };

  return (
    <div
      className="bg-white text-black rounded-lg shadow-lg overflow-hidden 
                 h-[300px] sm:h-[400px] md:h-[455px] lg:h-[500px] xl:h-[555px]
                 mb-4 sm:mb-6 lg:mb-8 xl:mb-12 relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl text-white flex justify-center 
                     bg-black font-bold rounded-md mb-2 sm:mb-4 py-2 sm:py-3">
        {title}
      </h2>
      <div
        ref={scrollRef}
        className={`px-3 sm:px-4 md:px-6 relative h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] 
                   overflow-y-auto ${isPaused ? 'overflow-y-scroll' : 'overflow-hidden'}`}
        onWheel={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onClick={handleClick}
      >
        <div>
          <ul ref={listRef} className="space-y-2 sm:space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <li key={`original-${index}`} 
                  className="text-sm sm:text-base leading-relaxed break-words">
                &rsaquo; {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <li key={`duplicate-${index}`} 
                  className="text-sm sm:text-base leading-relaxed break-words">
                &rsaquo; {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default NewsAnnouncement;
