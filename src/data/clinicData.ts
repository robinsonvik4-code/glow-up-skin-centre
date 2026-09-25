import { ClinicDetails, ClinicSpelling, DoctorProfile, GalleryItem, LeadDeliveryConfig, TreatmentItem } from '../types';
import {
  HERO_TREATMENT, DOCTOR_KHALID_CUTOUT, DOCTOR_SUHAIL_CUTOUT, CLINIC_INTERIOR, HAIR_SCALP,
  CHEMICAL_PEELING, HAIR_LOSS, PIGMENTATION, ACNE_CONTROL, SCAR_TREATMENT,
  ANTI_AGING, MESOTHERAPY, HYDRAFACIAL, LASER, FILLERS_BOTOX, MOLE_REMOVAL,
  PRP_GFC, SKIN_DISEASE, PSORIASIS,
} from './imageAssets';

export const CURRENT_CLINIC_SPELLING: ClinicSpelling = 'CENTRE';
export const getClinicName = (spelling: ClinicSpelling = CURRENT_CLINIC_SPELLING): string => `GLOW UP SKIN ${spelling}`;
export const CLINIC_CONFIG: ClinicDetails = {
  spelling: CURRENT_CLINIC_SPELLING, clinicName: getClinicName(CURRENT_CLINIC_SPELLING), subLine: 'SKIN | HAIR | LASER | COSMETICS', city: 'Aligarh', state: 'Uttar Pradesh', country: 'India', postalCode: '202001', tagline: 'Healthy Skin. Confident You.',
  subTagline: `Skin, hair, laser and cosmetic consultations with Dr. M. D. Khalid and Dr. Suhail Navi at ${getClinicName(CURRENT_CLINIC_SPELLING)}, Aligarh.`,
  fullAddress: 'G8 Imperial Plaza, Near Victoria Guest House, Jamalpur, Aligarh – 202001, Uttar Pradesh, India.', primaryPhone: '+91 9927830955', secondaryPhone: '+91 8445751953', whatsappNumber: '+91 9927830955', email: null,
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=G8+Imperial+Plaza+Near+Victoria+Guest+House+Jamalpur+Aligarh+202001+Uttar+Pradesh+India', opdTimings: { morning: '10:00 AM – 02:00 PM', evening: '06:00 PM – 09:00 PM' },
};
export const LEAD_DELIVERY_CONFIG: LeadDeliveryConfig = { provider: 'netlify', web3formsAccessKey: '', isConfigured: true };
export const HERO_CONFIG = { requiredHeroImageFilename: 'ChatGPT Image Sep 19, 2026, 10_49_56 PM.png', image: HERO_TREATMENT, imageAlt: 'AI illustration of a doctor providing facial treatment to a reclining patient', caption: 'AI-generated treatment illustration' };
export const DOCTOR_CONFIG: DoctorProfile = { name: 'Dr. M. D. Khalid', designation: 'Dermatologist & Cosmetologist', intro: `Dr. M. D. Khalid, Dermatologist & Cosmetologist, offers skin, hair, laser and cosmetic consultations at ${getClinicName(CURRENT_CLINIC_SPELLING)}, Aligarh.`, image: DOCTOR_KHALID_CUTOUT, imageAlt: 'Dr. M. D. Khalid, Dermatologist & Cosmetologist', requiredImageFilename: 'WhatsApp Image 2026-09-19 at 10.38.39 PM.jpeg', isVerified: true };
export const SECOND_DOCTOR_CONFIG: DoctorProfile = { name: 'Dr. Suhail Navi', designation: 'Cosmetologist & Dermatologist', intro: 'Cosmetology and dermatology consultations at Glow Up Skin Centre, Aligarh.', image: DOCTOR_SUHAIL_CUTOUT, imageAlt: 'Provided portrait of Dr. Suhail Navi wearing a white coat', requiredImageFilename: 'WhatsApp Image 2026-09-22 at 7.07.52 PM.jpeg', isVerified: true };
export const TREATMENTS_CONFIG: TreatmentItem[] = [
['chemical-peeling','Chemical Peeling','Consultation to assess whether chemical peeling is suitable for your skin concerns.',CHEMICAL_PEELING,'Professional applying a gentle facial peel in clinical skincare environment'],
['hair-loss-treatment','Hair Loss Treatment','Assessment of hair loss and discussion of suitable care options.',HAIR_LOSS,'Hair and scalp examination and trichology consultation'],
['pigmentation','Pigmentation','Assessment of pigmentation concerns and discussion of appropriate care.',PIGMENTATION,'Clinical evaluation of facial skin tone and pigmentation concerns'],
['acne-control','Acne Control','Consultation for acne concerns and an individual care plan.',ACNE_CONTROL,'Clinical acne consultation and facial skincare assessment'],
['scar-treatment','Scar Treatment','Assessment of scars and discussion of suitable treatment options.',SCAR_TREATMENT,'Dermatological scar assessment and clinical skin evaluation'],
['anti-aging-treatment','Anti-Aging Treatment','Consultation about age-related skin concerns and suitable care options.',ANTI_AGING,'Professional aesthetic consultation for age-related skin concerns'],
['mesotherapy','Mesotherapy','Consultation to discuss mesotherapy and assess individual suitability.',MESOTHERAPY,'Precision clinical cosmetic mesotherapy preparation imagery'],
['hydrafacial','Hydrafacial','Consultation about facial hydration treatment and skin suitability.',HYDRAFACIAL,'Professional facial hydration treatment session'],
['laser','Laser','Assessment to discuss whether a laser procedure may suit your concern.',LASER,'Clinical aesthetic laser procedure with protective medical eyewear'],
['fillers-botox','Fillers & Botox','Consultation to discuss cosmetic goals, suitability and treatment considerations.',FILLERS_BOTOX,'Professional aesthetic doctor consultation and cosmetic evaluation'],
['mole-removal','Mole Removal','Assessment of a mole and discussion of appropriate next steps.',MOLE_REMOVAL,'Clinical skin lesion and mole examination'],
['prp-gfc-therapy','PRP / GFC Therapy','Consultation to assess suitability for PRP or GFC therapy.',PRP_GFC,'Sterile clinical centrifuge preparation for PRP and GFC therapy'],
['skin-disease-consultation','Skin Disease Consultation','Consultation for skin symptoms, assessment and care guidance.',SKIN_DISEASE,'Clinical one-on-one dermatology doctor consultation'],
['psoriasis','Psoriasis','Consultation for psoriasis assessment and ongoing care guidance.',PSORIASIS,'Medical consultation and long-term dermatological care guidance'],
].map(([id,title,cardDescription,image,imageAlt]) => ({ id:id as string, title:title as string, cardDescription:cardDescription as string, imageSubject:'Professional clinical consultation or treatment imagery.', image:image as string, imageAlt:imageAlt as string, imageLabel:'Illustrative image' }));
export const TREATMENT_DROPDOWN_OPTIONS: string[] = ['General Consultation', ...TREATMENTS_CONFIG.map((t) => t.title)];
export const GALLERY_ITEMS: GalleryItem[] = [
{ id:'hero-scene', title:'Clinical Aesthetic Treatment', category:'Treatment Illustration', image:HERO_TREATMENT, caption:'AI-generated treatment illustration: Modern clinical dermal treatment demonstration in session.', isAiIllustration:true },
{ id:'clinic-facility', title:'Modern Clinic Consultation Suite', category:'Clinic & Equipment', image:CLINIC_INTERIOR, caption:'Modern consultation and clinical examination setting.', isAiIllustration:false },
{ id:'hair-analysis', title:'Dermatological Scalp & Hair Assessment', category:'Clinic & Equipment', image:HAIR_SCALP, caption:'Clinical assessment imagery for hair and scalp consultation.', isAiIllustration:false },
{ id:'doctor-suite', title:'Dr. M. D. Khalid', category:'Consultation', image:DOCTOR_KHALID_CUTOUT, caption:'Dr. M. D. Khalid, Dermatologist & Cosmetologist.', isAiIllustration:false },
{ id:'doctor-suhail-navi', title:'Dr. Suhail Navi', category:'Consultation', image:DOCTOR_SUHAIL_CUTOUT, caption:'Dr. Suhail Navi, Cosmetologist & Dermatologist.', isAiIllustration:false },
];
