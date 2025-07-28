import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/common/footer/Footer";
import HeaderContainer from "@/containers/header/Header";
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
      {/* Added suppressHydrationWarning here to ignore mismatches from extensions like Grammarly */}
      <body className="bg-white" suppressHydrationWarning>
        <div className={manrope.className}>
          <AuthProvider>
            <HeaderContainer />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
