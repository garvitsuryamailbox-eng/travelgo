"use client";

import React from "react";
import { Compass, ShieldCheck, CreditCard, Lock, PhoneCall, Globe, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onOpenWiki: (destId?: string) => void;
  onSetTab: (tab: string) => void;
}

export default function Footer({ onOpenWiki, onSetTab }: FooterProps) {
  return (
    <footer className="bg-[#051329] border-t border-blue-950 text-blue-200 text-xs mt-16">
      {/* Top Value Strip */}
      <div className="border-b border-blue-900/50 py-8 bg-[#040f21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-black text-sm">100% Upfront Transparent Pricing</div>
              <div className="text-blue-300 text-xs mt-0.5">₹0 Convenience Fee &bull; No surprise charges at checkout</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-white font-black text-sm">Instant 2-Min UPI Refunds</div>
              <div className="text-blue-300 text-xs mt-0.5">Auto-refund to original UPI ID / Bank account</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <PhoneCall className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-black text-sm">24/7 Dedicated Support</div>
              <div className="text-blue-300 text-xs mt-0.5">Call 1800-102-8747 for emergency travel help</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              Travel<span className="text-blue-400">Go</span>
            </span>
          </div>
          <p className="text-xs text-blue-300/80 leading-relaxed">
            India&apos;s leading transparent travel booking platform integrated with Wikipedia destination encyclopedia for Gurgaon Millennium City &amp; beyond.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>IATA &amp; DigiYatra Certified Partner</span>
          </div>
        </div>

        <div>
          <h4 className="font-black text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
            Destination Guides
          </h4>
          <ul className="space-y-2 text-blue-200">
            <li>
              <button onClick={() => onOpenWiki("gurgaon")} className="hover:text-cyan-300 transition-colors">
                🏙️ Gurgaon Millennium City Hub
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("delhi")} className="hover:text-cyan-300 transition-colors">
                🏛️ New Delhi Capital &amp; Heritage
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("goa")} className="hover:text-cyan-300 transition-colors">
                🌴 Goa Beaches &amp; Luxury Stays
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("jaipur")} className="hover:text-cyan-300 transition-colors">
                🏰 Jaipur Pink City &amp; Forts
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
            Travel Services
          </h4>
          <ul className="space-y-2 text-blue-200">
            <li>
              <button onClick={() => onSetTab("flights")} className="hover:text-white transition-colors">
                ✈️ Domestic &amp; Intl Flights
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("hotels")} className="hover:text-white transition-colors">
                🏨 Stays in DLF CyberHub &amp; Golf Course Rd
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("cabs")} className="hover:text-white transition-colors">
                🚖 Guaranteed IGI Airport T3 Transfers
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("trains")} className="hover:text-white transition-colors">
                🚆 Vande Bharat Express Bookings
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
            Payment Partners
          </h4>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-black text-white">
                UPI / GPay / Paytm
              </span>
              <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-black text-white">
                RuPay
              </span>
              <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-black text-white">
                Visa / MasterCard
              </span>
              <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-black text-white">
                NetBanking
              </span>
            </div>
            <p className="text-[11px] text-blue-400">
              256-Bit SSL Encrypted &bull; PCI-DSS Level 1 Compliant Checkout
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-blue-900/60 py-5 text-center text-blue-400 text-[11px] bg-[#030b17]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; 2026 TravelGo Technologies Ltd. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span>MakeMyTrip Booking Experience</span>
            <span>&bull;</span>
            <span>Wikipedia Travel Knowledge</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
