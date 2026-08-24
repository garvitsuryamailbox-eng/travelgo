'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white">
                Travel<span className="text-sky-500">Go</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your simple and reliable platform for booking flights, hotels, and holiday destinations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="#hotels" className="hover:text-white transition-colors">Hotels</Link></li>
              <li><Link href="/flights" className="hover:text-white transition-colors">Flights</Link></li>
            </ul>
          </div>

          {/* Popular Places */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Popular Places</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/hotels?city=Goa" className="hover:text-white transition-colors">Goa Beaches</Link></li>
              <li><Link href="/hotels?city=Manali" className="hover:text-white transition-colors">Manali Hills</Link></li>
              <li><Link href="/hotels?city=Kashmir" className="hover:text-white transition-colors">Kashmir Valleys</Link></li>
              <li><Link href="/hotels?city=Jaipur" className="hover:text-white transition-colors">Jaipur Heritage</Link></li>
            </ul>
          </div>

          {/* Contact Demo */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>support@travelgo-demo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+91 1800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>TravelGo Demo Center, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 TravelGo (Demo Portfolio Project). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
