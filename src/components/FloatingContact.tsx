import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface FloatingContactProps {
  onBookClick: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onBookClick }) => {
  const whatsapp = CLINIC_CONFIG.whatsappNumber?.replace(/\D/g, '');

  return (
    <>
      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-40 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-emerald-500 text-white shadow-[0_14px_30px_rgba(5,150,105,.35)] transition hover:scale-105 hover:bg-emerald-600 sm:flex"
          aria-label="Chat with Glow Up Skin Centre on WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle className="h-8 w-8" strokeWidth={2.4} />
        </a>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white/96 p-2 shadow-[0_-6px_20px_rgba(15,23,42,.08)] backdrop-blur sm:hidden">
        <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
          <Phone className="h-5 w-5 text-emerald-700" /> Call
        </a>
        {whatsapp ? (
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
            <MessageCircle className="h-5 w-5 text-emerald-600" /> WhatsApp
          </a>
        ) : <span />}
        <button type="button" onClick={onBookClick} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
          <Calendar className="h-5 w-5 text-emerald-700" /> Appointment
        </button>
      </div>
    </>
  );
};
