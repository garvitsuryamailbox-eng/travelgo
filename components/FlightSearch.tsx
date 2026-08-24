'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plane,
  ArrowRightLeft,
  Calendar,
  Users,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Search,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { airportsData } from '@/data/travelData';

export default function FlightSearch() {
  const router = useRouter();
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip' | 'multicity'>('oneway');
  const [fromAirport, setFromAirport] = useState(airportsData[0]); // New Delhi
  const [toAirport, setToAirport] = useState(airportsData[1]); // Mumbai
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState('2026-09-15');
  const [returnDate, setReturnDate] = useState('2026-09-22');

  // Travellers & Class
  const [travellersOpen, setTravellersOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [specialFare, setSpecialFare] = useState('Regular');

  // Error validation state
  const [error, setError] = useState<string | null>(null);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const travellersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setFromOpen(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setToOpen(false);
      }
      if (travellersRef.current && !travellersRef.current.contains(event.target as Node)) {
        setTravellersOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromAirport.code === toAirport.code) {
      setError('Origin and destination airports cannot be the same.');
      return;
    }
    if (tripType === 'roundtrip' && new Date(returnDate) < new Date(departureDate)) {
      setError('Return date must be on or after departure date.');
      return;
    }
    setError(null);
    router.push(
      `/flights?from=${fromAirport.code}&to=${toAirport.code}&dep=${departureDate}&ret=${tripType === 'roundtrip' ? returnDate : ''}&adults=${adults}&children=${childrenCount}&class=${encodeURIComponent(cabinClass)}`
    );
  };

  const totalTravellers = adults + childrenCount + infants;

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Top Options Bar: Trip Type & Special Fares */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
        {/* Trip Type Radios */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'oneway', label: 'One Way' },
            { id: 'roundtrip', label: 'Round Trip' },
            { id: 'multicity', label: 'Multi City' },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => {
                setTripType(type.id as any);
                setError(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                tripType === type.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Special Fare Badges */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Special Fares:</span>
          {['Regular', 'Armed Forces', 'Student', 'Senior Citizen'].map((fare) => (
            <button
              key={fare}
              type="button"
              onClick={() => setSpecialFare(fare)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                specialFare === fare
                  ? 'bg-teal-100 text-teal-800 font-bold border border-teal-200'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {fare}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* FROM Airport */}
        <div className="md:col-span-3 relative" ref={fromRef}>
          <div
            onClick={() => setFromOpen(!fromOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              From (Departure City)
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-xl font-black text-slate-900">{fromAirport.city}</span>
              <span className="text-xs font-bold text-sky-600 font-mono">[{fromAirport.code}]</span>
            </div>
            <span className="text-[11px] text-slate-500 truncate block mt-0.5">
              {fromAirport.name}
            </span>
          </div>

          {/* Autocomplete Dropdown */}
          {fromOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-64 overflow-y-auto">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">
                Select Origin Airport
              </div>
              {airportsData.map((ap) => (
                <button
                  key={ap.code}
                  type="button"
                  onClick={() => {
                    setFromAirport(ap);
                    setFromOpen(false);
                    setError(null);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-sky-50 transition-colors ${
                    fromAirport.code === ap.code ? 'bg-sky-50 font-bold text-sky-700' : ''
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-sm font-bold text-slate-800">{ap.city}, {ap.country}</div>
                    <div className="text-xs text-slate-400 truncate">{ap.name}</div>
                  </div>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {ap.code}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SWAP BUTTON */}
        <div className="hidden md:flex md:col-span-1 justify-center -mx-2 z-10">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md hover:bg-sky-50 hover:border-sky-300 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-all group"
            title="Swap Origin and Destination"
          >
            <ArrowRightLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* TO Airport */}
        <div className="md:col-span-3 relative" ref={toRef}>
          <div
            onClick={() => setToOpen(!toOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              To (Destination City)
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-xl font-black text-slate-900">{toAirport.city}</span>
              <span className="text-xs font-bold text-teal-600 font-mono">[{toAirport.code}]</span>
            </div>
            <span className="text-[11px] text-slate-500 truncate block mt-0.5">
              {toAirport.name}
            </span>
          </div>

          {toOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-64 overflow-y-auto">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">
                Select Destination Airport
              </div>
              {airportsData.map((ap) => (
                <button
                  key={ap.code}
                  type="button"
                  onClick={() => {
                    setToAirport(ap);
                    setToOpen(false);
                    setError(null);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-teal-50 transition-colors ${
                    toAirport.code === ap.code ? 'bg-teal-50 font-bold text-teal-700' : ''
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-sm font-bold text-slate-800">{ap.city}, {ap.country}</div>
                    <div className="text-xs text-slate-400 truncate">{ap.name}</div>
                  </div>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {ap.code}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DATES: Departure & Return */}
        <div className="md:col-span-3 grid grid-cols-2 gap-2">
          {/* Departure */}
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Departure
            </span>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>

          {/* Return */}
          <div
            className={`p-2.5 rounded-2xl border transition-colors ${
              tripType === 'roundtrip'
                ? 'bg-slate-50 border-slate-200/80'
                : 'bg-slate-100/50 border-slate-200/40 opacity-60'
            }`}
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Return
            </span>
            {tripType === 'roundtrip' ? (
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
              />
            ) : (
              <button
                type="button"
                onClick={() => setTripType('roundtrip')}
                className="text-[11px] font-bold text-sky-600 hover:underline mt-1 block text-left"
              >
                + Add Return
              </button>
            )}
          </div>
        </div>

        {/* Travellers & Class */}
        <div className="md:col-span-2 relative" ref={travellersRef}>
          <div
            onClick={() => setTravellersOpen(!travellersOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Travellers & Class
            </span>
            <div className="text-sm font-black text-slate-900 mt-0.5 truncate">
              {totalTravellers} Traveller{totalTravellers > 1 ? 's' : ''}
            </div>
            <span className="text-[11px] text-sky-600 font-semibold truncate block">
              {cabinClass}
            </span>
          </div>

          {/* Travellers Popover */}
          {travellersOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50">
              <div className="space-y-3 pb-3 border-b border-slate-100 text-xs">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 block">Adults</span>
                    <span className="text-[10px] text-slate-400">12+ yrs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 block">Children</span>
                    <span className="text-[10px] text-slate-400">2 - 12 yrs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={childrenCount <= 0}
                      onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{childrenCount}</span>
                    <button
                      type="button"
                      onClick={() => setChildrenCount(childrenCount + 1)}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 block">Infants</span>
                    <span className="text-[10px] text-slate-400">Below 2 yrs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={infants <= 0}
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{infants}</span>
                    <button
                      type="button"
                      onClick={() => setInfants(infants + 1)}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cabin Class Selection */}
              <div className="mt-3">
                <span className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5">
                  Cabin Class
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                  {['Economy', 'Premium Economy', 'Business', 'First Class'].map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setCabinClass(cls)}
                      className={`py-1.5 px-2 rounded-lg text-left transition-colors ${
                        cabinClass === cls
                          ? 'bg-sky-600 text-white font-bold'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTravellersOpen(false)}
                className="w-full mt-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-700"
              >
                Apply Travellers
              </button>
            </div>
          )}
        </div>
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
          className="px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-black text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>SEARCH FLIGHTS</span>
        </button>
      </div>
    </form>
  );
}
