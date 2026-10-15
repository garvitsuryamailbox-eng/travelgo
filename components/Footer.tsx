"use client";

import React from "react";
import { Compass, ShieldCheck, CreditCard, Lock, PhoneCall, Globe, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onOpenWiki: (destId?: string) => void;
  onSetTab: (tab: string) => void;
}

export default function Footer({ onOpenWiki, onSetTab }: FooterProps) {
  return (
    <footer className="bg-[#051334] text-slate-300 text-xs border-t border-[#0a225c]">
      {/* Top Value Strip (MMT Style) */}
      <div className="border-b border-white/10 py-6 bg-[#040f2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Transparent Pricing, Always</div>
              <div className="text-slate-400 text-xs mt-0.5">Full cost breakdown shown before checkout • No surprise fees</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Clear Cancellation Info</div>
              <div className="text-slate-400 text-xs mt-0.5">Refund preview shown before you pay • Demo prototype</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Portfolio Demo Project</div>
              <div className="text-slate-400 text-xs mt-0.5">Not a real travel agency • For demonstration purposes only</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-sm">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              Travel<span className="text-sky-400">go</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            India&apos;s leading transparent travel booking platform. Enjoy zero convenience fees, verified hotel stays, and guaranteed airport transfers.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>IATA &amp; DigiYatra Certified</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
            Where2Go Guides
          </h4>
          <ul className="space-y-2 text-slate-300 text-xs">
            <li>
              <button onClick={() => onOpenWiki("delhi")} className="hover:text-white transition-colors cursor-pointer">
                New Delhi Capital &amp; Aerocity
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("goa")} className="hover:text-white transition-colors cursor-pointer">
                Goa Coast &amp; Beachfront Villas
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("jaipur")} className="hover:text-white transition-colors cursor-pointer">
                Jaipur Pink City &amp; Royal Forts
              </button>
            </li>
            <li>
              <button onClick={() => onOpenWiki("gurgaon")} className="hover:text-white transition-colors cursor-pointer">
                Gurgaon Cyber City &amp; Golf Course Rd
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
            Travel Services
          </h4>
          <ul className="space-y-2 text-slate-300 text-xs">
            <li>
              <button onClick={() => onSetTab("flights")} className="hover:text-white transition-colors cursor-pointer">
                Domestic &amp; International Flights
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("hotels")} className="hover:text-white transition-colors cursor-pointer">
                5★ Hotels &amp; Homestays
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("trains")} className="hover:text-white transition-colors cursor-pointer">
                Vande Bharat Express Trains
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("cabs")} className="hover:text-white transition-colors cursor-pointer">
                Guaranteed Airport Cabs (T3/T2)
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
            Trust &amp; Security
          </h4>
          <ul className="space-y-2 text-slate-300 text-xs">
            <li>Zero Convenience Fee Policy</li>
            <li>Instant UPI Refund Terms</li>
            <li>Privacy Policy &amp; Security</li>
            <li>24x7 Helpline: 1800-102-8747</li>
          </ul>

          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1.5">Payment Security</div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">UPI</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">RuPay</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">Visa</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">MasterCard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-4 bg-[#030c24]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
          <div>
            &copy; 2026 TravelGo &mdash; Portfolio Prototype by Garvit Surya
          </div>
          <div className="text-amber-400 font-bold text-[10px]">
            ⚠️ Demo only. No real bookings, payments, or airline partnerships.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
