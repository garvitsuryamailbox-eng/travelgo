'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import {
  Building2,
  MapPin,
  Star,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Users,
  Wifi,
  Coffee,
  Waves,
  ArrowRight,
  ChevronRight,
  Share2,
  Heart
} from 'lucide-react';
import { detailedHotelsData } from '@/data/travelData';

export default function HotelDetailPage() {
  const params = useParams();
  const hotelId = params?.id as string;
  
  // Find hotel or fallback to first hotel
  const hotel = detailedHotelsData.find((h) => h.id === hotelId) || detailedHotelsData[0];
  
  const [selectedRoomId, setSelectedRoomId] = useState<string>(hotel.rooms[0]?.id || 'room-1');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-sky-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/hotels" className="hover:text-sky-600">Hotels</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-900 font-bold truncate">{hotel.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          {/* Header Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase">
                  {hotel.category} Stay
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  {hotel.location}, {hotel.country}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {hotel.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => alert('Link copied to clipboard (Demo)!')}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm transition-colors"
                title="Share property"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => alert('Saved to demo wishlist!')}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 shadow-sm transition-colors"
                title="Save to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-10 h-72 md:h-[420px]">
            <div className="md:col-span-2 relative h-full overflow-hidden group">
              <Image
                src={hotel.gallery[0] || hotel.image}
                alt={hotel.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-3 h-full">
              {hotel.gallery.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative h-full overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${hotel.name} gallery ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Hotel Overview */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-black text-slate-900 mb-3">About This Property</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{hotel.description}</p>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Popular Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                    {hotel.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Room Selection Options */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-black text-slate-900 mb-4">Available Room Categories</h2>
                
                <div className="space-y-4">
                  {hotel.rooms.map((room) => {
                    const isSelected = selectedRoomId === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-teal-600 bg-teal-50/40 shadow-md'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-base text-slate-900">{room.name}</h4>
                              <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                                {room.size}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {room.bedType} · Fits {room.maxGuests} Guests
                            </div>

                            <ul className="mt-3 space-y-1 text-xs text-slate-600">
                              {room.inclusions.map((inc) => (
                                <li key={inc} className="flex items-center gap-1.5 text-teal-700 font-medium">
                                  <span>✓</span>
                                  <span>{inc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                            <div className="text-xs text-slate-400 line-through">
                              ₹{room.originalPrice.toLocaleString('en-IN')}
                            </div>
                            <div className="text-2xl font-black text-slate-900">
                              ₹{room.pricePerNight.toLocaleString('en-IN')}
                            </div>
                            <div className="text-[10px] text-slate-400">+ ₹{hotel.taxes} taxes / night</div>

                            <Link
                              href={`/booking?type=hotel&id=${hotel.id}&roomId=${room.id}`}
                              className="mt-3 inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                            >
                              Reserve Room
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cancellation Policy Reassurance */}
              <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-base text-emerald-900">Flexible Free Cancellation</h4>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    Cancel anytime up to 48 hours prior to your scheduled check-in date for a 100% full refund credited back to your original source account.
                  </p>
                </div>
              </div>

              {/* Guest Reviews */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Verified Guest Reviews</h2>
                    <p className="text-xs text-slate-500">Based on {hotel.reviewsCount} verified traveler reviews</p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-teal-50 text-teal-800 font-black text-lg">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span>{hotel.rating.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {hotel.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                        <span className="text-xs text-slate-400">{rev.date} · {rev.tripType}</span>
                      </div>
                      <div className="font-semibold text-xs text-slate-800 mb-1">{rev.title}</div>
                      <p className="text-xs text-slate-600 italic">&ldquo;{rev.comment}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl sticky top-28 space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Room Price Starts At</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-black text-slate-900">
                      ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500">/ night</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">
                    ✓ Zero cancellation fee before 48h
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Selected Dates:</span>
                    <span className="font-bold text-slate-900">15 Sep - 18 Sep 2026</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Duration:</span>
                    <span className="font-bold text-slate-900">3 Nights</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Guests:</span>
                    <span className="font-bold text-slate-900">2 Adults, 1 Room</span>
                  </div>
                </div>

                <Link
                  href={`/booking?type=hotel&id=${hotel.id}&roomId=${selectedRoomId}`}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-sm text-center block shadow-lg shadow-teal-600/30 transition-all active:scale-95 cursor-pointer"
                >
                  Book Instant Reservation
                </Link>

                <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Instant digital voucher & SMS confirmation sent upon booking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AureliaFooter />
    </div>
  );
}
