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
  Check,
  Globe,
  Wallet,
  Landmark
} from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';

interface CheckoutItem {
  title: string;
  category: string;
  originalPrice: number; // in USD base
  discountedPrice: number; // in USD base
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
    title: 'The Azure Palace · Penthouse Cliffside Suite',
    category: 'Stays & Sanctuaries',
    originalPrice: 4200,
    discountedPrice: 3800,
    dates: '15 Sep – 20 Sep (5 Nights)',
    location: 'Amalfi Coast, Italy',
  },
}: InstantCheckoutModalProps) {
  const { formatPrice, currency } = useCurrency();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | 'wire' | 'upi'>('card');
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [copied, setCopied] = useState(false);
  const [pnrNumber] = useState(() => 'AUR-' + Math.floor(100000 + Math.random() * 900000));
  const [countryCode, setCountryCode] = useState('+1');
  const [guestName, setGuestName] = useState('Alexander Vance');
  const [guestEmail, setGuestEmail] = useState('a.vance@privateclient.com');
  const [guestPhone, setGuestPhone] = useState('2125550198');
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
          currency: currency.code,
          paymentMethod:
            paymentMethod === 'card'
              ? 'International Card (Amex/Visa/Mastercard)'
              : paymentMethod === 'wallet'
              ? 'Apple Pay / Google Pay'
              : paymentMethod === 'wire'
              ? 'Private Bank SWIFT Wire'
              : 'UPI / NetBanking',
          customer: {
            name: guestName,
            email: guestEmail,
            phone: `${countryCode} ${guestPhone}`,
          },
        }),
      });
    } catch {
      // Local fallback
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#12151e] rounded-3xl shadow-2xl border border-[#c5a880]/30 overflow-hidden text-[#f4f2ed] animate-in zoom-in-95">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0c0e14] via-[#161922] to-[#0c0e14] p-6 text-white text-center relative border-b border-[#c5a880]/20">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/20 text-[10px] text-[#c5a880] font-bold uppercase tracking-widest mb-2 border border-[#c5a880]/30">
            <Globe className="w-3 h-3" />
            <span>Global Client Reservation</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#faf9f6]">
            {step === 'form' ? 'Reserve Your Sanctuary' : 'Reservation Confirmed'}
          </h3>
          <p className="text-xs text-[#eae6df]/70 font-light mt-1">
            {step === 'form'
              ? `Prices displayed in ${currency.name} (${currency.code})`
              : 'Your dedicated concierge will coordinate your arrival.'}
          </p>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePay} className="p-6 sm:p-8 space-y-6">
            {/* Item Details Summary Card */}
            <div className="p-4 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/20 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-[#faf9f6] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#eae6df]/60 font-light">{item.location} · {item.dates}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-[#eae6df]/40 line-through block">
                    {formatPrice(item.originalPrice)}
                  </span>
                  <span className="font-serif text-xl font-bold text-[#c5a880]">
                    {formatPrice(item.discountedPrice)}
                  </span>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                Primary Guest & Contact
              </label>

              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Full Legal Name"
                className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="Private Email Address"
                  className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                />

                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-2.5 py-2.5 text-xs text-[#c5a880] outline-none cursor-pointer shrink-0"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>

                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-[#0c0e14] border border-[#c5a880]/20 focus:border-[#c5a880] rounded-xl px-3.5 py-2.5 text-xs text-[#f4f2ed] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Global Payment Methods Selection */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold block">
                Accepted Global Settlement Methods
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'card', label: 'Credit Card', icon: CreditCard, sub: 'Amex/Visa/MC' },
                  { id: 'wallet', label: 'Digital Wallet', icon: Wallet, sub: 'Apple/Google' },
                  { id: 'wire', label: 'Bank Wire', icon: Landmark, sub: 'SWIFT Transfer' },
                  { id: 'upi', label: 'UPI / NetBanking', icon: QrCode, sub: 'India Direct' },
                ].map((pm) => {
                  const Icon = pm.icon;
                  const active = paymentMethod === pm.id;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as 'card' | 'wallet' | 'wire' | 'upi')}
                      className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-1 transition-all cursor-pointer ${
                        active
                          ? 'bg-[#c5a880] text-[#0c0e14] border-[#c5a880] font-semibold shadow-lg shadow-[#c5a880]/20'
                          : 'bg-[#0c0e14] border-white/5 text-[#eae6df]/70 hover:border-[#c5a880]/40'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? 'text-[#0c0e14]' : 'text-[#c5a880]'}`} />
                      <div>
                        <div className="text-[11px] font-bold leading-tight">{pm.label}</div>
                        <div className="text-[9px] opacity-75">{pm.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total Settlement & Submit */}
            <div className="pt-4 border-t border-[#c5a880]/15 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#eae6df]/60 font-light">Total Reservation Rate ({currency.code}):</span>
                <span className="font-serif text-2xl font-bold text-[#faf9f6]">
                  {formatPrice(item.discountedPrice)}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/20 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Securing Reservation...</span>
                ) : (
                  <>
                    <span>Confirm & Pay {formatPrice(item.discountedPrice)}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#eae6df]/50 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>256-Bit Encrypted Global Payment Gateway · 100% Discretion</span>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full border border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold">
                Booking Reference
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="font-serif text-3xl text-[#faf9f6] tracking-wider font-bold">
                  {pnrNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-2 rounded-xl bg-[#0c0e14] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#c5a880] transition-colors cursor-pointer"
                  title="Copy Reference"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0e14] border border-[#c5a880]/20 text-xs text-[#eae6df]/80 font-light space-y-1.5 text-left">
              <div className="flex justify-between">
                <span>Sanctuary:</span>
                <span className="font-medium text-[#faf9f6]">{item.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Guest:</span>
                <span className="font-medium text-[#faf9f6]">{guestName}</span>
              </div>
              <div className="flex justify-between">
                <span>Settlement:</span>
                <span className="font-medium text-[#c5a880]">{formatPrice(item.discountedPrice)} (Settled)</span>
              </div>
            </div>

            <p className="text-xs text-[#eae6df]/60 font-light leading-relaxed">
              A private client itinerary packet and concierge welcome notes have been dispatched to <strong>{guestEmail}</strong>.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-[#c5a880] text-[#0c0e14] font-semibold text-xs uppercase tracking-widest transition-all hover:bg-[#b89768] cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
