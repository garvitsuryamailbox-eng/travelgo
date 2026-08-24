'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import { signatureJourneysData } from '@/data/aureliaData';

export default function SignatureJourneysSection() {
  return (
    <section id="journeys" className="py-28 bg-[#0c0e14] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Expeditions</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Signature <span className="italic font-light text-[#c5a880]">Journeys</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Unrivaled private itineraries sculpted with secluded access, private aviation, and world-renowned boutique sanctuaries.
            </p>
          </div>

          <Link
            href="/journeys"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-[#faf9f6] font-semibold transition-colors group"
          >
            <span>View All Journeys</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Signature Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureJourneysData.slice(0, 6).map((journey) => (
            <div
              key={journey.id}
              className="group relative bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-xl shadow-black/60"
            >
              {/* Image Container */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                <Image
                  src={journey.image}
                  alt={journey.destination}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    {journey.style}
                  </span>

                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[10px] text-[#eae6df]/80 font-medium">
                    <Clock className="w-3 h-3 text-[#c5a880]" />
                    <span>{journey.duration}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a880]">
                    {journey.country}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f6] tracking-tight leading-tight mt-0.5">
                    {journey.destination}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-4 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <p className="italic font-serif text-[#c5a880] text-sm mb-2">
                    &ldquo;{journey.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 line-clamp-2 leading-relaxed font-light">
                    {journey.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">From</span>
                    <span className="font-serif text-xl font-semibold text-[#faf9f6]">
                      {journey.startingPrice} <span className="text-xs font-sans text-[#eae6df]/50 font-normal">/ person</span>
                    </span>
                  </div>

                  <Link
                    href={`/journeys?dest=${encodeURIComponent(journey.destination)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#c5a880]/40 hover:border-[#c5a880] bg-[#c5a880]/10 hover:bg-[#c5a880] text-[#f4f2ed] hover:text-[#0c0e14] text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 group-hover:shadow-md"
                  >
                    <span>Explore</span>
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
