"use client";

import React, { useState } from "react";
import { Tag, Copy, Check, Gift, ArrowRight } from "lucide-react";
import { OFFERS_DATA, OfferItem } from "../data/offersData";

interface OffersBannerProps {
  onApplyPromoCode?: (code: string) => void;
}

export default function OffersBanner({ onApplyPromoCode }: OffersBannerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "FLIGHTS" | "HOTELS" | "CABS">("ALL");

  const categories: { id: "ALL" | "FLIGHTS" | "HOTELS" | "CABS"; label: string }[] = [
    { id: "ALL", label: "All Offers" },
    { id: "FLIGHTS", label: "Flights" },
    { id: "HOTELS", label: "Hotels & Stays" },
    { id: "CABS", label: "Airport Cabs" }
  ];

  const handleCopy = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    if (onApplyPromoCode) {
      onApplyPromoCode(code);
    }
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const filteredOffers = OFFERS_DATA.filter((offer) => {
    if (selectedCategory === "ALL") return true;
    return offer.category === selectedCategory || offer.category === "ALL";
  });

  return (
    <section id="offers-banner-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* MakeMyTrip Offers Header with Horizontal Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Gift className="w-4 h-4 text-blue-600" />
            <span>Super Saver Deals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Offers For You
          </h2>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#008cff] text-white shadow-md shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredOffers.map((offer) => {
          const isCopied = copiedCode === offer.code;
          return (
            <div
              key={offer.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-black uppercase tracking-wider border border-blue-100">
                    {offer.discount}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {offer.validTill}
                  </span>
                </div>

                <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {offer.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {offer.description}
                </p>
              </div>

              {/* Coupon Code Pill & Copy CTA */}
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-dashed border-slate-300">
                  <Tag className="w-3 h-3 text-slate-500" />
                  <span className="font-mono text-xs font-black text-slate-800">{offer.code}</span>
                </div>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    isCopied
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-blue-600 hover:bg-blue-50"
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
    </section>
  );
}
