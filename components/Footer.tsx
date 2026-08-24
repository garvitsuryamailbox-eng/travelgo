'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  Plane,
  Building2,
  Train,
  Bus,
  Car,
  Package,
  ShieldCheck
} from 'lucide-react';

import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Travel Directories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80 text-xs">
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-sky-400" />
              <span>Top Flight Routes</span>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/flights?from=DEL&to=BOM" className="hover:text-white transition-colors">Delhi to Mumbai Flights</Link></li>
              <li><Link href="/flights?from=BLR&to=DEL" className="hover:text-white transition-colors">Bengaluru to Delhi Flights</Link></li>
              <li><Link href="/flights?from=BOM&to=GOI" className="hover:text-white transition-colors">Mumbai to Goa Flights</Link></li>
              <li><Link href="/flights?from=DEL&to=DXB" className="hover:text-white transition-colors">Delhi to Dubai Flights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>Popular Stay Destinations</span>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/hotels?city=Goa" className="hover:text-white transition-colors">Hotels & Resorts in North Goa</Link></li>
              <li><Link href="/hotels?city=Manali" className="hover:text-white transition-colors">Resorts in Manali & Solang Valley</Link></li>
              <li><Link href="/hotels?city=Jaipur" className="hover:text-white transition-colors">Heritage Palaces in Jaipur</Link></li>
              <li><Link href="/hotels?city=Kashmir" className="hover:text-white transition-colors">Houseboats & Stays in Srinagar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Train className="w-4 h-4 text-amber-400" />
              <span>Trains & Intercity Buses</span>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/trains?from=NDLS&to=BSB" className="hover:text-white transition-colors">Vande Bharat: Delhi → Varanasi</Link></li>
              <li><Link href="/trains?from=NDLS&to=CSMT" className="hover:text-white transition-colors">Tejas Rajdhani: Delhi → Mumbai</Link></li>
              <li><Link href="/buses?from=Delhi&to=Manali" className="hover:text-white transition-colors">Volvo AC Sleeper: Delhi → Manali</Link></li>
              <li><Link href="/buses?from=Mumbai&to=Pune" className="hover:text-white transition-colors">Express Bus: Mumbai → Pune</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-rose-400" />
              <span>Holiday Tour Escapes</span>
            </h4>
            <ul className="space-y-2">
              <li><Link href="/holidays?dest=Kashmir" className="hover:text-white transition-colors">Kashmir Houseboat & Gondola Tour</Link></li>
              <li><Link href="/holidays?dest=Kerala" className="hover:text-white transition-colors">Kerala Backwaters & Munnar Package</Link></li>
              <li><Link href="/holidays?dest=Rajasthan" className="hover:text-white transition-colors">Royal Rajasthan Forts & Desert Tour</Link></li>
              <li><Link href="/holidays?dest=Dubai" className="hover:text-white transition-colors">Dubai Burj Khalifa & Desert Safari</Link></li>
            </ul>
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-800/80">
          {/* Brand & Demo Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="block">
              <AnimatedLogo size="md" variant="dark" />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              India’s comprehensive online travel booking platform demo for flights, luxury hotels, trains, buses, outstation cabs, and holiday packages.
            </p>

            {/* Clearly marked placeholder demo contact info */}
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Demo Support: <span className="text-slate-400">support@travelgo-demo.local</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Demo Helpline: <span className="text-slate-400">+91 (555) 019-2834</span></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Demo Project: <span className="text-slate-400">Next.js 16 Travel Portal Showcase</span></span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">About TravelGo</Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/#press" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link href="/#rewards" className="hover:text-white transition-colors">Rewards Program</Link></li>
              <li><Link href="/#partners" className="hover:text-white transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/flights" className="hover:text-white transition-colors">Flight Booking</Link></li>
              <li><Link href="/hotels" className="hover:text-white transition-colors">Hotels & Resorts</Link></li>
              <li><Link href="/trains" className="hover:text-white transition-colors">Train Tickets</Link></li>
              <li><Link href="/buses" className="hover:text-white transition-colors">Intercity Buses</Link></li>
              <li><Link href="/cabs" className="hover:text-white transition-colors">Outstation Cabs</Link></li>
              <li><Link href="/holidays" className="hover:text-white transition-colors">Holiday Packages</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Download App
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Access boarding passes, live train PNR telemetry, and exclusive mobile coupons.
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => alert('Demo notice: Apple App Store download placeholder.')}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center font-black text-white text-sm"></div>
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-400">Download on the</div>
                  <div className="text-xs font-bold text-white">Apple App Store</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => alert('Demo notice: Google Play download placeholder.')}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-400">Get it on</div>
                  <div className="text-xs font-bold text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Currency Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <span>© 2026 TravelGo (Student & Demo Portfolio Project). All rights reserved.</span>
            <Link href="/#terms" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/#terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/#terms" className="hover:text-slate-300">Sitemap</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>English (India)</span>
              <span className="text-slate-600">|</span>
              <span className="font-semibold text-white">INR (₹)</span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-teal-400 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Demo OTA Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
