"use client";

import React from "react";
import {
  X,
  Printer,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Plane,
  Building2,
  Car,
  Train,
  Download,
  Share2
} from "lucide-react";

interface PrintableTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: any;
  currency?: "INR" | "USD";
}

export default function PrintableTicketModal({
  isOpen,
  onClose,
  booking,
  currency = "INR"
}: PrintableTicketModalProps) {
  if (!isOpen || !booking) return null;

  const formatPrice = (priceINR: number) => {
    if (currency === "USD") {
      return `$${Math.round(priceINR / 85)}`;
    }
    return `₹${priceINR?.toLocaleString("en-IN") || "0"}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const type = booking.type || "flight";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 text-slate-900 my-auto">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-black tracking-wider uppercase text-slate-200">
              Official TravelGo Confirmed Itinerary
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Ticket Card Body */}
        <div className="p-6 sm:p-8 space-y-6 print:p-0 bg-[#fbfcfd]" id="printable-area">
          {/* Header Banner */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  TG
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Travel<span className="text-blue-600">Go</span> Pass
                  </h1>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    TravelGo Smart Engine &bull; Verified E-Ticket
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                ✓ CONFIRMED &amp; ISSUED
              </span>
              <div className="text-[11px] font-mono text-slate-500 mt-1">
                Issued: {new Date(booking.createdAt || Date.now()).toLocaleDateString("en-IN")}
              </div>
            </div>
          </div>

          {/* Main Flight / Hotel / Train Highlights */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  {type === "flight" && <Plane className="w-5 h-5" />}
                  {type === "hotel" && <Building2 className="w-5 h-5" />}
                  {type === "cab" && <Car className="w-5 h-5" />}
                  {type === "train" && <Train className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">{booking.itemTitle}</h2>
                  <p className="text-xs text-slate-500 font-semibold">{booking.subtitle}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Booking PNR</span>
                <span className="text-base sm:text-lg font-mono font-black text-blue-600 tracking-wider">
                  {booking.pnr}
                </span>
              </div>
            </div>

            {/* Itinerary Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-100 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Primary Traveler</span>
                <span className="font-bold text-slate-900">{booking.travelerName || "Garvit Surya"}</span>
                <span className="text-[11px] text-slate-500 block truncate">{booking.email}</span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Date / Schedule</span>
                <span className="font-bold text-slate-900">{booking.date || "Sep 15, 2026"}</span>
                <span className="text-[11px] text-slate-500 block">{booking.terminal || "Fast Track Gate"}</span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Booking Reference</span>
                <span className="font-mono font-bold text-slate-800">{booking.bookingRef || booking.id}</span>
                <span className="text-[11px] text-emerald-600 font-bold block">100% Refund Shield</span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Amount Paid</span>
                <span className="text-base font-black text-emerald-700 block">
                  {formatPrice(booking.finalPrice)}
                </span>
                <span className="text-[10px] text-slate-400">Taxes &amp; Fees Included</span>
              </div>
            </div>
          </div>

          {/* DigiYatra Barcode & Check-in QR */}
          <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl border border-slate-300 shadow-sm shrink-0">
                <QrCode className="w-14 h-14 text-slate-900" />
              </div>
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>DigiYatra &bull; Fast-Track Airport Entry</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Scan this QR code directly at Delhi IGI Airport / Hotel Reception / Train Gate.
                </p>
                <div className="font-mono text-[10px] text-slate-500 font-semibold">
                  DIGI-PASS: TG-{booking.pnr}-FAST
                </div>
              </div>
            </div>

            <div className="text-center sm:text-right shrink-0">
              <div className="font-mono text-[9px] tracking-widest text-slate-400 uppercase">
                SECURITY BARCODE
              </div>
              <div className="h-8 w-36 bg-slate-900 rounded flex items-center justify-center text-white text-[9px] font-mono tracking-widest select-none">
                |||| | ||||| || |||| |||
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-0.5">STATUS: ISSUED &amp; VERIFIED</div>
            </div>
          </div>

          {/* Important Travel Advisory */}
          <div className="text-[11px] text-slate-500 space-y-1 border-t border-slate-200 pt-3">
            <div className="font-bold text-slate-700">Important Advisory &amp; Support:</div>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Carry a valid Government photo ID (Aadhaar / Passport / Driving License) for verification.</li>
              <li>Free cancellation and instant 100% refund is protected under TravelGo Assurance.</li>
              <li>24x7 Customer Support &amp; Concierge: 1800-102-8747 | Email: support@travelgo.in</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between print:hidden">
          <div className="text-xs text-slate-500">
            Need help with this booking? <strong className="text-blue-600">Contact 24/7 Helpline</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Boarding Pass</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
