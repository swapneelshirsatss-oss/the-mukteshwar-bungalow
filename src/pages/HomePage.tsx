import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Sparkles,
  Sun,
  Utensils,
  Coffee,
  Check,
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  Compass,
  Star,
  Users,
  Bed,
  Calendar,
  ExternalLink,
  Play
} from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { nearbyAttractions } from '../data/attractions';
import { propertyFAQs } from '../data/faqs';
import { blogPosts } from '../data/blogPosts';
import { verifiedGuestReviews, googleReviewStats, GOOGLE_REVIEW_COUNT } from '../data/reviewsData';
import { SEOHead } from '../components/common/SEOHead';
import { getLodgingBusinessSchema, getFAQPageSchema, getWebSiteSchema } from '../components/common/SchemaMarkup';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BookingWidget } from '../components/booking/BookingWidget';
import { SuiteCard } from '../components/cards/SuiteCard';
import { ReviewCard } from '../components/cards/ReviewCard';
import { AttractionCard } from '../components/cards/AttractionCard';
import { BlogCard } from '../components/cards/BlogCard';
import { AmbianceToggle } from '../components/interactive/AmbianceToggle';
import { CapacityCalculator } from '../components/interactive/CapacityCalculator';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { trackEvent } from '../services/AnalyticsService';

