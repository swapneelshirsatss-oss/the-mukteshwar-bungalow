import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { propertyData } from '../data/propertyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | The Mukteshwar Bungalow"
        description="Privacy policy and data protection disclosures for guests booking at The Mukteshwar Bungalow."
        canonicalUrl="https://themukteshwarbungalow.in/privacy-policy"
      />

      <section className="relative pt-32 pb-16 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <Breadcrumbs
            dark
            items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]}
          />
          <h1 className="text-3xl sm:text-5xl font-serif text-ivory-100">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200/70 font-light">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-12 rounded-md border border-charcoal-900/10 shadow-editorial space-y-6 text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
          <h2 className="text-xl font-serif font-bold text-charcoal-900">1. Information We Collect</h2>
          <p>
            When you inquire about or book a stay at The Mukteshwar Bungalow, we collect personal information necessary to facilitate your reservation, including your full name, email address, phone number, guest count, and any specific stay preferences.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">2. How We Use Your Information</h2>
          <p>
            Your information is used solely to coordinate your stay, communicate check-in procedures, arrange on-site hospitality, and send confirmation details. We do not sell, rent, or trade your personal data to third parties.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">3. Government Identity Verification</h2>
          <p>
            As mandated by local Uttarakhand state hospitality regulations, all adult guests must present valid government photo identification (such as Aadhaar Card, Passport, or Voter ID) upon arrival.
          </p>

          <h2 className="text-xl font-serif font-bold text-charcoal-900">4. Contact & Inquiries</h2>
          <p>
            If you have questions regarding this privacy policy or your stored information, you may contact us at <a href={`mailto:${propertyData.contact.email || 'themukteshwarbungalow@gmail.com'}`} className="text-himalayan-700 underline">{propertyData.contact.email || 'themukteshwarbungalow@gmail.com'}</a>.
          </p>
        </div>
      </section>
    </>
  );
};
