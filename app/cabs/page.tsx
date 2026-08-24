'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Car,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Users,
  Luggage,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { cabsData, CabItem } from '@/data/travelData';

function CabsContent() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup') || 'Delhi NCR';
  const drop = searchParams.get('drop') || 'Agra / Taj Mahal';
  const date = searchParams.get('date') || '2026-09-15';
  const time = searchParams.get('time') || '06:00 AM';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xl font-black">
                    <span>{pickup}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                    <span>{drop}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Pickup: {date} at {time} · All Tolls & State Taxes Included
                  </div>
                </div>
              </div>

              <Link
                href="/#search-widget"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-400 border border-slate-700 transition-colors"
              >
                Modify Search
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
          {/* Cabs List */}
          <div className="space-y-4">
            {cabsData.map((cab) => (
              <div
                key={cab.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                {/* Cab Image & Name */}
                <div className="flex items-center gap-4 min-w-[240px]">
                  <div className="relative w-28 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={cab.image}
                      alt={cab.carName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 text-[10px] font-black uppercase">
                      {cab.category} Cab
                    </span>
                    <h3 className="font-extrabold text-lg text-slate-900 mt-1">{cab.carName}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {cab.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Luggage className="w-3.5 h-3.5" /> {cab.luggage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inclusions & Driver Badge */}
                <div className="flex-1 space-y-2 text-xs text-slate-600 border-y md:border-y-0 md:border-x border-slate-100 py-3 md:py-0 md:px-6">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{cab.driverBadge}</span>
                  </div>
                  <ul className="space-y-1">
                    {cab.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-1.5 text-slate-600">
                        <span className="text-cyan-600 font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fare & Book CTA */}
                <div className="text-left md:text-right min-w-[140px]">
                  <div className="text-2xl font-black text-slate-900">
                    ₹{cab.baseFare.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400">All Tolls & Fuel Included</div>

                  <Link
                    href={`/booking?type=cab&id=${cab.id}`}
                    className="mt-3 inline-block w-full px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 text-white font-bold text-xs text-center shadow-md shadow-cyan-600/20 transition-all active:scale-95 cursor-pointer"
                  >
                    Reserve Cab
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CabsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading cabs...</div>}>
      <CabsContent />
    </Suspense>
  );
}

