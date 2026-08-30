import React, { useState } from 'react';
import { Users, Bed, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapacityCalculator: React.FC = () => {
  const [guests, setGuests] = useState(6);

  const getCapacityPlan = (count: number) => {
    if (count <= 2) {
      return {
        title: 'Couple or Solo Workcation Retreat',
        suites: ['The Himalayan Suite (or Suite of your choice)'],
        layout: '1 Master Bedroom with King Bed + En-Suite Bath + Full Access to Living Areas & Pool',
        badge: 'Private Suite Experience'
      };
    }
    if (count <= 4) {
      return {
        title: 'Small Family or 2 Couples',
        suites: ['The Himalayan Suite', 'The Imperial Suite'],
        layout: '2 Master Suites with 2 King Beds + 2 Private Bathrooms + Living Salons & Deck',
        badge: 'Spacious Multi-Suite Stay'
      };
    }
    if (count <= 6) {
      return {
        title: 'Standard 3 BHK Full Villa Takeover (Most Popular)',
        suites: ['The Himalayan Suite', 'The Imperial Suite', 'The Signature Himalayan'],
        layout: 'All 3 King Bedrooms + 3 Attached En-Suites + Private Pool + Veranda Lounge + Kitchen',
        badge: 'Complete 3 BHK Buyout'
      };
    }
    return {
      title: 'Extended Family or Group Gathering (Max 9 Guests)',
      suites: ['The Himalayan Suite', 'The Imperial Suite', 'The Signature Himalayan'],
      layout: 'All 3 Suites (6 Adults in King Beds) + Up to 3 Extra Rollaway Beds/Mattresses',
      badge: 'Full Villa + Extra Bedding'
    };
  };

  const plan = getCapacityPlan(guests);

  return (
    <div className="bg-white rounded-md shadow-editorial border border-charcoal-900/10 p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-super-wide text-himalayan-700 font-semibold block mb-1">
          Stay Configuration Planner
        </span>
        <h3 className="text-2xl font-serif text-charcoal-900">
          How many guests are traveling?
        </h3>
      </div>

      {/* Guest Selector Buttons */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => setGuests(num)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm font-sans font-semibold text-sm transition-all ${
              guests === num
                ? 'bg-himalayan-700 text-ivory-100 shadow-md scale-105'
                : 'bg-ivory-100 text-charcoal-900 hover:bg-ivory-200 border border-charcoal-900/10'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Recommended Configuration Card */}
      <div className="bg-ivory-50 rounded-sm p-6 border border-charcoal-900/10 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-himalayan-700">
            {plan.badge}
          </span>
          <span className="text-xs text-charcoal-600 font-medium">
            {guests} Guest{guests > 1 ? 's' : ''}
          </span>
        </div>

        <h4 className="text-xl font-serif font-bold text-charcoal-900">
          {plan.title}
        </h4>

        <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
          {plan.layout}
        </p>

        <div className="pt-2 border-t border-charcoal-900/10">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-2">
            Allocated Suites:
          </h5>
          <ul className="space-y-1.5 text-xs text-charcoal-700">
            {plan.suites.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to={`/book?adults=${guests}`}
          className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-sm transition-colors"
        >
          <span>Book for {guests} Guest{guests > 1 ? 's' : ''}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
