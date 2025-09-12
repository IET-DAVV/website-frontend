"use client";

import { useEffect } from "react";

export const PreloadResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "/landing/mblock.png",
      "/landing/Clubs/GDG_1.png",
      "/landing/Clubs/ECell_1.png"
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Preload critical fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "preload";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap";
    fontLink.as = "style";
    document.head.appendChild(fontLink);

    // Preconnect to external domains
    const domains = ["https://www.ietdavv.edu.in", "https://fonts.gstatic.com"];
    domains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};
