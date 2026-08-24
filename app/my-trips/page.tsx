'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  ArrowRight
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
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white py-8 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black">My Trips & Vouchers</h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              View your confirmed flight boarding passes, hotel booking receipts, train e-tickets, and holiday vouchers.
            </p>

            {/* Trip Tabs */}
            <div className="flex items-center gap-2 mt-6">
              {(['Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-teal-500 text-slate-950 font-black shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {tab} Trips ({myTripsDemoData.filter((t) => t.status === tab).length})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
          {filteredTrips.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No {activeTab.toLowerCase()} trips found</h3>
              <p className="text-xs mt-1">Explore our destinations and start planning your next getaway!</p>
              <Link
                href="/#search-widget"
                className="mt-4 inline-block px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs"
              >
                Search Flights & Stays
              </Link>
            </div>
          ) : (
            filteredTrips.map((trip) => {
              const Icon = iconMap[trip.type] || Plane;
              return (
                <div
                  key={trip.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  {/* Left Icon & Details */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                          {trip.type}
                        </span>
                        {trip.status === 'Upcoming' && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            Confirmed
                          </span>
                        )}
                        {trip.status === 'Cancelled' && (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">
                            Cancelled & Refunded
                          </span>
                        )}
                      </div>

                      <h3 className="font-extrabold text-lg text-slate-900">{trip.title}</h3>
                      <p className="text-xs text-slate-500">{trip.subtitle}</p>

                      <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                        <span className="font-semibold">{trip.dates}</span>
                        {trip.pnr && (
                          <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                            PNR: {trip.pnr}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Actions & Amount */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 gap-3">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Amount</span>
                      <span className="text-xl font-black text-slate-900">
                        ₹{trip.amount.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Downloaded e-ticket & tax invoice for ${trip.bookingId}!`)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>E-Ticket</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
