import { propertyData } from '../../data/propertyData';
import { RoomSuite, FAQItem, BlogPost, AttractionItem } from '../../types';

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://themukteshwarbungalow.in/#website',
    'url': 'https://themukteshwarbungalow.in',
    'name': 'The Mukteshwar Bungalow | 3 BHK Villa',
    'alternateName': [
      'The Mukteshwar Bungalow',
      'The Mukteshwar Villa',
      'Mukteshwar Bungalow'
    ],
    'description': 'Private 3 BHK luxury mountain villa in Kasialekh, Mukteshwar with panoramic Veranda Lounge, open sun deck, and mountain views.',
    'sameAs': [
      'https://www.google.com/maps/place/?cid=6280376278760413003',
      'https://www.google.com/search?kgmid=/g/11z9v7l2pt',
      'https://www.instagram.com/themukteshwarbungalow'
    ],
    'publisher': {
      '@type': 'LodgingBusiness',
      '@id': 'https://themukteshwarbungalow.in/#lodging'
    }
  };
}

export function getLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': 'https://themukteshwarbungalow.in/#lodging',
    'name': propertyData.canonicalName || 'The Mukteshwar Bungalow | 3 BHK Villa',
    'alternateName': [
      propertyData.name,
      'The Mukteshwar Villa',
      'Mukteshwar Luxury 3 BHK Villa'
    ],
    'description': propertyData.tagline + ' — A private 3 BHK luxury mountain villa in Kasialekh, Mukteshwar, Uttarakhand with open sun deck, veranda lounge, and panoramic valley views.',
    'url': 'https://themukteshwarbungalow.in',
    'telephone': propertyData.contact.phoneRaw || '+917078560516',
    'email': propertyData.contact.email,
    'priceRange': '₹₹₹',
    'currenciesAccepted': 'INR',
    'paymentAccepted': 'Cash, Credit Card, UPI, Bank Transfer',
    'parentOrganization': {
      '@type': 'Organization',
      'name': 'Casa De Bello Hospitality',
      'url': 'https://casadebello.com/'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': propertyData.contact.phoneRaw || '+917078560516',
      'contactType': 'reservations',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi']
    },
    'areaServed': [
      'Delhi NCR',
      'Noida',
      'Gurugram',
      'Ghaziabad',
      'Faridabad',
      'Dehradun',
      'Haldwani',
      'Chandigarh',
      'Lucknow',
      'Mumbai'
    ],
    'image': [
      'https://themukteshwarbungalow.in/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg',
      'https://themukteshwarbungalow.in/images/exterior/villa-exterior-himalayan-architecture.jpg',
      'https://themukteshwarbungalow.in/images/veranda/veranda-lounge-morning-tea-seating.jpg',
      'https://themukteshwarbungalow.in/images/veranda/veranda-open-space-terrace.jpg'
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${propertyData.address.line1}, Tehsil - ${propertyData.address.tehsil}, District - ${propertyData.address.district}`,
      'addressLocality': propertyData.address.city,
      'addressRegion': propertyData.address.state,
      'postalCode': propertyData.address.postalCode,
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': propertyData.address.latitude || 29.4298751,
      'longitude': propertyData.address.longitude || 79.6347189
    },
    'hasMap': propertyData.address.googleMapsUrl || 'https://www.google.com/maps/place/?cid=6280376278760413003',
    'sameAs': [
      'https://www.google.com/maps/place/?cid=6280376278760413003',
      'https://www.google.com/search?kgmid=/g/11z9v7l2pt',
      'https://www.instagram.com/themukteshwarbungalow'
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'reviewCount': '15',
      'bestRating': '5',
      'worstRating': '1'
    },
    'checkinTime': propertyData.policies.checkInTime || '14:00',
    'checkoutTime': propertyData.policies.checkOutTime || '11:00',
    'numberOfRooms': propertyData.totalBedrooms,
    'petsAllowed': false,
    'amenityFeature': [
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Dedicated In-House Pure-Vegetarian Cook/Chef',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Private Manicured Lawn & Garden',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': '24-Hour Hospitality & Front Desk Support',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Attached Private Balconies (~400 sq. ft Suites)',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Open-Air Sun Terrace & Deck',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'The Veranda Lounge & Open Terrace',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Fully Equipped Kitchen',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'High-Speed Optical Wi-Fi for Workcations',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'On-Site Private Parking',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Panoramic Himalayan Mountain Views',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'On-site Caretaker Assistance',
        'value': true
      }
    ],
    'containsPlace': propertyData.rooms.map((room) => ({
      '@type': 'Accommodation',
      'name': `${room.name} (~400 sq. ft with Balcony)`,
      'description': room.overview,
      'floorSize': {
        '@type': 'QuantitativeValue',
        'value': 400,
        'unitCode': 'FTK'
      },
      'occupancy': {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': room.maxOccupancy
      },
      'bed': {
        '@type': 'BedDetails',
        'typeOfBed': 'King'
      }
    }))
  };
}

export function getRoomSchema(room: RoomSuite) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    'name': `${room.name} | The Mukteshwar Bungalow`,
    'description': room.overview,
    'image': `https://themukteshwarbungalow.in${room.heroImage}`,
    'bed': {
      '@type': 'BedDetails',
      'numberOfBeds': 1,
      'typeOfBed': 'King Bed'
    },
    'occupancy': {
      '@type': 'QuantitativeValue',
      'minValue': 1,
      'maxValue': room.maxOccupancy
    },
    'amenityFeature': room.amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      'name': amenity,
      'value': true
    })),
    'isPartOf': {
      '@type': 'LodgingBusiness',
      '@id': 'https://themukteshwarbungalow.in/#lodging',
      'name': propertyData.name
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `https://themukteshwarbungalow.in${item.url}`
    }))
  };
}

