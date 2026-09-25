import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutDoctor } from './components/AboutDoctor';
import { GallerySection } from './components/GallerySection';
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
      setTimeout(() => {
        const input = document.getElementById('fullName');
        input?.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-sky-100 selection:text-sky-900 pb-16 sm:pb-0">
      <TopBar />
      <Navbar onBookClick={() => scrollToAppointment()} />
      <main id="main-content" className="flex-grow">
        <Hero onBookClick={() => scrollToAppointment()} />
        <AboutDoctor onBookClick={() => scrollToAppointment()} />
        <ServicesSection onSelectService={(treatmentTitle) => scrollToAppointment(treatmentTitle)} />
        <GallerySection />
        <AppointmentForm selectedTreatmentTitle={selectedTreatmentTitle} />
        <ContactSection />
      </main>
      <Footer onSelectTreatment={(treatmentTitle) => scrollToAppointment(treatmentTitle)} />
      <FloatingContact onBookClick={() => scrollToAppointment()} />
    </div>
  );
}
