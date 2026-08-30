import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { FilterableGallery } from '../components/gallery/FilterableGallery';
import { Button } from '../components/common/Button';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Visual Photography Gallery | The Mukteshwar Bungalow"
        description="Browse high-resolution photographs of The Mukteshwar Bungalow: 3 luxury suites, private pool, Veranda Lounge, living salons, kitchen, and Himalayan views."
        canonicalUrl="https://themukteshwarbungalow.com/gallery"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg"
            alt="The Mukteshwar Bungalow Visual Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Gallery', url: '/gallery' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Visual Story
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Photography Gallery
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Explore every corner of our 3 BHK private residence, from sunlit bedroom suites to open veranda decks.
          </p>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FilterableGallery />

        <div className="mt-16 text-center">
          <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Check Availability for These Dates
          </Button>
        </div>
      </section>
    </>
  );
};
