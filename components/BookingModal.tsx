"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Tag,
  ShieldCheck,
  CreditCard,
  QrCode,
  Download,
  Printer,
  Sparkles,
  Plane,
  Building2,
  Car,
  Palmtree,
  User,
  Mail,
  Phone,
  ArrowRight,
  Zap,
  MessageCircle,
  Lock,
  Share2
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  type: "flight" | "hotel" | "cab" | "package" | "train";
  currency: "INR" | "USD";
  onBookingSuccess: (newBooking: any) => void;
  prefilledPromo?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  item,
  type,
  currency,
  onBookingSuccess,
  prefilledPromo = ""
}: BookingModalProps) {
  if (!isOpen || !item) return null;

  // Step state: 'details' -> 'processing' -> 'confirmed'
  const [step, setStep] = useState<"details" | "processing" | "confirmed">("details");

  // Form states
  const [fullName, setFullName] = useState("Garvit Surya");
  const [email, setEmail] = useState("garvit@travelgo.in");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [promoCode, setPromoCode] = useState(prefilledPromo || "TRAVELGO500");
  const [discountAmount, setDiscountAmount] = useState(500);
  const [promoApplied, setPromoApplied] = useState(true);
  const [refundShieldEnabled, setRefundShieldEnabled] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [generatedTicket, setGeneratedTicket] = useState<any>(null);
  const [whatsappSent, setWhatsappSent] = useState(false);

  // Price Calculation
  const basePrice = item.priceINR || item.pricePerNightINR || item.basePriceINR || item.pricePerPersonINR || 5000;
  const taxesAndFees = Math.round(basePrice * 0.12);
  const refundShieldCost = refundShieldEnabled ? 199 : 0;
  const convenienceFee = 0; // ZERO on TravelGo!
  const finalPrice = Math.max(0, basePrice + taxesAndFees + refundShieldCost - (promoApplied ? discountAmount : 0));

  const formatPrice = (priceINR: number) => {
    if (currency === "USD") {
      return `$${Math.round(priceINR / 85)}`;
    }
    return `₹${priceINR.toLocaleString("en-IN")}`;
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === "TRAVELGO500") {
      setDiscountAmount(500);
      setPromoApplied(true);
    } else if (code === "GURGAONWIKI" || code === "MILLENNIUMCITY") {
      setDiscountAmount(Math.round(basePrice * 0.2));
      setPromoApplied(true);
    } else if (code === "CABGO150") {
      setDiscountAmount(150);
      setPromoApplied(true);
    } else {
      alert("Invalid coupon code. Try TRAVELGO500 or GURGAONWIKI");
      setPromoApplied(false);
    }
  };

  const handleConfirmBooking = () => {
    setStep("processing");

    setTimeout(() => {
      const pnr = "TG" + Math.floor(100000 + Math.random() * 900000);
      const bookingData = {
        id: "bk-" + Date.now(),
        pnr,
        type,
        itemTitle: item.name || item.airline || item.carModel || item.title || "Travel Service",
        subtitle: item.fromCity ? `${item.fromCity} → ${item.toCity}` : item.area || item.destination || "Confirmed Trip",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        travelerName: fullName,
        email,
        phone,
        finalPrice,
        currency,
        status: "CONFIRMED",
        bookingRef: item.flightNumber || item.id,
        terminal: item.terminal || "Terminal 3 (DEL)",
        refundShield: refundShieldEnabled,
        createdAt: new Date().toISOString()
      };

      setGeneratedTicket(bookingData);
      onBookingSuccess(bookingData);
      setStep("confirmed");
    }, 1500);
  };

  const handleSendWhatsApp = () => {
    setWhatsappSent(true);
    alert(`E-Ticket & Boarding Pass sent to WhatsApp at ${phone}!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              {type === "flight" && <Plane className="w-4 h-4" />}
              {type === "hotel" && <Building2 className="w-4 h-4" />}
              {type === "cab" && <Car className="w-4 h-4" />}
              {type === "package" && <Palmtree className="w-4 h-4" />}
              {type === "train" && <Plane className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {step === "confirmed" ? "Booking Confirmed & Guaranteed 🎉" : "Zero-Hidden-Fee Checkout"}
              </h2>
              <p className="text-[11px] text-slate-400">
                {step === "confirmed" ? "Your verified voucher & DigiYatra pass is ready" : "All-inclusive transparent pricing with instant refund protection"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: DETAILS & CHECKOUT */}
        {step === "details" && (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Summary Box */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {type.toUpperCase()} SUMMARY
                  </span>
                  {item.terminal && (
                    <span className="px-2 py-0.2 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-500/20">
                      {item.terminal}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {item.name || item.airline || item.carModel || item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.fromCity ? `${item.fromCity} (${item.departureTime}) → ${item.toCity} (${item.arrivalTime})` : item.area || item.destination}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400">Total Payable:</span>
                <div className="text-xl font-black text-emerald-400">{formatPrice(finalPrice)}</div>
              </div>
            </div>

            {/* INSTANT 100% REFUND SHIELD TOGGLE (Solving Cancellation Anxiety) */}
            <div
              onClick={() => setRefundShieldEnabled(!refundShieldEnabled)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                refundShieldEnabled
                  ? "bg-emerald-950/30 border-emerald-500/40 text-slate-200"
                  : "bg-slate-950/40 border-slate-800 text-slate-400"
              }`}
            >
              <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center ${
                refundShieldEnabled ? "bg-emerald-600 text-white" : "border border-slate-600"
              }`}>
                {refundShieldEnabled && <CheckCircle2 className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    Instant 100% Refund Shield ({formatPrice(199)})
                  </span>
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    ZERO PENALTY
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Cancel anytime before departure/check-in and get 100% full refund credited to your UPI in under 2 minutes with no questions asked.
                </p>
              </div>
            </div>

            {/* Passenger Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" />
                Primary Passenger / Guest Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Full Name (as per Govt ID)</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                    placeholder="e.g. Garvit Surya"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Mobile Number (for WhatsApp Boarding Pass)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] text-slate-400 block mb-1">Email (for Instant E-Ticket & Receipt)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                    placeholder="email@domain.com"
                  />
                </div>
              </div>
            </div>

            {/* Promo Code Box */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-blue-400" />
                Apply Promo Code / Coupon
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs uppercase font-mono outline-none focus:border-blue-500"
                  placeholder="Enter Code e.g. TRAVELGO500"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Code applied! You saved {formatPrice(discountAmount)}.
                </div>
              )}
            </div>

            {/* 100% Transparent Price Breakup (No Drip Pricing) */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Base Fare:</span>
                <span>{formatPrice(basePrice)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Airport Taxes & GST (12%):</span>
                <span>{formatPrice(taxesAndFees)}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  Convenience Fee:
                </span>
                <span className="font-bold">₹0 (100% Waived)</span>
              </div>
              {refundShieldEnabled && (
                <div className="flex justify-between text-cyan-300 font-medium">
                  <span>Instant 100% Refund Shield:</span>
                  <span>+{formatPrice(refundShieldCost)}</span>
                </div>
              )}
              {promoApplied && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Promo Discount:</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="border-t border-slate-800 pt-2 flex justify-between font-black text-sm text-white">
                <span>Grand Total (Final Payable):</span>
                <span className="text-emerald-400">{formatPrice(finalPrice)}</span>
              </div>
            </div>

            {/* Payment Modes */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                Select Payment Mode (Simulated Instant Payment)
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(["upi", "card", "netbanking"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPaymentMethod(mode)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                      paymentMethod === mode
                        ? "bg-blue-600/20 border-blue-500 text-blue-400"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    {mode === "upi" ? "UPI (Instant Auto-Refund Ready)" : mode === "card" ? "Credit / Debit Card" : "Net Banking"}
                  </button>
                ))}
              </div>
            </div>

            {/* Proceed CTA */}
            <button
              onClick={handleConfirmBooking}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>PAY & CONFIRM BOOKING ({formatPrice(finalPrice)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: PROCESSING SIMULATION */}
        {step === "processing" && (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mx-auto" />
            <h3 className="text-lg font-bold text-white">Securing Confirmed Reservation & QR Pass...</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Registering your DigiYatra fast-track access and generating verified PNR with zero-cancellation shield.
            </p>
          </div>
        )}

        {/* STEP 3: CONFIRMED TICKET */}
        {step === "confirmed" && generatedTicket && (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Booking Guaranteed & Confirmed!</h3>
              <p className="text-xs text-slate-400">
                PNR: <span className="font-mono font-bold text-blue-400 text-sm">{generatedTicket.pnr}</span> &bull; Sent to {email}
              </p>
            </div>

            {/* E-TICKET CARD */}
            <div className="bg-slate-950 border border-slate-700/80 rounded-3xl p-5 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                    TG
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">TRAVELGO OFFICIAL E-TICKET</div>
                    <div className="text-[10px] text-slate-400">Verified TravelGo Voucher &bull; DigiYatra Enabled</div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black">
                  CONFIRMED & PAID
                </span>
              </div>

              {/* Itinerary details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Passenger</span>
                  <div className="font-bold text-white truncate">{generatedTicket.travelerName}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Service</span>
                  <div className="font-bold text-white truncate">{generatedTicket.itemTitle}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Booking PNR</span>
                  <div className="font-mono font-bold text-cyan-400">{generatedTicket.pnr}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Amount Paid</span>
                  <div className="font-bold text-emerald-400">{formatPrice(generatedTicket.finalPrice)}</div>
                </div>
              </div>

              {/* WhatsApp Boarding Pass Action */}
              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Receive Boarding Pass & Updates on WhatsApp</span>
                </div>
                <button
                  onClick={handleSendWhatsApp}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    whatsappSent ? "bg-emerald-600 text-white" : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                  }`}
                >
                  {whatsappSent ? "Sent to WhatsApp ✓" : "Send to WhatsApp"}
                </button>
              </div>

              {/* QR Code */}
              <div className="border-t border-dashed border-slate-800 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-slate-950" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <div>Scan at airport terminal / hotel reception</div>
                    <div className="font-mono text-[10px] text-slate-400">ID: {generatedTicket.id}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
                    title="Print Ticket"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => alert("E-Ticket downloaded to your device.")}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              Done / Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
