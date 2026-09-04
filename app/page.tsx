"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AirportLivePulse from "../components/AirportLivePulse";
import PassengerAssuranceBanner from "../components/PassengerAssuranceBanner";
import HeroBookingWidget from "../components/HeroBookingWidget";
import OffersBanner from "../components/OffersBanner";
import SearchResults from "../components/SearchResults";
import WikiDestinationExplorer from "../components/WikiDestinationExplorer";
import TrendingDestinations from "../components/TrendingDestinations";
import TripConciergeModal from "../components/TripConciergeModal";
import MyBookingsDrawer from "../components/MyBookingsDrawer";
import BookingModal from "../components/BookingModal";
import AuthModal from "../components/AuthModal";
import Footer from "../components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("flights");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [user, setUser] = useState<{ name: string; loggedIn: boolean } | null>({
    name: "Garvit Surya",
    loggedIn: true
  });

  // Modals state
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);
  const [selectedWikiDest, setSelectedWikiDest] = useState<string>("gurgaon");

  // Search parameters and results
  const [searchParams, setSearchParams] = useState<any>({
    type: "flights",
    fromCity: { code: "BOM", city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj Intl (T2)" },
    toCity: { code: "DEL", city: "New Delhi / Gurgaon NCR", airport: "Indira Gandhi Intl (Terminal 3)" },
    departureDate: "2026-09-15",
    returnDate: "2026-09-20",
    travelersCount: 1,
    cabinClass: "Economy",
    specialFare: "Regular",
    hotelCity: "Gurgaon (DLF Cyber City & Golf Course Rd)",
    cabType: "Airport Transfer"
  });

  // Booking Checkout state
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<any>(null);
  const [bookingType, setBookingType] = useState<"flight" | "hotel" | "cab" | "package" | "train">("flight");
  const [appliedPromo, setAppliedPromo] = useState<string>("TRAVELGO500");

  // User Bookings state (Persisted in localStorage)
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("travelgo_user_bookings");
      if (saved) {
        setBookings(JSON.parse(saved));
      } else {
        // Sample starter booking with refund shield and terminal info
        const initial = [
          {
            id: "bk-sample-1",
            pnr: "TG829410",
            type: "hotel",
            itemTitle: "The Oberoi, Gurgaon",
            subtitle: "DLF Phase 5, Cyber City (2 Nights)",
            date: "Sep 15, 2026",
            travelerName: "Garvit Surya",
            email: "garvit@travelgo.in",
            phone: "+91 98765 43210",
            finalPrice: 16500,
            currency: "INR",
            status: "CONFIRMED",
            bookingRef: "ht-201",
            terminal: "12 mins to IGI T3 Airport",
            refundShield: true,
            createdAt: new Date().toISOString()
          }
        ];
        setBookings(initial);
        localStorage.setItem("travelgo_user_bookings", JSON.stringify(initial));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveBookings = (newBookings: any[]) => {
    setBookings(newBookings);
    try {
      localStorage.setItem("travelgo_user_bookings", JSON.stringify(newBookings));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = (params: any) => {
    setSearchParams(params);
    const resultsElement = document.getElementById("search-results-section");
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookItem = (item: any, type: "flight" | "hotel" | "cab" | "package" | "train") => {
    setSelectedBookingItem(item);
    setBookingType(type);
    setCheckoutModalOpen(true);
  };

  const handleBookingSuccess = (newBooking: any) => {
    const updated = [newBooking, ...bookings];
    saveBookings(updated);
  };

  const handleCancelBooking = (bookingId: string) => {
    const updated = bookings.filter((b) => b.id !== bookingId);
    saveBookings(updated);
  };

  const handleOpenWiki = (destId = "gurgaon") => {
    setSelectedWikiDest(destId);
    const wikiElement = document.getElementById("wiki-destination-hub");
    if (wikiElement) {
      wikiElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickBookFromWiki = (service: "hotels" | "cabs" | "flights", cityName: string) => {
    setActiveTab(service);
    setSearchParams({
      ...searchParams,
      type: service,
      hotelCity: cityName,
      toCity: { code: "DEL", city: cityName, airport: "Indira Gandhi Intl Airport (T3)" }
    });
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060810] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookings={() => setBookingsDrawerOpen(true)}
        bookingCount={bookings.length}
        onOpenWiki={handleOpenWiki}
        currency={currency}
        setCurrency={setCurrency}
        onOpenAuth={() => setAuthModalOpen(true)}
        user={user}
        onOpenConcierge={() => setConciergeModalOpen(true)}
      />

      {/* Live Airport & Terminal Pulse (IGI Terminal 3 / DigiYatra Radar) */}
      <AirportLivePulse />

      {/* Passenger Assurance Trust Pillars (Zero Hidden Fees, Instant 100% Refund, Cab Guarantee) */}
      <PassengerAssuranceBanner />

      <main className="flex-1">
        {/* MakeMyTrip Hero Booking Engine with Upfront Price Lock */}
        <HeroBookingWidget
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onSearch={handleSearch}
          onOpenWiki={handleOpenWiki}
          onOpenConcierge={() => setConciergeModalOpen(true)}
        />

        {/* Bank Deals & Coupon Promo Banners */}
        <OffersBanner
          onApplyPromoCode={(code) => {
            setAppliedPromo(code);
            alert(`Coupon "${code}" copied! It will be automatically applied at checkout.`);
          }}
        />

        {/* Live Filterable Search Results with Delay Risk & Peak Traffic Indicators */}
        <SearchResults
          searchParams={searchParams}
          onBookItem={handleBookItem}
          currency={currency}
          onOpenWiki={handleOpenWiki}
        />

        {/* Wikipedia Destination Guide (Featuring Gurgaon Cyber City) */}
        <WikiDestinationExplorer
          selectedDestId={selectedWikiDest}
          onQuickBook={handleQuickBookFromWiki}
        />

        {/* Trending Destinations Carousel / Grid */}
        <TrendingDestinations
          onSelectDest={(destId) => handleOpenWiki(destId)}
          onBookHotel={(cityName) => handleQuickBookFromWiki("hotels", cityName)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenWiki={handleOpenWiki}
        onSetTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 120, behavior: "smooth" });
        }}
      />

      {/* Slide-over My Bookings Drawer with Instant Refund Simulator */}
      <MyBookingsDrawer
        isOpen={bookingsDrawerOpen}
        onClose={() => setBookingsDrawerOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        currency={currency}
      />

      {/* Booking Checkout & E-Ticket Modal */}
      <BookingModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        item={selectedBookingItem}
        type={bookingType}
        currency={currency}
        prefilledPromo={appliedPromo}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* AI Travel Concierge Copilot Modal */}
      <TripConciergeModal
        isOpen={conciergeModalOpen}
        onClose={() => setConciergeModalOpen(false)}
        onTriggerSearch={handleQuickBookFromWiki}
        onOpenWiki={handleOpenWiki}
      />

      {/* Login / Sign Up Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />
    </div>
  );
}
