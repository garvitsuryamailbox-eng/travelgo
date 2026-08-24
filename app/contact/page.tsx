'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { brandConfig } from '@/config/brandConfig';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const offices = brandConfig.offices;

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#12151e] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Private Client Desks</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#faf9f6] tracking-tight mb-4">
            Contact <span className="italic font-light text-[#c5a880]">Aurelia</span>
          </h1>
          <p className="text-[#eae6df]/70 text-base sm:text-lg font-light leading-relaxed">
            Connect directly with our regional private travel designers to plan your next bespoke journey or private stay.
          </p>
        </div>

        {/* Global Desks Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {offices.map((office) => (
            <div
              key={office.city}
              className="p-7 rounded-3xl bg-[#12151e] border border-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-300 space-y-4"
            >
              <div className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                Regional Desk
              </div>
              <h3 className="font-serif text-3xl text-[#faf9f6]">
                {office.city}
              </h3>
              <p className="text-xs text-[#eae6df]/60 font-light leading-relaxed">
                {office.address}
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-[#eae6df]/80 font-light border-t border-[#c5a880]/15">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Appointment Booking */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-[#12151e] border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf9f6] mb-2">
              Book a Private Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light mb-8">
              Available via private telephone, secure video link, or in-person at our regional desks.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/40 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-8 h-8 text-[#c5a880] mx-auto" />
                <h4 className="font-serif text-2xl text-[#faf9f6]">
                  Appointment Requested
                </h4>
                <p className="text-xs text-[#eae6df]/70 font-light">
                  A Senior Private Travel Director will confirm your preferred consultation time.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3.5 text-xs text-[#f4f2ed] outline-none cursor-pointer">
                    <option value="Mumbai Desk">Mumbai Nariman Point Desk</option>
                    <option value="London Desk">London Mayfair Desk</option>
                    <option value="Switzerland Desk">Zurich & Geneva Desk</option>
                    <option value="New York Desk">New York Fifth Avenue Desk</option>
                    <option value="Secure Video Consultation">Secure Video Link (Global)</option>
                  </select>

                  <input
                    type="date"
                    required
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl px-4 py-3.5 text-xs text-[#f4f2ed] outline-none"
                  />
                </div>

                <textarea
                  rows={3}
                  placeholder="Outline your journey requirements or topics to discuss..."
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-2xl p-4 text-xs text-[#f4f2ed] outline-none"
                />

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#eae6df]/50 font-light flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                    <span>Confidential Private Client Appointment</span>
                  </span>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-[#c5a880]/20"
                  >
                    Confirm Consultation
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
