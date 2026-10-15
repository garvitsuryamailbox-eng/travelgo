"use client";

import React, { useState } from "react";
import { Sparkles, MapPin, ArrowRight, ChevronRight, Star, TrendingUp } from "lucide-react";

interface TrendingDestinationsProps {
  onSelectDest: (id: string) => void;
  onBookHotel: (cityName: string) => void;
}

export const TRENDING_DESTINATIONS = [
  {
    id: "delhi",
    name: "New Delhi",
    state: "Delhi NCT",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    tagline: "UNESCO Heritage & Aerocity Luxury Stays",
    startingPrice: "₹3,499",
    badge: "Heritage Capital",
    badgeColor: "#7c3aed",
    rating: 4.8,
    reviewCount: "12K+",
    emoji: "🏛️",
    highlights: ["Red Fort", "Qutub Minar", "Aerocity"],
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa Coast",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    tagline: "Golden Beaches, Private Villas & Nightlife",
    startingPrice: "₹4,299",
    badge: "Beach Retreat",
    badgeColor: "#0891b2",
    rating: 4.9,
    reviewCount: "28K+",
    emoji: "🏖️",
    highlights: ["Calangute", "North Goa", "Dudhsagar"],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    tagline: "Royal Palaces, Havelis & Fort Gateways",
    startingPrice: "₹2,999",
    badge: "Royal Heritage",
    badgeColor: "#b45309",
    rating: 4.7,
    reviewCount: "18K+",
    emoji: "🏰",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace"],
  },
  {
    id: "gurgaon",
    name: "Gurgaon",
    state: "Haryana / NCR",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    tagline: "Cyber City, Luxury Dining & 5★ Suites",
    startingPrice: "₹3,899",
    badge: "Millennium City",
    badgeColor: "#0057e4",
    rating: 4.6,
    reviewCount: "9K+",
    emoji: "🌆",
    highlights: ["CyberHub", "Golf Course Rd", "DLF Mall"],
  },
];

export default function TrendingDestinations({
  onSelectDest,
  onBookHotel,
}: TrendingDestinationsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16" style={{ background: "linear-gradient(180deg, #f8faff 0%, #f0f4f8 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-eyebrow">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "-0.03em" }}>
              Popular <span className="text-gradient-brand">Destinations</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-medium">
              Handpicked escapes with transparent demo pricing
            </p>
          </div>
          <button
            onClick={() => onSelectDest("delhi")}
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRENDING_DESTINATIONS.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: hoveredId === item.id
                  ? "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)"
                  : "0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                transform: hoveredId === item.id ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                animationDelay: `${idx * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden img-overlay">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{ transform: hoveredId === item.id ? "scale(1.08)" : "scale(1)" }}
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider text-white shadow-lg"
                    style={{ background: item.badgeColor + "cc", backdropFilter: "blur(8px)", border: `1px solid ${item.badgeColor}55` }}
                  >
                    {item.emoji} {item.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Bottom gradient overlay content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="text-lg font-black text-white leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1 text-slate-300 text-[10px] mt-0.5">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{item.state}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-400 font-medium">Starting</div>
                      <div className="text-base font-black text-white">{item.startingPrice}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="bg-white p-4 space-y-3">
                {/* Tagline */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-1">{item.tagline}</p>

                {/* Highlights */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Reviews + Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onSelectDest(item.id)}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>City Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookHotel(item.name)}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold text-white cursor-pointer transition-all active:scale-95 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #0057e4, #0284c7)",
                      boxShadow: "0 3px 12px rgba(0,87,228,0.3)",
                    }}
                  >
                    Book Hotel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="mt-8 sm:hidden text-center">
          <button
            onClick={() => onSelectDest("delhi")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-blue-600 cursor-pointer"
            style={{ background: "rgba(0,87,228,0.06)", border: "1px solid rgba(0,87,228,0.15)" }}
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
