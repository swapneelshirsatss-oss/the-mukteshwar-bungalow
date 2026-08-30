import React from 'react';
import { Waves, Shield, Sun, Check, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';

export const PrivatePoolPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Private Pool & Deck in Mukteshwar | The Mukteshwar Bungalow"
        description="Relax at our private mountain plunge pool and sundeck overlooking the Himalayan ridges. Exclusive resident pool access at The Mukteshwar Bungalow."
        canonicalUrl="https://themukteshwarbungalow.com/private-pool"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/pool/private-pool-deck-himalayan-view.jpg"
            alt="Private pool and deck at The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Private Pool', url: '/private-pool' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Lifestyle Feature
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Private Pool & Deck
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            A serene private mountain plunge pool and sundeck overlooking the Himalayan slopes, offering restorative relaxation immersed in forest tranquility.
          </p>
        </div>
      </section>

      {/* Pool Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Mountain Wellness"
              title="Exclusive Plunge Pool with Pine Canopy Views"
              description="A rare luxury in high-altitude Mukteshwar, our private plunge pool offers a refreshing respite surrounded by tranquil nature."
            />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <p>
                Set against the forested mountain slope, the private pool is designed exclusively for the resident guests of The Mukteshwar Bungalow. Whether enjoying a refreshing morning dip after yoga or lounging on the wooden sundeck with cold pressed juice, the pool deck provides uninterrupted tranquility.
              </p>
              <p>
                The pool utilizes filtered clean mountain water and is maintained daily to ensure high hygiene and safety standards for families and children.
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% private and exclusive to your booked group</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Timber sundeck with sun loungers and umbrella shading</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct visual connection to the valley and private garden</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/pool/private-pool-deck-himalayan-view.jpg"
                alt="Private Pool View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Pool Guidelines */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            centered
            subtitle="Safety & Protocol"
            title="Pool Operating Hours & Guidelines"
            description="To ensure safety and optimal water hygiene, guests are requested to adhere to our verified pool rules."
          />

          <div className="bg-white rounded-md p-6 sm:p-8 border border-charcoal-900/10 shadow-editorial space-y-4">
            <div className="flex items-center gap-2 text-charcoal-900 font-serif font-bold text-lg mb-2">
              <Clock className="w-5 h-5 text-himalayan-700" />
              <span>Pool Hours: 8:00 AM to 7:00 PM</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700 font-light">
              {propertyData.policies.poolRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-himalayan-700 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Reserve the Villa with Private Pool
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
