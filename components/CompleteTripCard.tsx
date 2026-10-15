"use client";

import React, { useState } from "react";
import {
  Plane,
  Building2,
  Car,
  UtensilsCrossed,
  Mountain,
  ChevronRight,
  Tag,
  Sparkles,
  Clock,
  MapPin,
  Info,
  ChevronDown
} from "lucide-react";
import { COMPLETE_TRIP_IDEAS, type CompleteTripIdea } from "../data/tripPlannerData";

interface CompleteTripCardProps {
  onBookFlight?: () => void;
}

function BreakdownRow({
  icon: Icon,
  label,
  amount,
  color
}: {
  icon: React.ElementType;
  label: string;
  amount: number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs text-slate-600 font-medium">{label}</span>
      </div>
      <span className="text-xs font-bold text-slate-800">₹{amount.toLocaleString("en-IN")}</span>
    </div>
  );
}

function TripCard({ trip, onBookFlight }: { trip: CompleteTripIdea; onBookFlight?: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const total = trip.estimatedTotal;
  const bd = trip.breakdown;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Tag */}
        <div className={`absolute top-3 left-3 ${trip.tagColor} text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md`}>
          {trip.tag}
        </div>

        {/* Demo badge */}
        <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
          Demo Est.
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-black text-lg leading-tight">{trip.title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="flex items-center gap-1 text-white/80 text-[11px]">
              <MapPin className="w-3 h-3" />
              {trip.destination}, {trip.state}
            </span>
            <span className="flex items-center gap-1 text-white/80 text-[11px]">
              <Clock className="w-3 h-3" />
              {trip.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Info className="w-3 h-3" />
          Complete Trip Cost (per person)
        </div>

        <div className="space-y-0 divide-y divide-slate-50">
          <BreakdownRow icon={Plane} label="Flight" amount={bd.flight} color="bg-blue-50 text-blue-600" />
          <BreakdownRow icon={Building2} label="Hotel" amount={bd.hotel} color="bg-purple-50 text-purple-600" />
          <BreakdownRow icon={Car} label="Transfers" amount={bd.transfers} color="bg-amber-50 text-amber-600" />
          <BreakdownRow icon={Mountain} label="Activities" amount={bd.activities} color="bg-green-50 text-green-600" />
          <BreakdownRow icon={UtensilsCrossed} label="Food est." amount={bd.food} color="bg-rose-50 text-rose-600" />
        </div>

        {/* Total */}
        <div className="mt-3 pt-3 border-t-2 border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated Total</div>
            <div className="text-xl font-black text-slate-900">₹{total.toLocaleString("en-IN")}</div>
          </div>
          <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg">
            <Tag className="w-2.5 h-2.5" />
            Sample Fare
          </span>
        </div>

        {/* Best for */}
        <div className="mt-2 text-[10px] text-slate-400 font-medium">
          Best for: <span className="text-slate-600 font-semibold">{trip.bestFor}</span>
          {" · "}from <span className="text-slate-600 font-semibold">{trip.fromCity}</span>
        </div>

        {/* Itinerary toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center justify-between w-full text-xs font-bold text-blue-600 hover:text-blue-700 py-2 border-t border-slate-100 transition-colors"
        >
          <span>Day-by-day itinerary</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        {expanded && (
          <div className="mt-2 space-y-1.5 animate-in slide-in-from-top-2 duration-200">
            {trip.itinerarySummary.map((day, i) => (
              <div key={i} className="flex gap-2 text-[11px] text-slate-600">
                <span className="shrink-0 w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-black text-[9px] flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-snug">{day.replace(/^Day \d+: /, "")}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={onBookFlight}
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-blue-200 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Explore Flights for This Trip
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function CompleteTripCard({ onBookFlight }: CompleteTripCardProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleTrips = showAll ? COMPLETE_TRIP_IDEAS : COMPLETE_TRIP_IDEAS.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10" id="complete-trip-ideas">
      {/* Header */}
      <div className="mb-7">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Full Trip Breakdown
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Complete Trip Ideas
        </h2>
        <p className="text-sm text-slate-500 mt-1 font-medium max-w-xl">
          See the <strong>real cost</strong> of a trip — flights, hotel, food, activities, and transfers — all in one view. 
          No hidden surprises.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
          <Tag className="w-3 h-3" />
          All prices are demo estimates for planning purposes only
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} onBookFlight={onBookFlight} />
        ))}
      </div>

      {/* Show more */}
      {!showAll && COMPLETE_TRIP_IDEAS.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 text-sm font-bold transition-all hover:bg-blue-50"
          >
            View {COMPLETE_TRIP_IDEAS.length - 3} more trip ideas
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
