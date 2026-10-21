import React from 'react';
import { Star, ShieldCheck, Quote, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ReviewCard } from '../components/cards/ReviewCard';
import { Button } from '../components/common/Button';
import { verifiedGuestReviews, googleReviewStats, GOOGLE_REVIEW_COUNT } from '../data/reviewsData';
import { generateWhatsAppLink } from '../services/WhatsAppService';
import { getBreadcrumbSchema, getLodgingBusinessSchema } from '../components/common/SchemaMarkup';

export const ReviewsPage: React.FC = () => {
  const lodgingSchema = getLodgingBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Reviews', url: '/reviews' }]);

  return (
    <>
      <SEOHead
        title="Guest Reviews & Verified Feedback (5.0★) | The Mukteshwar Bungalow"
        description="Read authentic guest experiences and 5.0★ verified Google reviews for The Mukteshwar Bungalow 3 BHK private mountain villa in Kasialekh, Mukteshwar."
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
          <div className="inline-flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-ivory-100/20 text-xs tracking-widest uppercase text-ivory-100/90 shadow-sm">
            <span className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
              <strong className="font-semibold text-ivory-100">5.0★</strong>
            </span>
            <span className="opacity-40">•</span>
            <span>Google Business Profile Verified</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            Guest Reviews & Mountain Stories
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Unfiltered feedback and personal stay memories from families, travelers, and workcationers who have called our residence home.
          </p>
        </div>
      </section>

      {/* Google Business Profile Trust Banner */}
      <section className="bg-charcoal-900 text-ivory-100 py-8 border-b border-charcoal-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal-950/80 p-6 sm:p-8 rounded-md border border-ivory-100/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xl font-serif font-bold text-ivory-100">
                  {googleReviewStats.score.toFixed(1)} / 5.0
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ivory-200/70 font-light">
                Verified rating on <strong className="text-ivory-100 font-medium">Google Maps</strong> across {GOOGLE_REVIEW_COUNT}+ resident guest ratings.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={googleReviewStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-himalayan-700 hover:bg-himalayan-600 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={generateWhatsAppLink({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider border border-ivory-100/10 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Message Host Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          centered
          subtitle="Authentic Stays"
          title="Direct Feedback from Verified Resident Guests"
          description="Every stay at The Mukteshwar Bungalow is personal. Here is what families and travelers share about our mountain suites, private veranda, and home-style pure-veg dining."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {verifiedGuestReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Guest Note & Direct Booking CTA */}
        <div className="mt-16 max-w-3xl mx-auto bg-ivory-50 p-8 rounded-md border border-charcoal-900/10 text-center space-y-4">
          <Quote className="w-8 h-8 text-himalayan-700/40 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900">
            Have You Stayed With Us?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed max-w-xl mx-auto">
            Your personal impressions help future travelers discover quiet mountain living in Kasialekh. We invite you to share your feedback directly on our Google Business Profile.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleReviewStats.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-himalayan-700 hover:text-himalayan-800"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-charcoal-300">•</span>
            <Button to="/book" variant="himalayan" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Reserve Your Stay
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

