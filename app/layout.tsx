import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import PageWrapper from "@/components/animations/PageWrapper"; // ✅ Add this

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
      <body className="bg-white" suppressHydrationWarning>
        <div className={manrope.className}>
          <AuthProvider>
            <HeaderContainer />
            {/* ✅ Wrap main content with PageWrapper */}
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
