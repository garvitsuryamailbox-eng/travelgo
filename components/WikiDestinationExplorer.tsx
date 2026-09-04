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
  ChevronRight,
  Sparkles,
  Train,
  CheckCircle2
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
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Destination Encyclopedia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {destination.name} Travel Guide
          </h2>
        </div>

        {/* City Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {DESTINATIONS_DATA.map((dest) => (
            <button
              key={dest.id}
              onClick={() => {
                setCurrentDestId(dest.id);
                setActiveTab("overview");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                currentDestId === dest.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Main Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Magazine Hero */}
          <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 shadow-lg">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                {destination.infobox.nickname}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white mt-0.5">{destination.name}</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">{destination.tagline}</p>
            </div>
          </div>

          {/* Chapter Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
            {[
              { id: "overview", label: "Overview & Heritage" },
              { id: "attractions", label: "Top Landmarks" },
              { id: "food", label: "Food & Nightlife" },
              { id: "transit", label: "Commute & Metro" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & HISTORY */}
          {activeTab === "overview" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div>
                <h4 className="text-base font-black text-slate-900 mb-2">City Profile &amp; Economy</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {destination.overview}
                </p>
              </div>

              {destination.sections[0] && (
                <div className="pt-4 border-t border-slate-100">
                  <h5 className="text-sm font-black text-slate-900 mb-2">{destination.sections[0].title}</h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {destination.sections[0].content}
                  </p>
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
                  className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 relative">
                      <img src={att.image} alt={att.name} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-white text-[10px] font-black uppercase">
                        {att.category}
                      </span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h5 className="text-sm font-black text-slate-900">{att.name}</h5>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{att.description}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      {att.timing}
                    </span>
                    <span className="font-black text-emerald-700">{att.entryFee}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: FOOD & NIGHTLIFE */}
          {activeTab === "food" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h4 className="text-base font-black text-slate-900">
                Iconic Dining &amp; Nightlife Hotspots in {destination.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {destination.famousEats.map((eat, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-xs font-black text-slate-900">{eat.name}</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
                        {eat.area}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{eat.type}</div>
                    <div className="text-xs text-slate-800 font-bold mt-1.5">Must try: {eat.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMMUTE & TRANSIT */}
          {activeTab === "transit" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h4 className="text-base font-black text-slate-900">
                How to Commute &amp; Reach {destination.name}
              </h4>
              <ul className="space-y-3 text-xs text-slate-700">
                {destination.commuteTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black flex items-center justify-center shrink-0 text-xs">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Infobox & Fast Bookings */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm sticky top-28 space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">
                Wikipedia Verified Infobox
              </span>
              <div className="text-xl font-black text-slate-900 mt-0.5">{destination.name}</div>
              <div className="text-xs text-slate-500 italic font-serif mt-0.5">{destination.officialName}</div>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-100">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">State / Region</span>
                <span className="text-slate-900 font-bold">{destination.infobox.state}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Nearest Airport</span>
                <span className="text-blue-600 font-bold">{destination.infobox.nearestAirport}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Best Season</span>
                <span className="text-emerald-700 font-bold">{destination.infobox.bestTimeToVisit}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-medium">Languages</span>
                <span className="text-slate-900 font-bold">{destination.infobox.languages.join(", ")}</span>
              </div>
            </div>

            {/* Direct Booking Shortcuts */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onQuickBook("hotels", destination.name)}
                className="w-full py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 text-xs font-black flex items-center justify-between transition-colors"
              >
                <span>Book Stays in {destination.name}</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </button>

              <button
                onClick={() => onQuickBook("cabs", destination.name)}
                className="w-full py-3 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-black flex items-center justify-between transition-colors"
              >
                <span>Book Airport Cab to {destination.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </button>

              <button
                onClick={() => onQuickBook("flights", destination.name)}
                className="w-full py-3 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 text-xs font-black flex items-center justify-between transition-colors"
              >
                <span>Flights to {destination.bookingPresets.flightTo}</span>
                <ChevronRight className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
