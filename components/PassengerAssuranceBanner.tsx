"use client";

import React from "react";
import { Lock, Zap, Car, Building2 } from "lucide-react";

export default function PassengerAssuranceBanner() {
  const trustPillars = [
    {
      icon: Lock,
      title: "100% Upfront Pricing",
      desc: "Zero surprise fees at checkout",
      bg: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: Zap,
      title: "Instant 2-Min Refund",
      desc: "Direct UPI & Bank auto-credit",
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: Car,
      title: "Guaranteed Cabs",
      desc: "₹500 compensation if driver cancels",
      bg: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: Building2,
      title: "Verified Locations",
      desc: "True rush-hour commute radar",
      bg: "bg-purple-50 text-purple-600 border-purple-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {trustPillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border shrink-0 ${item.bg}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black text-slate-900 truncate">{item.title}</div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
