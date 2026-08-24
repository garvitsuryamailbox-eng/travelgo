import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OffersSection from '@/components/OffersSection';
import PopularDestinations from '@/components/PopularDestinations';
import FeaturedHotels from '@/components/FeaturedHotels';
import TravelPackages from '@/components/TravelPackages';
import ExperiencesSection from '@/components/ExperiencesSection';
import ArticleHubSection from '@/components/ArticleHubSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import RewardsSection from '@/components/RewardsSection';
import CustomerReviews from '@/components/CustomerReviews';
import FAQSection from '@/components/FAQSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Sticky Header with Navigation & Auth */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 6-Tab Booking Search Engine */}
        <Hero />

        {/* 2. Exclusive Offers & Bank Discount Coupons */}
        <OffersSection />

        {/* 3. Popular Tourist Destinations */}
        <PopularDestinations />

        {/* 4. Handpicked Stays & Luxury Hotels */}
        <FeaturedHotels />

        {/* 5. Handcrafted Holiday Packages */}
        <TravelPackages />

        {/* 6. Experiences Worth Travelling For */}
        <ExperiencesSection />

        {/* 7. Plan Your Trip: Luxury Article Hub (visitabudhabi style) */}
        <ArticleHubSection />

        {/* 8. Why TravelGo - 4 Core Value Pillars */}
        <WhyChooseUs />

        {/* 9. TravelGo Rewards & Loyalty Club */}
        <RewardsSection />

        {/* 10. Verified Customer Reviews & Ratings */}
        <CustomerReviews />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Instant Discount Newsletter */}
        <Newsletter />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
