'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  Search,
  ShieldCheck,
  Zap,
  AlertCircle
} from 'lucide-react';

export default function CabSearch() {
  const router = useRouter();
  const [cabTripType, setCabTripType] = useState<'Outstation' | 'Airport' | 'Hourly'>('Outstation');
  const [pickup, setPickup] = useState('Delhi NCR (Any Location)');
  const [dropLocation, setDropLocation] = useState('Agra / Taj Mahal');
  const [pickupDate, setPickupDate] = useState('2026-09-15');
  const [pickupTime, setPickupTime] = useState('06:00 AM');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup.trim().toLowerCase() === dropLocation.trim().toLowerCase()) {
      setError('Pickup and drop locations must be different.');
      return;
    }
    setError(null);
    router.push(
      `/cabs?type=${encodeURIComponent(cabTripType)}&pickup=${encodeURIComponent(pickup)}&drop=${encodeURIComponent(dropLocation)}&date=${pickupDate}&time=${encodeURIComponent(pickupTime)}`
    );
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      {/* Top Options Bar: Cab Mode */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'Outstation', label: 'Outstation (One-Way & Round Trip)' },
            { id: 'Airport', label: 'Airport Transfer' },
            { id: 'Hourly', label: 'Hourly Rental' },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => {
                setCabTripType(type.id as any);
                setError(null);
                if (type.id === 'Airport') {
                  setPickup('Indira Gandhi Intl Airport (DEL)');
                  setDropLocation('Gurugram Sector 29');
                } else if (type.id === 'Hourly') {
                  setPickup('Bengaluru MG Road');
                  setDropLocation('8 Hours / 80 Kms Package');
                } else {
                  setPickup('Delhi NCR');
                  setDropLocation('Agra / Taj Mahal');
                }
              }}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                cabTripType === type.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Toll & Taxes Included · No Surge Pricing</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Pickup Location */}
        <div className="md:col-span-4">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Pickup Location / Landmark
            </span>
            <input
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Airport, Hotel, Home address"
              className="w-full bg-transparent font-black text-slate-900 text-base outline-none mt-1"
            />
            <span className="text-[11px] text-slate-400 block truncate">
              Chauffeur meets at doorstep
            </span>
          </div>
        </div>

        {/* Drop Location */}
        <div className="md:col-span-4">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Drop Destination / City
            </span>
            <input
              type="text"
              value={dropLocation}
              onChange={(e) => {
                setDropLocation(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Agra, Jaipur, Airport terminal"
              className="w-full bg-transparent font-black text-slate-900 text-base outline-none mt-1"
            />
            <span className="text-[11px] text-slate-400 block truncate">
              Direct highway / city drop
            </span>
          </div>
        </div>

        {/* Date & Time */}
        <div className="md:col-span-4 grid grid-cols-2 gap-2">
          {/* Pickup Date */}
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Pickup Date
            </span>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            />
          </div>

          {/* Pickup Time */}
          <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Pickup Time
            </span>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none mt-1 cursor-pointer"
            >
              <option value="05:00 AM">05:00 AM (Early)</option>
              <option value="06:00 AM">06:00 AM</option>
              <option value="07:30 AM">07:30 AM</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="08:00 PM">08:00 PM (Night)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Validation Error Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Search CTA */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black text-base shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/35 transition-all active:scale-95 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span>SEARCH CABS</span>
        </button>
      </div>
    </form>
  );
}
