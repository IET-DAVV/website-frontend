import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import HeaderContainer from "@/containers/header/Header";
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
      </body>
    </html>
  );
}
