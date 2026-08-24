'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Train,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Coffee,
  AlertCircle
} from 'lucide-react';
import { trainsData, TrainItem } from '@/data/travelData';

function TrainsContent() {
  const searchParams = useSearchParams();
  const fromCode = searchParams.get('from') || 'NDLS';
  const toCode = searchParams.get('to') || 'BSB';
  const journeyDate = searchParams.get('date') || '2026-09-16';

  const [selectedClassCodes, setSelectedClassCodes] = useState<Record<string, string>>({
    'tr-1': 'CC',
    'tr-2': '3A',
    'tr-3': 'CC',
    'tr-4': '3A',
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xl font-black">
                    <span>{fromCode}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                    <span>{toCode}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Date: {journeyDate} · General Quota · Instant IRCTC Verification
                  </div>
                </div>
              </div>

              <Link
                href="/#search-widget"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-purple-400 border border-slate-700 transition-colors"
              >
                Modify Search
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
          {/* Reassurance Banner */}
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 text-xs flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>0% Gateway Fee On First Train Booking with Code: <strong>RAILZERO</strong></span>
            </div>
            <span className="text-[11px] text-purple-700">✓ Free cancellation protection available</span>
          </div>

          {/* Trains Listing */}
          <div className="space-y-4">
            {trainsData.map((train) => {
              const activeClassCode = selectedClassCodes[train.id] || train.classes[0]?.code;
              const selectedClass = train.classes.find((c) => c.code === activeClassCode) || train.classes[0];

              return (
                <div
                  key={train.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all p-6 sm:p-7 overflow-hidden"
                >
                  {/* Top Train Name & Times */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl font-black text-slate-900">{train.trainName}</span>
                        <span className="font-mono text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          #{train.trainNumber}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Runs On: {train.runningDays.join(', ')} · {train.pantryAvailable ? 'Pantry Car Available' : 'No Pantry'}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-left">
                        <div className="text-lg font-black text-slate-900">{train.departureTime}</div>
                        <div className="text-xs text-slate-500 font-bold">{train.fromCode}</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[11px] text-slate-400 font-medium">{train.duration}</span>
                        <div className="w-20 sm:w-28 h-0.5 bg-slate-200 my-1 relative">
                          <Train className="w-3.5 h-3.5 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" />
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">{train.arrivalTime}</div>
                        <div className="text-xs text-slate-500 font-bold">{train.toCode}</div>
                      </div>
                    </div>
                  </div>

                  {/* Class Availability Tabs */}
                  <div className="pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Select Class & Check Real-time Availability
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {train.classes.map((cls) => {
                        const isSelected = activeClassCode === cls.code;
                        return (
                          <div
                            key={cls.code}
                            onClick={() =>
                              setSelectedClassCodes((prev) => ({
                                ...prev,
                                [train.id]: cls.code,
                              }))
                            }
                            className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-purple-600 bg-purple-50/50 shadow-md'
                                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-extrabold text-sm text-slate-900">{cls.className}</span>
                              <span className="font-black text-sm text-purple-700">₹{cls.fare}</span>
                            </div>
                            <div
                              className={`text-xs font-bold mt-1 ${
                                cls.status === 'AVAILABLE'
                                  ? 'text-emerald-600'
                                  : cls.status === 'RAC'
                                  ? 'text-amber-600'
                                  : 'text-rose-600'
                              }`}
                            >
                              {cls.statusText}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              Updated {cls.updatedMinsAgo}m ago
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Book Selected Class CTA */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500">Selected Class:</span>
                        <span className="font-bold text-sm text-slate-900 ml-1.5">
                          {selectedClass.className} ({selectedClass.code})
                        </span>
                        <span className="ml-2 font-black text-lg text-purple-700">
                          ₹{selectedClass.fare}
                        </span>
                      </div>

                      <Link
                        href={`/booking?type=train&id=${train.id}&class=${selectedClass.code}`}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all active:scale-95 cursor-pointer"
                      >
                        Book {selectedClass.code} Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function TrainsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading trains...</div>}>
      <TrainsContent />
    </Suspense>
  );
}

