"use client";

import React, { useState } from "react";
import { Tag, Copy, Check, Gift, Zap, Sparkles, Clock } from "lucide-react";
import { OFFERS_DATA } from "../data/offersData";

interface OffersBannerProps {
  onApplyPromoCode?: (code: string) => void;
}

const CATEGORY_CONFIG = {
  ALL:     { label: "All Offers",    emoji: "🎁" },
  FLIGHTS: { label: "Flights",       emoji: "✈️" },
  HOTELS:  { label: "Hotels",        emoji: "🏨" },
  CABS:    { label: "Airport Cabs",  emoji: "🚗" },
};

const CARD_GRADIENTS = [
  { from: "#0057e4", to: "#38bdf8",  light: "rgba(0,87,228,0.06)",  border: "rgba(0,87,228,0.12)" },
  { from: "#7c3aed", to: "#a855f7",  light: "rgba(124,58,237,0.06)", border: "rgba(124,58,237,0.12)" },
  { from: "#059669", to: "#0891b2",  light: "rgba(5,150,105,0.06)",  border: "rgba(5,150,105,0.12)" },
  { from: "#f59e0b", to: "#ef4444",  light: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.12)" },
];

export default function OffersBanner({ onApplyPromoCode }: OffersBannerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "FLIGHTS" | "HOTELS" | "CABS">("ALL");

  const handleCopy = (code: string) => {
    if (navigator.clipboard) navigator.clipboard.writeText(code);
    setCopiedCode(code);
    if (onApplyPromoCode) onApplyPromoCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const filteredOffers = OFFERS_DATA.filter((o) =>
    selectedCategory === "ALL" ? true : o.category === selectedCategory || o.category === "ALL"
  );

  return (
    <section id="offers-banner-section" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-eyebrow">
              <Gift className="w-3.5 h-3.5" />
              <span>Super Saver Deals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "-0.03em" }}>
              Exclusive <span className="text-gradient-brand">Offers</span> For You
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-medium flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Limited-time demo discount codes — tap to copy & apply
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {(Object.keys(CATEGORY_CONFIG) as Array<keyof typeof CATEGORY_CONFIG>).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
                style={selectedCategory === cat ? {
                  background: "linear-gradient(135deg, #0057e4, #0284c7)",
                  color: "white",
                  boxShadow: "0 4px 14px rgba(0,87,228,0.35)",
                } : {
                  background: "white",
                  color: "#475569",
                  border: "1.5px solid rgba(15,23,42,0.1)",
                }}
              >
                <span>{CATEGORY_CONFIG[cat].emoji}</span>
                <span>{CATEGORY_CONFIG[cat].label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredOffers.map((offer, idx) => {
            const isCopied = copiedCode === offer.code;
            const grad = CARD_GRADIENTS[idx % CARD_GRADIENTS.length];

            return (
              <div
                key={offer.id}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  border: `1.5px solid ${grad.border}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top Gradient Strip */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                />

                <div className="p-5 space-y-4">
                  {/* Discount Badge + Validity */}
                  <div className="flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-xl text-xs font-black text-white shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                    >
                      {offer.discount}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{offer.validTill}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {offer.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 mt-1.5">
                      {offer.description}
                    </p>
                  </div>

                  {/* Coupon Code + CTA */}
                  <div
                    className="flex items-center justify-between p-3 rounded-2xl gap-2"
                    style={{ background: grad.light, border: `1px dashed ${grad.border}` }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Tag className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="font-mono text-xs font-black text-slate-800 truncate">{offer.code}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="flex items-center gap-1 text-xs font-black px-2.5 py-1.5 rounded-xl transition-all cursor-pointer shrink-0"
                      style={isCopied ? {
                        background: "linear-gradient(135deg, #059669, #0891b2)",
                        color: "white",
                      } : {
                        background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`,
                        color: "white",
                      }}
                    >
                      {isCopied ? (
                        <><Check className="w-3 h-3" /><span>Done!</span></>
                      ) : (
                        <><Copy className="w-3 h-3" /><span>Copy</span></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, #020d28 0%, #041847 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">New Member Bonus</span>
            </div>
            <h3 className="text-lg font-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Get ₹1,000 OFF on your first booking!
            </h3>
            <p className="text-xs text-slate-400 mt-1">Use code <span className="font-mono font-black text-sky-400">WELCOME1000</span> — valid on flights & hotels above ₹5,000</p>
          </div>
          <button
            onClick={() => handleCopy("WELCOME1000")}
            className="px-6 py-3 rounded-2xl text-sm font-black text-white whitespace-nowrap transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
            }}
          >
            {copiedCode === "WELCOME1000" ? "✅ Copied!" : "🎁 Claim Offer"}
          </button>
        </div>
      </div>
    </section>
  );
}
