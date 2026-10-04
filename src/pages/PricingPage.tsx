import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { trackEvent } from '../services/AnalyticsService';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { getLodgingBusinessSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const PricingPage: React.FC = () => {
  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Pricing & Rates', url: '/pricing' }]);

  return (
    <>
      <SEOHead
        title="Direct Booking Pricing & Rates | The Mukteshwar Bungalow"
        description="Transparent direct booking pricing for The Mukteshwar Bungalow 3 BHK villa in Mukteshwar. Zero OTA commission markup and verified seasonal rates."
        canonicalUrl="https://themukteshwarbungalow.in/pricing"
        schema={[lodgingSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-sunset-dusk.jpg"
            alt="The Mukteshwar Bungalow Rates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Pricing & Rates', url: '/pricing' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Transparent Tariff
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Direct Booking Pricing
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Direct reservation benefits, transparent rate structures, and zero hidden third-party commission surcharges.
          </p>
        </div>
      </section>

      {/* Pricing Structure Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          centered
          subtitle="Rate Architecture"
          title="Transparent Fee Breakdown"
          description="We believe in clear, upfront pricing with zero surprises."
        />

        <div className="bg-white rounded-md border border-charcoal-900/10 shadow-luxury overflow-hidden mt-8">
          {/* Header */}
          <div className="bg-charcoal-900 text-ivory-100 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
                Exclusive 3 BHK Villa Takeover
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory-100">
                Check Dates for Current Seasonal Rates
              </h3>
            </div>
            <Button to="/book" variant="himalayan" icon={<Calendar className="w-4 h-4" />}>
              Check Live Dates
            </Button>
          </div>

          {/* Pricing Components Table */}
          <div className="p-6 sm:p-8 space-y-6 divide-y divide-charcoal-900/10 text-xs sm:text-sm text-charcoal-800">
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="font-semibold text-charcoal-900 block text-base font-serif">Base Stay Tariff</span>
                <span className="text-xs text-charcoal-500 font-light">Covers exclusive 3 BHK private buyout for standard 6 adult guests</span>
              </div>
              <span className="font-semibold text-charcoal-900">Dynamic Seasonal Rate</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="font-semibold text-charcoal-900 block text-base font-serif">Included Amenities</span>
                <span className="text-xs text-charcoal-500 font-light">Panoramic Veranda Lounge, living salons, high-speed Wi-Fi, caretaker & parking</span>
              </div>
              <span className="font-semibold text-emerald-700 uppercase tracking-wider text-xs">Included (₹0)</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="font-semibold text-charcoal-900 block text-base font-serif">Fully Equipped Kitchen Access</span>
                <span className="text-xs text-charcoal-500 font-light">Gas hobs, microwave, refrigerator, kettle & tableware for guest cooking</span>
              </div>
              <span className="font-semibold text-emerald-700 uppercase tracking-wider text-xs">Included (₹0)</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="font-semibold text-charcoal-900 block text-base font-serif">Applicable Taxes (GST)</span>
                <span className="text-xs text-charcoal-500 font-light">Calculated as per government hospitality tax slabs</span>
              </div>
              <span className="font-semibold text-charcoal-900">Applicable on Invoice</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="font-semibold text-charcoal-900 block text-base font-serif">Refundable Security Deposit</span>
                <span className="text-xs text-charcoal-500 font-light">Standard refundable deposit collected at check-in & returned at checkout inspection</span>
              </div>
              <span className="font-semibold text-charcoal-900">100% Refundable</span>
            </div>
          </div>
        </div>

        {/* Direct Booking Guarantee */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-ivory-50 p-6 rounded-md border border-charcoal-900/10 text-center space-y-2">
            <Sparkles className="w-6 h-6 text-himalayan-700 mx-auto" />
            <h4 className="font-serif font-bold text-charcoal-900 text-base">Best Rate Guarantee</h4>
            <p className="text-xs text-charcoal-600 font-light">Booking direct avoids third-party commission markups.</p>
          </div>
          <div className="bg-ivory-50 p-6 rounded-md border border-charcoal-900/10 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-himalayan-700 mx-auto" />
            <h4 className="font-serif font-bold text-charcoal-900 text-base">Direct Host Contact</h4>
            <p className="text-xs text-charcoal-600 font-light">Direct WhatsApp communication with the estate management.</p>
          </div>
          <div className="bg-ivory-50 p-6 rounded-md border border-charcoal-900/10 text-center space-y-2">
            <Calendar className="w-6 h-6 text-himalayan-700 mx-auto" />
            <h4 className="font-serif font-bold text-charcoal-900 text-base">Flexible Itineraries</h4>
            <p className="text-xs text-charcoal-600 font-light">Personalized check-in coordination and activity planning.</p>
          </div>
        </div>

        {/* Contact Banner for Group Buyouts */}
        <div className="mt-12 p-8 rounded-md bg-charcoal-900 text-ivory-100 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-himalayan-400 font-semibold">Special Group & Extended Stay Tariffs</span>
            <h4 className="text-xl font-serif text-ivory-100">Need a Customized Villa Tariff or Corporate Rate?</h4>
            <p className="text-xs text-ivory-200/70 font-light">
              Connect directly with our estate manager on WhatsApp or voice call for instant tailored packages.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+919027844424'}`}
              onClick={() => trackEvent('phone_click', { source: 'pricing_page_banner' })}
              className="inline-flex items-center gap-2 border border-ivory-100/30 hover:border-ivory-100 text-ivory-100 px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-himalayan-400" />
              <span>Call: {propertyData.contact.phone || '+91 90278 44424'}</span>
            </a>
            <Button
              href={generateWhatsAppLink({ intent: 'pricing' })}
              isExternal
              variant="himalayan"
              size="sm"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              WhatsApp +91 90278 44424
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
