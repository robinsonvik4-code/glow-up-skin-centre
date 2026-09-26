import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutDoctor } from './components/AboutDoctor';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [selectedTreatmentTitle, setSelectedTreatmentTitle] = useState<string>('General Consultation');

  const scrollToAppointment = (treatmentTitle?: string) => {
    if (treatmentTitle) {
      setSelectedTreatmentTitle(treatmentTitle);
    }
    const element = document.getElementById('appointment-form');
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Focus the first form field for accessibility
      setTimeout(() => {
        const input = document.getElementById('fullName');
        input?.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-sky-100 selection:text-sky-900 pb-16 sm:pb-0">
      {/* Slim Top Info Bar */}
      <TopBar />

      {/* Main Sticky Navbar with Prominent Clinic Name & Tagline */}
      <Navbar onBookClick={() => scrollToAppointment()} />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToAppointment()} />

        {/* About the Doctor Section */}
        <AboutDoctor onBookClick={() => scrollToAppointment()} />

        {/* 14 Treatments Comprehensive Directory */}
        <ServicesSection
          onSelectService={(treatmentTitle) => scrollToAppointment(treatmentTitle)}
        />

        {/* Consultation Appointment Form */}
        <AppointmentForm selectedTreatmentTitle={selectedTreatmentTitle} />

        {/* Location, OPD Timings & Directions */}
        <ContactSection />
      </main>

      {/* Footer with Directory & Licensing Credits Modal */}
      <Footer onSelectTreatment={(treatmentTitle) => scrollToAppointment(treatmentTitle)} />

      {/* Mobile Fixed Contact Bar & Desktop Floating Reach Widget */}
      <FloatingContact onBookClick={() => scrollToAppointment()} />
    </div>
  );
}
