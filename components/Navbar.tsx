'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Globe,
  User,
  HelpCircle,
  Luggage,
  ChevronDown
} from 'lucide-react';
import AuthModal from './AuthModal';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currency, setCurrency] = useState('INR (₹)');
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

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
    { name: 'Activities', href: '/#experiences', icon: Sparkles, color: 'text-indigo-500 hover:bg-indigo-50' },
  ];

  return (
    <>
      {/* 1. Animated Top Announcement Banner */}
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

      {/* 2. Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="shrink-0">
            <AnimatedLogo size="md" variant="light" />
          </Link>

          {/* Center Navigation Categories */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = pathname === cat.href;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-sm scale-105'
                      : `text-slate-700 hover:text-slate-900 hover:shadow-sm ${cat.color}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Offers Link */}
            <Link
              href="/#offers"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Tag className="w-4 h-4 text-amber-500" />
              <span>Offers</span>
            </Link>

            {/* My Trips */}
            <Link
              href="/my-trips"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Luggage className="w-4 h-4 text-sky-500" />
              <span>My Trips</span>
            </Link>

            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 hover:border-sky-300 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 p-1.5 z-50 animate-in fade-in zoom-in-95">
                  {['INR (₹)', 'USD ($)', 'EUR (€)', 'AED (د.إ)'].map((cur) => (
                    <button
                      key={cur}
                      type="button"
                      onClick={() => {
                        setCurrency(cur);
                        setCurrencyDropdown(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer"
                    >
                      {cur}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login / User Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold">
                <div className="w-5 h-5 rounded-full bg-sky-500 text-slate-950 font-black text-[10px] flex items-center justify-center">
                  {currentUser.name.charAt(0)}
                </div>
                <span className="truncate max-w-[100px]">{currentUser.name}</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white text-xs font-bold shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login / Sign Up</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-2">
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

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/my-trips"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs font-bold text-slate-800"
              >
                <span className="flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-sky-600" />
                  <span>My Trips & Tickets</span>
                </span>
                <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">Active</span>
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setAuthModalOpen(true);
                }}
                className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 text-white text-xs font-bold shadow-md"
              >
                Login / Create Account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal Trigger */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />
    </>
  );
}
