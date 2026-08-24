'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bus,
  ArrowRightLeft,
  Calendar,
  Search,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function BusSearch() {
  const router = useRouter();
  const [fromCity, setFromCity] = useState('Delhi');
  const [toCity, setToCity] = useState('Manali');
  const [travelDate, setTravelDate] = useState('2026-09-15');
  const [busType, setBusType] = useState('All');
  const [error, setError] = useState<string | null>(null);

  const popularRoutes = [
    { from: 'Delhi', to: 'Manali' },
    { from: 'Delhi', to: 'Jaipur' },
    { from: 'Bengaluru', to: 'Goa' },
    { from: 'Mumbai', to: 'Pune' },
    { from: 'Chennai', to: 'Bengaluru' },
  ];

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromCity.toLowerCase().trim() === toCity.toLowerCase().trim()) {
      setError('Origin and destination cities cannot be the same.');
      return;
    }
    setError(null);
    router.push(
      `/buses?from=${encodeURIComponent(fromCity)}&to=${encodeURIComponent(toCity)}&date=${travelDate}&type=${encodeURIComponent(busType)}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Top Options */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <span className="font-semibold text-slate-700">Bus Type:</span>
          {['All', 'AC Sleeper (2+1)', 'Volvo Multi-Axle', 'Electric Luxury', 'Non-AC'].map((bt) => (
            <button
              key={bt}
              type="button"
              onClick={() => setBusType(bt)}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                busType === bt
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {bt}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Live GPS Tracking · Free Water Bottle</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* From City */}
        <div className="md:col-span-4">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              From (Departure City)
            </span>
            <input
              type="text"
              value={fromCity}
              onChange={(e) => {
                setFromCity(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Delhi, Mumbai, Bengaluru"
              className="w-full bg-transparent font-black text-slate-900 text-base outline-none mt-1"
            />
            <span className="text-[11px] text-slate-400 block truncate">
              Major boarding lounges available
            </span>
          </div>
        </div>

        {/* Swap Button */}
        <div className="hidden md:flex md:col-span-1 justify-center -mx-2 z-10">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md hover:bg-amber-50 hover:border-amber-300 text-slate-600 hover:text-amber-600 flex items-center justify-center transition-all group"
            title="Swap Origin and Destination"
          >
            <ArrowRightLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* To City */}
        <div className="md:col-span-4">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              To (Destination City)
            </span>
            <input
              type="text"
              value={toCity}
              onChange={(e) => {
                setToCity(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Manali, Jaipur, Goa"
              className="w-full bg-transparent font-black text-slate-900 text-base outline-none mt-1"
            />
            <span className="text-[11px] text-slate-400 block truncate">
              Direct drop off points
            </span>
          </div>
        </div>

        {/* Travel Date */}
        <div className="md:col-span-3">
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Travel Date
            </span>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Popular Routes Chips */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Trending Routes:</span>
        {popularRoutes.map((r) => (
          <button
            key={`${r.from}-${r.to}`}
            type="button"
            onClick={() => {
              setFromCity(r.from);
              setToCity(r.to);
              setError(null);
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-amber-50 hover:text-amber-700 font-medium text-slate-600 transition-colors"
          >
            {r.from} → {r.to}
          </button>
        ))}
      </div>

      {/* Validation Error Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Search CTA */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>SEARCH BUSES</span>
        </button>
      </div>
    </form>
  );
}
