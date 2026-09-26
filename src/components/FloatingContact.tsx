import React, { useState } from 'react';
import { Phone, Calendar, MessageCircle, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface FloatingContactProps {
  onBookClick: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onBookClick }) => {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);

  return (
    <>
      {/* Fixed Mobile Contact Bar (Strictly Mobile Only: Call & Request Appointment) */}
      <div
        id="mobile-fixed-contact-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 sm:hidden shadow-lg flex items-center gap-3"
      >
        {/* Call Clinic Direct Action */}
        <a
          id="mobile-bar-call-btn"
          href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs py-3 px-3 rounded-xl border border-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-600" />
          <span>Call Clinic</span>
        </a>

        {/* Request Appointment Action */}
        <button
          id="mobile-bar-book-btn"
          type="button"
          onClick={onBookClick}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs py-3 px-3 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Appointment</span>
        </button>

        {/* WhatsApp Action: ONLY if confirmed number is set */}
        {CLINIC_CONFIG.whatsappNumber && (
          <a
            id="mobile-bar-whatsapp-btn"
            href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 bg-emerald-600 text-white rounded-xl shadow-xs"
            aria-label="WhatsApp clinic"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Desktop Floating Action (Bottom-Right) */}
      <div
        id="desktop-floating-contact"
        className="hidden sm:block fixed bottom-6 right-6 z-30"
      >
        {isDesktopExpanded ? (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 w-72">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
              <span className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Direct Clinic Reach
              </span>
              <button
                type="button"
                onClick={() => setIsDesktopExpanded(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-700 transition-colors text-left text-xs font-medium border border-slate-100"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-slate-900">{CLINIC_CONFIG.primaryPhone}</span>
                  <span className="text-[11px] text-slate-500">Primary Reception</span>
                </div>
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.secondaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-700 transition-colors text-left text-xs font-medium border border-slate-100"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-slate-900">{CLINIC_CONFIG.secondaryPhone}</span>
                  <span className="text-[11px] text-slate-500">Secondary Line</span>
                </div>
              </a>

              {CLINIC_CONFIG.whatsappNumber && (
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Glow Up Skin Centre, I would like to enquire about a consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 text-emerald-800 transition-colors text-left text-xs font-medium border border-emerald-100 bg-emerald-50/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-emerald-950">WhatsApp Clinic</span>
                    <span className="text-[11px] text-emerald-700">Instant Chat Available</span>
                  </div>
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  setIsDesktopExpanded(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors cursor-pointer mt-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            id="desktop-floating-toggle-btn"
            onClick={() => setIsDesktopExpanded(true)}
            className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer border border-slate-700/80"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-bold tracking-wide">Call or Book</span>
          </button>
        )}
      </div>
    </>
  );
};
