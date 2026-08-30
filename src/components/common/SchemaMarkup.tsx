import { propertyData } from '../../data/propertyData';
import { RoomSuite, FAQItem, BlogPost } from '../../types';

export function getLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': 'https://themukteshwarbungalow.in/#lodging',
    'name': propertyData.name,
    'description': propertyData.tagline + ' — A private 3 BHK luxury mountain villa in Kasialekh, Mukteshwar, Uttarakhand with private pool and panoramic valley views.',
    'url': 'https://themukteshwarbungalow.in',
    'telephone': propertyData.contact.phone || '+91-9876543210',
    'email': propertyData.contact.email,
    'image': [
      'https://themukteshwarbungalow.in/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg',
      'https://themukteshwarbungalow.in/images/exterior/villa-exterior-himalayan-architecture.jpg',
      'https://themukteshwarbungalow.in/images/veranda/veranda-lounge-morning-tea-seating.jpg'
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': propertyData.address.line1,
      'addressLocality': propertyData.address.city,
      'addressRegion': propertyData.address.state,
      'postalCode': propertyData.address.postalCode,
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': propertyData.address.latitude,
      'longitude': propertyData.address.longitude
    },
    'hasMap': propertyData.address.googleMapsUrl,
    'checkinTime': propertyData.policies.checkInTime || '14:00',
    'checkoutTime': propertyData.policies.checkOutTime || '11:00',
    'numberOfRooms': propertyData.totalBedrooms,
    'petsAllowed': false,
    'amenityFeature': [
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Private Swimming Pool & Deck',
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
        'name': 'High-Speed Optical Wi-Fi',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'On-Site Private Parking',
        'value': true
      }
    ],
    'containsPlace': propertyData.rooms.map((room) => ({
      '@type': 'Accommodation',
      'name': room.name,
      'description': room.overview,
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
