'use client';

import React from 'react';
import { Sparkles, Award, Gift, Zap, Shield, ArrowRight } from 'lucide-react';

export default function RewardsSection() {
  const tiers = [
    {
      name: 'Silver Explorer',
      spend: '₹0 - ₹25,000 / year',
      perks: ['1 TravelGo Point per ₹100', 'Basic trip protection', 'Member-only flash deals'],
      badgeColor: 'bg-slate-200 text-slate-800',
    },
    {
      name: 'Gold Voyager',
      spend: '₹25,000 - ₹75,000 / year',
      perks: ['2 TravelGo Points per ₹100', 'Free hotel room upgrade vouchers', 'Zero flight rescheduling fee'],
      badgeColor: 'bg-amber-400 text-slate-950 font-bold',
      highlight: true,
    },
    {
      name: 'Platinum Globetrotter',
      spend: '₹75,000+ / year',
      perks: ['3 TravelGo Points per ₹100', 'Complimentary airport lounge passes', 'Dedicated VIP concierge manager'],
      badgeColor: 'bg-teal-500 text-white font-bold',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
          {/* Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TravelGo Rewards Program</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Travel more. Unlock more.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                Earn reward miles on every flight, hotel, train, and bus booking to redeem for free flight tickets and room upgrades.
              </p>
            </div>

            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                    tier.highlight
                      ? 'bg-slate-850 border-2 border-amber-400/80 shadow-xl shadow-amber-400/10 scale-105'
                      : 'bg-slate-900/80 border border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider ${tier.badgeColor}`}>
                        {tier.name}
                      </span>
                      {tier.highlight && (
                        <span className="text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-slate-400 mb-4">{tier.spend}</div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {tier.perks.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert(`Rewards demo: You selected the ${tier.name} tier overview.`)}
                    className="w-full mt-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    View Tier Benefits
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 text-center">
              <span>• 100% Free to Join</span>
              <span>• Points Never Expire for Active Accounts</span>
              <span>• Instant Point Credit on Ticket Generation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
