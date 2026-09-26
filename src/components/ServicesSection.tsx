import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TREATMENTS_CONFIG } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (treatmentTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="treatments" aria-labelledby="treatments-heading" className="border-t border-emerald-100 bg-[#fbfcfa] py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Our Services</span>
          </div>
          <h2 id="treatments-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Comprehensive Skin &amp; Hair Care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore personalized dermatology, hair, laser and cosmetic consultations in a modern clinical setting.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TREATMENTS_CONFIG.map((treatment) => (
            <article
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="group overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-[0_10px_30px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,78,59,.13)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 via-transparent to-transparent" />
              </div>

              <div className="flex min-h-[155px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-emerald-700">
                  {treatment.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {treatment.cardDescription}
                </p>
                <button
                  type="button"
                  id={`enquire-btn-${treatment.id}`}
                  onClick={() => onSelectService(treatment.title)}
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-extrabold text-emerald-700 transition hover:text-emerald-900"
                >
                  <span>Explore Treatment</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 transition group-hover:bg-emerald-100">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
