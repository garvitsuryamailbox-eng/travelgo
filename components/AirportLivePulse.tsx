"use client";

import React, { useState } from "react";
import {
  Activity,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  CloudSun,
  Lock,
  Zap,
  Car,
  Building2,
  Sparkles
} from "lucide-react";

export default function AirportLivePulse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* Compact Single-Line Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-slate-800 text-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <span className="font-extrabold text-slate-900">Live IGI Airport Radar:</span>{" "}
              <span className="text-slate-600">
                Terminal 3 DigiYatra queue is <strong>~5 mins</strong> &bull; CAT-III Clear Skies (No Fog Delays)
              </span>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold text-xs self-end sm:self-auto transition-colors"
          >
            <span>{expanded ? "Hide Terminal Radar" : "View Live Radar Details"}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Details Grid */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-in fade-in duration-200 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">DigiYatra Queue (T3)</span>
              <span className="text-base font-black text-emerald-600">4 - 6 mins</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Gate 2 &amp; Gate 3 Express</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">Runway Visibility</span>
              <span className="text-base font-black text-slate-900">5,000m+ Clear</span>
              <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Zero Fog Delay</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">Baggage Wait Avg</span>
              <span className="text-base font-black text-blue-600">~15 mins</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Belts 4 - 12 Active</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">CyberHub Commute</span>
              <span className="text-base font-black text-slate-900">14 mins</span>
              <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Dwarka Expressway Clear</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
