import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import FeaturedHotels from '@/components/FeaturedHotels';
import TravelPackages from '@/components/TravelPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomerReviews from '@/components/CustomerReviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Clean Hero with Booking Search */}
        <Hero />

        {/* Popular Destinations */}
        <PopularDestinations />

        {/* Featured Hotels */}
        <FeaturedHotels />

        {/* Holiday Travel Packages */}
        <TravelPackages />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
