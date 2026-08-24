'use client';

import React, { useState } from 'react';
import {
  Plane,
  Building2,
  Train,
  Bus,
  Package,
  Car,
  Compass,
  Sparkles
} from 'lucide-react';
import FlightSearch from './FlightSearch';
import HotelSearch from './HotelSearch';
import TrainSearch from './TrainSearch';
import BusSearch from './BusSearch';
import HolidaySearch from './HolidaySearch';
import CabSearch from './CabSearch';

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'trains' | 'buses' | 'holidays' | 'cabs'>('flights');

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane, color: 'text-sky-500', activeBg: 'bg-sky-50 text-sky-700' },
    { id: 'hotels', label: 'Hotels', icon: Building2, color: 'text-teal-500', activeBg: 'bg-teal-50 text-teal-700' },
    { id: 'trains', label: 'Trains', icon: Train, color: 'text-amber-500', activeBg: 'bg-amber-50 text-amber-700' },
    { id: 'buses', label: 'Buses', icon: Bus, color: 'text-purple-500', activeBg: 'bg-purple-50 text-purple-700' },
    { id: 'holidays', label: 'Holidays', icon: Package, color: 'text-rose-500', activeBg: 'bg-rose-50 text-rose-700' },
    { id: 'cabs', label: 'Cabs', icon: Car, color: 'text-emerald-500', activeBg: 'bg-emerald-50 text-emerald-700' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto" id="search-widget">
      {/* Category Tabs Switcher */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-3 px-1 py-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-900 shadow-2xl scale-105 border-2 border-sky-400/80 ring-4 ring-sky-500/20'
                  : 'bg-white/15 hover:bg-white/30 backdrop-blur-md text-white hover:text-white border border-white/20'
              }`}
            >
              <div className={`p-1.5 rounded-xl ${isActive ? tab.activeBg : 'bg-white/10'}`}>
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tab.color}`} />
              </div>
              <span className="tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Glass Card Panel */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl shadow-black/40 border border-slate-100 text-slate-800 transition-all duration-300">
        {activeTab === 'flights' && <FlightSearch />}
        {activeTab === 'hotels' && <HotelSearch />}
        {activeTab === 'trains' && <TrainSearch />}
        {activeTab === 'buses' && <BusSearch />}
        {activeTab === 'holidays' && <HolidaySearch />}
        {activeTab === 'cabs' && <CabSearch />}
      </div>
    </div>
  );
}
