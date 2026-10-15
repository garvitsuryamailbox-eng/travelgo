"use client";

import React from "react";
import { Lock, Zap, Car, ShieldCheck } from "lucide-react";

export default function PassengerAssuranceBanner() {
  const trustPillars = [
    {
      icon: Lock,
      title: "Transparent Pricing",
      desc: "See full cost breakdown — base fare, taxes & extras — before booking",
      tag: "No Hidden Fees",
      iconBg: "bg-blue-50 text-blue-600"
    },
    {
      icon: Zap,
      title: "Clear Cancellation Terms",
      desc: "Refundable vs non-refundable shown upfront on every flight & hotel",
      tag: "Pre-Booking Info",
      iconBg: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: Car,
      title: "Complete Trip Cost",
      desc: "Flight + hotel + transfers + food — see the full estimate in one view",
      tag: "Full Breakdown",
      iconBg: "bg-amber-50 text-amber-600"
    },
    {
      icon: ShieldCheck,
      title: "Plan Before You Book",
      desc: "Trip Planner, Budget Discovery & Surprise Me — explore first",
      tag: "Plan First",
      iconBg: "bg-sky-50 text-sky-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustPillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform ${item.iconBg}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-black text-slate-900 truncate">{item.title}</span>
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
