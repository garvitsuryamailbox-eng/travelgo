"use client";

import React from "react";
import { Search, Compass, Ticket, Tag, User } from "lucide-react";

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  bookingCount: number;
  onOpenBookings: () => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
}

export default function MobileBottomNav({
  activeSection,
  onNavigate,
  bookingCount,
  onOpenBookings,
  onOpenAuth,
  isLoggedIn,
}: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe"
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        {/* 1. Explore / Search */}
        <button
          type="button"
          onClick={() => {
            onNavigate("search");
            const el = document.getElementById("booking-search-widget");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all ${
            activeSection === "search" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeSection === "search" ? "bg-blue-50 text-blue-600" : ""}`}>
            <Search className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Explore</span>
        </button>

        {/* 2. City Guides */}
        <button
          type="button"
          onClick={() => {
            onNavigate("guides");
            const el = document.getElementById("city-guides-hub");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all ${
            activeSection === "guides" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeSection === "guides" ? "bg-blue-50 text-blue-600" : ""}`}>
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Guides</span>
        </button>

        {/* 3. Bookings (With Live Badge) */}
        <button
          type="button"
          onClick={onOpenBookings}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-2xl text-slate-500 hover:text-slate-800 relative transition-all"
        >
          <div className="p-1 rounded-xl relative">
            <Ticket className="w-5 h-5" />
            {bookingCount > 0 && (
              <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-emerald-500 text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {bookingCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">My Trips</span>
        </button>

        {/* 4. Offers */}
        <button
          type="button"
          onClick={() => {
            onNavigate("offers");
            const el = document.getElementById("offers-banner-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all ${
            activeSection === "offers" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <div className={`p-1 rounded-xl transition-colors ${activeSection === "offers" ? "bg-blue-50 text-blue-600" : ""}`}>
            <Tag className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Offers</span>
        </button>

        {/* 5. Account / Login */}
        <button
          type="button"
          onClick={onOpenAuth}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-2xl text-slate-500 hover:text-slate-800 transition-all"
        >
          <div className="p-1 rounded-xl">
            <User className={`w-5 h-5 ${isLoggedIn ? "text-blue-600" : ""}`} />
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">
            {isLoggedIn ? "Profile" : "Sign In"}
          </span>
        </button>
      </div>
    </nav>
  );
}
