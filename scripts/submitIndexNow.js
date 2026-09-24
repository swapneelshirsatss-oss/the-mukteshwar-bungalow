/**
 * IndexNow Instant Search Engine Indexation Script
 * Submits 100% of production canonical URLs to Bing, Yandex, Naver, and Seznam.
 */

const HOST = 'themukteshwarbungalow.in';
const KEY = '9f8e4c3b2a1d0f5e6a7b8c9d0e1f2a3b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  'https://themukteshwarbungalow.in/',
  'https://themukteshwarbungalow.in/villa',
  'https://themukteshwarbungalow.in/rooms',
  'https://themukteshwarbungalow.in/rooms/the-himalayan-suite',
  'https://themukteshwarbungalow.in/rooms/the-imperial-suite',
  'https://themukteshwarbungalow.in/rooms/the-signature-himalayan',
  'https://themukteshwarbungalow.in/veranda-lounge',
  'https://themukteshwarbungalow.in/kitchen',
  'https://themukteshwarbungalow.in/experiences',
  'https://themukteshwarbungalow.in/location',
  'https://themukteshwarbungalow.in/mukteshwar',
  'https://themukteshwarbungalow.in/nearby-attractions',
  'https://themukteshwarbungalow.in/directions',
  'https://themukteshwarbungalow.in/gallery',
  'https://themukteshwarbungalow.in/availability',
  'https://themukteshwarbungalow.in/pricing',
  'https://themukteshwarbungalow.in/book',
  'https://themukteshwarbungalow.in/contact',
  'https://themukteshwarbungalow.in/faqs',
  'https://themukteshwarbungalow.in/reviews',
  'https://themukteshwarbungalow.in/blog',
  'https://themukteshwarbungalow.in/blog/why-private-3bhk-villa-best-stay-mukteshwar',
  'https://themukteshwarbungalow.in/blog/delhi-to-mukteshwar-road-trip-guide',
  'https://themukteshwarbungalow.in/blog/best-time-to-visit-mukteshwar-seasons',
  'https://themukteshwarbungalow.in/blog/top-things-to-do-in-mukteshwar',
  'https://themukteshwarbungalow.in/policies',
  'https://themukteshwarbungalow.in/privacy-policy',
  'https://themukteshwarbungalow.in/terms',
  'https://themukteshwarbungalow.in/luxury-villa-mukteshwar-from-delhi',
  'https://themukteshwarbungalow.in/mukteshwar-villa-from-noida',
  'https://themukteshwarbungalow.in/mukteshwar-weekend-getaway-from-gurgaon',
  'https://themukteshwarbungalow.in/mukteshwar-villa-from-dehradun',
  'https://themukteshwarbungalow.in/mukteshwar-villa-from-haldwani'
];

async function submitIndexNow() {
  console.log(`Submitting ${URL_LIST.length} URLs to IndexNow API for ${HOST}...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST
  };

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✓ IndexNow submission successful! Status: ${response.status}`);
      console.log(`✓ Submitted ${URL_LIST.length} production canonical URLs.`);
    } else {
      const text = await response.text();
      console.warn(`! IndexNow returned status ${response.status}: ${text}`);
    }
  } catch (err) {
    console.error('✗ Error connecting to IndexNow:', err.message);
  }
}

submitIndexNow();
