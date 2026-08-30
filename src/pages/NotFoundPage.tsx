import React from 'react';
import { Home, Compass, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | The Mukteshwar Bungalow"
        description="The requested page could not be found. Return to The Mukteshwar Bungalow homepage."
      />

      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-xs uppercase tracking-super-wide font-semibold text-himalayan-700 block">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-charcoal-900">
            Himalayan Ridge Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let us guide you back to the warmth of the bungalow.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" variant="primary" icon={<Home className="w-4 h-4" />}>
              Return Home
            </Button>
            <Button to="/rooms" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Suites
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
