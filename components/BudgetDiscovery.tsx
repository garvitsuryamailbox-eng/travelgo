"use client";

import React, { useState, useMemo } from "react";
import { Wallet, ChevronRight, MapPin, Clock, Sparkles, Tag } from "lucide-react";
import {
  BUDGET_DESTINATIONS,
  BUDGET_TIER_CONFIG,
  type BudgetTier
} from "../data/tripPlannerData";

interface BudgetDiscoveryProps {
  onOpenPlanner?: () => void;
}

export default function BudgetDiscovery({ onOpenPlanner }: BudgetDiscoveryProps) {
  const [activeTier, setActiveTier] = useState<BudgetTier>("20K");

  const destinations = useMemo(() => {
    return BUDGET_DESTINATIONS.filter((d) => d.budgetTier === activeTier);
  }, [activeTier]);

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  const tierConfig = BUDGET_TIER_CONFIG.find((t) => t.id === activeTier)!;

  return (
    <section className="bg-white border-y border-slate-200 py-10" id="budget-discovery">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Wallet className="w-3.5 h-3.5" />
              Budget-First Discovery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Where Can Your Budget Take You?
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Sample trip estimates — actual costs may vary. All prices are demo only.
            </p>
          </div>
          <button
            onClick={onOpenPlanner}
            className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Customise my budget</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Budget tier tabs */}
        <div className="flex gap-2 flex-wrap mb-7">
          {BUDGET_TIER_CONFIG.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                activeTier === tier.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {tier.label}
            </button>
          ))}
        </div>

        {/* Tier descriptor */}
        <p className="text-xs text-slate-500 mb-5 font-medium">
          💡 {tierConfig.desc} · Showing {destinations.length} curated options
        </p>

        {/* Destination grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                {/* Style badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                  {dest.styles.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Duration */}
                <div className="absolute top-2.5 right-2.5 bg-white/95 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-blue-500" />
                  {dest.days}D
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <h3 className="text-white font-black text-sm leading-tight">{dest.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-white/70" />
                    <span className="text-white/80 text-[10px] font-medium">{dest.state}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                  {dest.tagline}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1">
                  {dest.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price + Demo label */}
                <div className="flex items-end justify-between pt-1">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Est. trip total</div>
                    <div className="text-base font-black text-slate-900">
                      {formatINR(dest.estimatedTotal)}
                    </div>
                    <div className="text-[9px] text-slate-400">from {dest.fromCity}</div>
                  </div>
                  <span className="flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md">
                    <Tag className="w-2.5 h-2.5" />
                    Demo Price
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenPlanner}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-colors shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            Enter exact budget in Trip Planner
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-slate-400 mt-2 font-medium">
            * All estimates include flight, hotel, transfers & activities for 1 person. Actual prices vary.
          </p>
        </div>
      </div>
    </section>
  );
}
