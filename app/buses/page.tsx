'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Bus,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Wifi,
  Coffee,
  ShieldCheck
} from 'lucide-react';
import { busesData, BusItem } from '@/data/travelData';

function BusesContent() {
  const searchParams = useSearchParams();
  const fromCity = searchParams.get('from') || 'Delhi';
  const toCity = searchParams.get('to') || 'Manali';
  const travelDate = searchParams.get('date') || '2026-09-15';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xl font-black">
                    <span>{fromCity}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                    <span>{toCity}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Travel Date: {travelDate} · AC Sleeper & Volvo Services
                  </div>
                </div>
              </div>

              <Link
                href="/#search-widget"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-400 border border-slate-700 transition-colors"
              >
                Modify Search
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
          {/* Bus Operator Cards */}
          <div className="space-y-4">
            {busesData.map((bus) => (
              <div
                key={bus.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between gap-5"
              >
                {/* Top Operator Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-extrabold text-xl text-slate-900">{bus.operator}</h3>
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{bus.rating.toFixed(1)}</span>
                        <span className="text-slate-500 font-normal">({bus.reviewsCount})</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      {bus.busType}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-left">
                      <div className="text-lg font-black text-slate-900">{bus.departureTime}</div>
                      <div className="text-xs text-slate-400">Departure</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[11px] text-slate-400 font-medium">{bus.duration}</span>
                      <div className="w-20 sm:w-28 h-0.5 bg-slate-200 my-1 relative">
                        <Bus className="w-3.5 h-3.5 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-black text-slate-900">{bus.arrivalTime}</div>
                      <div className="text-xs text-slate-400">Next Day</div>
                    </div>
                  </div>
                </div>

                {/* Boarding Points & Amenities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Boarding Point:</span>
                    <span className="truncate block">{bus.boardingPoint}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Dropping Point:</span>
                    <span className="truncate block">{bus.droppingPoint}</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="flex flex-wrap gap-1.5">
                  {bus.amenities.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-amber-600" />
                      {a}
                    </span>
                  ))}
                </div>

                {/* Bottom Price & Seat Booking Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through">₹{bus.originalPrice}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-slate-900">
                        ₹{bus.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500">/ seat</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600">
                      {bus.availableSeats} Seats Available
                    </span>
                  </div>

                  <Link
                    href={`/booking?type=bus&id=${bus.id}`}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
                  >
                    Select Seats & Book
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

export default function BusesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading buses...</div>}>
      <BusesContent />
    </Suspense>
  );
}

