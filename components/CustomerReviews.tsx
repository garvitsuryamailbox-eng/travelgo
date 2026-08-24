'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { reviewsData } from '@/data/travelData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Real feedback from verified travelers who booked their trips with TravelGo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="relative p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-sky-100 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-sm text-slate-900">{rev.name}</h4>
                    {rev.verified && (
                      <span title="Verified Traveler" className="inline-flex">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
