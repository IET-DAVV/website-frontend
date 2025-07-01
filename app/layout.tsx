import type { Metadata } from "next";
<<<<<<< HEAD
import { Manrope } from "next/font/google";
=======
import { Poppins } from "next/font/google";
>>>>>>> origin/main
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";

<<<<<<< HEAD
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
=======
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
>>>>>>> origin/main
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
<<<<<<< HEAD
      <body className={`${manrope.className} bg-white`}>
=======
      <body className={`${poppins.className} bg-white`}>
>>>>>>> origin/main
        <HeaderContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
