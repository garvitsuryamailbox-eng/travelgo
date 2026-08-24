'use client';

import React, { useState } from 'react';
import { Sparkles, PhoneCall, ShieldCheck, Key, Plane, Utensils, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';

export default function ConciergePage() {
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      name: 'Voyager Tier',
      tagline: 'For occasional bespoke travelers',
      fee: 'By Invitation / Itinerary Fee',
      perks: [
        'Dedicated Private Travel Designer per journey',
        'VIP check-in and priority room upgrades',
        'Private airport transfers on arrival',
        '24/7 concierge assistance during travel',
      ],
      highlight: false,
    },
    {
      name: 'Privilege Member',
      tagline: 'Annual Private Client Membership',
      fee: '$12,500 / year',
      perks: [
        'Named Senior Private Travel Director',
        'Guaranteed table reservations at 3-Star Michelin venues',
        'Helicopter and private aviation charter priority',
        'Complimentary private yacht day charter credit',
        'After-hours museum and palace access',
      ],
      highlight: true,
    },
    {
      name: 'Private Sovereign',
      tagline: 'Ultra-High-Net-Worth Family Office Concierge',
      fee: 'Custom Portfolio Retainer',
      perks: [
        'Dedicated 24/7 Family Travel Concierge Team',
        'Private island buyout and superyacht management',
        'Confidential non-disclosure security protocols',
        'Bespoke culinary brigade and private security coordination',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#12151e] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Private Concierge Desk</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight mb-4">
            A Concierge Who <br />
            <span className="italic font-light text-[#c5a880]">Knows What You Love.</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our private concierges possess intimate relationships with estate owners, Michelin chefs, and private aviation fleets worldwide.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? 'bg-[#161a26] border-2 border-[#c5a880] shadow-2xl shadow-[#c5a880]/15 scale-105'
                  : 'bg-[#12151e] border border-[#c5a880]/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    {tier.tagline}
                  </span>
                  {tier.highlight && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c5a880] text-[#0c0e14] text-[9px] font-bold uppercase tracking-widest">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-3xl text-[#faf9f6] mb-2">
                  {tier.name}
                </h3>
                <div className="font-serif text-xl text-[#c5a880] mb-6 pb-6 border-b border-[#c5a880]/15">
                  {tier.fee}
                </div>

                <ul className="space-y-3.5 text-xs text-[#eae6df]/80 font-light">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="#inquiry"
                  className={`block w-full py-3.5 text-center rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                    tier.highlight
                      ? 'bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] shadow-lg shadow-[#c5a880]/20'
                      : 'border border-[#c5a880]/40 text-[#f4f2ed] hover:bg-[#c5a880]/10'
                  }`}
                >
                  Inquire for Membership
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Concierge Form */}
        <div id="inquiry" className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-[#12151e] border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] mb-2">
              Direct Concierge Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light mb-8">
              Speak with a Senior Concierge Director regarding upcoming travel or membership.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/40 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-8 h-8 text-[#c5a880] mx-auto" />
                <h4 className="font-serif text-2xl text-[#faf9f6]">
                  Concierge Request Logged
                </h4>
                <p className="text-xs text-[#eae6df]/70 font-light">
                  Our private desk will reach out within 6 hours.
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

                <select className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3.5 text-xs text-[#f4f2ed] outline-none cursor-pointer">
                  <option value="Privilege Membership Inquiry">Privilege Membership Inquiry</option>
                  <option value="Private Sovereign Consultation">Private Sovereign Consultation</option>
                  <option value="Superyacht / Aviation Request">Superyacht / Aviation Request</option>
                  <option value="Special Milestone Curation">Special Milestone Curation</option>
                </select>

                <textarea
                  rows={3}
                  placeholder="Additional requests or timing preferences..."
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl p-4 text-xs text-[#f4f2ed] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all shadow-xl shadow-[#c5a880]/20 cursor-pointer"
                >
                  Request Concierge Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
