'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { reviewsData } from '@/data/travelData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Customer Reviews
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            See what our travelers have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
