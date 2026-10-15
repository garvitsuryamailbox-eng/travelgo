"use client";

import React from "react";
import { ShieldCheck, Zap, BarChart3, Compass, Users, Award } from "lucide-react";

export default function PassengerAssuranceBanner() {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Transparent Pricing",
      desc: "Full cost breakdown before checkout. Zero hidden fees.",
      tag: "No Surprises",
      gradient: "from-blue-500 to-indigo-600",
      glow: "rgba(0,87,228,0.2)",
      bg: "rgba(0,87,228,0.06)",
      border: "rgba(0,87,228,0.12)",
    },
    {
      icon: Zap,
      title: "Instant Confirmation",
      desc: "Refundable vs non-refundable clearly shown upfront.",
      tag: "Pre-Booking Info",
      gradient: "from-emerald-500 to-teal-600",
      glow: "rgba(5,150,105,0.2)",
      bg: "rgba(5,150,105,0.06)",
      border: "rgba(5,150,105,0.12)",
    },
    {
      icon: BarChart3,
      title: "Complete Trip Cost",
      desc: "Flight + hotel + transfers — full estimate in one view.",
      tag: "Full Breakdown",
      gradient: "from-amber-500 to-orange-500",
      glow: "rgba(245,158,11,0.2)",
      bg: "rgba(245,158,11,0.06)",
      border: "rgba(245,158,11,0.12)",
    },
    {
      icon: Compass,
      title: "Plan Before You Book",
      desc: "Trip Planner, Budget Discovery & Surprise Me — explore first.",
      tag: "Smart Planning",
      gradient: "from-violet-500 to-purple-600",
      glow: "rgba(124,58,237,0.2)",
      bg: "rgba(124,58,237,0.06)",
      border: "rgba(124,58,237,0.12)",
    },
  ];

  const stats = [
    { icon: Users, value: "2M+", label: "Happy Travellers", color: "#0057e4" },
    { icon: Award,    value: "99.2%", label: "Satisfaction Rate", color: "#059669" },
    { icon: ShieldCheck, value: "100%", label: "Secure Payments", color: "#7c3aed" },
  ];

  return (
    <div className="w-full" style={{ background: "linear-gradient(180deg, #020d28 0%, #041847 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-12 pb-12 border-b border-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-1"
                  style={{ background: stat.color + "22", border: `1px solid ${stat.color}33` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div className="stat-number text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 30px ${item.glow}` }}
                />

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Tag */}
                <span
                  className="inline-block px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider mb-2"
                  style={{ background: item.border, color: "rgba(255,255,255,0.7)" }}
                >
                  {item.tag}
                </span>

                {/* Content */}
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
