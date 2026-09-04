"use client";

import React from "react";
import { Compass, BookOpen, ChevronRight, Star, Sparkles } from "lucide-react";
import { DESTINATIONS_DATA } from "../data/destinationsData";

interface TrendingDestinationsProps {
  onSelectDest: (id: string) => void;
  onBookHotel: (cityName: string) => void;
}

export const TRENDING_DESTINATIONS = [
  {
    id: "gurgaon",
    name: "Gurgaon (Gurugram)",
    state: "Haryana / NCR",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
    tagline: "Cyber City & Luxury Dining Hub",
    startingPrice: "₹4,200",
    rating: 4.9,
    tag: "POPULAR BUSINESS & LEISURE"
  },
  {
    id: "delhi",
    name: "New Delhi",
    state: "Delhi NCT",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    tagline: "UNESCO Monuments & Royal Cuisine",
    startingPrice: "₹3,500",
    rating: 4.8,
    tag: "HERITAGE CAPITAL"
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa Coast",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
    tagline: "Golden Beaches & Portuguese Villas",
    startingPrice: "₹3,800",
    rating: 4.9,
    tag: "TROPICAL BEACHES"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=600&q=80",
    tagline: "Royal Palaces & Terracotta Haveli",
    startingPrice: "₹3,999",
    rating: 4.95,
    tag: "ROYAL HERITAGE"
  }
];

export default function TrendingDestinations({
  onSelectDest,
  onBookHotel
}: TrendingDestinationsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Curated For You
          </div>
          <h2 className="text-2xl font-black text-white">Trending Travel Destinations</h2>
          <p className="text-xs text-slate-400 mt-0.5">Explore Wikipedia guides and book top-rated stays</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRENDING_DESTINATIONS.map((item) => (
          <div
            key={item.id}
            className="group bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-extrabold tracking-wider">
                  {item.tag}
                </span>
                <span className="absolute bottom-3 right-3 text-xs font-black text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  ★ {item.rating}
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">{item.state}</span>
                <h3 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1">{item.tagline}</p>
              </div>
            </div>

            <div className="p-4 pt-0 space-y-2">
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                <span className="text-slate-400">Hotels from:</span>
                <span className="font-bold text-white">{item.startingPrice}/night</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onSelectDest(item.id)}
                  className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-bold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Wiki Guide</span>
                </button>

                <button
                  onClick={() => onBookHotel(item.name)}
                  className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20"
                >
                  <span>Book Stays</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
