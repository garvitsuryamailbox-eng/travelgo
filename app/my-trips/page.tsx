'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import {
  Briefcase,
  Plane,
  Building2,
  Train,
  Package,
  Bus,
  Car,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { myTripsDemoData, MyTripBooking } from '@/data/travelData';

export default function MyTripsPage() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');

  const filteredTrips = myTripsDemoData.filter((t) => t.status === activeTab);

  const iconMap: Record<string, React.ElementType> = {
    Flight: Plane,
    Hotel: Building2,
    Train: Train,
    Holiday: Package,
    Bus: Bus,
    Cab: Car,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Bar */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-12">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Client Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#faf9f6] tracking-tight mb-3">
            My Journeys & <span className="italic font-light text-[#c5a880]">Reservations</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#eae6df]/70 font-light max-w-2xl leading-relaxed">
            View confirmed private itineraries, bespoke stays, and confirmed reservations.
          </p>

          {/* Trip Tabs */}
          <div className="flex items-center gap-2.5 mt-8 border-b border-[#c5a880]/15 pb-4">
            {(['Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#c5a880] text-[#0c0e14] shadow-lg shadow-[#c5a880]/20'
                    : 'bg-[#12151e] text-[#eae6df]/70 hover:text-[#f4f2ed] border border-[#c5a880]/15'
                }`}
              >
                {tab} ({myTripsDemoData.filter((t) => t.status === tab).length})
              </button>
            ))}
          </div>
        </div>

        {/* Trips Cards List */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-6">
          {filteredTrips.length === 0 ? (
            <div className="p-12 rounded-3xl bg-[#12151e] border border-[#c5a880]/15 text-center space-y-4">
              <Briefcase className="w-10 h-10 text-[#c5a880]/40 mx-auto" />
              <h3 className="font-serif text-2xl text-[#faf9f6]">No {activeTab} Journeys</h3>
              <p className="text-xs text-[#eae6df]/60 font-light max-w-md mx-auto">
                Ready to embark on your next bespoke adventure? Speak with your private travel designer.
              </p>
              <Link
                href="/journeys"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase hover:bg-[#b89768] transition-all mt-2"
              >
                <span>Explore Signature Journeys</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            filteredTrips.map((trip) => {
              const Icon = iconMap[trip.type] || Plane;
              return (
                <div
                  key={trip.id}
                  className="rounded-3xl bg-[#12151e] border border-[#c5a880]/20 p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 shadow-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                          {trip.type}
                        </span>
                        <span className="text-[10px] bg-[#0c0e14] px-2.5 py-0.5 rounded-full text-[#eae6df]/70 font-mono">
                          Ref: {trip.bookingId}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#faf9f6]">
                        {trip.title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs text-[#eae6df]/60 font-light">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                          {trip.dates}
                        </span>
                        <span>•</span>
                        <span>{trip.travellers.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end justify-between gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#c5a880]/15">
                    <div className="sm:text-right">
                      <span className="text-[9px] uppercase tracking-widest text-[#eae6df]/50 block">Amount</span>
                      <span className="font-serif text-2xl font-semibold text-[#faf9f6]">
                        ₹{trip.amount.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase tracking-widest font-semibold">
                        {trip.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
