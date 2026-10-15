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
  Home as HomeIcon,
  Bus,
  Shield,
  Clock,
  Compass,
  Plus,
  Minus,
  Check
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
  const [tripType, setTripType] = useState<"one-way" | "round-trip" | "multi-city">("one-way");
  const [fromCity, setFromCity] = useState<CityOption>(POPULAR_CITIES[1]); // Mumbai
  const [toCity, setToCity] = useState<CityOption>(POPULAR_CITIES[0]); // Delhi
  const [departureDate, setDepartureDate] = useState("2026-09-24");
  const [returnDate, setReturnDate] = useState("2026-09-28");
  const [travelersCount, setTravelersCount] = useState(1);
  const [cabinClass, setCabinClass] = useState<"Economy" | "Premium Economy" | "Business">("Economy");
  const [specialFare, setSpecialFare] = useState("Regular");

  // Dropdown states
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  // Search filter inside dropdowns
  const [searchFromFilter, setSearchFromFilter] = useState("");
  const [searchToFilter, setSearchToFilter] = useState("");

  // Hotel state
  const [hotelCity, setHotelCity] = useState("Delhi NCR & Gurgaon");
  const [checkInDate, setCheckInDate] = useState("2026-09-24");
  const [checkOutDate, setCheckOutDate] = useState("2026-09-26");
  const [hotelRooms, setHotelRooms] = useState(1);
  const [hotelAdults, setHotelAdults] = useState(2);
  const [showHotelGuestDropdown, setShowHotelGuestDropdown] = useState(false);

  // Train state
  const [trainFrom, setTrainFrom] = useState("New Delhi (NDLS)");
  const [trainTo, setTrainTo] = useState("Jaipur (JP)");
  const [trainDate, setTrainDate] = useState("2026-09-24");
  const [trainClass, setTrainClass] = useState("Executive Chair Car (EC)");

  // Cab state
  const [cabType, setCabType] = useState<"Airport Transfer" | "Outstation" | "Hourly Rental">("Airport Transfer");
  const [cabPickup, setCabPickup] = useState("IGI Airport Terminal 3, Delhi");
  const [cabDrop, setCabDrop] = useState("CyberHub / DLF Cyber City, Gurgaon");
  const [cabDate, setCabDate] = useState("2026-09-24");

  // Holiday state
  const [packageDest, setPackageDest] = useState("Goa Beach & Luxury Resort (4N/5D)");

  // Homestays state
  const [homestayLocation, setHomestayLocation] = useState("Goa Private Pool Villa");

  // Buses state
  const [busFrom, setBusFrom] = useState("Delhi (ISBT Kashmiri Gate)");
  const [busTo, setBusTo] = useState("Manali / Shimla (Volvo AC)");

  const handleSwapCities = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      returnDate: tripType === "round-trip" ? returnDate : null,
      travelersCount,
      cabinClass,
      specialFare,
      hotelCity,
      checkInDate,
      checkOutDate,
      hotelGuests: `${hotelAdults} Adults, ${hotelRooms} Room`,
      trainRoute: `${trainFrom} → ${trainTo}`,
      trainDate,
      trainClass,
      cabType,
      cabPickup,
      cabDrop,
      packageDest
    });
  };

  // MakeMyTrip Core Service Categories
  const serviceCategories = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Building2 },
    { id: "homestays", label: "Homestays & Villas", icon: HomeIcon },
    { id: "packages", label: "Holiday Packages", icon: Palmtree },
    { id: "trains", label: "Trains", icon: Train },
    { id: "buses", label: "Buses", icon: Bus },
    { id: "cabs", label: "Airport Cabs", icon: Car },
    { id: "insurance", label: "Travel Insurance", icon: Shield }
  ];

  const specialFareOptions = [
    { id: "Regular", label: "Regular", desc: "Regular Fares" },
    { id: "Student", label: "Student", badge: "Extra 10kg Baggage", desc: "For students 12+ yrs" },
    { id: "Senior", label: "Senior Citizen", badge: "Up to ₹600 OFF", desc: "For 60+ yrs" },
    { id: "ArmedForces", label: "Armed Forces", badge: "Special Fare", desc: "For Defence Personnel" },
    { id: "Doctors", label: "Doctor and Nurses", badge: "Special Care", desc: "Medical professionals" }
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
      return { dayNum: 24, monthYear: "Sep'26", dayName: "Thursday" };
    }
  };

  const depDateInfo = formatDateDisplay(departureDate);
  const retDateInfo = formatDateDisplay(returnDate);

  const filteredFromCities = POPULAR_CITIES.filter((c) =>
    c.city.toLowerCase().includes(searchFromFilter.toLowerCase()) ||
    c.code.toLowerCase().includes(searchFromFilter.toLowerCase()) ||
    c.airport.toLowerCase().includes(searchFromFilter.toLowerCase())
  );

  const filteredToCities = POPULAR_CITIES.filter((c) =>
    c.city.toLowerCase().includes(searchToFilter.toLowerCase()) ||
    c.code.toLowerCase().includes(searchToFilter.toLowerCase()) ||
    c.airport.toLowerCase().includes(searchToFilter.toLowerCase())
  );

  return (
    <div className="relative w-full pb-16">
      {/* Elevated Pure White Main Search Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-8 relative">
          
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>✈️ BOOK YOUR TRAVEL</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
          </div>
          {/* FLIGHTS SEARCH CARD */}
          {activeTab === "flights" && (
            <div className="space-y-6">
              {/* Trip Type Radios & Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                      className="w-4 h-4 accent-[#008cff] cursor-pointer"
                    />
                    <span className={tripType === "one-way" ? "text-blue-600 font-extrabold" : "text-slate-700"}>
                      One Way
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                      className="w-4 h-4 accent-[#008cff] cursor-pointer"
                    />
                    <span className={tripType === "round-trip" ? "text-blue-600 font-extrabold" : "text-slate-700"}>
                      Round Trip
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "multi-city"}
                      onChange={() => setTripType("multi-city")}
                      className="w-4 h-4 accent-[#008cff] cursor-pointer"
                    />
                    <span className={tripType === "multi-city" ? "text-blue-600 font-extrabold" : "text-slate-700"}>
                      Multi City
                    </span>
                  </label>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Book Domestic and International Flights &bull; <span className="text-emerald-600 font-bold">Compare demo prices</span>
                </div>
              </div>

              {/* 5-Tile Contiguous MakeMyTrip Search Matrix */}
              <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white relative shadow-sm">
                {/* 1. FROM TILE */}
                <div
                  onClick={() => {
                    setShowFromDropdown(!showFromDropdown);
                    setShowToDropdown(false);
                    setShowTravelerDropdown(false);
                  }}
                  className="md:col-span-3 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative group rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    From
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mt-0.5 group-hover:text-blue-600 transition-colors">
                    {fromCity.city}
                  </div>
                  <span className="text-xs text-slate-500 font-medium block truncate mt-1">
                    {fromCity.code}, {fromCity.airport}
                  </span>

                  {/* From Dropdown */}
                  {showFromDropdown && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-full left-0 mt-2 w-84 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150"
                    >
                      <input
                        type="text"
                        placeholder="Search city or airport..."
                        value={searchFromFilter}
                        onChange={(e) => setSearchFromFilter(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 mb-2"
                        autoFocus
                      />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">
                        Popular Airports
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-slate-50">
                        {filteredFromCities.map((c) => (
                          <div
                            key={c.code}
                            onClick={() => {
                              setFromCity(c);
                              setShowFromDropdown(false);
                            }}
                            className="p-2.5 hover:bg-blue-50 cursor-pointer rounded-xl flex items-center justify-between"
                          >
                            <div>
                              <div className="font-bold text-xs text-slate-900">{c.city}</div>
                              <div className="text-[10px] text-slate-400 truncate max-w-[190px]">{c.airport}</div>
                            </div>
                            <span className="font-mono text-xs font-black text-blue-600">{c.code}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Swap City Button */}
                <button
                  type="button"
                  onClick={handleSwapCities}
                  className="hidden md:flex absolute left-[25%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 items-center justify-center text-blue-600 hover:scale-110 hover:border-blue-600 shadow-md z-30 transition-all cursor-pointer"
                  title="Swap Cities"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>

                {/* 2. TO TILE */}
                <div
                  onClick={() => {
                    setShowToDropdown(!showToDropdown);
                    setShowFromDropdown(false);
                    setShowTravelerDropdown(false);
                  }}
                  className="md:col-span-3 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    To
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mt-0.5 group-hover:text-blue-600 transition-colors">
                    {toCity.city}
                  </div>
                  <span className="text-xs text-slate-500 font-medium block truncate mt-1">
                    {toCity.code}, {toCity.airport}
                  </span>

                  {/* To Dropdown */}
                  {showToDropdown && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-full left-0 mt-2 w-84 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in duration-150"
                    >
                      <input
                        type="text"
                        placeholder="Search destination airport..."
                        value={searchToFilter}
                        onChange={(e) => setSearchToFilter(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 mb-2"
                        autoFocus
                      />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">
                        Select Destination
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-slate-50">
                        {filteredToCities.map((c) => (
                          <div
                            key={c.code}
                            onClick={() => {
                              setToCity(c);
                              setShowToDropdown(false);
                            }}
                            className="p-2.5 hover:bg-blue-50 cursor-pointer rounded-xl flex items-center justify-between"
                          >
                            <div>
                              <div className="font-bold text-xs text-slate-900">{c.city}</div>
                              <div className="text-[10px] text-slate-400 truncate max-w-[190px]">{c.airport}</div>
                            </div>
                            <span className="font-mono text-xs font-black text-blue-600">{c.code}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. DEPARTURE DATE TILE */}
                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Departure
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">{depDateInfo.dayNum}</span>
                    <span className="text-xs font-bold text-slate-800">{depDateInfo.monthYear}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">{depDateInfo.dayName}</span>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>

                {/* 4. RETURN DATE TILE */}
                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Return
                  </span>
                  {tripType === "round-trip" ? (
                    <>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900">{retDateInfo.dayNum}</span>
                        <span className="text-xs font-bold text-slate-800">{retDateInfo.monthYear}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium block mt-1">{retDateInfo.dayName}</span>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                    </>
                  ) : (
                    <div
                      onClick={() => setTripType("round-trip")}
                      className="mt-2 text-xs text-blue-600 font-bold hover:underline"
                    >
                      + Add Return Date
                      <div className="text-[10px] text-emerald-600 font-semibold">Save up to 15%</div>
                    </div>
                  )}
                </div>

                {/* 5. TRAVELLERS & CLASS TILE */}
                <div
                  onClick={() => {
                    setShowTravelerDropdown(!showTravelerDropdown);
                    setShowFromDropdown(false);
                    setShowToDropdown(false);
                  }}
                  className="md:col-span-2 p-4 hover:bg-blue-50/40 cursor-pointer transition-all relative rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Travellers &amp; Class
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">{travelersCount}</span>
                    <span className="text-xs font-bold text-slate-800">
                      {travelersCount > 1 ? "Travellers" : "Adult"}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block truncate mt-1">{cabinClass}</span>

                  {/* Travellers Dropdown */}
                  {showTravelerDropdown && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-full right-0 mt-2 w-76 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in duration-150 space-y-4"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-800">Adults (12+ yrs)</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                              className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                            >
                              <Minus className="w-3 h-3 text-slate-700" />
                            </button>
                            <span className="w-4 text-center font-bold text-xs">{travelersCount}</span>
                            <button
                              type="button"
                              onClick={() => setTravelersCount(Math.min(9, travelersCount + 1))}
                              className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                            >
                              <Plus className="w-3 h-3 text-slate-700" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-3">
                        <span className="text-xs font-bold text-slate-800 block mb-2">Cabin Class</span>
                        <div className="grid grid-cols-1 gap-1.5">
                          {(["Economy", "Premium Economy", "Business"] as const).map((cls) => (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => setCabinClass(cls)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold text-left transition-all flex items-center justify-between ${
                                cabinClass === cls
                                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                                  : "hover:bg-slate-50 text-slate-700"
                              }`}
                            >
                              <span>{cls}</span>
                              {cabinClass === cls && <Check className="w-3.5 h-3.5 text-blue-600" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowTravelerDropdown(false)}
                        className="w-full py-2 rounded-xl bg-[#008cff] text-white font-bold text-xs uppercase tracking-wider"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* MakeMyTrip Special Fare Row */}
              <div className="pt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                    Select a special fare:
                  </span>
                  {specialFareOptions.map((sf) => (
                    <button
                      key={sf.id}
                      onClick={() => setSpecialFare(sf.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        specialFare === sf.id
                          ? "bg-blue-50 border border-blue-500 text-blue-700 shadow-sm"
                          : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 border border-transparent"
                      }`}
                    >
                      <span>{sf.label}</span>
                      {sf.badge && (
                        <span
                          className={`text-[9px] font-black px-1.5 py-0.2 rounded ${
                            specialFare === sf.id ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-200"
                          }`}
                        >
                          {sf.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Free Cancellation Option Available</span>
                </div>
              </div>

              {/* Popular Routes Pill Strip */}
              <div className="pt-1 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs text-slate-500">
                <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider shrink-0">
                  Popular:
                </span>
                {popularRoutes.map((rt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFromCity(rt.fromCityObj);
                      setToCity(rt.toCityObj);
                      setTimeout(() => {
                        onSearch({
                          type: "flights",
                          fromCity: rt.fromCityObj,
                          toCity: rt.toCityObj,
                          departureDate,
                          returnDate: tripType === "round-trip" ? returnDate : null,
                          travelersCount,
                          cabinClass,
                          specialFare,
                        });
                      }, 0);
                    }}
                    className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-700 font-medium transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>{rt.label}</span>
                    <span className="text-blue-600 font-bold">{rt.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* HOTELS SEARCH CARD */}
          {activeTab === "hotels" && (
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
                <div className="md:col-span-5 p-4 hover:bg-blue-50/40 transition-all rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    City, Location or Property
                  </span>
                  <input
                    type="text"
                    value={hotelCity}
                    onChange={(e) => setHotelCity(e.target.value)}
                    className="text-xl sm:text-2xl font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                    placeholder="e.g. Delhi NCR, Goa, Jaipur"
                  />
                  <span className="text-xs text-slate-500 font-medium block truncate mt-1">
                    India &bull; 5,000+ verified luxury hotels &amp; cyber suites
                  </span>
                </div>

                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 transition-all relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Check-In
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-slate-900">{formatDateDisplay(checkInDate).dayNum}</span>
                    <span className="text-xs font-bold text-slate-800">{formatDateDisplay(checkInDate).monthYear}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">{formatDateDisplay(checkInDate).dayName}</span>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>

                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 transition-all relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Check-Out
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-slate-900">{formatDateDisplay(checkOutDate).dayNum}</span>
                    <span className="text-xs font-bold text-slate-800">{formatDateDisplay(checkOutDate).monthYear}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">{formatDateDisplay(checkOutDate).dayName}</span>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>

                <div
                  onClick={() => setShowHotelGuestDropdown(!showHotelGuestDropdown)}
                  className="md:col-span-3 p-4 hover:bg-blue-50/40 transition-all relative cursor-pointer rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Rooms &amp; Guests
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    {hotelRooms} Room, {hotelAdults} Adults
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">Free breakfast &bull; Flexible check-in</span>

                  {showHotelGuestDropdown && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">Rooms</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setHotelRooms(Math.max(1, hotelRooms - 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-bold text-xs">{hotelRooms}</span>
                          <button
                            onClick={() => setHotelRooms(Math.min(5, hotelRooms + 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs font-bold text-slate-700">Adults</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setHotelAdults(Math.max(1, hotelAdults - 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-bold text-xs">{hotelAdults}</span>
                          <button
                            onClick={() => setHotelAdults(Math.min(10, hotelAdults + 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowHotelGuestDropdown(false)}
                        className="w-full py-2 rounded-xl bg-[#008cff] text-white font-bold text-xs uppercase"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TRAINS SEARCH CARD */}
          {activeTab === "trains" && (
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
                <div className="md:col-span-4 p-4 hover:bg-blue-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">From Station</span>
                  <input
                    type="text"
                    value={trainFrom}
                    onChange={(e) => setTrainFrom(e.target.value)}
                    className="text-xl font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                  />
                  <span className="text-xs text-slate-500 block truncate mt-1">NDLS, Hazrat Nizamuddin, Delhi Cantt</span>
                </div>

                <div className="md:col-span-4 p-4 hover:bg-blue-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">To Station</span>
                  <input
                    type="text"
                    value={trainTo}
                    onChange={(e) => setTrainTo(e.target.value)}
                    className="text-xl font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                  />
                  <span className="text-xs text-slate-500 block truncate mt-1">JP, Jaipur Junction &bull; Vande Bharat Express</span>
                </div>

                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Travel Date</span>
                  <div className="text-xl font-black text-slate-900 mt-0.5">{formatDateDisplay(trainDate).dayNum} {formatDateDisplay(trainDate).monthYear}</div>
                  <span className="text-xs text-slate-500 block mt-1">{formatDateDisplay(trainDate).dayName}</span>
                  <input
                    type="date"
                    value={trainDate}
                    onChange={(e) => setTrainDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>

                <div className="md:col-span-2 p-4 hover:bg-blue-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Class</span>
                  <select
                    value={trainClass}
                    onChange={(e) => setTrainClass(e.target.value)}
                    className="text-sm font-bold text-slate-900 bg-transparent outline-none w-full mt-1 cursor-pointer"
                  >
                    <option value="Executive Chair Car (EC)">Executive Chair (EC)</option>
                    <option value="AC Chair Car (CC)">AC Chair Car (CC)</option>
                    <option value="1st AC (1A)">1st AC (1A)</option>
                    <option value="2nd AC (2A)">2nd AC (2A)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* CABS SEARCH CARD */}
          {activeTab === "cabs" && (
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
                <div className="md:col-span-5 p-4 hover:bg-blue-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Pickup Location</span>
                  <input
                    type="text"
                    value={cabPickup}
                    onChange={(e) => setCabPickup(e.target.value)}
                    className="text-lg font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                  />
                  <span className="text-xs text-emerald-600 font-semibold block mt-1">Nameboard pickup &bull; Zero waiting charges</span>
                </div>

                <div className="md:col-span-5 p-4 hover:bg-blue-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Drop Location</span>
                  <input
                    type="text"
                    value={cabDrop}
                    onChange={(e) => setCabDrop(e.target.value)}
                    className="text-lg font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                  />
                  <span className="text-xs text-slate-500 font-medium block mt-1">All expressway tolls &amp; parking included</span>
                </div>

                <div className="md:col-span-2 p-4 hover:bg-blue-50/40 relative">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Pickup Date</span>
                  <div className="text-lg font-black text-slate-900 mt-0.5">{formatDateDisplay(cabDate).dayNum} {formatDateDisplay(cabDate).monthYear}</div>
                  <input
                    type="date"
                    value={cabDate}
                    onChange={(e) => setCabDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* HOLIDAY PACKAGES CARD */}
          {activeTab === "packages" && (
            <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white p-2">
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Package Destination</span>
                <input
                  type="text"
                  value={packageDest}
                  onChange={(e) => setPackageDest(e.target.value)}
                  className="text-lg font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                />
                <span className="text-xs text-slate-500 block mt-1">Flights + 5★ Resorts + Sightseeing included</span>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Preferred Month</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">September / October 2026</div>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">₹0 Cancellation with Easy Date Rescheduling</span>
              </div>
            </div>
          )}

          {/* HOMESTAYS & VILLAS CARD */}
          {activeTab === "homestays" && (
            <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white p-2">
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Villa Location</span>
                <input
                  type="text"
                  value={homestayLocation}
                  onChange={(e) => setHomestayLocation(e.target.value)}
                  className="text-lg font-black text-slate-900 outline-none w-full bg-transparent mt-0.5"
                />
                <span className="text-xs text-slate-500 block mt-1">Private chef &bull; Caretaker &bull; Pet friendly estates</span>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Guests &amp; Bedrooms</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">4-8 Guests (2-4 BHK Villas)</div>
                <span className="text-xs text-slate-500 block mt-1">Entire private villa with private swimming pool</span>
              </div>
            </div>
          )}

          {/* BUSES CARD */}
          {activeTab === "buses" && (
            <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white p-2">
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Route</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">{busFrom} → {busTo}</div>
                <span className="text-xs text-slate-500 block mt-1">Volvo Multi-Axle 9600 AC Sleeper with Live GPS</span>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Departure</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">Tonight / Tomorrow Evening</div>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">On-time departure guarantee</span>
              </div>
            </div>
          )}

          {/* INSURANCE CARD */}
          {activeTab === "insurance" && (
            <div className="border border-slate-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white p-2">
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Domestic Travel Shield</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">₹10 Lakh Medical &amp; Delay Coverage</div>
                <span className="text-xs text-slate-500 block mt-1">Instant UPI payout on flight cancellations starting @ ₹99</span>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Coverage Scope</span>
                <div className="text-lg font-black text-slate-900 mt-0.5">Baggage Loss + Medical Cashless</div>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">500+ Indian network hospitals</span>
              </div>
            </div>
          )}

          {/* MAKEMYTRIP ICONIC CENTERED FLOATING SEARCH BUTTON */}
          <div className="mt-8 flex justify-center w-full">
            <button
              onClick={handleExecuteSearch}
              className="w-full sm:w-auto px-12 py-3.5 rounded-full mmt-btn-gradient text-white font-black text-base tracking-widest shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase cursor-pointer"
            >
              <Search className="w-5 h-5 text-white" />
              <span>SEARCH {activeTab === "homestays" ? "STAYS" : activeTab.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
