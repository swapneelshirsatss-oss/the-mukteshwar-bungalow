import React from 'react';
import { Sparkles, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { DirectBookingForm } from '../components/booking/DirectBookingForm';

export const BookPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Direct Reservation & Booking | The Mukteshwar Bungalow"
        description="Book your private stay at The Mukteshwar Bungalow (3 BHK Luxury Villa in Mukteshwar). 3-step direct booking, instant host confirmation, and zero commission fees."
        canonicalUrl="https://themukteshwarbungalow.com/book"
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
      </section>
    </>
  );
};
