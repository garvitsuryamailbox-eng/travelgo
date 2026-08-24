'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function AureliaNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journeys', href: '/journeys' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Stays', href: '/stays' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Private Travel', href: '/private-travel' },
  ];

  const secondaryLinks = [
    { name: 'Journal', href: '/journal' },
    { name: 'Concierge', href: '/concierge' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0c0e14]/95 backdrop-blur-xl border-b border-[#c5a880]/15 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* 1. Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] group-hover:scale-105 transition-all duration-300">
              <span className="font-serif text-sm font-semibold tracking-widest">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.22em] text-[#f4f2ed] uppercase group-hover:text-[#c5a880] transition-colors leading-none">
                Aurelia
              </span>
              <span className="text-[8px] font-semibold tracking-[0.3em] text-[#c5a880] uppercase mt-1">
                Travel Beyond Ordinary
              </span>
            </div>
          </Link>

          {/* 2. Center & Right Unified Navigation with Generous Spacing & Divider */}
          <div className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] font-medium">
            {/* Primary Category Links */}
            <nav className="flex items-center gap-5 text-[#eae6df]/80">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`hover:text-[#c5a880] transition-colors relative py-1 shrink-0 ${
                      isActive ? 'text-[#c5a880] font-semibold' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Subtle Luxury Divider to prevent links from sticking together */}
            <span className="h-4 w-[1px] bg-[#c5a880]/30 shrink-0 mx-1" aria-hidden="true" />

            {/* Secondary Editorial & Concierge Links */}
            <div className="flex items-center gap-5 text-[#eae6df]/70">
              {secondaryLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`hover:text-[#c5a880] transition-colors relative py-1 shrink-0 ${
                      isActive ? 'text-[#c5a880] font-semibold' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/#planner"
              className="ml-2 px-5 py-2.5 rounded-full border border-[#c5a880]/60 bg-[#c5a880]/10 hover:bg-[#c5a880] text-[#f4f2ed] hover:text-[#0c0e14] transition-all duration-300 font-semibold tracking-widest text-[10px] hover:shadow-lg hover:shadow-[#c5a880]/20 flex items-center gap-1.5 shrink-0"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* 3. Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full border border-[#c5a880]/30 text-[#f4f2ed] hover:border-[#c5a880] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a880]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 4. Mobile Full-Screen Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0e14]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300 xl:hidden">
          <div className="space-y-6">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] border-b border-[#c5a880]/20 pb-3">
              Explore Aurelia
            </div>

            <nav className="flex flex-col space-y-3.5 font-serif text-2xl tracking-widest text-[#f4f2ed]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#c5a880] transition-colors py-1 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a880]" />
                </Link>
              ))}

              <div className="pt-2 text-xs font-sans tracking-[0.2em] uppercase text-[#c5a880] font-semibold">
                Services & Inquiries
              </div>

              {secondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#c5a880] transition-colors py-1 flex items-center justify-between text-xl border-b border-white/5 text-[#eae6df]/80"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c5a880]/20">
            <Link
              href="/#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-4 text-center rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase shadow-xl"
            >
              Plan Your Bespoke Journey
            </Link>

            <p className="text-[10px] text-center text-[#eae6df]/50 tracking-widest uppercase">
              Bespoke Journeys • Private Concierge • Luxury Stays
            </p>
          </div>
        </div>
      )}
    </>
  );
}
