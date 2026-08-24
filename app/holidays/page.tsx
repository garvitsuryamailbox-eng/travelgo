'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import {
  Package,
  Clock,
  Star,
  Sparkles,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { holidayPackagesData, HolidayPackageItem } from '@/data/travelData';

export default function HolidaysPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [expandedItineraryId, setExpandedItineraryId] = useState<string | null>(null);

  const themes = ['All', 'Mountains & Honeymoon', 'Nature & Relaxation', 'Heritage & Royalty', 'Luxury & Adventure'];

  const filtered =
    selectedTheme === 'All'
      ? holidayPackagesData
      : holidayPackagesData.filter((p) => p.theme.includes(selectedTheme) || p.theme === selectedTheme);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header Banner */}
        <div className="bg-slate-900 text-white py-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Package className="w-3.5 h-3.5" />
                  <span>All-Inclusive Holiday Packages</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Handcrafted Tour Packages & Guided Vacations
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Complete itineraries with flights, 4-star & luxury stays, private sightseeing, and daily meals.
                </p>
              </div>

              {/* Theme Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTheme(t)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedTheme === t
                        ? 'bg-rose-500 text-white shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Package Image */}
              <div className="relative lg:w-96 h-64 lg:h-auto shrink-0 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase shadow-md">
                    {pkg.discountBadge}
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs text-rose-700 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                      <span>·</span>
                      <span>{pkg.theme}</span>
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{pkg.rating.toFixed(2)}</span>
                      <span className="text-slate-400 font-normal">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{pkg.destination}</span>
                  </div>

                  {/* Inclusions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl">
                    {pkg.inclusions.map((inc) => (
                      <div key={inc} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day-Wise Itinerary Accordion Trigger */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItineraryId(expandedItineraryId === pkg.id ? null : pkg.id)
                    }
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>{expandedItineraryId === pkg.id ? 'Hide Day-Wise Plan' : 'View Day-Wise Itinerary (6 Days)'}</span>
                    {expandedItineraryId === pkg.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {expandedItineraryId === pkg.id && (
                    <div className="mt-3 p-4 bg-slate-50 rounded-2xl space-y-3 text-xs text-slate-700 animate-in fade-in">
                      {pkg.dayWiseItinerary.map((d) => (
                        <div key={d.day} className="flex items-start gap-3">
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-black text-[10px] shrink-0">
                            Day {d.day}
                          </span>
                          <div>
                            <div className="font-bold text-slate-900">{d.title}</div>
                            <div className="text-slate-500 mt-0.5">{d.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{((pkg.priceInr * 1.25) | 0).toLocaleString('en-IN')}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-slate-900">
                        ₹{pkg.priceInr.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500">/ adult (All taxes incl.)</span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?type=holiday&id=${pkg.id}`}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm shadow-md shadow-rose-500/25 transition-all text-center active:scale-95 cursor-pointer"
                  >
                    Book Holiday Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
