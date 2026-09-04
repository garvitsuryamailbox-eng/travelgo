"use client";

import React, { useState } from "react";
import { Tag, Copy, Check, Percent, CreditCard, Sparkles, Gift } from "lucide-react";
import { OFFERS_DATA, OfferItem } from "../data/offersData";

interface OffersBannerProps {
  onApplyPromoCode?: (code: string) => void;
}

export default function OffersBanner({ onApplyPromoCode }: OffersBannerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "FLIGHTS" | "HOTELS" | "CABS">("ALL");

  const categories: { id: "ALL" | "FLIGHTS" | "HOTELS" | "CABS"; label: string }[] = [
    { id: "ALL", label: "All Offers" },
    { id: "FLIGHTS", label: "Flight Super Savers" },
    { id: "HOTELS", label: "Hotel & Staycation Deals" },
    { id: "CABS", label: "Airport Cab Passes" }
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header with MakeMyTrip Style Category Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-100 text-rose-600">
              <Gift className="w-4 h-4" />
            </span>
            <span className="text-xs font-black text-rose-600 uppercase tracking-widest">
              SUPER SAVER DEALS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Exclusive Offers &amp; Promo Codes
          </h3>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
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
              className="bg-white border border-slate-200/90 rounded-3xl p-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    {offer.discount}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    {offer.validTill}
                  </span>
                </div>

                <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {offer.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Coupon Code</span>
                  <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/60 inline-block mt-0.5">
                    {offer.code}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className={`text-xs font-black px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer ${
                    isCopied
                      ? "bg-emerald-600 text-white shadow-emerald-600/30 scale-105"
                      : "bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {isCopied ? "COPIED ✓" : "COPY CODE"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
