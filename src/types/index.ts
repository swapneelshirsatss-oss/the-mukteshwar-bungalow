export interface PropertyAddress {
  line1: string;
  village: string;
  tehsil: string;
  district: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formattedAddress?: string;
  landmark?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
  cid?: string;
  placeId?: string;
  kgmid?: string;
}

export interface RoomSuite {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  overview: string;
  description: string[];
  heroImage: string;
  gallery: string[];
  bedConfiguration: string;
  standardOccupancy: number;
  maxOccupancy: number;
  bathroomDetails: string;
  viewType: string;
  amenities: string[];
  features: string[];
  pricingNote?: string;
}

export interface AmenityCategory {
  title: string;
  description: string;
  items: {
    name: string;
    icon: string;
    description?: string;
    verified: boolean;
  }[];
}

export interface PropertyPolicy {
  title: string;
  rules: string[];
  note?: string;
}

export interface PropertyData {
  name: string;
  canonicalName?: string;
  tagline: string;
  primaryCategory?: string;
  propertyType: string;
  architectureStyle: string;
  totalBedrooms: number;
  totalBathrooms: number;
  standardOccupancy: number;
  maxOccupancy: number;
  address: PropertyAddress;
  contact: {
    phone: string | null; // Display format: +91 70785 60516
    phoneRaw?: string | null; // E.164 without spaces: +917078560516
    whatsapp: string | null; // WhatsApp digits: 917078560516
    email: string | null;
    hostName: string | null;
    hostType: string | null;
    caretakerHours: string | null;
    social?: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
      twitter?: string;
    };
  };
  rating?: {
    score: number;
    reviewCount: number;
    platform: string;
  };
  livingSpaces: {
    name: string;
    description: string;
    image: string;
    features: string[];
  }[];
  rooms: RoomSuite[];
  amenities: AmenityCategory[];
  policies: {
    checkInTime: string | null;
    checkOutTime: string | null;
    houseRules: string[];
    noisePolicy: string | null;
    smokingPolicy: string | null;
    petPolicy: string | null;
    cancellationPolicy: string;
    securityDeposit: string | null;
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface AttractionItem {
  id: string;
  name: string;
  category: 'Viewpoint' | 'Heritage Temple' | 'Nature & Waterfall' | 'Hill Station' | 'Spiritual Sanctuary';
  distanceKm: number | null; // Null if unverified
  distanceMinutes: number | null; // Null if unverified
  approximateDistanceDisplay?: string; // Verified distance string
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  searchIntent: string;
  image: string;
  verified: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Pricing' | 'Suites & Capacity' | 'Location & Travel' | 'Veranda & Outdoors' | 'Kitchen & Dining' | 'House Policies';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string;
  readingTime: string;
  category: 'Mukteshwar Stays' | 'Travel Guides' | 'Attractions' | 'Itineraries';
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  sections: {
    heading: string;
    content: string[];
    quote?: string;
    bulletPoints?: string[];
  }[];
  relatedSlugs?: string[];
}

export interface LocalLandingPageData {
  city: string;
  slug: string;
  pageTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  drivingDistanceSummary: string;
  idealAudience: string;
  routeHighlights: string[];
  whyChooseVilla: string[];
  weekendItinerary: {
    day: string;
    title: string;
    description: string;
  }[];
}

export interface BookingEnquiry {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomPreference: string;
  fullName: string;
  email: string;
  phone: string;
  purposeOfStay?: string;
  specialRequests?: string;
}
