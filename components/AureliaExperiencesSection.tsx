'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { luxuryExperiencesData } from '@/data/aureliaData';

export default function AureliaExperiencesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Private Yacht',
    'Michelin Dining',
    'Helicopter Tours',
    'Desert Safari',
  ];

  const filtered =
    selectedCategory === 'All'
      ? luxuryExperiencesData
      : luxuryExperiencesData.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="experiences" className="py-28 bg-[#12151e] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Adventures</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Experiences <span className="italic font-light text-[#c5a880]">Worth Remembering</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              From private superyacht charters along the Côte d’Azur to helicopter glacier tastings in the Swiss Alps.
            </p>
          </div>

          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-[#faf9f6] font-semibold transition-colors group"
          >
            <span>Explore All Experiences</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#0c0e14] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl shadow-black/70"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    {exp.category}
                  </span>

                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[10px] text-[#eae6df]/80 font-medium">
                    <Clock className="w-3 h-3 text-[#c5a880]" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="flex items-center gap-1.5 text-xs text-[#eae6df]/80 font-light mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{exp.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f6] tracking-tight leading-tight">
                    {exp.title}
                  </h3>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5">
                    {exp.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="text-xs text-[#eae6df]/60 flex items-center gap-2">
                        <span className="text-[#c5a880] font-bold">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">Experience Rate</span>
                    <span className="font-serif text-xl font-semibold text-[#faf9f6]">
                      {exp.startingPrice}
                    </span>
                  </div>

                  <Link
                    href={`/experiences`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#c5a880]/40 hover:border-[#c5a880] bg-[#c5a880]/10 hover:bg-[#c5a880] text-[#f4f2ed] hover:text-[#0c0e14] text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    <span>Reserve</span>
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
