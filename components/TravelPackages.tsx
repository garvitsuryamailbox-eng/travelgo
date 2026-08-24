'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { holidayPackagesData } from '@/data/travelData';

export default function TravelPackages() {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Handcrafted Holiday Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            All-inclusive vacation itineraries with hotel stays, sightseeing, and local transfers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {holidayPackagesData.slice(0, 2).map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-64 w-full bg-slate-100">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs">
                  {pkg.discountBadge}
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/90 text-xs font-bold text-slate-900 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{pkg.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-sky-600 font-semibold mb-1.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </span>
                    <span>•</span>
                    <span>{pkg.theme}</span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">
                    {pkg.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pkg.inclusions.slice(0, 3).map((inc) => (
                      <span
                        key={inc}
                        className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Price per person</span>
                    <span className="font-bold text-2xl text-slate-900">
                      ₹{pkg.priceInr.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <Link
                    href="/holidays"
                    className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
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
