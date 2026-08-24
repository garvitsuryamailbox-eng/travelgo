'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { brandConfig } from '@/config/brandConfig';

export default function AureliaFooter() {
  return (
    <footer className="bg-[#07090e] text-[#eae6df]/70 pt-20 pb-12 border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-14 border-b border-[#c5a880]/15 gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] group-hover:scale-105 transition-all">
              <span className="font-serif text-base font-semibold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.25em] text-[#faf9f6] uppercase group-hover:text-[#c5a880] transition-colors">
                Aurelia
              </span>
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#c5a880] uppercase">
                Travel Beyond Ordinary
              </span>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase text-[#c5a880]">
            <span>Private Journeys</span>
            <span>•</span>
            <span>Heritage Stays</span>
            <span>•</span>
            <span>Private Aviation</span>
            <span>•</span>
            <span>24/7 Concierge</span>
          </div>
        </div>

        {/* Main 5-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-[#c5a880]/15 text-xs">
          {/* Col 1: Journeys */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Signature Journeys</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/journeys?dest=Rajasthan" className="hover:text-[#c5a880] transition-colors">Rajasthan Royal Palaces</Link></li>
              <li><Link href="/journeys?dest=Amalfi" className="hover:text-[#c5a880] transition-colors">Amalfi Coast & Capri Charter</Link></li>
              <li><Link href="/journeys?dest=Swiss" className="hover:text-[#c5a880] transition-colors">Swiss Alps & Glacier Peaks</Link></li>
              <li><Link href="/journeys?dest=Kyoto" className="hover:text-[#c5a880] transition-colors">Kyoto Zen Sanctuaries</Link></li>
              <li><Link href="/journeys?dest=Maldives" className="hover:text-[#c5a880] transition-colors">Maldives Coral Atoll Escapes</Link></li>
            </ul>
          </div>

          {/* Col 2: Sanctuaries & Stays */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Sanctuaries</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/stays/raj-heritage-palace" className="hover:text-[#c5a880] transition-colors">The Raj Heritage Palace, Udaipur</Link></li>
              <li><Link href="/stays/azure-palace" className="hover:text-[#c5a880] transition-colors">The Azure Palace, Amalfi</Link></li>
              <li><Link href="/stays/ocean-pearl-island" className="hover:text-[#c5a880] transition-colors">Ocean Pearl Private Island, Maldives</Link></li>
              <li><Link href="/stays/alpine-crown-lodge" className="hover:text-[#c5a880] transition-colors">Alpine Crown Lodge, Zermatt</Link></li>
              <li><Link href="/stays" className="hover:text-[#c5a880] transition-colors">Complete Sanctuary Collection</Link></li>
            </ul>
          </div>

          {/* Col 3: Bespoke Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Private Services</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/private-travel" className="hover:text-[#c5a880] transition-colors">Private Aviation & Transfers</Link></li>
              <li><Link href="/experiences" className="hover:text-[#c5a880] transition-colors">Superyacht Expedition Charters</Link></li>
              <li><Link href="/experiences" className="hover:text-[#c5a880] transition-colors">Helicopter Glacier Expeditions</Link></li>
              <li><Link href="/concierge" className="hover:text-[#c5a880] transition-colors">3-Star Michelin Access</Link></li>
              <li><Link href="/private-travel" className="hover:text-[#c5a880] transition-colors">Island & Estate Buyouts</Link></li>
            </ul>
          </div>

          {/* Col 4: The Journal */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">The Journal</h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/journal/48-hours-on-the-amalfi-coast" className="hover:text-[#c5a880] transition-colors">48 Hours on the Amalfi Coast</Link></li>
              <li><Link href="/journal/silence-in-the-swiss-alps" className="hover:text-[#c5a880] transition-colors">Silence in the Swiss Alps</Link></li>
              <li><Link href="/journal/inside-rajasthan-royal-heritage" className="hover:text-[#c5a880] transition-colors">Rajasthan Royal Heritage</Link></li>
              <li><Link href="/journal/japan-beyond-tokyo" className="hover:text-[#c5a880] transition-colors">Japan Beyond Tokyo</Link></li>
              <li><Link href="/journal/five-private-island-escapes" className="hover:text-[#c5a880] transition-colors">Five Private Island Escapes</Link></li>
            </ul>
          </div>

          {/* Col 5: Private Client Advisory */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg text-[#faf9f6] tracking-wider uppercase">Private Advisory</h4>
            <p className="text-xs font-light text-[#eae6df]/60 leading-relaxed">
              Our Senior Private Travel Directors curate high-touch itineraries with discreet non-disclosure protocols.
            </p>
            <div className="space-y-2.5 text-xs text-[#eae6df]/80 pt-1 font-light">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <a href={`mailto:${brandConfig.contact.generalEmail}`} className="hover:text-[#c5a880] transition-colors">
                  {brandConfig.contact.generalEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>{brandConfig.contact.primaryPhone} / {brandConfig.contact.internationalPhone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Mumbai (Nariman Point) • New Delhi • London (Mayfair) • Zurich</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#eae6df]/40 gap-4">
          <p>© 2026 AURELIA Private Travel Collection. All rights reserved.</p>
          <div className="flex gap-6 tracking-widest uppercase text-[10px]">
            <Link href="/#privacy" className="hover:text-[#c5a880] transition-colors">Privacy Charter</Link>
            <Link href="/#terms" className="hover:text-[#c5a880] transition-colors">Client Terms</Link>
            <Link href="/#concierge" className="hover:text-[#c5a880] transition-colors">Concierge Discretion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
