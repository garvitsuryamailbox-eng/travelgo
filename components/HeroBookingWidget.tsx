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
  ShieldCheck,
  Zap,
  Info
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
  onOpenWiki
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

  // Dropdown states
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  // Hotel state
  const [hotelCity, setHotelCity] = useState("Gurgaon (DLF Cyber City & Golf Course Rd)");
  const [checkInDate, setCheckInDate] = useState("2026-09-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-09-18");
  const [hotelGuests, setHotelGuests] = useState("2 Guests, 1 Room");

  // Cab state
  const [cabType, setCabType] = useState<"Airport Transfer" | "Outstation" | "Hourly Rental">("Airport Transfer");
  const [cabPickup, setCabPickup] = useState("IGI Airport (DEL) Terminal 3");
  const [cabDrop, setCabDrop] = useState("DLF CyberHub, Gurgaon");

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

  const serviceCategories = [
    { id: "flights", label: "Flights", icon: Plane, bg: "bg-blue-600 text-white", activeBorder: "border-blue-600" },
    { id: "hotels", label: "Hotels", icon: Building2, bg: "bg-rose-500 text-white", activeBorder: "border-rose-500" },
    { id: "packages", label: "Holidays", icon: Palmtree, bg: "bg-teal-500 text-white", activeBorder: "border-teal-500" },
    { id: "cabs", label: "Airport Cabs", icon: Car, bg: "bg-amber-500 text-white", activeBorder: "border-amber-500" },
    { id: "trains", label: "Trains", icon: Train, bg: "bg-emerald-600 text-white", activeBorder: "border-emerald-600" }
  ];

  const specialFareOptions = [
    { id: "Regular", label: "Regular Fares" },
    { id: "Student", label: "Student Fares", badge: "Extra 10kg Baggage" },
    { id: "Senior", label: "Senior Citizen", badge: "Up to ₹600 OFF" },
    { id: "ArmedForces", label: "Armed Forces", badge: "Special Discount" }
  ];

  return (
    <div className="relative w-full pb-12">
      {/* Royal Navy Blue Hero Section */}
      <div className="bg-gradient-to-b from-[#051329] via-[#091f48] to-[#0d2a63] text-white pt-10 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>MakeMyTrip Booking Engine &bull; Wikipedia Travel Encyclopedia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Book Flights, Stays &amp; Explore{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
              Gurgaon &amp; Beyond
            </span>
          </h1>

          <p className="text-sm sm:text-base text-blue-200 max-w-2xl mx-auto font-normal">
            100% upfront transparent fares with ₹0 convenience fee, live IGI airport radar, and verified destination guides.
          </p>
        </div>
      </div>

      {/* Floating Iconic Pure-White MakeMyTrip Search Pod */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 p-6 sm:p-8">
          {/* Category Tabs with MakeMyTrip Colored Icons */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6 overflow-x-auto no-scrollbar gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${cat.bg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Wiki Shortcut */}
            <button
              onClick={() => onOpenWiki("gurgaon")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold hover:bg-cyan-100 transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Read Gurgaon Wiki Guide</span>
            </button>
          </div>

          {/* FLIGHTS SEARCH CARD */}
          {activeTab === "flights" && (
            <div className="space-y-5">
              {/* Trip type toggle */}
              <div className="flex items-center gap-6 text-xs text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer font-bold">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className={tripType === "one-way" ? "text-slate-900 font-extrabold" : "text-slate-500"}>
                    One Way
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "round-trip"}
                    onChange={() => setTripType("round-trip")}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className={tripType === "round-trip" ? "text-slate-900 font-extrabold" : "text-slate-500"}>
                    Round Trip
                  </span>
                </label>
                <span className="text-slate-400 hidden sm:inline">&bull; Domestic &amp; International Flights</span>
              </div>

              {/* High-Contrast City & Date Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 relative">
                {/* FROM BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 cursor-pointer transition-all hover:shadow-md"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      From
                    </span>
                    <div className="text-xl font-black text-slate-900 mt-1 leading-tight">{fromCity.city}</div>
                    <div className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                      [{fromCity.code}] {fromCity.airport}
                    </div>
                  </div>

                  {/* Dropdown */}
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-bold uppercase tracking-wider">
                        Select Departure City
                      </div>
                      {POPULAR_CITIES.map((c) => (
                        <div
                          key={c.code}
                          onClick={() => {
                            setFromCity(c);
                            setShowFromDropdown(false);
                          }}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900">{c.city}</div>
                            <div className="text-[11px] text-slate-500">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-black text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
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
                  className="hidden md:flex absolute left-[24.5%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md text-blue-600 items-center justify-center hover:scale-110 hover:border-blue-400 transition-all"
                  title="Swap Origin and Destination"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>

                {/* TO BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 cursor-pointer transition-all hover:shadow-md"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-600" />
                      To
                    </span>
                    <div className="text-xl font-black text-slate-900 mt-1 leading-tight">{toCity.city}</div>
                    <div className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                      [{toCity.code}] {toCity.airport}
                    </div>
                  </div>

                  {/* Dropdown */}
                  {showToDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-bold uppercase tracking-wider">
                        Select Destination City
                      </div>
                      {POPULAR_CITIES.map((c) => (
                        <div
                          key={c.code}
                          onClick={() => {
                            setToCity(c);
                            setShowToDropdown(false);
                          }}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900">{c.city}</div>
                            <div className="text-[11px] text-slate-500">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-black text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-md">
                            {c.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DEPARTURE DATE */}
                <div className="md:col-span-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all hover:shadow-md">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      Departure
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="bg-transparent text-slate-900 font-black text-sm mt-1 outline-none w-full cursor-pointer"
                    />
                    <div className="text-[11px] text-emerald-600 font-bold mt-0.5">₹0 Convenience Fee</div>
                  </div>
                </div>

                {/* RETURN DATE */}
                <div className="md:col-span-2">
                  <div className={`p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all ${tripType === "one-way" ? "opacity-60" : "hover:border-blue-500 hover:shadow-md"}`}>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      Return
                    </span>
                    <input
                      type="date"
                      disabled={tripType === "one-way"}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="bg-transparent text-slate-900 font-black text-sm mt-1 outline-none w-full cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {tripType === "one-way" ? "One way trip" : "Save on roundtrip"}
                    </div>
                  </div>
                </div>

                {/* TRAVELERS & CLASS */}
                <div className="md:col-span-2 relative">
                  <div
                    onClick={() => {
                      setShowTravelerDropdown(!showTravelerDropdown);
                      setShowFromDropdown(false);
                      setShowToDropdown(false);
                    }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 cursor-pointer transition-all hover:shadow-md"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-600" />
                      Travellers
                    </span>
                    <div className="text-sm font-black text-slate-900 mt-1 truncate">
                      {travelersCount} Person(s)
                    </div>
                    <div className="text-xs text-blue-600 font-bold truncate mt-0.5">{cabinClass}</div>
                  </div>

                  {showTravelerDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 space-y-4">
                      <div>
                        <div className="text-xs font-bold text-slate-800 mb-2">Number of Travellers</div>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button
                              key={num}
                              onClick={() => setTravelersCount(num)}
                              className={`w-9 h-9 rounded-xl text-xs font-black transition-all ${
                                travelersCount === num
                                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-800 mb-2">Cabin Class</div>
                        <div className="space-y-1.5">
                          {(["Economy", "Premium Economy", "Business"] as const).map((cls) => (
                            <button
                              key={cls}
                              onClick={() => {
                                setCabinClass(cls);
                                setShowTravelerDropdown(false);
                              }}
                              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-colors ${
                                cabinClass === cls
                                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                                  : "text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              <span>{cls}</span>
                              {cabinClass === cls && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* MakeMyTrip Special Fare Types */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    Special Fares:
                  </span>
                  {specialFareOptions.map((sf) => (
                    <button
                      key={sf.id}
                      onClick={() => setSpecialFare(sf.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        specialFare === sf.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span>{sf.label}</span>
                      {sf.badge && (
                        <span className={`ml-1.5 text-[10px] font-black ${
                          specialFare === sf.id ? "text-cyan-200" : "text-blue-600"
                        }`}>
                          ({sf.badge})
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-emerald-600 font-extrabold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DigiYatra Fast Track Available</span>
                </div>
              </div>
            </div>
          )}

          {/* HOTELS SEARCH CARD */}
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-rose-500" />
                    City or Hotel Name
                  </span>
                  <input
                    type="text"
                    value={hotelCity}
                    onChange={(e) => setHotelCity(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-base mt-1 outline-none w-full"
                    placeholder="e.g. Gurgaon DLF Cyber City, Goa, Jaipur"
                  />
                  <div className="text-xs text-emerald-600 font-bold mt-0.5">
                    ✓ Verified Commute to CyberHub &amp; Golf Course Rd
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-rose-500" />
                    Check-In
                  </span>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-sm mt-1 outline-none w-full cursor-pointer"
                  />
                  <div className="text-xs text-slate-400 mt-0.5">From 02:00 PM</div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-rose-500" />
                    Check-Out
                  </span>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-sm mt-1 outline-none w-full cursor-pointer"
                  />
                  <div className="text-xs text-slate-400 mt-0.5">Until 12:00 PM</div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Users className="w-3 h-3 text-rose-500" />
                    Guests &amp; Rooms
                  </span>
                  <input
                    type="text"
                    value={hotelGuests}
                    onChange={(e) => setHotelGuests(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-base mt-1 outline-none w-full"
                  />
                  <div className="text-xs text-slate-500 mt-0.5">Couples &amp; Business Ready</div>
                </div>
              </div>
            </div>
          )}

          {/* CABS SEARCH CARD */}
          {activeTab === "cabs" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs">
                {(["Airport Transfer", "Outstation", "Hourly Rental"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCabType(t)}
                    className={`px-4 py-2 rounded-xl font-bold transition-all ${
                      cabType === t
                        ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Pickup Airport / Location
                  </span>
                  <input
                    type="text"
                    value={cabPickup}
                    onChange={(e) => setCabPickup(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-sm outline-none w-full"
                  />
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Chauffeur Waiting with Nameboard at T3 Exit
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Drop Location
                  </span>
                  <input
                    type="text"
                    value={cabDrop}
                    onChange={(e) => setCabDrop(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-sm outline-none w-full"
                  />
                  <div className="text-xs text-slate-500 mt-1">
                    Fastag expressway route included
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HOLIDAY SEARCH CARD */}
          {activeTab === "packages" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Dream Destination
                </span>
                <input
                  type="text"
                  value={packageDest}
                  onChange={(e) => setPackageDest(e.target.value)}
                  className="bg-transparent text-slate-900 font-black text-sm outline-none w-full"
                />
                <div className="text-xs text-slate-500 mt-1">Includes 5★ Stays + Flights + Private Car</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Month of Travel
                </span>
                <select className="bg-transparent text-slate-900 font-bold text-sm outline-none w-full cursor-pointer">
                  <option value="sep">September 2026</option>
                  <option value="oct">October 2026 (Festive Season)</option>
                  <option value="nov">November 2026 (Pleasant Winter)</option>
                  <option value="dec">December 2026 (Holiday Gala)</option>
                </select>
              </div>
            </div>
          )}

          {/* TRAINS SEARCH CARD */}
          {activeTab === "trains" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Express Route
                </span>
                <div className="text-base font-black text-slate-900">New Delhi (NDLS) → Jaipur Junction (JP)</div>
                <div className="text-xs text-slate-500">Vande Bharat Express (Train #20977)</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Seat Status
                </span>
                <div className="text-base font-black text-slate-900">Executive Chair Car &bull; Tomorrow</div>
                <div className="text-xs text-emerald-600 font-bold">100% Confirmed Allocation</div>
              </div>
            </div>
          )}

          {/* MakeMyTrip Signature Centered SEARCH Button */}
          <div className="mt-7 flex justify-center">
            <button
              onClick={handleExecuteSearch}
              className="px-14 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-base tracking-wider shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase"
            >
              <Search className="w-5 h-5" />
              <span>SEARCH {activeTab.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
