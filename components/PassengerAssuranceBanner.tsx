"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Clock,
  Car,
  ThumbsUp,
  CreditCard,
  Building2,
  Sparkles
} from "lucide-react";

export default function PassengerAssuranceBanner() {
  const assurancePoints = [
    {
      icon: Lock,
      title: "Zero Hidden Fees & No Drip Pricing",
      description: "The price shown on every card is the 100% final payable price. No surprise convenience fees added at checkout.",
      badge: "PRICE TRANSPARENCY",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Instant 100% Refund Shield",
      description: "Cancel anytime with 0-penalty protection. Instant refund credited to your UPI / Bank account in under 2 minutes.",
      badge: "INSTANT UPI REFUND",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Car,
      title: "Guaranteed Airport Cabs (No Cancellation)",
      description: "Dedicated driver assigned instantly for your airport pickup. If a driver cancels, receive an automatic ₹500 travel credit.",
      badge: "100% CAB ASSURANCE",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: Building2,
      title: "Verified CyberHub Traffic Radar",
      description: "True rush-hour travel times to CyberHub, Golf Course Rd, and IGI Airport. Verified 360° soundproof quiet rooms.",
      badge: "VERIFIED ACCURACY",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white flex items-center gap-2">
                Passenger First Assurance
                <span className="px-2 py-0.2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold">
                  BUILT FOR TRAVELERS
                </span>
              </h3>
              <p className="text-xs text-slate-400">Solving the most common travel booking frustrations with guaranteed transparency</p>
            </div>
          </div>
        </div>

        {/* 4 Trust Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {assurancePoints.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      {pt.badge}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
