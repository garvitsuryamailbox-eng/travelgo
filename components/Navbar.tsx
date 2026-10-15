"use client";

import React, { useState, useEffect } from "react";
import {
  Plane,
  Building2,
  Car,
  Palmtree,
  Train,
  BookOpen,
  User,
  Compass,
  Bot,
  ShoppingBag,
  ChevronDown,
  Sparkles,
  Menu,
  X,
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
  onOpenConcierge,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTabs = [
    { id: "flights",  label: "Flights",       icon: Plane },
    { id: "hotels",   label: "Hotels",        icon: Building2 },
    { id: "packages", label: "Holidays",      icon: Palmtree },
    { id: "trains",   label: "Trains",        icon: Train },
    { id: "cabs",     label: "Airport Cabs",  icon: Car },
    { id: "wiki",     label: "City Guides",   icon: BookOpen },
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
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        width: "100%",
        maxWidth: "100vw",
        background: scrolled
          ? "rgba(2,13,40,0.97)"
          : "#020d28",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* ── TOP ROW ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">

          {/* Brand Logo */}
          <div
            onClick={() => { setActiveTab("flights"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
          >
            {/* Icon */}
            <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-5 h-5 text-white" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#020d28] animate-pulse" />
            </div>
            {/* Wordmark */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-tight text-white leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Travel<span className="text-sky-400">go</span>
                </span>
                <span className="text-[8px] font-black px-1 py-0.5 rounded bg-[#e8323a] text-white uppercase tracking-wider">
                  IN
                </span>
              </div>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.18em] text-slate-400 font-semibold leading-none mt-0.5">
                Plan · Compare · Book
              </span>
            </div>
          </div>

          {/* Desktop Category Pills (center) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/8"
                  }`}
                  style={active ? {
                    background: "rgba(0,87,228,0.2)",
                    border: "1px solid rgba(0,87,228,0.4)",
                  } : {}}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? "text-sky-400" : "text-slate-500"}`} />
                  <span>{tab.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-4 h-0.5 rounded-full bg-sky-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">

            {/* AI Copilot */}
            <button
              onClick={onOpenConcierge}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-sky-300 hover:text-white transition-all cursor-pointer"
              style={{
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>AI Planner</span>
            </button>

            {/* My Trips */}
            <button
              onClick={onOpenBookings}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer relative"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <ShoppingBag className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:block">My Trips</span>
              {bookingCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full bg-[#e8323a] text-white text-[9px] font-black flex items-center justify-center shadow-md shadow-red-500/30 border-2 border-[#020d28]">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Login / Profile */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold text-white cursor-pointer transition-all active:scale-95"
              style={{
                background: "linear-gradient(135deg, #0057e4, #0284c7)",
                boxShadow: "0 4px 14px rgba(0,87,228,0.35)",
              }}
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black shrink-0">
                {user?.loggedIn ? user.name[0] : <User className="w-3 h-3" />}
              </div>
              <span className="truncate max-w-[80px]">
                {user?.loggedIn ? user.name.split(" ")[0] : "Sign In"}
              </span>
              <ChevronDown className="w-3 h-3 opacity-60 hidden sm:block" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t py-4 px-4 animate-fade-up"
          style={{
            borderColor: "rgba(255,255,255,0.07)",
            background: "rgba(2,13,40,0.98)",
          }}
        >
          <div className="grid grid-cols-3 gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={active ? {
                    background: "rgba(0,87,228,0.2)",
                    border: "1px solid rgba(0,87,228,0.3)",
                  } : {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-sky-400" : "text-slate-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile AI Planner */}
          <button
            onClick={() => { onOpenConcierge(); setMobileMenuOpen(false); }}
            className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-sky-300 cursor-pointer"
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
            }}
          >
            <Bot className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>AI Trip Planner</span>
          </button>
        </div>
      )}
    </header>
  );
}
