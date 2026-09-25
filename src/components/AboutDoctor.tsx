import React from 'react';
import { Calendar, Clock, MapPin, Stethoscope } from 'lucide-react';
import { CLINIC_CONFIG, DOCTOR_CONFIG, SECOND_DOCTOR_CONFIG } from '../data/clinicData';

interface AboutDoctorProps {
  onBookClick: () => void;
}

const doctors = [
  { ...DOCTOR_CONFIG, qualifications: [] as string[], imagePosition: 'center 58%', imageWidth: 899, imageHeight: 1599 },
  { ...SECOND_DOCTOR_CONFIG, qualifications: ['MD (Aligarh)', 'PGDCC ILAMED (Delhi)'], imagePosition: 'center 40%', imageWidth: 1181, imageHeight: 1332 },
];

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onBookClick }) => (
  <section id="doctor" aria-labelledby="doctor-heading" className="bg-white border-t border-slate-100 py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold text-sky-800 mb-4">
          <Stethoscope className="h-4 w-4" aria-hidden="true" />
          <span>Glow Up Skin Centre</span>
        </div>
        <h2 id="doctor-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Meet Our Doctors</h2>
        <p className="mt-3 text-base text-slate-600">Skin, hair and cosmetic consultations in Aligarh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 shadow-lg shadow-slate-200/40">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="aspect-[5/6] w-28 shrink-0 overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 sm:w-32 lg:w-36">
                <img src={doctor.image} alt={doctor.imageAlt} loading="lazy" width={doctor.imageWidth} height={doctor.imageHeight} style={{ objectPosition: doctor.imagePosition }} className="h-full w-full object-contain object-bottom" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">{doctor.name}</h3>
                <p className="mt-2 text-sm sm:text-base font-semibold text-sky-700">{doctor.designation}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              {doctor.qualifications.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2" aria-label={`${doctor.name} qualifications`}>
                  {doctor.qualifications.map((qualification) => (
                    <span key={qualification} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-slate-800">
                      {qualification}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-5 mb-6 text-sm sm:text-base leading-relaxed text-slate-600">{doctor.intro}</p>
              <button
                type="button"
                onClick={onBookClick}
                className="mt-auto self-start inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Request a Consultation
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
          <div>
            <p className="font-bold text-slate-900">Clinic OPD timings</p>
            <p className="mt-1 text-sm text-slate-700">Morning: {CLINIC_CONFIG.opdTimings.morning}</p>
            <p className="text-sm text-slate-700">Evening: {CLINIC_CONFIG.opdTimings.evening}</p>
            <p className="mt-1 text-sm text-slate-600">Call to confirm each doctor’s availability.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
          <div>
            <p className="font-bold text-slate-900">Visit the clinic</p>
            <p className="mt-1 text-sm text-slate-700">G8 Imperial Plaza, Near Victoria Guest House, Jamalpur, Aligarh – 202001.</p>
            <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="mt-2 inline-block text-sm font-semibold text-sky-700 underline underline-offset-2">Call {CLINIC_CONFIG.primaryPhone}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
