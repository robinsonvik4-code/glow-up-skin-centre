import React from 'react';
import { Clock, ExternalLink, MapPin, MessageCircle, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG, SECOND_CLINIC_LOCATION } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const whatsapp = CLINIC_CONFIG.whatsappNumber?.replace(/\D/g, '');

  return (
    <section id="contact" aria-label="Clinic Location and OPD Details" className="border-t border-slate-100 bg-slate-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
            <MapPin className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
            <span>Clinic Location & OPD Timings</span>
          </div>
          <h2 id="contact-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Visit & Contact Us</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            In-person consultations are available at our clinic locations in Jamalpur, Aligarh and Baheri, Bareilly. Please call to confirm doctor availability before arriving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-6">
            {[{
              label: 'Clinic Address',
              title: CLINIC_CONFIG.clinicName,
              address: CLINIC_CONFIG.fullAddress,
              map: CLINIC_CONFIG.mapsSearchUrl,
            }, {
              label: 'Baheri Clinic Address',
              title: CLINIC_CONFIG.clinicName,
              address: SECOND_CLINIC_LOCATION.fullAddress,
              map: SECOND_CLINIC_LOCATION.mapsSearchUrl,
            }].map((location) => (
              <div key={location.label} className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{location.label}</div>
                  <h3 className="mt-1 text-base font-bold text-slate-900">{location.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{location.address}</p>
                  <a href={location.map} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-sky-700">
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Search Directions on Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600"><Clock className="h-5 w-5" /></div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">OPD Consultation Timings</div>
                <h3 className="mt-1 text-base font-bold text-slate-900">Doctor OPD Timings</h3>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between border-b border-slate-100 py-1"><span className="font-medium">Morning OPD:</span><span className="font-semibold text-slate-900">{CLINIC_CONFIG.opdTimings.morning}</span></div>
                  <div className="flex items-center justify-between py-1"><span className="font-medium">Evening OPD:</span><span className="font-semibold text-slate-900">{CLINIC_CONFIG.opdTimings.evening}</span></div>
                </div>
                <p className="mt-2 text-xs text-slate-500">Please call to confirm each doctor’s availability for your preferred location.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600"><Phone className="h-5 w-5" /></div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinic Telephones</div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[CLINIC_CONFIG.primaryPhone, CLINIC_CONFIG.secondaryPhone].map((phone, i) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-sky-300 hover:bg-sky-50">
                      <div><span className="block text-[10px] font-semibold uppercase text-slate-500">{i === 0 ? 'Primary Phone' : 'Secondary Phone'}</span><span className="text-sm font-bold text-slate-900">{phone}</span></div>
                      <Phone className="h-4 w-4 text-sky-600" />
                    </a>
                  ))}
                </div>
                {whatsapp && <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"><MessageCircle className="h-4 w-4" />Official WhatsApp</a>}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-6">
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2"><Navigation className="h-5 w-5 text-sky-600" /><span className="text-base font-bold text-slate-900">Primary Aligarh Clinic Location</span></div>
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-800">Postal Code: 202001</span>
                </div>
                <div className="mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-6 text-center">
                  <div className="space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-md"><MapPin className="h-6 w-6" /></div>
                    <div><h4 className="text-base font-bold text-slate-900">G8 Imperial Plaza, Jamalpur</h4><p className="mt-0.5 text-xs text-slate-600">Near Victoria Guest House, Aligarh, Uttar Pradesh</p></div>
                    <a href={CLINIC_CONFIG.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm transition-colors hover:bg-sky-50">Search Directions on Google Maps<ExternalLink className="h-3 w-3" /></a>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-sky-600" /><span>Aligarh clinic: Near Victoria Guest House, Jamalpur.</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-sky-600" /><span>Baheri clinic: In front of Mahindra Tractor Agency, Bypass Road.</span></div>
                </div>
              </div>
              <a href="#appointment-form" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800">Request In-Person Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
