'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Calendar, Users, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function AureliaJourneyPlanner() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [selectedStyle, setSelectedStyle] = useState('Private Escape');
  const [submitted, setSubmitted] = useState(false);

  const journeyStyles = [
    'Private Escape',
    'Romantic',
    'Adventure',
    'Wellness',
    'Cultural',
    'Family',
    'Luxury Safari',
    'Beach Retreat',
  ];

  const popularDestinations = [
    'Amalfi Coast, Italy',
    'Maldives Coral Atolls',
    'Swiss Alps, Zermatt',
    'Kyoto, Japan',
    'Rajasthan Palaces, India',
    'Bora Bora, French Polynesia',
  ];

  const handleBeginPlanning = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push(`/journeys?dest=${encodeURIComponent(destination || 'All')}&style=${encodeURIComponent(selectedStyle)}`);
    }, 600);
  };

  return (
    <section id="planner" className="relative z-20 -mt-16 sm:-mt-20 max-w-6xl mx-auto px-6 sm:px-8">
      <div className="rounded-3xl bg-[#12151e]/95 backdrop-blur-2xl border border-[#c5a880]/25 p-7 sm:p-10 shadow-2xl shadow-black/80 text-[#f4f2ed]">
        {/* Planner Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#c5a880]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[#c5a880] mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Itinerary Curator</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] tracking-tight">
              Where will your story take you?
            </h2>
          </div>
          <p className="text-xs text-[#eae6df]/60 tracking-wider uppercase font-medium">
            Custom-designed private journeys
          </p>
        </div>

        <form onSubmit={handleBeginPlanning} className="space-y-6">
          {/* Main Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Destination Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                Destination or Region
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Amalfi, Maldives, Kyoto..."
                  className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                />
              </div>
            </div>

            {/* 2. Travel Dates Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                Preferred Travel Season
              </label>
              <div className="relative">
                <select
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="" className="bg-[#0c0e14]">Select Timing</option>
                  <option value="Spring (March – May)" className="bg-[#0c0e14]">Spring (March – May)</option>
                  <option value="Summer (June – August)" className="bg-[#0c0e14]">Summer (June – August)</option>
                  <option value="Autumn (Sept – November)" className="bg-[#0c0e14]">Autumn (Sept – November)</option>
                  <option value="Winter (Dec – February)" className="bg-[#0c0e14]">Winter (Dec – February)</option>
                  <option value="Flexible / Undecided" className="bg-[#0c0e14]">Flexible / Undecided</option>
                </select>
              </div>
            </div>

            {/* 3. Number of Guests */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                Travelling Party
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="Solo Traveler" className="bg-[#0c0e14]">Solo Traveler</option>
                  <option value="2 Guests (Couple)" className="bg-[#0c0e14]">2 Guests (Couple)</option>
                  <option value="3-4 Guests (Small Group)" className="bg-[#0c0e14]">3-4 Guests (Small Group)</option>
                  <option value="5-8 Guests (Family / Friends)" className="bg-[#0c0e14]">5-8 Guests (Family / Friends)</option>
                  <option value="9+ Guests (Private Buyout)" className="bg-[#0c0e14]">9+ Guests (Private Buyout)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Journey Style Pills */}
          <div className="space-y-2 pt-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
              Select Journey Style
            </label>
            <div className="flex flex-wrap gap-2">
              {journeyStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedStyle === style
                      ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-lg shadow-[#c5a880]/20 scale-105'
                      : 'bg-[#0c0e14]/60 text-[#eae6df]/70 hover:text-[#f4f2ed] border border-white/5 hover:border-[#c5a880]/30'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Suggestions & Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#c5a880]/15 gap-4">
            <div className="flex items-center gap-2 text-xs text-[#eae6df]/50 overflow-x-auto no-scrollbar w-full sm:w-auto">
              <span className="shrink-0 text-[10px] uppercase tracking-widest text-[#c5a880]">Trending:</span>
              {popularDestinations.slice(0, 3).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDestination(d)}
                  className="shrink-0 hover:text-[#c5a880] transition-colors underline underline-offset-4 decoration-[#c5a880]/30"
                >
                  {d}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Begin Planning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
