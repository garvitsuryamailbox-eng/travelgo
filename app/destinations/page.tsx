'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sparkles, ArrowRight, Compass } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { destinationGuidesData } from '@/data/aureliaData';

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Europe', 'Asia', 'Indian Ocean', 'South Pacific'];

  const filtered =
    selectedRegion === 'All'
      ? destinationGuidesData
      : destinationGuidesData.filter((d) => d.region.toLowerCase().includes(selectedRegion.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Worldwide Sanctuary Atlas</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            Global <span className="italic font-light text-[#c5a880]">Destinations</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            From the sun-bleached clifftops of the Mediterranean to private coral atolls in the Indian Ocean, discover where our private concierges hold keys.
          </p>

          {/* Region Filters */}
          <div className="flex items-center flex-wrap gap-2.5 mt-8">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-lg shadow-[#c5a880]/20'
                    : 'bg-[#12151e] text-[#eae6df]/70 hover:text-[#f4f2ed] border border-[#c5a880]/15'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-[10px] uppercase tracking-widest">
                  <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] font-semibold">
                    {dest.region}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[#eae6df]/80 font-medium">
                    {dest.bestSeason}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a880]">
                    {dest.country}
                  </span>
                  <h3 className="font-serif text-3xl text-[#faf9f6] tracking-tight leading-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <div>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed mb-4">
                    {dest.tagline}
                  </p>

                  <div className="space-y-1.5">
                    {dest.highlights.map((h) => (
                      <div key={h} className="text-xs text-[#eae6df]/60 flex items-center gap-2">
                        <span className="text-[#c5a880] font-bold">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between">
                  <span className="text-xs text-[#c5a880] font-serif">
                    {dest.featuredJourneysCount} Curated Itineraries
                  </span>

                  <Link
                    href={`/journeys?dest=${encodeURIComponent(dest.name.split('&')[0].trim())}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#c5a880]/40 hover:border-[#c5a880] bg-[#c5a880]/10 hover:bg-[#c5a880] text-[#f4f2ed] hover:text-[#0c0e14] text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
