'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { detailedHotelsData } from '@/data/travelData';

export default function FeaturedHotels() {
  return (
    <section id="hotels" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Featured Hotels & Resorts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Comfortable stays with verified ratings and great amenities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {detailedHotelsData.slice(0, 3).map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/90 text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{hotel.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{hotel.location}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 leading-snug">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {hotel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xl text-slate-900">
                      ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500"> / night</span>
                  </div>

                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
                  >
                    View Details
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
