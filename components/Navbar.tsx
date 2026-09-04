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
  Sparkles,
  Bot,
  Activity,
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
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels & Stays", icon: Building2 },
    { id: "packages", label: "Holidays", icon: Palmtree },
    { id: "cabs", label: "Airport Cabs", icon: Car },
    { id: "trains", label: "Trains", icon: Train },
    { id: "wiki", label: "Wiki Travel Guide", icon: BookOpen, highlight: true }
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
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-white">
      {/* Top micro bar with Live Airport Status and Zero Fee Guarantee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs border-b border-slate-800/40 text-slate-400">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Hidden-Fee Guarantee &bull; 100% Instant Refund Shield
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-cyan-400 cursor-pointer hover:underline" onClick={() => onOpenWiki("gurgaon")}>
            🏙️ Gurgaon (Gurugram) Encyclopedia &amp; Guide
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-900 border border-slate-700/60 rounded-full px-2 py-0.5 text-[11px]">
            <Globe className="w-3 h-3 text-slate-400 mr-1" />
            <button
              onClick={() => setCurrency("INR")}
              className={`px-1.5 py-0.5 rounded-full font-medium transition-colors ${
                currency === "INR" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-1.5 py-0.5 rounded-full font-medium transition-colors ${
                currency === "USD" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              $ USD
            </button>
          </div>

          {/* 24/7 Helpline */}
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <span>24/7 Priority Support:</span>
            <span className="text-blue-400 font-semibold">1800-102-8747</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div
              onClick={() => {
                setActiveTab("flights");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                  Travel<span className="text-blue-500">Go</span>
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-emerald-400 -mt-0.5">
                  PREMIUM TRAVEL &bull; WIKI RADAR
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Service Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1 rounded-2xl border border-slate-800/80">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : tab.highlight
                      ? "text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : tab.highlight ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                  {tab.highlight && (
                    <span className="px-1.5 py-0.2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] rounded-full font-bold">
                      GUIDE
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* AI Travel Concierge Trigger */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 border border-cyan-500/40 text-xs font-bold text-cyan-300 hover:text-white hover:border-cyan-400 transition-all shadow-md shadow-cyan-500/10"
            >
              <Bot className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span className="hidden sm:inline">AI Concierge</span>
            </button>

            {/* My Bookings */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">My Trips</span>
              {bookingCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Auth / Profile button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-xs font-semibold text-blue-300 hover:text-white hover:bg-blue-600/30 transition-all"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">{user?.loggedIn ? user.name : "Login"}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenConcierge();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold shadow-lg"
            >
              <Bot className="w-4 h-4" />
              Chat with AI Travel Concierge
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
