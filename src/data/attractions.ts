import { AttractionItem } from '../types';

export const nearbyAttractions: AttractionItem[] = [
  {
    id: 'chauli-ki-jali',
    name: 'Chauli Ki Jali',
    category: 'Viewpoint',
    distanceKm: 8.5,
    distanceMinutes: 20,
    approximateDistanceDisplay: 'Approx. 8.5 km (20 mins drive)',
    description: 'A striking cliffside rock formation adjacent to the Mukteshwar Temple. Renowned for exhilarating panoramic views of the Kumaon valley, sunset vistas, and rock climbing / rappelling adventures.',
    highlights: [
      '360-degree Kumaon valley & sunset vistas',
      'Natural rock lattice window formations',
      'Popular spot for photography and gentle ridge walks',
      'Close to local handicraft and fruit preserve stalls'
    ],
    bestTimeToVisit: 'Early morning for clear mountain peaks, or 4:30 PM for golden sunset',
    searchIntent: 'chauli ki jali mukteshwar distance viewpoint',
    image: '/images/garden/villa-garden-himalayan-backdrop.jpg',
    verified: true,
    coordinates: { lat: 29.4725, lng: 79.6547 }
  },
  {
    id: 'mukteshwar-temple',
    name: 'Mukteshwar Dham (Shiva Temple)',
    category: 'Heritage Temple',
    distanceKm: 8.2,
    distanceMinutes: 20,
    approximateDistanceDisplay: 'Approx. 8.2 km (20 mins drive)',
    description: 'An ancient 350-year-old temple dedicated to Lord Shiva situated at the highest point of Mukteshwar (approx. 2,286 meters). Offers sweeping views of the Trishul, Nanda Devi, and Panchachuli Himalayan peaks on clear days.',
    highlights: [
      '350-year-old historic stone architecture',
      'Panoramic viewpoints overlooking the Greater Himalayas',
      'Peaceful spiritual ambiance amidst pine groves',
      'Starting point for the Chauli Ki Jali cliff walk'
    ],
    bestTimeToVisit: 'Morning hours (7:00 AM – 11:00 AM) for clear Himalayan visibility',
    searchIntent: 'mukteshwar temple history timing distance',
    image: '/images/exterior/villa-exterior-mountain-ridge.jpg',
    verified: true,
    coordinates: { lat: 29.4717, lng: 79.6536 }
  },
  {
    id: 'bhalu-gaad-waterfall',
    name: 'Bhalu Gaad Waterfall',
    category: 'Nature & Waterfall',
    distanceKm: 14.0,
    distanceMinutes: 30,
    approximateDistanceDisplay: 'Approx. 14 km (30 mins drive + 30 mins gentle trek)',
    description: 'A pristine 60-foot natural waterfall tucked inside dense oak and pine forests near Dhari. Reached via a gentle 1.5 km scenic forest hike crossing natural wooden bridges and crystal streams.',
    highlights: [
      '60-foot cascading freshwater pool',
      'Gentle nature walk suitable for families and children',
      'Lush green canopy and vibrant birdlife',
      'Natural swimming pond at the base'
    ],
    bestTimeToVisit: '10:00 AM to 3:00 PM for warm sunshine through the forest canopy',
    searchIntent: 'bhalu gaad waterfall trek mukteshwar distance',
    image: '/images/garden/villa-garden-stone-pathway.jpg',
    verified: true,
    coordinates: { lat: 29.4214, lng: 79.6241 }
  },
  {
    id: 'kainchi-dham',
    name: 'Kainchi Dham Ashram (Neem Karoli Baba)',
    category: 'Spiritual Sanctuary',
    distanceKm: 34.0,
    distanceMinutes: 65,
    approximateDistanceDisplay: 'Approx. 34 km (65 mins drive along Bhowali route)',
    description: 'The world-renowned spiritual ashram of Neem Karoli Baba Maharaj-ji, situated in a quiet river valley near Bhowali. A destination of deep peace visited by spiritual seekers from across the globe.',
    highlights: [
      'Historic meditation ashram of Neem Karoli Baba',
      'Picturesque river valley setting with forested slopes',
      'Spiritual prasad and peaceful temple complex',
      'Convenient stopover when driving up from Kathgodam/Haldwani'
    ],
    bestTimeToVisit: 'Early mornings or late afternoons; expect heavy weekend footfall',
    searchIntent: 'kainchi dham to mukteshwar distance route ashram',
    image: '/images/veranda/veranda-lounge-panoramic-view.jpg',
    verified: true,
    coordinates: { lat: 29.4248, lng: 79.5165 }
  },
  {
    id: 'nainital-lake-town',
    name: 'Nainital Hill Town & Naini Lake',
    category: 'Hill Station',
    distanceKm: 42.0,
    distanceMinutes: 75,
    approximateDistanceDisplay: 'Approx. 42 km (75 mins scenic hill drive)',
    description: 'The historic British-era lake resort of Kumaon. Ideal for a day excursion featuring boating on Naini Lake, the Mall Road promenade, Naina Devi Temple, and heritage colonial bakeries.',
    highlights: [
      'Scenic pedal boating and yachting on Naini Lake',
      'The Mall Road shopping, cafes, and wooden souvenirs',
      'Naina Devi Temple and ropeway cable car',
      'Return to the peaceful tranquility of Mukteshwar for the night'
    ],
    bestTimeToVisit: 'Full day trip from 9:00 AM to 5:00 PM',
    searchIntent: 'mukteshwar to nainital distance day trip',
    image: '/images/exterior/villa-exterior-himalayan-architecture.jpg',
    verified: true,
    coordinates: { lat: 29.3919, lng: 79.4542 }
  },
  {
    id: 'sitla-fruit-orchards',
    name: 'Sitla & Ramgarh Fruit Orchards',
    category: 'Nature & Waterfall',
    distanceKm: 12.0,
    distanceMinutes: 25,
    approximateDistanceDisplay: 'Approx. 12 km (25 mins drive)',
    description: 'The renowned "Fruit Bowl of Kumaon", famous for extensive plum, peach, apricot, and apple orchards sloping down misty ridges with uninterrupted views of the snow peaks.',
    highlights: [
      'Lush private fruit orchards and heritage colonial estates',
      'Seasonal fruit picking (May to August)',
      'Birdwatching trails with over 150 Himalayan species',
      'Authentic local organic jam and fruit honey cooperatives'
    ],
    bestTimeToVisit: 'Morning birdwatching walks or blossom season in March/April',
    searchIntent: 'sitla mukteshwar fruit orchards walk',
    image: '/images/garden/villa-garden-private-lawn.jpg',
    verified: true,
    coordinates: { lat: 29.4891, lng: 79.5932 }
  }
];
