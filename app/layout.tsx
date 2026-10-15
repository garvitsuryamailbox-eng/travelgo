import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelGo — Plan Your Trip. Know the Cost. Then Book.",
  description: "TravelGo is a travel planning prototype. Discover complete trip costs, budget-based destinations, and flight comparisons — all with transparent demo pricing before you book.",
  keywords: "travel planning India, trip budget calculator, flight comparison demo, complete trip cost, TravelGo, itinerary planner"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#f2f5f8] text-slate-800 antialiased selection:bg-blue-600 selection:text-white font-sans">
        {children}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
