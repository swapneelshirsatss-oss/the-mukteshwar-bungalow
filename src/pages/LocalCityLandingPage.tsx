import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Car, Clock, Navigation, Check, ArrowRight, Sparkles, Shield, MessageCircle, Calendar } from 'lucide-react';
import { localLandingPages } from '../data/localLandingPages';
import { LocalLandingPageData } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { getLodgingBusinessSchema, getBreadcrumbSchema } from '../components/common/SchemaMarkup';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';

interface LocalCityLandingPageProps {
  cityKey?: string;
}

export const LocalCityLandingPage: React.FC<LocalCityLandingPageProps> = ({ cityKey }) => {
  const location = useLocation();

  // Find matching city key based on prop or pathname
  let selectedCityKey = cityKey;
  if (!selectedCityKey) {
    if (location.pathname.includes('delhi')) selectedCityKey = 'delhi';
    else if (location.pathname.includes('noida')) selectedCityKey = 'noida';
    else if (location.pathname.includes('gurgaon')) selectedCityKey = 'gurgaon';
    else if (location.pathname.includes('dehradun')) selectedCityKey = 'dehradun';
    else if (location.pathname.includes('haldwani')) selectedCityKey = 'haldwani';
  }

  const pageData = selectedCityKey ? localLandingPages[selectedCityKey] : null;

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'City Getaways', url: '/' },
    { name: `From ${pageData.city}`, url: `/${pageData.slug}` }
  ]);

  return (
    <>
      <SEOHead
        title={pageData.pageTitle}
        description={pageData.metaDescription}
        canonicalUrl={`https://themukteshwarbungalow.in/${pageData.slug}`}
        schema={[lodgingSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt={`Mukteshwar getaway from ${pageData.city}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: `From ${pageData.city}`, url: `/${pageData.slug}` }]}
          />
          <div className="inline-flex items-center gap-2 bg-himalayan-700/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-ivory-100">
            <Car className="w-3.5 h-3.5" />
            <span>{pageData.drivingDistanceSummary}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-ivory-100 leading-tight">
            {pageData.heroHeadline}
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/85 font-light max-w-3xl leading-relaxed">
            {pageData.heroSubheadline}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Check Direct Availability
            </Button>
            <Button
              href={generateWhatsAppLink({ intent: 'availability' })}
              isExternal
              variant="outline"
              size="lg"
              className="border-ivory-100/30 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900"
              icon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
            >
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience & Why Choose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              subtitle={`Curated for ${pageData.city}`}
              title="A Private Mountain Residence Built for Recharging"
              description={pageData.idealAudience}
            />

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-900">
                Why Travelers from {pageData.city} Choose The Mukteshwar Bungalow:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-700 font-light">
                {pageData.whyChooseVilla.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-md overflow-hidden shadow-luxury border border-charcoal-900/10 aspect-[4/3]">
              <img
                src="/images/veranda/veranda-lounge-morning-tea-seating.jpg"
                alt="Veranda Lounge at The Mukteshwar Bungalow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Route & Highway Notes */}
      <section className="py-20 bg-ivory-50 border-y border-charcoal-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeading
            centered
            subtitle="Driving Insights"
            title={`Driving from ${pageData.city} to Kasialekh, Mukteshwar`}
            description="Verified highway tips and journey recommendations for a smooth mountain drive."
          />

          <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-4">
            <div className="flex items-center gap-2 text-himalayan-700 font-serif font-bold text-lg">
              <Navigation className="w-5 h-5" />
              <span>Route Recommendations & Driving Notes</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700 font-light">
              {pageData.routeHighlights.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-himalayan-700 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curated Weekend Itinerary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          centered
          subtitle="Suggested Plan"
          title={`Ideal 3-Day Weekend Itinerary from ${pageData.city}`}
          description="Make the most of your mountain escape with an unhurried itinerary."
        />

        <div className="space-y-6 mt-8">
          {pageData.weekendItinerary.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-super-wide font-semibold text-himalayan-700 block">
                  {item.day}
                </span>
                <h4 className="text-xl font-serif font-bold text-charcoal-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Reserve Your Weekend Dates
          </Button>
        </div>
      </section>
    </>
  );
};
