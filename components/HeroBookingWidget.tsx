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
  Info,
  Home as HomeIcon,
  Bus,
  Shield,
  CreditCard
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

  // 8 MakeMyTrip Core Service Categories
  const serviceCategories = [
    { id: "flights", label: "Flights", icon: Plane, color: "text-blue-500", activeBg: "bg-blue-600 text-white" },
    { id: "hotels", label: "Hotels", icon: Building2, color: "text-rose-500", activeBg: "bg-rose-500 text-white" },
    { id: "homestays", label: "Homestays & Villas", icon: HomeIcon, color: "text-amber-500", activeBg: "bg-amber-500 text-white" },
    { id: "packages", label: "Holiday Packages", icon: Palmtree, color: "text-teal-500", activeBg: "bg-teal-500 text-white" },
    { id: "trains", label: "Trains", icon: Train, color: "text-emerald-600", activeBg: "bg-emerald-600 text-white" },
    { id: "buses", label: "Buses", icon: Bus, color: "text-orange-500", activeBg: "bg-orange-500 text-white" },
    { id: "cabs", label: "Airport Cabs", icon: Car, color: "text-yellow-500", activeBg: "bg-yellow-500 text-white" },
    { id: "insurance", label: "Travel Insurance", icon: Shield, color: "text-indigo-500", activeBg: "bg-indigo-500 text-white" }
  ];

  const specialFareOptions = [
    { id: "Regular", label: "Regular Fares", desc: "Standard baggage & refunds" },
    { id: "ArmedForces", label: "Armed Forces", badge: "Up to ₹600 OFF", desc: "Special defence discount" },
    { id: "Student", label: "Student Fares", badge: "Extra 10kg Baggage", desc: "For students 12+ years" },
    { id: "Senior", label: "Senior Citizen", badge: "Priority Boarding", desc: "60+ years travellers" },
    { id: "Doctors", label: "Doctors & Nurses", badge: "Special Care", desc: "Medical heroes concession" }
  ];

  const popularRoutes = [
    { from: "DEL", to: "BOM", label: "Delhi ⇄ Mumbai", price: "₹4,299", fromCityObj: POPULAR_CITIES[0], toCityObj: POPULAR_CITIES[1] },
    { from: "DEL", to: "BLR", label: "Delhi ⇄ Bengaluru", price: "₹5,199", fromCityObj: POPULAR_CITIES[0], toCityObj: POPULAR_CITIES[2] },
    { from: "DEL", to: "GOI", label: "Delhi ⇄ Goa", price: "₹4,899", fromCityObj: POPULAR_CITIES[0], toCityObj: POPULAR_CITIES[4] },
    { from: "BOM", to: "DEL", label: "Mumbai ⇄ Delhi", price: "₹4,499", fromCityObj: POPULAR_CITIES[1], toCityObj: POPULAR_CITIES[0] }
  ];

  const formatDateDisplay = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const dayNum = date.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear().toString().slice(-2);
      const dayName = dayNames[date.getDay()];
      return { dayNum, monthYear: `${month}'${year}`, dayName };
    } catch {
      return { dayNum: 15, monthYear: "Sep'26", dayName: "Tuesday" };
    }
  };

  const depDateInfo = formatDateDisplay(departureDate);
  const retDateInfo = formatDateDisplay(returnDate);

  return (
    <div className="relative w-full pb-16">
      {/* Royal Navy MakeMyTrip Hero Canvas */}
      <div className="bg-gradient-to-b from-[#051329] via-[#08204d] to-[#0c2a66] text-white pt-8 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Decorative Backdrops */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>100% Upfront Transparent Fares &bull; ₹0 Convenience Fee</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Book Flights, Luxury Stays &amp; Explore{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Gurgaon Millennium City
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-blue-200/90 max-w-2xl mx-auto font-medium">
            Live IGI Terminal 3 queue radar, verified CyberHub commute times, and 2-minute instant UPI refund guarantee.
          </p>
        </div>
      </div>

      {/* Floating Iconic MakeMyTrip Elevated Search Pod */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        {/* Floating Category Navigation Bar (MakeMyTrip 8-Service Pill Row) */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-2 mb-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 max-w-5xl mx-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id === "homestays" || cat.id === "buses" || cat.id === "insurance" ? "flights" : cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap group ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-100"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : cat.color} transition-transform group-hover:scale-110`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Wiki Shortcut Badge */}
          <button
            onClick={() => onOpenWiki("gurgaon")}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-extrabold hover:bg-cyan-100 transition-colors whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Gurgaon Wiki Hub</span>
          </button>
        </div>

        {/* Main Search Container */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-6 sm:p-8 relative">
          {/* FLIGHTS SEARCH CARD */}
          {(activeTab === "flights" || activeTab === "homestays" || activeTab === "buses" || activeTab === "insurance") && (
            <div className="space-y-6">
              {/* Trip Type Radios & Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                      className="accent-blue-600 w-4 h-4 cursor-pointer"
                    />
                    <span className={tripType === "one-way" ? "text-slate-900 font-black text-sm" : "text-slate-500 font-bold text-sm"}>
                      One Way
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                      className="accent-blue-600 w-4 h-4 cursor-pointer"
                    />
                    <span className={tripType === "round-trip" ? "text-slate-900 font-black text-sm" : "text-slate-500 font-bold text-sm"}>
                      Round Trip
                    </span>
                  </label>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Book Domestic &amp; International Flights &bull; <span className="text-emerald-600 font-bold">100% Upfront Transparent Pricing</span>
                </div>
              </div>

              {/* Exact MakeMyTrip 5-Tile Contiguous Grid */}
              <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white relative shadow-sm">
                {/* 1. FROM TILE */}
                <div className="md:col-span-3 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative group rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <div
                    onClick={() => {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      From
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 leading-tight tracking-tight">
                      {fromCity.city}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-1 font-medium">
                      <span className="font-bold text-blue-600">{fromCity.code}</span>, {fromCity.airport}
                    </div>
                  </div>

                  {/* City Selection Dropdown */}
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-bold uppercase tracking-wider">
                        Select Departure Airport
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
                            <div className="text-xs font-black text-slate-900">{c.city}</div>
                            <div className="text-[11px] text-slate-500 truncate max-w-[180px]">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-black text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
                            {c.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* TWO-WAY SWAP BUTTON (Centered between From & To) */}
                <button
                  onClick={handleSwapCities}
                  className="hidden md:flex absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-9 h-9 rounded-full bg-white border border-slate-300 shadow-md text-blue-600 items-center justify-center hover:scale-110 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  title="Swap Origin and Destination"
                >
                  <ArrowLeftRight className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                </button>

                {/* 2. TO TILE */}
                <div className="md:col-span-3 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative group">
                  <div
                    onClick={() => {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                      To
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 leading-tight tracking-tight">
                      {toCity.city}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-1 font-medium">
                      <span className="font-bold text-cyan-600">{toCity.code}</span>, {toCity.airport}
                    </div>
                  </div>

                  {/* City Selection Dropdown */}
                  {showToDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95">
                      <div className="text-[11px] text-slate-400 px-3 py-1 font-bold uppercase tracking-wider">
                        Select Destination Airport
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
                            <div className="text-xs font-black text-slate-900">{c.city}</div>
                            <div className="text-[11px] text-slate-500 truncate max-w-[180px]">{c.airport}</div>
                          </div>
                          <span className="text-xs font-mono font-black text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-md">
                            {c.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. DEPARTURE TILE */}
                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 transition-all relative">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    Departure
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {depDateInfo.dayNum}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{depDateInfo.monthYear}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{depDateInfo.dayName}</div>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>

                {/* 4. RETURN TILE */}
                <div
                  className={`md:col-span-2 p-4 transition-all relative ${
                    tripType === "one-way" ? "bg-slate-50/70" : "hover:bg-blue-50/40"
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    Return
                  </span>
                  {tripType === "one-way" ? (
                    <div
                      onClick={() => setTripType("round-trip")}
                      className="cursor-pointer mt-1"
                    >
                      <div className="text-xs font-bold text-blue-600 hover:underline">
                        + Add Return Flight
                      </div>
                      <div className="text-[10px] text-emerald-600 font-black mt-0.5">
                        Save up to ₹1,200
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                          {retDateInfo.dayNum}
                        </span>
                        <span className="text-sm font-bold text-slate-700">{retDateInfo.monthYear}</span>
                      </div>
                      <div className="text-xs text-slate-500 font-medium">{retDateInfo.dayName}</div>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                    </>
                  )}
                </div>

                {/* 5. TRAVELLERS & CLASS TILE */}
                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                  <div
                    onClick={() => {
                      setShowTravelerDropdown(!showTravelerDropdown);
                      setShowFromDropdown(false);
                      setShowToDropdown(false);
                    }}
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      Travellers &amp; Class
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                        {travelersCount}
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {travelersCount > 1 ? "Travellers" : "Traveller"}
                      </span>
                    </div>
                    <div className="text-xs text-blue-600 font-extrabold truncate">{cabinClass}</div>
                  </div>

                  {/* Travellers Dropdown */}
                  {showTravelerDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 space-y-4 animate-in fade-in zoom-in-95">
                      <div>
                        <div className="text-xs font-black text-slate-800 mb-2">Number of Travellers</div>
                        <div className="grid grid-cols-6 gap-1.5">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button
                              key={num}
                              onClick={() => setTravelersCount(num)}
                              className={`py-2 rounded-xl text-xs font-black transition-all ${
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
                        <div className="text-xs font-black text-slate-800 mb-2">Cabin Class</div>
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

              {/* Special Fare Types (MakeMyTrip Signature Row) */}
              <div className="pt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    Select A Fare Type:
                  </span>
                  {specialFareOptions.map((sf) => (
                    <button
                      key={sf.id}
                      onClick={() => setSpecialFare(sf.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                        specialFare === sf.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span>{sf.label}</span>
                      {sf.badge && (
                        <span
                          className={`text-[10px] font-black px-1.5 py-0.2 rounded ${
                            specialFare === sf.id ? "bg-white/20 text-white" : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {sf.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-emerald-600 font-black flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>DigiYatra Fast Gate Verified</span>
                </div>
              </div>

              {/* Popular Routes Quick Bar */}
              <div className="pt-2 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs text-slate-500">
                <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider shrink-0">
                  Popular:
                </span>
                {popularRoutes.map((rt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFromCity(rt.fromCityObj);
                      setToCity(rt.toCityObj);
                      handleExecuteSearch();
                    }}
                    className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-700 font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0"
                  >
                    <span>{rt.label}</span>
                    <span className="text-blue-600 font-black">{rt.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* HOTELS SEARCH CARD */}
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-rose-500" />
                    City, Location or Hotel Name
                  </span>
                  <input
                    type="text"
                    value={hotelCity}
                    onChange={(e) => setHotelCity(e.target.value)}
                    className="bg-transparent text-slate-900 font-black text-lg mt-1 outline-none w-full"
                    placeholder="e.g. Gurgaon DLF Cyber City, Goa, Jaipur"
                  />
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Verified Commute to CyberHub &amp; Golf Course Rd
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
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
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
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
                    <Users className="w-3.5 h-3.5 text-rose-500" />
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
                    Fastag expressway route included &bull; ₹500 Cancellation Shield
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

          {/* Iconic MakeMyTrip Centered Gradient SEARCH Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleExecuteSearch}
              className="px-16 sm:px-24 py-4 rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-700 hover:from-sky-500 hover:to-indigo-800 text-white font-black text-base sm:text-lg tracking-widest shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase cursor-pointer"
            >
              <Search className="w-6 h-6 text-white" />
              <span>SEARCH {activeTab.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
