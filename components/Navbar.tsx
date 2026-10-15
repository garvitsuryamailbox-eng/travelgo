"use client";

import React, { useState } from "react";
import {
  Plane,
  Building2,
  Car,
  Palmtree,
  Train,
  BookOpen,
  ShoppingBag,
  User,
  Globe,
  Compass,
  Menu,
  X,
  Bot,
  PhoneCall,
  Briefcase,
  ShieldCheck,
  ChevronDown
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookings: () => void;
  bookingCount: number;
  onOpenWiki: (destId?: string) => void;
  currency: "INR" | "USD";
  setCurrency: (c: "INR" | "USD") => void;
  onOpenAuth: () => void;
  user: { name: string; loggedIn: boolean } | null;
  onOpenConcierge: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenBookings,
  bookingCount,
  onOpenWiki,
  currency,
  setCurrency,
  onOpenAuth,
  user,
  onOpenConcierge
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTabs = [
    { id: "plan", label: "Plan Trip", icon: Compass },
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Building2 },
    { id: "packages", label: "Holidays", icon: Palmtree },
    { id: "trains", label: "Trains", icon: Train },
    { id: "cabs", label: "Airport Cabs", icon: Car },
    { id: "wiki", label: "City Guides", icon: BookOpen }
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === "wiki") {
      onOpenWiki("gurgaon");
    } else if (tabId === "plan") {
      // Scroll to trip planner section
      const el = document.getElementById("trip-planner");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#051334] text-white shadow-md border-b border-[#0a225c]">

      {/* Main Brand & Action Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* MakeMyTrip Style Brand Logo */}
          <div
            onClick={() => {
              setActiveTab("flights");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-white">
                  Travel<span className="text-sky-400">go</span>
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-sm bg-[#eb2026] text-white ml-1.5 shadow-sm">
                  INDIA
                </span>
              </div>
              <span className="block text-[8px] uppercase tracking-widest text-slate-300 font-semibold -mt-0.5">
                PLAN · COMPARE · BOOK
              </span>
            </div>
          </div>

          {/* Right Header Navigation & Actions (MMT Style) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* AI Travel Copilot */}
            <button
              onClick={onOpenConcierge}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-900/50 hover:bg-blue-800/60 border border-blue-400/30 text-xs font-semibold text-sky-200 hover:text-white transition-all cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>AI Trip Planner</span>
            </button>

            {/* My Trips (MMT Style) */}
            <button
              onClick={onOpenBookings}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer relative"
            >
              <ShoppingBag className="w-4 h-4 text-sky-400" />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-slate-400 leading-none">Manage</div>
                <div className="font-bold text-xs text-white">My Trips</div>
              </div>
              {bookingCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#eb2026] text-white text-[10px] font-black flex items-center justify-center shadow-md">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Login / Profile (MakeMyTrip Iconic Pill) */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-black">
                {user?.loggedIn ? user.name[0] : <User className="w-3.5 h-3.5" />}
              </div>
              <div className="text-left">
                <div className="text-[9px] text-blue-200 leading-none">
                  {user?.loggedIn ? "Welcome" : "Account"}
                </div>
                <div className="font-black text-xs text-white truncate max-w-[100px]">
                  {user?.loggedIn ? user.name.split(" ")[0] : "Login / Sign Up"}
                </div>
              </div>
              <ChevronDown className="w-3 h-3 text-blue-200 hidden sm:block" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Category Tabs */}
        <div className="hidden xl:flex items-center gap-2 pb-3">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-sky-200" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Category Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#051334] px-4 py-3 space-y-2 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
