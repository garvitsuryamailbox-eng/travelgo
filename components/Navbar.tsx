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
  Sparkles
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
    { id: "flights", label: "Flights", icon: Plane, color: "text-blue-400" },
    { id: "hotels", label: "Hotels", icon: Building2, color: "text-rose-400" },
    { id: "packages", label: "Holidays", icon: Palmtree, color: "text-teal-400" },
    { id: "cabs", label: "Airport Cabs", icon: Car, color: "text-amber-400" },
    { id: "trains", label: "Trains", icon: Train, color: "text-emerald-400" },
    { id: "wiki", label: "Gurgaon Wiki", icon: BookOpen, color: "text-cyan-400", highlight: true }
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === "wiki") {
      onOpenWiki("gurgaon");
    } else {
      setActiveTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#051329] border-b border-blue-950 text-white shadow-xl">
      {/* Top Micro Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs border-b border-blue-900/40 text-blue-200">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            100% Upfront Transparent Fares &bull; ₹0 Convenience Fee
          </span>
          <span className="hidden md:inline text-blue-800">|</span>
          <span
            onClick={() => onOpenWiki("gurgaon")}
            className="hidden md:inline text-cyan-300 font-medium hover:underline cursor-pointer"
          >
            🏙️ Featured: Gurgaon Millennium City Encyclopedia
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Currency Toggle */}
          <div className="flex items-center bg-blue-950/80 border border-blue-800/60 rounded-full px-2 py-0.5 text-[11px]">
            <Globe className="w-3 h-3 text-blue-300 mr-1" />
            <button
              onClick={() => setCurrency("INR")}
              className={`px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                currency === "INR" ? "bg-blue-600 text-white" : "text-blue-300 hover:text-white"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                currency === "USD" ? "bg-blue-600 text-white" : "text-blue-300 hover:text-white"
              }`}
            >
              $ USD
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-blue-300 text-[11px]">
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span>24/7 Helpline:</span>
            <span className="text-white font-bold">1800-102-8747</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div
            onClick={() => {
              setActiveTab("flights");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">
                Travel<span className="text-blue-400">Go</span>
              </span>
              <span className="block text-[9px] uppercase font-extrabold tracking-widest text-cyan-300 -mt-1">
                MAKEMYTRIP &bull; WIKI TRAVEL
              </span>
            </div>
          </div>

          {/* Desktop Service Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#091b3a] p-1.5 rounded-2xl border border-blue-900/60">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "text-blue-200 hover:text-white hover:bg-blue-900/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : tab.color}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* AI Travel Copilot */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-400/40 text-xs font-bold text-cyan-300 hover:text-white hover:border-cyan-300 transition-all shadow-md shadow-cyan-500/10"
            >
              <Bot className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="hidden sm:inline">AI Concierge</span>
            </button>

            {/* My Bookings */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950 border border-blue-800/80 text-xs font-bold text-blue-100 hover:text-white hover:bg-blue-900 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">My Trips</span>
              {bookingCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center animate-pulse">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/25"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{user?.loggedIn ? user.name : "Login"}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-blue-950 border border-blue-800 text-blue-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-900 bg-[#051329] px-4 py-4 space-y-2 animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold text-left transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-[#091b3a] border border-blue-900 text-blue-200 hover:bg-blue-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : tab.color}`} />
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
