'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Package,
  MapPin,
  Calendar,
  Users,
  Search,
  Sparkles,
  Award
} from 'lucide-react';

export default function HolidaySearch() {
  const router = useRouter();
  const [destination, setDestination] = useState('Kashmir');
  const [travelMonth, setTravelMonth] = useState('September 2026');
  const [travellers, setTravellers] = useState('2 Adults');
  const [budget, setBudget] = useState('All');

  const themes = [
    { name: 'Kashmir', label: 'Snow & Valley' },
    { name: 'Kerala', label: 'Backwaters & Tea' },
    { name: 'Rajasthan', label: 'Royal Heritage' },
    { name: 'Dubai', label: 'Luxury & Safari' },
    { name: 'Goa', label: 'Beach & Parties' },
    { name: 'Bali', label: 'Tropical Island' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/holidays?dest=${encodeURIComponent(destination)}&budget=${encodeURIComponent(budget)}`);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Top Themes Bar */}
      <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-slate-100 text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Explore Themes:</span>
        {themes.map((t) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setDestination(t.name)}
            className={`px-3 py-1 rounded-full font-semibold transition-all ${
              destination === t.name
                ? 'bg-rose-500 text-white font-bold shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.name} ({t.label})
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Destination */}
        <div className="md:col-span-4">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Destination / Package Theme
            </span>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Kashmir, Kerala, Dubai, Bali"
              className="w-full bg-transparent font-black text-slate-900 text-base outline-none mt-1"
            />
            <span className="text-[11px] text-slate-400 block truncate">
              Handcrafted all-inclusive tour plans
            </span>
          </div>
        </div>

        {/* Travel Month / Dates */}
        <div className="md:col-span-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Travel Month
            </span>
            <select
              value={travelMonth}
              onChange={(e) => setTravelMonth(e.target.value)}
              className="w-full bg-transparent font-bold text-slate-800 text-sm outline-none mt-1 cursor-pointer"
            >
              <option value="September 2026">September 2026</option>
              <option value="October 2026">October 2026 (Diwali / Autumn)</option>
              <option value="November 2026">November 2026</option>
              <option value="December 2026">December 2026 (New Year)</option>
              <option value="January 2027">January 2027 (Winter Snow)</option>
            </select>
          </div>
        </div>

        {/* Travellers */}
        <div className="md:col-span-2">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Travellers
            </span>
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full bg-transparent font-bold text-slate-800 text-sm outline-none mt-1 cursor-pointer"
            >
              <option value="1 Adult">1 Adult (Solo)</option>
              <option value="2 Adults">2 Adults (Couple)</option>
              <option value="Family (2A + 1C)">Family (2A + 1C)</option>
              <option value="Family (2A + 2C)">Family (2A + 2C)</option>
              <option value="Group (4+ Friends)">Group (4+ Friends)</option>
            </select>
          </div>
        </div>

        {/* Budget */}
        <div className="md:col-span-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Budget Per Person
            </span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent font-bold text-slate-800 text-sm outline-none mt-1 cursor-pointer"
            >
              <option value="All">All Price Ranges</option>
              <option value="Under ₹15,000">Under ₹15,000</option>
              <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
              <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
              <option value="Luxury (₹60,000+)">Luxury (₹60,000+)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search CTA */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-base shadow-xl shadow-rose-500/25 hover:shadow-rose-500/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>EXPLORE PACKAGES</span>
        </button>
      </div>
    </form>
  );
}
