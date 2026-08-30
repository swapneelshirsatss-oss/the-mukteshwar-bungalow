import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions of Stay | The Mukteshwar Bungalow"
        description="Terms and conditions governing reservations, cancellations, security deposit, and guest conduct at The Mukteshwar Bungalow."
        canonicalUrl="https://themukteshwarbungalow.com/terms"
      />

      <section className="relative pt-32 pb-16 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <Breadcrumbs
            dark
            items={[{ name: 'Terms of Stay', url: '/terms' }]}
          />
          <h1 className="text-3xl sm:text-5xl font-serif text-ivory-100">
            Terms & Conditions of Stay
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200/70 font-light">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-12 rounded-md border border-charcoal-900/10 shadow-editorial space-y-6 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
          <h2 className="text-xl font-serif font-bold text-charcoal-900">1. Booking Confirmation & Advance Deposit</h2>
          <p>
            Reservations are confirmed upon receipt of the mutually agreed advance deposit. The balance tariff along with applicable security deposit is payable as per the terms specified during booking confirmation.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">2. Security Deposit & Property Inspection</h2>
          <p>
            A refundable security deposit may be collected upon check-in to cover potential property breakages or damage. This deposit is fully refunded upon checkout inspection following standard assessment.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">3. Guest Responsibility & Conduct</h2>
          <p>
            Guests are expected to treat the residence and its natural surroundings with care. Commercial loud DJ equipment, unauthorized parties, and disruptive noise during quiet hours (10:00 PM to 7:00 AM) are strictly prohibited.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">4. Cancellation & Rescheduling</h2>
          <p>
            Cancellation terms and refund eligibility vary according to the seasonal rate tier confirmed at the time of booking. Please review your reservation confirmation for specific dates.
          </p>
        </div>
      </section>
    </>
  );
};
