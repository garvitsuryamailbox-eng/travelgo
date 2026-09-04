"use client";

import React from "react";
import { Lock, Zap, Car, Building2 } from "lucide-react";

export default function PassengerAssuranceBanner() {
  const trustPillars = [
    {
      icon: Lock,
      title: "100% Upfront Pricing",
      desc: "Zero surprise fees at checkout"
    },
    {
      icon: Zap,
      title: "Instant 2-Min Refund",
      desc: "Direct UPI & Bank auto-credit"
    },
    {
      icon: Car,
      title: "Guaranteed Cabs",
      desc: "₹500 compensation if driver cancels"
    },
    {
      icon: Building2,
      title: "Verified Locations",
      desc: "True rush-hour commute radar"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {trustPillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-3 text-left transition-colors hover:border-slate-700/60"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-800/60 flex items-center justify-center text-blue-400 shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">{item.title}</div>
                <div className="text-[11px] text-slate-400 truncate">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
