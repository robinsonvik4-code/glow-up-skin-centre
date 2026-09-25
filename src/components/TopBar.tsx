import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export const TopBar: React.FC = () => {
  return (
    <aside
      id="top-info-bar"
      aria-label="Clinic Quick Information"
      className="border-b border-teal-700/20 bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 px-4 py-2 text-xs text-white"
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-100" aria-hidden="true" />
            <span className="font-medium">Jamalpur, {CLINIC_CONFIG.city}</span>
          </div>

          <div className="hidden items-center gap-1.5 md:flex">
            <Clock className="h-3.5 w-3.5 shrink-0 text-cyan-100" aria-hidden="true" />
            <span>{CLINIC_CONFIG.opdTimings.morning} & {CLINIC_CONFIG.opdTimings.evening}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0 text-cyan-100" aria-hidden="true" />
            <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="font-semibold hover:text-cyan-100">
              {CLINIC_CONFIG.primaryPhone}
            </a>
            <span className="hidden text-teal-200 sm:inline">|</span>
            <a href={`tel:${CLINIC_CONFIG.secondaryPhone.replace(/\s+/g, '')}`} className="hidden font-medium hover:text-cyan-100 sm:inline">
              {CLINIC_CONFIG.secondaryPhone}
            </a>
          </div>

          <a href="#appointment-form" className="font-semibold underline decoration-white/60 underline-offset-2 hover:text-cyan-100">
            Enquire Now
          </a>
        </div>
      </div>
    </aside>
  );
};
