'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Copy, Check, ArrowRight } from 'lucide-react';
import { offersData } from '@/data/travelData';

export default function OffersSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="offers" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Special Deals & Offers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Use verified coupon codes to save more on your flights, hotels, and holiday bookings.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.slice(0, 3).map((off) => (
            <div
              key={off.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-700 text-xs font-bold uppercase">
                    {off.category}
                  </span>
                  {off.bankLogoText && (
                    <span className="text-xs font-bold text-slate-500">
                      {off.bankLogoText}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {off.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {off.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-dashed border-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Code</span>
                    <span className="font-mono font-bold text-sm text-slate-900">{off.couponCode}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(off.couponCode)}
                    className="px-3 py-1.5 rounded bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedCode === off.couponCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
