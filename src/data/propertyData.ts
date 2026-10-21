import { PropertyData } from '../types';
import { GOOGLE_REVIEW_COUNT } from './reviewsData';

export const propertyData: PropertyData = {
  name: 'The Mukteshwar Bungalow',
  canonicalName: 'The Mukteshwar Bungalow | 3 BHK Villa',
  tagline: 'Private Himalayan Residence in the Kumaon Hills',
  primaryCategory: 'Homestay',
  propertyType: 'Luxury 3 BHK Homestay & Villa',
  architectureStyle: 'Himalayan Ridge Residence with Contemporary Mountain Craft',
  totalBedrooms: 3,
  totalBathrooms: 3,
  standardOccupancy: 6,
  maxOccupancy: 10,
  address: {
    line1: 'Dausapani, Kasialekh Village - Chaukhuta',
    village: 'Kasialekh Village - Chaukhuta',
    tehsil: 'Dhari',
    district: 'Nainital',
    city: 'Mukteshwar',
    state: 'Uttarakhand',
    postalCode: '263132',
    country: 'India',
    formattedAddress: 'Dausapani, Kasialekh Village - Chaukhuta, Tehsil - Dhari, District - Nainital, Mukteshwar, Uttarakhand - 263132',
    landmark: 'Near Kasialekh Dausapani Ridge',
    latitude: 29.4298751,
    longitude: 79.6347189,
    googleMapsUrl: 'https://www.google.com/maps/place/?cid=6280376278760413003',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111234.56789!2d79.6347189!3d29.4298751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0980e17210121%3A0x572860fe5f4dd74b!2sThe%20Mukteshwar%20Bungalow%20%7C%203%20BHK%20Villa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    cid: '6280376278760413003',
    placeId: 'ChIJIQEkFw69oDkRS9dNX_NgKFc',
    kgmid: '/g/11z9v7l2pt',
  },
  contact: {
    phone: '+91 90278 44424',
    phoneRaw: '+919027844424',
    whatsapp: '919027844424',
    email: 'themukteshwarbungalow@gmail.com',
    hostName: 'Villa Concierge Team',
    hostType: 'Private Estate Manager',
    caretakerHours: '24 Hours (Round-the-clock on-site support & hospitality)',
    social: {
      instagram: 'https://www.instagram.com/themukteshwarbungalow'
    }
  },
  rating: {
    score: 5.0,
    reviewCount: GOOGLE_REVIEW_COUNT,
    platform: 'Google Business Profile'
  },
  livingSpaces: [
    {
      name: 'The Veranda Lounge',
      description: 'An expansive mountain-facing living veranda designed for slow mornings, high-altitude cedar breezes, and evening fireside conversations overlooking the Kumaon valley.',
      image: '/images/veranda/veranda-lounge-morning-tea-seating.jpg',
      features: [
        'Indoor-outdoor veranda lounge seating',
        'Direct panorama of the Kumaon mountain ranges',
        'Natural stone and timber architectural detailing',
        'Morning tea & sunset observation terrace',
        'Ambient evening bonfire setup'
      ]
    },
    {
      name: 'Veranda - Open Space',
      description: 'An open-air stone deck terrace stepping directly into the garden lawn, perfect for morning yoga, stargazing, and alfresco dining.',
      image: '/images/veranda/veranda-open-space-terrace.jpg',
      features: [
        'Open sky sundeck with panoramic valley views',
        'Artisanal handcrafted wicker seating',
        'Direct connection to the lush private garden',
        'Unobstructed mountain ridge sunsets'
      ]
    },
    {
      name: 'Fully Equipped Kitchen',
      description: 'A complete residential kitchen with modern cooking hobs, refrigeration, microwave, and tableware. Features dedicated in-house cook services for freshly prepared, customized home-style pure vegetarian meals.',
      image: '/images/kitchen/fully-equipped-kitchen-dining-counter.jpg',
      features: [
        'Dedicated in-house pure-veg cook for fresh breakfast, lunch & dinner',
        'Full cooking gas hob and modern ventilation chimney',
        'Refrigerator, microwave oven, and electric kettle',
        'Premium dinnerware, cutlery, and cooking vessels',
        'Spacious quartz preparation counters and pantry storage',
        'Dedicated dining counter with mountain window view'
      ]
    },
    {
      name: 'Private Manicured Lawn & Garden',
      description: 'An open manicured green lawn framed by oak and pine forests, perfect for sunrise Himalayan tea, mindful yoga, family recreation, and cozy evening bonfires.',
      image: '/images/garden/villa-garden-himalayan-backdrop.jpg',
      features: [
        'Open manicured green grass lawn with valley backdrop',
        'Morning tea, mindful yoga, and meditation lawn',
        'Stargazing and astrophotography zone at 7,000 ft',
        'Evening bonfire and barbecue setup on request',
        'Safe, enclosed natural play space for children and family'
      ]
    }
  ],
  rooms: [
    {
      id: 'the-himalayan-suite',
      slug: 'the-himalayan-suite',
      name: 'The Himalayan Suite',
      shortName: 'Himalayan Suite',
      subtitle: 'Master Suite 1 • Panoramic Mountain Glazing (~400 sq. ft)',
      overview: 'Spanning ~400 sq. ft, this primary master suite features expansive picture windows framing the Kumaon valley, an attached private viewing balcony, warm hardwood finishes, and a handcrafted king-sized bed.',
      description: [
        'The Himalayan Suite is positioned to capture the earliest morning light across the valley. Flooded with natural high-altitude daylight, the suite blends contemporary architectural minimalism with Himalayan warmth.',
        'Spanning approximately 400 sq. ft, it features a generous king-size bed with orthopedic mattress and premium cotton linens, attached private balcony, dedicated fireside reading chairs, generous wardrobe storage, and a pristine private en-suite bathroom with glass shower cubicle.'
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
        'Spacious ~400 sq. ft suite layout',
        'Attached private viewing balcony',
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
        'Spacious ~400 sq. ft master suite layout',
        'Attached private viewing balcony',
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
      subtitle: 'Suite 2 • Timber Ceilings & Heritage Serenity (~400 sq. ft)',
      overview: 'Spanning ~400 sq. ft, an exquisitely styled mountain suite featuring exposed natural timber rafters, attached private balcony, plush ambient lighting, and direct outlook over the pine ridge gardens.',
      description: [
        'The Imperial Suite offers a quiet mountain suite characterized by rich wood accents and artisanal Himalayan craftsmanship. Designed for restorative deep rest after a day of mountain trails.',
        'Spanning ~400 sq. ft with an attached private balcony, it includes an inviting king bed, bespoke side dressers, plush sitting chairs, and an elegant en-suite bathroom with contemporary fittings and heated water supply.'
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
        'Spacious ~400 sq. ft suite layout',
        'Attached private viewing balcony',
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
        'Spacious ~400 sq. ft layout',
        'Attached private balcony overlooking garden ridge',
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
      subtitle: 'Suite 3 • Private Terrace Access & Ridge Horizons (~400 sq. ft)',
      overview: 'Spanning ~400 sq. ft, this spacious corner suite opens directly toward the private terrace and outdoor veranda, combining sun-drenched private balcony spaces with panoramic mountain horizon vistas.',
      description: [
        'The Signature Himalayan Suite enjoys privileged access to the upper terrace and veranda corridor. Large glass sliders draw the fresh pine-scented mountain air into a tastefully appointed corner bedroom suite.',
        'Spanning ~400 sq. ft with an attached private balcony and terrace step-out, it is furnished with a deluxe king bed, custom walnut wardrobe, cozy reading divan, and a sparkling private bathroom with modern sanitaries.'
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
        'Spacious ~400 sq. ft suite layout',
        'Attached private balcony & terrace walkout',
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
        'Spacious ~400 sq. ft layout with private terrace balcony',
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
        { name: 'Open-Air Sun Terrace & Deck', icon: 'Sun', verified: true, description: 'Panoramic outdoor deck overlooking the Kumaon valley' },
        { name: 'The Veranda Lounge', icon: 'Coffee', verified: true, description: 'Panoramic outdoor living & tea terrace' },
        { name: 'Private Manicured Lawn & Garden', icon: 'Trees', verified: true, description: 'Open manicured green grass lawn for yoga, tea & bonfires' },
        { name: 'Spacious Living & Dining Salon', icon: 'Armchair', verified: true, description: 'Dual family lounges with mountain views' },
        { name: 'Heated Bedding & Winter Heaters', icon: 'Flame', verified: true, description: 'Warm and cozy throughout winter months' },
        { name: 'High-Speed Optical Wi-Fi', icon: 'Wifi', verified: true, description: 'Reliable high-speed setup for remote workcations' }
      ]
    },
    {
      title: 'Kitchen & Pure-Veg Dining',
      description: 'Dedicated in-house cook services and independent culinary freedom',
      items: [
        { name: 'Dedicated Pure-Veg Cook/Chef', icon: 'Utensils', verified: true, description: 'Freshly prepared, customized home-style pure vegetarian meals (Breakfast, Lunch, Dinner)' },
        { name: 'Fully Equipped Kitchen', icon: 'CookingPot', verified: true, description: 'Gas stove, microwave, refrigerator & cookware for guest self-cooking' },
        { name: 'Electric Kettle & Tea Setup', icon: 'CupSoda', verified: true, description: 'Complimentary tea/coffee supplies upon arrival' },
        { name: 'Indoor & Outdoor Dining', icon: 'Table', verified: true, description: 'Family dining tables in lounge and on veranda' },
        { name: 'Drinking Water Filtration', icon: 'Droplets', verified: true, description: 'Safe RO purified mountain drinking water' }
      ]
    },
    {
      title: 'Safety, Care & 24-Hr Access',
      description: 'Attentive on-site hosting, 24-hour assistance, and private property standards',
      items: [
        { name: '24-Hour Hospitality & Front Desk', icon: 'Clock', verified: true, description: 'Round-the-clock on-site support and guest assistance' },
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
      'The property is a peaceful Himalayan residential home; commercial loud parties are not permitted.',
      'Smoking is strictly restricted to designated open outdoor veranda areas; smoking inside bedrooms is not permitted.',
      'Kitchen access is provided for guest self-cooking and reheating; please keep cooking spaces tidy.'
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
      description: 'Enjoy 100% exclusive privacy across all 3 suites, living salons, veranda lounge, kitchen, and gardens with no outside guests.',
      icon: 'Home'
    },
    {
      title: 'Himalayan Ridge Position',
      description: 'Situated in peaceful Kasialekh / Dausapani, Mukteshwar, away from traffic and crowded tourist strips.',
      icon: 'Mountain'
    },
    {
      title: 'Panoramic Veranda & Sun Deck',
      description: 'Relax on the panoramic open-air veranda terrace and sun deck with sweeping mountain valley breezes.',
      icon: 'Coffee'
    },
    {
      title: 'Direct-Booking Transparency',
      description: 'Zero hidden commission markups, direct communication with the host, and customized mountain hospitality.',
      icon: 'Sparkles'
    }
  ]
};
