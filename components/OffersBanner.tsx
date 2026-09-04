"use client";

import React, { useState } from "react";
import { Tag, Copy, Check } from "lucide-react";
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
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-white">Coupons &amp; Deals</h3>
          <p className="text-xs text-slate-400">Copy promo codes to save instantly at checkout</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {OFFERS_DATA.map((offer) => {
          const isCopied = copiedCode === offer.code;
          return (
            <div
              key={offer.id}
              className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  {offer.discount}
                </span>
                <h4 className="text-xs font-bold text-white mt-1 line-clamp-1">{offer.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">{offer.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 mt-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-300">{offer.code}</span>
                <button
                  onClick={() => handleCopy(offer.code)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                    isCopied
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
