"use client";

import React, { useState } from "react";
import { Tag, Copy, Check, Sparkles, ArrowRight, Percent } from "lucide-react";
import { OFFERS_DATA, OfferItem } from "../data/offersData";

interface OffersBannerProps {
  onApplyPromoCode?: (code: string) => void;
}

export default function OffersBanner({ onApplyPromoCode }: OffersBannerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filter, setFilter] = useState<"ALL" | "FLIGHTS" | "HOTELS" | "CABS">("ALL");

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    if (onApplyPromoCode) {
      onApplyPromoCode(code);
    }
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const filteredOffers = OFFERS_DATA.filter((offer) =>
    filter === "ALL" ? true : offer.category === filter || offer.category === "ALL"
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-md shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Offers, Bank Deals & Promo Codes
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  LIVE NOW
                </span>
              </h2>
              <p className="text-xs text-slate-400">Apply instant coupons at checkout for guaranteed lowest fares</p>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(["ALL", "FLIGHTS", "HOTELS", "CABS"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredOffers.map((offer) => {
            const isCopied = copiedCode === offer.code;
            return (
              <div
                key={offer.id}
                className="group relative bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                      {offer.badge}
                    </span>
                    <span className="text-[11px] font-extrabold text-amber-400">{offer.discount}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{offer.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 font-mono text-xs font-bold text-cyan-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    <Tag className="w-3 h-3 text-cyan-400" />
                    <span>{offer.code}</span>
                  </div>

                  <button
                    onClick={() => handleCopy(offer.code)}
                    className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-all ${
                      isCopied
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white"
                    }`}
                  >
                    {isCopied ? (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
