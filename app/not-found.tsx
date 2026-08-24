'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Sparkles, Home } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#12151e] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Uncharted Sanctuary</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl font-normal text-[#faf9f6] tracking-tight">
            404
          </h1>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#c5a880] italic">
            This horizon remains undiscovered.
          </h2>

          <p className="text-sm sm:text-base text-[#eae6df]/70 font-light max-w-md mx-auto leading-relaxed">
            The page or private itinerary you are looking for has either moved or is reserved under client discretion.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-lg shadow-[#c5a880]/20 flex items-center gap-2"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/journeys"
              className="px-8 py-3.5 rounded-full border border-[#c5a880]/40 hover:border-[#c5a880] text-[#f4f2ed] hover:text-[#c5a880] font-semibold text-xs tracking-[0.2em] uppercase transition-all flex items-center gap-2"
            >
              <span>Explore Journeys</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
