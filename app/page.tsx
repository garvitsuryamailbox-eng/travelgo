import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OffersSection from '@/components/OffersSection';
import PopularDestinations from '@/components/PopularDestinations';
import FeaturedHotels from '@/components/FeaturedHotels';
import TravelPackages from '@/components/TravelPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomerReviews from '@/components/CustomerReviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* 1. Animated Header Navigation */}
      <Navbar />

      {/* 2. Main Travel Content */}
      <main className="flex-1">
        {/* Animated Hero Section with Multi-Tab Search */}
        <Hero />

        {/* Bank Deals & Promo Codes with 1-Click Copy */}
        <OffersSection />

        {/* Popular Destinations with Filter Tabs */}
        <PopularDestinations />

        {/* Featured Hotels & Resorts */}
        <FeaturedHotels />

        {/* Handcrafted Holiday Packages */}
        <TravelPackages />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews & Ratings */}
        <CustomerReviews />

        {/* Instant Discount Newsletter */}
        <Newsletter />
      </main>

      {/* 3. Professional Footer */}
      <Footer />
    </div>
  );
}
