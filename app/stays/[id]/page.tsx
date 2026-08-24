'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Star,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Calendar,
  Users,
  Utensils,
  Flower2,
  Compass,
  ChevronRight,
  Heart
} from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { luxuryStaysData } from '@/data/aureliaData';

export default function StayDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const stay = luxuryStaysData.find((s) => s.id === resolvedParams.id) || luxuryStaysData[0];

  const [selectedImage, setSelectedImage] = useState(stay.featuredImage);
  const [selectedSuite, setSelectedSuite] = useState(stay.suites[0]?.id || 'suite-1');
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-20');
  const [guestsCount, setGuestsCount] = useState('2 Guests');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationConfirmed(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#eae6df]/50">
            <Link href="/" className="hover:text-[#c5a880] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#c5a880]/40" />
            <Link href="/stays" className="hover:text-[#c5a880] transition-colors">Stays</Link>
            <ChevronRight className="w-3 h-3 text-[#c5a880]/40" />
            <span className="text-[#c5a880] font-semibold">{stay.name}</span>
          </div>
        </div>

        {/* 1. Large Luxury Hero Gallery */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="relative h-[480px] sm:h-[600px] rounded-3xl overflow-hidden bg-slate-950 border border-[#c5a880]/20 shadow-2xl shadow-black/80">
            <Image
              src={selectedImage}
              alt={stay.name}
              fill
              priority
              className="object-cover transition-all duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/25 to-transparent" />

            {/* Floating Top Actions */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/40 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                {stay.type}
              </span>

              <button
                type="button"
                onClick={() => setIsSaved(!isSaved)}
                className="p-3 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-white hover:text-[#c5a880] transition-colors shadow-lg"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#c5a880] text-[#c5a880]' : ''}`} />
              </button>
            </div>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#c5a880] uppercase tracking-widest mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{stay.location}</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl text-[#faf9f6] tracking-tight leading-tight">
                  {stay.name}
                </h1>
                <p className="italic font-serif text-[#c5a880] text-base mt-1">
                  &ldquo;{stay.tagline}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880]">
                <Star className="w-4 h-4 fill-[#c5a880]" />
                <span className="font-serif text-lg font-bold">{stay.rating.toFixed(2)}</span>
                <span className="text-xs text-[#eae6df]/60 font-sans font-normal">({stay.reviewsCount} Verified Reviews)</span>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex items-center gap-3 mt-4 overflow-x-auto no-scrollbar">
            {stay.gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative w-28 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  selectedImage === img
                    ? 'border-[#c5a880] ring-2 ring-[#c5a880]/30 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2. Main Two-Column Content Layout */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Suites (8 Cols) */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-serif text-3xl text-[#faf9f6]">
                Property Overview
              </h2>
              <p className="text-sm sm:text-base text-[#eae6df]/80 font-light leading-relaxed">
                {stay.description}
              </p>
            </section>

            {/* Suites & Villas Selection */}
            <section className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#c5a880]/15">
                <h2 className="font-serif text-3xl text-[#faf9f6]">
                  Suites & Private Villas
                </h2>
                <span className="text-xs text-[#c5a880] tracking-widest uppercase">
                  Available for Reservation
                </span>
              </div>

              <div className="space-y-6">
                {stay.suites.map((suite) => (
                  <div
                    key={suite.id}
                    className={`p-6 rounded-3xl bg-[#12151e] border transition-all ${
                      selectedSuite === suite.id
                        ? 'border-[#c5a880] ring-2 ring-[#c5a880]/20 shadow-xl shadow-black/80'
                        : 'border-[#c5a880]/15 hover:border-[#c5a880]/40'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                      <div className="relative h-44 sm:w-56 rounded-2xl overflow-hidden bg-slate-950 shrink-0">
                        <Image src={suite.image} alt={suite.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-2xl text-[#faf9f6]">
                            {suite.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-[#eae6df]/60 font-light mt-1 mb-3">
                            <span>{suite.size}</span>
                            <span>•</span>
                            <span>{suite.view}</span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {suite.inclusions.map((inc) => (
                              <span
                                key={inc}
                                className="px-2.5 py-1 rounded-lg bg-[#0c0e14] text-[11px] text-[#c5a880]"
                              >
                                ✓ {inc}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#c5a880]/15 flex items-center justify-between">
                          <span className="font-serif text-2xl font-semibold text-[#faf9f6]">
                            {suite.pricePerNight} <span className="text-xs font-sans font-normal text-[#eae6df]/50">/ night</span>
                          </span>

                          <button
                            type="button"
                            onClick={() => setSelectedSuite(suite.id)}
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                              selectedSuite === suite.id
                                ? 'bg-[#c5a880] text-[#0c0e14]'
                                : 'border border-[#c5a880]/40 text-[#f4f2ed] hover:bg-[#c5a880]/10'
                            }`}
                          >
                            {selectedSuite === suite.id ? 'Selected' : 'Select Suite'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Dining & Gastronomy */}
            <section className="space-y-4">
              <h2 className="font-serif text-3xl text-[#faf9f6] flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#c5a880]" />
                <span>Culinary & Wine Cellar</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stay.diningHighlights.map((dish, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#12151e] border border-[#c5a880]/15 text-xs text-[#eae6df]/80 font-light leading-relaxed">
                    <span className="text-[#c5a880] font-bold block mb-1">✦ Dining Highlight</span>
                    {dish}
                  </div>
                ))}
              </div>
            </section>

            {/* Spa & Wellness */}
            <section className="space-y-4">
              <h2 className="font-serif text-3xl text-[#faf9f6] flex items-center gap-2">
                <Flower2 className="w-5 h-5 text-[#c5a880]" />
                <span>Holistic Spa & Thermal Wellness</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stay.spaHighlights.map((spa, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#12151e] border border-[#c5a880]/15 text-xs text-[#eae6df]/80 font-light leading-relaxed">
                    <span className="text-[#c5a880] font-bold block mb-1">✦ Wellness Ritual</span>
                    {spa}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Reservation Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 rounded-3xl bg-[#12151e] border border-[#c5a880]/30 p-7 shadow-2xl shadow-black/80 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                  Private Reservation Desk
                </span>
                <div className="font-serif text-3xl text-[#faf9f6]">
                  {stay.pricePerNight} <span className="text-xs font-sans text-[#eae6df]/50 font-normal">/ night</span>
                </div>
              </div>

              {reservationConfirmed ? (
                <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/40 text-center space-y-3 animate-in zoom-in-95">
                  <ShieldCheck className="w-8 h-8 text-[#c5a880] mx-auto" />
                  <h4 className="font-serif text-xl text-[#faf9f6]">
                    Reservation Inquiry Confirmed
                  </h4>
                  <p className="text-xs text-[#eae6df]/70 font-light leading-relaxed">
                    Your request for <strong>{stay.name}</strong> from {checkIn} to {checkOut} has been sent to our private concierge.
                  </p>
                  <button
                    type="button"
                    onClick={() => setReservationConfirmed(false)}
                    className="text-[10px] uppercase tracking-widest text-[#c5a880] underline pt-2"
                  >
                    Modify Dates
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReserve} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#c5a880] font-semibold block">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#0c0e14] border border-[#c5a880]/20 rounded-xl px-3 py-2.5 text-xs text-[#f4f2ed] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#c5a880] font-semibold block">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#0c0e14] border border-[#c5a880]/20 rounded-xl px-3 py-2.5 text-xs text-[#f4f2ed] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-[#c5a880] font-semibold block">
                      Guests
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full bg-[#0c0e14] border border-[#c5a880]/20 rounded-xl px-3 py-2.5 text-xs text-[#f4f2ed] outline-none cursor-pointer"
                    >
                      <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                      <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="Private Villa Buyout">Private Villa Buyout</option>
                    </select>
                  </div>

                  <div className="pt-2 border-t border-[#c5a880]/15 space-y-2 text-xs text-[#eae6df]/70">
                    <div className="flex justify-between">
                      <span>5 Nights Luxury Stay</span>
                      <span className="text-[#faf9f6] font-serif">$14,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Private Butler & Seaplane/Riva Transfer</span>
                      <span className="text-[#c5a880]">Included</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#c5a880]/15 font-semibold text-sm text-[#faf9f6]">
                      <span>Estimated Total</span>
                      <span className="font-serif text-lg text-[#c5a880]">$14,000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Reserve Your Stay
                  </button>

                  <p className="text-[10px] text-center text-[#eae6df]/50 font-light">
                    {stay.cancellationPolicy}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
