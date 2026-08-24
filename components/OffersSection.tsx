'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Copy, Check, Sparkles, ArrowRight, Percent } from 'lucide-react';
import { offersData } from '@/data/travelData';

export default function OffersSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200 shadow-sm">
              <Percent className="w-3.5 h-3.5 text-amber-600" />
              <span>Exclusive Promo Discounts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bank Deals & Coupon Codes
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Apply these verified coupon codes at checkout to save up to ₹5,000 instantly.
            </p>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.slice(0, 3).map((off) => (
            <div
              key={off.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Bank / Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {off.category}
                  </span>
                  {off.bankLogoText && (
                    <span className="text-xs font-extrabold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {off.bankLogoText}
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {off.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {off.description}
                </p>
              </div>

              {/* Coupon Box */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-dashed border-sky-300 shadow-inner">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Coupon Code</span>
                    <span className="font-mono font-black text-sm text-sky-700">{off.couponCode}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(off.couponCode)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      copiedCode === off.couponCode
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-sky-600 text-white shadow-sm hover:scale-105 active:scale-95'
                    }`}
                  >
                    {copiedCode === off.couponCode ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
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
