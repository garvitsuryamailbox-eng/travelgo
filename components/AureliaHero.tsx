'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

export default function AureliaHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0e14]">
      {/* 1. Cinematic Full-Bleed Luxury Background Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=90"
          alt="Bespoke luxury ocean and island travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 brightness-75"
        />

        {/* Sophisticated Multi-Layer Scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e14]/70 via-[#0c0e14]/40 to-[#0c0e14]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c0e14]/50 to-[#0c0e14]/90" />
      </div>

      {/* 2. Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Gold Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#0c0e14]/60 backdrop-blur-md text-[#c5a880] text-[11px] uppercase tracking-[0.25em] font-semibold mb-8 animate-luxury-fade shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-ping" />
          <span>Private Journeys & Stays</span>
        </div>

        {/* Grand Editorial Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#faf9f6] tracking-tight leading-[1.05] mb-6">
          Travel Beyond <br className="hidden sm:inline" />
          <span className="italic font-light text-[#c5a880] drop-shadow-sm">
            Ordinary.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-[#eae6df]/85 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
          Private journeys, exceptional stays and experiences designed entirely around you.
        </p>

        {/* Luxury CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link
            href="/journeys"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-105 active:scale-95"
          >
            Discover Journeys
          </Link>

          <Link
            href="/concierge"
            className="w-full sm:w-auto px-9 py-4 rounded-full border border-[#c5a880]/50 hover:border-[#c5a880] bg-[#0c0e14]/40 hover:bg-[#0c0e14]/70 backdrop-blur-md text-[#f4f2ed] font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105"
          >
            Speak to a Concierge
          </Link>
        </div>
      </div>

      {/* 3. Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#c5a880]/60 hover:text-[#c5a880] transition-colors cursor-pointer">
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#c5a880] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
