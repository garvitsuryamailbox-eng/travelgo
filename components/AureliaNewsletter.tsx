'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AureliaNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-[#12151e] text-[#f4f2ed] relative border-t border-[#c5a880]/15">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880]/30 bg-[#0c0e14] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private Dispatch</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight mb-3">
          The Art of <span className="italic font-light text-[#c5a880]">Travel</span>
        </h2>

        <p className="text-[#eae6df]/70 text-sm sm:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Private destinations, exceptional stays and inspiration delivered occasionally.
        </p>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/40 text-[#c5a880] text-sm flex items-center justify-center gap-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-5 h-5 text-[#c5a880]" />
            <span>Thank you. You have been added to the private Aurelia dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-[#0c0e14] border border-[#c5a880]/30 focus:border-[#c5a880] rounded-full px-6 py-3.5 text-xs text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
