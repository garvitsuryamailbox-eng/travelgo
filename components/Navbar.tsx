'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  Plane,
  Building2,
  Train,
  Bus,
  Package,
  Car,
  Sparkles,
  Menu,
  X,
  Tag,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Flights', href: '/flights', icon: Plane, color: 'text-sky-500 hover:bg-sky-50' },
    { name: 'Hotels', href: '/hotels', icon: Building2, color: 'text-teal-500 hover:bg-teal-50' },
    { name: 'Trains', href: '/trains', icon: Train, color: 'text-amber-500 hover:bg-amber-50' },
    { name: 'Buses', href: '/buses', icon: Bus, color: 'text-purple-500 hover:bg-purple-50' },
    { name: 'Holidays', href: '/holidays', icon: Package, color: 'text-rose-500 hover:bg-rose-50' },
    { name: 'Cabs', href: '/cabs', icon: Car, color: 'text-emerald-500 hover:bg-emerald-50' },
  ];

  return (
    <>
      {/* 1. Animated Top Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-500 text-white text-xs font-semibold py-2 px-4 text-center relative overflow-hidden shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span>
            ✨ <strong>Special Holiday Sale:</strong> Flat 25% OFF on Luxury Hotels with code{' '}
            <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold tracking-wider">
              STAYGO25
            </span>
          </span>
        </div>
      </div>

      {/* 2. Main Sticky Navbar with Glassmorphism */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Animated Glow */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Compass className="w-6 h-6 animate-float" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-slate-900 tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                Travel<span className="text-sky-500">Go</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Plan Better · Travel Further
              </span>
            </div>
          </Link>

          {/* Animated Category Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 hover:shadow-sm transition-all duration-200 ${cat.color}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/my-trips"
              className="text-xs font-bold text-slate-700 hover:text-sky-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              My Bookings
            </Link>

            <Link
              href="/#search"
              className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Deals</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Animated Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 hover:border-sky-300"
                  >
                    <Icon className="w-4 h-4 text-sky-600" />
                    <span>{cat.name}</span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/my-trips"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-2.5 text-center rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
            >
              View My Trips & Bookings
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
