"use client";

import React from "react";
import { Compass, ShieldCheck, Headphones, Heart, ExternalLink, Globe } from "lucide-react";

interface FooterProps {
  onOpenWiki: (destId?: string) => void;
  onSetTab: (tab: string) => void;
}

export default function Footer({ onOpenWiki, onSetTab }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Value Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">100% Safe & Secure Bookings</div>
              <div className="text-[11px] text-slate-400">Encrypted instant checkout with instant refund protection</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Wikipedia Powered Travel Insights</div>
              <div className="text-[11px] text-slate-400">Deep-dive encyclopedic city guides and cultural knowledge</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">24/7 Dedicated Support</div>
              <div className="text-[11px] text-slate-400">Round-the-clock help for flights, hotels and cabs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-base font-black text-white">
              Travel<span className="text-blue-500">Go</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            India&apos;s leading platform merging MakeMyTrip-grade booking systems with encyclopedic Wikipedia destination guides.
          </p>
          <div className="text-[11px] text-slate-500">
            Official Partner &bull; DGCA & IATA Compliant &bull; IRCTC Authorized
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Destination Wikis</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onOpenWiki("gurgaon")}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                🏙️ Gurgaon (Gurugram) Encyclopedia
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenWiki("delhi")}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                🏛️ New Delhi Capital Guide
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenWiki("goa")}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                🏖️ Goa Beaches & Heritage
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenWiki("jaipur")}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                👑 Jaipur Pink City Palaces
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenWiki("manali")}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                🏔️ Manali & Atal Tunnel
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Book Travel</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onSetTab("flights")} className="hover:text-white transition-colors">
                Domestic & Intl Flights
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("hotels")} className="hover:text-white transition-colors">
                Luxury Stays in Gurgaon Cyber City
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("cabs")} className="hover:text-white transition-colors">
                Airport Cabs from IGI T3
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("packages")} className="hover:text-white transition-colors">
                Holiday Packages & Tours
              </button>
            </li>
            <li>
              <button onClick={() => onSetTab("trains")} className="hover:text-white transition-colors">
                Vande Bharat Express Trains
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Top Gurgaon Hotspots</h4>
          <ul className="space-y-1.5 text-[11px] text-slate-400">
            <li>• DLF CyberHub & Horizon Center</li>
            <li>• 32nd Avenue (32nd Milestone)</li>
            <li>• Sector 29 Microbrewery Strip</li>
            <li>• Sultanpur National Bird Sanctuary</li>
            <li>• Sheetla Mata Mandir Pilgrimage</li>
            <li>• Golf Course Road Luxury Corridor</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 py-4 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 TravelGo Technologies Ltd. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Inspired by MakeMyTrip &amp; Wikipedia &bull; Built with Next.js 16 &amp; Tailwind CSS 4
          </span>
        </div>
      </div>
    </footer>
  );
}
