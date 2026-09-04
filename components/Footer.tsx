"use client";

import React from "react";
import { Compass } from "lucide-react";

interface FooterProps {
  onOpenWiki: (destId?: string) => void;
  onSetTab: (tab: string) => void;
}

export default function Footer({ onOpenWiki, onSetTab }: FooterProps) {
  return (
    <footer className="bg-[#05060a] border-t border-slate-800/80 text-slate-400 text-xs mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span className="text-base font-extrabold text-white">
              Travel<span className="text-blue-500">Go</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Luxury travel booking with transparent upfront pricing and verified Wikipedia destination guides.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Destination Guides</h4>
          <ul className="space-y-1.5">
            <li><button onClick={() => onOpenWiki("gurgaon")} className="hover:text-white transition-colors">Gurgaon (Cyber City)</button></li>
            <li><button onClick={() => onOpenWiki("delhi")} className="hover:text-white transition-colors">New Delhi Capital</button></li>
            <li><button onClick={() => onOpenWiki("goa")} className="hover:text-white transition-colors">Goa Beaches</button></li>
            <li><button onClick={() => onOpenWiki("jaipur")} className="hover:text-white transition-colors">Jaipur Pink City</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Travel Services</h4>
          <ul className="space-y-1.5">
            <li><button onClick={() => onSetTab("flights")} className="hover:text-white transition-colors">Domestic &amp; Intl Flights</button></li>
            <li><button onClick={() => onSetTab("hotels")} className="hover:text-white transition-colors">Hotels in CyberHub</button></li>
            <li><button onClick={() => onSetTab("cabs")} className="hover:text-white transition-colors">Airport Transfers (IGI T3)</button></li>
            <li><button onClick={() => onSetTab("trains")} className="hover:text-white transition-colors">Vande Bharat Express</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Support &amp; Security</h4>
          <ul className="space-y-1.5 text-slate-400">
            <li>• 100% Upfront Transparent Pricing</li>
            <li>• Instant 2-Min UPI Refund Shield</li>
            <li>• 24/7 Helpline: 1800-102-8747</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 py-4 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 TravelGo Technologies Ltd.</span>
          <span>Next.js 16 &bull; Clean Luxury Travel Platform</span>
        </div>
      </div>
    </footer>
  );
}
