import React from 'react';
import { Coffee, Flame, Sun, Check, ArrowRight, Wind } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema, getLivingSpaceSchema } from '../components/common/SchemaMarkup';

export const VerandaLoungePage: React.FC = () => {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'The Veranda Lounge', url: '/veranda-lounge' }]);
  const loungeSchema = getLivingSpaceSchema(
    'The Veranda Lounge & Open Space',
    'An expansive mountain-facing living veranda designed for slow mornings, high-altitude cedar breezes, and evening fireside conversations overlooking the Kumaon valley.',
    '/images/veranda/veranda-lounge-panoramic-view.jpg'
  );

  return (
    <>
      <SEOHead
        title="The Veranda Lounge & Open Space | The Mukteshwar Bungalow"
        description="Experience slow mountain mornings and evening fireside chats at The Veranda Lounge. Panoramic outdoor living in Kasialekh, Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.in/veranda-lounge"
        schema={[loungeSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/veranda/veranda-lounge-panoramic-view.jpg"
            alt="The Veranda Lounge at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'The Veranda Lounge', url: '/veranda-lounge' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Outdoor Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            The Veranda Lounge
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A panoramic mountain-facing veranda designed for slow mornings, high-altitude cedar breezes, and evening fireside conversations.
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Indoor-Outdoor Harmony"
              title="Where Mountain Air Meets Unhurried Comfort"
              description="At 7,000 feet altitude, life naturally revolves around the sun and the changing colors of the Kumaon sky."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                The Veranda Lounge bridges the comfort of the bungalow's interior living salons with the vast expanse of the Himalayan valley. Framed by stone pillars and open wooden eaves, it provides sheltered comfort during sunny midday hours and crisp morning dawns.
              </p>
              <p>
                Whether sipping a cup of freshly brewed ginger-cardamom tea, diving into a favorite book on our wicker loungers, or watching the sunset cast purple shadows across the ridges, The Veranda Lounge is where our guests spend their most memorable hours.
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>180-degree unobstructed panorama of Kumaon mountain ridges</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Handmade wicker loungers, cushions, and alfresco dining table</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct transition to the private garden lawn and sundeck</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/veranda/veranda-lounge-morning-tea-seating.jpg"
                alt="Morning tea seating on the veranda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evening Bonfire Experience */}
      <section className="py-20 bg-charcoal-900 text-ivory-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-md overflow-hidden border border-ivory-100/10 shadow-luxury aspect-[4/3]">
              <img
                src="/images/veranda/veranda-lounge-evening-bonfire.jpg"
                alt="Evening bonfire on the veranda terrace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              dark
              subtitle="Evening Gathering"
              title="Crackling Fireside Stargazing"
              description="As dusk settles over Mukteshwar, the temperature drops and the veranda becomes an intimate fireside gathering space."
            />

            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
              Our on-site estate caretaker arranges an ambient outdoor bonfire on the stone terrace. Wrapped in warm woolens with hot soup or beverages, listen to the whisper of the pine trees under an unpolluted celestial sky.
            </p>

            <div className="pt-2">
              <Button to="/book" variant="himalayan" icon={<ArrowRight className="w-4 h-4" />}>
                Check Direct Availability
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
