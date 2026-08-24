'use client';

import React from 'react';
import { Compass, Sparkles, Plane } from 'lucide-react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export default function AnimatedLogo({
  size = 'md',
  variant = 'light',
  showTagline = true,
}: AnimatedLogoProps) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const iconBoxSize = isLarge ? 'w-12 h-12' : isSmall ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize = isLarge ? 'w-7 h-7' : isSmall ? 'w-4 h-4' : 'w-5 h-5';
  const textTitleSize = isLarge ? 'text-3xl' : isSmall ? 'text-lg' : 'text-2xl';

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* 1. Animated Glowing Icon Container */}
      <div className="relative">
        {/* Pulsing Ambient Halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-teal-400 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

        {/* Inner Gradient Shield */}
        <div
          className={`relative ${iconBoxSize} rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 border border-white/25 flex items-center justify-center text-white shadow-xl shadow-sky-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 overflow-hidden`}
        >
          {/* Shimmer Light Reflection */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          {/* Rotating Compass / Jet Icon */}
          <Compass
            className={`${iconSize} text-sky-400 animate-spin group-hover:text-amber-300 transition-colors`}
            style={{ animationDuration: '12s' }}
          />

          {/* Sparkle Badge */}
          <Sparkles className="w-2.5 h-2.5 text-amber-300 absolute top-1 right-1 animate-ping opacity-80" />
        </div>
      </div>

      {/* 2. Premium Animated Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black ${textTitleSize} tracking-tight ${
              variant === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Travel
            <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
              Go
            </span>
          </span>

          {/* Premium Tag Pill */}
          <span className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-sky-500/15 to-teal-500/15 border border-sky-500/30 text-[9px] font-black text-sky-600 uppercase tracking-widest">
            PRO
          </span>
        </div>

        {showTagline && (
          <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 mt-1 flex items-center gap-1">
            <span>PLAN BETTER</span>
            <span className="text-sky-500 font-bold">•</span>
            <span>TRAVEL FURTHER</span>
          </span>
        )}
      </div>
    </div>
  );
}
