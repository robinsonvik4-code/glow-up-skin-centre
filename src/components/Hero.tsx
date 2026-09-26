import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG, DOCTOR_CONFIG, SECOND_DOCTOR_CONFIG } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

const doctors = [
  { ...DOCTOR_CONFIG, imageHeightClass: 'h-[76%] sm:h-[78%]' },
  { ...SECOND_DOCTOR_CONFIG, imageHeightClass: 'h-[72%] sm:h-[74%]' },
];

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [activeDoctor, setActiveDoctor] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveDoctor((current) => (current + 1) % doctors.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section
      id="home"
      aria-label="Welcome and Introduction"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-5 sm:py-7 lg:py-8"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-sky-100/90 bg-gradient-to-br from-white via-sky-50/35 to-white shadow-[0_22px_55px_rgba(15,23,42,0.10),0_2px_0_rgba(255,255,255,0.95)_inset]">
          <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-sky-100/55 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" aria-hidden="true" />

          <div className="relative grid min-h-[620px] grid-cols-1 gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.88fr)] lg:gap-10 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
            <div className="min-w-0 self-start pt-1 text-left sm:pt-2 lg:pt-3 xl:pt-4">
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-sky-200/70 bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-800 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                <span>{CLINIC_CONFIG.subLine}</span>
              </div>

              <h1
                id="hero-title"
                className="max-w-[680px] text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px] xl:text-[64px]"
              >
                {CLINIC_CONFIG.tagline}
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {CLINIC_CONFIG.subTagline}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-600 sm:gap-4">
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-2 shadow-sm">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                  <span>Morning & Evening OPD Timings</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-2 shadow-sm">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                  <span>Jamalpur, Aligarh</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                {['Dermatology Care', 'Hair & Scalp Solutions', 'Laser & Aesthetic Care', 'Personalized Consultation'].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-sky-100 bg-white px-3 py-2 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <button
                  id="hero-request-appointment-btn"
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-sky-700 hover:shadow-lg active:scale-[0.98]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Request an Appointment</span>
                </button>

                <a
                  id="hero-call-clinic-btn"
                  href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4 text-sky-600" aria-hidden="true" />
                  <span>Call the Clinic</span>
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Direct telephone lines: {CLINIC_CONFIG.primaryPhone} / {CLINIC_CONFIG.secondaryPhone}
              </p>
            </div>

            <div
              className="relative mx-auto w-full max-w-[460px] self-start overflow-hidden rounded-[26px] border border-sky-100 bg-gradient-to-b from-sky-50 via-white to-sky-50/70 shadow-[0_20px_48px_rgba(15,23,42,0.14)] lg:mt-0"
              role="group"
              aria-roledescription="carousel"
              aria-label="Glow Up Skin Centre doctors"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(224,242,254,0.95),_rgba(255,255,255,1)_55%,_rgba(240,249,255,1))]">
                <div className="pointer-events-none absolute left-4 top-6 rounded-2xl border border-white/70 bg-white/55 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-lg shadow-sky-100/80 backdrop-blur-md">
                  <div>Glow Up Skin Centre</div>
                  <div className="mt-1 text-slate-600">Skin • Hair • Laser • Cosmetics</div>
                </div>
                <div className="pointer-events-none absolute right-4 top-24 max-w-[180px] rounded-2xl border border-white/70 bg-white/50 px-4 py-3 text-right text-[11px] font-semibold leading-relaxed text-slate-600 shadow-lg shadow-sky-100/70 backdrop-blur-md">
                  Trusted dermatology and cosmetology care with a premium, patient-focused approach.
                </div>
                <div className="pointer-events-none absolute left-5 bottom-28 rounded-2xl border border-white/70 bg-white/50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-700 shadow-lg shadow-sky-100/70 backdrop-blur-md">
                  Healthy Skin • Confident You
                </div>

                {doctors.map((doctor, index) => (
                  <div
                    key={doctor.name}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === activeDoctor
                        ? 'translate-x-0 opacity-100'
                        : index < activeDoctor
                          ? '-translate-x-[8%] opacity-0'
                          : 'translate-x-[8%] opacity-0'
                    }`}
                    aria-hidden={index !== activeDoctor}
                  >
                    <div className="absolute inset-x-0 bottom-20 top-5 flex items-end justify-center px-4">
                      <img
                        src={doctor.image}
                        alt={index === activeDoctor ? doctor.imageAlt : ''}
                        loading="eager"
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        className={`${doctor.imageHeightClass} w-auto max-w-[90%] object-contain drop-shadow-[0_18px_30px_rgba(15,23,42,0.18)]`}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/14 via-white/10 to-transparent" />
                  </div>
                ))}

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                  <div className="max-w-[88%] rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-slate-900 shadow-lg shadow-slate-200/60 backdrop-blur-md">
                    <div className="text-lg font-bold sm:text-xl">{doctors[activeDoctor].name}</div>
                    <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                      {doctors[activeDoctor].designation}
                    </div>
                    {activeDoctor === 1 && (
                      <div className="mt-1 text-[11px] font-medium text-slate-500">
                        MD (Aligarh) · PGDCC ILAMED (Delhi)
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2" aria-label="Select doctor image">
                    {doctors.map((doctor, index) => (
                      <button
                        key={doctor.name}
                        type="button"
                        aria-label={`Show ${doctor.name}`}
                        aria-current={index === activeDoctor ? 'true' : undefined}
                        onClick={() => setActiveDoctor(index)}
                        className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 ${
                          index === activeDoctor ? 'w-8 bg-sky-600' : 'w-2.5 bg-sky-300 hover:bg-sky-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};