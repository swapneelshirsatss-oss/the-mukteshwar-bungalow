import React, { useState } from 'react';
import { Play, Maximize2, Footprints, Info, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema } from '../components/common/SchemaMarkup';
import { trackEvent } from '../services/AnalyticsService';

const POSTER = '/images/virtual-tour/virtual-tour-upper-lounge-mountain-view.webp';

const howItWorks = [
  {
    icon: Footprints,
    title: 'Walk through',
    text: 'Drag to look around and tap the arrows to move from room to room, from the front garden up to the upper-floor lounge.'
  },
  {
    icon: Info,
    title: 'Amenity points',
    text: 'Tap the round markers to see what is in each space, such as the kitchen, bathrooms, bedrooms and balconies. The list icon shows everything the bungalow offers.'
  }
];

export const VirtualTourPage: React.FC = () => {
  const [started, setStarted] = useState(false);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Virtual Tour', url: '/virtual-tour' }]);

  const startTour = () => {
    trackEvent('cta_click', { cta: 'virtual_tour_start', source: 'virtual_tour_page' });
    // On phones the embedded viewer is too small, so open the tour full screen instead.
    if (window.matchMedia('(max-width: 767px)').matches) {
      window.location.href = '/tour/';
      return;
    }
    setStarted(true);
  };

  return (
    <>
      <SEOHead
        title="360° Virtual Tour of The Mukteshwar Bungalow"
        description="Walk through The Mukteshwar Bungalow in 360°: the garden, veranda, kitchen, bedrooms and upper-floor lounge, with amenity points."
        canonicalUrl="https://themukteshwarbungalow.in/virtual-tour"
        ogImage={POSTER}
        schema={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-10 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs dark items={[{ name: 'Virtual Tour', url: '/virtual-tour' }]} />
          <div className="inline-flex items-center gap-2 bg-charcoal-900/80 px-3.5 py-1.5 rounded-full border border-ivory-100/20 text-xs tracking-widest uppercase text-ivory-100/90">
            <Play className="w-3.5 h-3.5 text-himalayan-400" />
            <span>360° Virtual Tour</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Walk Through the Bungalow
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Step inside before you arrive. Explore the garden, veranda, kitchen, bedrooms and the upper-floor lounge in 360°, and see exactly what each space offers.
          </p>
        </div>
      </section>

      {/* Tour viewer */}
      <section className="bg-charcoal-950 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[72vh] min-h-[440px] lg:h-[78vh] rounded-md overflow-hidden border border-ivory-100/10 bg-charcoal-900 shadow-luxury">
            {started ? (
              <iframe
                src="/tour/?embed=1"
                title="360° virtual tour of The Mukteshwar Bungalow"
                allow="fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <>
                <img
                  src={POSTER}
                  alt="Upper-floor lounge at The Mukteshwar Bungalow with Himalayan views"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-charcoal-950/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
                  <Button variant="himalayan" size="lg" onClick={startTour} icon={<Play className="w-4 h-4" />} iconPosition="left">
                    Start the virtual tour
                  </Button>
                  <p className="text-xs uppercase tracking-widest text-ivory-100/80">
                    Exterior · Ground floor · Upper floor
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-ivory-200/70">
            <span>On phones the tour opens full screen. Hold the phone sideways for the best view.</span>
            <a
              href="/tour/"
              onClick={() => trackEvent('cta_click', { cta: 'virtual_tour_fullscreen', source: 'virtual_tour_page' })}
              className="inline-flex items-center gap-2 text-ivory-100 hover:text-himalayan-400 transition-colors font-medium"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open full screen</span>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="How it works"
          title="Three ways to explore"
          description="No app and no download. The tour opens right here in your browser."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {howItWorks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-4">
              <Icon className="w-6 h-6 text-himalayan-700" />
              <h3 className="text-2xl font-serif text-charcoal-900">{title}</h3>
              <p className="text-sm text-charcoal-700 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 text-ivory-100 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif">Like what you see?</h2>
          <p className="text-ivory-200/80 font-light">
            The whole bungalow is yours alone. Check dates for your stay in Mukteshwar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Check Dates
            </Button>
            <Button to="/rooms" variant="secondary" size="lg">
              See the Suites
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
