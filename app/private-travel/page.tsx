'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Compass, Sparkles, ShieldCheck, Key, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';

export default function PrivateTravelPage() {
  const [submitted, setSubmitted] = useState(false);

  const privatePillars = [
    {
      title: 'Private Aviation & Tarmac Transfers',
      description: 'Chauffeured tarmac access directly to Gulfstream G650 and Bombardier Global jets, with zero terminal wait times.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Full Private Island Buyouts',
      description: 'Total territorial seclusion for private families, milestone anniversaries, and confidential executive summits.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Superyacht Charter Expeditions',
      description: 'Custom-built superyacht itineraries staffed with private diving masters, helicopter pilots, and Michelin chefs.',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Client Division</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight">
            Bespoke <span className="italic font-light text-[#c5a880]">Private Travel</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Uncompromising privacy, dedicated aviation coordination, and entire estate buyouts designed for high-net-worth families and private clients.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {privatePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-[#12151e] rounded-3xl overflow-hidden border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent" />
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#faf9f6] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-[#12151e] border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] mb-2">
              Request Private Client Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light mb-8">
              A Senior Private Travel Director will contact you confidentially.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/40 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-8 h-8 text-[#c5a880] mx-auto" />
                <h4 className="font-serif text-2xl text-[#faf9f6]">
                  Consultation Request Received
                </h4>
                <p className="text-xs text-[#eae6df]/70 font-light">
                  Our private client director will reach out within 12 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3.5 text-xs text-[#f4f2ed] outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Private Email Address"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3.5 text-xs text-[#f4f2ed] outline-none"
                  />
                </div>

                <textarea
                  rows={4}
                  required
                  placeholder="Outline your private travel brief (e.g. 14-day Mediterranean superyacht charter, family private island buyout)..."
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl p-4 text-xs text-[#f4f2ed] outline-none"
                />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#eae6df]/50 font-light flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                    <span>Protected by Non-Disclosure Protocol</span>
                  </span>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-[#c5a880]/20"
                  >
                    Submit Private Brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
