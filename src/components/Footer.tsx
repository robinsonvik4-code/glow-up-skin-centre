import React, { useState } from 'react';
import { CLINIC_CONFIG, TREATMENTS_CONFIG } from '../data/clinicData';
import { ShieldCheck, MapPin, Clock, Phone, X, Lock, Image as ImageIcon } from 'lucide-react';

interface FooterProps {
  onSelectTreatment?: (treatmentTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatment }) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-14 pb-24 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & SubLine */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {CLINIC_CONFIG.clinicName}
              </span>
              <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mt-1">
                {CLINIC_CONFIG.subLine}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Skin, hair, laser and cosmetic consultations with Dr. M. D. Khalid and Dr. Suhail Navi in Aligarh.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Consultations by prior clinic appointment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Doctors', href: '#doctor' },
                { label: 'Treatments', href: '#treatments' },
                { label: 'Location & OPD', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#appointment-form"
                  onClick={(e) => handleNavClick(e, '#appointment-form')}
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: 14 Clinical Treatments Directory */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Treatments (14)
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400 max-h-56 overflow-y-auto pr-2">
              {TREATMENTS_CONFIG.map((treatment) => (
                <button
                  key={treatment.id}
                  type="button"
                  onClick={() => {
                    if (onSelectTreatment) {
                      onSelectTreatment(treatment.title);
                    } else {
                      const formEl = document.querySelector('#appointment-form');
                      formEl?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left hover:text-sky-300 transition-colors truncate cursor-pointer"
                  title={treatment.title}
                >
                  • {treatment.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Confirmed Location & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Location & Hours
            </div>
            <div className="text-xs text-slate-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC_CONFIG.fullAddress}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">OPD Consultation Hours:</p>
                  <p>Morning: {CLINIC_CONFIG.opdTimings.morning}</p>
                  <p>Evening: {CLINIC_CONFIG.opdTimings.evening}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white block">
                    {CLINIC_CONFIG.primaryPhone}
                  </a>
                  <a href={`tel:${CLINIC_CONFIG.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-white block">
                    {CLINIC_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Image Credits & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {CLINIC_CONFIG.clinicName}. All rights reserved.
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => setIsCreditsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Image Licensing & Credits</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-slate-400 hover:text-sky-400 underline transition-colors cursor-pointer"
            >
              Privacy Information
            </button>
          </div>
        </div>
      </div>

      {/* Image Licensing & Credits Modal */}
      {isCreditsModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsCreditsModalOpen(false)}
        >
          <div
            className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-sky-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Image Credits & Licensing Documentation
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCreditsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed">
              <p>
                All images used across the website adhere to ethical clinical standards and applicable licences:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>
                  <strong className="text-slate-800">Gallery:</strong> Modelled treatment illustration labelled as <em>“AI-generated treatment illustration”</em>.
                </li>
                <li>
                  <strong className="text-slate-800">Doctor Profiles:</strong> Portraits of Dr. M. D. Khalid and Dr. Suhail Navi provided for the clinic website.
                </li>
                <li>
                  <strong className="text-slate-800">14 Treatment Cards:</strong> Locally downloaded illustrative photographs sourced from Unsplash under the Unsplash Licence (free for commercial and clinical educational use without trademark or patient identity infringement). Sourced photographers include Christin Hume, Element5 Digital, engin akyurt, Content Pixie, National Cancer Institute, CDC, Anthony Tran, Karolina Grabowska, Towfiqu barbhuiya, Bermix Studio, and Online Marketing.
                </li>
                <li>
                  <strong className="text-slate-800">Full Documentation:</strong> Refer to the root <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">IMAGE_CREDITS.md</code> file in this codebase for individual asset URLs and licence citations.
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setIsCreditsModalOpen(false)}
                className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsPrivacyModalOpen(false)}
        >
          <div
            className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-sky-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Enquiry Data Flow & Privacy Policy
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed">
              <p>
                <strong className="text-slate-800">Direct Patient Communication:</strong> Contact information (name, mobile number) and appointment preferences submitted on this website are transmitted exclusively to Glow Up Skin Centre staff for the purpose of verifying consultation availability.
              </p>
              <p>
                <strong className="text-slate-800">No Medical Records Collection:</strong> This website does not ask for or store sensitive diagnostic reports, prescription histories, or confidential personal medical records. Full medical history is discussed confidentially during your physical clinical consultation.
              </p>
              <p>
                <strong className="text-slate-800">Data Integrity:</strong> Patient contact information is never sold, leased, or distributed to advertising platforms or external third parties.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(false)}
                className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
