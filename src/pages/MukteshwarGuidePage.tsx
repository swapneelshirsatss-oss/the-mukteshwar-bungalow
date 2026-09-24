import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Sun, CloudSnow, Trees, Compass, ArrowRight, Check } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const MukteshwarGuidePage: React.FC = () => {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Mukteshwar Guide', url: '/mukteshwar' }]);

  return (
    <>
      <SEOHead
        title="Mukteshwar Travel & Destination Guide | Kumaon Uttarakhand"
        description="Comprehensive guide to Mukteshwar, Uttarakhand. Learn about altitude, weather, seasons, fruit orchards, history, and staying at The Mukteshwar Bungalow."
        canonicalUrl="https://themukteshwarbungalow.in/mukteshwar"
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt="Mukteshwar Valley and Mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Mukteshwar Guide', url: '/mukteshwar' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Destination Guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Mukteshwar, Uttarakhand
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A serene jewel of the Kumaon hills, known for towering pine ridges, Himalayan panoramas, and fruit orchards.
          </p>
        </div>
      </section>

      {/* Destination Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Geography & Altitude"
              title="A Quieter Alternative to Commercial Hill Towns"
              description="Perched at an average elevation of 2,171 to 2,286 meters in Nainital district, Mukteshwar offers refreshing mountain air and uncrowded peace."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                Named after the 350-year-old Shiva shrine at its summit, Mukteshwar is celebrated for its sweeping views of India's highest peaks, including Nanda Devi, Trishul, and Panchachuli.
              </p>
              <p>
                Unlike bustling hill stations with bumper-to-bumper commercial traffic, the charm of Mukteshwar lies in its pine trails, colonial-era fruit research orchards, quiet village hamlets like Kasialekh and Chaukhuta, and star-filled night skies.
              </p>
            </div>

            <div className="pt-2">
              <Button to="/nearby-attractions" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Attractions Directory
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/garden/villa-garden-himalayan-backdrop.jpg"
                alt="Mukteshwar Nature View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Seasons */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            centered
            subtitle="Weather & Climate"
            title="Seasons in Mukteshwar"
            description="Understand the changing moods of the Kumaon hills throughout the year."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <Sun className="w-5 h-5 text-amber-500" />
                <span>Spring & Summer (March–June)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Pleasant temperatures (18°C–27°C) with cool mountain breezes. Fruit orchards burst into bloom, followed by fresh plum and apricot harvests in May and June.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <Mountain className="w-5 h-5 text-emerald-600" />
                <span>Autumn & Horizons (Oct–Nov)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                The clearest skies of the year. Post-monsoon crispness offers razor-sharp visibility of snow-capped Himalayan peaks and golden sunsets.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
                <CloudSnow className="w-5 h-5 text-cyan-600" />
                <span>Winter Solitude (Dec–Feb)</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Crisp chilly days (3°C–14°C) and cozy fireside evenings with occasional January snowfall. Ideal for peaceful indoor winter retreats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
