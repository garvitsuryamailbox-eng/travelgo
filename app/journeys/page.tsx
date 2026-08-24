'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Sparkles, Check, Compass, Calendar, ShieldCheck, X } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { signatureJourneysData, SignatureJourney } from '@/data/aureliaData';

export default function JourneysPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedJourney, setSelectedJourney] = useState<SignatureJourney | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const regions = ['All', 'Europe', 'Asia', 'Indian Ocean', 'Oceania'];

  const filtered =
    selectedRegion === 'All'
      ? signatureJourneysData
      : signatureJourneysData.filter((j) => j.region === selectedRegion);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Expedition Portfolio</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            Curated Private <span className="italic font-light text-[#c5a880]">Journeys</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Every Aurelia journey is custom-sculpted around your party with private aviation, dedicated historians, and world-class culinary masters.
          </p>

          {/* Region Filters */}
          <div className="flex items-center flex-wrap gap-2.5 mt-8">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#c5a880] text-[#0c0e14] font-semibold shadow-lg shadow-[#c5a880]/20'
                    : 'bg-[#12151e] text-[#eae6df]/70 hover:text-[#f4f2ed] border border-[#c5a880]/15'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Journeys List */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {filtered.map((journey) => (
            <div
              key={journey.id}
              className="rounded-3xl bg-[#12151e] border border-[#c5a880]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl transition-all duration-500 hover:border-[#c5a880]/50"
            >
              {/* Image Left Column */}
              <div className="relative lg:col-span-6 h-80 sm:h-96 lg:h-auto overflow-hidden bg-slate-950">
                <Image
                  src={journey.image}
                  alt={journey.destination}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-[10px] uppercase tracking-widest">
                  <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] font-semibold">
                    {journey.style}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[#eae6df]/80 font-medium">
                    Best: {journey.bestTimeToVisit}
                  </span>
                </div>
              </div>

              {/* Details Right Column */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#c5a880] font-semibold uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{journey.destination}, {journey.country}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] tracking-tight leading-tight">
                    {journey.destination}
                  </h2>

                  <p className="italic font-serif text-[#c5a880] text-sm mt-1 mb-4">
                    &ldquo;{journey.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#eae6df]/75 font-light leading-relaxed mb-6">
                    {journey.longDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4 border-b border-[#c5a880]/15">
                    {journey.highlights.map((h) => (
                      <div key={h} className="text-xs text-[#eae6df]/70 flex items-start gap-2">
                        <span className="text-[#c5a880] font-bold">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">From</span>
                    <span className="font-serif text-2xl font-semibold text-[#faf9f6]">
                      {journey.startingPrice} <span className="text-xs font-sans text-[#eae6df]/50 font-normal">/ person ({journey.duration})</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJourney(journey);
                      setInquirySubmitted(false);
                    }}
                    className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Inquiry Modal */}
      {selectedJourney && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#12151e] border border-[#c5a880]/30 rounded-3xl p-8 shadow-2xl text-[#f4f2ed] animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setSelectedJourney(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 hover:border-[#c5a880] flex items-center justify-center text-[#eae6df]/60 hover:text-[#f4f2ed] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-[#faf9f6]">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#eae6df]/70 font-light leading-relaxed">
                  Thank you for your interest in <strong>{selectedJourney.destination}</strong>. Our Private Client Desk will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedJourney(null)}
                  className="px-6 py-2.5 rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs uppercase tracking-widest"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                  Private Journey Inquiry
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f6]">
                  {selectedJourney.destination}
                </h3>
                <p className="text-xs text-[#eae6df]/60 font-light">
                  {selectedJourney.duration} • Starting from {selectedJourney.startingPrice} per guest
                </p>

                <div className="space-y-3 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none focus:border-[#c5a880]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Private Email Address"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none focus:border-[#c5a880]"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Travel Month & Year (e.g. October 2026)"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] text-[#eae6df]/50 font-light">
                    100% Confidential Consultation
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase hover:bg-[#b89768] transition-all cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <AureliaFooter />
    </div>
  );
}
