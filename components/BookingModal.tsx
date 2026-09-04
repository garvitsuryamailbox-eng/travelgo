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
  Lock
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
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 text-slate-900">
        {/* Header */}
        <div className="bg-[#051329] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              {type === "flight" && <Plane className="w-4 h-4" />}
              {type === "hotel" && <Building2 className="w-4 h-4" />}
              {type === "cab" && <Car className="w-4 h-4" />}
              {type === "package" && <Palmtree className="w-4 h-4" />}
              {type === "train" && <Plane className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="text-base font-black text-white">
                {step === "confirmed" ? "Booking Confirmed 🎉" : "Complete Your Booking"}
              </h2>
              <p className="text-xs text-blue-200">
                {step === "confirmed" ? "Your verified voucher is ready" : "100% Upfront Price &bull; ₹0 Convenience Fee"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: DETAILS & CHECKOUT */}
        {step === "details" && (
          <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Summary Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                  {type.toUpperCase()} SUMMARY
                </span>
                <h3 className="text-base font-black text-slate-900 mt-0.5">
                  {item.name || item.airline || item.carModel || item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.fromCity ? `${item.fromCity} (${item.departureTime}) → ${item.toCity} (${item.arrivalTime})` : item.area || item.destination}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500">Total Amount:</span>
                <div className="text-xl font-black text-slate-900">{formatPrice(finalPrice)}</div>
              </div>
            </div>

            {/* Refund Shield Toggle */}
            <div
              onClick={() => setRefundShieldEnabled(!refundShieldEnabled)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                refundShieldEnabled
                  ? "bg-emerald-50 border-emerald-300 text-slate-800"
                  : "bg-slate-50 border-slate-200 text-slate-500"
              }`}
            >
              <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center ${
                refundShieldEnabled ? "bg-emerald-600 text-white" : "border border-slate-400"
              }`}>
                {refundShieldEnabled && <CheckCircle2 className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    Instant 100% Refund Shield ({formatPrice(199)})
                  </span>
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    ZERO PENALTY
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  100% full refund auto-credited to your UPI in under 2 minutes if cancelled anytime.
                </p>
              </div>
            </div>

            {/* Passenger Form */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                Primary Passenger / Guest Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 font-bold block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-600 font-bold block mb-1">Mobile Number (for WhatsApp Pass)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold outline-none focus:border-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600 font-bold block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-blue-600" />
                Apply Coupon Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs uppercase font-mono font-bold outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Code applied! You saved {formatPrice(discountAmount)}.
                </div>
              )}
            </div>

            {/* Transparent Price Breakup */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Base Fare:</span>
                <span>{formatPrice(basePrice)}</span>
              </div>
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Airport Taxes &amp; GST (12%):</span>
                <span>{formatPrice(taxesAndFees)}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Convenience Fee:</span>
                <span>₹0 (100% Waived)</span>
              </div>
              {refundShieldEnabled && (
                <div className="flex justify-between text-blue-600 font-bold">
                  <span>100% Refund Shield:</span>
                  <span>+{formatPrice(refundShieldCost)}</span>
                </div>
              )}
              {promoApplied && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Promo Discount:</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-sm text-slate-900">
                <span>Total Payable:</span>
                <span className="text-blue-600 text-base">{formatPrice(finalPrice)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Select Payment Mode
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(["upi", "card", "netbanking"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPaymentMethod(mode)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                      paymentMethod === mode
                        ? "bg-blue-50 border-blue-600 text-blue-600 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {mode === "upi" ? "UPI (GPay / PhonePe)" : mode === "card" ? "Debit / Credit Card" : "Net Banking"}
                  </button>
                ))}
              </div>
            </div>

            {/* Proceed CTA */}
            <button
              onClick={handleConfirmBooking}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>PAY &amp; CONFIRM BOOKING ({formatPrice(finalPrice)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: PROCESSING */}
        {step === "processing" && (
          <div className="p-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin mx-auto" />
            <h3 className="text-lg font-black text-slate-900">Confirming Your Reservation...</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Connecting with reservation engine to allocate confirmed seats and DigiYatra pass.
            </p>
          </div>
        )}

        {/* STEP 3: CONFIRMED E-TICKET */}
        {step === "confirmed" && generatedTicket && (
          <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 font-black">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
              <p className="text-xs text-slate-500">
                PNR: <strong className="text-blue-600 text-sm font-mono">{generatedTicket.pnr}</strong> &bull; Sent to {email}
              </p>
            </div>

            {/* Official E-Ticket Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                    TG
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">TRAVELGO E-TICKET</div>
                    <div className="text-[10px] text-slate-500">DigiYatra Fast Track Enabled</div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                  CONFIRMED &amp; PAID
                </span>
              </div>

              {/* Itinerary Data */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Passenger</span>
                  <div className="font-black text-slate-900 truncate">{generatedTicket.travelerName}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Service</span>
                  <div className="font-black text-slate-900 truncate">{generatedTicket.itemTitle}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Booking PNR</span>
                  <div className="font-mono font-black text-blue-600">{generatedTicket.pnr}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Amount Paid</span>
                  <div className="font-black text-emerald-700">{formatPrice(generatedTicket.finalPrice)}</div>
                </div>
              </div>

              {/* WhatsApp Boarding Pass Action */}
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-900 font-bold">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Receive Boarding Pass on WhatsApp</span>
                </div>
                <button
                  onClick={() => alert(`Boarding pass sent to WhatsApp at ${phone}!`)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black shadow-sm"
                >
                  Send to WhatsApp
                </button>
              </div>

              {/* QR Code */}
              <div className="border-t border-dashed border-slate-200 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white p-1 rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
                    <QrCode className="w-10 h-10 text-slate-900" />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <div>Scan at airport / hotel check-in</div>
                    <div className="font-mono text-[10px]">ID: {generatedTicket.id}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                    title="Print"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => alert("E-Ticket downloaded.")}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Done / Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
