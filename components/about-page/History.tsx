"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { history } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "framer-motion";

// NOTE: Make sure the CSS for scroll-snapping is in your global CSS file:
// .scroll-container-snap { scroll-snap-type: x mandatory; }
// .scroll-item-snap { scroll-snap-align: start; scroll-snap-stop: always; }
// .scroll-item-snap:last-child { scroll-snap-align: end; }

interface HistoryEvent {
  id: number;
  title: string;
}

const TimelineTrack = ({
  progress,
  fullWidth,
}: {
  progress: MotionValue<string>;
  fullWidth: number;
}) => (
  <>
    {/* Static Background Line */}
    <div
      className="absolute left-0 bottom-0 h-[3px] bg-white/30 rounded"
      style={{ width: fullWidth ? `${fullWidth}px` : "100%" }}
    />
    {/* Animated Progress Line */}
    <motion.div
      className="absolute left-0 bottom-0 h-[3px] bg-white/90 rounded"
      style={{ width: progress }}
    />
  </>
);

const TimelineItem = ({ item }: { item: HistoryEvent }) => {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-72"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-sm text-white rounded-3xl p-5 shadow-md border border-white/20 w-full h-80 text-left focus:outline-none focus:ring-2 focus:ring-white/80"
        whileHover={{ scale: 1.01, borderColor: "rgba(255, 255, 255, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
        tabIndex={0}
      >
        <h3 className="text-base md:text-lg font-light leading-snug">
          {item.title}
        </h3>
      </motion.div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-2.5 h-2.5 rounded-full bg-white/80 shadow-md" />
    </motion.div>
  );
};

const History = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Refs for edge-scrolling logic
  const scrollDirection = useRef(0); // -1 for left, 1 for right, 0 for stop
  const animationFrameId = useRef<number | null>(null);

  // Effect to measure the full width of the content for the timeline track
  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, []);

  // Framer Motion hooks for the animated progress line
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  const lineWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  // Effect for handling the edge-scrolling behavior
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const EDGE_SIZE = 80;
    const SCROLL_SPEED = 1;

    const startScrolling = () => {
      if (animationFrameId.current !== null) return;
      const scrollStep = () => {
        if (scrollDirection.current !== 0) {
          container.scrollBy({ left: SCROLL_SPEED * scrollDirection.current, behavior: 'auto' });
          animationFrameId.current = requestAnimationFrame(scrollStep);
        } else {
          stopScrolling();
        }
      };
      animationFrameId.current = requestAnimationFrame(scrollStep);
    };

    const stopScrolling = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { left, width } = container.getBoundingClientRect();
      const mouseX = event.clientX - left;

      if (mouseX < EDGE_SIZE) {
        scrollDirection.current = -0.5;
        startScrolling();
      } else if (mouseX > width - EDGE_SIZE) {
        scrollDirection.current = 0.5;
        startScrolling();
      } else {
        scrollDirection.current = 0;
      }
    };
    
    const handleMouseLeave = () => {
      scrollDirection.current = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      stopScrolling();
    };
  }, []);

  return (
    <div className="w-full bg-[#3B799E] px-4 py-16 md:px-12 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-newyork text-white text-3xl md:text-5xl font-extlight tracking-wide relative inline-block">
          IET HISTORY
          <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white/90 rounded" />
        </h1>
      </div>
      <div
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden max-w-full custom-scrollbar-hide scroll-smooth scroll-container-snap"
      >
        <div
          ref={contentRef}
          className="relative flex space-x-12 pb-12 pt-4 px-8"
        >
          <TimelineTrack progress={lineWidth} fullWidth={contentWidth} />
          {history.map((item: HistoryEvent) => (
            <div key={item.id} className="scroll-item-snap">
              <TimelineItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;