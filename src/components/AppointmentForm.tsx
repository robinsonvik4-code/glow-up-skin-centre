import React, { useEffect, useState } from 'react';
import { AlertCircle, Calendar, CheckCircle2, Phone, Send } from 'lucide-react';
import { CLINIC_CONFIG, TREATMENT_DROPDOWN_OPTIONS } from '../data/clinicData';

interface AppointmentFormProps {
  selectedTreatmentTitle: string;
}

type FormState = {
  fullName: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  message: string;
};

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ selectedTreatmentTitle }) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    treatment: selectedTreatmentTitle || 'General Consultation',
    preferredDate: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (selectedTreatmentTitle) {
      setForm((prev) => ({ ...prev, treatment: selectedTreatmentTitle }));
    }
  }, [selectedTreatmentTitle]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const body = new URLSearchParams({
      'form-name': 'appointment',
      fullName: form.fullName,
      phone: form.phone,
      treatment: form.treatment,
      preferredDate: form.preferredDate,
      message: form.message,
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm({
        fullName: '',
        phone: '',
        treatment: selectedTreatmentTitle || 'General Consultation',
        preferredDate: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="appointment-form" className="bg-white py-16 sm:py-20 border-t border-slate-100" aria-labelledby="appointment-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-3xl bg-gradient-to-br from-teal-800 to-emerald-700 p-7 sm:p-8 text-white shadow-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <Calendar className="h-4 w-4" />
              Appointment Enquiry
            </div>
            <h2 id="appointment-heading" className="mt-5 text-3xl font-extrabold tracking-tight">
              Request a Consultation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-teal-50">
              Send your preferred treatment and contact details. The clinic team can contact you to confirm doctor availability and appointment timing.
            </p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-wider text-teal-100">Clinic phone</p>
              <a href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`} className="mt-2 inline-flex items-center gap-2 text-lg font-bold hover:text-white">
                <Phone className="h-5 w-5" />
                {CLINIC_CONFIG.primaryPhone}
              </a>
              <p className="mt-4 text-xs text-teal-100">Morning OPD: {CLINIC_CONFIG.opdTimings.morning}</p>
              <p className="text-xs text-teal-100">Evening OPD: {CLINIC_CONFIG.opdTimings.evening}</p>
            </div>
          </div>

          <form
            name="appointment"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/40"
          >
            <input type="hidden" name="form-name" value="appointment" />
            <p className="hidden">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Full name</span>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Phone number</span>
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  placeholder="+91"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Treatment / consultation</span>
                <select
                  name="treatment"
                  value={form.treatment}
                  onChange={(e) => update('treatment', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                >
                  {TREATMENT_DROPDOWN_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Preferred date</span>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={(e) => update('preferredDate', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  placeholder="Tell us briefly about your concern"
                />
              </label>
            </div>

            {status === 'success' && (
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Your appointment enquiry has been submitted successfully. The clinic can contact you to confirm the schedule.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Submission could not be completed. Please call the clinic directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === 'sending' ? 'Sending…' : 'Submit Appointment Enquiry'}
            </button>

            <p className="mt-3 text-center text-[11px] text-slate-500">
              Submitting this form does not confirm an appointment until the clinic team verifies availability.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
