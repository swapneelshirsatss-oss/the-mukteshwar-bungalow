import React from 'react';
import { Star, ShieldCheck, Quote, MessageCircle, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ReviewCard, ReviewItem } from '../components/cards/ReviewCard';
import { Button } from '../components/common/Button';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { getBreadcrumbSchema, getLodgingBusinessSchema } from '../components/common/SchemaMarkup';

export const ReviewsPage: React.FC = () => {
  // Configured verified reviews store (empty/null safe until verified guest reviews are published)
  const verifiedReviews: ReviewItem[] = [];
  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Reviews', url: '/reviews' }]);

  return (
    <>
      <SEOHead
        title="Guest Reviews & Verified Feedback | The Mukteshwar Bungalow"
        description="Authentic guest experiences and verified stay reviews for The Mukteshwar Bungalow 3 BHK private villa in Mukteshwar, Uttarakhand."
        canonicalUrl="https://themukteshwarbungalow.in/reviews"
        schema={[lodgingSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg"
            alt="The Mukteshwar Bungalow Reviews"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'Reviews', url: '/reviews' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Verified Experiences
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Guest Reviews & Stories
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Real feedback and hospitality memories from travelers who have stayed at our private residence.
          </p>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          centered
          subtitle="Honest Hospitality"
          title="Direct Stay Feedback"
          description="We maintain authentic guest feedback from verified direct reservations."
        />

        {verifiedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {verifiedReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-md p-10 sm:p-16 border border-charcoal-900/10 shadow-editorial text-center max-w-2xl mx-auto space-y-4 my-8">
            <Quote className="w-10 h-10 text-charcoal-300 mx-auto" />
            <h3 className="text-2xl font-serif text-charcoal-900">
              Verified Guest Reviews Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed max-w-lg mx-auto">
              We never publish artificial or unverified testimonials. Real reviews and stay stories from our verified resident guests will appear here as they are authenticated.
            </p>
            <div className="pt-4">
              <a
                href={generateWhatsAppLink({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask the Host Any Questions on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button to="/book" variant="himalayan" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Reserve Your Stay
          </Button>
        </div>
      </section>
    </>
  );
};
