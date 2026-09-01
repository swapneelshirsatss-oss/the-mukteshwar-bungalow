import { propertyData } from '../data/propertyData';

export interface WhatsAppMessageParams {
  intent?: 'availability' | 'booking' | 'pricing' | 'location' | 'general' | 'buyout';
  dates?: {
    checkIn?: string;
    checkOut?: string;
  };
  guests?: {
    adults?: number;
    children?: number;
  };
  suiteName?: string;
  customMessage?: string;
}

export function generateWhatsAppLink(params: WhatsAppMessageParams = {}): string {
  // Use verified WhatsApp number from property data if present, or fallback
  const phone = propertyData.contact.whatsapp || '917078560516';
  
  let text = 'Hello! I am inquiring about The Mukteshwar Bungalow (3 BHK Villa in Mukteshwar).';

  if (params.intent === 'availability' || params.intent === 'booking') {
    const checkIn = params.dates?.checkIn ? params.dates.checkIn : '[Dates]';
    const checkOut = params.dates?.checkOut ? params.dates.checkOut : '';
    const dateStr = checkOut ? `${checkIn} to ${checkOut}` : checkIn;
    const guestCount = (params.guests?.adults || 0) + (params.guests?.children || 0);
    const guestStr = guestCount > 0 ? `${guestCount} guests` : '[Number of guests]';
    const suiteStr = params.suiteName ? ` for ${params.suiteName}` : ' for the 3 BHK full villa';

    text = `Hello, I would like to check direct availability at The Mukteshwar Bungalow${suiteStr} for ${dateStr} for ${guestStr}. Please share current rates and details.`;
  } else if (params.intent === 'pricing') {
    text = 'Hello, I would like to enquire about the current seasonal direct-booking rates for The Mukteshwar Bungalow 3 BHK villa.';
  } else if (params.intent === 'location') {
    text = 'Hello, I would like directions and assistance regarding driving to The Mukteshwar Bungalow in Dausapani, Kasialekh, Mukteshwar.';
  } else if (params.intent === 'buyout') {
    text = 'Hello, I would like to check availability for an exclusive full-villa buyout for a private family holiday/workcation at The Mukteshwar Bungalow.';
  } else if (params.customMessage) {
    text = `Hello, ${params.customMessage}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
