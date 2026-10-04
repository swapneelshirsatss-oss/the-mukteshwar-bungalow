import React from 'react';
import { Sparkles, ShieldCheck, MessageCircle, Calendar, Phone } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { trackEvent } from '../services/AnalyticsService';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { DirectBookingForm } from '../components/booking/DirectBookingForm';
import { getLodgingBusinessSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';

export const BookPage: React.FC = () => {
  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Book Direct', url: '/book' }]);

  return (
    <>
      <SEOHead
        title="Direct Reservation & Booking | The Mukteshwar Bungalow"
        description="Book your private stay at The Mukteshwar Bungalow (3 BHK Luxury Villa in Mukteshwar). 3-step direct booking, instant host confirmation, and zero commission fees."
        canonicalUrl="https://themukteshwarbungalow.in/book"
        schema={[lodgingSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg"
            alt="The Mukteshwar Bungalow Booking"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-3">
          <Breadcrumbs
            dark
            items={[{ name: 'Book Direct', url: '/book' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Direct Reservation
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-ivory-100 leading-tight">
            Reserve Your Mountain Sanctuary
          </h1>
          <p className="text-sm sm:text-lg text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Direct booking ensures guaranteed dates, personalized concierge communication, and exclusive private villa privacy.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <DirectBookingForm />

        {/* Direct Help Strip */}
        <div className="mt-12 max-w-2xl mx-auto p-6 bg-ivory-50 rounded-md border border-charcoal-900/10 text-center space-y-3">
          <h4 className="text-base font-serif font-bold text-charcoal-900">
            Prefer Direct Communication with the Host?
          </h4>
          <p className="text-xs text-charcoal-600 font-light leading-relaxed">
            Our estate manager is available for custom family packages, corporate retreats, and instant date confirmations.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+919027844424'}`}
              onClick={() => trackEvent('phone_click', { source: 'book_page_help_strip' })}
              className="inline-flex items-center gap-1.5 text-himalayan-700 hover:text-himalayan-800 uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {propertyData.contact.phone || '+91 90278 44424'}</span>
            </a>
            <span className="text-charcoal-300">•</span>
            <a
              href={generateWhatsAppLink({ intent: 'booking' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'book_page_help_strip' })}
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: +91 90278 44424</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
