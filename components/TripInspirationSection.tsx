'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { destinationGuidesData } from '@/data/aureliaData';

export default function TripInspirationSection() {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const themes = [
    'All',
    'Beach',
    'Mountains',
    'Culture',
    'Adventure',
    'Wellness',
    'Romance',
    'Family',
  ];

  return (
    <section id="destinations" className="py-28 bg-[#12151e] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Global Horizon</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Travel, <span className="italic font-light text-[#c5a880]">Curated for You.</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Explore continents through the lens of exceptional discretion, private stays, and timeless geography.
            </p>
          </div>

          {/* Theme Filters */}
          <div className="flex items-center flex-wrap gap-2">
            {themes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setSelectedTheme(theme)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedTheme === theme
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-md'
                    : 'bg-[#0c0e14]/70 text-[#eae6df]/70 hover:text-[#f4f2ed] border border-white/5'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationGuidesData.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations?region=${encodeURIComponent(dest.country)}`}
              className="group relative h-96 rounded-3xl overflow-hidden bg-slate-950 border border-[#c5a880]/15 hover:border-[#c5a880]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-end p-7"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#c5a880]">
                  {dest.country} • {dest.bestSeason}
                </span>

                <h3 className="font-serif text-3xl text-[#faf9f6] tracking-tight leading-tight">
                  {dest.name}
                </h3>

                <p className="text-xs text-[#eae6df]/70 font-light line-clamp-1">
                  {dest.tagline}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#c5a880] font-semibold uppercase tracking-widest text-[10px]">
                  <span>{dest.featuredJourneysCount} Private Itineraries</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
