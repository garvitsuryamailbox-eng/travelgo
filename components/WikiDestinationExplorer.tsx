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
  Share2,
  Bookmark,
  CheckCircle2,
  Zap,
  Tag
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
  const [savedArticles, setSavedArticles] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const destination: DestinationWiki =
    DESTINATIONS_DATA.find((d) => d.id === currentDestId) || DESTINATIONS_DATA[0];

  const handleSaveArticle = (id: string) => {
    if (savedArticles.includes(id)) {
      setSavedArticles(savedArticles.filter((a) => a !== id));
    } else {
      setSavedArticles([...savedArticles, id]);
    }
  };

  const isSaved = savedArticles.includes(destination.id);

  return (
    <section id="wiki-destination-hub" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Breadcrumb & Switcher */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  TravelGo Encyclopedia & Destination Wiki
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">Verified Travel Guide</span>
              </div>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Explore Destination Guides & Cultural Insights
              </h2>
            </div>
          </div>

          {/* City Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {DESTINATIONS_DATA.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setCurrentDestId(dest.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  currentDestId === dest.id
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span>{dest.name}</span>
                {dest.id === "gurgaon" && (
                  <span className="px-1.5 py-0.2 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[9px] rounded-full font-bold">
                    FEATURED
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Wiki Layout: Two Columns (Content on Left, Wikipedia Infobox on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Main Wikipedia Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Hero Banner with Title */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-2">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Wikipedia Destination Guide</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {destination.name}
                </h1>
                <p className="text-sm text-cyan-200 font-medium mt-1">{destination.tagline}</p>
              </div>

              {/* Quick Save and Share buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveArticle(destination.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all ${
                    isSaved
                      ? "bg-amber-500 text-white shadow-lg"
                      : "bg-slate-900/80 border border-slate-700 text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isSaved ? "Saved" : "Save Guide"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {destination.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-3.5 text-center backdrop-blur-sm"
              >
                <div className="text-base sm:text-lg font-black text-cyan-400">{stat.value}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Overview Section */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Info className="w-4 h-4 text-cyan-400" />
              Overview & Geography
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {destination.overview}
            </p>
          </div>

          {/* Detailed Wiki Sections */}
          <div className="space-y-6">
            {destination.sections.map((section) => (
              <div
                key={section.id}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-4"
              >
                <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span>{section.title}</span>
                </h3>

                <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-normal whitespace-pre-line">
                  {section.content}
                </div>

                {section.highlights && section.highlights.length > 0 && (
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 space-y-2 mt-4">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Key Highlights & Fast Facts:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {section.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Top Attractions & Sightseeing (Visual Cards) */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  Top Attractions & Sightseeing in {destination.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Must-visit historical and modern hotspots</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                {destination.topAttractions.length} Landmarks
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.topAttractions.map((attraction, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-cyan-300 text-[10px] font-bold">
                        {attraction.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {attraction.timing}
                    </span>
                    <span className="font-semibold text-emerald-400">{attraction.entryFee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Famous Food & Nightlife */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Utensils className="w-4 h-4 text-amber-400" />
              Iconic Dining & Nightlife Recommendations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.famousEats.map((eat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800 rounded-2xl p-3.5 space-y-1 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{eat.name}</span>
                    <span className="text-[10px] text-amber-400 font-semibold">{eat.area}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{eat.type}</div>
                  <div className="text-[11px] text-cyan-300 font-medium">Must try: {eat.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Commute Tips */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Zap className="w-4 h-4 text-cyan-400" />
              Local Commuter Tips & Travel Advice
            </h3>

            <div className="space-y-2">
              {destination.commuteTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Wikipedia Official Infobox & MakeMyTrip Quick Booking Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* WIKIPEDIA OFFICIAL INFOBOX */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 sticky top-24 space-y-6 shadow-2xl backdrop-blur-md">
            {/* Infobox Header */}
            <div className="text-center pb-4 border-b border-slate-800 space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-2 font-black text-sm">
                WIKI
              </div>
              <h3 className="text-lg font-black text-white">{destination.name}</h3>
              <div className="text-xs text-slate-400 font-serif italic">{destination.officialName}</div>
            </div>

            {/* Infobox Data Table */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">State / Region</span>
                <span className="text-white font-bold">{destination.infobox.state}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Country</span>
                <span className="text-white font-bold">{destination.infobox.country}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Nicknames</span>
                <span className="text-cyan-300 font-semibold text-right max-w-[160px]">
                  {destination.infobox.nickname}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Coordinates</span>
                <span className="text-slate-200 font-mono text-[11px]">{destination.infobox.coordinates}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Elevation</span>
                <span className="text-white font-bold">{destination.infobox.elevation}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Population</span>
                <span className="text-white font-bold">{destination.infobox.population}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Time Zone</span>
                <span className="text-white font-mono">{destination.infobox.timeZone}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Languages</span>
                <span className="text-white font-semibold">{destination.infobox.languages.join(", ")}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Best Time to Visit</span>
                <span className="text-emerald-400 font-bold text-right max-w-[160px]">
                  {destination.infobox.bestTimeToVisit}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Nearest Airport</span>
                <span className="text-cyan-300 font-semibold text-right max-w-[160px]">
                  {destination.infobox.nearestAirport}
                </span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-medium">Currency</span>
                <span className="text-white font-bold">{destination.infobox.currency}</span>
              </div>
            </div>

            {/* 1-CLICK MAKEMYTRIP BOOKING SHORTCUTS */}
            <div className="border-t border-slate-800 pt-5 space-y-3">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Book Travel for {destination.name}
              </span>

              <div className="space-y-2">
                <button
                  onClick={() => onQuickBook("hotels", destination.name)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-950 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-white text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>Book Hotels in {destination.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                </button>

                <button
                  onClick={() => onQuickBook("cabs", destination.name)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-950 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-white text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Car className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Book Airport Cab to {destination.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                </button>

                <button
                  onClick={() => onQuickBook("flights", destination.name)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-950 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-white text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>Find Flights to {destination.bookingPresets.flightTo}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                </button>
              </div>
            </div>

            {/* Wikipedia Reference Link */}
            <div className="text-center pt-2">
              <a
                href={
                  currentDestId === "gurgaon"
                    ? "https://en.wikipedia.org/wiki/Gurgaon"
                    : `https://en.wikipedia.org/wiki/${destination.name.replace(/ /g, "_")}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
              >
                <span>Read Original Wikipedia Entry</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
