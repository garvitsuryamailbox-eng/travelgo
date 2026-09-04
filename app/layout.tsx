import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelGo - MakeMyTrip Booking & Wikipedia Travel Guide",
  description: "Book flights, hotels in Gurgaon Cyber City, airport cabs, and explore comprehensive Wikipedia destination guides with verified travel insights.",
  keywords: "MakeMyTrip, travel booking, Gurgaon, Gurugram, Wikipedia travel guide, Cyber City, flights, luxury hotels, Delhi NCR, airport cabs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#060810] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
