import { ClinicDetails, ClinicSpelling, DoctorProfile, GalleryItem, LeadDeliveryConfig, TreatmentItem } from '../types';
import {
  CLINIC_INTERIOR, DOCTOR_KHALID, DOCTOR_SUHAIL, HAIR_SCALP, HERO_TREATMENT,
  CHEMICAL_PEELING, HAIR_LOSS, PIGMENTATION, ACNE_CONTROL, SCAR_TREATMENT,
  ANTI_AGING, MESOTHERAPY, HYDRAFACIAL, LASER, FILLERS_BOTOX, MOLE_REMOVAL,
  PRP_GFC, SKIN_DISEASE, PSORIASIS,
} from './imageAssets';

/**
 * CENTRAL BRANDING CONFIGURATION:
 * The supplied stationery uses "GLOW UP SKIN CENTER", while the owner requested "GLOW UP SKIN CENTRE".
 * Default to 'CENTRE'. Changing this single value to 'CENTER' or 'CENTRE' dynamically updates the clinic name
 * across the entire application, including headings, meta titles, notices, and form receipts.
 */
export const CURRENT_CLINIC_SPELLING: ClinicSpelling = 'CENTRE';

export const getClinicName = (spelling: ClinicSpelling = CURRENT_CLINIC_SPELLING): string => {
  return `GLOW UP SKIN ${spelling}`;
};

export const CLINIC_CONFIG: ClinicDetails = {
  spelling: CURRENT_CLINIC_SPELLING,
  clinicName: getClinicName(CURRENT_CLINIC_SPELLING),
  subLine: 'SKIN | HAIR | LASER | COSMETICS',
  city: 'Aligarh',
  state: 'Uttar Pradesh',
  country: 'India',
  postalCode: '202001',
  tagline: 'Healthy Skin. Confident You.',
  subTagline: `Skin, hair, laser and cosmetic consultations with Dr. M. D. Khalid and Dr. Suhail Navi at ${getClinicName(CURRENT_CLINIC_SPELLING)}, Aligarh.`,
  fullAddress: 'G8 Imperial Plaza, Near Victoria Guest House, Jamalpur, Aligarh – 202001, Uttar Pradesh, India.',
  primaryPhone: '+91 9927830955',
  secondaryPhone: '+91 8445751953',
  whatsappNumber: '+91 9927830955',
  // No email address supplied in stationery; do not invent one
  email: null,
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=G8+Imperial+Plaza+Near+Victoria+Guest+House+Jamalpur+Aligarh+202001+Uttar+Pradesh+India',
  opdTimings: {
    morning: '10:00 AM – 02:00 PM',
    evening: '06:00 PM – 09:00 PM',
  },
};


export const SECOND_CLINIC_LOCATION = {
  name: 'Glow Up Skin Centre – Baheri',
  city: 'Baheri',
  district: 'Bareilly',
  state: 'Uttar Pradesh',
  postalCode: '243201',
  fullAddress: 'Bypass Road, In Front of Mahindra Tractor Agency, Baheri – 243201, Bareilly, Uttar Pradesh, India.',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Bypass+Road+In+Front+of+Mahindra+Tractor+Agency+Baheri+243201+Bareilly+Uttar+Pradesh+India',
};

export const LEAD_DELIVERY_CONFIG: LeadDeliveryConfig = {
  provider: 'netlify',
  web3formsAccessKey: '',
  isConfigured: true,
};

export const HERO_CONFIG = {
  requiredHeroImageFilename: 'ChatGPT Image Sep 19, 2026, 10_49_56 PM.png',
  image: HERO_TREATMENT,
  imageAlt: 'AI illustration of a doctor providing facial treatment to a reclining patient',
  caption: 'AI-generated treatment illustration',
};

export const DOCTOR_CONFIG: DoctorProfile = {
  name: 'Dr. M. D. Khalid',
  designation: 'Dermatologist & Cosmetologist',
  intro: `Dr. M. D. Khalid, Dermatologist & Cosmetologist, offers skin, hair, laser and cosmetic consultations at ${getClinicName(CURRENT_CLINIC_SPELLING)}, Aligarh.`,
  image: DOCTOR_KHALID,
  imageAlt: 'Dr. M. D. Khalid, Dermatologist & Cosmetologist seated in clinic consultation office',
  requiredImageFilename: 'WhatsApp Image 2026-09-19 at 10.38.39 PM.jpeg',
  isVerified: true,
};

export const SECOND_DOCTOR_CONFIG: DoctorProfile = {
  name: 'Dr. Suhail Navi',
  designation: 'Cosmetologist & Dermatologist',
  intro: 'Cosmetology and dermatology consultations at Glow Up Skin Centre, Aligarh.',
  image: DOCTOR_SUHAIL,
  imageAlt: 'Provided portrait of Dr. Suhail Navi wearing a white coat',
  requiredImageFilename: 'WhatsApp Image 2026-09-22 at 7.07.52 PM.jpeg',
  isVerified: true,
};

