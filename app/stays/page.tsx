'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { luxuryStaysData } from '@/data/aureliaData';

export default function StaysPage() {
  const [selectedType, setSelectedType] = useState<string>('All');

  const propertyTypes = [
    'All',
    'Clifftop Heritage Hotel',
    'Private Island Resort',
    'Luxury Alpine Lodge',
    'Royal Heritage Palace',
  ];

  const filtered =
    selectedType === 'All'
      ? luxuryStaysData
      : luxuryStaysData.filter((s) => s.type === selectedType);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aurelia Sanctuary Collection</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            Exceptional <span className="italic font-light text-[#c5a880]">Stays</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            From centuries-old Mediterranean clifftop monasteries to private atoll villas in the Maldives, explore properties reserved strictly for discerning travelers.
          </p>

          {/* Property Type Filters */}
          <div className="flex items-center flex-wrap gap-2.5 mt-8">
            {propertyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedType === type
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-lg shadow-[#c5a880]/20'
                    : 'bg-[#12151e] text-[#eae6df]/70 hover:text-[#f4f2ed] border border-[#c5a880]/15'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Stays Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((stay) => (
            <div
              key={stay.id}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-2xl shadow-black/80"
            >
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                <Image
                  src={stay.featuredImage}
                  alt={stay.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    {stay.type}
                  </span>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[#c5a880] font-serif text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#c5a880]" />
                    <span>{stay.rating.toFixed(2)}</span>
                    <span className="text-[#eae6df]/50 text-[10px] font-sans font-normal">({stay.reviewsCount})</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="flex items-center gap-1.5 text-xs text-[#eae6df]/80 font-light mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{stay.location}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#faf9f6] tracking-tight leading-tight">
                    {stay.name}
                  </h3>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <p className="italic font-serif text-[#c5a880] text-sm mb-2">
                    &ldquo;{stay.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed">
                    {stay.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {stay.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded-lg bg-[#0c0e14] border border-white/5 text-[11px] text-[#eae6df]/70"
                      >
                        • {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#c5a880]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">Rates From</span>
                    <span className="font-serif text-2xl font-semibold text-[#faf9f6]">
                      {stay.pricePerNight} <span className="text-xs font-sans text-[#eae6df]/50 font-normal">/ night</span>
                    </span>
                  </div>

                  <Link
                    href={`/stays/${stay.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md shadow-[#c5a880]/20 hover:scale-105 active:scale-95"
                  >
                    <span>View Property</span>
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
