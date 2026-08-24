'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0e14] text-[#f4f2ed]">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated Gold Emblem Ring */}
        <div className="relative w-16 h-16 rounded-full border border-[#c5a880]/30 flex items-center justify-center animate-pulse">
          <div className="absolute inset-0 rounded-full border-t border-[#c5a880] animate-spin" />
          <span className="font-serif text-xl font-semibold text-[#c5a880] tracking-widest">A</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <span className="font-serif text-2xl tracking-[0.3em] uppercase text-[#faf9f6]">
            Aurelia
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#c5a880] font-semibold">
            Preparing Sanctuary...
          </span>
        </div>
      </div>
    </div>
  );
}
