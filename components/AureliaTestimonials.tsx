'use client';

import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { aureliaTestimonialsData } from '@/data/aureliaData';

export default function AureliaTestimonials() {
  return (
    <section className="py-28 bg-[#0c0e14] text-[#f4f2ed] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880]/30 bg-[#12151e] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Client Words</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
            Memories Beyond <span className="italic font-light text-[#c5a880]">Measure</span>
          </h2>
          <p className="text-[#eae6df]/70 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Reflections from private clients who journeyed into the extraordinary with Aurelia.
          </p>
        </div>

        {/* Testimonials 3-Column Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aureliaTestimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#12151e] border border-[#c5a880]/15 flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#c5a880]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a880]" />
                  ))}
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-[#faf9f6]/90 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#c5a880]/15">
                <h4 className="font-serif text-lg text-[#faf9f6] font-semibold">
                  {t.guestName}
                </h4>
                <p className="text-xs text-[#c5a880] tracking-wider mt-0.5">
                  {t.journeyTitle}
                </p>
                <p className="text-[10px] text-[#eae6df]/50 uppercase tracking-widest mt-0.5">
                  {t.location} • {t.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
