import React from 'react';
import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG, TREATMENTS_CONFIG } from '../data/clinicData';

interface FooterProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatment }) => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-2xl font-extrabold text-white">GLOW UP</div>
            <div className="mt-1 text-sm font-bold tracking-wider text-teal-400">SKIN {CLINIC_CONFIG.spelling}</div>
            <p className="mt-3 text-xs tracking-wider text-slate-400">{CLINIC_CONFIG.subLine}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Dermatology, cosmetology, hair, laser and aesthetic consultations in Aligarh.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Popular Treatments</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {TREATMENTS_CONFIG.slice(0, 8).map((treatment) => (
                <button key={treatment.id} type="button" onClick={() => onSelectTreatment(treatment.title)} className="text-left text-xs text-slate-400 transition hover:text-teal-300">
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Clinic Information</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" /><span>{CLINIC_CONFIG.fullAddress}</span></div>
              <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-teal-400" />{CLINIC_CONFIG.primaryPhone}</a>
              <div className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" /><span>{CLINIC_CONFIG.opdTimings.morning}<br />{CLINIC_CONFIG.opdTimings.evening}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {CLINIC_CONFIG.clinicName}. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Medical information on this website is for clinic service guidance only.</span>
        </div>
      </div>
    </footer>
  );
};
