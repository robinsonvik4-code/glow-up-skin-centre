import React from 'react';
import {
  Activity,
  Calendar,
  Droplets,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Zap,
} from 'lucide-react';
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

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" aria-label="Welcome and Introduction" className="bg-white py-4 sm:py-5 lg:py-6">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5 lg:px-0">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-[#edf7fa] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-cyan-50/65" />
          <div aria-hidden="true" className="absolute -left-16 bottom-[-70px] h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
          <div aria-hidden="true" className="absolute right-[22%] top-8 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />

          <div className="relative grid min-h-[470px] grid-cols-1 items-stretch lg:grid-cols-[1.02fr_.98fr]">
            <div className="z-10 flex min-w-0 flex-col justify-center px-6 py-9 sm:px-9 lg:px-12 lg:py-10">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-emerald-50/90 px-3.5 py-2 text-xs font-bold text-teal-800 shadow-sm">
                <Sparkles className="h-4 w-4 text-teal-700" aria-hidden="true" />
                <span>Advanced Dermatology &amp; Cosmetic Care</span>
              </div>

              <h1 className="max-w-[650px] text-[2.65rem] font-extrabold leading-[1.03] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
                <span className="block">Healthy Skin.</span>
                <span className="block bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
                  Confident You.
                </span>
              </h1>

              <p className="mt-4 max-w-[620px] text-base leading-relaxed text-slate-600 sm:text-[1.02rem]">
                {CLINIC_CONFIG.subTagline}
              </p>

              <div className="mt-6 grid max-w-[610px] grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
                {quickTreatments.slice(0, 4).map(({ title, Icon }) => (
                  <div key={title} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-teal-800 hover:shadow-lg active:scale-[0.99]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Request an Appointment</span>
                </button>

                <a
                  href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-teal-300 hover:text-teal-800"
                >
                  <Phone className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  <span>Call the Clinic</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[440px] lg:min-h-[470px]">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(255,255,255,.9),rgba(255,255,255,0)_62%)]" />
              <div aria-hidden="true" className="absolute left-[15%] top-[15%] h-56 w-56 rounded-full border-[34px] border-teal-100/80" />
              <div aria-hidden="true" className="absolute right-8 top-14 grid grid-cols-5 gap-2 opacity-35">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span key={index} className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                ))}
              </div>

              <div className="absolute inset-0 flex items-end justify-center px-1 sm:px-4">
                <div className="relative h-full w-full max-w-[590px]">
                  <img
                    src={DOCTOR_CONFIG.image}
                    alt={DOCTOR_CONFIG.imageAlt}
                    className="absolute bottom-0 left-[-4%] z-20 h-[93%] w-[62%] object-contain object-bottom drop-shadow-[0_18px_22px_rgba(15,23,42,0.16)] sm:left-[-1%] sm:h-[96%] lg:left-[-4%]"
                    loading="eager"
                    fetchPriority="high"
                  />

                  <img
                    src={SECOND_DOCTOR_CONFIG.image}
                    alt={SECOND_DOCTOR_CONFIG.imageAlt}
                    className="absolute bottom-0 right-[-2%] z-10 h-[88%] w-[54%] object-contain object-bottom drop-shadow-[0_16px_20px_rgba(15,23,42,0.14)] sm:right-[0%] sm:h-[91%] lg:right-[-3%]"
                    loading="eager"
                  />

                  <div className="absolute bottom-4 left-[6%] z-30 hidden min-w-[210px] rounded-2xl border border-white/90 bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur sm:block lg:left-[5%]">
                    <p className="text-sm font-extrabold text-slate-900">{DOCTOR_CONFIG.name}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-600">{DOCTOR_CONFIG.designation}</p>
                  </div>

                  <div className="absolute bottom-4 right-[1%] z-30 hidden max-w-[230px] rounded-2xl border border-white/90 bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur sm:block lg:right-[0%]">
                    <p className="text-sm font-extrabold text-slate-900">{SECOND_DOCTOR_CONFIG.name}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-600">{SECOND_DOCTOR_CONFIG.designation}</p>
                    <p className="mt-0.5 text-[10px] text-slate-500">MD (Aligarh) · PGDCC ILAMED (Delhi)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-2 -mt-px grid grid-cols-2 overflow-hidden rounded-b-[22px] border border-t-0 border-slate-200 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.06)] sm:grid-cols-3 lg:grid-cols-6">
          {quickTreatments.map(({ title, subtitle, Icon }, index) => (
            <a
              key={title}
              href="#treatments"
              className={`group flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center transition hover:bg-teal-50/70 ${index > 0 ? 'border-l border-slate-100' : ''} ${index >= 2 ? 'border-t sm:border-t-0' : ''} ${index >= 3 ? 'sm:border-t lg:border-t-0' : ''}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sky-50 text-teal-700 transition group-hover:bg-teal-100">
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
