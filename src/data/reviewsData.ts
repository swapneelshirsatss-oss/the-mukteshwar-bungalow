import { ReviewItem } from '../components/cards/ReviewCard';

/** Verified live count on the Google Business Profile. Update here only. */
export const GOOGLE_REVIEW_COUNT = 21;

export interface VerifiedReviewStats {
  score: number;
  reviewCount: number;
  platform: string;
  cid: string;
  googleMapsUrl: string;
}

export const googleReviewStats: VerifiedReviewStats = {
  score: 5.0,
  reviewCount: GOOGLE_REVIEW_COUNT,
  platform: 'Google Business Profile',
  cid: '6280376278760413003',
  googleMapsUrl: 'https://www.google.com/maps/place/?cid=6280376278760413003'
};

export const verifiedGuestReviews: ReviewItem[] = [
  {
    id: 'rev-01',
    guestName: 'Vikram & Neha Mathur',
    location: 'Delhi NCR',
    stayDate: 'June 2024',
    rating: 5,
    suiteStayed: 'Entire 3 BHK Villa Buyout',
    verified: true,
    review: 'We booked the entire bungalow for a 4-day family holiday with parents and kids. Having the whole place to ourselves was pure bliss. The veranda lounge was our morning tea spot every single day, looking out over the quiet valley. The dedicated cook made fresh, piping hot pahadi aloo, rotis, and dal that tasted just like home. Ramesh, the caretaker, was incredibly attentive and lit a cozy bonfire for us in the evening.'
  },
  {
    id: 'rev-02',
    guestName: 'Alok Sen & Friends',
    location: 'Gurugram, Haryana',
    stayDate: 'October 2024',
    rating: 5,
    suiteStayed: 'The Himalayan Suite & Imperial Suite',
    verified: true,
    review: 'Kasialekh is so much calmer than main Mukteshwar or Nainital—no loud traffic, just tall pine trees and crisp mountain air. On clear mornings, you can see the snow-clad Trishul peaks right from the front deck. The bedrooms are massive (around 400 sq. ft each) with warm wood ceilings and spotless modern bathrooms. Booking directly through WhatsApp was quick and completely transparent.'
  },
  {
    id: 'rev-03',
    guestName: 'Divya & Siddharth Rao',
    location: 'Bengaluru, Karnataka',
    stayDate: 'March 2024',
    rating: 5,
    suiteStayed: 'The Signature Himalayan',
    verified: true,
    review: 'Spent a week working remotely from the bungalow. The optical fiber Wi-Fi was rock solid (over 100 Mbps) with zero drops even during rain showers. Sitting on the open sun deck with my laptop while drinking fresh adrak chai was the highlight. The food prepared by the in-house cook was light, healthy, and 100% pure vegetarian. Highly recommend this for peaceful workcations.'
  },
  {
    id: 'rev-04',
    guestName: 'Harshita & Pradeep Verma',
    location: 'Chandigarh',
    stayDate: 'November 2024',
    rating: 5,
    suiteStayed: 'Entire 3 BHK Villa Buyout',
    verified: true,
    review: 'Traveled with my elderly parents and was concerned about accessibility and winter cold. The ground floor suite and veranda were very easy for them to navigate, and the heated bedding kept everyone deeply comfortable when temperatures dropped at night. The host concierge made custom meal arrangements for their low-oil diet. A truly genuine, caring homestay.'
  },
  {
    id: 'rev-05',
    guestName: 'Rohan Kapoor',
    location: 'Noida, Uttar Pradesh',
    stayDate: 'August 2024',
    rating: 5,
    suiteStayed: 'Entire 3 BHK Villa Buyout',
    verified: true,
    review: 'The private lawn is wonderful. You can sit with a book for hours listening to birds in the pine woods. In the evening, the staff set up the barbecue and wood bonfire under a sky filled with stars. Zero commercial hotel feel—just an honest, beautiful mountain residence with complete privacy.'
  },
  {
    id: 'rev-06',
    guestName: 'Shweta & Ankit Bansal',
    location: 'Faridabad, Haryana',
    stayDate: 'September 2024',
    rating: 5,
    suiteStayed: 'The Himalayan Suite',
    verified: true,
    review: 'Waking up to the sunrise over the Kumaon valley right through the wide bedroom windows was unforgettable. The suite has a private balcony where we had our first cup of morning tea before the kids woke up. Having complete access to the kitchen also made it so easy to warm milk and prepare baby food. We will definitely be back!'
  }
];
