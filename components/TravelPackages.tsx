'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, ArrowRight, Sparkles, Check, Package } from 'lucide-react';
import { holidayPackagesData } from '@/data/travelData';

export default function TravelPackages() {
  return (
    <section id="packages" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Curated Holiday Itineraries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Handcrafted Holiday Packages
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            All-inclusive vacations with luxury stays, private sightseeing, transfers, and local experiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {holidayPackagesData.slice(0, 2).map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700 shadow-xl hover:shadow-2xl hover:border-sky-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
                    {pkg.discountBadge}
                  </span>

                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating.toFixed(2)}</span>
                    <span className="text-slate-300 font-normal">({pkg.reviewsCount})</span>
                  </div>
                </div>

                {/* Bottom Overlay Meta */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-1.5">
                    <span className="inline-flex items-center gap-1 bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-500/30">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </span>
                    <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-500/30 text-teal-300">
                      {pkg.theme}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-2xl text-white tracking-tight leading-snug">
                    {pkg.title}
                  </h3>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Inclusions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.inclusions.slice(0, 4).map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Booking Actions */}
                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      ₹{((pkg.priceInr * 1.25) | 0).toLocaleString('en-IN')}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-black text-2xl sm:text-3xl text-amber-400">
                        ₹{pkg.priceInr.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-300">/ person</span>
                    </div>
                  </div>

                  <Link
                    href={`/holidays`}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-400 hover:from-sky-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>View Package</span>
                    <ArrowRight className="w-4 h-4" />
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
