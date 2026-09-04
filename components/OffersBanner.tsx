"use client";

import React, { useState } from "react";
import { Tag, Copy, Check, Percent } from "lucide-react";
import { OFFERS_DATA } from "../data/offersData";

interface OffersBannerProps {
  onApplyPromoCode?: (code: string) => void;
}

export default function OffersBanner({ onApplyPromoCode }: OffersBannerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    if (onApplyPromoCode) {
      onApplyPromoCode(code);
    }
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Percent className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-black text-slate-900">Exclusive Bank Offers &amp; Promo Codes</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {OFFERS_DATA.map((offer) => {
          const isCopied = copiedCode === offer.code;
          return (
            <div
              key={offer.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider">
                  {offer.discount}
                </span>
                <h4 className="text-sm font-black text-slate-900 mt-2 line-clamp-1">{offer.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{offer.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  {offer.code}
                </span>
                <button
                  onClick={() => handleCopy(offer.code)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-colors ${
                    isCopied
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied ✓" : "Copy Code"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
