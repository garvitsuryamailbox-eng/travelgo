"use client";

import React, { useState } from "react";
import {
  Plane,
  Building2,
  Car,
  Palmtree,
  Train,
  ArrowLeftRight,
  Calendar,
  Users,
  Search,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
  Activity
} from "lucide-react";
import { POPULAR_CITIES, CityOption } from "../data/bookingData";

interface HeroBookingWidgetProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (searchParams: any) => void;
  onOpenWiki: (destId?: string) => void;
  onOpenConcierge?: () => void;
}

export default function HeroBookingWidget({
  activeTab,
  setActiveTab,
  onSearch,
  onOpenWiki,
  onOpenConcierge
}: HeroBookingWidgetProps) {
  // Flight state
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [fromCity, setFromCity] = useState<CityOption>(POPULAR_CITIES[1]); // Mumbai
  const [toCity, setToCity] = useState<CityOption>(POPULAR_CITIES[0]); // Delhi / Gurgaon NCR
  const [departureDate, setDepartureDate] = useState("2026-09-15");
  const [returnDate, setReturnDate] = useState("2026-09-20");
  const [travelersCount, setTravelersCount] = useState(1);
  const [cabinClass, setCabinClass] = useState<"Economy" | "Premium Economy" | "Business">("Economy");
  const [specialFare, setSpecialFare] = useState("Regular");
  const [transparentPricing, setTransparentPricing] = useState(true);

  // Dropdown visibility states
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  // Hotel state
  const [hotelCity, setHotelCity] = useState("Gurgaon (DLF Cyber City & Golf Course Rd)");
  const [checkInDate, setCheckInDate] = useState("2026-09-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-09-18");
  const [hotelGuests, setHotelGuests] = useState("2 Adults, 1 Room");

  // Cab state
  const [cabType, setCabType] = useState<"Airport Transfer" | "Outstation" | "Hourly Rental">("Airport Transfer");
  const [cabPickup, setCabPickup] = useState("Indira Gandhi Intl Airport (DEL) T3");
  const [cabDrop, setCabDrop] = useState("DLF CyberHub, Sector 24 Gurgaon");

  // Holiday state
  const [packageDest, setPackageDest] = useState("Golden Triangle: Delhi, Gurgaon & Jaipur");

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleExecuteSearch = () => {
    onSearch({
      type: activeTab,
      fromCity,
      toCity,
      departureDate,
      returnDate,
      travelersCount,
      cabinClass,
      specialFare,
      hotelCity,
      checkInDate,
      checkOutDate,
      hotelGuests,
      cabType,
      cabPickup,
      cabDrop,
      packageDest
    });
  };

  const specialFareOptions = [
    { id: "Regular", label: "Regular Fares" },
    { id: "Student", label: "Student Fares", badge: "Extra 10kg Baggage" },
    { id: "Senior", label: "Senior Citizen", badge: "Up to ₹600 OFF" },
    { id: "ArmedForces", label: "Armed Forces", badge: "Govt Discount" },
    { id: "DoctorNurse", label: "Doctor & Nurses", badge: "Special Fare" }
  ];

  return (
    <div className="relative w-full">
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950/80 to-slate-950 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Hero Headlines */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Hidden Fees &bull; Instant 100% Refund Shield</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Next-Gen Booking &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Destination Intelligence
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-normal">
            100% transparent pricing without surprise convenience fees at checkout. Integrated with live terminal radar and encyclopedic guides for{" "}
            <button
              onClick={() => onOpenWiki("gurgaon")}
              className="text-cyan-400 font-bold underline underline-offset-4 hover:text-cyan-300 transition-colors"
            >
              Gurgaon Millennium City
            </button>
            .
          </p>
        </div>

        {/* Main Luxury Glassmorphic Booking Card */}
        <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-blue-950/60 backdrop-blur-xl relative z-20">
          {/* Top Service Tabs Pill Bar */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5 overflow-x-auto gap-2 no-scrollbar">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("flights")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "flights"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>Flights</span>
              </button>

              <button
                onClick={() => setActiveTab("hotels")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "hotels"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Hotels & Stays</span>
              </button>

              <button
                onClick={() => setActiveTab("packages")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "packages"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Palmtree className="w-4 h-4" />
                <span>Holiday Packages</span>
              </button>

              <button
                onClick={() => setActiveTab("cabs")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "cabs"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Airport Cabs</span>
              </button>

              <button
                onClick={() => setActiveTab("trains")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "trains"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Train className="w-4 h-4" />
                <span>Trains</span>
              </button>
            </div>

            {/* Zero Convenience Fee Status Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>₹0 Convenience Fee Guaranteed</span>
            </div>
          </div>

          {/* FLIGHTS TAB CONTENT */}
          {activeTab === "flights" && (
            <div className="space-y-4">
              {/* Trip Type Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                      className="accent-blue-500"
                    />
                    <span className="font-semibold text-white">One Way</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                      className="accent-blue-500"
                    />
                    <span className="font-semibold text-white">Round Trip</span>
                  </label>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-cyan-300 font-semibold bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-xl">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Terminal 3 DigiYatra Priority Check-in Active</span>
                </div>
              </div>

              {/* Main Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 relative">
                {/* FROM CITY BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 cursor-pointer transition-all"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      From
                    </span>
                    <div className="text-lg font-bold text-white leading-tight mt-0.5">{fromCity.city}</div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      [{fromCity.code}] {fromCity.airport}
                    </div>
                  </div>

                  {/* Dropdown */}
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-semibold uppercase">Popular Cities</div>
                      {POPULAR_CITIES.map((c) => (
                        <div
                          key={c.code}
                          onClick={() => {
                            setFromCity(c);
                            setShowFromDropdown(false);
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-white">{c.city}</div>
                            <div className="text-[10px] text-slate-400">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                            {c.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SWAP BUTTON */}
                <button
                  onClick={handleSwapCities}
                  className="hidden md:flex absolute left-[24.5%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-8 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg hover:bg-blue-500 hover:scale-110 transition-transform"
                  title="Swap Origin and Destination"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>

                {/* TO CITY BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 cursor-pointer transition-all"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      To
                    </span>
                    <div className="text-lg font-bold text-white leading-tight mt-0.5">{toCity.city}</div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      [{toCity.code}] {toCity.airport}
                    </div>
                  </div>

                  {/* Dropdown */}
                  {showToDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-semibold uppercase">Popular Destinations</div>
                      {POPULAR_CITIES.map((c) => (
                        <div
                          key={c.code}
                          onClick={() => {
                            setToCity(c);
                            setShowToDropdown(false);
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-white">{c.city}</div>
                            <div className="text-[10px] text-slate-400">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                            {c.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DEPARTURE DATE BOX */}
                <div className="md:col-span-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Departure
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm sm:text-base mt-1 outline-none w-full cursor-pointer"
                    />
                    <div className="text-[10px] text-emerald-400 mt-0.5">Best Fare Guaranteed</div>
                  </div>
                </div>

                {/* RETURN DATE BOX (ROUND TRIP) */}
                <div className="md:col-span-2">
                  <div className={`p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 transition-all ${tripType === "one-way" ? "opacity-60" : "hover:border-blue-500/80"}`}>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Return
                    </span>
                    <input
                      type="date"
                      disabled={tripType === "one-way"}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm sm:text-base mt-1 outline-none w-full cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {tripType === "one-way" ? "Click Round Trip above" : "Save up to 20% on return"}
                    </div>
                  </div>
                </div>

                {/* TRAVELERS & CLASS BOX */}
                <div className="md:col-span-2 relative">
                  <div
                    onClick={() => {
                      setShowTravelerDropdown(!showTravelerDropdown);
                      setShowFromDropdown(false);
                      setShowToDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 cursor-pointer transition-all"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      Travellers & Class
                    </span>
                    <div className="text-sm sm:text-base font-bold text-white truncate mt-1">
                      {travelersCount} Traveller(s)
                    </div>
                    <div className="text-[10px] text-cyan-400 font-medium truncate mt-0.5">{cabinClass}</div>
                  </div>

                  {/* Dropdown */}
                  {showTravelerDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 z-50 space-y-4">
                      <div>
                        <div className="text-xs font-bold text-white mb-2">Number of Travellers</div>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button
                              key={num}
                              onClick={() => setTravelersCount(num)}
                              className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                                travelersCount === num
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-white mb-2">Cabin Class</div>
                        <div className="space-y-1.5">
                          {(["Economy", "Premium Economy", "Business"] as const).map((cls) => (
                            <button
                              key={cls}
                              onClick={() => {
                                setCabinClass(cls);
                                setShowTravelerDropdown(false);
                              }}
                              className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                                cabinClass === cls
                                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/40"
                                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                              }`}
                            >
                              <span>{cls}</span>
                              {cabinClass === cls && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Special Fare Types */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Select Special Fare Category:
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {specialFareOptions.map((sf) => (
                    <button
                      key={sf.id}
                      onClick={() => setSpecialFare(sf.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                        specialFare === sf.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:border-slate-600 hover:bg-slate-800"
                      }`}
                    >
                      <span>{sf.label}</span>
                      {sf.badge && (
                        <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                          specialFare === sf.id ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-400"
                        }`}>
                          {sf.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* HOTELS TAB CONTENT */}
          {activeTab === "hotels" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-5">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-blue-400" />
                      City, Locality or Hotel Name
                    </span>
                    <input
                      type="text"
                      value={hotelCity}
                      onChange={(e) => setHotelCity(e.target.value)}
                      className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                      placeholder="e.g. Gurgaon DLF CyberHub, Goa, Jaipur"
                    />
                    <div className="text-[10px] text-emerald-400 mt-0.5 font-semibold">
                      ✓ Verified Peak Traffic Commute &amp; Soundproof Guarantee
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Check-In
                    </span>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm sm:text-base mt-1 outline-none w-full cursor-pointer"
                    />
                    <div className="text-[10px] text-slate-400 mt-0.5">Free Early Check-in option</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Check-Out
                    </span>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm sm:text-base mt-1 outline-none w-full cursor-pointer"
                    />
                    <div className="text-[10px] text-slate-400 mt-0.5">Until 12:00 PM</div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      Rooms & Guests
                    </span>
                    <input
                      type="text"
                      value={hotelGuests}
                      onChange={(e) => setHotelGuests(e.target.value)}
                      className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                    />
                    <div className="text-[10px] text-cyan-400 mt-0.5">Couple Friendly & Business Ready</div>
                  </div>
                </div>
              </div>

              {/* Quick Hotel Filters */}
              <div className="flex items-center gap-2 text-xs overflow-x-auto pb-1">
                <span className="text-slate-400 font-semibold text-[11px]">TOP GURGAON HUBS:</span>
                <button
                  onClick={() => setHotelCity("Gurgaon DLF Cyber City")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  🏙️ CyberHub / DLF Phase 2
                </button>
                <button
                  onClick={() => setHotelCity("Gurgaon Golf Course Road")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  🏌️ Golf Course Road
                </button>
                <button
                  onClick={() => setHotelCity("Goa North Baga")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  🏖️ Goa Beachfront
                </button>
              </div>
            </div>
          )}

          {/* CABS TAB CONTENT */}
          {activeTab === "cabs" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs">
                {(["Airport Transfer", "Outstation", "Hourly Rental"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCabType(type)}
                    className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                      cabType === type
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      Pickup Airport / Terminal
                    </span>
                    <input
                      type="text"
                      value={cabPickup}
                      onChange={(e) => setCabPickup(e.target.value)}
                      className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                    />
                    <div className="text-[10px] text-emerald-400 mt-0.5 font-semibold">
                      ✓ Dedicated Driver Waiting with Name Board at T3 Exit
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      Drop Location
                    </span>
                    <input
                      type="text"
                      value={cabDrop}
                      onChange={(e) => setCabDrop(e.target.value)}
                      className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                    />
                    <div className="text-[10px] text-slate-400 mt-0.5">Dwarka Expressway Express Route Included</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HOLIDAY PACKAGES TAB CONTENT */}
          {activeTab === "packages" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Palmtree className="w-3 h-3 text-blue-400" />
                      Dream Destination
                    </span>
                    <input
                      type="text"
                      value={packageDest}
                      onChange={(e) => setPackageDest(e.target.value)}
                      className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                    />
                    <div className="text-[10px] text-slate-400 mt-0.5">All-inclusive: 5★ Hotels + Chauffeur + Flights</div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Travel Month
                    </span>
                    <select className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer">
                      <option value="sep" className="bg-slate-900">September 2026</option>
                      <option value="oct" className="bg-slate-900">October 2026 (Festive)</option>
                      <option value="nov" className="bg-slate-900">November 2026</option>
                      <option value="dec" className="bg-slate-900">December 2026</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Package Tier
                    </span>
                    <select className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer">
                      <option value="luxury" className="bg-slate-900">5-Star Luxury Retreat</option>
                      <option value="family" className="bg-slate-900">Family Comfort Tour</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TRAINS TAB CONTENT */}
          {activeTab === "trains" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-4">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Train className="w-3 h-3 text-blue-400" />
                      From Station
                    </span>
                    <div className="text-base font-bold text-white mt-1">New Delhi (NDLS) / Gurgaon (GGN)</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Delhi NCR Junctions</div>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Train className="w-3 h-3 text-cyan-400" />
                      To Station
                    </span>
                    <div className="text-base font-bold text-white mt-1">Jaipur Junction (JP) / Vande Bharat</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">3.5 hrs Fast Express Route</div>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/80 transition-all">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Date & Quota
                    </span>
                    <div className="text-base font-bold text-white mt-1">Tomorrow &bull; Executive Chair Car</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5 font-semibold">IRCTC Confirmed Status</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Centered SEARCH CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleExecuteSearch}
              className="w-full sm:w-auto px-12 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-black text-base tracking-wide shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>
                SEARCH {activeTab === "flights" ? "FLIGHTS" : activeTab === "hotels" ? "HOTELS" : activeTab === "cabs" ? "CABS" : activeTab === "packages" ? "HOLIDAYS" : "TRAINS"} (ALL-INCLUSIVE)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
