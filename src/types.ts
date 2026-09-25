export type ClinicSpelling = 'CENTRE' | 'CENTER';

export interface TreatmentItem { id: string; title: string; cardDescription: string; imageSubject: string; image: string; imageAlt: string; imageLabel: string; }
export interface DoctorProfile { name: string; designation: string; intro: string; image: string; imageAlt: string; requiredImageFilename: string; isVerified: boolean; }
export interface GalleryItem { id: string; title: string; category: 'Clinic & Equipment' | 'Treatment Illustration' | 'Consultation'; image: string; caption: string; isAiIllustration: boolean; }
export interface ClinicDetails { spelling: ClinicSpelling; clinicName: string; subLine: string; city: string; state: string; country: string; postalCode: string; tagline: string; subTagline: string; fullAddress: string; primaryPhone: string; secondaryPhone: string; whatsappNumber: string | null; email: string | null; mapsSearchUrl: string; opdTimings: { morning: string; evening: string; }; }
export interface AppointmentFormData { fullName: string; mobileNumber: string; preferredDoctor: string; treatmentTitle: string; preferredDate: string; preferredTimeSlot: string; message: string; consent: boolean; }
export interface LeadDeliveryConfig { provider: 'demo' | 'web3forms' | 'netlify'; web3formsAccessKey?: string; isConfigured: boolean; }
