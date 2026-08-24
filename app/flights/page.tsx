'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Plane,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Clock,
  Luggage,
  Coffee,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRightLeft
} from 'lucide-react';
import { flightsData, FlightItem } from '@/data/travelData';

function FlightsContent() {
  const searchParams = useSearchParams();
  const fromCode = searchParams.get('from') || 'DEL';
  const toCode = searchParams.get('to') || 'BOM';
  const depDate = searchParams.get('dep') || '2026-09-15';

  const [selectedAirline, setSelectedAirline] = useState<string>('All');
  const [selectedStops, setSelectedStops] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'cheapest' | 'fastest' | 'earliest'>('cheapest');
  const [expandedFlightId, setExpandedFlightId] = useState<string | null>(null);

  // Filter flights
  let filtered = flightsData.filter((fl) => {
    if (selectedAirline !== 'All' && fl.airline !== selectedAirline) return false;
    if (selectedStops !== 'All' && fl.stops !== selectedStops) return false;
    return true;
  });

  // Sort flights
  if (sortBy === 'cheapest') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'fastest') {
    filtered.sort((a, b) => a.duration.localeCompare(b.duration));
  } else if (sortBy === 'earliest') {
    filtered.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
  }

  const airlines = ['All', 'IndiGo', 'Air India', 'Vistara', 'Akasa Air', 'Emirates'];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Search Summary Header Bar */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xl font-black">
                    <span>{fromCode}</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                    <span>{toCode}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Departure: {depDate} · 1 Adult · Economy
                  </div>
                </div>
              </div>

              <Link
                href="/#search-widget"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-sky-400 border border-slate-700 transition-colors"
              >
                Modify Search
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                    <span>Filters</span>
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedAirline('All');
                      setSelectedStops('All');
                    }}
                    className="text-xs text-sky-600 hover:underline font-semibold"
                  >
                    Reset
                  </button>
                </div>

                {/* Stops Filter */}
                <div className="mb-6">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Stops
                  </span>
                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    {['All', 'Non-stop', '1 Stop'].map((st) => (
                      <label key={st} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="stops"
                          checked={selectedStops === st}
                          onChange={() => setSelectedStops(st)}
                          className="accent-sky-600"
                        />
                        <span>{st}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Airlines Filter */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Airlines
                  </span>
                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    {airlines.map((air) => (
                      <label key={air} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="airline"
                          checked={selectedAirline === air}
                          onChange={() => setSelectedAirline(air)}
                          className="accent-sky-600"
                        />
                        <span>{air}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Flight Cards Listing */}
            <div className="lg:col-span-9 space-y-4">
              {/* Sort Tabs Bar */}
              <div className="flex items-center justify-between bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm text-xs">
                <span className="text-slate-500 font-medium">
                  Showing <strong>{filtered.length}</strong> available flights
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-700">Sort by:</span>
                  {[
                    { id: 'cheapest', label: 'Cheapest' },
                    { id: 'fastest', label: 'Fastest' },
                    { id: 'earliest', label: 'Earliest' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSortBy(s.id as any)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                        sortBy === s.id
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flights List */}
              {filtered.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
                  <Plane className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-800">No flights matched your filter</h4>
                  <p className="text-xs mt-1">Try selecting All Airlines or resetting your search filters.</p>
                </div>
              ) : (
                filtered.map((fl) => (
                  <div
                    key={fl.id}
                    className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden"
                  >
                    {/* Flight Main Row */}
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      {/* Airline Brand */}
                      <div className="flex items-center gap-3.5 min-w-[160px]">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center p-2 text-sky-600 font-black text-sm">
                          {fl.airlineCode}
                        </div>
                        <div>
                          <div className="font-extrabold text-base text-slate-900">{fl.airline}</div>
                          <div className="text-xs text-slate-400 font-mono font-medium">{fl.flightNumber}</div>
                        </div>
                      </div>

                      {/* Flight Timings & Duration */}
                      <div className="flex items-center gap-6 sm:gap-8 flex-1 justify-center">
                        <div className="text-left">
                          <div className="text-xl font-black text-slate-900">{fl.departureTime}</div>
                          <div className="text-xs text-slate-500 font-bold">{fl.fromCode}</div>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-[11px] text-slate-400 font-medium">{fl.duration}</span>
                          <div className="w-24 sm:w-32 h-0.5 bg-slate-200 relative my-1">
                            <Plane className="w-3.5 h-3.5 text-sky-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" />
                          </div>
                          <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                            {fl.stops}
                          </span>
                        </div>

                        <div className="text-right">
                          <div className="text-xl font-black text-slate-900">{fl.arrivalTime}</div>
                          <div className="text-xs text-slate-500 font-bold">{fl.toCode}</div>
                        </div>
                      </div>

                      {/* Price & Book CTA */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 min-w-[140px] pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div>
                          <div className="text-2xl font-black text-slate-900">
                            ₹{fl.price.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-slate-400 text-right">per adult</div>
                        </div>

                        <Link
                          href={`/booking?type=flight&id=${fl.id}`}
                          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all active:scale-95"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>

                    {/* Flight Meta Strip */}
                    <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Luggage className="w-3.5 h-3.5 text-slate-400" />
                          Cabin: {fl.baggage.cabin} · Check-in: {fl.baggage.checkIn}
                        </span>
                        {fl.mealsIncluded && (
                          <span className="flex items-center gap-1 text-emerald-700 font-medium">
                            <Coffee className="w-3.5 h-3.5" /> Free Meal Included
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedFlightId(expandedFlightId === fl.id ? null : fl.id)}
                        className="text-sky-600 font-bold hover:underline"
                      >
                        {expandedFlightId === fl.id ? 'Hide Flight Details' : 'View Fare Rules'}
                      </button>
                    </div>

                    {/* Expanded Details Panel */}
                    {expandedFlightId === fl.id && (
                      <div className="p-6 bg-slate-100/60 border-t border-slate-200 text-xs text-slate-700 space-y-2 animate-in fade-in">
                        <div className="font-bold text-slate-900">Fare Summary & Baggage Rules:</div>
                        <p>• Hand Baggage: {fl.baggage.cabin} per passenger included.</p>
                        <p>• Check-in Baggage: {fl.baggage.checkIn} allowance.</p>
                        <p>• Cancellation: Refundable up to 2 hours before scheduled departure as per airline policy.</p>
                        <p>• Seat Selection: Standard middle seats complimentary during web check-in.</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function FlightsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading flights...</div>}>
      <FlightsContent />
    </Suspense>
  );
}

