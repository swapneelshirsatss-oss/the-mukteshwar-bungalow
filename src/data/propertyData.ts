import { PropertyData } from '../types';

export const propertyData: PropertyData = {
  name: 'The Mukteshwar Bungalow',
  tagline: 'Private Himalayan Residence in the Kumaon Hills',
  propertyType: 'Luxury 3 BHK Villa',
  architectureStyle: 'Himalayan Ridge Residence with Contemporary Mountain Craft',
  totalBedrooms: 3,
  totalBathrooms: 3,
  standardOccupancy: 6,
  maxOccupancy: 9,
  address: {
    line1: 'Dausapani, Kasialekh Village - Chaukhuta',
    village: 'Kasialekh Village - Chaukhuta',
    tehsil: 'Dhari',
    district: 'Nainital',
    city: 'Mukteshwar',
    state: 'Uttarakhand',
    postalCode: '263132',
    country: 'India',
    landmark: 'Near Kasialekh Dausapani Ridge',
    latitude: 29.4728, // Approximate regional coordinate
    longitude: 79.6475,
    googleMapsUrl: 'https://maps.google.com/?q=Kasialekh+Mukteshwar+Uttarakhand+263132',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111234.56789!2d79.58!3d29.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0998a444a72d3%3A0x6b2e9e23!2sMukteshwar%2C+Uttarakhand+263132!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  contact: {
    // Configurable verified fields: null until explicitly provided by host
    phone: null, // Displays "Direct Enquiry via WhatsApp & Concierge"
    whatsapp: '919876543210', // Default concierge routing channel
    email: 'stay@themukteshwarbungalow.in',
    hostName: 'Villa Concierge Team',
    hostType: 'Private Estate Manager',
    caretakerHours: '8:00 AM – 9:30 PM (On-call assistance available)',
  },
  livingSpaces: [
    {
      name: 'The Veranda Lounge',
      description: 'An expansive mountain-facing living veranda designed for slow mornings, high-altitude cedar breezes, and evening fireside conversations overlooking the Kumaon valley.',
      image: '/images/veranda/veranda-lounge-morning-tea-seating.jpg',
      features: [
        'Seamless indoor-outdoor lounge seating',
        'Direct panorama of the Kumaon mountain ranges',
        'Natural stone and timber architectural detailing',
        'Morning tea & sunset observation terrace',
        'Ambient evening bonfire setup'
      ]
    },
    {
      name: 'Veranda - Open Space',
      description: 'An open-air stone deck terrace seamlessly connected to the garden lawn, perfect for mindful yoga, stargazing, and alfresco dining.',
      image: '/images/veranda/veranda-open-space-terrace.jpg',
      features: [
        'Open sky sundeck with panoramic valley views',
        'Artisanal handcrafted wicker seating',
        'Direct connection to the lush private garden',
        'Unobstructed mountain ridge sunsets'
      ]
    },
    {
      name: 'Private Pool & Deck',
      description: 'A serene private mountain plunge pool and sundeck overlooking the Himalayan slopes, offering restorative relaxation immersed in forest tranquility.',
      image: '/images/pool/private-pool-deck-himalayan-view.jpg',
      features: [
        'Exclusive private pool access for resident guests',
        'Sundeck loungers with pine forest backdrop',
        'Treated clean mountain spring water filtration',
        'Private poolside deck for morning coffee'
      ]
    },
    {
      name: 'Fully Equipped Kitchen',
      description: 'A complete residential kitchen fitted with modern cooking hobs, refrigeration, microwave, electric kettle, cookware, and tableware for complete culinary freedom.',
      image: '/images/kitchen/fully-equipped-kitchen-dining-counter.jpg',
      features: [
        'Full cooking gas hob and modern ventilation chimney',
        'Refrigerator, microwave oven, and electric kettle',
        'Premium dinnerware, cutlery, and cooking vessels',
        'Spacious quartz preparation counters and pantry storage',
        'Dedicated dining counter with mountain window view'
      ]
    }
  ],
  rooms: [
    {
      id: 'the-himalayan-suite',
      slug: 'the-himalayan-suite',
      name: 'The Himalayan Suite',
      shortName: 'Himalayan Suite',
      subtitle: 'Master Suite 1 • Panoramic Mountain Glazing',
      overview: 'The primary master sanctuary of the bungalow, featuring expansive picture windows framing the Kumaon valley, warm hardwood floor finishes, and a handcrafted king-sized bed.',
      description: [
        'The Himalayan Suite is positioned to capture the earliest morning light across the valley. Flooded with natural high-altitude daylight, the suite blends contemporary architectural minimalism with Himalayan warmth.',
        'Features a generous king-size bed with orthopedic mattress and premium cotton linens, dedicated fireside reading chairs, generous wardrobe storage, and a pristine private en-suite bathroom with glass shower cubicle.'
      ],
      heroImage: '/images/rooms/himalayan-suite/himalayan-suite-master-king-bed.jpg',
      gallery: [
        '/images/rooms/himalayan-suite/himalayan-suite-master-king-bed.jpg',
        '/images/rooms/himalayan-suite/himalayan-suite-mountain-window-view.jpg',
        '/images/rooms/himalayan-suite/himalayan-suite-reading-lounge.jpg',
        '/images/rooms/himalayan-suite/himalayan-suite-interior-detail.jpg',
        '/images/rooms/himalayan-suite/himalayan-suite-ensuite-bathroom.jpg'
      ],
      bedConfiguration: '1 King Bed with Luxury Orthopedic Mattress',
      standardOccupancy: 2,
      maxOccupancy: 3,
      bathroomDetails: 'Private en-suite with hot water geyser, glass shower, and vanity mirrors',
      viewType: 'Direct Himalayan Valley & Sunrise Panorama',
      amenities: [
        'King-sized handcrafted bed',
        'Private en-suite bathroom',
        '24/7 Hot water geyser',
        'Electric room heating',
        'High-speed optical Wi-Fi',
        'Panoramic view window seating',
        'Wardrobe and luggage storage',
        'Daily housekeeping'
      ],
      features: [
        'Master bedroom suite positioning',
        'Breathtaking valley views at sunrise',
        'Dedicated workspace/reading corner',
        'Sound-dampened architectural glazing'
      ],
      pricingNote: 'Check dates for current seasonal direct-booking rate'
    },
    {
      id: 'the-imperial-suite',
      slug: 'the-imperial-suite',
      name: 'The Imperial Suite',
      shortName: 'Imperial Suite',
      subtitle: 'Suite 2 • Timber Ceilings & Heritage Serenity',
      overview: 'An exquisitely styled mountain suite featuring exposed natural timber rafters, plush ambient lighting, and direct outlook over the pine ridge gardens.',
      description: [
        'The Imperial Suite offers a tranquil, quiet haven characterized by rich wood accents and artisanal Himalayan craftsmanship. Designed for restorative deep rest after a day of mountain trails.',
        'Includes an inviting king bed, bespoke side dressers, plush sitting chairs, and an elegant en-suite bathroom with contemporary fittings and heated water supply.'
      ],
      heroImage: '/images/rooms/imperial-suite/imperial-suite-heritage-king-bed.jpg',
      gallery: [
        '/images/rooms/imperial-suite/imperial-suite-heritage-king-bed.jpg',
        '/images/rooms/imperial-suite/imperial-suite-timber-ceilings.jpg',
        '/images/rooms/imperial-suite/imperial-suite-private-sitting.jpg',
        '/images/rooms/imperial-suite/imperial-suite-luxury-bathroom.jpg'
      ],
      bedConfiguration: '1 King Bed with Premium Down Linens',
      standardOccupancy: 2,
      maxOccupancy: 3,
      bathroomDetails: 'Private en-suite with walk-in shower and luxury toiletries',
      viewType: 'Pine Canopy & Garden Ridge View',
      amenities: [
        'King-sized artisanal timber bed',
        'En-suite private bathroom',
        'Continuous hot water',
        'Room heater during winter',
        'High-speed Wi-Fi connectivity',
        'Plush sitting nook',
        'Artisanal brass lighting fixtures',
        'Fresh mountain linen service'
      ],
      features: [
        'Exposed Himalayan timber craft',
        'Pine forest tranquility',
        'Private reading corner',
        'Garden-level ease of access'
      ],
      pricingNote: 'Check dates for current seasonal direct-booking rate'
    },
    {
      id: 'the-signature-himalayan',
      slug: 'the-signature-himalayan',
      name: 'The Signature Himalayan',
      shortName: 'Signature Himalayan',
      subtitle: 'Suite 3 • Private Terrace Access & Ridge Horizons',
      overview: 'A spacious corner suite that opens toward the outdoor veranda, combining sun-drenched private spaces with direct mountain horizon vistas.',
      description: [
        'The Signature Himalayan Suite enjoys privileged access to the upper terrace and veranda corridor. Large glass sliders draw the serene pine-scented mountain air into a tastefully appointed bedroom sanctuary.',
        'Furnished with a deluxe king bed, custom walnut wardrobe, cozy reading divan, and a sparkling private bathroom with modern sanitaries.'
      ],
      heroImage: '/images/rooms/signature-himalayan/signature-himalayan-suite-panoramic-view.jpg',
      gallery: [
        '/images/rooms/signature-himalayan/signature-himalayan-suite-panoramic-view.jpg',
        '/images/rooms/signature-himalayan/signature-himalayan-suite-king-bed.jpg',
        '/images/rooms/signature-himalayan/signature-himalayan-suite-warm-interior.jpg',
        '/images/rooms/signature-himalayan/signature-himalayan-suite-terrace-access.jpg',
        '/images/rooms/signature-himalayan/signature-himalayan-suite-bathroom.jpg'
      ],
      bedConfiguration: '1 King Bed + Optional Extra Rollaway Mattress',
      standardOccupancy: 2,
      maxOccupancy: 3,
      bathroomDetails: 'Private en-suite bathroom with glass partition and premium fittings',
      viewType: 'Panoramic Ridge & Terrace Horizon',
      amenities: [
        'Luxury king-sized bed',
        'Direct terrace/veranda step-out',
        'Private en-suite bathroom',
        'High-output water geyser',
        'Room heating unit',
        'High-speed optical Wi-Fi',
        'Custom vanity & dressing space',
        'Daily housekeeping'
      ],
      features: [
        'Direct outdoor veranda connection',
        'Dual-aspect natural sunlight',
        'Spacious open layout',
        'Ideal for extended mountain stays'
      ],
      pricingNote: 'Check dates for current seasonal direct-booking rate'
    }
  ],
  amenities: [
    {
      title: 'Comfort & Living',
      description: 'Crafted for relaxed private residence living',
      items: [
        { name: 'Private Mountain Pool & Deck', icon: 'Waves', verified: true, description: 'Exclusive resident pool overlooking the hills' },
        { name: 'The Veranda Lounge', icon: 'Coffee', verified: true, description: 'Panoramic outdoor living & tea terrace' },
        { name: 'Spacious Living & Dining Salon', icon: 'Armchair', verified: true, description: 'Dual family lounges with mountain views' },
        { name: 'Landscaped Private Gardens', icon: 'Trees', verified: true, description: 'Green lawns with Himalayan pine backdrop' },
        { name: 'Heated Bedding & Winter Heaters', icon: 'Flame', verified: true, description: 'Warm and cozy throughout winter months' },
        { name: 'High-Speed Optical Wi-Fi', icon: 'Wifi', verified: true, description: 'Reliable connectivity for mountain workcations' }
      ]
    },
    {
      title: 'Kitchen & Dining',
      description: 'Independent culinary setup with premium appliances',
      items: [
        { name: 'Fully Equipped Kitchen', icon: 'Utensils', verified: true, description: 'Gas stove, microwave, refrigerator & cookware' },
        { name: 'Electric Kettle & Tea Setup', icon: 'CupSoda', verified: true, description: 'Complimentary tea/coffee supplies upon arrival' },
        { name: 'Indoor & Outdoor Dining', icon: 'Table', verified: true, description: 'Family dining tables in lounge and on veranda' },
        { name: 'Drinking Water Filtration', icon: 'Droplets', verified: true, description: 'Safe RO purified mountain drinking water' }
      ]
    },
    {
      title: 'Safety, Care & Access',
      description: 'Seamless hosting and secure property standards',
      items: [
        { name: 'On-site Caretaker Assistance', icon: 'UserCheck', verified: true, description: 'Assistance with check-in, fireplace & luggage' },
        { name: 'Private Vehicle Parking', icon: 'Car', verified: true, description: 'Safe on-premises parking for resident cars' },
        { name: 'Power Backup & Inverter', icon: 'Zap', verified: true, description: 'Uninterrupted power for lights, Wi-Fi and charging' },
        { name: 'First Aid & Emergency Kit', icon: 'ShieldCheck', verified: true, description: 'On-site medical kit and regional contact directory' }
      ]
    }
  ],
  policies: {
    checkInTime: '2:00 PM onwards',
    checkOutTime: '11:00 AM',
    houseRules: [
      'Valid Government Photo ID (Aadhaar / Passport) is required for all adult guests upon arrival.',
      'The property is a serene Himalayan residential sanctuary; commercial loud parties are not permitted.',
      'Smoking is strictly restricted to designated open outdoor veranda areas; smoking inside bedrooms is not permitted.',
      'Kitchen access is provided for guest self-cooking and reheating; please keep cooking spaces tidy.',
      'Care should be taken around the pool area; children must be supervised by adults at all times.'
    ],
    poolRules: [
      'Pool timings: 8:00 AM to 7:00 PM.',
      'Proper swimwear required before entering the pool.',
      'No glassware or breakable items on the immediate pool deck.',
      'Children under 14 must be accompanied by an adult guardian at all times.',
      'Diving is strictly prohibited for guest safety.'
    ],
    noisePolicy: 'Quiet hours observed between 10:00 PM and 7:00 AM to respect mountain tranquility.',
    smokingPolicy: 'Allowed only in open-air garden and designated outdoor terrace zones.',
    petPolicy: 'Please enquire with the concierge prior to booking regarding pet accommodation.',
    cancellationPolicy: 'Direct booking cancellation terms provided during date confirmation.',
    securityDeposit: 'A standard refundable security deposit may be collected at check-in and returned upon checkout inspection.'
  },
  highlights: [
    {
      title: 'Complete 3 BHK Buyout',
      description: 'Enjoy 100% exclusive privacy across all 3 suites, private pool, living salons, kitchen, and gardens with no outside guests.',
      icon: 'Home'
    },
    {
      title: 'Himalayan Ridge Position',
      description: 'Situated in peaceful Kasialekh / Dausapani, Mukteshwar, away from traffic and crowded tourist strips.',
      icon: 'Mountain'
    },
    {
      title: 'Private Pool & Veranda',
      description: 'Unwind on the panoramic open-air veranda deck and private plunge pool with continuous valley breezes.',
      icon: 'Waves'
    },
    {
      title: 'Direct-Booking Transparency',
      description: 'Zero hidden commission markups, direct communication with the host, and customized mountain hospitality.',
      icon: 'Sparkles'
    }
  ]
};
