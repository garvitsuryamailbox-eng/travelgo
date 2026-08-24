'use client';

import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  User,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { brandConfig } from '@/config/brandConfig';

interface PrivateSlotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivateSlotBookingModal({
  isOpen,
  onClose,
}: PrivateSlotBookingModalProps) {
  const [step, setStep] = useState<'selection' | 'confirmed'>('selection');
  const [consultationMode, setConsultationMode] = useState<'video' | 'phone' | 'office'>('video');
  const [selectedOffice, setSelectedOffice] = useState('London Mayfair');
  const [selectedDesigner, setSelectedDesigner] = useState('Senior European & Mediterranean Specialist');
  
  // Date & Time Slots
  const [selectedDate, setSelectedDate] = useState('2026-09-02');
  const [selectedTime, setSelectedTime] = useState('03:30 PM');
  
  // Client Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [slotCode] = useState(() => 'AUR-SLOT-' + Math.floor(10000 + Math.random() * 90000));
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const availableSlots = [
    { time: '10:00 AM', label: 'Morning Slot' },
    { time: '11:30 AM', label: 'Morning Slot' },
    { time: '02:00 PM', label: 'Afternoon Slot' },
    { time: '03:30 PM', label: 'Afternoon Slot' },
    { time: '05:00 PM', label: 'Evening Slot' },
    { time: '07:30 PM', label: 'Late Evening Slot' },
  ];

  const handleBookSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: slotCode,
          type: 'VIP Consultation Slot',
          title: `Private Advisory Session (${consultationMode.toUpperCase()})`,
          amount: 0,
          customer: {
            name,
            email,
            phone: `${countryCode} ${phone}`,
          },
          bookingDate: new Date().toISOString(),
          paymentMethod: 'Complimentary Client Advisory',
          slotDetails: {
            date: selectedDate,
            time: selectedTime,
            mode: consultationMode,
            specialist: selectedDesigner,
            office: consultationMode === 'office' ? selectedOffice : undefined,
          },
        }),
      });
    } catch {
      // Local fallback
    } finally {
      setLoading(false);
      setStep('confirmed');
    }
  };

  const handleCopySlot = () => {
    navigator.clipboard.writeText(slotCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#12151e] rounded-3xl shadow-2xl border border-[#c5a880]/30 overflow-hidden text-[#f4f2ed] animate-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0c0e14] via-[#161922] to-[#0c0e14] p-6 text-center relative border-b border-[#c5a880]/20 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/20 text-[10px] text-[#c5a880] font-bold uppercase tracking-widest mb-1.5 border border-[#c5a880]/30">
            <Sparkles className="w-3 h-3" />
            <span>Private Client Calendar</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#faf9f6]">
            {step === 'selection' ? 'Book Your Dedicated Advisory Slot' : 'Advisory Slot Confirmed'}
          </h3>
          <p className="text-xs text-[#eae6df]/70 font-light mt-0.5">
            {step === 'selection'
              ? 'Select your preferred consultation channel, date, and private time slot.'
              : 'Your dedicated Private Travel Director has reserved your calendar slot.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {step === 'selection' ? (
            <form onSubmit={handleBookSlot} className="space-y-6">
              {/* 1. Consultation Channel Mode */}
              <div className="space-y-2.5">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                  1. Preferred Consultation Channel
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'video', label: 'Encrypted Video Suite', icon: Video, sub: 'Global Secure Link' },
                    { id: 'phone', label: 'Private Direct Line', icon: Phone, sub: 'Direct Concierge Callback' },
                    { id: 'office', label: 'Regional Private Office', icon: MapPin, sub: 'In-Person Mayfair / Mumbai' },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const active = consultationMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setConsultationMode(mode.id as 'video' | 'phone' | 'office')}
                        className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between gap-1.5 transition-all cursor-pointer ${
                          active
                            ? 'bg-[#c5a880] text-[#0c0e14] border-[#c5a880] font-semibold shadow-lg shadow-[#c5a880]/20'
                            : 'bg-[#0c0e14] border-white/10 text-[#eae6df]/80 hover:border-[#c5a880]/40'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-[#0c0e14]' : 'text-[#c5a880]'}`} />
                        <div>
                          <div className="text-xs font-bold leading-tight">{mode.label}</div>
                          <div className="text-[9px] opacity-75">{mode.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Office Selector if in-person */}
              {consultationMode === 'office' && (
                <div className="space-y-1.5 animate-in fade-in">
                  <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                    Select Private Regional Office
                  </label>
                  <select
                    value={selectedOffice}
                    onChange={(e) => setSelectedOffice(e.target.value)}
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none cursor-pointer"
                  >
                    <option value="Mumbai Nariman Point Desk">Mumbai — Maker Chambers VI, Nariman Point</option>
                    <option value="New Delhi Diplomatic Desk">New Delhi — Diplomatic Enclave, Chanakyapuri</option>
                    <option value="London Mayfair Desk">London — 14 Berkeley Square, Mayfair</option>
                    <option value="Zurich Private Office">Zurich — Bahnhofstrasse 28</option>
                    <option value="New York Fifth Avenue Desk">New York — 767 Fifth Avenue</option>
                  </select>
                </div>
              )}

              {/* 2. Specialty & Designer Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                  2. Travel Specialty Focus
                </label>
                <select
                  value={selectedDesigner}
                  onChange={(e) => setSelectedDesigner(e.target.value)}
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none cursor-pointer"
                >
                  <option value="Senior European & Mediterranean Specialist">European Coastlines, Villas & Superyachts</option>
                  <option value="Indian Royal Palaces & Wilderness Specialist">Rajasthan Royal Palaces & Safari Camps</option>
                  <option value="Swiss Alps & Alpine Glacier Director">Swiss Alps, Zermatt & Heli-Skiing Expeditions</option>
                  <option value="Private Islands & Oceanic Buyouts Director">Private Islands, Atoll Buyouts & Aviation</option>
                </select>
              </div>

              {/* 3. Date & Time Slot Grid */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                  3. Select Date & Private Time Slot
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-[#eae6df]/60 block mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#0c0e14] border border-[#c5a880]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-[#eae6df]/60 block mb-1">
                      Available Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {availableSlots.map((s) => (
                        <button
                          key={s.time}
                          type="button"
                          onClick={() => setSelectedTime(s.time)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                            selectedTime === s.time
                              ? 'bg-[#c5a880] text-[#0c0e14] shadow-md'
                              : 'bg-[#0c0e14] border border-white/10 text-[#eae6df]/70 hover:border-[#c5a880]/40'
                          }`}
                        >
                          {s.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Client Contact Details */}
              <div className="space-y-3 pt-2 border-t border-[#c5a880]/15">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                  4. Your Details for the Calendar Invite
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Legal Name"
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Private Email (for Calendar Invite)"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                  />

                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-[#0c0e14] border border-[#c5a880]/20 rounded-xl px-2.5 py-2.5 text-xs text-[#c5a880] outline-none shrink-0 cursor-pointer"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>

                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Direct Mobile"
                      className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                    />
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional notes or destination ideas for our travel designer..."
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/20 rounded-xl p-3 text-xs text-[#f4f2ed] outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <span>Lock In Consultation Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-[#eae6df]/50 font-light mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Strict Non-Disclosure Protocol · Zero Obligation Advisory</span>
                </p>
              </div>
            </form>
          ) : (
            /* Slot Confirmation Success State */
            <div className="p-4 sm:p-6 text-center space-y-6 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full border border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold">
                  Slot Reservation Code
                </span>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-serif text-3xl text-[#faf9f6] tracking-wider font-bold">
                    {slotCode}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySlot}
                    className="p-2 rounded-xl bg-[#0c0e14] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#c5a880] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/20 text-xs text-[#eae6df]/85 font-light space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Guest:</span>
                  <span className="font-medium text-[#faf9f6]">{name || 'Private Client'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span className="font-medium text-[#c5a880]">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Channel:</span>
                  <span className="font-medium text-[#faf9f6] capitalize">{consultationMode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Assigned Director:</span>
                  <span className="font-medium text-[#faf9f6]">{selectedDesigner}</span>
                </div>
              </div>

              <p className="text-xs text-[#eae6df]/70 font-light leading-relaxed">
                A calendar invitation (.ics) and direct link have been dispatched to <strong>{email}</strong>.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs uppercase tracking-widest transition-all hover:bg-[#b89768] cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
