'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
  Zap,
  CreditCard,
  Headphones,
  RefreshCw
} from 'lucide-react';
import BookingWidget from './BookingWidget';

export default function Hero() {
  return (
    <section className="relative bg-[#0c1222] text-white pt-12 sm:pt-16 pb-20 overflow-hidden">
      {/* 1. Background Travel Wallpaper with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80"
          alt="Travel destinations"
          fill
          priority
          className="object-cover opacity-20 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222]/90 via-[#0c1222]/75 to-[#0c1222]" />
      </div>

      {/* 2. Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Live Offer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-xs font-bold mb-4 shadow-lg hover:bg-white/15 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>India’s Leading Next-Gen Travel Portal</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4">
          Plan Better. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Travel Further.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Flights, hotels, holidays and experiences — everything you need for your next journey.
        </p>

        {/* 3. Interactive Multi-Tab Booking Search Engine */}
        <div id="search" className="max-w-5xl mx-auto text-left shadow-2xl shadow-sky-950/60 rounded-3xl mb-8">
          <BookingWidget />
        </div>

        {/* 4. Real-World Trust & Protection Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left text-xs">
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/40 transition-all">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Free Cancellation</div>
              <div className="text-[11px] text-slate-400">On select stays & flights</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/40 transition-all">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Instant Confirmation</div>
              <div className="text-[11px] text-slate-400">Live PNR & E-tickets</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 transition-all">
            <CreditCard className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Zero Convenience Fee</div>
              <div className="text-[11px] text-slate-400">With UPI & Net Banking</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/40 transition-all">
            <Headphones className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <div className="font-bold text-white">24x7 Assistance</div>
              <div className="text-[11px] text-slate-400">Dedicated travel experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
