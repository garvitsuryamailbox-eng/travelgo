'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Plane,
  Building2,
  Train,
  Bus,
  Package,
  Car,
  Search,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowRight
} from 'lucide-react';
import BookingWidget from './BookingWidget';

export default function Hero() {
  return (
    <section className="relative bg-[#0c1222] text-white pt-12 sm:pt-20 pb-24 overflow-hidden">
      {/* 1. Background Travel Wallpaper with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80"
          alt="Tropical paradise"
          fill
          priority
          className="object-cover opacity-25 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222]/90 via-[#0c1222]/70 to-[#0c1222]" />
      </div>

      {/* 2. Floating Animated Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-xs font-bold mb-6 shadow-lg hover:bg-white/15 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>India’s Most Loved Travel & Stay Platform</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        {/* Hero Headline with Rich Gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-5">
          Explore the World, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Your Way with TravelGo
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Book verified luxury stays, instant flights, scenic trains, intercity buses, and curated holiday packages.
        </p>

        {/* 3. Interactive Multi-Tab Booking Search Engine */}
        <div id="search" className="max-w-5xl mx-auto text-left shadow-2xl shadow-sky-950/50 rounded-3xl">
          <BookingWidget />
        </div>

        {/* 4. Animated Feature Trust Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/40 transition-all hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">500+</div>
            <div className="text-xs text-sky-200 font-semibold mt-0.5">Global Destinations</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/40 transition-all hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">120k+</div>
            <div className="text-xs text-teal-200 font-semibold mt-0.5">Happy Travelers</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 transition-all hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-300 flex items-center justify-center gap-1">
              <Star className="w-5 h-5 fill-amber-300" />
              <span>4.9 / 5</span>
            </div>
            <div className="text-xs text-amber-200 font-semibold mt-0.5">Customer Rating</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/40 transition-all hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300">24/7</div>
            <div className="text-xs text-emerald-200 font-semibold mt-0.5">Live Concierge</div>
          </div>
        </div>
      </div>
    </section>
  );
}
