import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export interface ReviewItem {
  id: string;
  guestName: string;
  location: string;
  stayDate: string;
  rating: number;
  review: string;
  verified: boolean;
  suiteStayed?: string;
}

interface ReviewCardProps {
  review?: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  if (!review) {
    return (
      <div className="bg-white rounded-md p-8 border border-charcoal-900/10 shadow-subtle text-center">
        <Quote className="w-8 h-8 text-charcoal-300 mx-auto mb-3" />
        <p className="text-sm font-serif italic text-charcoal-600 mb-2">
          "Verified guest reviews and host experiences will appear here following authenticated resident stays."
        </p>
        <span className="text-[11px] uppercase tracking-wider text-charcoal-400 font-medium block">
          Direct Booking Review Aggregator
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md p-6 sm:p-8 border border-charcoal-900/10 shadow-editorial flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Rating Stars & Verified Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>

          {review.verified && (
            <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Stay</span>
            </div>
          )}
        </div>

        {/* Review text */}
        <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed italic">
          "{review.review}"
        </p>
      </div>

      {/* Guest Details */}
      <div className="pt-4 border-t border-charcoal-900/10 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-serif font-bold text-charcoal-900 text-sm">
            {review.guestName}
          </h4>
          <p className="text-charcoal-500 text-[11px] font-light">
            {review.location} • {review.stayDate}
          </p>
        </div>

        {review.suiteStayed && (
          <span className="text-[10px] uppercase tracking-wider text-himalayan-700 font-semibold bg-himalayan-50 px-2 py-1 rounded-sm">
            {review.suiteStayed}
          </span>
        )}
      </div>
    </div>
  );
};
