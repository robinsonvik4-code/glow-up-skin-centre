import React, { useState } from 'react';
import { Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

interface FloatingContactProps {
  onBookClick: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onBookClick }) => {
  const [open, setOpen] = useState(false);
  const whatsapp = CLINIC_CONFIG.whatsappNumber?.replace(/\D/g, '');

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 hidden sm:flex flex-col items-end gap-2">
        {open && (
          <div className="mb-1 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">
              <Phone className="h-4 w-4 text-teal-700" /> Call Clinic
            </a>
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50">
                <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
              </a>
            )}
            <button type="button" onClick={onBookClick} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:bg-sky-50">
              <Calendar className="h-4 w-4 text-sky-600" /> Book Appointment
            </button>
          </div>
        )}
        <button type="button" onClick={() => setOpen(!open)} className="grid h-14 w-14 place-items-center rounded-full bg-teal-700 text-white shadow-xl transition hover:bg-teal-800" aria-label="Contact options">
          {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white p-2 shadow-[0_-6px_20px_rgba(15,23,42,.08)] sm:hidden">
        <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
          <Phone className="h-5 w-5 text-teal-700" /> Call
        </a>
        {whatsapp ? (
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
            <MessageCircle className="h-5 w-5 text-emerald-600" /> WhatsApp
          </a>
        ) : <span />}
        <button type="button" onClick={onBookClick} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-700">
          <Calendar className="h-5 w-5 text-sky-600" /> Appointment
        </button>
      </div>
    </>
  );
};
