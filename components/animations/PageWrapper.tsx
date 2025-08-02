"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const pageVariants: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const footerVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col"
    >

      {/* Main Content */}
      <motion.div variants={pageVariants} className="flex-1 px-4">
        {children}
      </motion.div>

    </motion.div>
  );
};

export default PageWrapper;
