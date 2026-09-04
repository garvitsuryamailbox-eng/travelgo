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
  MapPin,
  CheckCircle2
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

  // Dropdown visibility states
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  // Hotel state
  const [hotelCity, setHotelCity] = useState("Gurgaon (DLF Cyber City)");
  const [checkInDate, setCheckInDate] = useState("2026-09-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-09-18");
  const [hotelGuests, setHotelGuests] = useState("2 Guests, 1 Room");

  // Cab state
  const [cabType, setCabType] = useState<"Airport Transfer" | "Outstation" | "Hourly Rental">("Airport Transfer");
  const [cabPickup, setCabPickup] = useState("IGI Airport (DEL) Terminal 3");
  const [cabDrop, setCabDrop] = useState("DLF CyberHub, Gurgaon");

  // Holiday state
  const [packageDest, setPackageDest] = useState("Delhi, Gurgaon & Royal Jaipur");

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

  return (
    <div className="w-full pt-6 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Where would you like to travel?
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Book flights, stays in CyberHub, and explore verified destination guides.
          </p>
        </div>

        {/* Clean Booking Card */}
        <div className="bg-[#0f111a] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl shadow-black/40">
          {/* Service Tabs */}
          <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 border-b border-slate-800/80 pb-4 mb-6 overflow-x-auto no-scrollbar">
            {[
              { id: "flights", label: "Flights", icon: Plane },
              { id: "hotels", label: "Hotels", icon: Building2 },
              { id: "packages", label: "Holidays", icon: Palmtree },
              { id: "cabs", label: "Airport Cabs", icon: Car },
              { id: "trains", label: "Trains", icon: Train }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* FLIGHTS INPUTS */}
          {activeTab === "flights" && (
            <div className="space-y-4">
              {/* Trip Type */}
              <div className="flex items-center gap-6 text-xs text-slate-400 mb-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                    className="accent-blue-500"
                  />
                  <span className={tripType === "one-way" ? "text-white font-semibold" : "text-slate-400"}>
                    One Way
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "round-trip"}
                    onChange={() => setTripType("round-trip")}
                    className="accent-blue-500"
                  />
                  <span className={tripType === "round-trip" ? "text-white font-semibold" : "text-slate-400"}>
                    Round Trip
                  </span>
                </label>
              </div>

              {/* Grid Input Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 relative">
                {/* FROM BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      From
                    </span>
                    <div className="text-base font-bold text-white mt-1">{fromCity.city}</div>
                    <div className="text-[11px] text-slate-400 truncate">
                      [{fromCity.code}] {fromCity.airport}
                    </div>
                  </div>

                  {showFromDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50">
                      <div className="text-[10px] text-slate-400 px-3 py-1 font-semibold uppercase">Popular Cities</div>
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
                          <span className="text-xs font-mono font-bold text-blue-400">{c.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SWAP BUTTON */}
                <button
                  onClick={handleSwapCities}
                  className="hidden md:flex absolute left-[24.5%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-7 h-7 rounded-full bg-slate-800 border border-slate-700 text-slate-300 items-center justify-center hover:text-white hover:border-slate-600 transition-colors"
                  title="Swap Cities"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>

                {/* TO BOX */}
                <div className="md:col-span-3 relative">
                  <div
                    onClick={() => {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                      setShowTravelerDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      To
                    </span>
                    <div className="text-base font-bold text-white mt-1">{toCity.city}</div>
                    <div className="text-[11px] text-slate-400 truncate">
                      [{toCity.code}] {toCity.airport}
                    </div>
                  </div>

                  {showToDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50">
                      <div className="text-[10px] text-slate-400 px-3 py-1 font-semibold uppercase">Popular Destinations</div>
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
                          <span className="text-xs font-mono font-bold text-cyan-400">{c.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DEPARTURE DATE */}
                <div className="md:col-span-2">
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Departure
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer"
                    />
                    <div className="text-[10px] text-slate-500">Pick date</div>
                  </div>
                </div>

                {/* RETURN DATE */}
                <div className="md:col-span-2">
                  <div className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-colors ${tripType === "one-way" ? "opacity-50" : "hover:border-slate-700"}`}>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      Return
                    </span>
                    <input
                      type="date"
                      disabled={tripType === "one-way"}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="text-[10px] text-slate-500">
                      {tripType === "one-way" ? "One way selected" : "Return date"}
                    </div>
                  </div>
                </div>

                {/* TRAVELERS */}
                <div className="md:col-span-2 relative">
                  <div
                    onClick={() => {
                      setShowTravelerDropdown(!showTravelerDropdown);
                      setShowFromDropdown(false);
                      setShowToDropdown(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      Travellers
                    </span>
                    <div className="text-sm font-bold text-white mt-1 truncate">
                      {travelersCount} Person, {cabinClass}
                    </div>
                    <div className="text-[10px] text-slate-400">Class &amp; Count</div>
                  </div>

                  {showTravelerDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 z-50 space-y-3">
                      <div>
                        <div className="text-xs font-bold text-white mb-2">Number of Travellers</div>
                        <div className="flex items-center gap-1.5">
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
                        <div className="space-y-1">
                          {(["Economy", "Premium Economy", "Business"] as const).map((cls) => (
                            <button
                              key={cls}
                              onClick={() => {
                                setCabinClass(cls);
                                setShowTravelerDropdown(false);
                              }}
                              className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                                cabinClass === cls ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"
                              }`}
                            >
                              <span>{cls}</span>
                              {cabinClass === cls && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* HOTELS INPUTS */}
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-blue-400" />
                    City or Hotel Name
                  </span>
                  <input
                    type="text"
                    value={hotelCity}
                    onChange={(e) => setHotelCity(e.target.value)}
                    className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                    placeholder="e.g. Gurgaon DLF Cyber City, Goa, Jaipur"
                  />
                  <div className="text-[10px] text-slate-400">Cyber City, Golf Course Rd, Aerocity</div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    Check-In
                  </span>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500">From 02:00 PM</div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    Check-Out
                  </span>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="bg-transparent text-white font-bold text-sm mt-1 outline-none w-full cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500">Until 12:00 PM</div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    Guests &amp; Rooms
                  </span>
                  <input
                    type="text"
                    value={hotelGuests}
                    onChange={(e) => setHotelGuests(e.target.value)}
                    className="bg-transparent text-white font-bold text-base mt-1 outline-none w-full"
                  />
                  <div className="text-[10px] text-slate-400">Couples &amp; Business</div>
                </div>
              </div>
            </div>
          )}

          {/* CABS INPUTS */}
          {activeTab === "cabs" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                {(["Airport Transfer", "Outstation", "Hourly Rental"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCabType(t)}
                    className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                      cabType === t ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Pickup Location
                  </span>
                  <input
                    type="text"
                    value={cabPickup}
                    onChange={(e) => setCabPickup(e.target.value)}
                    className="bg-transparent text-white font-bold text-sm outline-none w-full"
                  />
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Drop Location
                  </span>
                  <input
                    type="text"
                    value={cabDrop}
                    onChange={(e) => setCabDrop(e.target.value)}
                    className="bg-transparent text-white font-bold text-sm outline-none w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* HOLIDAYS INPUTS */}
          {activeTab === "packages" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Destination
                </span>
                <input
                  type="text"
                  value={packageDest}
                  onChange={(e) => setPackageDest(e.target.value)}
                  className="bg-transparent text-white font-bold text-sm outline-none w-full"
                />
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Travel Month
                </span>
                <select className="bg-transparent text-white font-bold text-sm outline-none w-full cursor-pointer">
                  <option value="sep" className="bg-slate-900">September 2026</option>
                  <option value="oct" className="bg-slate-900">October 2026</option>
                  <option value="nov" className="bg-slate-900">November 2026</option>
                </select>
              </div>
            </div>
          )}

          {/* TRAINS INPUTS */}
          {activeTab === "trains" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Route
                </span>
                <div className="text-sm font-bold text-white">New Delhi (NDLS) → Jaipur Junction (JP)</div>
                <div className="text-[11px] text-slate-400">Vande Bharat Express (Train #20977)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Class
                </span>
                <div className="text-sm font-bold text-white">Executive Chair Car &bull; Tomorrow</div>
                <div className="text-[11px] text-emerald-400">Confirmed Seats Available</div>
              </div>
            </div>
          )}

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleExecuteSearch}
              className="px-10 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
