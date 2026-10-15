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
  CheckCircle2,
  Navigation,
  Globe2
} from "lucide-react";
import { DESTINATIONS_DATA, CityGuideItem } from "../data/destinationsData";

interface CityGuidesExplorerProps {
  selectedDestId?: string;
  onQuickBook: (service: "hotels" | "cabs" | "flights", cityName: string) => void;
}

export default function CityGuidesExplorer({
  selectedDestId = "delhi",
  onQuickBook
}: CityGuidesExplorerProps) {
  const [currentDestId, setCurrentDestId] = useState(selectedDestId);
  const [activeTab, setActiveTab] = useState<"overview" | "attractions" | "food" | "transit">("overview");

  const destination: CityGuideItem =
    DESTINATIONS_DATA.find((d) => d.id === currentDestId) || DESTINATIONS_DATA[0];

  return (
    <section id="city-guides-hub" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Where2Go &bull; Travel Guides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {destination.name} City Guide
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                currentDestId === dest.id
                  ? "bg-[#008cff] text-white shadow-sm"
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
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 shadow-md border border-slate-200/80">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                {destination.infobox.nickname}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">{destination.name}</h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl line-clamp-2">{destination.tagline}</p>
            </div>
          </div>

          {/* OVERVIEW SUMMARY */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm text-slate-800">
            <div className="text-sm text-slate-700 leading-relaxed space-y-3">
              <p className="font-medium line-clamp-3">{destination.overview}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              {destination.quickStats.map((st, i) => (
                <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{st.label}</span>
                  <span className="text-sm font-black text-slate-900 mt-0.5 block">{st.value}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2">
               <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                 Read Full City Guide <ChevronRight className="w-3.5 h-3.5" />
               </button>
            </div>
          </div>
        </div>

        {/* Right Factsheet & Direct Bookings */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm sticky top-28 space-y-4 text-slate-800">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                Destination Factsheet
              </span>
              <div className="text-lg font-black text-slate-900 mt-0.5">{destination.name}</div>
              <div className="text-xs text-slate-500 italic mt-0.5">{destination.officialName}</div>
            </div>

            <div className="space-y-1.5 text-xs divide-y divide-slate-100">
              <div className="flex justify-between py-1">
                <span className="text-slate-500">State / Region</span>
                <span className="text-slate-900 font-bold">{destination.infobox.state}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Nearest Airport</span>
                <span className="text-slate-900 font-bold">{destination.infobox.nearestAirport}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Best Season</span>
                <span className="text-emerald-600 font-bold">{destination.infobox.bestTimeToVisit}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Languages</span>
                <span className="text-slate-900 font-bold">{destination.infobox.languages.join(", ")}</span>
              </div>
            </div>

            {/* Direct Booking Shortcuts */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">
                Instant Travel Booking
              </span>

              <button
                onClick={() => onQuickBook("hotels", destination.name)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>Hotels in {destination.name.split(" ")[0]}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onQuickBook("flights", destination.name)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#008cff] hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-between shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span>Flights to {destination.name.split(" ")[0]}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onQuickBook("cabs", destination.name)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-slate-700" />
                  <span>Airport Cab Transfer</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
