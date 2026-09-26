import React, { useEffect, useState } from 'react';
import { Calendar, ChevronRight, Menu, Phone, X } from 'lucide-react';
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
    if (!element) return;
    const navOffset = 104;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/80 px-3 py-2.5 backdrop-blur-xl sm:px-4"
    >
      <div
        className={`mx-auto max-w-[1240px] rounded-[22px] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 shadow-[0_16px_34px_rgba(15,23,42,0.10),0_2px_0_rgba(255,255,255,0.98)_inset,0_-1px_0_rgba(148,163,184,0.12)_inset] transition-all duration-300 ${
          isScrolled ? 'shadow-[0_18px_40px_rgba(15,23,42,0.14),0_2px_0_rgba(255,255,255,0.98)_inset]' : ''
        }`}
      >
        <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex min-w-0 items-center gap-3 rounded-lg py-1 pr-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={`${CLINIC_CONFIG.clinicName}, Aligarh - Back to top`}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-sm shadow-emerald-500/20 sm:h-12 sm:w-12"
              title="Glow Up Skin Centre"
            >
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" aria-hidden="true">
                <path d="M12 7C14.5 7 17 8 18 10.5C18.8 12.5 18.2 14.5 17 16C15.8 17.5 15.5 18.5 16 20C16.5 21.5 18.5 22 19 22.5C17.5 24 15 25 12 25C7.5 25 5 21 5 16C5 11 7.5 7 12 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 9C23.5 11 25 13.5 25 16.5C25 19 24 21 22.5 22.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
                <circle cx="21" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex min-w-0 flex-col">
              <div className="hidden items-baseline gap-2 sm:flex">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-slate-800 lg:text-[28px]">
                  GLOW UP
                </span>
                <span className="border-l-2 border-sky-400/80 pl-2 text-base font-bold uppercase tracking-wider text-sky-600 lg:text-lg">
                  SKIN {CLINIC_CONFIG.spelling}
                </span>
              </div>

              <div className="flex flex-col leading-tight sm:hidden">
                <span className="text-lg font-extrabold tracking-tight text-slate-900">GLOW UP</span>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">SKIN {CLINIC_CONFIG.spelling}</span>
              </div>

              <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600 sm:text-[10px]">
                {CLINIC_CONFIG.subLine}
              </div>
            </div>
          </a>

          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden items-center gap-5 xl:flex">
            <ul className="flex items-center gap-5 text-[13px] font-semibold text-slate-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-600 after:transition-all hover:text-sky-600 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-sky-200 hover:text-sky-600"
              >
                <Phone className="h-3.5 w-3.5 text-sky-600" />
                <span>Call Clinic</span>
              </a>

              <button
                id="desktop-book-appointment-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-sky-700 hover:shadow-lg active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>Request Appointment</span>
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
              className="rounded-lg bg-sky-50 p-2 text-sky-700 transition-colors hover:bg-sky-100"
              aria-label="Call Clinic directly"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              id="mobile-quick-book-btn"
              type="button"
              onClick={onBookClick}
              className="hidden items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-700 sm:inline-flex"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="border-t border-slate-100 px-4 pb-5 pt-3 xl:hidden">
            <div className="border-b border-slate-100 pb-3">
              <div className="text-lg font-extrabold text-slate-900">{CLINIC_CONFIG.clinicName}</div>
              <div className="text-xs font-semibold tracking-wide text-sky-600">{CLINIC_CONFIG.subLine}</div>
            </div>

            <nav aria-label="Mobile Navigation" className="pt-2">
              <ul className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-700"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-3 grid grid-cols-1 gap-2 border-t border-slate-100 pt-3 sm:grid-cols-2">
              <a
                href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-800"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                <span>Call Clinic</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <Calendar className="h-4 w-4" />
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
