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
  Bot
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
    { id: "hotels", label: "Hotels", icon: Building2 },
    { id: "packages", label: "Holidays", icon: Palmtree },
    { id: "cabs", label: "Airport Cabs", icon: Car },
    { id: "trains", label: "Trains", icon: Train },
    { id: "wiki", label: "Gurgaon Guide", icon: BookOpen }
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
    <header className="sticky top-0 z-40 bg-[#08090e]/95 backdrop-blur-md border-b border-slate-800/60 text-white">
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
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                Travel<span className="text-blue-500">Go</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                Luxury Booking &amp; Wiki
              </span>
            </div>
          </div>

          {/* Desktop Clean Service Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/60">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Currency Toggle */}
            <div className="hidden sm:flex items-center bg-slate-900/80 border border-slate-800 rounded-xl p-1 text-[11px]">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-2 py-1 rounded-lg font-semibold transition-colors ${
                  currency === "INR" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-2 py-1 rounded-lg font-semibold transition-colors ${
                  currency === "USD" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                $ USD
              </button>
            </div>

            {/* AI Travel Copilot Button */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline">AI Concierge</span>
            </button>

            {/* My Bookings / Trips */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-xs font-semibold text-blue-400 hover:bg-blue-600/20 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">My Trips</span>
              {bookingCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <button
              onClick={onOpenAuth}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Account"
            >
              <User className="w-4 h-4" />
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800/60 bg-[#08090e] px-4 py-4 space-y-2 animate-in slide-in-from-top-3">
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
        </div>
      )}
    </header>
  );
}
