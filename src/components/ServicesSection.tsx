import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { TREATMENTS_CONFIG } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (treatmentTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="treatments"
      aria-label="Clinical Treatments & Consultations"
      className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Comprehensive Care Directory</span>
          </div>

          <h2
            id="treatments-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Clinical Treatments & Consultations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional dermatology, trichology, laser, and aesthetic cosmetic assessments in Aligarh. Select any treatment below to request a personalized consultation.
          </p>
        </div>

        {/* 14 Treatments Responsive Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TREATMENTS_CONFIG.map((treatment) => (
            <article
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Treatment Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Explicit Mandatory Label: "Illustrative image" */}
                  <div className="absolute bottom-2 right-2 bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {treatment.imageLabel}
                  </div>
                </div>

                {/* Treatment Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                    {treatment.cardDescription}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>In-person doctor assessment</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  id={`enquire-btn-${treatment.id}`}
                  onClick={() => onSelectService(treatment.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-semibold text-xs py-2.5 px-3.5 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors group-hover:border-sky-400 cursor-pointer"
                >
                  <span>Enquire About Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
