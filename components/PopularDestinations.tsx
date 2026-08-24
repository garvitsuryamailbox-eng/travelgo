'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { destinationsData } from '@/data/travelData';

export default function PopularDestinations() {
  const [filterType, setFilterType] = useState<'All' | 'Domestic' | 'International'>('All');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = destinationsData.filter((item) => {
    if (filterType === 'Domestic') return item.type === 'Domestic';
    if (filterType === 'International') return item.type === 'International';
    return true;
  });

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2 border border-sky-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trending Getaways</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Travel Destinations
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Handpicked spots with verified stays, local sightseeing, and great flight connectivity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            {(['All', 'Domestic', 'International'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  filterType === type
                    ? 'bg-white text-sky-600 shadow-md scale-105'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((dest) => {
            const isFav = !!favorites[dest.id];
            return (
              <Link
                key={dest.id}
                href={`/hotels?city=${encodeURIComponent(dest.name.split(' ')[0])}`}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Top Tag & Favorite Button */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">
                      {dest.category}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(dest.id, e)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-125 cursor-pointer ${
                        isFav
                          ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40'
                          : 'bg-black/50 text-white hover:bg-black/70'
                      }`}
                      aria-label="Add to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <div className="flex items-center gap-1 text-sky-300 text-xs font-semibold mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.stateOrCountry}</span>
                    </div>
                    <h3 className="font-extrabold text-xl text-white tracking-tight leading-snug">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-white">
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Starts from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-black text-lg text-slate-900">
                          ₹{dest.startingPriceInr.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400">/ person</span>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
