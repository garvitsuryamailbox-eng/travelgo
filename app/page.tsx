"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PassengerAssuranceBanner from "../components/PassengerAssuranceBanner";
import HeroBookingWidget from "../components/HeroBookingWidget";
import SearchResults from "../components/SearchResults";
import CityGuidesExplorer from "../components/CityGuidesExplorer";
import TrendingDestinations from "../components/TrendingDestinations";
import OffersBanner from "../components/OffersBanner";
import TripConciergeModal from "../components/TripConciergeModal";
import MyBookingsDrawer from "../components/MyBookingsDrawer";
import BookingModal from "../components/BookingModal";
import AuthModal from "../components/AuthModal";
import PrintableTicketModal from "../components/PrintableTicketModal";
import ToastContainer, { ToastMessage } from "../components/ToastNotification";
import Footer from "../components/Footer";
import TripPlannerCard from "../components/TripPlannerCard";
import BudgetDiscovery from "../components/BudgetDiscovery";
import CompleteTripCard from "../components/CompleteTripCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("flights");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [user, setUser] = useState<{ name: string; loggedIn: boolean; email?: string } | null>({
    name: "Garvit Surya",
    email: "garvit@travelgo.in",
    loggedIn: true
  });

  // Toasts State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (toast: { type: "success" | "info" | "error"; title: string; message?: string }) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, ...toast }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Modals state
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);
  const [selectedCityGuide, setSelectedCityGuide] = useState<string>("gurgaon");

  // Printable E-Ticket Modal State
  const [printableBooking, setPrintableBooking] = useState<any>(null);

  // Search parameters and results
  const [searchParams, setSearchParams] = useState<any>({
    type: "flights",
    fromCity: { code: "BOM", city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj Intl (T2)" },
    toCity: { code: "DEL", city: "New Delhi / Gurgaon NCR", airport: "Indira Gandhi Intl (Terminal 3)" },
    departureDate: "2026-09-24",
    returnDate: "2026-09-28",
    travelersCount: 1,
    cabinClass: "Economy",
    hotelCity: "Gurgaon (DLF Cyber City)",
    cabType: "Airport Transfer"
  });

  // Whether search results are visible (only after user hits Search)
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Booking Checkout state
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<any>(null);
  const [bookingType, setBookingType] = useState<"flight" | "hotel" | "cab" | "package" | "train">("flight");
  const [appliedPromo, setAppliedPromo] = useState<string>("TRAVELGO500");

  // User Bookings state (Persisted in data/bookings.json + localStorage)
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    async function loadBookings() {
      try {
        const res = await fetch("/api/bookings");
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.bookings) && data.bookings.length > 0) {
            setBookings(data.bookings);
            localStorage.setItem("travelgo_user_bookings", JSON.stringify(data.bookings));
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load from /api/bookings, falling back to localStorage", err);
      }

      // Fallback to localStorage if API call fails
      try {
        const saved = localStorage.getItem("travelgo_user_bookings");
        if (saved) {
          setBookings(JSON.parse(saved));
        }
      } catch (e) {
        console.error(e);
      }
    }

    loadBookings();
  }, []);

  const handleSearch = (params: any) => {
    setSearchParams(params);
    setSearchPerformed(true);
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

  const handleBookingSuccess = async (newBooking: any) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);

    showToast({
      type: "success",
      title: "Demo Booking Confirmed!",
      message: `PNR ${newBooking.pnr} generated for ${newBooking.itemTitle}. (This is a demo — no real booking was made.)`
    });

    try {
      localStorage.setItem("travelgo_user_bookings", JSON.stringify(updated));
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking)
      });
    } catch (e) {
      console.error("Failed to persist booking to /api/bookings", e);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    const updated = bookings.filter((b) => b.id !== bookingId);
    setBookings(updated);
    try {
      localStorage.setItem("travelgo_user_bookings", JSON.stringify(updated));
      await fetch(`/api/bookings?id=${bookingId}`, {
        method: "DELETE"
      });
    } catch (e) {
      console.error("Failed to cancel booking via /api/bookings", e);
    }
  };

  const handleLogout = () => {
    setUser(null);
    showToast({
      type: "info",
      title: "Logged Out Successfully",
      message: "You have been safely signed out from TravelGo."
    });
  };

  const handleLoginSuccess = (userData: { name: string; loggedIn: boolean; email: string }) => {
    setUser(userData);
    showToast({
      type: "success",
      title: "Welcome Back, " + userData.name.split(" ")[0] + "!",
      message: "Your trip planning dashboard is ready."
    });
  };

  const handleOpenCityGuide = (destId = "gurgaon") => {
    setSelectedCityGuide(destId);
    const guideElement = document.getElementById("city-guides-hub");
    if (guideElement) {
      guideElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickBookFromGuide = (service: "hotels" | "cabs" | "flights", cityName: string) => {
    setActiveTab(service);
    setSearchParams({
      ...searchParams,
      type: service,
      hotelCity: cityName,
      toCity: { code: "DEL", city: cityName, airport: "Indira Gandhi Intl (Terminal 3)" }
    });
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const scrollToPlanner = () => {
    const el = document.getElementById("trip-planner");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSearch = () => {
    const el = document.getElementById("booking-search-widget");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f2f5f8] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* ── 1. NAVBAR ── */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookings={() => setBookingsDrawerOpen(true)}
        bookingCount={bookings.length}
        onOpenWiki={handleOpenCityGuide}
        currency={currency}
        setCurrency={setCurrency}
        onOpenAuth={() => setAuthModalOpen(true)}
        user={user}
        onOpenConcierge={() => setConciergeModalOpen(true)}
      />

      <main className="flex-1">

        {/* ── 2. HERO — Planning-first ── */}
        <section className="relative bg-[#051334] text-white overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#051334] via-[#08204a] to-[#0a2d5e] opacity-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,140,255,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f2f5f8] to-transparent" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
            {/* Demo badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Portfolio Prototype · Demo Prices Only
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Your Next Journey
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                Starts With a Plan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
              Plan your trip, understand the real cost, and explore everything before you book.
              <br />
              <span className="text-sky-400 font-bold">Know the trip. Know the cost. Then book.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="hero-plan-trip-btn"
                onClick={scrollToPlanner}
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-black text-sm shadow-xl shadow-blue-500/30 active:scale-95 transition-all"
              >
                🗺️ Plan My Trip
              </button>
            </div>
          </div>
        </section>

        {/* ── 3. SEARCH WIDGET ── */}
        <div id="booking-search-widget" className="bg-white border-y border-slate-200 py-2">
          <HeroBookingWidget
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onSearch={handleSearch}
            onOpenWiki={handleOpenCityGuide}
            onOpenConcierge={() => setConciergeModalOpen(true)}
          />
        </div>



        {/* ── 5. SEARCH RESULTS (only shown after search) ── */}
        {searchPerformed && (
          <SearchResults
            searchParams={searchParams}
            onBookItem={handleBookItem}
            currency={currency}
            onOpenWiki={handleOpenCityGuide}
          />
        )}

        {/* ── 6. TRIP PLANNER ── */}
        <section id="trip-planner-section" className="py-8 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <span>🗺️ PLAN YOUR TRIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Where Do You Want to Go?
            </h2>
          </div>
          <TripPlannerCard
            onSearch={handleSearch}
            onOpenConcierge={() => setConciergeModalOpen(true)}
          />
        </section>



        {/* ── 8. POPULAR DESTINATIONS ── */}
        <TrendingDestinations
          onSelectDest={(destId) => handleOpenCityGuide(destId)}
          onBookHotel={(cityName) => handleQuickBookFromGuide("hotels", cityName)}
        />

        {/* ── 9. COMPLETE TRIP IDEAS ── */}
        <CompleteTripCard
          onBookFlight={() => {
            setActiveTab("flights");
            scrollToSearch();
          }}
        />

        {/* ── 10. DEALS & OFFERS ── */}
        <OffersBanner
          onApplyPromoCode={(code) => {
            setAppliedPromo(code);
            showToast({
              type: "success",
              title: "Promo Code Selected!",
              message: `Code "${code}" activated. Demo discount will be shown at checkout.`
            });
          }}
        />

        {/* ── 11. CITY GUIDES ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-t border-slate-200/60 my-4" />
        </div>
        <CityGuidesExplorer
          selectedDestId={selectedCityGuide}
          onQuickBook={handleQuickBookFromGuide}
        />
      </main>

      {/* ── 12. FOOTER ── */}
      <Footer
        onOpenWiki={handleOpenCityGuide}
        onSetTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 120, behavior: "smooth" });
        }}
      />

      {/* ── MODALS ── */}

      {/* Slide-over My Bookings */}
      <MyBookingsDrawer
        isOpen={bookingsDrawerOpen}
        onClose={() => setBookingsDrawerOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        currency={currency}
        onViewPrintableTicket={(b) => setPrintableBooking(b)}
        onShowToast={showToast}
      />

      {/* Demo Checkout Modal */}
      <BookingModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        item={selectedBookingItem}
        type={bookingType}
        currency={currency}
        prefilledPromo={appliedPromo}
        onBookingSuccess={handleBookingSuccess}
        onShowToast={showToast}
        onViewPrintableTicket={(b) => setPrintableBooking(b)}
      />

      {/* AI Trip Planner Concierge */}
      <TripConciergeModal
        isOpen={conciergeModalOpen}
        onClose={() => setConciergeModalOpen(false)}
        onTriggerSearch={handleQuickBookFromGuide}
        onOpenWiki={handleOpenCityGuide}
      />

      {/* Auth / Profile Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={user}
        bookingCount={bookings.length}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
        onOpenBookings={() => setBookingsDrawerOpen(true)}
      />

      {/* Demo Printable E-Ticket */}
      <PrintableTicketModal
        isOpen={Boolean(printableBooking)}
        onClose={() => setPrintableBooking(null)}
        booking={printableBooking}
        currency={currency}
      />
    </div>
  );
}
