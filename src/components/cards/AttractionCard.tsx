import React from 'react';
import { MapPin, Clock, Compass, ArrowRight, Check } from 'lucide-react';
import { AttractionItem } from '../../types';
import { Link } from 'react-router-dom';

interface AttractionCardProps {
  attraction: AttractionItem;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 border border-charcoal-900/10 flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
        <img
          src={attraction.image}
          alt={attraction.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-ivory-100 font-semibold border border-ivory-100/15">
          {attraction.category}
        </div>

        {attraction.approximateDistanceDisplay && (
          <div className="absolute bottom-4 left-4 bg-himalayan-700/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] uppercase tracking-wider text-ivory-100 font-semibold shadow-sm">
            {attraction.approximateDistanceDisplay}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-serif text-charcoal-900 group-hover:text-himalayan-700 transition-colors">
            {attraction.name}
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            {attraction.description}
          </p>

          {/* Highlights */}
          <div className="pt-2">
            <h4 className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-800 mb-2">
              Key Highlights:
            </h4>
            <ul className="space-y-1.5">
              {attraction.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-charcoal-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-charcoal-900/10 flex items-center justify-between">
          <div className="text-[11px] text-charcoal-500 font-light italic">
            Best: {attraction.bestTimeToVisit}
          </div>

          <Link
            to="/book"
            className="text-xs font-semibold uppercase tracking-wider text-himalayan-700 hover:text-himalayan-800 flex items-center gap-1"
          >
            <span>Stay Nearby</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
