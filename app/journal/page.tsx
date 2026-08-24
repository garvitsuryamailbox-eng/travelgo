'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { journalArticlesData } from '@/data/aureliaData';

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Itineraries', 'Mountain Retreats', 'Culture & Heritage', 'Luxury Stays', 'Private Islands'];

  const filtered =
    selectedCategory === 'All'
      ? journalArticlesData
      : journalArticlesData.filter((a) => a.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Aurelia Publication</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            The Aurelia <span className="italic font-light text-[#c5a880]">Journal</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Curated essays, visual dispatches, and private blueprints celebrating the world’s most poetic geography and sanctuaries.
          </p>

          {/* Category Filters */}
          <div className="flex items-center flex-wrap gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-lg shadow-[#c5a880]/20'
                    : 'bg-[#12151e] text-[#eae6df]/70 hover:text-[#f4f2ed] border border-[#c5a880]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/journal/${art.slug}`}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={art.heroImage}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-[10px] uppercase tracking-widest">
                  <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] font-semibold">
                    {art.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[#eae6df]/80 font-medium">
                    {art.readTime}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-5">
                <div>
                  <h3 className="font-serif text-2xl text-[#faf9f6] group-hover:text-[#c5a880] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light mt-2.5 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-[#faf9f6] font-medium block">By {art.author}</span>
                    <span className="text-[9px] text-[#eae6df]/50 uppercase tracking-widest">{art.authorRole}</span>
                  </div>

                  <span className="text-[#c5a880] font-semibold uppercase tracking-widest text-[10px] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
