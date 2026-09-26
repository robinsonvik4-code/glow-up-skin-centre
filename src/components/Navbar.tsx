import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Doctors', href: '#doctor' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Appointment', href: '#appointment-form' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (!element) return;
    const navOffset = 76;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber.replace(/\D/g, '')}`;

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full bg-transparent px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto max-w-[1120px] overflow-hidden rounded-[18px] border border-white/80 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? 'shadow-[0_10px_30px_rgba(15,23,42,0.16)]'
            : 'shadow-[0_10px_28px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.9)_inset]'
        }`}
      >
        <div className="flex min-h-[56px] items-center justify-between gap-3 px-3 sm:min-h-[58px] sm:px-4 lg:px-5">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex min-w-0 items-center gap-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 lg:min-w-[285px]"
            aria-label={`${CLINIC_CONFIG.clinicName}, Aligarh - Back to top`}
          >
            <img
              src="/images/glow-up-green-mark-transparent.png"
              alt="Glow Up Skin Centre logo"
              className="h-[38px] w-[38px] shrink-0 object-contain sm:h-[40px] sm:w-[40px]"
              loading="eager"
            />
            <div className="min-w-0 leading-none">
              <div className="truncate text-[19px] font-extrabold tracking-[0.005em] text-slate-900 sm:text-[21px] lg:text-[24px] xl:text-[25px]">
                Glow Up Skin Centre
              </div>
              <div className="mt-1 truncate text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-500 sm:text-[9px]">
                {CLINIC_CONFIG.subLine}
              </div>
            </div>
          </a>

          <nav aria-label="Main Navigation" className="hidden items-center lg:flex">
            <ul className="flex items-center gap-4 text-[13px] font-semibold text-slate-700 xl:gap-5 xl:text-[14px]">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-sky-600 after:transition-all ${
                      index === 0
                        ? 'text-sky-600 after:w-full'
                        : 'after:w-0 hover:text-sky-600 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex h-9 items-center gap-2 rounded-xl border border-sky-100 bg-sky-50/80 px-3 text-[10px] font-semibold text-slate-700 transition-colors hover:bg-sky-100"
              aria-label={`Call ${CLINIC_CONFIG.primaryPhone}`}
            >
              <Phone className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
              <span className="hidden xl:block leading-tight">
                <span className="block text-[9px] font-medium text-sky-600">Call Now</span>
                <span className="block text-[10px] font-bold text-slate-700">{CLINIC_CONFIG.primaryPhone}</span>
              </span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 text-[10px] font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
              className="rounded-lg bg-sky-50 p-2 text-sky-700"
              aria-label="Call clinic"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-slate-100 px-3 pb-3 pt-2 md:hidden">
            <nav aria-label="Mobile Navigation">
              <ul className="grid grid-cols-2 gap-1.5 text-sm font-medium text-slate-700">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-sky-50 hover:text-sky-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="rounded-lg bg-slate-100 px-3 py-2.5 text-xs font-semibold text-slate-800"
              >
                Book Appointment
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2.5 text-xs font-semibold text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};