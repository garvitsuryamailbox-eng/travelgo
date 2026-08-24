'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Building2,
  MapPin,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
  Wifi,
  Coffee,
  Waves
} from 'lucide-react';
import { detailedHotelsData, DetailedHotel } from '@/data/travelData';

function HotelsContent() {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || 'Goa';
  const checkin = searchParams.get('checkin') || '2026-09-15';
  const checkout = searchParams.get('checkout') || '2026-09-18';
  const guests = searchParams.get('guests') || '2';

  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'recommended' | 'priceLow' | 'priceHigh' | 'rating'>('recommended');

  let filtered = detailedHotelsData.filter((h) => {
    if (categoryFilter !== 'All' && h.category !== categoryFilter) return false;
    if (h.rating < minRating) return false;
    return true;
  });

  if (sortBy === 'priceLow') {
    filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sortBy === 'priceHigh') {
    filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const categories = ['All', 'Luxury', 'Beach', 'Resort', 'Family', 'Budget'];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Search Summary Header */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black">
                    Hotels & Stays in {city}
                  </div>
                  <div className="text-xs text-slate-300">
                    {checkin} to {checkout} · {guests} Guests · 1 Room
                  </div>
                </div>
              </div>

              <Link
                href="/#search-widget"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-teal-400 border border-slate-700 transition-colors"
              >
                Modify Dates & Location
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
                    <SlidersHorizontal className="w-4 h-4 text-teal-600" />
                    <span>Filter Stays</span>
                  </h3>
                  <button
                    onClick={() => {
                      setCategoryFilter('All');
                      setMinRating(0);
                    }}
                    className="text-xs text-teal-600 hover:underline font-semibold"
                  >
                    Reset
                  </button>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Property Type
                  </span>
                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hotelCategory"
                          checked={categoryFilter === cat}
                          onChange={() => setCategoryFilter(cat)}
                          className="accent-teal-600"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* User Rating */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    User Rating
                  </span>
                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    {[
                      { label: 'Any Rating', val: 0 },
                      { label: '4.5+ (Exceptional)', val: 4.5 },
                      { label: '4.8+ (World Class)', val: 4.8 },
                    ].map((r) => (
                      <label key={r.label} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === r.val}
                          onChange={() => setMinRating(r.val)}
                          className="accent-teal-600"
                        />
                        <span>{r.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Cards Listing */}
            <div className="lg:col-span-9 space-y-4">
              {/* Sort Tabs Bar */}
              <div className="flex items-center justify-between bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm text-xs">
                <span className="text-slate-500 font-medium">
                  Showing <strong>{filtered.length}</strong> luxury stays in {city}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-700">Sort:</span>
                  {[
                    { id: 'recommended', label: 'Recommended' },
                    { id: 'priceLow', label: 'Price (Low to High)' },
                    { id: 'rating', label: 'Highest Rated' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSortBy(s.id as any)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                        sortBy === s.id
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {filtered.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Hotel Photo */}
                  <div className="relative md:w-72 h-56 md:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {hotel.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-teal-600 text-white text-[10px] font-black uppercase">
                          {hotel.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hotel Info Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
                            <MapPin className="w-3.5 h-3.5 text-teal-600" />
                            <span>{hotel.location}, {hotel.country}</span>
                          </div>
                          <h3 className="font-extrabold text-xl text-slate-900 hover:text-teal-600 transition-colors">
                            {hotel.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-teal-50 text-teal-800 text-xs font-black shrink-0">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating.toFixed(2)}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {hotel.description}
                      </p>

                      {/* Amenities Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {hotel.amenities.slice(0, 4).map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-teal-500" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & View Details */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 line-through">
                          ₹{hotel.originalPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-900">
                            ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-500">/ night</span>
                        </div>
                        <div className="text-[10px] text-slate-400">+ ₹{hotel.taxes} taxes</div>
                      </div>

                      <Link
                        href={`/hotels/${hotel.id}`}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all active:scale-95"
                      >
                        View Details & Rooms
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function HotelsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading stays...</div>}>
      <HotelsContent />
    </Suspense>
  );
}