export const TREATMENTS_CONFIG: TreatmentItem[] = [
  {
    id: 'chemical-peeling',
    title: 'Chemical Peeling',
    cardDescription: 'Consultation to assess whether chemical peeling is suitable for your skin concerns.',
    imageSubject: 'A professional applying a facial peel.',
    image: CHEMICAL_PEELING,
    imageAlt: 'Professional applying a gentle facial peel in clinical skincare environment',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'hair-loss-treatment',
    title: 'Hair Loss Treatment',
    cardDescription: 'Assessment of hair loss and discussion of suitable care options.',
    imageSubject: 'Scalp examination or hair consultation.',
    image: HAIR_LOSS,
    imageAlt: 'Hair and scalp examination and trichology consultation',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation',
    cardDescription: 'Assessment of pigmentation concerns and discussion of appropriate care.',
    imageSubject: 'Relevant skin assessment.',
    image: PIGMENTATION,
    imageAlt: 'Clinical evaluation of facial skin tone and pigmentation concerns',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'acne-control',
    title: 'Acne Control',
    cardDescription: 'Consultation for acne concerns and an individual care plan.',
    imageSubject: 'Acne consultation or a non-graphic facial skin detail.',
    image: ACNE_CONTROL,
    imageAlt: 'Clinical acne consultation and facial skincare assessment',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'scar-treatment',
    title: 'Scar Treatment',
    cardDescription: 'Assessment of scars and discussion of suitable treatment options.',
    imageSubject: 'Scar assessment or appropriate treatment imagery.',
    image: SCAR_TREATMENT,
    imageAlt: 'Dermatological scar assessment and clinical skin evaluation',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'anti-aging-treatment',
    title: 'Anti-Aging Treatment',
    cardDescription: 'Consultation about age-related skin concerns and suitable care options.',
    imageSubject: 'Facial consultation or professional skin care.',
    image: ANTI_AGING,
    imageAlt: 'Professional aesthetic consultation for age-related skin concerns',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'mesotherapy',
    title: 'Mesotherapy',
    cardDescription: 'Consultation to discuss mesotherapy and assess individual suitability.',
    imageSubject: 'Appropriate professional treatment imagery.',
    image: MESOTHERAPY,
    imageAlt: 'Precision clinical cosmetic mesotherapy preparation imagery',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'hydrafacial',
    title: 'Hydrafacial',
    cardDescription: 'Consultation about facial hydration treatment and skin suitability.',
    imageSubject: 'A professional facial hydration treatment.',
    image: HYDRAFACIAL,
    imageAlt: 'Professional facial hydration treatment session',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'laser',
    title: 'Laser',
    cardDescription: 'Assessment to discuss whether a laser procedure may suit your concern.',
    imageSubject: 'Clinical laser procedure with appropriate eye protection.',
    image: LASER,
    imageAlt: 'Clinical aesthetic laser procedure with protective medical eyewear',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'fillers-botox',
    title: 'Fillers & Botox',
    cardDescription: 'Consultation to discuss cosmetic goals, suitability and treatment considerations.',
    imageSubject: 'Professional cosmetic consultation or suitable procedure imagery.',
    image: FILLERS_BOTOX,
    imageAlt: 'Professional aesthetic doctor consultation and cosmetic evaluation',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'mole-removal',
    title: 'Mole Removal',
    cardDescription: 'Assessment of a mole and discussion of appropriate next steps.',
    imageSubject: 'Dermatoscope examination or mole assessment.',
    image: MOLE_REMOVAL,
    imageAlt: 'Clinical skin lesion and mole examination',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'prp-gfc-therapy',
    title: 'PRP / GFC Therapy',
    cardDescription: 'Consultation to assess suitability for PRP or GFC therapy.',
    imageSubject: 'Relevant clinical preparation or hair treatment imagery.',
    image: PRP_GFC,
    imageAlt: 'Sterile clinical centrifuge preparation for PRP and GFC therapy',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'skin-disease-consultation',
    title: 'Skin Disease Consultation',
    cardDescription: 'Consultation for skin symptoms, assessment and care guidance.',
    imageSubject: 'Dermatology consultation.',
    image: SKIN_DISEASE,
    imageAlt: 'Clinical one-on-one dermatology doctor consultation',
    imageLabel: 'Illustrative image',
  },
  {
    id: 'psoriasis',
    title: 'Psoriasis',
    cardDescription: 'Consultation for psoriasis assessment and ongoing care guidance.',
    imageSubject: 'Respectful, non-graphic condition or consultation image.',
    image: PSORIASIS,
    imageAlt: 'Medical consultation and long-term dermatological care guidance',
    imageLabel: 'Illustrative image',
  },
];

export const TREATMENT_DROPDOWN_OPTIONS: string[] = [
  'General Consultation',
  ...TREATMENTS_CONFIG.map((t) => t.title),
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-scene',
    title: 'Clinical Aesthetic Treatment',
    category: 'Treatment Illustration',
    image: HERO_TREATMENT,
    caption: 'AI-generated treatment illustration: Modern clinical dermal treatment demonstration in session.',
    isAiIllustration: true,
  },
  {
    id: 'clinic-facility',
    title: 'Modern Clinic Consultation Suite',
    category: 'Clinic & Equipment',
    image: CLINIC_INTERIOR,
    caption: 'State-of-the-art consultation and clinical examination room designed for patient comfort and hygiene.',
    isAiIllustration: false,
  },
  {
    id: 'hair-analysis',
    title: 'Dermatological Scalp & Hair Assessment',
    category: 'Clinic & Equipment',
    image: HAIR_SCALP,
    caption: 'Specialized clinical assessment tools for trichology and hair follicle evaluations.',
    isAiIllustration: false,
  },
  {
    id: 'doctor-suite',
    title: 'Dermatologist Consultation Office',
    category: 'Consultation',
    image: DOCTOR_KHALID,
    caption: 'Dr. M. D. Khalid in his clinic consultation office.',
    isAiIllustration: false,
  },
  {
    id: 'doctor-suhail-navi',
    title: 'Dr. Suhail Navi',
    category: 'Consultation',
    image: DOCTOR_SUHAIL,
    caption: 'Provided portrait of Dr. Suhail Navi, Cosmetologist & Dermatologist.',
    isAiIllustration: false,
  },
];
