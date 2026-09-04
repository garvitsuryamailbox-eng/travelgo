"use client";

import React, { useState } from "react";
import {
  Plane,
  Clock,
  CloudSun,
  ShieldCheck,
  AlertCircle,
  Activity,
  ArrowRight,
  Sparkles,
  Gauge,
  Compass,
  CheckCircle2
} from "lucide-react";

export default function AirportLivePulse() {
  const [selectedTerminal, setSelectedTerminal] = useState<"T3" | "T1" | "T2">("T3");

  const terminalStats = {
    T3: {
      name: "Terminal 3 (International & Major Domestic)",
      digiYatraWait: "4 - 6 mins",
      generalSecurityWait: "12 - 16 mins",
      baggageClearanceAvg: "18 mins",
      expresswayTraffic: "Smooth (14 mins from CyberHub)",
      metroStatus: "Yellow Line to Airport Express: Running on time (Every 6 mins)",
      weatherAlert: "Clear Skies & Optimal Visibility (5,000m+)",
      gateCongestion: "Low"
    },
    T1: {
      name: "Terminal 1 (Low Cost Domestic Carrier Hub)",
      digiYatraWait: "3 - 5 mins",
      generalSecurityWait: "9 - 14 mins",
      baggageClearanceAvg: "14 mins",
      expresswayTraffic: "Smooth (12 mins from CyberHub)",
      metroStatus: "Magenta Line T1 Station: Operational",
      weatherAlert: "Clear Skies & Optimal Visibility (5,000m+)",
      gateCongestion: "Moderate"
    },
    T2: {
      name: "Terminal 2 (Domestic Feeder)",
      digiYatraWait: "2 - 4 mins",
      generalSecurityWait: "8 - 11 mins",
      baggageClearanceAvg: "12 mins",
      expresswayTraffic: "Smooth (15 mins from CyberHub)",
      metroStatus: "Airport Express Shuttles Active",
      weatherAlert: "Clear & Optimal",
      gateCongestion: "Low"
    }
  };

  const current = terminalStats[selectedTerminal];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/80 border border-slate-800/90 p-5 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Glowing Background Dot */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 ring-4 ring-slate-950 animate-ping" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white flex items-center gap-1.5">
                  <span>Live IGI Airport & NCR Transit Radar</span>
                  <span className="px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] font-black uppercase">
                    LIVE FEED
                  </span>
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Real-time DigiYatra queues, terminal wait estimates, and fog visibility for Delhi & Gurgaon passengers
              </p>
            </div>
          </div>

          {/* Terminal Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-2xl border border-slate-800">
            {(["T3", "T1", "T2"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTerminal(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTerminal === t
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t === "T3" ? "Terminal 3 (DEL)" : t === "T1" ? "Terminal 1 (DEL)" : "Terminal 2 (DEL)"}
              </button>
            ))}
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {/* DigiYatra Wait */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              DigiYatra Security Queue
            </span>
            <div className="text-lg font-black text-emerald-400">{current.digiYatraWait}</div>
            <div className="text-[10px] text-slate-400">General Queue: {current.generalSecurityWait}</div>
          </div>

          {/* Weather & Fog Radar */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <CloudSun className="w-3.5 h-3.5 text-amber-400" />
              Visibility & Fog Risk
            </span>
            <div className="text-sm font-extrabold text-white truncate">5,000m+ (Zero Fog Delay)</div>
            <div className="text-[10px] text-emerald-400 font-semibold">Runway 28/10 CAT-III Ready</div>
          </div>

          {/* Baggage Clearance */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Avg Baggage Arrival
            </span>
            <div className="text-lg font-black text-cyan-300">{current.baggageClearanceAvg}</div>
            <div className="text-[10px] text-slate-400">Belt 4 - 12 Operational</div>
          </div>

          {/* Gurgaon Expressway Transit */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-indigo-400" />
              CyberHub / NH48 Drive
            </span>
            <div className="text-sm font-extrabold text-white truncate">14 mins (Dwarka Exp)</div>
            <div className="text-[10px] text-emerald-400 font-semibold">Fastag Toll Clear</div>
          </div>
        </div>
      </div>
    </section>
  );
}
