'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Clock, MapPin, ArrowRight, ShieldCheck, Check, X } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { luxuryExperiencesData, LuxuryExperience } from '@/data/aureliaData';

export default function ExperiencesPage() {
  const [selectedExp, setSelectedExp] = useState<LuxuryExperience | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Activity Portfolio</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            Experiences <span className="italic font-light text-[#c5a880]">Worth Remembering</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Private superyacht charters, glacier landings via helicopter, and tables arranged at closed-door Michelin master kitchens.
          </p>
        </div>

        {/* Grid of Experiences */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {luxuryExperiencesData.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-2xl shadow-black/80"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-[10px] uppercase tracking-widest">
                  <span className="px-3.5 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] font-semibold">
                    {exp.category}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0c0e14]/80 backdrop-blur-md text-[#eae6df]/80 font-medium">
                    <Clock className="w-3 h-3 text-[#c5a880]" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="flex items-center gap-1.5 text-xs text-[#eae6df]/80 font-light mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{exp.location}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#faf9f6] tracking-tight leading-tight">
                    {exp.title}
                  </h3>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <div key={h} className="text-xs text-[#eae6df]/60 flex items-center gap-2">
                        <span className="text-[#c5a880] font-bold">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">Rates From</span>
                    <span className="font-serif text-2xl font-semibold text-[#faf9f6]">
                      {exp.startingPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedExp(exp);
                      setInquirySubmitted(false);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Experience Inquiry Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#12151e] border border-[#c5a880]/30 rounded-3xl p-8 shadow-2xl text-[#f4f2ed] animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setSelectedExp(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 hover:border-[#c5a880] flex items-center justify-center text-[#eae6df]/60 hover:text-[#f4f2ed]"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#faf9f6]">
                  Experience Reservation Requested
                </h3>
                <p className="text-xs text-[#eae6df]/70 font-light leading-relaxed">
                  Our private concierge will secure your reservation for <strong>{selectedExp.title}</strong> and coordinate all private transfers.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedExp(null)}
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
                  Reserve Exclusive Experience
                </div>
                <h3 className="font-serif text-2xl text-[#faf9f6]">
                  {selectedExp.title}
                </h3>
                <p className="text-xs text-[#eae6df]/60 font-light">
                  {selectedExp.location} • {selectedExp.duration} • {selectedExp.startingPrice}
                </p>

                <div className="space-y-3 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Private Email Address"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none"
                  />
                  <input
                    type="date"
                    required
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3 text-xs text-[#f4f2ed] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-lg shadow-[#c5a880]/20"
                >
                  Confirm Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <AureliaFooter />
    </div>
  );
}
