'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      window.location.href = `/hotels?city=${encodeURIComponent(destination.trim())}`;
    } else {
      window.location.href = '/hotels';
    }
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Explore the World, Your Way
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Find and book the best hotels, flights, and travel destinations worldwide.
        </p>

        {/* Minimal Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
        >
          {/* Destination */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Destination</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Where to? (e.g. Goa)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Check-in</label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Check-out</label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
