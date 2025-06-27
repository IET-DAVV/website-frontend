import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";

// Load Manrope for body
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Load Playfair Display for NYT-style headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Your App",
  description: "Modern typography with Manrope and NYT-style headings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Manrope as the global/default font */}
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

// ✅ Export Playfair for component use
export { playfair };
