"use client";

import React from "react";
import { Compass, ChevronRight, Sparkles, MapPin } from "lucide-react";

interface TrendingDestinationsProps {
  onSelectDest: (id: string) => void;
  onBookHotel: (cityName: string) => void;
}

export const TRENDING_DESTINATIONS = [
  {
    id: "delhi",
    name: "New Delhi & NCR",
    state: "Delhi NCT",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    tagline: "UNESCO Heritage & Aerocity Luxury Stays",
    startingPrice: "₹3,499",
    badge: "HERITAGE CAPITAL"
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa Coast",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    tagline: "Golden Beaches, Private Villas & Nightlife",
    startingPrice: "₹4,299",
    badge: "BEACH RETREAT"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    tagline: "Royal Palaces, Havelis & Fort Gateways",
    startingPrice: "₹2,999",
    badge: "ROYAL HERITAGE"
  },
  {
    id: "gurgaon",
    name: "Gurgaon (CyberHub)",
    state: "Haryana / NCR",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    tagline: "Cyber City, Luxury Dining & 5★ Suites",
    startingPrice: "₹3,899",
    badge: "MILLENNIUM CITY"
  }
];

export default function TrendingDestinations({
  onSelectDest,
  onBookHotel
}: TrendingDestinationsProps) {
  return (
    <section className="bg-white border-y border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Handpicked For You</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Popular Destinations in India
            </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-sm font-medium">
          Explore top destinations with demo pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TRENDING_DESTINATIONS.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider">
                  {item.badge}
                </span>
                <div className="absolute bottom-2 right-3 px-2 py-1 rounded-md bg-white/95 text-slate-900 text-xs font-black shadow-md">
                  From {item.startingPrice}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1">{item.tagline}</p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between">
              <button
                onClick={() => onSelectDest(item.id)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer"
              >
                <span>City Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onBookHotel(item.name)}
                className="px-3.5 py-1.5 rounded-xl bg-[#008cff] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
