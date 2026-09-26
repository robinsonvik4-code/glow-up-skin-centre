import React, { useState, useEffect } from 'react';
import { Calendar, Send, CheckCircle2, AlertCircle, RefreshCw, Phone, ShieldCheck, MessageCircle, Printer, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG, DOCTOR_CONFIG, SECOND_DOCTOR_CONFIG, TREATMENT_DROPDOWN_OPTIONS } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentFormProps {
  selectedTreatmentTitle: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ selectedTreatmentTitle }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobileNumber: '',
    preferredDoctor: 'No preference',
    treatmentTitle: selectedTreatmentTitle || 'General Consultation',
    preferredDate: '',
    preferredTimeSlot: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');

  // Sync selected treatment when chosen from services cards
  useEffect(() => {
    if (selectedTreatmentTitle) {
      setFormData((prev) => ({ ...prev, treatmentTitle: selectedTreatmentTitle }));
    }
  }, [selectedTreatmentTitle]);

  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const cleanedPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (cleanedPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.treatmentTitle) {
      newErrors.treatmentTitle = 'Please select a treatment concern.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else if (formData.preferredDate < todayDateString) {
      newErrors.preferredDate = 'Appointment date cannot be in the past.';
    }

    if (!formData.preferredTimeSlot) {
      newErrors.preferredTimeSlot = 'Please select an OPD slot (Morning or Evening).';
    }

    if (!formData.consent) {
      newErrors.consent = 'Consent is required for the clinic to contact you regarding your appointment.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    if (import.meta.env.DEV) {
      setServerError('This local preview cannot send an appointment request. Deploy the site on Netlify or call the clinic.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Netlify Forms compatible URL-encoded payload
      const generatedRef = `GUC-${Math.floor(100000 + Math.random() * 900000)}`;
      const formPayload = new URLSearchParams({
        'form-name': 'consultation-enquiry',
        referenceId: generatedRef,
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        preferredDoctor: formData.preferredDoctor,
        treatmentTitle: formData.treatmentTitle,
        preferredDate: formData.preferredDate,
        preferredTimeSlot: formData.preferredTimeSlot,
        message: formData.message || 'None',
        consent: formData.consent ? 'Agreed' : 'No',
      });

      // Post submission directly to Netlify static endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload.toString(),
      });
      if (!response.ok) throw new Error('Submission not confirmed');
      setReferenceId(generatedRef);
    } catch {
      setServerError('We could not confirm your request. Please try again or call the clinic.');
      setIsSubmitting(false);
      return;
    }

    setSubmittedData({ ...formData });
    setSubmissionSuccess(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmissionSuccess(false);
    setSubmittedData(null);
    setReferenceId('');
    setFormData({
      fullName: '',
      mobileNumber: '',
      preferredDoctor: 'No preference',
      treatmentTitle: 'General Consultation',
      preferredDate: '',
      preferredTimeSlot: '',
      message: '',
      consent: false,
    });
    setErrors({});
  };

  // WhatsApp pre-filled notification text
  const whatsappAppointmentLink = submittedData
    ? `https://wa.me/919927830955?text=${encodeURIComponent(
        `Hello Glow Up Skin Centre,\n` +
        `I have booked an appointment online (Ref: ${referenceId}):\n\n` +
        `• Patient Name: ${submittedData.fullName}\n` +
        `• Mobile: ${submittedData.mobileNumber}\n` +
        `• Treatment: ${submittedData.treatmentTitle}\n` +
        `• Preferred Doctor: ${submittedData.preferredDoctor}\n` +
        `• Date: ${submittedData.preferredDate}\n` +
        `• Preferred OPD Slot: ${submittedData.preferredTimeSlot}\n` +
        (submittedData.message ? `• Note: ${submittedData.message}\n` : '') +
        `\nPlease confirm my consultation schedule.`
      )}`
    : '';

  return (
    <section
      id="appointment-form"
      aria-label="Request an Appointment"
      className="py-16 sm:py-20 bg-white border-t border-slate-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Consultation Request</span>
          </div>

          <h2
            id="appointment-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Request an Appointment
          </h2>

          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Request an in-person consultation with our doctors at {CLINIC_CONFIG.clinicName}, Aligarh.
          </p>
        </div>

        {/* Live Active OPD Portal Notice */}
        <div
          id="opd-active-badge"
          className="mb-8 bg-sky-50/80 border border-sky-200/90 rounded-2xl p-4 sm:p-5 text-xs text-sky-950 flex items-start gap-3.5 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
              <span className="font-bold text-slate-900 text-sm">
                Direct Clinic OPD Consultation Portal
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                OPD Schedule Active
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              Appointments are held during Morning OPD (10:00 AM – 02:00 PM) and Evening OPD (06:00 PM – 09:00 PM) at G8 Imperial Plaza, Jamalpur, Aligarh. Please fill the form below to book.
            </p>
          </div>
        </div>

        {/* Success Confirmation Receipt */}
        {submissionSuccess && submittedData ? (
          <div
            id="enquiry-success-receipt"
            className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-950">
                  Appointment Request Successfully Received!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Reference Code: <span className="font-mono font-bold text-emerald-950 bg-emerald-100 px-2 py-0.5 rounded">{referenceId}</span> • Clinic reception will verify doctor availability and confirm your slot.
                </p>
              </div>
            </div>

            {/* Request Summary Receipt */}
            <div className="bg-white rounded-xl p-5 border border-emerald-100 text-sm space-y-3 my-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-900">
                  {CLINIC_CONFIG.clinicName} — Booking Summary
                </span>
                <span className="text-xs text-slate-500">
                  Location: Jamalpur, Aligarh
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500">Patient Name:</span>{' '}
                  <span className="font-semibold text-slate-900">{submittedData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500">Contact Number:</span>{' '}
                  <span className="font-semibold text-slate-900">{submittedData.mobileNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500">Selected Treatment:</span>{' '}
                  <span className="font-semibold text-slate-900">{submittedData.treatmentTitle}</span>
                </div>
                <div>
                  <span className="text-slate-500">Preferred Doctor:</span>{' '}
                  <span className="font-semibold text-slate-900">{submittedData.preferredDoctor}</span>
                </div>
                <div>
                  <span className="text-slate-500">Preferred Timing:</span>{' '}
                  <span className="font-semibold text-slate-900">
                    {submittedData.preferredDate} • {submittedData.preferredTimeSlot}
                  </span>
                </div>
              </div>

              {submittedData.message && (
                <div className="text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <span className="font-medium text-slate-500">Patient Note:</span> {submittedData.message}
                </div>
              )}
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 px-5 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Details via WhatsApp to Clinic</span>
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Reception: {CLINIC_CONFIG.primaryPhone}</span>
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs py-3 px-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Slip</span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900">
              <p>
                Appointment requests are subject to confirmation by the clinic.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 underline font-medium cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Form with Netlify Forms Support */
          <form
            id="consultation-booking-form"
            name="consultation-enquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="bg-slate-50/60 border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs"
          >
            {/* Netlify Form Bot Honeypot & Name */}
            <input type="hidden" name="form-name" value="consultation-enquiry" />
            <p className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            {serverError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-800 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>{serverError}</div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Mohd Rashid"
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-red-600">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              {/* Preferred doctor dropdown */}
              <div>
                <label htmlFor="preferredDoctor" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Doctor
                </label>
                <select
                  id="preferredDoctor"
                  name="preferredDoctor"
                  value={formData.preferredDoctor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-100 cursor-pointer"
                >
                  <option value="No preference">No preference — clinic can advise</option>
                  <option value={DOCTOR_CONFIG.name}>{DOCTOR_CONFIG.name}</option>
                  <option value={SECOND_DOCTOR_CONFIG.name}>{SECOND_DOCTOR_CONFIG.name}</option>
                </select>
                <p className="mt-1.5 text-xs text-slate-500">The clinic will confirm your chosen doctor’s availability.</p>
              </div>

              {/* Treatment Concern Dropdown */}
              <div>
                <label htmlFor="treatmentTitle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Treatment / Consultation Concern <span className="text-red-500">*</span>
                </label>
                <select
                  id="treatmentTitle"
                  name="treatmentTitle"
                  value={formData.treatmentTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                    errors.treatmentTitle
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                  }`}
                >
                  {TREATMENT_DROPDOWN_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.treatmentTitle && (
                  <p className="mt-1 text-xs text-red-600">{errors.treatmentTitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={todayDateString}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.preferredDate
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Preferred OPD Slot (Morning or Evening) */}
                <div>
                  <label htmlFor="preferredTimeSlot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred OPD Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTimeSlot"
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.preferredTimeSlot
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  >
                    <option value="">Select OPD Timings...</option>
                    <option value="Morning: 10:00 AM – 02:00 PM">
                      Morning (10:00 AM – 02:00 PM)
                    </option>
                    <option value="Evening: 06:00 PM – 09:00 PM">
                      Evening (06:00 PM – 09:00 PM)
                    </option>
                  </select>
                  {errors.preferredTimeSlot && (
                    <p className="mt-1 text-xs text-red-600">{errors.preferredTimeSlot}</p>
                  )}
                </div>
              </div>

              {/* Message / Brief Note */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Note on Skin / Hair Symptoms (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about duration, prior treatments or specific questions..."
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-100 transition-all resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I understand that this is an enquiry for a clinical consultation and that appointment requests are subject to confirmation by the clinic.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
                )}
              </div>

              {/* Submit Area with Mandatory Notice */}
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs font-medium text-slate-700 mb-3 text-center sm:text-left">
                  Appointment requests are subject to confirmation by the clinic.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Appointment Request</span>
                      </>
                    )}
                  </button>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>Direct submission to clinic records</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
