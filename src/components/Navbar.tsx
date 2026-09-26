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
        className={`mx-auto max-w-[1120px] rounded-[24px] border border-slate-200/90 bg-gradient-to-b from-white via-slate-50 to-slate-50/90 shadow-[0_18px_40px_rgba(15,23,42,0.11),0_2px_0_rgba(255,255,255,0.98)_inset,0_-1px_0_rgba(148,163,184,0.12)_inset] transition-all duration-300 ${
          isScrolled ? 'shadow-[0_20px_44px_rgba(15,23,42,0.15),0_2px_0_rgba(255,255,255,0.98)_inset]' : ''
        }`}
      >
        <div className="flex min-h-[82px] items-center justify-between gap-4 px-4 sm:min-h-[88px] sm:px-5 lg:px-6">
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex min-w-0 items-center gap-3 rounded-lg py-1 pr-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={`${CLINIC_CONFIG.clinicName}, Aligarh - Back to top`}
          >
            <img
              src="/images/glow-up-skin-centre-logo.png"
              alt="Glow Up Skin Centre logo"
              className="h-[58px] w-auto shrink-0 object-contain sm:h-[66px]"
              loading="eager"
            />

            <div className="flex min-w-0 flex-col justify-center">
              <div className="hidden items-baseline gap-2 sm:flex">
                <span className="text-[33px] font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-slate-800 lg:text-[36px]">
                  GLOW UP
                </span>
                <span className="border-l-2 border-sky-400/80 pl-2 text-lg font-bold uppercase tracking-wider text-sky-600 lg:text-[19px]">
                  SKIN {CLINIC_CONFIG.spelling}
                </span>
              </div>

              <div className="flex flex-col leading-tight sm:hidden">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">GLOW UP</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">SKIN {CLINIC_CONFIG.spelling}</span>
              </div>

              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 sm:text-[11px]">
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