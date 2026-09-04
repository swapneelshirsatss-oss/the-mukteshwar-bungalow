import React from 'react';
import { Shield, Clock, Volume2, Cigarette, AlertCircle, Check } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';

export const PoliciesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Policies & House Rules | The Mukteshwar Bungalow"
        description="Check-in/out timings, quiet hours, noise policy, smoking guidelines, and stay regulations at The Mukteshwar Bungalow in Mukteshwar."
        canonicalUrl="https://themukteshwarbungalow.in/policies"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 text-ivory-100 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="/images/exterior/villa-exterior-himalayan-architecture.jpg"
            alt="Policies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <Breadcrumbs
            dark
            items={[{ name: 'House Policies', url: '/policies' }]}
          />
          <span className="text-xs uppercase tracking-super-wide text-himalayan-400 font-semibold block">
            Guest Protocol
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory-100 leading-tight">
            House Policies & Safety
          </h1>
          <p className="text-base sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed">
            Our guidelines ensure a tranquil, respectful, and safe mountain environment for all resident guests.
          </p>
        </div>
      </section>

      {/* Policies Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {/* Check-In / Check-Out */}
        <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-4">
          <div className="flex items-center gap-2.5 text-himalayan-700 font-serif font-bold text-xl">
            <Clock className="w-5 h-5" />
            <h2>Check-In & Check-Out Timings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-charcoal-700 font-light">
            <div className="p-4 bg-ivory-50 rounded-sm border border-charcoal-900/5">
              <span className="font-semibold text-charcoal-900 block text-base font-serif">Standard Check-In</span>
              <span>2:00 PM onwards</span>
            </div>
            <div className="p-4 bg-ivory-50 rounded-sm border border-charcoal-900/5">
              <span className="font-semibold text-charcoal-900 block text-base font-serif">Standard Check-Out</span>
              <span>11:00 AM</span>
            </div>
          </div>
          <p className="text-xs text-charcoal-500 font-light pt-1">
            Early check-in and late check-out are subject to prior occupancy and must be coordinated with the estate manager.
          </p>
        </div>

        {/* House Rules */}
        <div className="bg-white p-6 sm:p-8 rounded-md border border-charcoal-900/10 shadow-editorial space-y-4">
          <div className="flex items-center gap-2.5 text-himalayan-700 font-serif font-bold text-xl">
            <Shield className="w-5 h-5" />
            <h2>House Guidelines & Quiet Hours</h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700 font-light">
            {propertyData.policies.houseRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
