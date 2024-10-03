import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import HeaderContainer from "@/containers/header/Header";
=======

import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
>>>>>>> b723d658d8dd18bccb5e1f268ec3413b751e38dc
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "IET-DAVV",
  description: "IET-DAVV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <HeaderContainer />
        {children}
<<<<<<< HEAD
=======
       <Footer />
>>>>>>> b723d658d8dd18bccb5e1f268ec3413b751e38dc
      </body>
    </html>
  );
}
