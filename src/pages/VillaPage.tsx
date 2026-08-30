import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Check, ArrowRight, ShieldCheck, MapPin, Eye, Users, Bed, Waves, Utensils, Coffee } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { FilterableGallery } from '../components/gallery/FilterableGallery';

export const VillaPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="The Villa Estate & Architecture | The Mukteshwar Bungalow"
        description="Explore the architecture, living salons, 3 luxury suites, private plunge pool, and lush grounds of The Mukteshwar Bungalow in Kasialekh, Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.com/villa"
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt="The Mukteshwar Bungalow Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'The Villa', url: '/villa' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            The Residence
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            The Bungalow Estate
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A Himalayan mountain sanctuary designed with traditional stone craft, exposed timber rafters, and contemporary residential luxury.
          </p>
        </div>
      </section>

      {/* Spatial Flow & Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Architectural Philosophy"
              title="Built for Stillness, Space & Mountain Serenity"
              description="Perched upon the quiet heights of Kasialekh (7,000 ft), The Mukteshwar Bungalow was conceived as a private mountain home where time slows down."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                The estate is oriented eastward to welcome the earliest morning light streaming across the Kumaon valleys. Natural stone foundation walls provide thermal insulation against high-altitude chills, while large panoramic picture windows maintain a seamless visual dialogue with the surrounding oak and pine forests.
              </p>
              <p>
                Unlike generic commercial resorts, the bungalow's layout encourages natural gatherings across expansive living salons and the Veranda Lounge, while maintaining complete acoustic and spatial privacy inside the three self-contained bedroom suites.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-ivory-50 rounded-sm border border-charcoal-900/10">
                <span className="text-2xl font-serif font-bold text-himalayan-700 block">3 Suites</span>
                <span className="text-xs text-charcoal-600 font-light">All with en-suite bathrooms</span>
              </div>
              <div className="p-4 bg-ivory-50 rounded-sm border border-charcoal-900/10">
                <span className="text-2xl font-serif font-bold text-himalayan-700 block">6–9 Guests</span>
                <span className="text-xs text-charcoal-600 font-light">Comfortable private capacity</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/living/living-room-mountain-views.jpg"
                alt="Living Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Living Spaces Breakdown */}
      <section className="py-20 bg-ivory-50 border-y border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            centered
            subtitle="The Living Spaces"
            title="Designed for Slow Living & Gathering"
            description="Explore the distinct spatial zones crafted for relaxation, shared dining, and panoramic contemplation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {propertyData.livingSpaces.map((space) => (
              <div
                key={space.name}
                className="bg-white rounded-md overflow-hidden border border-charcoal-900/10 shadow-editorial p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-sm overflow-hidden bg-charcoal-950">
                    <img
                      src={space.image}
                      alt={space.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal-900">
                    {space.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {space.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {space.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-charcoal-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Photo Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          centered
          subtitle="Authentic Visuals"
          title="Photography of the Residence"
          description="High-resolution photography capturing the architecture, suites, pool, and surrounding mountain gardens."
        />
        <FilterableGallery />
      </section>

      {/* Booking CTA Strip */}
      <section className="py-16 bg-charcoal-900 text-ivory-100 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-100">
            Reserve the Entire 3 BHK Bungalow
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-light">
            Enjoy 100% private seclusion in Mukteshwar with direct host booking advantages.
          </p>
          <div className="pt-2">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Check Direct Availability
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
