'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { experiencesData, ExperienceItem } from '@/data/travelData';

export default function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Adventure', 'Beach', 'Culture', 'Food', 'Luxury', 'Nature'];

  const filteredExperiences =
    activeCategory === 'All'
      ? experiencesData
      : experiencesData.filter((exp) => exp.category === activeCategory);

  return (
    <section id="activities" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Memorable Activities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Experiences Worth Travelling For
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mt-2">
              From scuba diving in Goa and hot air balloon rides in Jaipur to heritage tea ceremonies in Kyoto.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider">
                    {exp.category}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{exp.rating.toFixed(2)}</span>
                    <span className="text-slate-400 font-normal">({exp.reviewsCount})</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 text-white text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: {exp.duration}</span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                    {exp.title}
                  </h3>

                  <ul className="mt-3 space-y-1 text-xs text-slate-500">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">From</span>
                    <span className="font-black text-xl text-slate-900">
                      ₹{exp.priceInr.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-400">/ ${exp.price}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert(`Activity demo: Booking selected for ${exp.title}`)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <span>Book Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
