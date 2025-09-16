import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import PageWrapper from "@/components/animations/PageWrapper";
// import { PreloadResources } from "@/components/common/PreloadResources";

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
  // Add performance hints
  other: {
    "dns-prefetch": "https://www.ietdavv.edu.in",
    "preconnect": "https://fonts.googleapis.com",
    "preload": "/landing/mblock.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/landing/mblock.png" as="image" />
        <link rel="dns-prefetch" href="//www.ietdavv.edu.in" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-white" suppressHydrationWarning>
        <div className={manrope.className}>
          <AuthProvider>
            <HeaderContainer />
            {/* <PreloadResources /> */}
            <PageWrapper>
              <main>{children}</main>
            </PageWrapper>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
