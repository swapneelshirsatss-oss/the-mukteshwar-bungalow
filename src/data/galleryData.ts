export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Exterior' | 'Suites' | 'Veranda' | 'Living' | 'Kitchen' | 'Garden & Grounds';
  categoryLabel: string;
  caption: string;
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  // Exterior
  {
    id: 'ext-hero',
    src: '/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg',
    alt: 'Front exterior of The Mukteshwar Bungalow luxury 3 BHK villa in Mukteshwar, Uttarakhand',
    category: 'Exterior',
    categoryLabel: 'Villa Exterior',
    caption: 'Front facade of The Mukteshwar Bungalow framed against the Kumaon mountain sky in Kasialekh.'
  },
  {
    id: 'ext-arch',
    src: '/images/exterior/villa-exterior-himalayan-architecture.jpg',
    alt: 'Himalayan stone and timber architecture at The Mukteshwar Bungalow',
    category: 'Exterior',
    categoryLabel: 'Villa Exterior',
    caption: 'Traditional Himalayan stone masonry blended with contemporary architectural glazing.'
  },
  {
    id: 'ext-sunset',
    src: '/images/exterior/villa-exterior-sunset-dusk.jpg',
    alt: 'Evening dusk illumination at The Mukteshwar Bungalow with mountain horizon',
    category: 'Exterior',
    categoryLabel: 'Villa Exterior',
    caption: 'Warm ambient lighting as dusk settles over the Kasialekh mountain ridges.'
  },
  {
    id: 'ext-ridge',
    src: '/images/exterior/villa-exterior-mountain-ridge.jpg',
    alt: 'Mountain ridge view from the upper grounds of The Mukteshwar Bungalow',
    category: 'Exterior',
    categoryLabel: 'Villa Exterior',
    caption: 'Expansive views over the forested slopes and valleys of Tehsil Dhari, Mukteshwar.'
  },
  {
    id: 'ext-deck',
    src: '/images/exterior/villa-exterior-front-deck.jpg',
    alt: 'Spacious front terrace and outdoor sitting deck at The Mukteshwar Bungalow',
    category: 'Exterior',
    categoryLabel: 'Villa Exterior',
    caption: 'The welcoming entrance deck leading into the private mountain residence.'
  },

  // Suites - Himalayan Suite
  {
    id: 'suite-him-1',
    src: '/images/rooms/himalayan-suite/himalayan-suite-master-king-bed.jpg',
    alt: 'Master king bed in The Himalayan Suite with valley view windows',
    category: 'Suites',
    categoryLabel: 'The Himalayan Suite',
    caption: 'The Himalayan Suite — Master bedroom sanctuary with hardwood finishes and panoramic glazing.'
  },
  {
    id: 'suite-him-2',
    src: '/images/rooms/himalayan-suite/himalayan-suite-mountain-window-view.jpg',
    alt: 'Mountain window perspective from The Himalayan Suite bedroom',
    category: 'Suites',
    categoryLabel: 'The Himalayan Suite',
    caption: 'Sunlit morning view over the Kumaon valley straight from your king bed.'
  },
  {
    id: 'suite-him-3',
    src: '/images/rooms/himalayan-suite/himalayan-suite-reading-lounge.jpg',
    alt: 'Cozy reading armchair and dressing area in The Himalayan Suite',
    category: 'Suites',
    categoryLabel: 'The Himalayan Suite',
    caption: 'Intimate reading and relaxation corner within the master suite.'
  },
  {
    id: 'suite-him-4',
    src: '/images/rooms/himalayan-suite/himalayan-suite-ensuite-bathroom.jpg',
    alt: 'En-suite private bathroom with glass shower in The Himalayan Suite',
    category: 'Suites',
    categoryLabel: 'The Himalayan Suite',
    caption: 'Pristine en-suite bathroom featuring high-output hot water geyser and glass shower.'
  },

  // Suites - Imperial Suite
  {
    id: 'suite-imp-1',
    src: '/images/rooms/imperial-suite/imperial-suite-heritage-king-bed.jpg',
    alt: 'The Imperial Suite king bed with artisanal timber ceilings',
    category: 'Suites',
    categoryLabel: 'The Imperial Suite',
    caption: 'The Imperial Suite — Handcrafted timber ceilings and quiet pine garden outlook.'
  },
  {
    id: 'suite-imp-2',
    src: '/images/rooms/imperial-suite/imperial-suite-timber-ceilings.jpg',
    alt: 'Exposed wooden ceiling rafters in The Imperial Suite',
    category: 'Suites',
    categoryLabel: 'The Imperial Suite',
    caption: 'Authentic exposed Himalayan timber craft creating warm acoustic insulation.'
  },
  {
    id: 'suite-imp-3',
    src: '/images/rooms/imperial-suite/imperial-suite-private-sitting.jpg',
    alt: 'Private sitting alcove in The Imperial Suite',
    category: 'Suites',
    categoryLabel: 'The Imperial Suite',
    caption: 'Quiet sitting nook designed for contemplative mountain mornings.'
  },
  {
    id: 'suite-imp-4',
    src: '/images/rooms/imperial-suite/imperial-suite-luxury-bathroom.jpg',
    alt: 'Private modern bathroom in The Imperial Suite',
    category: 'Suites',
    categoryLabel: 'The Imperial Suite',
    caption: 'Attached private bathroom with clean contemporary fittings.'
  },

  // Suites - Signature Himalayan
  {
    id: 'suite-sig-1',
    src: '/images/rooms/signature-himalayan/signature-himalayan-suite-panoramic-view.jpg',
    alt: 'The Signature Himalayan suite with wide corner windows',
    category: 'Suites',
    categoryLabel: 'The Signature Himalayan',
    caption: 'The Signature Himalayan — Wide-angle corner windows looking across the valley.'
  },
  {
    id: 'suite-sig-2',
    src: '/images/rooms/signature-himalayan/signature-himalayan-suite-king-bed.jpg',
    alt: 'Deluxe king bed setup in The Signature Himalayan suite',
    category: 'Suites',
    categoryLabel: 'The Signature Himalayan',
    caption: 'Spacious deluxe king bed with premium linens and natural daylight.'
  },
  {
    id: 'suite-sig-3',
    src: '/images/rooms/signature-himalayan/signature-himalayan-suite-terrace-access.jpg',
    alt: 'Direct veranda step-out from The Signature Himalayan suite',
    category: 'Suites',
    categoryLabel: 'The Signature Himalayan',
    caption: 'Direct step-out access to the upper veranda and outdoor sitting areas.'
  },

  // Veranda & Lounge
  {
    id: 'ver-1',
    src: '/images/veranda/veranda-lounge-morning-tea-seating.jpg',
    alt: 'The Veranda Lounge morning tea seating overlooking the hills',
    category: 'Veranda',
    categoryLabel: 'The Veranda Lounge',
    caption: 'The Veranda Lounge — The heart of the bungalow for morning tea and sunset watching.'
  },
  {
    id: 'ver-2',
    src: '/images/veranda/veranda-lounge-indoor-outdoor-flow.jpg',
    alt: 'Indoor outdoor living connection at The Veranda Lounge',
    category: 'Veranda',
    categoryLabel: 'The Veranda Lounge',
    caption: 'Seamless architectural flow connecting the living salon with the open-air deck.'
  },
  {
    id: 'ver-3',
    src: '/images/veranda/veranda-lounge-panoramic-view.jpg',
    alt: 'Unobstructed mountain valley view from The Veranda Lounge',
    category: 'Veranda',
    categoryLabel: 'The Veranda Lounge',
    caption: 'Unobstructed 180-degree vista of the Kumaon hills in morning light.'
  },
  {
    id: 'ver-4',
    src: '/images/veranda/veranda-open-space-terrace.jpg',
    alt: 'Veranda open space terrace with wicker loungers',
    category: 'Veranda',
    categoryLabel: 'Veranda - Open Space',
    caption: 'Open space stone terrace for yoga, reading, and soaking in the sun.'
  },
  {
    id: 'ver-5',
    src: '/images/veranda/veranda-lounge-evening-bonfire.jpg',
    alt: 'Evening terrace ambiance for fireside gatherings',
    category: 'Veranda',
    categoryLabel: 'The Veranda Lounge',
    caption: 'Ambient evening fireside setup under the starlit Himalayan sky.'
  },

  // Living Salons
  {
    id: 'liv-1',
    src: '/images/living/living-room-fireplace-lounge.jpg',
    alt: 'Spacious living room salon with plush couches and mountain outlook',
    category: 'Living',
    categoryLabel: 'Living Salons',
    caption: 'Primary living salon designed for cozy family conversations and board games.'
  },
  {
    id: 'liv-2',
    src: '/images/living/living-room-family-dining.jpg',
    alt: 'Indoor dining and living setup at The Mukteshwar Bungalow',
    category: 'Living',
    categoryLabel: 'Living Salons',
    caption: 'Comfortable indoor family dining space with mountain views.'
  },
  {
    id: 'liv-3',
    src: '/images/living/living-room-mountain-views.jpg',
    alt: 'Natural sunlight filling the secondary living salon',
    category: 'Living',
    categoryLabel: 'Living Salons',
    caption: 'Secondary lounge with large view windows and relaxed seating.'
  },

  // Kitchen
  {
    id: 'kit-1',
    src: '/images/kitchen/fully-equipped-kitchen-dining-counter.jpg',
    alt: 'Fully equipped kitchen with quartz breakfast counter at The Mukteshwar Bungalow',
    category: 'Kitchen',
    categoryLabel: 'Fully Equipped Kitchen',
    caption: 'Fully equipped modern residential kitchen with gas hobs, microwave, and quartz counters.'
  },
  {
    id: 'kit-2',
    src: '/images/kitchen/fully-equipped-kitchen-appliances-cookware.jpg',
    alt: 'Modern appliances and cooking cookware in the kitchen',
    category: 'Kitchen',
    categoryLabel: 'Fully Equipped Kitchen',
    caption: 'Complete cookware, electric kettle, and refrigerator for homestyle cooking.'
  },

  // Garden & Grounds
  {
    id: 'gar-1',
    src: '/images/garden/villa-garden-private-lawn.jpg',
    alt: 'Lush private lawn and garden at The Mukteshwar Bungalow',
    category: 'Garden & Grounds',
    categoryLabel: 'Garden & Grounds',
    caption: 'Private manicured lawn surrounded by native Kumaoni flora.'
  },
  {
    id: 'gar-2',
    src: '/images/garden/villa-garden-sunset-terrace.jpg',
    alt: 'Sunset perspective over the garden terrace and mountain hills',
    category: 'Garden & Grounds',
    categoryLabel: 'Garden & Grounds',
    caption: 'Golden hour tranquility across the villa gardens.'
  }
];
