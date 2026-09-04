"use client";

import React, { useState, useMemo } from "react";
import {
  Plane,
  Building2,
  Car,
  Palmtree,
  Train,
  Star,
  Clock,
  Check,
  Shield,
  Filter,
  ArrowUpDown,
  Sparkles,
  MapPin,
  ChevronRight,
  Info,
  Luggage,
  Coffee,
  Wifi,
  Sparkle,
  ShieldCheck,
  Zap,
  VolumeX,
  Gauge,
  Lock
} from "lucide-react";
import {
  FLIGHTS_DATABASE,
  HOTELS_DATABASE,
  CABS_DATABASE,
  PACKAGES_DATABASE,
  FlightItem,
  HotelItem,
  CabItem,
  PackageItem
} from "../data/bookingData";

interface SearchResultsProps {
  searchParams: any;
  onBookItem: (item: any, type: "flight" | "hotel" | "cab" | "package" | "train") => void;
  currency: "INR" | "USD";
  onOpenWiki: (destId?: string) => void;
}

export default function SearchResults({
  searchParams,
  onBookItem,
  currency,
  onOpenWiki
}: SearchResultsProps) {
  const type = searchParams?.type || "flights";

  // Filter and Sort states
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating" | "ontime" | "popular">("popular");
  const [onlyNonStop, setOnlyNonStop] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [selectedAirline, setSelectedAirline] = useState<string>("ALL");
  const [onlyQuietRooms, setOnlyQuietRooms] = useState(false);

  const formatPrice = (priceINR: number) => {
    if (currency === "USD") {
      return `$${Math.round(priceINR / 85)}`;
    }
    return `₹${priceINR.toLocaleString("en-IN")}`;
  };

  // Filtered Flights
  const flights = useMemo(() => {
    return FLIGHTS_DATABASE.filter((fl) => {
      if (fl.priceINR > maxPrice) return false;
      if (onlyNonStop && fl.stops !== "Non-stop") return false;
      if (selectedAirline !== "ALL" && !fl.airline.toLowerCase().includes(selectedAirline.toLowerCase())) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.priceINR - b.priceINR;
      if (sortBy === "price-high") return b.priceINR - a.priceINR;
      if (sortBy === "ontime") return b.onTimeRating - a.onTimeRating;
      return 0;
    });
  }, [maxPrice, onlyNonStop, selectedAirline, sortBy]);

  // Filtered Hotels
  const hotels = useMemo(() => {
    return HOTELS_DATABASE.filter((ht) => {
      if (ht.pricePerNightINR > maxPrice) return false;
      if (selectedStar && ht.starRating < selectedStar) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.pricePerNightINR - b.pricePerNightINR;
      if (sortBy === "price-high") return b.pricePerNightINR - a.pricePerNightINR;
      if (sortBy === "rating") return b.userRating - a.userRating;
      return 0;
    });
  }, [maxPrice, selectedStar, sortBy]);

  // Filtered Cabs
  const cabs = useMemo(() => {
    return CABS_DATABASE.filter((cab) => {
      if (cab.basePriceINR > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.basePriceINR - b.basePriceINR;
      if (sortBy === "price-high") return b.basePriceINR - a.basePriceINR;
      return b.rating - a.rating;
    });
  }, [maxPrice, sortBy]);

  // Filtered Packages
  const packages = useMemo(() => {
    return PACKAGES_DATABASE.filter((pkg) => {
      if (pkg.pricePerPersonINR > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.pricePerPersonINR - b.pricePerPersonINR;
      if (sortBy === "price-high") return b.pricePerPersonINR - a.pricePerPersonINR;
      return b.rating - a.rating;
    });
  }, [maxPrice, sortBy]);

  return (
    <div id="search-results-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase flex items-center gap-1">
              <Lock className="w-3 h-3" />
              100% Upfront Transparent Fares
            </span>
            <span className="text-slate-400 text-xs">• Zero Convenience Fees at Checkout</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
            {type === "flights" && `Flights: ${searchParams?.fromCity?.city || "Mumbai"} → ${searchParams?.toCity?.city || "New Delhi / Gurgaon"}`}
            {type === "hotels" && `Hotels & Stays in ${searchParams?.hotelCity || "Gurgaon & NCR"}`}
            {type === "cabs" && `Guaranteed Cabs (${searchParams?.cabType || "Airport Pickup"})`}
            {type === "packages" && `Holiday Packages: ${searchParams?.packageDest || "Gurgaon & Golden Triangle"}`}
            {type === "trains" && "Express & Vande Bharat Trains (Delhi NCR Junctions)"}
          </h2>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-semibold whitespace-nowrap flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 outline-none font-semibold cursor-pointer"
          >
            <option value="popular">Recommended / Most Reliable</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            {type === "flights" && <option value="ontime">Highest On-Time Record</option>}
            <option value="rating">Highest User Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* FILTERS SIDEBAR */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sticky top-24 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-blue-400" />
                Filter Results
              </span>
              <button
                onClick={() => {
                  setMaxPrice(50000);
                  setOnlyNonStop(false);
                  setSelectedStar(null);
                  setSelectedAirline("ALL");
                  setOnlyQuietRooms(false);
                }}
                className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Price Range Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Max Budget:</span>
                <span className="text-emerald-400 font-bold">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Flights Specific Filters */}
            {type === "flights" && (
              <>
                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">Stops</span>
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={onlyNonStop}
                      onChange={(e) => setOnlyNonStop(e.target.checked)}
                      className="rounded accent-blue-500"
                    />
                    <span>Direct / Non-stop Only</span>
                  </label>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">Airlines</span>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {["ALL", "IndiGo", "Air India", "Emirates"].map((al) => (
                      <label key={al} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="airlineFilter"
                          checked={selectedAirline === al}
                          onChange={() => setSelectedAirline(al)}
                          className="accent-blue-500"
                        />
                        <span>{al === "ALL" ? "All Airlines" : al}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Hotel Specific Filters */}
            {type === "hotels" && (
              <div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">Star Rating</span>
                <div className="space-y-2">
                  {[5, 4, 3].map((stars) => (
                    <button
                      key={stars}
                      onClick={() => setSelectedStar(selectedStar === stars ? null : stars)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        selectedStar === stars
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {Array.from({ length: stars }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span>{stars} Stars & above</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gurgaon Radar Callout */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-blue-950/60 border border-cyan-500/30 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Sparkle className="w-4 h-4 text-cyan-400" />
                <span>Gurgaon Travel Intelligence</span>
              </div>
              <p className="text-slate-300 text-[11px]">
                Staying in Gurgaon? Use our Wikipedia city guide to discover top craft breweries, CyberHub fine dining, and Rapid Metro connectivity.
              </p>
              <button
                onClick={() => onOpenWiki("gurgaon")}
                className="text-cyan-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
              >
                Read Gurgaon Encyclopedia <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* RESULTS LISTING */}
        <div className="lg:col-span-9 space-y-4">
          {/* FLIGHT RESULTS */}
          {type === "flights" && (
            <div className="space-y-3">
              {flights.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                  No flights match your filter criteria. Try adjusting the price range or airline filters.
                </div>
              ) : (
                flights.map((flight) => (
                  <div
                    key={flight.id}
                    className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 rounded-3xl p-5 transition-all hover:shadow-2xl group relative overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Airline details & On-Time badge */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 p-2 flex items-center justify-center font-black text-blue-400 text-sm">
                          {flight.airlineCode}
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-white flex items-center gap-2">
                            {flight.airline}
                            <span className="text-[11px] font-mono text-slate-400 font-normal">
                              ({flight.flightNumber})
                            </span>
                          </div>

                          {/* Reliability & Terminal Tags */}
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            <span className="px-2 py-0.2 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3" />
                              {flight.onTimeRating}% On-Time Record
                            </span>
                            <span className="px-2 py-0.2 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                              {flight.terminal}
                            </span>
                            {flight.digiYatraEligible && (
                              <span className="px-2 py-0.2 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold border border-cyan-500/20">
                                DigiYatra Fast Track
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Flight Timeline */}
                      <div className="flex items-center gap-6">
                        <div className="text-left">
                          <div className="text-lg font-black text-white">{flight.departureTime}</div>
                          <div className="text-xs font-semibold text-slate-400">{flight.fromCode}</div>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-[11px] font-mono text-slate-400">{flight.duration}</span>
                          <div className="w-24 sm:w-32 h-0.5 bg-slate-700 my-1 relative">
                            <div className="w-2 h-2 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 -top-[3px]" />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400">{flight.stops}</span>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-black text-white">{flight.arrivalTime}</div>
                          <div className="text-xs font-semibold text-slate-400">{flight.toCode}</div>
                        </div>
                      </div>

                      {/* Transparent Price & Book Button */}
                      <div className="flex items-center md:flex-col md:items-end justify-between border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
                        <div>
                          <div className="text-2xl font-black text-emerald-400">{formatPrice(flight.priceINR)}</div>
                          <div className="text-[10px] text-emerald-400/90 font-semibold flex items-center gap-1">
                            <Lock className="w-3 h-3 text-emerald-400" />
                            <span>100% All-Inclusive (₹0 Extra Fee)</span>
                          </div>
                        </div>

                        <button
                          onClick={() => onBookItem(flight, "flight")}
                          className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-1.5"
                        >
                          <span>BOOK NOW</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* HOTEL RESULTS */}
          {type === "hotels" && (
            <div className="space-y-4">
              {hotels.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                  No hotels match your filters. Try adjusting price or star rating.
                </div>
              ) : (
                hotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 rounded-3xl overflow-hidden transition-all hover:shadow-2xl grid grid-cols-1 md:grid-cols-12"
                  >
                    {/* Hotel Image */}
                    <div className="md:col-span-4 relative h-52 md:h-full min-h-[220px]">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      {hotel.soundproofScore && (
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold flex items-center gap-1 border border-emerald-500/30">
                          <VolumeX className="w-3 h-3" />
                          {hotel.soundproofScore}
                        </span>
                      )}
                    </div>

                    {/* Hotel Details */}
                    <div className="md:col-span-8 p-5 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              {Array.from({ length: hotel.starRating }).map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              ))}
                              <span className="text-[10px] font-bold text-slate-400 ml-1">
                                {hotel.starRating} Star Luxury Hotel
                              </span>
                            </div>

                            <h3 className="text-lg font-black text-white hover:text-blue-400 transition-colors">
                              {hotel.name}
                            </h3>

                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{hotel.area}</span>
                            </p>
                          </div>

                          {/* Rating Badge */}
                          <div className="text-right shrink-0">
                            <div className="inline-flex items-center gap-1 bg-emerald-600 text-white px-2.5 py-1 rounded-xl text-xs font-black shadow-md">
                              <span>★ {hotel.userRating}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">({hotel.reviewCount} reviews)</div>
                          </div>
                        </div>

                        {/* Verified Peak Commute Radar (Key Pain Point Solved) */}
                        <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                          <div className="text-[11px] text-cyan-300 font-semibold bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-xl flex items-center gap-1">
                            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Peak Commute: {hotel.peakCommuteToCyberHub}</span>
                          </div>
                          <div className="text-[11px] text-indigo-300 font-semibold bg-indigo-950/40 border border-indigo-500/30 px-2.5 py-1 rounded-xl flex items-center gap-1">
                            <Train className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{hotel.distanceToMetro}</span>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex items-center gap-2 flex-wrap mt-3">
                          {hotel.amenities.slice(0, 4).map((amenity) => (
                            <span
                              key={amenity}
                              className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700/60"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer & Price */}
                      <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 line-through">
                              {formatPrice(hotel.originalPriceINR)}
                            </span>
                            <span className="text-xl font-black text-emerald-400">
                              {formatPrice(hotel.pricePerNightINR)}
                            </span>
                          </div>
                          <div className="text-[10px] text-emerald-400 font-semibold">{hotel.cancellationPolicy}</div>
                        </div>

                        <button
                          onClick={() => onBookItem(hotel, "hotel")}
                          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-1"
                        >
                          <span>BOOK ROOM</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* CAB RESULTS (Guaranteed with No Cancellation) */}
          {type === "cabs" && (
            <div className="space-y-4">
              {cabs.map((cab) => (
                <div
                  key={cab.id}
                  className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 rounded-3xl p-5 transition-all hover:shadow-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-16 rounded-2xl bg-slate-800 overflow-hidden shrink-0">
                        <img src={cab.image} alt={cab.carModel} className="w-full h-full object-cover" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                            {cab.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            Guaranteed Driver (₹{cab.compensationOnCancelINR} Cancel Protection)
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold text-white mt-1">{cab.carModel}</h3>
                        <div className="text-xs text-slate-400 flex items-center gap-3 mt-1">
                          <span>Seats: {cab.capacity} Persons</span>
                          <span>• {cab.luggageCapacity}</span>
                          <span>• {cab.driverAssignedETA}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center md:flex-col md:items-end justify-between border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
                      <div>
                        <div className="text-2xl font-black text-emerald-400">{formatPrice(cab.basePriceINR)}</div>
                        <div className="text-[10px] text-slate-400">All Tolls & Fastags Included</div>
                      </div>

                      <button
                        onClick={() => onBookItem(cab, "cab")}
                        className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-1"
                      >
                        <span>BOOK CAB</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PACKAGE RESULTS */}
          {type === "packages" && (
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12"
                >
                  <div className="md:col-span-4 relative h-52 md:h-full min-h-[200px]">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="md:col-span-8 p-5 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                          {pkg.theme}
                        </span>
                        <span className="text-xs font-bold text-emerald-400">★ {pkg.rating} ({pkg.reviews})</span>
                      </div>

                      <h3 className="text-lg font-black text-white mt-1">{pkg.title}</h3>
                      <p className="text-xs text-slate-400">Route: {pkg.destination}</p>

                      <div className="flex items-center gap-2 flex-wrap mt-3">
                        {pkg.inclusions.map((inc) => (
                          <span
                            key={inc}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700/60"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 line-through">
                            {formatPrice(pkg.originalPriceINR)}
                          </span>
                          <span className="text-xl font-black text-emerald-400">
                            {formatPrice(pkg.pricePerPersonINR)}
                          </span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-semibold">100% Zero Hidden Surcharges</div>
                      </div>

                      <button
                        onClick={() => onBookItem(pkg, "package")}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-1"
                      >
                        <span>BOOK TOUR</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TRAINS RESULTS */}
          {type === "trains" && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center space-y-4">
              <Train className="w-12 h-12 text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Vande Bharat Express (Train #20977)</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                High-speed connections between New Delhi / Gurgaon (GGN) and Jaipur Junction with executive chair car, onboard meals, and zero booking markup.
              </p>
              <button
                onClick={() =>
                  onBookItem(
                    {
                      id: "tr-501",
                      airline: "Vande Bharat Express (Train #20977)",
                      flightNumber: "VB-20977",
                      fromCity: "New Delhi (NDLS)",
                      toCity: "Jaipur Junction (JP)",
                      departureTime: "06:20",
                      arrivalTime: "10:15",
                      duration: "3h 55m",
                      priceINR: 1450
                    },
                    "train"
                  )
                }
                className="px-8 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg"
              >
                Book Vande Bharat (Delhi - Gurgaon - Jaipur) &bull; ₹1,450
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
