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
  Filter,
  ArrowUpDown,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock,
  Sparkles
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
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating" | "popular">("popular");
  const [onlyNonStop, setOnlyNonStop] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

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
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.priceINR - b.priceINR;
      if (sortBy === "price-high") return b.priceINR - a.priceINR;
      return 0;
    });
  }, [maxPrice, onlyNonStop, sortBy]);

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
    <div id="search-results-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-5 mb-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase">
              Live Fares
            </span>
            <span className="text-xs text-slate-500">&bull; 100% Upfront Transparent Pricing</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            {type === "flights" && `Flights: ${searchParams?.fromCity?.city || "Mumbai"} → ${searchParams?.toCity?.city || "New Delhi / Gurgaon"}`}
            {type === "hotels" && `Luxury Stays in ${searchParams?.hotelCity || "Gurgaon & NCR"}`}
            {type === "cabs" && `Guaranteed Airport Cabs (IGI T3)`}
            {type === "packages" && `Holidays & Tour Packages`}
            {type === "trains" && "Vande Bharat Express (Delhi - Jaipur)"}
          </h2>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-bold whitespace-nowrap">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs rounded-xl px-3 py-2 outline-none cursor-pointer hover:border-slate-300"
          >
            <option value="popular">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm sticky top-28 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-600" />
                Filters
              </span>
              <button
                onClick={() => {
                  setMaxPrice(50000);
                  setOnlyNonStop(false);
                  setSelectedStar(null);
                }}
                className="text-[11px] text-blue-600 hover:text-blue-700 font-bold"
              >
                Reset All
              </button>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Max Budget:</span>
                <span className="text-blue-600 font-black">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Flight filter */}
            {type === "flights" && (
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">Stops</span>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={onlyNonStop}
                    onChange={(e) => setOnlyNonStop(e.target.checked)}
                    className="w-4 h-4 rounded accent-blue-600"
                  />
                  <span>Direct Flights Only</span>
                </label>
              </div>
            )}

            {/* Hotel filter */}
            {type === "hotels" && (
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">Star Rating</span>
                <div className="flex gap-2">
                  {[5, 4, 3].map((stars) => (
                    <button
                      key={stars}
                      onClick={() => setSelectedStar(selectedStar === stars ? null : stars)}
                      className={`flex-1 py-2 rounded-xl text-xs font-black border transition-all ${
                        selectedStar === stars
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {stars}★
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gurgaon Radar Link */}
            <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs space-y-1.5">
              <div className="font-bold text-blue-900">Visiting Gurgaon?</div>
              <p className="text-blue-700 text-[11px] leading-relaxed">
                Check our Wikipedia destination guide for CyberHub dining and Metro connectivity.
              </p>
              <button
                onClick={() => onOpenWiki("gurgaon")}
                className="text-blue-600 font-extrabold hover:underline block text-[11px] pt-1"
              >
                Read Gurgaon Encyclopedia →
              </button>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="lg:col-span-9 space-y-4">
          {/* FLIGHTS LIST */}
          {type === "flights" &&
            flights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white border border-slate-200/80 hover:border-blue-400 rounded-3xl p-5 sm:p-6 transition-all shadow-sm hover:shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  {/* Airline details */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-blue-600 text-sm">
                      {flight.airlineCode}
                    </div>
                    <div>
                      <div className="text-base font-black text-slate-900">
                        {flight.airline}{" "}
                        <span className="text-xs text-slate-400 font-normal">({flight.flightNumber})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                          {flight.onTimeRating}% On-Time
                        </span>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          {flight.terminal}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flight Timeline */}
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="text-left">
                      <div className="text-xl font-black text-slate-900">{flight.departureTime}</div>
                      <div className="text-xs font-bold text-slate-500">{flight.fromCode}</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-xs text-slate-500 font-bold">{flight.duration}</span>
                      <div className="w-24 sm:w-28 h-0.5 bg-slate-200 my-1 relative">
                        <div className="w-2 h-2 rounded-full bg-blue-600 absolute left-1/2 -translate-x-1/2 -top-[3px]" />
                      </div>
                      <span className="text-[11px] text-emerald-600 font-extrabold">{flight.stops}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-black text-slate-900">{flight.arrivalTime}</div>
                      <div className="text-xs font-bold text-slate-500">{flight.toCode}</div>
                    </div>
                  </div>

                  {/* Price & Book Button */}
                  <div className="flex items-center sm:flex-col sm:items-end justify-between border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                    <div>
                      <div className="text-2xl font-black text-slate-900">{formatPrice(flight.priceINR)}</div>
                      <div className="text-[11px] text-emerald-600 font-bold">100% All-Inclusive</div>
                    </div>

                    <button
                      onClick={() => onBookItem(flight, "flight")}
                      className="mt-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* HOTELS LIST */}
          {type === "hotels" &&
            hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white border border-slate-200/80 hover:border-blue-400 rounded-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="sm:col-span-4 h-52 sm:h-full relative min-h-[180px]">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold">
                    {"★".repeat(hotel.starRating)} {hotel.starRating} Star
                  </span>
                </div>

                <div className="sm:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-black text-slate-900">{hotel.name}</h3>
                        <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          <span>{hotel.area}</span>
                        </p>
                      </div>

                      <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-xl">
                        ★ {hotel.userRating}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl inline-block">
                      📍 {hotel.peakCommuteToCyberHub} &bull; {hotel.distanceToMetro}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <div>
                      <div className="text-2xl font-black text-slate-900">
                        {formatPrice(hotel.pricePerNightINR)}
                      </div>
                      <div className="text-xs text-emerald-600 font-bold">Free Cancellation Available</div>
                    </div>

                    <button
                      onClick={() => onBookItem(hotel, "hotel")}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
                    >
                      BOOK ROOM
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* CABS LIST */}
          {type === "cabs" &&
            cabs.map((cab) => (
              <div
                key={cab.id}
                className="bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <img src={cab.image} alt={cab.carModel} className="w-24 h-16 rounded-2xl object-cover" />
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-black uppercase">
                      {cab.category}
                    </span>
                    <h3 className="text-base font-black text-slate-900 mt-1">{cab.carModel}</h3>
                    <div className="text-xs text-slate-500 mt-0.5">Seats {cab.capacity} &bull; Tolls &amp; Fastags Included</div>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-end justify-between border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                  <div className="text-2xl font-black text-slate-900">{formatPrice(cab.basePriceINR)}</div>
                  <button
                    onClick={() => onBookItem(cab, "cab")}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  >
                    BOOK CAB
                  </button>
                </div>
              </div>
            ))}

          {/* PACKAGES LIST */}
          {type === "packages" &&
            packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm hover:shadow-md transition-all"
              >
                <div className="sm:col-span-4 h-48 sm:h-full relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">{pkg.duration}</span>
                    <h3 className="text-lg font-black text-slate-900 mt-0.5">{pkg.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{pkg.destination}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="text-xl font-black text-slate-900">{formatPrice(pkg.pricePerPersonINR)}/person</div>
                    <button
                      onClick={() => onBookItem(pkg, "package")}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider"
                    >
                      VIEW TOUR
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* TRAINS */}
          {type === "trains" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-3 shadow-sm">
              <Train className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">Vande Bharat Express (Train #20977)</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Daily superfast train from New Delhi / Gurgaon to Jaipur with complimentary breakfast and tea.
              </p>
              <button
                onClick={() =>
                  onBookItem(
                    {
                      id: "tr-501",
                      airline: "Vande Bharat Express",
                      fromCity: "New Delhi (NDLS)",
                      toCity: "Jaipur Junction (JP)",
                      departureTime: "06:20",
                      arrivalTime: "10:15",
                      priceINR: 1450
                    },
                    "train"
                  )
                }
                className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase shadow-lg shadow-emerald-600/25"
              >
                BOOK CHAIR CAR &bull; ₹1,450
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
