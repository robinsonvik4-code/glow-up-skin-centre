import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-2.5 border-b border-slate-100' : 'py-3 md:py-3.5 border-b border-slate-100'}`}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-5 lg:px-0">
        <div className="flex items-center justify-between">
          <a
            id="brand-logo-link"
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg py-1 pr-2"
            aria-label={`${CLINIC_CONFIG.clinicName}, Aligarh - Back to top`}
          >
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20"
              title="Glow Up Aesthetic Profile Emblem (Official vector asset in review)"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                aria-hidden="true"
              >
                <path
                  d="M12 7C14.5 7 17 8 18 10.5C18.8 12.5 18.2 14.5 17 16C15.8 17.5 15.5 18.5 16 20C16.5 21.5 18.5 22 19 22.5C17.5 24 15 25 12 25C7.5 25 5 21 5 16C5 11 7.5 7 12 7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 9C23.5 11 25 13.5 25 16.5C25 19 24 21 22.5 22.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray="2 2"
                />
                <circle cx="21" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="hidden sm:flex items-baseline gap-2">
                <span className="font-extrabold text-2xl lg:text-3xl tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
                  GLOW UP
                </span>
                <span className="font-bold text-lg lg:text-xl tracking-wider text-teal-700 uppercase border-l-2 border-emerald-500/80 pl-2">
                  SKIN {CLINIC_CONFIG.spelling}
                </span>
              </div>

              <div className="flex sm:hidden flex-col leading-tight">
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  GLOW UP
                </span>
                <span className="font-bold text-xs tracking-wider text-teal-700 uppercase">
                  SKIN {CLINIC_CONFIG.spelling}
                </span>
              </div>

              <div className="text-[10px] sm:text-xs font-semibold text-slate-600 tracking-wider uppercase mt-0.5">
                {CLINIC_CONFIG.subLine}
              </div>
            </div>
          </a>

          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-6 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`nav-link-${link.label.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-teal-700 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-700 hover:after:w-full after:transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 hover:border-teal-200 transition-colors"
                title="Call Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Clinic</span>
              </a>

              <button
                id="desktop-book-appointment-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Request Appointment</span>
              </button>
            </div>
          </nav>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
              className="p-2 text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
              aria-label="Call Clinic directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-quick-book-btn"
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 shadow-xl transition-all duration-200 px-4 pt-3 pb-6"
        >
          <div className="border-b border-slate-100 pb-3 mb-3">
            <div className="font-extrabold text-lg text-slate-900">{CLINIC_CONFIG.clinicName}</div>
            <div className="text-xs font-semibold text-teal-700 tracking-wide">{CLINIC_CONFIG.subLine}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Jamalpur, Aligarh, Uttar Pradesh</div>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`mobile-nav-link-${link.label.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Call: {CLINIC_CONFIG.primaryPhone}</span>
            </a>

            <button
              id="mobile-drawer-book-btn"
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-colors text-base cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
