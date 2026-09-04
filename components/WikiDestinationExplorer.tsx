"use client";

import React, { useState } from "react";
import {
  BookOpen,
  MapPin,
  Clock,
  Compass,
  Building2,
  Plane,
  Car,
  Utensils,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  Calendar,
  Globe,
  Train
} from "lucide-react";
import { DESTINATIONS_DATA, DestinationWiki } from "../data/destinationsData";

interface WikiDestinationExplorerProps {
  selectedDestId?: string;
  onQuickBook: (service: "hotels" | "cabs" | "flights", cityName: string) => void;
}

export default function WikiDestinationExplorer({
  selectedDestId = "gurgaon",
  onQuickBook
}: WikiDestinationExplorerProps) {
  const [currentDestId, setCurrentDestId] = useState(selectedDestId);
  const [activeTab, setActiveTab] = useState<"overview" | "attractions" | "food" | "transit">("overview");

  const destination: DestinationWiki =
    DESTINATIONS_DATA.find((d) => d.id === currentDestId) || DESTINATIONS_DATA[0];

  return (
    <section id="wiki-destination-hub" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            Destination Guide
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-0.5">
            {destination.name} Travel Encyclopedia
          </h2>
        </div>

        {/* City Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {DESTINATIONS_DATA.map((dest) => (
            <button
              key={dest.id}
              onClick={() => {
                setCurrentDestId(dest.id);
                setActiveTab("overview");
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                currentDestId === dest.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Main Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Magazine Hero */}
          <div className="relative rounded-3xl overflow-hidden h-72 sm:h-80 border border-slate-800">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
                {destination.infobox.nickname}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{destination.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">{destination.tagline}</p>
            </div>
          </div>

          {/* Chapter Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
            {[
              { id: "overview", label: "Overview & History" },
              { id: "attractions", label: "Top Landmarks" },
              { id: "food", label: "Dining & Nightlife" },
              { id: "transit", label: "Commute & Metro" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & HISTORY */}
          {activeTab === "overview" && (
            <div className="bg-[#0f111a] border border-slate-800 rounded-3xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                About {destination.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {destination.overview}
              </p>

              {destination.sections[0] && (
                <div className="pt-3 border-t border-slate-800/60">
                  <h5 className="text-xs font-bold text-white mb-2">{destination.sections[0].title}</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">{destination.sections[0].content}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TOP LANDMARKS */}
          {activeTab === "attractions" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.topAttractions.map((att, i) => (
                <div
                  key={i}
                  className="bg-[#0f111a] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 relative">
                      <img src={att.image} alt={att.name} className="w-full h-full object-cover" />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-semibold">
                        {att.category}
                      </span>
                    </div>
                    <div className="p-4 space-y-1">
                      <h5 className="text-sm font-bold text-white">{att.name}</h5>
                      <p className="text-xs text-slate-400 line-clamp-2">{att.description}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>{att.timing}</span>
                    <span className="text-emerald-400 font-semibold">{att.entryFee}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: DINING & NIGHTLIFE */}
          {activeTab === "food" && (
            <div className="bg-[#0f111a] border border-slate-800 rounded-3xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Culinary &amp; Nightlife Hotspots
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.famousEats.map((eat, i) => (
                  <div key={i} className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/60">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold text-white">{eat.name}</span>
                      <span className="text-[10px] text-blue-400 font-semibold">{eat.area}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{eat.type}</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-1">Must Try: {eat.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMMUTE & METRO */}
          {activeTab === "transit" && (
            <div className="bg-[#0f111a] border border-slate-800 rounded-3xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Transportation &amp; Commute
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {destination.commuteTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                    <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Infobox & Fast Bookings */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#0f111a] border border-slate-800 rounded-3xl p-5 sticky top-24 space-y-5">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Fast Facts Infobox
              </h4>
              <div className="text-base font-bold text-white">{destination.name}</div>
              <div className="text-xs text-slate-400">{destination.officialName}</div>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-800/60">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">State / Country</span>
                <span className="text-white font-medium">{destination.infobox.state}, {destination.infobox.country}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Nearest Airport</span>
                <span className="text-white font-medium">{destination.infobox.nearestAirport}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Best Season</span>
                <span className="text-emerald-400 font-medium">{destination.infobox.bestTimeToVisit}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Languages</span>
                <span className="text-white font-medium">{destination.infobox.languages.join(", ")}</span>
              </div>
            </div>

            {/* Direct Booking Shortcuts */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onQuickBook("hotels", destination.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>Book Hotels in {destination.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => onQuickBook("cabs", destination.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>Book Airport Cab to {destination.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => onQuickBook("flights", destination.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>Find Flights to {destination.bookingPresets.flightTo}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
