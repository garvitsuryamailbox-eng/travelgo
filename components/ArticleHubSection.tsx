'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  BookOpen,
  Clock,
  User,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2,
  X,
  ChevronRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { articlesData, ArticleItem } from '@/data/travelData';

export default function ArticleHubSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [savedArticles, setSavedArticles] = useState<Record<string, boolean>>({});
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const categories = ['All', 'Itineraries', 'Luxury Stays', 'Culture & Heritage', 'Adventure', 'Food & Nightlife'];

  const filteredArticles =
    activeCategory === 'All'
      ? articlesData
      : articlesData.filter((art) => art.category === activeCategory);

  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id || activeCategory !== 'All');

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="article-hub" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative luxury lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Inspiration & Travel Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Plan Your Trip: <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Article Hub</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Curated insider itineraries, luxury stay maps, culinary trails, and adventure blueprints crafted by seasoned travel curators.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Large Hero Editorial Card (Abu Dhabi & Dubai Itinerary style) */}
        {activeCategory === 'All' && (
          <div
            onClick={() => setSelectedArticle(featuredArticle)}
            className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 mb-12 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Column */}
            <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-900">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 lg:hidden" />

              {/* Tag pill */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 font-extrabold text-xs tracking-wide border border-white/15 shadow-md">
                  ★ {featuredArticle.tag}
                </span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <span className="text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                    TC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{featuredArticle.author}</div>
                    <div className="text-[10px] text-slate-400">{featuredArticle.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(featuredArticle.id, e)}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
                    title="Bookmark Article"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        savedArticles[featuredArticle.id] ? 'fill-sky-600 text-sky-600' : ''
                      }`}
                    />
                  </button>

                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs group-hover:bg-sky-600 transition-colors shadow-sm">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[11px] font-extrabold tracking-wide border border-white/10">
                    {article.tag}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(article.id, e)}
                    className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-amber-300 transition-colors"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        savedArticles[article.id] ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white z-10">
                  <span className="bg-sky-500/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md font-bold text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-200 font-semibold text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">By {article.author}</span>
                  <span className="font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore Guide <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3. Interactive Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-y-auto animate-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-20"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider mb-2">
                  <span className="bg-sky-600 text-white px-2.5 py-0.5 rounded-full text-[10px]">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 text-slate-700">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs text-slate-500">
                <div>
                  Curated by <strong className="text-slate-900">{selectedArticle.author}</strong> · {selectedArticle.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
                    Verified Guide
                  </span>
                </div>
              </div>

              <div className="text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-semibold text-slate-900 text-lg">
                  {selectedArticle.excerpt}
                </p>
                <p>
                  Traveling to <strong>{selectedArticle.relatedDestination}</strong> offers an unforgettable blend of luxury hospitality, rich cultural heritage, and pristine natural beauty. Whether you are arriving for a weekend escape or an extended holiday tour, this guide highlights the most rewarding experiences.
                </p>

                {/* Itinerary Highlights Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>Top Curator Recommendations:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Best time to visit for ideal climate and sunset photography.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Pre-book priority access passes on TravelGo to skip ticketing queues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Unlock 25% instant cashback when booking partnered hotel stays.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Ready to experience this destination?
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>

                  <Link
                    href={`/hotels`}
                    onClick={() => setSelectedArticle(null)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-xs shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Book Stays & Flights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
