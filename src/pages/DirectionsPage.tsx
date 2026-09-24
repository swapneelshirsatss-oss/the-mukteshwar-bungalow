import React from 'react';
import { Navigation, MapPin, Car, Train, Plane, MessageCircle, ExternalLink, ArrowRight, Check, Phone } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { trackEvent } from '../services/AnalyticsService';
import { getHowToDirectionsSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const DirectionsPage: React.FC = () => {
  const directionsSchema = getHowToDirectionsSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Directions', url: '/directions' }]);

  return (
    <>
      <SEOHead
        title="Directions & How to Reach | The Mukteshwar Bungalow"
        description="Driving routes, train connectivity, and airport access to The Mukteshwar Bungalow in Dausapani, Kasialekh, Mukteshwar, Uttarakhand."
        canonicalUrl="https://themukteshwarbungalow.in/directions"
        schema={[directionsSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-sunset-dusk.jpg"
            alt="Driving to Mukteshwar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Directions', url: '/directions' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Travel Guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            How to Reach the Villa
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Step-by-step route directions by road, rail, and air to reach our private residence in Kasialekh, Mukteshwar.
          </p>
        </div>
      </section>

      {/* Transit Modes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* By Road */}
        <div className="bg-white p-8 sm:p-10 rounded-md border border-charcoal-900/10 shadow-editorial">
          <div className="flex items-center gap-3 text-himalayan-700 font-serif font-bold text-2xl mb-4">
            <Car className="w-6 h-6" />
            <h2>By Road from Delhi-NCR (Approx. 330 km • 7.5–8.5 Hours)</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            <p>
              The driving route from Delhi-NCR to The Mukteshwar Bungalow is a smooth, scenic journey via well-maintained national and state highways:
            </p>
            <div className="p-4 bg-ivory-50 rounded-sm border border-charcoal-900/10 font-mono text-xs text-charcoal-900">
              Delhi/NCR $\rightarrow$ Delhi-Meerut Expressway $\rightarrow$ Hapur Bypass $\rightarrow$ Moradabad Bypass $\rightarrow$ Rampur $\rightarrow$ Bilaspur $\rightarrow$ Rudrapur $\rightarrow$ Haldwani $\rightarrow$ Kathgodam $\rightarrow$ Bhimtal $\rightarrow$ Bhowali $\rightarrow$ Kasialekh (The Mukteshwar Bungalow)
            </div>
            <p>
              <strong className="font-semibold text-charcoal-900">Pro Tip:</strong> Depart early (5:00 AM) to beat city traffic and arrive in the quiet hills of Kasialekh in time for afternoon tea.
            </p>
          </div>
        </div>

        {/* By Train */}
        <div className="bg-white p-8 sm:p-10 rounded-md border border-charcoal-900/10 shadow-editorial">
          <div className="flex items-center gap-3 text-himalayan-700 font-serif font-bold text-2xl mb-4">
            <Train className="w-6 h-6" />
            <h2>By Train via Kathgodam (Approx. 56 km • 2 Hours Hill Drive)</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            <p>
              Kathgodam Railway Station (KGM) is the primary railhead serving Mukteshwar. Multiple daily express trains operate from New Delhi, including the Kathgodam Shatabdi Express and Ranikhet Express.
            </p>
            <p>
              From Kathgodam station, private mountain taxis are available directly to Kasialekh, Mukteshwar (approx. 1.5 to 2 hours drive via Bhowali).
            </p>
          </div>
        </div>

        {/* By Air */}
        <div className="bg-white p-8 sm:p-10 rounded-md border border-charcoal-900/10 shadow-editorial">
          <div className="flex items-center gap-3 text-himalayan-700 font-serif font-bold text-2xl mb-4">
            <Plane className="w-6 h-6" />
            <h2>By Air via Pantnagar Airport (Approx. 88 km • 2.5–3 Hours Drive)</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            <p>
              Pantnagar Airport (PGH) offers scheduled regional commercial flights connecting with Delhi and Dehradun. Taxi transfers to the villa in Kasialekh take approximately 2.5 to 3 hours through Haldwani and the foothills.
            </p>
          </div>
        </div>
      </section>

      {/* Support Strip */}
      <section className="py-16 bg-charcoal-900 text-ivory-100 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif">
            Need Live Driving Assistance?
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-light">
            Our estate concierge is happy to guide your driver or share a live GPS location pin.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={generateWhatsAppLink({ intent: 'location' })}
              isExternal
              variant="himalayan"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Get Live Location Pin on WhatsApp
            </Button>
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
              onClick={() => trackEvent('phone_click', { source: 'directions_page_strip' })}
              className="inline-flex items-center gap-2 border border-ivory-100/30 hover:border-ivory-100 text-ivory-100 px-5 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-himalayan-400" />
              <span>Call Concierge: {propertyData.contact.phone || '+91 70785 60516'}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
