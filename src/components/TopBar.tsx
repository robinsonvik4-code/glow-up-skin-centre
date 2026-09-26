import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { CLINIC_CONFIG, SECOND_CLINIC_LOCATION } from '../data/clinicData';

export const TopBar: React.FC = () => {
  return (
    <aside
      id="top-info-bar"
      aria-label="Clinic Quick Information"
      className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-200"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
            <span className="font-medium text-white">Jamalpur, {CLINIC_CONFIG.city}</span>
            <span className="hidden text-slate-500 sm:inline">•</span>
            <span className="hidden text-slate-300 sm:inline">{SECOND_CLINIC_LOCATION.city}, {SECOND_CLINIC_LOCATION.district}</span>
          </div>

          <div className="hidden items-center gap-1.5 text-slate-300 lg:flex">
            <Clock className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden="true" />
            <span>OPD: {CLINIC_CONFIG.opdTimings.morning} & {CLINIC_CONFIG.opdTimings.evening}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs sm:gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="h-3 w-3 shrink-0 text-sky-400" aria-hidden="true" />
            <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="font-semibold text-white transition-colors hover:text-sky-300">
              {CLINIC_CONFIG.primaryPhone}
            </a>
            <span className="hidden text-slate-500 sm:inline">|</span>
            <a href={`tel:${CLINIC_CONFIG.secondaryPhone.replace(/\s+/g, '')}`} className="hidden text-slate-300 transition-colors hover:text-sky-300 sm:inline">
              {CLINIC_CONFIG.secondaryPhone}
            </a>
          </div>

          <a href="#appointment-form" className="font-medium text-sky-300 underline transition-colors hover:text-white">
            Enquire Now
          </a>
        </div>
      </div>
    </aside>
  );
};
