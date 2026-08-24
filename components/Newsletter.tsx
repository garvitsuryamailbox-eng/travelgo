'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600 text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 120k+ Happy Travelers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Unlock Exclusive Travel Discounts
          </h2>
          <p className="text-sky-100 text-sm sm:text-base mb-8 leading-relaxed">
            Get instant secret deals, flat 20% discount coupon codes, and curated weekend getaway guides sent directly to your inbox.
          </p>

          {submitted ? (
            <div className="p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold flex items-center justify-center gap-3 animate-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
              <span>🎉 Welcome aboard! We have sent your 20% discount coupon to <strong>{email}</strong>.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-semibold outline-none shadow-xl focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
