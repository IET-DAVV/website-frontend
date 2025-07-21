import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";

// 1. Import the AuthProvider
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IET-DAVV",
  description: "IET-DAVV",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} bg-white`}>
        {/* 2. Wrap your components with AuthProvider */}
        <AuthProvider>
          <HeaderContainer />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}