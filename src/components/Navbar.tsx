import React, { useEffect, useState } from 'react';
import { Menu, X, Calendar, ChevronRight, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Doctors', href: '#doctor' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Location & OPD', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 92;
      const elementPosition = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition + window.pageYOffset - navOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-slate-900/5 border-b border-emerald-100 py-2' : 'border-b border-slate-100 py-2.5'}`}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            id="brand-logo-link"
            href="#home"
            className="group flex min-w-0 items-center gap-3.5 rounded-xl py-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:flex-1"
            aria-label={`${CLINIC_CONFIG.clinicName}, Aligarh - Back to top`}
          >
            <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-emerald-200 bg-white shadow-md shadow-emerald-900/10 sm:h-16 sm:w-16">
              <svg viewBox="0 0 64 64" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
                <defs>
                  <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#34d399" />
                    <stop offset="1" stopColor="#047857" />
                  </linearGradient>
                </defs>
                <path d="M35 8c4 8 5 15 2 21-2 4-1 7 3 10-2 8-8 13-17 15-8-8-10-18-5-27 4-7 10-12 17-19Z" fill="url(#leafGreen)" />
                <path d="M24 46c7-7 11-16 12-27M24 38c4-2 8-5 11-9M23 31c4-2 8-6 11-10" fill="none" stroke="#d1fae5" strokeWidth="2.3" strokeLinecap="round" />
                <path d="M39 31c4 2 6 5 6 8-2 1-4 1-6 0 3 2 4 4 3 6-4 1-8 0-11-2" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 47c8 9 24 12 38 3" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="min-w-0 leading-none">
              <div className="hidden sm:block whitespace-nowrap">
                <span className="block text-[1.9rem] font-black leading-[0.95] tracking-[-0.045em] text-emerald-800 transition-colors group-hover:text-emerald-700 lg:text-[2.2rem] xl:text-[2.45rem]">
                  GLOW UP
                </span>
                <span className="mt-1 block text-[1.25rem] font-black leading-none tracking-[0.025em] text-emerald-800 lg:text-[1.45rem] xl:text-[1.65rem]">
                  SKIN {CLINIC_CONFIG.spelling}
                </span>
                <span className="mt-1.5 block text-[9px] font-semibold tracking-[0.28em] text-slate-500 lg:text-[10px]">
                  {CLINIC_CONFIG.subLine}
                </span>
              </div>

              <div className="sm:hidden">
                <span className="block text-lg font-black tracking-tight text-emerald-800">GLOW UP</span>
                <span className="block text-xs font-extrabold tracking-wide text-emerald-800">SKIN {CLINIC_CONFIG.spelling}</span>
              </div>
            </div>
          </a>

          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-4 xl:gap-6">
            <ul className="flex items-center gap-4 xl:gap-5 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative whitespace-nowrap py-2 transition-colors hover:text-emerald-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              id="desktop-book-appointment-btn"
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition hover:bg-emerald-800 hover:shadow-lg active:scale-[0.98]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700" aria-label="Call Clinic">
              <Phone className="h-4 w-4" />
            </a>
            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100" aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl lg:hidden">
          <div className="mb-3 border-b border-slate-100 pb-3">
            <div className="text-lg font-black text-emerald-800">{CLINIC_CONFIG.clinicName}</div>
            <div className="mt-1 text-xs font-semibold tracking-wide text-slate-500">{CLINIC_CONFIG.subLine}</div>
          </div>
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700">
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => { setIsMobileMenuOpen(false); onBookClick(); }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 font-bold text-white shadow-sm"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Appointment</span>
          </button>
        </div>
      )}
    </header>
  );
};
