import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaHero from '@/components/AureliaHero';
import AureliaJourneyPlanner from '@/components/AureliaJourneyPlanner';
import SignatureJourneysSection from '@/components/SignatureJourneysSection';
import PrivateEscapesSection from '@/components/PrivateEscapesSection';
import ExceptionalStaysSection from '@/components/ExceptionalStaysSection';
import AureliaExperiencesSection from '@/components/AureliaExperiencesSection';
import BespokeTravelSection from '@/components/BespokeTravelSection';
import ConciergeFeatureSection from '@/components/ConciergeFeatureSection';
import JournalEditorialSection from '@/components/JournalEditorialSection';
import TripInspirationSection from '@/components/TripInspirationSection';
import AureliaTestimonials from '@/components/AureliaTestimonials';
import AureliaNewsletter from '@/components/AureliaNewsletter';
import AureliaFooter from '@/components/AureliaFooter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      {/* 1. Transparent-to-Solid Luxury Sticky Navbar */}
      <AureliaNavbar />

      {/* Main Luxury Content Flow */}
      <main className="flex-1">
        {/* 2. Full-Screen Cinematic Luxury Hero */}
        <AureliaHero />

        {/* 3. Luxury Bespoke Journey Planner */}
        <AureliaJourneyPlanner />

        {/* 4. Signature Curated Expeditions */}
        <SignatureJourneysSection />

        {/* 5. Private Escapes & Sanctuaries */}
        <PrivateEscapesSection />

        {/* 6. Exceptional Places to Stay */}
        <ExceptionalStaysSection />

        {/* 7. Experiences Worth Remembering */}
        <AureliaExperiencesSection />

        {/* 8. Bespoke Travel Design Studio */}
        <BespokeTravelSection />

        {/* 9. Private Client Concierge Desk */}
        <ConciergeFeatureSection />

        {/* 10. The Aurelia Journal */}
        <JournalEditorialSection />

        {/* 11. Global Destination Horizons & Inspiration */}
        <TripInspirationSection />

        {/* 12. Private Client Testimonials */}
        <AureliaTestimonials />

        {/* 13. The Art of Travel Dispatch */}
        <AureliaNewsletter />
      </main>

      {/* 14. Sophisticated Luxury Footer */}
      <AureliaFooter />
    </div>
  );
}
