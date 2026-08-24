'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { privateEscapesData } from '@/data/aureliaData';

export default function PrivateEscapesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Private Islands',
    'Luxury Safaris',
    'Mountain Retreats',
    'Desert Experiences',
    'Wellness Retreats',
    'Yacht Journeys',
  ];

  const filtered =
    activeCategory === 'All'
      ? privateEscapesData
      : privateEscapesData.filter((item) => item.category === activeCategory);

  return (
    <section id="escapes" className="py-28 bg-[#12151e] text-[#f4f2ed] relative overflow-hidden">
      {/* Decorative luxury lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuaries of Seclusion</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Private <span className="italic font-light text-[#c5a880]">Escapes</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Full island buyouts, deep savannah lodges, and high-altitude chalets reserved strictly for private clients.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-md'
                    : 'bg-[#0c0e14]/70 text-[#eae6df]/70 hover:text-[#f4f2ed] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((escape, index) => {
            const isFeatured = index === 0 && activeCategory === 'All';
            return (
              <div
                key={escape.id}
                className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`relative w-full overflow-hidden bg-slate-950 ${isFeatured ? 'h-80 sm:h-[420px]' : 'h-72'}`}>
                  <Image
                    src={escape.image}
                    alt={escape.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                      {escape.tag}
                    </span>
                    <span className="text-[11px] text-[#eae6df]/70 font-medium">
                      {escape.location}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a880] block mb-1">
                      {escape.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f6] tracking-tight leading-snug group-hover:text-[#c5a880] transition-colors">
                      {escape.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#eae6df]/70 mt-2 font-light leading-relaxed">
                      {escape.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-xs">
                    <span className="text-[#eae6df]/60 font-light italic">{escape.subtitle}</span>
                    <Link
                      href={`/journeys?dest=${encodeURIComponent(escape.location)}`}
                      className="inline-flex items-center gap-1 text-[#c5a880] font-semibold uppercase tracking-widest text-[11px] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
