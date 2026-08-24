import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aurelia — Luxury Travel & Bespoke Journeys",
  description:
    "Discover bespoke journeys, exceptional stays and extraordinary travel experiences with Aurelia.",
  keywords: [
    "Aurelia Travel",
    "luxury travel",
    "bespoke journeys",
    "private travel concierge",
    "luxury villas",
    "private island resorts",
    "editorial travel",
    "five star stays",
  ],
};

import { CurrencyProvider } from "@/context/CurrencyContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#0c0e14] text-[#f4f2ed] selection:bg-[#c5a880] selection:text-[#0c0e14]">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
