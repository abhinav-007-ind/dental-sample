import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import TreatmentsSection from './components/TreatmentsSection';
import SignatureService from './components/SignatureService';
import InteractiveShadeSelector from './components/InteractiveShadeSelector';
import TechnologySection from './components/TechnologySection';
import SmileGallerySection from './components/SmileGallerySection';
import TreatmentEstimator from './components/TreatmentEstimator';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import BookingCTASection from './components/BookingCTASection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import BackToTop from './components/BackToTop';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleCloseTreatmentModal = () => {
    setSelectedTreatment(null);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans selection:bg-gold-light selection:text-charcoal-deep">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Trust Strip */}
        <TrustSection />

        {/* Section 3: Introduction */}
        <AboutSection />

        {/* Section 4: Treatments */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatment}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 5: Signature Service */}
        <SignatureService onOpenBooking={handleOpenBooking} />

        {/* Section 6: Ceramic Shade Studio */}
        <InteractiveShadeSelector onOpenBooking={handleOpenBooking} />

        {/* Section 7: Technology */}
        <TechnologySection onOpenBooking={handleOpenBooking} />

        {/* Section 8: Smile Gallery */}
        <SmileGallerySection onOpenBooking={handleOpenBooking} />

        {/* Section 9: Treatment Estimator */}
        <TreatmentEstimator onOpenBooking={handleOpenBooking} />

        {/* Section 10: Testimonials */}
        <TestimonialsSection />

        {/* Section 11: Doctor / Team */}
        <TeamSection onOpenBooking={handleOpenBooking} />

        {/* Section 12: Appointment CTA */}
        <BookingCTASection onOpenBooking={handleOpenBooking} />

        {/* Section 13: FAQ */}
        <FAQSection />

        {/* Section 14: Location */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Treatment Details Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={handleCloseTreatmentModal}
        onBookTreatment={() => setIsBookingOpen(true)}
      />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}

export default App;
