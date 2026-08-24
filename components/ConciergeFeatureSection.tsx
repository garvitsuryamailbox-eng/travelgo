'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, PhoneCall, Plane, Utensils, Key, Calendar, ArrowRight, Shield } from 'lucide-react';

export default function ConciergeFeatureSection() {
  const conciergeFeatures = [
    {
      icon: PhoneCall,
      title: '24/7 Dedicated Assistance',
      description: 'A single point of contact available around the clock to manage adjustments, private requests, or spontaneous itinerary shifts.',
    },
    {
      icon: Plane,
      title: 'Private Aviation & Transfers',
      description: 'Chauffeured tarmac transfers, private helicopter connections, and bespoke yacht charters arranged seamlessly.',
    },
    {
      icon: Utensils,
      title: 'Priority Table Access',
      description: 'Preferred seating at fully booked Michelin-starred restaurants and private chef tables worldwide.',
    },
    {
      icon: Key,
      title: 'Exclusive Sanctuary Access',
      description: 'Private museum viewings after hours, palace treasury tours, and private island access inaccessible to the public.',
    },
    {
      icon: Calendar,
      title: 'Tailored Daily Itineraries',
      description: 'Paced precisely to your circadian rhythm with generous time for leisure, wellness, and unscripted discovery.',
    },
    {
      icon: Sparkles,
      title: 'Milestone Celebrations',
      description: 'Unforgettable anniversary fireworks over private bays, live string quartets, and custom jewelry curations.',
    },
  ];

  return (
    <section id="concierge" className="py-28 bg-[#12151e] text-[#f4f2ed] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Client Services</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
            A Concierge Who <br className="hidden sm:inline" />
            <span className="italic font-light text-[#c5a880]">Knows What You Love.</span>
          </h2>
          <p className="text-[#eae6df]/70 text-sm sm:text-base mt-4 font-light leading-relaxed">
            From the moment your journey is conceived to your return home, our dedicated private travel designers attend to every unspoken preference.
          </p>
        </div>

        {/* Features 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {conciergeFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-8 rounded-3xl bg-[#0c0e14] border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center text-[#c5a880] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#faf9f6] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#161922] to-[#0c0e14] border border-[#c5a880]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
              Private Client Consultation
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#faf9f6]">
              Begin a conversation with our private concierge desk.
            </h4>
          </div>

          <Link
            href="/concierge"
            className="shrink-0 px-8 py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Speak to a Concierge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
