'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { journalArticlesData } from '@/data/aureliaData';

export default function JournalEditorialSection() {
  const featured = journalArticlesData[0];
  const remaining = journalArticlesData.slice(1, 4);

  return (
    <section id="journal" className="py-28 bg-[#0c0e14] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              The Aurelia <span className="italic font-light text-[#c5a880]">Journal</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Dispatches on rare landscapes, architectural masterworks, and the art of unhurried travel.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-[#faf9f6] font-semibold transition-colors group"
          >
            <span>Read All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 1. Large Hero Editorial Card */}
        <Link
          href={`/journal/${featured.slug}`}
          className="group block mb-12 rounded-3xl overflow-hidden bg-[#12151e] border border-[#c5a880]/20 hover:border-[#c5a880]/50 transition-all duration-500 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative lg:col-span-7 h-80 sm:h-96 lg:h-[420px] overflow-hidden bg-slate-950">
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/20 to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a880] mb-3">
                  <span>{featured.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#eae6df]/60">
                    <Clock className="w-3 h-3 text-[#c5a880]" />
                    {featured.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] leading-snug group-hover:text-[#c5a880] transition-colors">
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light mt-4 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#c5a880]/15 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#faf9f6] font-medium block">{featured.author}</span>
                  <span className="text-[9px] text-[#eae6df]/50 uppercase tracking-widest">{featured.authorRole}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] uppercase tracking-widest font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* 2. Grid of Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {remaining.map((art) => (
            <Link
              key={art.id}
              href={`/journal/${art.slug}`}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
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

              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <div>
                  <h4 className="font-serif text-2xl text-[#faf9f6] group-hover:text-[#c5a880] transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#eae6df]/70 font-light mt-2.5 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#eae6df]/60 font-light">By {art.author}</span>
                  <span className="text-[#c5a880] font-semibold uppercase tracking-widest text-[10px] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Story <ArrowRight className="w-3 h-3" />
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