export function getFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function getArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.metaDescription,
    'image': post.coverImage.startsWith('http') ? post.coverImage : `https://themukteshwarbungalow.in${post.coverImage}`,
    'datePublished': post.publishedDate,
    'dateModified': post.publishedDate,
    'author': {
      '@type': 'Organization',
      'name': 'The Mukteshwar Bungalow Editorial Team',
      'url': 'https://themukteshwarbungalow.in'
    },
    'publisher': {
      '@type': 'Organization',
      'name': propertyData.name,
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://themukteshwarbungalow.in/favicon.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://themukteshwarbungalow.in/blog/${post.slug}`
    }
  };
}

export function getAllRoomsSchema(rooms: RoomSuite[] = propertyData.rooms) {
  return rooms.map((room) => getRoomSchema(room));
}

export function getAttractionsItemListSchema(attractions: AttractionItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Attractions & Sightseeing Spots Near The Mukteshwar Bungalow',
    'description': 'A curated guide of heritage temples, scenic viewpoints, and nature waterfalls near Kasialekh, Mukteshwar.',
    'itemListElement': attractions.map((attraction, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'TouristAttraction',
        'name': attraction.name,
        'description': attraction.description,
        'image': attraction.image.startsWith('http') ? attraction.image : `https://themukteshwarbungalow.in${attraction.image}`,
        ...(attraction.coordinates ? {
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': attraction.coordinates.lat,
            'longitude': attraction.coordinates.lng
          }
        } : {}),
        'isAccessibleForFree': true
      }
    }))
  };
}

export function getBlogHubCollectionSchema(posts: BlogPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://themukteshwarbungalow.in/blog#collection',
    'url': 'https://themukteshwarbungalow.in/blog',
    'name': 'Kumaon Travel Journal & Editorial Guides | The Mukteshwar Bungalow',
    'description': 'Curated travel guides, driving routes, seasonal insights, and accommodation tips for Mukteshwar and Uttarakhand.',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://themukteshwarbungalow.in/#website'
    },
    'hasPart': posts.map((post) => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.metaDescription,
      'url': `https://themukteshwarbungalow.in/blog/${post.slug}`,
      'datePublished': post.publishedDate,
      'image': post.coverImage.startsWith('http') ? post.coverImage : `https://themukteshwarbungalow.in${post.coverImage}`
    }))
  };
}

export function getHowToDirectionsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Drive from Delhi-NCR to The Mukteshwar Bungalow',
    'description': 'Step-by-step route directions from Delhi, Noida, or Gurgaon to The Mukteshwar Bungalow in Kasialekh, Mukteshwar via NH9.',
    'totalTime': 'PT8H',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'INR',
      'value': '3500'
    },
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Delhi-NCR to Moradabad Bypass',
        'text': 'Take Delhi-Meerut Expressway (NE-3) and merge onto NH-9 towards Hapur and Moradabad. Distance approx. 165 km.'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Moradabad to Haldwani via Rampur & Bilaspur',
        'text': 'Continue along NH-9 past Rampur and turn towards Bilaspur and Rudrapur, entering Uttarakhand towards Haldwani foothills.'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Kathgodam to Bhowali Mountain Ascent',
        'text': 'Pass Kathgodam and begin the scenic mountain climb up NH-109 past Jeolikote to Bhowali junction.'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': 'Bhowali to Kasialekh (The Mukteshwar Bungalow)',
        'text': 'Take the Ramgarh / Mukteshwar road passing Ramgarh and Dausapani to arrive at Kasialekh ridge.'
      }
    ]
  };
}

