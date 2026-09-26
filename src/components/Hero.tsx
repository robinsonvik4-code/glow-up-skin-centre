import React, { useEffect, useState } from 'react';
import { Activity, Calendar, Droplets, Phone, ShieldCheck, Sparkles, UserRound, Zap } from 'lucide-react';
import { CLINIC_CONFIG, DOCTOR_CONFIG, SECOND_DOCTOR_CONFIG } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

const quickTreatments = [
  { title: 'Acne Control', subtitle: 'Skin consultation', Icon: UserRound },
  { title: 'Hair Loss Treatment', subtitle: 'Hair & scalp care', Icon: Activity },
  { title: 'Laser', subtitle: 'Laser consultation', Icon: Zap },
  { title: 'Anti-Aging Treatment', subtitle: 'Aesthetic consultation', Icon: Sparkles },
  { title: 'Pigmentation', subtitle: 'Tone & pigmentation', Icon: ShieldCheck },
  { title: 'Hydrafacial', subtitle: 'Facial hydration care', Icon: Droplets },
];

const heroDoctors = [DOCTOR_CONFIG, SECOND_DOCTOR_CONFIG];

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [activeDoctor, setActiveDoctor] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDoctor((current) => (current + 1) % heroDoctors.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const doctor = heroDoctors[activeDoctor];

  return (
    <section id="home" aria-label="Welcome and Introduction" className="bg-[#fbfcfa] py-4 sm:py-5 lg:py-6">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-emerald-100 bg-[#f7fbf7] shadow-[0_22px_60px_rgba(6,78,59,0.10)]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(187,247,208,.65),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(209,250,229,.75),transparent_32%),linear-gradient(100deg,#fff_0%,#fff_42%,#f3faf5_100%)]" />
          <div aria-hidden="true" className="absolute right-[-70px] top-[-90px] h-72 w-72 rounded-full border-[42px] border-emerald-100/65" />
          <div aria-hidden="true" className="absolute right-[22%] top-[12%] h-64 w-64 rounded-full bg-white/60 blur-2xl" />

          <div className="relative grid min-h-[560px] grid-cols-1 items-stretch lg:grid-cols-[1.05fr_.95fr]">
            <div className="z-10 flex min-w-0 flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-12 xl:px-16">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Expert Dermatology Care</span>
              </div>

              <h1 className="max-w-[700px] text-slate-950">
                <span
                  className="block text-[3rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-[4rem] lg:text-[4.9rem]"
                  style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                >
                  Healthy Skin.
                </span>
                <span
                  className="mt-1 block bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-[3rem] font-semibold leading-[1.02] tracking-[-0.045em] text-transparent sm:text-[4rem] lg:text-[4.8rem]"
                  style={{ fontFamily: 'Segoe Script, Brush Script MT, cursive' }}
                >
                  Confident You.
                </span>
              </h1>

              <p className="mt-5 max-w-[640px] text-base leading-relaxed text-slate-600 sm:text-lg">
                Advanced skin, hair, laser and cosmetic consultations with personalized care at {CLINIC_CONFIG.clinicName}, Aligarh.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-800 hover:shadow-xl active:scale-[0.99]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Book Consultation</span>
                </button>
                <a
                  href="#treatments"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white/90 px-6 py-3.5 text-sm font-bold text-emerald-900 shadow-sm transition hover:bg-emerald-50"
                >
                  Explore Treatments
                </a>
                <a
                  href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 transition hover:text-emerald-800"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call Clinic</span>
                </a>
              </div>

              <div className="mt-8 grid max-w-[660px] grid-cols-2 gap-4 sm:grid-cols-4">
                {quickTreatments.slice(0, 4).map(({ title, Icon }) => (
                  <div key={title} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-100 bg-white text-emerald-700 shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[480px] overflow-hidden lg:min-h-[560px]">
              <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[9%] top-[9%] rounded-[46%_54%_48%_52%/52%_42%_58%_48%] bg-gradient-to-br from-emerald-100 via-white to-green-50 shadow-inner" />
              <div aria-hidden="true" className="absolute bottom-8 left-[8%] h-48 w-48 rounded-full bg-emerald-200/35 blur-3xl" />

              <div className="absolute inset-0 flex items-end justify-center px-4 sm:px-8 lg:px-3">
                {heroDoctors.map((item, index) => (
                  <div
                    key={item.name}
                    className={`absolute inset-x-0 bottom-0 flex h-full items-end justify-center transition-all duration-700 ${index === activeDoctor ? 'translate-x-0 opacity-100' : index < activeDoctor ? '-translate-x-5 opacity-0' : 'translate-x-5 opacity-0'}`}
                    aria-hidden={index !== activeDoctor}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-[91%] w-[88%] max-w-[650px] object-contain object-bottom drop-shadow-[0_24px_30px_rgba(15,23,42,0.16)] sm:h-[94%] lg:h-[92%]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                  </div>
                ))}

                <div className="absolute bottom-5 left-1/2 z-20 w-[88%] max-w-[440px] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/88 px-5 py-4 text-center shadow-xl backdrop-blur-md sm:bottom-7">
                  <p className="text-lg font-black text-slate-900">{doctor.name}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">{doctor.designation}</p>
                  {activeDoctor === 1 && <p className="mt-1 text-[11px] text-slate-500">MD (Aligarh) · PGDCC ILAMED (Delhi)</p>}
                  <div className="mt-3 flex justify-center gap-2" aria-label="Doctor carousel controls">
                    {heroDoctors.map((item, index) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setActiveDoctor(index)}
                        className={`h-2 rounded-full transition-all ${index === activeDoctor ? 'w-7 bg-emerald-700' : 'w-2 bg-slate-300 hover:bg-emerald-300'}`}
                        aria-label={`Show ${item.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-3 -mt-1 grid grid-cols-2 overflow-hidden rounded-b-[24px] border border-t-0 border-emerald-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:grid-cols-3 lg:grid-cols-6">
          {quickTreatments.map(({ title, subtitle, Icon }, index) => (
            <a
              key={title}
              href="#treatments"
              className={`group flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center transition hover:bg-emerald-50/80 ${index > 0 ? 'border-l border-slate-100' : ''} ${index >= 2 ? 'border-t sm:border-t-0' : ''} ${index >= 3 ? 'sm:border-t lg:border-t-0' : ''}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900">{title}</span>
              <span className="mt-1 text-[10px] text-slate-500">{subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
