"use client";

import React, { useState, useMemo } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Wallet,
  Sparkles,
  Shuffle,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  X,
  Compass,
  Clock,
  Star
} from "lucide-react";
import {
  BUDGET_DESTINATIONS,
  COMPLETE_TRIP_IDEAS,
  TRAVEL_STYLES,
  BUDGET_TIER_CONFIG,
  getSurpriseDestination,
  type TravelStyle,
  type BudgetTier,
  type SurpriseDestination
} from "../data/tripPlannerData";

const INDIAN_CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
  "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Kochi"
];

interface TripPlannerCardProps {
  onSearch?: (params: any) => void;
  onOpenConcierge?: () => void;
}

export default function TripPlannerCard({ onSearch, onOpenConcierge }: TripPlannerCardProps) {
  const [fromCity, setFromCity] = useState("Delhi");
  const [budgetINR, setBudgetINR] = useState(20000);
  const [durationDays, setDurationDays] = useState(4);
  const [travellers, setTravellers] = useState(2);
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>("Relaxed");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [surpriseResult, setSurpriseResult] = useState<SurpriseDestination | null>(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const budgetTier: BudgetTier = useMemo(() => {
    if (budgetINR <= 10000) return "10K";
    if (budgetINR <= 20000) return "20K";
    if (budgetINR <= 30000) return "30K";
    return "50K+";
  }, [budgetINR]);

  const matchingDestinations = useMemo(() => {
    return BUDGET_DESTINATIONS.filter(
      (d) =>
        d.estimatedTotal <= budgetINR * travellers &&
        d.days <= durationDays + 1 &&
        d.styles.includes(selectedStyle)
    ).slice(0, 4);
  }, [budgetINR, durationDays, selectedStyle, travellers]);

  const handlePlanMyTrip = () => {
    setShowSurprise(false);
    setResultsVisible(true);
    const el = document.getElementById("trip-planner-results");
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  };

  const handleSurpriseMe = () => {
    const dest = getSurpriseDestination(budgetTier, durationDays, selectedStyle);
    setSurpriseResult(dest);
    setShowSurprise(true);
    setResultsVisible(false);
    const el = document.getElementById("trip-planner-results");
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  };

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8" id="trip-planner">
      {/* Section header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Plan Your Journey</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
          Tell us your trip. We'll find the perfect match.
        </h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          All estimates are demo prices for planning purposes only.
        </p>
      </div>

      {/* Planner card */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden">
        {/* Top gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* From city */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" /> Starting From
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white transition-all text-sm font-bold text-slate-800"
                >
                  <span>{fromCity}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showCityDropdown ? "rotate-180" : ""}`} />
                </button>
                {showCityDropdown && (
                  <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
                    {INDIAN_CITIES.map((city) => (
                      <button
                        key={city}
                        onClick={() => { setFromCity(city); setShowCityDropdown(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors flex items-center justify-between ${city === fromCity ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-700"}`}
                      >
                        {city}
                        {city === fromCity && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500" /> Duration
              </label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50">
                <button
                  onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 hover:border-blue-400 flex items-center justify-center text-slate-600 hover:text-blue-600 font-bold text-sm transition-all"
                >−</button>
                <div className="flex-1 text-center">
                  <span className="text-lg font-black text-slate-900">{durationDays}</span>
                  <span className="text-xs text-slate-500 ml-1">{durationDays === 1 ? "day" : "days"}</span>
                </div>
                <button
                  onClick={() => setDurationDays(Math.min(30, durationDays + 1))}
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 hover:border-blue-400 flex items-center justify-center text-slate-600 hover:text-blue-600 font-bold text-sm transition-all"
                >+</button>
              </div>
            </div>

            {/* Travellers */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-500" /> Travellers
              </label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50">
                <button
                  onClick={() => setTravellers(Math.max(1, travellers - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 hover:border-blue-400 flex items-center justify-center text-slate-600 hover:text-blue-600 font-bold text-sm transition-all"
                >−</button>
                <div className="flex-1 text-center">
                  <span className="text-lg font-black text-slate-900">{travellers}</span>
                  <span className="text-xs text-slate-500 ml-1">{travellers === 1 ? "person" : "people"}</span>
                </div>
                <button
                  onClick={() => setTravellers(Math.min(12, travellers + 1))}
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 hover:border-blue-400 flex items-center justify-center text-slate-600 hover:text-blue-600 font-bold text-sm transition-all"
                >+</button>
              </div>
            </div>

            {/* Budget slider — spans 2 cols on lg */}
            <div className="space-y-1.5 sm:col-span-2 lg:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-blue-500" /> Budget per person
                </span>
                <span className="text-base font-black text-blue-600">{formatINR(budgetINR)}</span>
              </label>
              <div className="px-1 space-y-2">
                <input
                  type="range"
                  min={3000}
                  max={150000}
                  step={1000}
                  value={budgetINR}
                  onChange={(e) => setBudgetINR(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>₹3,000</span>
                  <span className="text-blue-600 font-bold">
                    {BUDGET_TIER_CONFIG.find(b => b.id === budgetTier)?.label}
                  </span>
                  <span>₹1,50,000</span>
                </div>
              </div>
            </div>

            {/* Travel style */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-blue-500" /> Travel Style
              </label>
              <div className="grid grid-cols-2 gap-1.5 max-h-[120px] overflow-y-auto pr-0.5 no-scrollbar">
                {TRAVEL_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl border text-xs font-bold transition-all text-left ${
                      selectedStyle === style.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <span>{style.emoji}</span>
                    <span className="truncate">{style.id}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-7 pt-6 border-t border-slate-100">
            <button
              id="plan-my-trip-btn"
              onClick={handlePlanMyTrip}
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-black shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Plan My Trip
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="surprise-me-btn"
              onClick={handleSurpriseMe}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-700 hover:text-purple-800 text-sm font-black hover:bg-purple-50 active:scale-[0.98] transition-all"
            >
              <Shuffle className="w-4 h-4" />
              Surprise Me!
            </button>
          </div>
        </div>

        {/* ── Results panel ── */}
        <div id="trip-planner-results">

          {/* Plan My Trip Results */}
          {resultsVisible && !showSurprise && (
            <div className="border-t border-slate-100 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {matchingDestinations.length > 0
                      ? `${matchingDestinations.length} destinations match your plan`
                      : "Adjusting your filters…"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Budget {formatINR(budgetINR)} · {durationDays} days · {travellers} person{travellers > 1 ? "s" : ""} · {selectedStyle} style
                  </p>
                </div>
                <button onClick={() => setResultsVisible(false)} className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {matchingDestinations.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-slate-600 font-semibold text-sm">No exact matches found.</p>
                  <p className="text-slate-400 text-xs mt-1">Try increasing your budget or duration, or switching your travel style.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {matchingDestinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between">
                          <div>
                            <div className="text-white font-black text-sm leading-tight">{dest.name}</div>
                            <div className="text-white/80 text-[10px]">{dest.state}</div>
                          </div>
                          <div className="bg-white/95 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-lg">
                            {dest.days}D
                          </div>
                        </div>
                      </div>
                      <div className="p-3 space-y-2">
                        <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">{dest.tagline}</p>
                        <div className="flex items-center justify-between pt-1">
                          <div>
                            <div className="text-[10px] text-slate-400">Est. trip total</div>
                            <div className="text-sm font-black text-blue-600">{formatINR(dest.estimatedTotal)}</div>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md">
                            Demo Price
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Surprise Me Result */}
          {showSurprise && surpriseResult && (
            <div className="border-t border-slate-100 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 sm:p-8">
              <button
                onClick={() => setShowSurprise(false)}
                className="float-right p-1.5 rounded-lg hover:bg-purple-100 text-purple-400 hover:text-purple-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                  <Shuffle className="w-3.5 h-3.5" />
                  Your Surprise Destination
                </div>
                <h3 className="text-2xl font-black text-slate-900">{surpriseResult.name}</h3>
                <p className="text-sm text-slate-500">{surpriseResult.state}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden h-52">
                  <img
                    src={surpriseResult.image}
                    alt={surpriseResult.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                      <Clock className="w-3 h-3 inline mr-1 text-blue-500" />
                      {surpriseResult.days} days
                    </span>
                    <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                      ~{formatINR(surpriseResult.estimatedTotal)}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Demo Estimate
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">{surpriseResult.description}</p>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Why it fits your trip</h4>
                    <ul className="space-y-1.5">
                      {surpriseResult.whyItFits.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={handleSurpriseMe}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-2 border-purple-300 text-purple-700 text-xs font-bold hover:bg-purple-100 transition-colors"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      Try Another
                    </button>
                    <button
                      onClick={() => onOpenConcierge?.()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Plan This Trip
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
