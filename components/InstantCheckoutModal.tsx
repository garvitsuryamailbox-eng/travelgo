'use client';

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  QrCode,
  Building2,
  Plane,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface CheckoutItem {
  title: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  dates: string;
  location: string;
}

interface InstantCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: CheckoutItem;
}

export default function InstantCheckoutModal({
  isOpen,
  onClose,
  item = {
    title: 'Taj Exotica Resort & Spa · Luxury Sea View Villa',
    category: 'Stays & Resorts',
    originalPrice: 9999,
    discountedPrice: 4999,
    dates: '28 Oct – 31 Oct (3 Nights)',
    location: 'Benaulim Beach, South Goa',
  },
}: InstantCheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [copied, setCopied] = useState(false);
  const [pnrNumber, setPnrNumber] = useState('TG-' + Math.floor(100000 + Math.random() * 900000));

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: pnrNumber,
          type: item.category,
          title: item.title,
          amount: item.discountedPrice,
          paymentMethod: paymentMethod === 'upi' ? 'UPI / QR' : paymentMethod === 'card' ? 'Credit Card' : 'Net Banking',
          customer: {
            name: 'Demo Guest',
            email: 'guest@travelgo-demo.com',
            phone: '+91 9876543210'
          }
        }),
      });
    } catch (err) {
      console.warn('Booking API save:', err);
    } finally {
      setLoading(false);
      setStep('success');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pnrNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131827] border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#0e1320]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
              ⚡
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Instant Travel Booking Demo</h3>
              <span className="text-[11px] text-slate-400">Simulated Safe Gateway</span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePay} className="p-6 space-y-5">
            {/* Booking Summary Box */}
            <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800/80 space-y-2.5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.location} · {item.dates}</p>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                  50% OFF
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Payable Amount:</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 line-through">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="font-black text-lg text-emerald-400">
                    ₹{item.discountedPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Payment Mode (Simulated)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: QrCode },
                  { id: 'card', label: 'Cards', icon: CreditCard },
                  { id: 'netbanking', label: 'NetBanking', icon: Building2 },
                ].map((pm) => {
                  const Icon = pm.icon;
                  const active = paymentMethod === pm.id;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        active
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                          : 'bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{pm.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mock Fields based on method */}
            {paymentMethod === 'upi' ? (
              <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800 text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white text-slate-950 font-mono text-xs font-bold">
                  [ SIMULATED UPI QR CODE ]
                </div>
                <p className="text-xs text-slate-400">
                  Scan with Google Pay, PhonePe, Paytm or enter test VPA: <strong className="text-white">user@okhdfcbank</strong>
                </p>
              </div>
            ) : paymentMethod === 'card' ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Card Number</label>
                  <input
                    type="text"
                    defaultValue="4111 2222 3333 4444"
                    readOnly
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-white text-xs font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Expiry</label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      readOnly
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-white text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">CVV</label>
                    <input
                      type="password"
                      defaultValue="888"
                      readOnly
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-white text-xs font-mono"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-[#0b0f19] border border-slate-800 text-xs text-slate-300">
                Selected Bank: <strong className="text-emerald-400">HDFC Bank (Direct Gateway Demo)</strong>
              </div>
            )}

            {/* Security Guarantee Badge */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>256-Bit SSL Encrypted Instant Demo Transaction</span>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>⚡ Complete Demo Booking (₹{item.discountedPrice.toLocaleString('en-IN')})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation / E-Ticket Voucher */
          <div className="p-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-white">Booking Confirmed!</h4>
              <p className="text-xs text-slate-400 mt-1">
                Your instant e-ticket voucher has been confirmed and saved to your trips.
              </p>
            </div>

            {/* PNR Box */}
            <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Booking Reference / PNR:</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-black text-emerald-400">{pnrNumber}</span>
                  <button
                    onClick={handleCopy}
                    className="p-1 text-slate-400 hover:text-white rounded"
                    title="Copy PNR"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-left text-xs text-slate-300">
                <div><strong>Item:</strong> {item.title}</div>
                <div><strong>Amount Paid:</strong> ₹{item.discountedPrice.toLocaleString('en-IN')} (Demo)</div>
                <div><strong>Status:</strong> <span className="text-emerald-400 font-bold">Confirmed & Guaranteed</span></div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
              >
                Close Window
              </button>
              <button
                type="button"
                onClick={() => alert(`Downloaded E-Ticket Voucher for ${pnrNumber}`)}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Save Voucher</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
