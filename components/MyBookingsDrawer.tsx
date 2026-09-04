"use client";

import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Plane,
  Building2,
  Car,
  Palmtree,
  Download,
  Trash2,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  Zap
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
        `Cancel reservation (PNR: ${b.pnr})?\n\nInstant 100% Refund of ${formatPrice(
          b.finalPrice
        )} will be credited directly to your UPI/Bank in under 2 minutes.`
      )
    ) {
      onCancelBooking(b.id);
      setRefundAlert(`100% Full Refund of ${formatPrice(b.finalPrice)} processed instantly for PNR ${b.pnr}!`);
      setTimeout(() => setRefundAlert(null), 5000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 text-slate-900 border-l border-slate-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">My Trips &amp; Itineraries</h2>
              <p className="text-[11px] text-slate-500">{bookings.length} active reservation(s)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Refund Toast Alert */}
        {refundAlert && (
          <div className="m-4 p-3.5 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-md">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{refundAlert}</span>
          </div>
        )}

        {/* Bookings List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {bookings.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-black text-slate-900">No Bookings Yet</h3>
              <p className="text-xs text-slate-500 max-w-xs">
                Search and book flights, stays in Gurgaon, or airport cabs to manage your confirmed vouchers here.
              </p>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-4 space-y-3 hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                      {b.type}
                    </span>
                    <span className="font-mono text-xs font-black text-slate-900">PNR: {b.pnr}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    {b.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-black text-slate-900 leading-tight">{b.itemTitle}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{b.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Passenger:</span>
                    <span className="text-slate-900 font-bold truncate">{b.travelerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Amount Paid:</span>
                    <span className="text-emerald-700 font-black">{formatPrice(b.finalPrice)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => alert(`Sent E-Ticket to WhatsApp at ${b.phone}!`)}
                      className="p-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs flex items-center gap-1"
                      title="Send to WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => alert(`Downloading PDF for PNR ${b.pnr}`)}
                      className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleInstantCancelWithRefund(b)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Cancel &amp; Refund</span>
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
