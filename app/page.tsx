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
import MobileBottomNav from "../components/MobileBottomNav";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("flights");
  const [mobileSection, setMobileSection] = useState<string>("search");
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
    <div className="min-h-screen bg-[#f2f5f8] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white" style={{width: '100%', maxWidth: '100vw', overflowX: 'hidden'}}>
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

      <main className="flex-1 w-full overflow-x-hidden" style={{width: '100%', maxWidth: '100vw'}}>

        {/* ── 2. HERO — Premium redesign ── */}
        <section className="relative text-white overflow-hidden" style={{width: '100%', minHeight: '540px', background: 'linear-gradient(135deg, #020d28 0%, #041847 45%, #071f5c 100%)'}}>
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(0,87,228,0.14) 0%, transparent 70%)', transform: 'translate(20%, 30%)'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-30" style={{background: 'radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 60%)'}} />

          {/* Subtle grid lines */}
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px'}} />

          {/* Bottom fade to light */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{background: 'linear-gradient(to bottom, transparent, #f0f4f8)'}} />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-20 text-center">

            {/* Demo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)'}}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-[11px] font-bold uppercase tracking-[0.15em]">Portfolio Prototype · Demo Prices Only</span>
            </div>

            {/* Headline */}
            <h1 className="font-black text-white leading-[1.05] mb-6" style={{fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', letterSpacing: '-0.03em'}}>
              Your Next Journey
              <br />
              <span style={{background: 'linear-gradient(135deg, #60a5fa, #38bdf8, #7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Starts With a Plan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 font-medium max-w-xl mx-auto mb-10 leading-relaxed" style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'}}>
              Compare real trip costs — flights, hotels & transfers — all in one place.
              <br />
              <span className="text-sky-400 font-semibold">Know the cost. Then book smart. ✈️</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <button
                id="hero-plan-trip-btn"
                onClick={scrollToPlanner}
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-black text-sm active:scale-95 transition-all"
                style={{background: 'linear-gradient(135deg, #0057e4, #0284c7)', boxShadow: '0 8px 32px rgba(0,87,228,0.45)'}}
              >
                🗺️ Plan My Trip
              </button>
              <button
                onClick={scrollToSearch}
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-sm active:scale-95 transition-all"
                style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)'}}
              >
                ✈️ Search Flights
              </button>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[['🔒', 'Zero Hidden Fees'], ['⚡', 'Instant Confirmation'], ['📊', 'Full Cost Breakdown'], ['🎯', '2M+ Trips Planned']].map(([emoji, label]) => (
                <div key={label} className="trust-pill">
                  <span>{emoji}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. SEARCH WIDGET ── */}
        <div id="booking-search-widget" className="relative" style={{background: 'white', borderBottom: '1px solid rgba(15,23,42,0.08)'}}>
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
        <section id="trip-planner-section" className="py-16" style={{background: 'white'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8 text-center">
              <div className="section-eyebrow justify-center">
                <span>🗺️ Smart Planning</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900" style={{fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em'}}>
                Where Do You Want to Go?
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto font-medium">
                Plan your complete trip — budget, itinerary & experiences — before you book
              </p>
            </div>
            <TripPlannerCard
              onSearch={handleSearch}
              onOpenConcierge={() => setConciergeModalOpen(true)}
            />
          </div>
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
              title: "Promo Code Copied!",
              message: `Code "${code}" activated. Demo discount will be shown at checkout.`
            });
          }}
        />

        {/* ── 11. TRUST & ASSURANCE ── */}
        <PassengerAssuranceBanner />

        {/* ── 11. CITY GUIDES ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-t border-slate-200/60 my-4" />
        </div>
        <CityGuidesExplorer
          selectedDestId={selectedCityGuide}
          onQuickBook={handleQuickBookFromGuide}
        />
      </main>

      {/* ── 12. FOOTER (With Extra Bottom Spacing for Mobile Sticky Nav) ── */}
      <div className="pb-16 md:pb-0">
        <Footer
          onOpenWiki={handleOpenCityGuide}
          onSetTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 120, behavior: "smooth" });
          }}
        />
      </div>

      {/* ── 13. STICKY MOBILE BOTTOM NAVIGATION BAR ── */}
      <MobileBottomNav
        activeSection={mobileSection}
        onNavigate={(sec) => setMobileSection(sec)}
        bookingCount={bookings.length}
        onOpenBookings={() => setBookingsDrawerOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        isLoggedIn={Boolean(user?.loggedIn)}
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
