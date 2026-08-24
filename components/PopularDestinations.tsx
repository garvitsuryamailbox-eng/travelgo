'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinationsData } from '@/data/travelData';

export default function PopularDestinations() {
  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore the most visited travel spots loved by travelers around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.slice(0, 4).map((dest) => (
            <Link
              key={dest.id}
              href={`/hotels?city=${encodeURIComponent(dest.name.split(' ')[0])}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-52 w-full bg-slate-100">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1 text-xs text-sky-600 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.stateOrCountry}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Starting from</span>
                    <span className="font-bold text-base text-slate-900">
                      ₹{dest.startingPriceInr.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
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
