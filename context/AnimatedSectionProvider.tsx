"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionContextType {
  hasAnimated: boolean;
  setHasAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedSectionContext = createContext<
  AnimatedSectionContextType | undefined
>(undefined);

export const useAnimatedSection = () => {
  const context = useContext(AnimatedSectionContext);
  if (!context) {
    throw new Error(
      "useAnimatedSection must be used within an AnimatedSectionProvider",
    );
  }
  return context;
};

interface AnimatedSectionProviderProps {
  children: React.ReactNode;
}

export const AnimatedSectionProvider: React.FC<
  AnimatedSectionProviderProps
> = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSectionContext.Provider value={{ hasAnimated, setHasAnimated }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatedSectionContext.Provider>
  );
};
