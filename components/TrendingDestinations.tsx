"use client";

import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

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
    startingPrice: "₹4,200"
  },
  {
    id: "delhi",
    name: "New Delhi",
    state: "Delhi NCT",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    tagline: "UNESCO Monuments & Heritage",
    startingPrice: "₹3,500"
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa Coast",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
    tagline: "Beaches & Coastal Villas",
    startingPrice: "₹3,800"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=600&q=80",
    tagline: "Royal Palaces & Forts",
    startingPrice: "₹3,999"
  }
];

export default function TrendingDestinations({
  onSelectDest,
  onBookHotel
}: TrendingDestinationsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-5">
        <h3 className="text-base font-bold text-white">Featured Destinations</h3>
        <p className="text-xs text-slate-400">Explore destination guides &amp; book luxury stays</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRENDING_DESTINATIONS.map((item) => (
          <div
            key={item.id}
            className="group bg-[#0f111a] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="h-44 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                  <p className="text-[11px] text-slate-300">{item.tagline}</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 flex items-center justify-between border-t border-slate-800/60">
              <button
                onClick={() => onSelectDest(item.id)}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read Wiki Guide
              </button>

              <button
                onClick={() => onBookHotel(item.name)}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
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
