import React from 'react';
import { MapPin, Navigation, Compass, Phone, MessageCircle, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { getLodgingBusinessSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const LocationPage: React.FC = () => {
  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Location', url: '/location' }]);

  return (
    <>
      <SEOHead
        title="The Mukteshwar Bungalow — Dausapani, Kasialekh, Mukteshwar"
        description="Location, exact address, and driving directions to The Mukteshwar Bungalow at Dausapani, Kasialekh Village - Chaukhuta, Tehsil - Dhari, District - Nainital, Mukteshwar - 263132."
        canonicalUrl="https://themukteshwarbungalow.in/location"
        schema={[lodgingSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-mountain-ridge.jpg"
            alt="Kasialekh Location of The Mukteshwar Bungalow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Location', url: '/location' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Tehsil Dhari • Kumaon Hills
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            The Mukteshwar Bungalow — Dausapani, Kasialekh, Mukteshwar
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Positioned along a peaceful, pine-clad mountain ridge in Kasialekh, away from tourist congestion.
          </p>
        </div>
      </section>

      {/* Exact Canonical Address Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Address and Regional Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle="Canonical Address"
              title="Where to Find Us"
              description="Our exact physical address and regional administrative coordinates in Uttarakhand."
            />

            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-himalayan-700 shrink-0 mt-1" />
                <div className="space-y-1 text-xs sm:text-sm text-charcoal-800 font-light leading-relaxed">
                  <p className="font-semibold text-charcoal-900 text-base font-serif">
                    The Mukteshwar Bungalow | 3 BHK Villa
                  </p>
                  <p>{propertyData.address.line1},</p>
                  <p>Tehsil - {propertyData.address.tehsil},</p>
                  <p>District - {propertyData.address.district},</p>
                  <p>{propertyData.address.city}, {propertyData.address.state} - {propertyData.address.postalCode},</p>
                  <p>{propertyData.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 text-xs sm:text-sm text-charcoal-800">
                <Phone className="w-4 h-4 text-himalayan-700 shrink-0" />
                <span>Direct Voice Line:</span>
                <a
                  href={`tel:${propertyData.contact.phoneRaw || '+919027844424'}`}
                  className="font-semibold text-himalayan-700 hover:text-himalayan-800 underline"
                >
                  {propertyData.contact.phone || '+91 90278 44424'}
                </a>
              </div>

              <div className="pt-4 border-t border-charcoal-900/10 flex flex-wrap gap-4">
                <a
                  href={propertyData.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-himalayan-700 hover:text-himalayan-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={generateWhatsAppLink({ intent: 'location' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Request Live Location Pin</span>
                </a>
              </div>
            </div>

            {/* Travel Context */}
            <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              <h3 className="text-lg font-serif font-bold text-charcoal-900">
                The Kasialekh Advantage
              </h3>
              <p>
                Kasialekh is located roughly 8.5 km before the busy Mukteshwar Temple tourist ridge. Situated along the peaceful Chaukhuta/Dausapani side of Tehsil Dhari, it offers superior privacy, cooler cedar breezes, and sweeping valley panoramas without the noisy commercial traffic of main town markets.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 bg-charcoal-950 aspect-[4/3] relative">
              <iframe
                title="The Mukteshwar Bungalow Map Location"
                src={propertyData.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-[11px] text-charcoal-500 font-light text-center">
              Dausapani, Kasialekh Village, Mukteshwar, Uttarakhand - 263132
            </p>
          </div>
        </div>
      </section>

      {/* Transit Proximity */}
      <section className="py-20 bg-ivory-50 border-t border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            centered
            subtitle="Transit Proximity"
            title="Approximate Transit Distances"
            description="Verified travel metrics to major railway stations, airports, and regional towns."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-subtle space-y-2">
              <span className="text-xs uppercase tracking-wider text-himalayan-700 font-semibold block">
                Nearest Railway
              </span>
              <h4 className="text-xl font-serif font-bold text-charcoal-900">
                Kathgodam (KGM)
              </h4>
              <p className="text-xs text-charcoal-600 font-light">
                Approx. 56 km • 1.5 to 2 hours drive via Bhimtal & Bhowali
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-subtle space-y-2">
              <span className="text-xs uppercase tracking-wider text-himalayan-700 font-semibold block">
                Nearest Airport
              </span>
              <h4 className="text-xl font-serif font-bold text-charcoal-900">
                Pantnagar (PGH)
              </h4>
              <p className="text-xs text-charcoal-600 font-light">
                Approx. 88 km • 2.5 to 3 hours drive via Haldwani
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-charcoal-900/10 shadow-subtle space-y-2">
              <span className="text-xs uppercase tracking-wider text-himalayan-700 font-semibold block">
                Capital Gateway
              </span>
              <h4 className="text-xl font-serif font-bold text-charcoal-900">
                Delhi / NCR
              </h4>
              <p className="text-xs text-charcoal-600 font-light">
                Approx. 330 km • 7.5 to 8.5 hours via Delhi-Meerut Expressway
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button to="/directions" variant="primary" icon={<Navigation className="w-4 h-4" />}>
              View Detailed Driving Route Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
