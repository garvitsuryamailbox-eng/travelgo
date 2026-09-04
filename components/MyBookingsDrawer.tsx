"use client";

import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Plane,
  Building2,
  Car,
  Palmtree,
  QrCode,
  Download,
  Trash2,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  MessageCircle,
  Clock,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

interface BookingItem {
  id: string;
  pnr: string;
  type: "flight" | "hotel" | "cab" | "package" | "train";
  itemTitle: string;
  subtitle: string;
  date: string;
  travelerName: string;
  email: string;
  phone: string;
  finalPrice: number;
  currency: string;
  status: string;
  bookingRef: string;
  terminal?: string;
  refundShield?: boolean;
  createdAt: string;
}

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingItem[];
  onCancelBooking: (id: string) => void;
  currency: "INR" | "USD";
}

export default function MyBookingsDrawer({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  currency
}: MyBookingsDrawerProps) {
  if (!isOpen) return null;

  const [refundAlert, setRefundAlert] = useState<string | null>(null);

  const formatPrice = (priceINR: number) => {
    if (currency === "USD") {
      return `$${Math.round(priceINR / 85)}`;
    }
    return `₹${priceINR.toLocaleString("en-IN")}`;
  };

  const handleInstantCancelWithRefund = (b: BookingItem) => {
    if (
      confirm(
        `Cancel reservation (PNR: ${b.pnr})?\n\nInstant Refund Shield is ACTIVE: 100% of ${formatPrice(
          b.finalPrice
        )} will be auto-credited to your UPI/Bank account in under 2 minutes.`
      )
    ) {
      onCancelBooking(b.id);
      setRefundAlert(`100% Full Refund of ${formatPrice(b.finalPrice)} processed instantly for PNR ${b.pnr}!`);
      setTimeout(() => setRefundAlert(null), 5000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">My Trips &amp; Itineraries</h2>
              <p className="text-[11px] text-slate-400">{bookings.length} active reservation(s) &bull; DigiYatra Ready</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Refund Toast Alert */}
        {refundAlert && (
          <div className="m-4 p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-xl animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{refundAlert}</span>
          </div>
        )}

        {/* Bookings List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {bookings.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No Bookings Yet</h3>
              <p className="text-xs text-slate-400 max-w-xs">
                Search and book flights, hotels in Gurgaon, cabs, or holiday packages to view your confirmed itineraries and DigiYatra passes here.
              </p>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-4 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">
                      {b.type}
                    </span>
                    <span className="font-mono text-xs font-bold text-cyan-400">PNR: {b.pnr}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    {b.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{b.itemTitle}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{b.subtitle}</p>
                  {b.terminal && (
                    <span className="inline-block text-[10px] text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded-md mt-1 font-semibold">
                      📍 {b.terminal}
                    </span>
                  )}
                </div>

                {/* Web Check-in live status */}
                <div className="flex items-center justify-between bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Web Check-in:</span>
                  </div>
                  <button
                    onClick={() => alert(`Web check-in auto-registered for PNR ${b.pnr}. Seat assigned: 12F.`)}
                    className="text-[11px] font-bold text-blue-400 hover:underline"
                  >
                    Open Fast Check-In →
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/40">
                  <div>
                    <span className="text-slate-500 block">Traveler:</span>
                    <span className="text-slate-200 font-semibold truncate">{b.travelerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Amount Paid:</span>
                    <span className="text-emerald-400 font-bold">{formatPrice(b.finalPrice)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => alert(`Sent E-Ticket & Boarding pass to WhatsApp at ${b.phone}!`)}
                      className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                      title="Send to WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => alert(`Downloading official PDF voucher for PNR ${b.pnr}`)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 100% Instant Refund Cancel Button */}
                  <button
                    onClick={() => handleInstantCancelWithRefund(b)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[11px] font-bold transition-colors"
                  >
                    <Zap className="w-3 h-3 text-rose-400" />
                    <span>Instant Cancel &amp; Refund</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
