/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0F1012] text-[#FDFBF7] selection:bg-[#C5A059]/30 selection:text-[#FDFBF7] flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About 7 Wonders Studio */}
        <About />

        {/* 3. Services Section */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Why Choose 7 Wonders Studio */}
        <WhyChooseUs />

        {/* 5. Instagram & Editorial Gallery */}
        <GallerySection />

        {/* 6. Reviews & Social Proof */}
        <ReviewsSection />

        {/* 7. Appointment Booking Section */}
        <AppointmentSection />

        {/* 8. Location & Visit Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Bar (Height <= 15% mobile viewport) */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
