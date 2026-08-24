'use client';

import React from 'react';
import { Tag, Zap, Headphones, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tag,
      title: 'Best Rates Guaranteed',
      description: 'Competitive prices with zero hidden charges on all bookings.',
    },
    {
      icon: Zap,
      title: 'Fast & Instant Booking',
      description: 'Instant ticket confirmation and receipt sent directly to your email.',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is available around the clock to assist you.',
    },
    {
      icon: ShieldCheck,
      title: '100% Verified Properties',
      description: 'Handpicked hotels and resorts verified for safety, hygiene, and comfort.',
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Why Choose TravelGo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We make your travel planning easy, secure, and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
