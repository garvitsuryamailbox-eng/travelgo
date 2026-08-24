import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "TravelGo – Flights, Hotels, Holidays & Travel Booking",
  description:
    "Book flights, hotels, holidays, trains, buses and cabs with TravelGo.",
  keywords: [
    "travel booking",
    "flights",
    "hotels",
    "trains",
    "buses",
    "cabs",
    "holidays",
    "vacation packages",
    "luxury resorts",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
