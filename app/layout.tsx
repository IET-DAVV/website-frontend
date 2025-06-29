import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import TopBar from "@/components/landing-page/TopBar";
import Navbar from "@/components/landing-page/Navbar";

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
      <body className={`${poppins.className} `}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
