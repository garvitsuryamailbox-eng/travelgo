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
            ? 'bg-[#0c0e14]/90 backdrop-blur-xl border-b border-[#c5a880]/15 py-4 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* 1. Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] group-hover:scale-105 transition-all duration-300">
              <span className="font-serif text-sm font-semibold tracking-widest">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#f4f2ed] uppercase group-hover:text-[#c5a880] transition-colors leading-none">
                Aurelia
              </span>
              <span className="text-[8px] font-semibold tracking-[0.35em] text-[#c5a880] uppercase mt-1">
                Travel Beyond Ordinary
              </span>
            </div>
          </Link>

          {/* 2. Center: Primary Luxury Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#eae6df]/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`hover:text-[#c5a880] transition-colors relative py-1 ${
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

          {/* 3. Right: Secondary Links & CTA */}
          <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#eae6df]/70 hover:text-[#c5a880] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#planner"
              className="px-5 py-2.5 rounded-full border border-[#c5a880]/60 bg-[#c5a880]/10 hover:bg-[#c5a880] text-[#f4f2ed] hover:text-[#0c0e14] transition-all duration-300 font-semibold tracking-widest hover:shadow-lg hover:shadow-[#c5a880]/20 flex items-center gap-2"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-[#c5a880]/30 text-[#f4f2ed] hover:border-[#c5a880] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a880]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 5. Mobile Full-Screen Editorial Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0e14]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300 lg:hidden">
          <div className="space-y-6">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] border-b border-[#c5a880]/20 pb-3">
              Explore Aurelia
            </div>

            <nav className="flex flex-col space-y-4 font-serif text-2xl tracking-widest text-[#f4f2ed]">
              {[...navLinks, ...secondaryLinks].map((link) => (
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
