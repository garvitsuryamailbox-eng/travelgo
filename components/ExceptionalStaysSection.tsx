'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { luxuryStaysData } from '@/data/aureliaData';

export default function ExceptionalStaysSection() {
  return (
    <section id="stays" className="py-28 bg-[#0c0e14] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Sanctuaries</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Exceptional <span className="italic font-light text-[#c5a880]">Places to Stay</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Handpicked heritage palaces, secluded overwater villas, and alpine lodges offering absolute discretion.
            </p>
          </div>

          <Link
            href="/stays"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-[#faf9f6] font-semibold transition-colors group"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {luxuryStaysData.map((stay) => (
            <div
              key={stay.id}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl shadow-black/70"
            >
              {/* Image & Top Badges */}
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

              {/* Body */}
              <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <p className="italic font-serif text-[#c5a880] text-sm mb-2">
                    &ldquo;{stay.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed">
                    {stay.description}
                  </p>

                  {/* Amenities Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {stay.amenities.slice(0, 3).map((amenity) => (
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
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">From</span>
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
      </div>
    </section>
  );
}
