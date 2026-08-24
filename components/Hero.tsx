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
  Headphones
} from 'lucide-react';
import BookingWidget from './BookingWidget';

export default function Hero() {
  return (
    <section className="relative bg-[#060c1a] text-white pt-12 sm:pt-16 pb-24 overflow-hidden">
      {/* 1. Cinematic High-Definition Travel Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
          alt="Exotic tropical ocean destination"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
        />

        {/* Multi-layer Gradient Scrims for maximum readability & depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-[#060c1a]/60 to-[#060c1a]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/80 via-transparent to-[#060c1a]/80" />
        
        {/* Subtle Decorative Geometric Mesh Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* 2. Floating Ambient Glow Orbs for Ultra-Modern Look */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Live Offer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-bold mb-5 shadow-xl hover:bg-white/15 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>India’s Leading Next-Gen Travel Portal</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        {/* Hero Headline with Rich Luminous Gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4">
          Plan Better. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Travel Further.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Flights, hotels, holidays and experiences — everything you need for your next journey.
        </p>

        {/* 3. Interactive Multi-Tab Booking Search Engine */}
        <div id="search" className="max-w-5xl mx-auto text-left shadow-2xl shadow-black/40 rounded-3xl mb-8">
          <BookingWidget />
        </div>

        {/* 4. Real-World Trust & Protection Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left text-xs">
          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-400/50 hover:bg-white/15 transition-all">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Free Cancellation</div>
              <div className="text-[11px] text-slate-300">On select stays & flights</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-teal-400/50 hover:bg-white/15 transition-all">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Instant Confirmation</div>
              <div className="text-[11px] text-slate-300">Live PNR & E-tickets</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-400/50 hover:bg-white/15 transition-all">
            <CreditCard className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Zero Convenience Fee</div>
              <div className="text-[11px] text-slate-300">With UPI & Net Banking</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-emerald-400/50 hover:bg-white/15 transition-all">
            <Headphones className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <div className="font-bold text-white">24x7 Assistance</div>
              <div className="text-[11px] text-slate-300">Dedicated travel experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