export const HomePage: React.FC = () => {
  const websiteSchema = getWebSiteSchema();
  const lodgingSchema = getLodgingBusinessSchema();
  const faqSchema = getFAQPageSchema(propertyFAQs.slice(0, 6));

  return (
    <>
      <SEOHead
        title="Luxury Homestay & 3 BHK Villa in Mukteshwar | The Mukteshwar Bungalow"
        description="The Mukteshwar Bungalow is a luxury 3 BHK mountain homestay and private villa in Kasialekh, Mukteshwar, Uttarakhand. Explore suites, veranda lounge, open sun deck, pure-veg home-style dining, and direct booking."
        canonicalUrl="https://themukteshwarbungalow.in/"
        schema={[websiteSchema, lodgingSchema, faqSchema]}
      />

      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-charcoal-950 text-ivory-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Photography with High Priority */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg"
            alt="The Mukteshwar Bungalow luxury 3 BHK mountain villa in Mukteshwar, Uttarakhand"
            fetchPriority="high"
            className="w-full h-full object-cover object-center transform scale-105 animate-fade-in"
          />
          {/* Layered Optical Gradients for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-charcoal-950/20" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-8">
          {/* Top Location Pill */}
          <div className="inline-flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-ivory-100/20 text-xs tracking-widest-plus uppercase text-ivory-100/90 shadow-sm animate-fade-in">
            <MapPin className="w-3.5 h-3.5 text-himalayan-400" />
            <span>Kasialekh • Mukteshwar • 7,000 Ft. Altitude</span>
          </div>

          {/* Primary Hero Heading */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-himalayan-400 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.08] text-balance"
          >
            The Mukteshwar Bungalow
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-ivory-200/90 max-w-2xl mx-auto leading-relaxed">
            Your Private Mountain Escape in the Kumaon Hills
          </p>

          <p className="text-xs sm:text-sm uppercase tracking-super-wide text-ivory-200/70 max-w-xl mx-auto font-sans font-light">
            3 BHK Luxury Residence • Open Sun Deck • The Veranda Lounge
          </p>

          {/* Booking Widget Embedded in Hero */}
          <div className="pt-4 sm:pt-6">
            <BookingWidget dark />
          </div>

          {/* Secondary Quick Action Links */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-ivory-200/80">
            <Link
              to="/villa"
              className="inline-flex items-center gap-1.5 hover:text-himalayan-400 transition-colors font-medium"
            >
              <span>Explore the Bungalow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="opacity-40">•</span>
            <Link
              to="/virtual-tour"
              className="inline-flex items-center gap-1.5 hover:text-himalayan-400 transition-colors font-medium"
            >
              <span>360° Virtual Tour</span>
              <Play className="w-3.5 h-3.5" />
            </Link>
            <span className="opacity-40">•</span>
            <a
              href={propertyData.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-himalayan-400 transition-colors font-medium"
            >
              <span>Driving Directions</span>
              <Compass className="w-3.5 h-3.5" />
            </a>
            <span className="opacity-40">•</span>
            <a
              href={generateWhatsAppLink({ intent: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'hero_quick_action' })}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium text-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Talk to Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST / POSITIONING STRIP */}
      <section className="bg-charcoal-900 text-ivory-100 py-6 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center items-center divide-y sm:divide-y-0 sm:divide-x divide-ivory-100/10">
            <a
              href={googleReviewStats.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 block hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400">5.0★</span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light block">
                Google {GOOGLE_REVIEW_COUNT}+ Reviews
              </span>
            </a>
            <div className="py-2 px-3">
              <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400 block">3 BHK Buyout</span>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light">Entire Villa Exclusive</span>
            </div>
            <div className="py-2 px-3">
              <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400 block">Pure-Veg Cook</span>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light">Dedicated In-House Chef</span>
            </div>
            <div className="py-2 px-3">
              <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400 block">The Veranda</span>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light">180° Valley Panoramas</span>
            </div>
            <div className="py-2 px-3">
              <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400 block">Open Sun Deck</span>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light">Private Lawn & Garden</span>
            </div>
            <div className="py-2 px-3 col-span-2 sm:col-span-1">
              <span className="text-lg sm:text-xl font-serif font-bold text-himalayan-400 block">Full Kitchen</span>
              <span className="text-[11px] uppercase tracking-wider text-ivory-200/70 font-light">Equipped Modern Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT THE VILLA (EDITORIAL INTRODUCTION) */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Composition */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10">
              <img
                src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
                alt="Architecture and mountain views of The Mukteshwar Bungalow"
                loading="lazy"
                className="w-full h-[360px] sm:h-[480px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-xs text-ivory-100 font-serif italic">
                Kasialekh Village, Chaukhuta, Mukteshwar
              </div>
            </div>

            {/* Secondary Snapshot Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden border border-charcoal-900/10 shadow-subtle aspect-[4/3]">
                <img
                  src="/images/veranda/veranda-lounge-morning-tea-seating.jpg"
                  alt="The Veranda Lounge seating at The Mukteshwar Bungalow"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-md overflow-hidden border border-charcoal-900/10 shadow-subtle aspect-[4/3]">
                <img
                  src="/images/living/living-room-fireplace-lounge.jpg"
                  alt="Living salon at The Mukteshwar Bungalow"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              subtitle="Kasialekh, Mukteshwar • 7,000 Ft"
              title="More Than a Stay. A Private Mountain Residence."
              description="Perched upon the peaceful ridges of Kasialekh in Mukteshwar, The Mukteshwar Bungalow is designed for travelers who appreciate the rare luxury of stillness, craftsmanship, and unobstructed mountain horizons."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p
                id="direct-answer-summary"
                className="bg-ivory-200/60 p-4 rounded-sm border-l-2 border-himalayan-700 text-charcoal-800 font-normal leading-relaxed"
              >
                The Mukteshwar Bungalow is a luxury 3 BHK private mountain homestay and villa in Kasialekh, Mukteshwar, Uttarakhand (7,000 ft). Designed for private family buyouts up to 10 guests, it features three ~400 sq. ft suites with attached viewing balconies, the Veranda Lounge, open sun deck, and a dedicated in-house pure-vegetarian cook.
              </p>
              <p>
                Unlike conventional hotels with crowded lobbies and standardized rooms, our 3 BHK residence gives you the entire property to yourself. From slow morning tea on the Veranda Lounge to golden sunset views on the open deck, every corner is dedicated to your family or group.
              </p>
              <p>
                Built with honest Himalayan stone masonry, warm exposed timber ceilings, and panoramic double-glazed windows, the bungalow balances mountain vernacular architecture with contemporary residential ease.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/villa" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore the Bungalow
              </Button>
              <Button to="/book" variant="himalayan">
                Check Dates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIRTUAL TOUR TEASER */}
      <section className="relative py-24 lg:py-32 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="/images/virtual-tour/virtual-tour-upper-lounge-mountain-view.webp"
          alt="Upper-floor lounge at The Mukteshwar Bungalow with Himalayan views"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide font-sans font-semibold text-himalayan-400">
            360° Virtual Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif leading-tight text-balance">
            Walk through the bungalow before you arrive
          </h2>
          <p className="text-base sm:text-lg text-ivory-200/80 font-light leading-relaxed">
            Explore every room in 360°, and tap to see what each space offers.
          </p>
          <div className="pt-2">
            <Button to="/virtual-tour" variant="himalayan" size="lg" icon={<Play className="w-4 h-4" />} iconPosition="left">
              Start the virtual tour
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE THREE SUITES */}
      <section className="py-20 bg-ivory-50 border-y border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            centered
            subtitle="The Three Suites"
            title="The Three Luxury Suites"
            description="Three generous ~400 sq. ft suites, each featuring an attached private viewing balcony, handcrafted king beds, warm timber rafters, heated winter comfort, and wide windows opening to misty valley mornings."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyData.rooms.map((room) => (
              <SuiteCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal-900 hover:text-himalayan-700 transition-colors"
            >
              <span>Compare All 3 Suite Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE VERANDA LOUNGE & INDOOR/OUTDOOR LIVING */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <SectionHeading
              subtitle="Indoor-Outdoor Living"
              title="The Veranda Lounge"
              description="A panoramic open-air veranda designed for slow mornings, high-altitude cedar breezes, and evening fireside conversations overlooking the Kumaon valley."
            />

            <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                The Veranda Lounge serves as the heart of life at the bungalow. As morning mist rolls over the pine ridges, guests gather here for freshly brewed Kumaon tea, mindful reading, or quiet breakfast in the golden sunlight.
              </p>
              <p>
                In the evening, the stone terrace transforms into an ambient gathering spot where our on-site caretaker can prepare a crackling bonfire beneath the starlit sky.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-xs text-charcoal-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unobstructed 180-degree Kumaon valley and ridge vistas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Handcrafted wicker loungers and outdoor dining tables</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ambient evening bonfire arrangements on request</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button to="/veranda-lounge" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Discover The Veranda
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10">
              <img
                src="/images/veranda/veranda-lounge-panoramic-view.jpg"
                alt="Morning view from The Veranda Lounge at The Mukteshwar Bungalow"
                loading="lazy"
                className="w-full h-[380px] sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OPEN SUN DECK & KITCHEN GRID */}
      <section className="py-20 bg-charcoal-900 text-ivory-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            dark
            centered
            subtitle="Dedicated Dining & Mountain Outdoors"
            title="Open Sun Deck & Dedicated Pure-Veg Cook"
            description="Experience wholesome mountain living with an open-air sun deck overlooking the valley, accompanied by freshly prepared vegetarian meals cooked hot to order."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Open Sun Deck Card */}
            <div className="bg-charcoal-950/80 rounded-md overflow-hidden border border-ivory-100/10 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="aspect-[16/10] rounded-sm overflow-hidden border border-ivory-100/10">
                  <img
                    src="/images/veranda/veranda-open-space-terrace.jpg"
                    alt="Open sun deck terrace at The Mukteshwar Bungalow"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-himalayan-400">
                  <Sun className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold font-sans">Open Mountain Deck</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-ivory-100">
                  Open Sun Deck & Terrace
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/70 font-light leading-relaxed">
                  Bask in golden Himalayan sunshine overlooking pine-covered hills. The open stone deck terrace extends directly into lush private gardens for outdoor dining, morning yoga, and quiet contemplation.
                </p>
                <div className="text-[11px] text-ivory-200/50">
                  Panoramic ridge views • Artisanal outdoor seating • Stargazing terrace
                </div>
              </div>

              <div>
                <Link
                  to="/veranda-lounge"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-himalayan-400 hover:text-himalayan-300"
                >
                  <span>Explore The Veranda & Terraces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Dedicated Cook & Kitchen Card */}
            <div className="bg-charcoal-950/80 rounded-md overflow-hidden border border-ivory-100/10 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="aspect-[16/10] rounded-sm overflow-hidden border border-ivory-100/10">
                  <img
                    src="/images/kitchen/fully-equipped-kitchen-dining-counter.jpg"
                    alt="Dedicated in-house cook and fully equipped kitchen at The Mukteshwar Bungalow"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-himalayan-400">
                  <Utensils className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold font-sans">Wholesome Mountain Dining</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-ivory-100">
                  Dedicated Cook & Equipped Kitchen
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/70 font-light leading-relaxed">
                  Enjoy freshly prepared home-style pure-vegetarian meals cooked hot to order by our dedicated in-house cook, along with full kitchen access for family recipes, evening snacks, and baby food preparation.
                </p>
                <div className="text-[11px] text-ivory-200/50">
                  Fresh home-style cooking • 100% pure vegetarian • Full guest kitchen access
                </div>
              </div>

              <div>
                <Link
                  to="/kitchen"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-himalayan-400 hover:text-himalayan-300"
                >
                  <span>Kitchen Specs & Dining Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — DAY & DUSK MOUNTAIN AMBIANCE SWITCHER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          centered
          subtitle="Atmosphere & Mountain Light"
          title="From Golden Sunrise to Starlit Evenings"
          description="Preview the natural lighting and tranquility of The Mukteshwar Bungalow across different times of the day."
        />
        <AmbianceToggle />
      </section>

      {/* SECTION 8 — CAPACITY & PLANNING CALCULATOR */}
      <section className="py-20 bg-ivory-50 border-y border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            centered
            subtitle="Tailored Bedroom Allocation"
            title="Find Your Ideal Stay Configuration"
            description="Whether you are planning a couple's quiet workcation, a multi-generational family retreat, or an extended stay in the Kumaon hills, see how our 3 suites comfortably accommodate your party."
          />
          <CapacityCalculator />
        </div>
      </section>

      {/* SECTION 8.5 — VERIFIED GUEST REVIEWS */}
      <section className="py-20 bg-white border-b border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-himalayan-700 font-semibold mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0★ Google Business Profile Verified</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900">
                Real Mountain Stories from Our Guests
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={googleReviewStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-charcoal-900 hover:text-himalayan-700 transition-colors"
              >
                <span>Read All {GOOGLE_REVIEW_COUNT}+ Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verifiedGuestReviews.slice(0, 2).map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-himalayan-700 hover:text-himalayan-800 transition-colors"
            >
              <span>View All Guest Stories & Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — NEARBY ATTRACTIONS */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Tehsil Dhari & Kumaon"
          title="Nearby Himalayan Attractions"
          description="From dramatic cliff viewpoints and ancient heritage stone temples to cascading forest waterfalls, explore the best of Mukteshwar."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nearbyAttractions.slice(0, 3).map((item) => (
            <AttractionCard key={item.id} attraction={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/nearby-attractions"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal-900 hover:text-himalayan-700 transition-colors"
          >
            <span>View All Regional Attractions & Distances</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 10 — SEARCHABLE FAQS */}
      <section className="py-20 bg-white border-y border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            centered
            subtitle="Everything You Need to Know"
            title="Frequently Asked Questions"
            description="Clear answers regarding direct booking, veranda lounge, kitchen facilities, directions, and house policies."
          />

          <div className="space-y-4">
            {propertyFAQs.slice(0, 6).map((faq) => (
              <details
                key={faq.id}
                className="group border border-charcoal-900/10 rounded-sm p-5 bg-ivory-50/50 open:bg-white open:shadow-subtle transition-all cursor-pointer"
              >
                <summary className="text-base sm:text-lg font-serif font-semibold text-charcoal-900 flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <span className="text-himalayan-700 text-lg transition-transform group-open:rotate-45 shrink-0 ml-4 font-sans font-normal">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed pt-2 border-t border-charcoal-900/5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-himalayan-700 hover:text-himalayan-800"
            >
              <span>Browse All Searchable FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11 — CONVERSION CTA STRIP */}
      <section className="py-20 bg-charcoal-900 text-ivory-100 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Direct Host Reservation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ivory-100 leading-tight">
            Reserve Your Private Mountain Stay in Mukteshwar
          </h2>
          <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed max-w-xl mx-auto">
            Enjoy 100% exclusive 3 BHK villa privacy, panoramic Kumaon views, open sun deck, pure-veg home-style dining, and personal mountain concierge.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Check Direct Availability
            </Button>
            <Button
              href={generateWhatsAppLink({ intent: 'availability' })}
              isExternal
              variant="outline"
              size="lg"
              className="border-ivory-100/30 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900"
              icon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
            >
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
