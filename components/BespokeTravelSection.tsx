'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export default function BespokeTravelSection() {
  const [formData, setFormData] = useState({
    destination: '',
    travelDates: '',
    guests: '2',
    budgetRange: '$15,000 – $30,000',
    travelStyle: 'Romantic & Seclusion',
    specialOccasion: 'Anniversary',
    notes: '',
    name: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="bespoke" className="py-28 bg-[#0c0e14] text-[#f4f2ed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="rounded-3xl bg-[#12151e] border border-[#c5a880]/25 p-8 sm:p-14 shadow-2xl shadow-black/80">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Private Travel Design Studio</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#faf9f6] tracking-tight">
              Your Journey. <span className="italic font-light text-[#c5a880]">Your Rules.</span>
            </h2>
            <p className="text-[#eae6df]/70 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Tell us how you want to travel. Our travel designers will shape every detail around you.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-[#0c0e14]/80 border border-[#c5a880]/40 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#faf9f6]">
                Your Bespoke Request Has Been Received
              </h3>
              <p className="text-sm text-[#eae6df]/70 max-w-lg mx-auto font-light leading-relaxed">
                A dedicated Aurelia Senior Private Travel Designer will review your preferences and contact you within 24 hours with an initial private itinerary concept.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-[#c5a880]/40 text-xs uppercase tracking-widest text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0c0e14] transition-all"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Preferred Destination(s)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Amalfi Coast, Kyoto & Tokyo, Swiss Alps"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Estimated Travel Timing & Duration
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    placeholder="e.g. September 2026, 10–14 days"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Number of Guests & Group Dynamics
                  </label>
                  <input
                    type="text"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="e.g. 2 Adults, 1 Child (Age 8)"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Target Budget Range per Person
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="$10,000 – $20,000" className="bg-[#0c0e14]">$10,000 – $20,000</option>
                    <option value="$20,000 – $40,000" className="bg-[#0c0e14]">$20,000 – $40,000</option>
                    <option value="$40,000 – $75,000" className="bg-[#0c0e14]">$40,000 – $75,000</option>
                    <option value="$75,000+ (Ultra-Private Buyout)" className="bg-[#0c0e14]">$75,000+ (Ultra-Private Buyout)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Primary Travel Style
                  </label>
                  <select
                    value={formData.travelStyle}
                    onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="Private Escape & Seclusion" className="bg-[#0c0e14]">Private Escape & Seclusion</option>
                    <option value="Romantic Milestone & Honeymoon" className="bg-[#0c0e14]">Romantic Milestone & Honeymoon</option>
                    <option value="Cultural Immersion & Fine Arts" className="bg-[#0c0e14]">Cultural Immersion & Fine Arts</option>
                    <option value="Adventure & Heli-Skiing" className="bg-[#0c0e14]">Adventure & Heli-Skiing</option>
                    <option value="Superyacht & Ocean Exploration" className="bg-[#0c0e14]">Superyacht & Ocean Exploration</option>
                    <option value="Holistic Wellness & Ayurvedic Retreat" className="bg-[#0c0e14]">Holistic Wellness & Ayurvedic Retreat</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                    Special Occasion or Milestone
                  </label>
                  <input
                    type="text"
                    value={formData.specialOccasion}
                    onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                    placeholder="e.g. 20th Anniversary, Retirement Celebration"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a880] block">
                  Your Name & Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Private Email Address"
                    className="w-full bg-[#0c0e14]/70 border border-[#c5a880]/20 focus:border-[#c5a880] rounded-2xl px-4 py-3.5 text-sm text-[#f4f2ed] placeholder-[#eae6df]/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#c5a880]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#eae6df]/50 font-light flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                  <span>100% Confidential Private Client Consultation</span>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Create My Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
