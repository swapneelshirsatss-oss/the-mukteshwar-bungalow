import React from 'react';
import { Calendar as CalendarIcon, MessageCircle, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { AvailabilityCalendar } from '../components/booking/AvailabilityCalendar';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';

export const AvailabilityPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Live Availability Calendar | The Mukteshwar Bungalow"
        description="Check real-time dates and availability for The Mukteshwar Bungalow 3 BHK private mountain villa in Kasialekh, Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.com/availability"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt="The Mukteshwar Bungalow Dates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Availability', url: '/availability' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Direct Calendar
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Live Availability
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            View available dates for full villa buyouts and direct reservations at The Mukteshwar Bungalow.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          centered
          subtitle="Inventory Calendar"
          title="Check Your Mountain Dates"
          description="Green indicators show available dates for direct reservation. Select your dates to proceed with booking."
        />

        <AvailabilityCalendar />

        {/* Support Note */}
        <div className="max-w-xl mx-auto mt-12 p-6 bg-ivory-50 rounded-md border border-charcoal-900/10 text-center space-y-3">
          <Sparkles className="w-5 h-5 text-himalayan-700 mx-auto" />
          <h4 className="text-base font-serif font-bold text-charcoal-900">
            Have Flexible Dates or Custom Requirements?
          </h4>
          <p className="text-xs text-charcoal-600 font-light leading-relaxed">
            For long-stay workcations, corporate strategy retreats, or customized family arrangements, connect with our reservation concierge on WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppLink({ intent: 'availability' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Inquire Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
