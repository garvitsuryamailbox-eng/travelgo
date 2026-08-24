'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Plane,
  Building2,
  Train,
  Bus,
  Car,
  Package,
  CheckCircle2,
  ShieldCheck,
  Tag,
  ArrowRight,
  User,
  Mail,
  Phone,
  Lock,
  Download,
  Check,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { flightsData, detailedHotelsData, trainsData, busesData, cabsData, holidayPackagesData } from '@/data/travelData';

function BookingContent() {
  const searchParams = useSearchParams();
  const bookingType = searchParams.get('type') || 'flight';
  const bookingIdParam = searchParams.get('id') || 'fl-1';

  // Multi-step progress (1: Details, 2: Add-ons, 3: Review & Pay, 4: Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states
  const [travellerTitle, setTravellerTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('Aditya');
  const [lastName, setLastName] = useState('Verma');
  const [email, setEmail] = useState('aditya.verma@example.com');
  const [mobile, setMobile] = useState('9876543210');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('28');
  
  // Add-ons
  const [optTravelInsurance, setOptTravelInsurance] = useState(true);
  const [optFreeCancellation, setOptFreeCancellation] = useState(false);
  const [mealPref, setMealPref] = useState('Vegetarian Hindu Meal');
  
  // Coupon
  const [couponInput, setCouponInput] = useState('HDFCFEST');
  const [appliedDiscount, setAppliedDiscount] = useState(500);
  const [couponError, setCouponError] = useState<string | null>(null);

  // Booking Summary Data Resolver
  let itemTitle = 'IndiGo Flight: New Delhi (DEL) → Mumbai (BOM)';
  let itemSubtitle = '15 Sep 2026 · Non-stop (6E-2041)';
  let basePrice = 4250;
  let taxes = 650;

  if (bookingType === 'hotel') {
    const hotel = detailedHotelsData.find((h) => h.id === bookingIdParam) || detailedHotelsData[0];
    itemTitle = hotel.name;
    itemSubtitle = `${hotel.location} · 3 Nights Stay`;
    basePrice = hotel.pricePerNight * 3;
    taxes = hotel.taxes * 3;
  } else if (bookingType === 'train') {
    const train = trainsData.find((t) => t.id === bookingIdParam) || trainsData[0];
    itemTitle = `${train.trainName} (${train.trainNumber})`;
    itemSubtitle = `${train.fromStation} → ${train.toStation} · AC 3 Tier`;
    basePrice = 2380;
    taxes = 40;
  } else if (bookingType === 'bus') {
    const bus = busesData.find((b) => b.id === bookingIdParam) || busesData[0];
    itemTitle = `${bus.operator} (${bus.busType})`;
    itemSubtitle = `${bus.from} → ${bus.to} · AC Sleeper`;
    basePrice = bus.price;
    taxes = 85;
  } else if (bookingType === 'cab') {
    const cab = cabsData.find((c) => c.id === bookingIdParam) || cabsData[0];
    itemTitle = `${cab.carName} (${cab.category})`;
    itemSubtitle = 'Delhi NCR → Agra (Toll & State Taxes Included)';
    basePrice = cab.baseFare;
    taxes = 180;
  } else if (bookingType === 'holiday') {
    const pkg = holidayPackagesData.find((p) => p.id === bookingIdParam) || holidayPackagesData[0];
    itemTitle = pkg.title;
    itemSubtitle = `${pkg.duration} · ${pkg.theme}`;
    basePrice = pkg.priceInr;
    taxes = 1450;
  }

  const insuranceCost = optTravelInsurance ? 299 : 0;
  const cancelCost = optFreeCancellation ? 499 : 0;
  const totalAmount = Math.max(0, basePrice + taxes + insuranceCost + cancelCost - appliedDiscount);

  const applyCoupon = () => {
    if (couponInput.toUpperCase() === 'HDFCFEST' || couponInput.toUpperCase() === 'TRAVELGO100' || couponInput.toUpperCase() === 'STAYGO25') {
      setAppliedDiscount(500);
      setCouponError(null);
    } else {
      setAppliedDiscount(0);
      setCouponError('Invalid promo code. Try HDFCFEST or STAYGO25.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Step Progress Header */}
        <div className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-black">Complete Your Travel Booking</h1>
                <p className="text-xs text-slate-400">Step {currentStep} of 4 · 100% Secure Simulated Checkout</p>
              </div>

              {/* Progress Steps Indicators */}
              <div className="flex items-center gap-2 text-xs font-bold">
                {[
                  { num: 1, label: 'Traveller Info' },
                  { num: 2, label: 'Add-ons' },
                  { num: 3, label: 'Review & Pay' },
                  { num: 4, label: 'Confirmed' },
                ].map((s) => (
                  <div
                    key={s.num}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                      currentStep === s.num
                        ? 'bg-sky-500 text-slate-950 font-black shadow-sm'
                        : currentStep > s.num
                        ? 'bg-emerald-950 text-emerald-300'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <span>{s.num}.</span>
                    <span className="hidden md:inline">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Steps Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* STEP 1: Traveller / Guest Details */}
              {currentStep === 1 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Primary Traveller & Contact Information</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Your ticket and SMS updates will be sent to these details.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                      <select
                        value={travellerTitle}
                        onChange={(e) => setTravellerTitle(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none"
                      >
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">First & Middle Name</label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="As on Govt ID / Passport"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Surname"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Add-ons</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Add-ons & Protection */}
              {currentStep === 2 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Customise Your Journey with Add-ons</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Select travel insurance and meal preferences.</p>
                  </div>

                  {/* Travel Protection Card */}
                  <div
                    onClick={() => setOptTravelInsurance(!optTravelInsurance)}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      optTravelInsurance ? 'border-sky-600 bg-sky-50/40' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      {optTravelInsurance ? <Check className="w-4 h-4" /> : <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-sm text-slate-900">Comprehensive Travel Insurance (+₹299)</h4>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Recommended</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Covers flight delay compensation, emergency medical hospitalization up to ₹5,00,000, and lost baggage claims.
                      </p>
                    </div>
                  </div>

                  {/* Free Cancellation Shield */}
                  <div
                    onClick={() => setOptFreeCancellation(!optFreeCancellation)}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      optFreeCancellation ? 'border-teal-600 bg-teal-50/40' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      {optFreeCancellation ? <Check className="w-4 h-4" /> : <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-sm text-slate-900">100% Refund Free Cancellation Shield (+₹499)</h4>
                        <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">Zero Penalty</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Cancel up to 12 hours prior to scheduled departure and get 100% base fare refund without documentation.
                      </p>
                    </div>
                  </div>

                  {/* Meal Preferences */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Special Dietary & Meal Preference</label>
                    <select
                      value={mealPref}
                      onChange={(e) => setMealPref(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none"
                    >
                      <option value="Vegetarian Hindu Meal">Vegetarian Hindu Meal (AVML)</option>
                      <option value="Jain Meal">Jain Meal (VJML)</option>
                      <option value="Non-Vegetarian">Non-Vegetarian Meal</option>
                      <option value="Diabetic / Low Calorie">Diabetic / Low Calorie Meal</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Review & Confirm</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Review & Pay (Simulation) */}
              {currentStep === 3 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Review Booking & Apply Promo Code</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Verify your passenger details before issuing the ticket.</p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">Passenger Name:</span>
                      <span className="font-black text-slate-900">{travellerTitle}. {firstName} {lastName} ({gender}, {age}y)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">Contact Details:</span>
                      <span className="font-semibold text-slate-900">+91 {mobile} · {email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">Meal Preference:</span>
                      <span className="font-semibold text-slate-900">{mealPref}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-700">Travel Protection:</span>
                      <span className="font-semibold text-emerald-600">
                        {optTravelInsurance ? '✓ Insurance Active' : '✗ Declined'}
                      </span>
                    </div>
                  </div>

                  {/* Promo Code Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Have a Promo / Bank Coupon?</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Enter coupon (e.g. HDFCFEST)"
                        className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono font-bold text-sm uppercase outline-none focus:border-sky-500"
                      />
                      <button
                        type="button"
                        onClick={applyCoupon}
                        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <span className="text-xs text-rose-600 font-semibold block mt-1">{couponError}</span>
                    )}
                    {appliedDiscount > 0 && !couponError && (
                      <span className="text-xs text-emerald-600 font-bold block mt-1">
                        ✓ Promo code applied! You saved ₹{appliedDiscount}
                      </span>
                    )}
                  </div>

                  {/* Simulated Payment Trigger */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <span className="font-bold block mb-1">Demo Mode Active:</span>
                    No real money will be charged. Click below to generate your instant confirmed ticket and booking ID.
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await fetch('/api/bookings', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              type: bookingType,
                              title: itemTitle,
                              amount: totalAmount,
                              paymentMethod: 'UPI / Card (Demo Gateway)',
                              customer: {
                                name: `${travellerTitle} ${firstName} ${lastName}`,
                                email,
                                phone: mobile,
                              },
                            }),
                          });
                        } catch (e) {
                          console.warn('API error saving booking:', e);
                        }
                        setCurrentStep(4);
                      }}
                      className="px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white font-black text-base shadow-xl shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
                    >
                      Generate Confirmed Ticket (₹{totalAmount.toLocaleString('en-IN')})
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Confirmed Ticket Voucher */}
              {currentStep === 4 && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl space-y-8 animate-in zoom-in-95">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                      Booking Confirmed
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-2">
                      Have a Wonderful Journey!
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Your confirmed booking voucher has been generated and sent to <span className="font-bold text-slate-800">{email}</span>.
                    </p>
                  </div>

                  {/* Printable Ticket Card */}
                  <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                      <div>
                        <span className="font-black text-lg text-white">Travel<span className="text-amber-400">Go</span></span>
                        <div className="text-[10px] text-slate-400">Official Booking Voucher</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase">Booking PNR / Ref</span>
                        <div className="font-mono font-black text-base text-amber-400">TG99281X</div>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Service / Itinerary</span>
                        <span className="font-bold text-sm text-white">{itemTitle}</span>
                        <span className="text-slate-300 block">{itemSubtitle}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Primary Passenger</span>
                          <span className="font-bold text-white">{travellerTitle}. {firstName} {lastName}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Total Paid</span>
                          <span className="font-black text-emerald-400 text-sm">₹{totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => alert('Download Ticket PDF simulation: Voucher downloaded to your device!')}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download E-Ticket (PDF)</span>
                    </button>
                    <Link
                      href="/my-trips"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>View in My Trips</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Fare Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl sticky top-28 space-y-6">
                <div>
                  <h3 className="font-black text-lg text-slate-900 pb-3 border-b border-slate-100">
                    Fare Summary
                  </h3>

                  <div className="mt-3 space-y-1 text-xs">
                    <span className="font-bold text-slate-900 block">{itemTitle}</span>
                    <span className="text-slate-500 block">{itemSubtitle}</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Base Fare:</span>
                    <span className="font-bold text-slate-800">₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Airline / Govt Surcharges:</span>
                    <span className="font-bold text-slate-800">₹{taxes.toLocaleString('en-IN')}</span>
                  </div>

                  {optTravelInsurance && (
                    <div className="flex justify-between text-sky-700">
                      <span>Travel Protection Insurance:</span>
                      <span className="font-bold">+ ₹{insuranceCost}</span>
                    </div>
                  )}

                  {optFreeCancellation && (
                    <div className="flex justify-between text-teal-700">
                      <span>Free Cancellation Shield:</span>
                      <span className="font-bold">+ ₹{cancelCost}</span>
                    </div>
                  )}

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Coupon Discount ({couponInput.toUpperCase()}):</span>
                      <span>- ₹{appliedDiscount}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">Total Payable</span>
                    <span className="text-2xl font-black text-slate-900">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded">
                    Instant Voucher
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                  🔒 100% Secure Transaction Demo · No Hidden Fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-bold">Loading booking engine...</div>}>
      <BookingContent />
    </Suspense>
  );
}

