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
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-extrabold text-white">
            {type === "flights" && `Flights: ${searchParams?.fromCity?.city || "Mumbai"} → ${searchParams?.toCity?.city || "New Delhi / Gurgaon"}`}
            {type === "hotels" && `Stays in ${searchParams?.hotelCity || "Gurgaon & NCR"}`}
            {type === "cabs" && `Airport Cabs & Transfers`}
            {type === "packages" && `Holidays & Tour Packages`}
            {type === "trains" && "Vande Bharat Express"}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">All-inclusive fares with zero convenience fee</p>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer"
          >
            <option value="popular">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Minimal Filter Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 sticky top-24 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Filters</span>
              <button
                onClick={() => {
                  setMaxPrice(50000);
                  setOnlyNonStop(false);
                  setSelectedStar(null);
                }}
                className="text-[11px] text-blue-400 hover:text-blue-300 font-medium"
              >
                Reset
              </button>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Max Price:</span>
                <span className="text-white font-bold">{formatPrice(maxPrice)}</span>
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

            {/* Flight filter */}
            {type === "flights" && (
              <div>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyNonStop}
                    onChange={(e) => setOnlyNonStop(e.target.checked)}
                    className="rounded accent-blue-500"
                  />
                  <span>Non-stop Only</span>
                </label>
              </div>
            )}

            {/* Hotel filter */}
            {type === "hotels" && (
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-2">Star Rating</span>
                <div className="flex gap-2">
                  {[5, 4, 3].map((stars) => (
                    <button
                      key={stars}
                      onClick={() => setSelectedStar(selectedStar === stars ? null : stars)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                        selectedStar === stars
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {stars}★
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results List */}
        <div className="lg:col-span-9 space-y-3">
          {/* FLIGHT RESULTS */}
          {type === "flights" &&
            flights.map((flight) => (
              <div
                key={flight.id}
                className="bg-[#0f111a] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Airline */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-blue-400 text-xs">
                      {flight.airlineCode}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {flight.airline}{" "}
                        <span className="text-xs text-slate-400 font-normal">({flight.flightNumber})</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{flight.terminal}</div>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-center gap-6">
                    <div className="text-left">
                      <div className="text-base font-bold text-white">{flight.departureTime}</div>
                      <div className="text-xs text-slate-400">{flight.fromCode}</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-slate-400">{flight.duration}</span>
                      <div className="w-20 h-0.5 bg-slate-800 my-1 relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 -top-[2px]" />
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold">{flight.stops}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-bold text-white">{flight.arrivalTime}</div>
                      <div className="text-xs text-slate-400">{flight.toCode}</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center sm:flex-col sm:items-end justify-between border-t sm:border-t-0 border-slate-800/60 pt-3 sm:pt-0">
                    <div>
                      <div className="text-xl font-bold text-white">{formatPrice(flight.priceINR)}</div>
                      <div className="text-[10px] text-slate-400">All-inclusive</div>
                    </div>

                    <button
                      onClick={() => onBookItem(flight, "flight")}
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* HOTEL RESULTS */}
          {type === "hotels" &&
            hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-[#0f111a] border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 transition-all hover:shadow-lg"
              >
                <div className="sm:col-span-4 h-48 sm:h-full relative min-h-[160px]">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                </div>

                <div className="sm:col-span-8 p-4 sm:p-5 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs text-amber-400 font-semibold mb-1">
                          {"★".repeat(hotel.starRating)} {hotel.starRating} Star
                        </div>
                        <h3 className="text-base font-bold text-white">{hotel.name}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{hotel.area}</p>
                      </div>

                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                        ★ {hotel.userRating}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-300 mt-2">
                      📍 {hotel.peakCommuteToCyberHub} &bull; {hotel.distanceToMetro}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
                    <div>
                      <div className="text-lg font-bold text-white">{formatPrice(hotel.pricePerNightINR)}</div>
                      <div className="text-[10px] text-emerald-400">Free Cancellation Available</div>
                    </div>

                    <button
                      onClick={() => onBookItem(hotel, "hotel")}
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* CABS */}
          {type === "cabs" &&
            cabs.map((cab) => (
              <div
                key={cab.id}
                className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img src={cab.image} alt={cab.carModel} className="w-20 h-14 rounded-xl object-cover" />
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase">{cab.category}</span>
                    <h3 className="text-sm font-bold text-white">{cab.carModel}</h3>
                    <div className="text-xs text-slate-400 mt-0.5">Seats {cab.capacity} &bull; Tolls Included</div>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-end justify-between border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
                  <div className="text-lg font-bold text-white">{formatPrice(cab.basePriceINR)}</div>
                  <button
                    onClick={() => onBookItem(cab, "cab")}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                  >
                    Book Cab
                  </button>
                </div>
              </div>
            ))}

          {/* PACKAGES */}
          {type === "packages" &&
            packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#0f111a] border border-slate-800 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-12"
              >
                <div className="sm:col-span-4 h-44 sm:h-full relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-8 p-4 sm:p-5 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase">{pkg.duration}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{pkg.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{pkg.destination}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
                    <div className="text-lg font-bold text-white">{formatPrice(pkg.pricePerPersonINR)}/person</div>
                    <button
                      onClick={() => onBookItem(pkg, "package")}
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                    >
                      View Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* TRAINS */}
          {type === "trains" && (
            <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-6 text-center space-y-3">
              <Train className="w-8 h-8 text-blue-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Vande Bharat Express (Train #20977)</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Daily fast train between New Delhi / Gurgaon (GGN) and Jaipur Junction with executive seats.
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
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Book Chair Car &bull; ₹1,450
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
