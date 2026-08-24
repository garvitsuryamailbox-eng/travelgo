'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home, Sparkles } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Aurelia Runtime Exception:', error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 text-rose-400 text-[10px] uppercase tracking-[0.25em] font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Service Advisory</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#faf9f6] tracking-tight">
            An Unexpected Disruption Occurred
          </h1>

          <p className="text-sm sm:text-base text-[#eae6df]/70 font-light leading-relaxed">
            Our private client concierge system encountered a brief disruption while loading this page.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-lg shadow-[#c5a880]/20 flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Session</span>
            </button>

            <Link
              href="/"
              className="px-8 py-3.5 rounded-full border border-[#c5a880]/40 hover:border-[#c5a880] text-[#f4f2ed] hover:text-[#c5a880] font-semibold text-xs tracking-[0.2em] uppercase transition-all flex items-center gap-2"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
