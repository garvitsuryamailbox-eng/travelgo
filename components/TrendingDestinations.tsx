"use client";

import React from "react";
import { Compass, ChevronRight } from "lucide-react";

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
    tagline: "Cyber City & Luxury Dining",
    startingPrice: "₹4,200",
    badge: "POPULAR BUSINESS & LEISURE"
  },
  {
    id: "delhi",
    name: "New Delhi",
    state: "Delhi NCT",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    tagline: "UNESCO Monuments & Heritage",
    startingPrice: "₹3,500",
    badge: "HERITAGE CAPITAL"
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa Coast",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
    tagline: "Golden Beaches & Villas",
    startingPrice: "₹3,800",
    badge: "TROPICAL BEACHES"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=600&q=80",
    tagline: "Royal Palaces & Forts",
    startingPrice: "₹3,999",
    badge: "ROYAL HERITAGE"
  }
];

export default function TrendingDestinations({
  onSelectDest,
  onBookHotel
}: TrendingDestinationsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-5">
        <h3 className="text-2xl font-black text-slate-900">Featured Travel Destinations</h3>
        <p className="text-xs text-slate-500 mt-0.5">Explore destination guides &amp; book luxury stays</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TRENDING_DESTINATIONS.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider">
                  {item.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-base font-black text-white leading-tight">{item.name}</h4>
                  <p className="text-[11px] text-blue-100">{item.tagline}</p>
                </div>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => onSelectDest(item.id)}
                className="text-xs font-black text-blue-600 hover:text-blue-700 transition-colors"
              >
                Read Wiki Guide →
              </button>

              <button
                onClick={() => onBookHotel(item.name)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-blue-500/20 active:scale-95 transition-all"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
