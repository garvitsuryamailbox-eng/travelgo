'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Train,
  ArrowRightLeft,
  Calendar,
  Layers,
  ChevronDown,
  Search,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { trainStationsData } from '@/data/travelData';

export default function TrainSearch() {
  const router = useRouter();
  const [fromStation, setFromStation] = useState(trainStationsData[0]); // NDLS
  const [toStation, setToStation] = useState(trainStationsData[5]); // Varanasi BSB
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [journeyDate, setJourneyDate] = useState('2026-09-16');
  const [trainClass, setTrainClass] = useState('All Classes');
  const [quota, setQuota] = useState('General');
  const [error, setError] = useState<string | null>(null);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setFromOpen(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setToOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromStation.code === toStation.code) {
      setError('Origin and destination railway stations cannot be the same.');
      return;
    }
    setError(null);
    router.push(
      `/trains?from=${fromStation.code}&to=${toStation.code}&date=${journeyDate}&class=${encodeURIComponent(trainClass)}&quota=${encodeURIComponent(quota)}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Top Options Bar: Quotas */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <span className="font-semibold text-slate-700">Select Quota:</span>
          {['General', 'Tatkal', 'Ladies', 'Senior Citizen'].map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setQuota(q)}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                quota === q
                  ? 'bg-purple-600 text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>IRCTC Authorized Partner Demo · Instant Refunds</span>
        </div>
      </div>

      {/* Main Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* From Station */}
        <div className="md:col-span-4 relative" ref={fromRef}>
          <div
            onClick={() => setFromOpen(!fromOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              From (Station)
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-xl font-black text-slate-900">{fromStation.city}</span>
              <span className="text-xs font-bold text-purple-600 font-mono">[{fromStation.code}]</span>
            </div>
            <span className="text-[11px] text-slate-500 truncate block mt-0.5">
              {fromStation.name}
            </span>
          </div>

          {fromOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-64 overflow-y-auto">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">
                Major Railway Stations
              </div>
              {trainStationsData.map((stn) => (
                <button
                  key={stn.code}
                  type="button"
                  onClick={() => {
                    setFromStation(stn);
                    setFromOpen(false);
                    setError(null);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-purple-50 transition-colors ${
                    fromStation.code === stn.code ? 'bg-purple-50 font-bold text-purple-700' : ''
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-sm font-bold text-slate-800">{stn.city}</div>
                    <div className="text-xs text-slate-400 truncate">{stn.name}</div>
                  </div>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {stn.code}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Swap Button */}
        <div className="hidden md:flex md:col-span-1 justify-center -mx-2 z-10">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md hover:bg-purple-50 hover:border-purple-300 text-slate-600 hover:text-purple-600 flex items-center justify-center transition-all group"
            title="Swap Origin and Destination"
          >
            <ArrowRightLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* To Station */}
        <div className="md:col-span-4 relative" ref={toRef}>
          <div
            onClick={() => setToOpen(!toOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              To (Station)
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-xl font-black text-slate-900">{toStation.city}</span>
              <span className="text-xs font-bold text-indigo-600 font-mono">[{toStation.code}]</span>
            </div>
            <span className="text-[11px] text-slate-500 truncate block mt-0.5">
              {toStation.name}
            </span>
          </div>

          {toOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-64 overflow-y-auto">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">
                Major Railway Stations
              </div>
              {trainStationsData.map((stn) => (
                <button
                  key={stn.code}
                  type="button"
                  onClick={() => {
                    setToStation(stn);
                    setToOpen(false);
                    setError(null);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-purple-50 transition-colors ${
                    toStation.code === stn.code ? 'bg-purple-50 font-bold text-purple-700' : ''
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-sm font-bold text-slate-800">{stn.city}</div>
                    <div className="text-xs text-slate-400 truncate">{stn.name}</div>
                  </div>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {stn.code}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Journey Date */}
        <div className="md:col-span-3 grid grid-cols-1 gap-2">
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Journey Date
            </span>
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Class Selector Bar */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-bold text-slate-700">Class:</span>
        {['All Classes', 'Sleeper (SL)', 'AC 3 Tier (3A)', 'AC 2 Tier (2A)', 'AC 1st Class (1A)', 'Chair Car (CC)'].map((cls) => (
          <button
            key={cls}
            type="button"
            onClick={() => setTrainClass(cls)}
            className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
              trainClass === cls
                ? 'bg-slate-900 text-white font-bold shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cls}
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
          className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-base shadow-xl shadow-purple-600/25 hover:shadow-purple-600/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>SEARCH TRAINS</span>
        </button>
      </div>
    </form>
  );
}
