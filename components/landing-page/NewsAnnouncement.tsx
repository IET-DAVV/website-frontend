import React, { useEffect, useRef, FC, useState } from "react";

interface NewsAnnouncementItem {
  label: string;
  url: string;
  description?: string;
  isNew?: boolean;
}

interface NewsAnnouncementProps {
  title: string;
  items: NewsAnnouncementItem[];
}

const NewsAnnouncement: FC<NewsAnnouncementProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const scrollPosition = useRef(0);
  const scrollStep = 0.15; // Even slower scrolling for better readability
  const [isPaused, setIsPaused] = useState(false);

  const clearAnimationFrame = () => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const scrollStepFunction = () => {
    if (isPaused) {
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
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="bg-white text-black rounded-lg shadow-lg overflow-hidden 
                 h-[300px] sm:h-[400px] md:h-[455px] lg:h-[500px] xl:h-[555px]
                 mb-4 sm:mb-6 lg:mb-8 xl:mb-12 relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        className="text-lg sm:text-xl md:text-2xl text-white flex justify-center 
                     bg-black font-bold rounded-md mb-2 sm:mb-4 py-2 sm:py-3"
      >
        {title}
      </h2>
      <div
        ref={scrollRef}
        className={`px-3 sm:px-4 md:px-6 relative h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] 
                   overflow-y-auto ${
                     isPaused ? "overflow-y-scroll" : "overflow-hidden"
                   }`}
      >
        <div>
          <ul ref={listRef} className="space-y-2 sm:space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <li
                key={`original-${index}`}
                className="text-sm sm:text-base leading-relaxed break-words"
              >
                &rsaquo;{" "}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  {item.label}
                  {item.isNew && (
                    <span className="new-indicator-3d inline-flex items-center px-2 py-0.5 text-xs font-bold bg-red-600 text-white border-2 border-red-800 shadow-lg transform -skew-x-6 hover:skew-x-0 transition-transform duration-200" 
                          style={{
                            boxShadow: '2px 2px 0px #991b1b, 4px 4px 0px #7f1d1d, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)',
                            textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                          }}>
                      NEW
                    </span>
                  )}
                </a>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <li
                key={`duplicate-${index}`}
                className="text-sm sm:text-base leading-relaxed break-words"
              >
                &rsaquo;{" "}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  {item.label}
                  {item.isNew && (
                    <span className="new-indicator-3d inline-flex items-center px-2 py-0.5 text-xs font-bold bg-red-600 text-white border-2 border-red-800 shadow-lg transform -skew-x-6 hover:skew-x-0 transition-transform duration-200" 
                          style={{
                            boxShadow: '2px 2px 0px #991b1b, 4px 4px 0px #7f1d1d, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)',
                            textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                          }}>
                      NEW
                    </span>
                  )}
                </a>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsAnnouncement;
