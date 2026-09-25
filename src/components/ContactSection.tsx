import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck, MessageCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Clinic Location and OPD Details"
      className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Clinic Location & OPD Timings</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Visit & Contact Us
          </h2>

          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            In-person consultations are conducted at our dedicated clinic in Jamalpur, Aligarh. Please call to confirm doctor availability before arriving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinic Address
                </div>
                <h3 className="font-bold text-slate-900 text-base mt-1">{CLINIC_CONFIG.clinicName}</h3>
                <p className="text-sm text-slate-700 mt-1 font-medium leading-relaxed">
                  {CLINIC_CONFIG.fullAddress}
                </p>

                <div className="mt-4">
                  <a
                    href={CLINIC_CONFIG.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5 rounded-lg shadow-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Search Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  OPD Consultation Timings
                </div>
                <h3 className="font-bold text-slate-900 text-base mt-1">Doctor OPD Timings</h3>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Morning OPD:</span>
                    <span className="font-semibold text-slate-900">{CLINIC_CONFIG.opdTimings.morning}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-medium text-slate-800">Evening OPD:</span>
                    <span className="font-semibold text-slate-900">{CLINIC_CONFIG.opdTimings.evening}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  * Specific days are unconfirmed. Please call to confirm schedule availability for your visit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinic Telephones
                </div>
                <h3 className="font-bold text-slate-900 text-base mt-1">Direct Phone Lines</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-semibold">Primary Phone</span>
                      <span className="text-sm font-bold text-slate-900">{CLINIC_CONFIG.primaryPhone}</span>
                    </div>
                    <Phone className="w-4 h-4 text-sky-600" />
                  </a>

                  <a
                    href={`tel:${CLINIC_CONFIG.secondaryPhone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-semibold">Secondary Phone</span>
                      <span className="text-sm font-bold text-slate-900">{CLINIC_CONFIG.secondaryPhone}</span>
                    </div>
                    <Phone className="w-4 h-4 text-sky-600" />
                  </a>
                </div>

                {CLINIC_CONFIG.whatsappNumber ? (
                  <div className="mt-3">
                    <a
                      href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors border border-emerald-200"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Connect on Official WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <p className="mt-2 text-[11px] text-slate-400 italic">
                    Note: WhatsApp communication channel will be enabled once officially verified by clinic management.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-sky-600" />
                    <span className="font-bold text-slate-900 text-base">Aligarh Clinic Location</span>
                  </div>
                  <span className="text-xs bg-sky-100 text-sky-800 font-semibold px-2.5 py-1 rounded-full">
                    Postal Code: 202001
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/10] mb-4 flex items-center justify-center text-center p-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        G8 Imperial Plaza, Jamalpur
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Near Victoria Guest House, Aligarh, Uttar Pradesh
                      </p>
                    </div>
                    <a
                      href={CLINIC_CONFIG.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-white hover:bg-sky-50 px-4 py-2 rounded-lg border border-slate-200 shadow-xs transition-colors"
                    >
                      <span>Search Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Landmark: Located near Victoria Guest House in Jamalpur.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Convenient access from central Aligarh commercial corridors.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <a
                  href="#appointment-form"
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-3 px-4 rounded-xl transition-colors"
                >
                  <span>Request In-Person Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
