'use client';

import React from 'react';
import { Tag, Zap, Headphones, ShieldCheck, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tag,
      title: 'Best Rates Guaranteed',
      description: 'Competitive prices with zero hidden charges and special bank coupon discounts.',
      color: 'bg-sky-500/10 text-sky-600 border-sky-200',
    },
    {
      icon: Zap,
      title: 'Instant Ticket Confirmation',
      description: 'Confirmed booking vouchers and PNRs generated in real-time right on your screen.',
      color: 'bg-amber-500/10 text-amber-600 border-amber-200',
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      description: 'Our customer support concierge is always available on chat, call, and WhatsApp.',
      color: 'bg-teal-500/10 text-teal-600 border-teal-200',
    },
    {
      icon: ShieldCheck,
      title: '100% Verified Properties',
      description: 'Handpicked hotels, villas, and luxury resorts verified for hygiene and safety.',
      color: 'bg-rose-500/10 text-rose-600 border-rose-200',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>The TravelGo Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Travelers Choose Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            We make your travel journey smooth, secure, transparent, and completely hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-7 rounded-3xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-sky-300 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
