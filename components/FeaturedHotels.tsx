'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { detailedHotelsData } from '@/data/travelData';

export default function FeaturedHotels() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Luxury', 'Beach', 'Resort', 'Family'];

  const filtered =
    selectedCategory === 'All'
      ? detailedHotelsData
      : detailedHotelsData.filter((h) => h.category === selectedCategory);

  return (
    <section id="hotels" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Luxury Stays</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Hotels & Resorts
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Top rated properties with swimming pools, spa sanctuaries, and gourmet dining.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.slice(0, 3).map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wide border border-white/10">
                    {hotel.badge}
                  </span>

                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{hotel.rating.toFixed(1)}</span>
                    <span className="text-slate-300 font-normal">({hotel.reviewsCount})</span>
                  </div>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                  <div className="flex items-center gap-1 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {hotel.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {hotel.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-600"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      ₹{hotel.originalPrice.toLocaleString('en-IN')}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-2xl text-slate-900">
                        ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400">/ night</span>
                    </div>
                  </div>

                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <span>View Deal</span>
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
