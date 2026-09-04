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
  Sparkles,
  Briefcase,
  ShieldCheck
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
    <header className="sticky top-0 z-50 bg-[#051329] border-b border-blue-950/80 text-white shadow-xl backdrop-blur-md">
      {/* Top Utility Bar (MakeMyTrip Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs border-b border-blue-900/40 text-blue-200/90">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>₹0 Convenience Fee &bull; 100% Upfront Pricing</span>
          </div>

          <div
            onClick={() => onOpenWiki("gurgaon")}
            className="hidden md:flex items-center gap-1.5 text-cyan-300 font-semibold hover:text-white cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Millennium City Guide: Gurgaon / Gurugram Hub</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Corporate / myBiz Travel */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-[11px] font-bold text-cyan-300">
            <Briefcase className="w-3 h-3 text-cyan-400" />
            <span>CyberHub Corporate: 30% Off</span>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center bg-blue-950/90 border border-blue-800/70 rounded-full px-2 py-0.5 text-[11px]">
            <Globe className="w-3 h-3 text-blue-300 mr-1.5" />
            <button
              onClick={() => setCurrency("INR")}
              className={`px-2 py-0.5 rounded-full font-black transition-all ${
                currency === "INR" ? "bg-blue-600 text-white shadow-sm" : "text-blue-300 hover:text-white"
              }`}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 rounded-full font-black transition-all ${
                currency === "USD" ? "bg-blue-600 text-white shadow-sm" : "text-blue-300 hover:text-white"
              }`}
            >
              🇺🇸 USD ($)
            </button>
          </div>

          {/* 24/7 Helpline */}
          <div className="hidden sm:flex items-center gap-1.5 text-blue-300 text-[11px]">
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span>24x7 Help:</span>
            <span className="text-white font-black">1800-102-8747</span>
          </div>
        </div>
      </div>

      {/* Main MakeMyTrip-Grade Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div
            onClick={() => {
              setActiveTab("flights");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Travel<span className="text-blue-400">Go</span>
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-rose-600 text-white ml-1">
                  PLUS
                </span>
              </div>
              <span className="block text-[9px] uppercase font-extrabold tracking-widest text-cyan-300 -mt-0.5">
                MAKEMYTRIP ENGINE &bull; WIKIPEDIA TRAVEL
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-[#081836] p-1.5 rounded-2xl border border-blue-900/60 shadow-inner">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-black transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/35 scale-100"
                      : "text-blue-200 hover:text-white hover:bg-blue-900/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : tab.color}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* AI Travel Copilot */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-400/40 text-xs font-bold text-cyan-300 hover:text-white hover:border-cyan-300 transition-all shadow-md shadow-cyan-500/10"
            >
              <Bot className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="hidden sm:inline">AI Concierge</span>
            </button>

            {/* My Trips */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950 border border-blue-800 text-xs font-bold text-blue-100 hover:text-white hover:bg-blue-900 transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-blue-300 leading-none">Manage</div>
                <div className="font-extrabold text-xs text-white">My Trips</div>
              </div>
              {bookingCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center animate-pulse shadow-md">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* User Profile / Login */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-black text-xs">
                {user?.loggedIn ? user.name[0] : <User className="w-3.5 h-3.5" />}
              </div>
              <div className="text-left hidden md:block">
                <div className="text-[10px] text-blue-200 leading-none">
                  {user?.loggedIn ? "Welcome" : "Account"}
                </div>
                <div className="font-black text-xs text-white truncate max-w-[90px]">
                  {user?.loggedIn ? user.name.split(" ")[0] : "Login / Signup"}
                </div>
              </div>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-blue-950 border border-blue-800 text-blue-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-blue-900 bg-[#051329] px-4 py-4 space-y-2 animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-black text-left transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md"
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
