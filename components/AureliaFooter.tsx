'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AureliaFooter() {
  return (
    <footer className="bg-[#07090e] text-[#eae6df]/70 pt-20 pb-12 border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-14 border-b border-[#c5a880]/15 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880]">
              <span className="font-serif text-base font-semibold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.25em] text-[#faf9f6] uppercase">
                Aurelia
              </span>
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#c5a880] uppercase">
                Travel Beyond Ordinary
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#c5a880]">
            <span>Private Journeys</span>
            <span>•</span>
            <span>Luxury Stays</span>
            <span>•</span>
            <span>Private Concierge</span>
          </div>
        </div>

        {/* Main 5-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-[#c5a880]/15 text-xs">
          {/* Col 1: Journeys */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Journeys</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/journeys" className="hover:text-[#c5a880] transition-colors">Signature Journeys</Link></li>
              <li><Link href="/journeys?style=Romantic" className="hover:text-[#c5a880] transition-colors">Romantic Escapes</Link></li>
              <li><Link href="/journeys?style=Alpine" className="hover:text-[#c5a880] transition-colors">Alpine Expeditions</Link></li>
              <li><Link href="/journeys?style=Cultural" className="hover:text-[#c5a880] transition-colors">Cultural Immersions</Link></li>
              <li><Link href="/journeys?style=Safari" className="hover:text-[#c5a880] transition-colors">Private Safaris</Link></li>
            </ul>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Destinations</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/destinations" className="hover:text-[#c5a880] transition-colors">Amalfi Coast & Capri</Link></li>
              <li><Link href="/destinations" className="hover:text-[#c5a880] transition-colors">Maldives Atolls</Link></li>
              <li><Link href="/destinations" className="hover:text-[#c5a880] transition-colors">Swiss Alps & Zermatt</Link></li>
              <li><Link href="/destinations" className="hover:text-[#c5a880] transition-colors">Kyoto & Tokyo</Link></li>
              <li><Link href="/destinations" className="hover:text-[#c5a880] transition-colors">Rajasthan Palaces</Link></li>
            </ul>
          </div>

          {/* Col 3: Stays & Villas */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Stays</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Private Island Resorts</Link></li>
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Heritage Palaces</Link></li>
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Alpine Lodges</Link></li>
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Clifftop Mediterranean Villas</Link></li>
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Desert Sanctuaries</Link></li>
            </ul>
          </div>

          {/* Col 4: Private Travel */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Private Travel</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/private-travel" className="hover:text-[#c5a880] transition-colors">Bespoke Travel Design</Link></li>
              <li><Link href="/experiences" className="hover:text-[#c5a880] transition-colors">Superyacht Charters</Link></li>
              <li><Link href="/experiences" className="hover:text-[#c5a880] transition-colors">Helicopter Expeditions</Link></li>
              <li><Link href="/concierge" className="hover:text-[#c5a880] transition-colors">Private Concierge Desk</Link></li>
              <li><Link href="/journal" className="hover:text-[#c5a880] transition-colors">The Aurelia Journal</Link></li>
            </ul>
          </div>

          {/* Col 5: Private Client Desk */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Inquiries</h4>
            <p className="text-xs font-light text-[#eae6df]/60 leading-relaxed">
              Our private travel designers are available to curate your next milestone journey.
            </p>
            <div className="space-y-2 text-xs text-[#eae6df]/70 pt-1 font-light">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>concierge@aureliatravel.demo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>+1 (800) 890-AURELIA</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Mayfair, London • Geneva • New York</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#eae6df]/40 gap-4">
          <p>© 2026 AURELIA Private Travel Collection (Luxury Demonstration Platform). All rights reserved.</p>
          <div className="flex gap-6 tracking-widest uppercase text-[10px]">
            <Link href="/#terms" className="hover:text-[#c5a880] transition-colors">Privacy Policy</Link>
            <Link href="/#terms" className="hover:text-[#c5a880] transition-colors">Terms of Service</Link>
            <Link href="/#terms" className="hover:text-[#c5a880] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
