/**
 * The Mukteshwar Bungalow | 3 BHK Luxury Mountain Villa
 * Centralized Villa Data & Performance Hub (villaData.ts)
 * 
 * Synchronized with:
 * - Villa.txt & public/Villa.txt
 * - src/data/propertyData.ts
 * - src/types/index.ts
 * - .agents/AGENTS.md & brand guidelines
 * 
 * Architectural Role:
 * - Ultra-fast, tree-shakable static data module.
 * - Single source of truth for Schema.org JSON-LD generation, hero specs,
 *   capacity calculations, and direct WhatsApp reservation flows.
 */

import { PropertyData, RoomSuite } from '../types';
import { propertyData } from './propertyData';

// Canonical entity re-export matching sister properties' hotelData pattern
export const VILLA_DATA: PropertyData = propertyData;
export const villaData: PropertyData = propertyData;

export interface SisterHospitalityProperty {
  name: string;
  url: string;
  displayUrl: string;
  location: string;
  category: string;
  tagline: string;
  features: string[];
}

/**
 * Verified Cross-Network Sister Properties (Casa De Bello Hospitality Network)
 */
export const SISTER_PROPERTIES: SisterHospitalityProperty[] = [
  {
    name: 'Casa De Bello Resort Kainchi Dham',
    url: 'https://casadebello.com/',
    displayUrl: 'casadebello.com',
    location: 'Bhowali-Ramgarh Road, Kainchi Dham, Uttarakhand',
    category: 'Boutique Mountain Resort & Cafe',
    tagline: 'An Abode of Fine Living in the Kumaon Himalayas, 9 km from Kainchi Dham Ashram',
    features: ['Valley Balconies', 'Pure Veg Dining', 'Ashram Assistance', 'Fruit Orchards']
  },
  {
    name: 'Whispering Pines Resort Ramgarh',
    url: 'https://whisperingpinesresort.in/',
    displayUrl: 'whisperingpinesresort.in',
    location: 'Malla Ramgarh, Mukteshwar Road, Uttarakhand',
    category: 'Mountain Pine & Orchard Resort',
    tagline: '180° Himalayan Snow Peak & Pine Forest Panoramas in Ramgarh',
    features: ['Stone Cottages', '180° Himalayan Ridge Views', 'Apple & Peach Orchards', 'Fireplaces']
  },
  {
    name: 'Vikrant Hotel Nainital',
    url: 'https://vikranthotelnainital.in/',
    displayUrl: 'vikranthotelnainital.in',
    location: 'Zoo Road, Tallital, Nainital, Uttarakhand',
    category: 'Hillside Family Suite Hotel',
    tagline: 'Spacious 4-Bed Family Suites, On-Site Parking, 300m to Naini Lake',
    features: ['4-Bedded Suites', 'On-Site Private Parking', '300m to Naini Lake', 'Mountain Facing']
  },
  {
    name: 'Anurra Restaurant & Hotel Kainchi Dham',
    url: 'https://anurrakainchidhamhotel.in/',
    displayUrl: 'anurrakainchidhamhotel.in',
    location: 'Malla Niglat, NH-109, Kainchi Dham, Uttarakhand',
    category: 'Pure Vegetarian Hotel & Restaurant',
    tagline: 'A Quiet Hillside Stay & 100% Pure Veg Dining, 3.3 km from Kainchi Dham',
    features: ['100% Pure Veg Restaurant', 'On-Site Car Parking', '3.3 km to Ashram', 'Terrace Views']
  }
];

// -----------------------------------------------------------------------------
// High-Performance Zero-Overhead Lookup Helpers
// -----------------------------------------------------------------------------

/**
 * Fast lookup for individual suite by its URL slug.
 */
export function getSuiteBySlug(slug: string): RoomSuite | undefined {
  return VILLA_DATA.rooms.find((room) => room.slug === slug || room.id === slug);
}

/**
 * Returns all valid suite slugs for static route generation and prefetching.
 */
export function getAllSuiteSlugs(): string[] {
  return VILLA_DATA.rooms.map((room) => room.slug);
}

/**
 * Fast lookup for specific living zone (Veranda Lounge, Open Space, Kitchen).
 */
export function getLivingZoneByName(name: string) {
  return VILLA_DATA.livingSpaces.find(
    (space) => space.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Returns canonical formatted NAP address string.
 */
export function getCanonicalAddress(): string {
  return (
    VILLA_DATA.address.formattedAddress ||
    `${VILLA_DATA.address.line1}, Tehsil - ${VILLA_DATA.address.tehsil}, District - ${VILLA_DATA.address.district}, ${VILLA_DATA.address.city}, ${VILLA_DATA.address.state} - ${VILLA_DATA.address.postalCode}`
  );
}

/**
 * Generates an instantaneous high-conversion direct WhatsApp reservation URL.
 */
export function getDirectWhatsAppUrl(customMessage?: string): string {
  const phone = VILLA_DATA.contact.whatsapp || '919027844424';
  const defaultText =
    'Hi Mukteshwar Bungalow Team, I would like to inquire about villa availability and direct booking rates.';
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Primary canonical export
 */
export default VILLA_DATA;
