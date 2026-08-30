import React from 'react';
import { Compass, MapPin, ArrowRight } from 'lucide-react';
import { nearbyAttractions } from '../data/attractions';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { AttractionCard } from '../components/cards/AttractionCard';
import { Button } from '../components/common/Button';

export const NearbyAttractionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Nearby Attractions in Mukteshwar & Kumaon | The Mukteshwar Bungalow"
        description="Explore Chauli Ki Jali, Mukteshwar Temple, Bhalu Gaad Waterfall, Kainchi Dham, and Nainital from The Mukteshwar Bungalow in Kasialekh."
        canonicalUrl="https://themukteshwarbungalow.com/nearby-attractions"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-mountain-ridge.jpg"
            alt="Nearby Attractions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Nearby Attractions', url: '/nearby-attractions' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Regional Exploration
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Nearby Attractions
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A curated database of viewpoints, heritage temples, natural waterfalls, and day trips in the Kumaon region.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          centered
          subtitle="Kumaon Highlights"
          title="Places to Visit Around Mukteshwar"
          description="Verified driving distances and visit tips from our private villa in Kasialekh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Book Your Stay Close to Nature
          </Button>
        </div>
      </section>
    </>
  );
};
