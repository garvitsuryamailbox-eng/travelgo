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
  Building2
} from "lucide-react";

export default function AirportLivePulse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-3 text-xs backdrop-blur-sm transition-all">
        {/* Compact Single-Line Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">Live IGI Airport Status:</span>
            <span className="text-slate-400">Terminal 3 DigiYatra queue is ~5 mins &bull; CAT-III Clear Skies (No Fog Delays)</span>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-slate-400 hover:text-white font-medium text-[11px] self-end sm:self-auto transition-colors"
          >
            <span>{expanded ? "Hide Details" : "View Live Radar"}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expandable Details Grid */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-in fade-in duration-200">
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/40">
              <span className="text-[10px] text-slate-400 block">DigiYatra Security (T3)</span>
              <span className="text-sm font-bold text-emerald-400">4 - 6 mins</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/40">
              <span className="text-[10px] text-slate-400 block">Weather &amp; Fog</span>
              <span className="text-sm font-bold text-white">5,000m+ Optimal</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/40">
              <span className="text-[10px] text-slate-400 block">Baggage Wait Avg</span>
              <span className="text-sm font-bold text-slate-200">~15 mins</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/40">
              <span className="text-[10px] text-slate-400 block">CyberHub Drive</span>
              <span className="text-sm font-bold text-slate-200">14 mins (Smooth)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
