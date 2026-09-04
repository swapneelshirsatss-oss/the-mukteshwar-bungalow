import React, { useState } from 'react';
import { Search, HelpCircle, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { propertyFAQs } from '../data/faqs';
import { FAQItem } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { getFAQPageSchema } from '../components/common/SchemaMarkup';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { trackEvent } from '../services/AnalyticsService';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Booking & Pricing',
    'Suites & Capacity',
    'Location & Travel',
    'Veranda & Outdoors',
    'Kitchen & Dining',
    'House Policies'
  ];

  const filteredFAQs = propertyFAQs.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const faqSchema = getFAQPageSchema(filteredFAQs);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQs) | The Mukteshwar Bungalow"
        description="Find answers to common questions about booking, suites, veranda lounge, kitchen, location, and stay policies at The Mukteshwar Bungalow."
        canonicalUrl="https://themukteshwarbungalow.in/faqs"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/veranda/veranda-lounge-morning-tea-seating.jpg"
            alt="FAQs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'FAQs', url: '/faqs' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Everything you need to know about reserving and staying at our private Himalayan villa.
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
          <input
            type="search"
            aria-label="Search frequently asked questions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g., veranda, kitchen, check-in, wifi)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-charcoal-900/15 rounded-md text-sm text-charcoal-900 placeholder:text-charcoal-400 shadow-subtle focus:border-himalayan-700 focus:ring-1 focus:ring-himalayan-700"
          />
        </div>

        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="FAQ categories"
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              type="button"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-himalayan-700 focus-visible:ring-offset-2 ${
                selectedCategory === cat
                  ? 'bg-himalayan-700 text-ivory-100 shadow-sm'
                  : 'bg-ivory-50 text-charcoal-800 border border-charcoal-900/10 hover:bg-ivory-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 pt-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-md border border-charcoal-900/10 p-8">
              <HelpCircle className="w-8 h-8 text-charcoal-300 mx-auto mb-2" />
              <p className="text-charcoal-600 font-serif text-lg">
                No matching questions found for "{searchQuery}".
              </p>
              <p className="text-xs text-charcoal-500 font-light mt-1">
                Please try a different keyword or contact our concierge directly.
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group border border-charcoal-900/10 rounded-md p-6 bg-white shadow-subtle open:shadow-editorial transition-all cursor-pointer"
              >
                <summary className="text-base sm:text-lg font-serif font-semibold text-charcoal-900 flex items-center justify-between list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-himalayan-700 rounded-sm">
                  <span>{faq.question}</span>
                  <span className="text-himalayan-700 text-xl transition-transform group-open:rotate-45 shrink-0 ml-4 font-sans font-normal" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed pt-3 border-t border-charcoal-900/5">
                  {faq.answer}
                </p>
              </details>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center pt-8 border-t border-charcoal-900/10 max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-serif text-charcoal-900 font-bold">
            Still Have a Question About The Mukteshwar Bungalow?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Our estate reservations team is readily available via WhatsApp and direct call to assist with date availability, group configurations, and special arrangements.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${propertyData.contact.phoneRaw || '+917078560516'}`}
              onClick={() => trackEvent('phone_click', { source: 'faq_page_bottom' })}
              className="inline-flex items-center gap-2 border border-charcoal-900/20 hover:border-charcoal-900 text-charcoal-900 px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-himalayan-700" />
              <span>Call: {propertyData.contact.phone || '+91 70785 60516'}</span>
            </a>
            <Button
              href={generateWhatsAppLink({ intent: 'general' })}
              isExternal
              variant="himalayan"
              size="sm"
              icon={<MessageCircle className="w-4 h-4 text-emerald-300" />}
            >
              WhatsApp +91 70785 60516
            </Button>
            <Button to="/contact" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
