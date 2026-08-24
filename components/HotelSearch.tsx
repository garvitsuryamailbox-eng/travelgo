'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Plus,
  Minus,
  Search,
  Sparkles
} from 'lucide-react';

export default function HotelSearch() {
  const router = useRouter();
  const [city, setCity] = useState('Goa, India');
  const [cityOpen, setCityOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  
  // Guests & Rooms
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [priceFilter, setPriceFilter] = useState('All');

  const cityRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setCityOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setGuestsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularCities = [
    { name: 'Goa, India', desc: '500+ Stays · Baga, Calangute, Candolim, South Goa' },
    { name: 'Manali, Himachal Pradesh', desc: '320+ Stays · Mall Road, Old Manali, Solang' },
    { name: 'Jaipur, Rajasthan', desc: '280+ Stays · Heritage Havelis, C-Scheme, Amer' },
    { name: 'Kashmir (Srinagar/Gulmarg)', desc: '190+ Stays · Dal Lake Houseboats & Resorts' },
    { name: 'Kerala (Munnar/Alleppey)', desc: '240+ Stays · Backwater Houseboats & Tea Estates' },
    { name: 'Dubai, UAE', desc: '450+ Stays · Downtown, Marina, Palm Jumeirah' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/hotels?city=${encodeURIComponent(city.split(',')[0].trim())}&checkin=${checkIn}&checkout=${checkOut}&rooms=${rooms}&guests=${adults + childrenCount}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Quick Price Filters */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-100 text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Price Per Night:</span>
        {['All', '₹0 - ₹4,000', '₹4,000 - ₹8,000', '₹8,000 - ₹15,000', '₹15,000+'].map((pf) => (
          <button
            key={pf}
            type="button"
            onClick={() => setPriceFilter(pf)}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
              priceFilter === pf
                ? 'bg-teal-600 text-white font-bold shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pf}
          </button>
        ))}
      </div>

      {/* Main Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* City / Hotel Input */}
        <div className="md:col-span-5 relative" ref={cityRef}>
          <div
            onClick={() => setCityOpen(!cityOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              City / Hotel / Area
            </span>
            <div className="text-lg font-black text-slate-900 mt-0.5 truncate">
              {city}
            </div>
            <span className="text-[11px] text-slate-500 block truncate">
              India & International properties
            </span>
          </div>

          {cityOpen && (
            <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-64 overflow-y-auto">
              <div className="px-3 py-1 text-[11px] font-bold uppercase text-slate-400">
                Trending Destinations
              </div>
              {popularCities.map((pc) => (
                <button
                  key={pc.name}
                  type="button"
                  onClick={() => {
                    setCity(pc.name);
                    setCityOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl hover:bg-teal-50 transition-colors flex items-start gap-2.5 ${
                    city === pc.name ? 'bg-teal-50 text-teal-800 font-bold' : ''
                  }`}
                >
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-800">{pc.name}</div>
                    <div className="text-xs text-slate-400 truncate">{pc.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Check-In & Check-Out Dates */}
        <div className="md:col-span-4 grid grid-cols-2 gap-2">
          {/* Check-In */}
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Check-In
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>

          {/* Check-Out */}
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Check-Out
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Guests & Rooms Popover */}
        <div className="md:col-span-3 relative" ref={guestsRef}>
          <div
            onClick={() => setGuestsOpen(!guestsOpen)}
            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 cursor-pointer transition-all"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Guests & Rooms
            </span>
            <div className="text-sm font-black text-slate-900 mt-0.5 truncate">
              {rooms} Room{rooms > 1 ? 's' : ''}, {adults + childrenCount} Guest{adults + childrenCount > 1 ? 's' : ''}
            </div>
            <span className="text-[11px] text-teal-600 font-semibold truncate block">
              {adults} Adults{childrenCount > 0 ? `, ${childrenCount} Child` : ''}
            </span>
          </div>

          {guestsOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50">
              <div className="space-y-3 pb-3 border-b border-slate-100 text-xs">
                {/* Rooms */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 block">Rooms</span>
                    <span className="text-[10px] text-slate-400">Number of rooms</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{rooms}</span>
                    <button
                      type="button"
                      onClick={() => setRooms(rooms + 1)}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

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
                    <span className="text-[10px] text-slate-400">0 - 11 yrs</span>
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
              </div>

              <button
                type="button"
                onClick={() => setGuestsOpen(false)}
                className="w-full mt-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700"
              >
                Apply Guests
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search CTA */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-black text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>SEARCH HOTELS</span>
        </button>
      </div>
    </form>
  );
}
